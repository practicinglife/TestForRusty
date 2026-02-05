using IflyWebApp.Models;
using System.Text.Json;

namespace IflyWebApp.Services
{
    /// <summary>
    /// Interface for secure key management
    /// </summary>
    public interface IKeyManagementService
    {
        Task<KeyConfiguration> LoadKeysAsync();
        Task SaveKeysAsync(KeyConfiguration keys);
        Task<bool> ValidateKeysAsync();
    }

    /// <summary>
    /// Secure key management service that stores keys on disk in encrypted format
    /// This is a safer alternative to storing sensitive data directly in web.config
    /// </summary>
    public class FileBasedKeyManagementService : IKeyManagementService
    {
        private readonly string _keyFilePath;
        private readonly ILogger<FileBasedKeyManagementService> _logger;
        private readonly string _encryptionKey;

        public FileBasedKeyManagementService(IConfiguration configuration, ILogger<FileBasedKeyManagementService> logger)
        {
            _logger = logger;
            
            // Store keys in a secure location outside of web root
            var dataDirectory = configuration["KeyStorage:DataDirectory"] ?? 
                               Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "IflyApp");
            
            Directory.CreateDirectory(dataDirectory);
            _keyFilePath = Path.Combine(dataDirectory, "secure-keys.json");
            
            // Use a basic encryption key (in production, this should come from a more secure source)
            _encryptionKey = configuration["KeyStorage:EncryptionKey"] ?? 
                            Environment.GetEnvironmentVariable("IFLY_ENCRYPTION_KEY") ?? 
                            "DefaultKey123!"; // WARNING: Never use this in production
            
            _logger.LogInformation("Key storage initialized at: {KeyFilePath}", _keyFilePath);
        }

        public async Task<KeyConfiguration> LoadKeysAsync()
        {
            try
            {
                if (!File.Exists(_keyFilePath))
                {
                    _logger.LogWarning("Key file does not exist, creating default configuration");
                    return await CreateDefaultConfigurationAsync();
                }

                var encryptedContent = await File.ReadAllTextAsync(_keyFilePath);
                var decryptedContent = SimpleDecrypt(encryptedContent);
                
                var keys = JsonSerializer.Deserialize<KeyConfiguration>(decryptedContent) ?? new KeyConfiguration();
                
                _logger.LogInformation("Keys loaded successfully from secure storage");
                return keys;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to load keys from secure storage");
                return new KeyConfiguration();
            }
        }

        public async Task SaveKeysAsync(KeyConfiguration keys)
        {
            try
            {
                var jsonContent = JsonSerializer.Serialize(keys, new JsonSerializerOptions { WriteIndented = true });
                var encryptedContent = SimpleEncrypt(jsonContent);
                
                await File.WriteAllTextAsync(_keyFilePath, encryptedContent);
                _logger.LogInformation("Keys saved successfully to secure storage");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to save keys to secure storage");
                throw;
            }
        }

        public async Task<bool> ValidateKeysAsync()
        {
            var keys = await LoadKeysAsync();
            return keys.IsValid();
        }

        private async Task<KeyConfiguration> CreateDefaultConfigurationAsync()
        {
            var defaultConfig = new KeyConfiguration
            {
                WebsiteGenerationApiKey = Environment.GetEnvironmentVariable("WEBSITE_API_KEY") ?? 
                                         "REPLACE_WITH_ACTUAL_API_KEY",
                DatabaseConnectionString = Environment.GetEnvironmentVariable("DATABASE_CONNECTION") ?? 
                                         "REPLACE_WITH_ACTUAL_CONNECTION_STRING",
                ExternalServiceToken = Environment.GetEnvironmentVariable("EXTERNAL_SERVICE_TOKEN") ?? 
                                     "REPLACE_WITH_ACTUAL_TOKEN",
                EncryptionKey = Environment.GetEnvironmentVariable("APP_ENCRYPTION_KEY") ?? 
                              Guid.NewGuid().ToString()
            };

            await SaveKeysAsync(defaultConfig);
            return defaultConfig;
        }

        /// <summary>
        /// Simple encryption (for demo purposes - use proper encryption in production)
        /// </summary>
        private string SimpleEncrypt(string text)
        {
            var data = System.Text.Encoding.UTF8.GetBytes(text);
            var key = System.Text.Encoding.UTF8.GetBytes(_encryptionKey.PadRight(32).Substring(0, 32));
            
            // Simple XOR encryption (NOT suitable for production)
            for (int i = 0; i < data.Length; i++)
            {
                data[i] = (byte)(data[i] ^ key[i % key.Length]);
            }
            
            return Convert.ToBase64String(data);
        }

        /// <summary>
        /// Simple decryption (for demo purposes - use proper encryption in production)
        /// </summary>
        private string SimpleDecrypt(string encryptedText)
        {
            var data = Convert.FromBase64String(encryptedText);
            var key = System.Text.Encoding.UTF8.GetBytes(_encryptionKey.PadRight(32).Substring(0, 32));
            
            // Simple XOR decryption (NOT suitable for production)
            for (int i = 0; i < data.Length; i++)
            {
                data[i] = (byte)(data[i] ^ key[i % key.Length]);
            }
            
            return System.Text.Encoding.UTF8.GetString(data);
        }
    }
}