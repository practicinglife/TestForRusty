using System.ComponentModel.DataAnnotations;

namespace IflyWebApp.Models
{
    /// <summary>
    /// Configuration model for application keys that should NOT be stored directly in config files
    /// </summary>
    public class KeyConfiguration
    {
        /// <summary>
        /// API Key for website generation service - should be loaded from secure storage
        /// </summary>
        public string? WebsiteGenerationApiKey { get; set; }

        /// <summary>
        /// Database connection string - should be loaded from secure storage
        /// </summary>
        public string? DatabaseConnectionString { get; set; }

        /// <summary>
        /// External service authentication token
        /// </summary>
        public string? ExternalServiceToken { get; set; }

        /// <summary>
        /// Application encryption key
        /// </summary>
        public string? EncryptionKey { get; set; }

        /// <summary>
        /// Validates that required keys are present
        /// </summary>
        public bool IsValid()
        {
            return !string.IsNullOrWhiteSpace(WebsiteGenerationApiKey) &&
                   !string.IsNullOrWhiteSpace(DatabaseConnectionString);
        }
    }
}