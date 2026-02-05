using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using IflyWebApp.Services;
using IflyWebApp.Models;
using Moq;

namespace IflyWebApp.Tests
{
    public class KeyManagementServiceTests
    {
        private readonly Mock<ILogger<FileBasedKeyManagementService>> _mockLogger;
        private readonly IConfiguration _configuration;

        public KeyManagementServiceTests()
        {
            _mockLogger = new Mock<ILogger<FileBasedKeyManagementService>>();
            
            // Create simple configuration for testing
            var configBuilder = new ConfigurationBuilder();
            _configuration = configBuilder.Build();
        }

        [Fact]
        public async Task LoadKeysAsync_WhenFileDoesNotExist_CreatesDefaultConfiguration()
        {
            // Arrange
            var service = new FileBasedKeyManagementService(_configuration, _mockLogger.Object);

            // Act
            var keys = await service.LoadKeysAsync();

            // Assert
            Assert.NotNull(keys);
            Assert.NotNull(keys.WebsiteGenerationApiKey);
            Assert.NotNull(keys.DatabaseConnectionString);
            Assert.NotNull(keys.EncryptionKey);
        }

        [Fact]
        public void KeyConfiguration_IsValid_WithRequiredKeys_ReturnsTrue()
        {
            // Arrange
            var keys = new KeyConfiguration
            {
                WebsiteGenerationApiKey = "api-key",
                DatabaseConnectionString = "connection-string"
            };

            // Act
            var isValid = keys.IsValid();

            // Assert
            Assert.True(isValid);
        }

        [Fact]
        public void KeyConfiguration_IsValid_WithMissingKeys_ReturnsFalse()
        {
            // Arrange
            var keys = new KeyConfiguration
            {
                WebsiteGenerationApiKey = "", // Missing required key
                DatabaseConnectionString = "connection-string"
            };

            // Act
            var isValid = keys.IsValid();

            // Assert
            Assert.False(isValid);
        }

        [Fact]
        public void KeyConfiguration_IsValid_WithNullKeys_ReturnsFalse()
        {
            // Arrange
            var keys = new KeyConfiguration(); // All keys are null

            // Act
            var isValid = keys.IsValid();

            // Assert
            Assert.False(isValid);
        }
    }
}