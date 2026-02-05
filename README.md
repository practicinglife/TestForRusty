# Ifly - Secure Website Generation

A demonstration ASP.NET Core application that solves the common problem of storing application keys securely, especially for website generation functionality.

## 🚨 Problem Solved

**The Issue:** Applications "crap out" when you put GUIDs/API keys directly in web.config files because:
- Configuration files are often included in source control
- Sensitive data gets exposed in logs and backups
- Config corruption breaks the entire application
- Security vulnerabilities from exposed credentials

**The Solution:** Secure key management with encrypted storage and proper separation of concerns.

## 🛡️ Security Features

- ✅ **Encrypted Key Storage**: Keys stored encrypted on disk, not in plain text config files
- ✅ **Environment Variable Support**: Load keys from environment variables for production
- ✅ **No Sensitive Data in Config**: Web.config and appsettings.json contain no secrets
- ✅ **Proper Error Handling**: Graceful degradation when keys are missing or invalid
- ✅ **Extensible Architecture**: Easy to add Azure Key Vault or other secure storage

## 🚀 Quick Start

1. **Clone and Run**:
   ```bash
   cd IflyWebApp
   dotnet run
   ```

2. **Configure Keys**:
   - Navigate to `/Admin/KeyConfiguration`
   - Enter your API keys securely
   - Keys are automatically encrypted and stored safely

3. **Generate Websites**:
   - Go to `/GenerateWebsite` 
   - Create websites using your securely stored keys
   - No sensitive data exposed in the process

## 🔧 Configuration Options

### Method 1: Environment Variables (Recommended for Production)
```bash
export WEBSITE_API_KEY="your-api-key-here"
export DATABASE_CONNECTION="your-connection-string"
export IFLY_ENCRYPTION_KEY="your-encryption-key"
```

### Method 2: Secure File Storage (Development)
- Keys stored in encrypted files outside web root
- Automatic encryption/decryption
- Safe for development environments

### Method 3: External Key Stores (Enterprise)
- Azure Key Vault integration (extensible)
- AWS Secrets Manager support (extensible)
- HashiCorp Vault compatibility (extensible)

## 📁 Project Structure

```
IflyWebApp/
├── Models/
│   └── KeyConfiguration.cs          # Key configuration model
├── Services/
│   ├── IKeyManagementService.cs     # Key management interface
│   ├── KeyManagementService.cs      # Secure key storage implementation
│   └── WebsiteGenerationService.cs  # Website generation with secure keys
├── Pages/
│   ├── Index.cshtml                 # Main landing page
│   ├── GenerateWebsite.cshtml       # Website generation interface
│   └── Admin/
│       └── KeyConfiguration.cshtml  # Key management interface
└── appsettings.json                 # Safe configuration (no secrets)
```

## 🔐 Key Management Service

The `FileBasedKeyManagementService` provides:
- **Encryption**: Keys encrypted before storage
- **Validation**: Ensures required keys are present
- **Fallback**: Loads from environment variables if files missing
- **Logging**: Proper audit trail without exposing sensitive data

## 🌐 Website Generation Service

The `WebsiteGenerationService` demonstrates:
- **Secure API Usage**: Keys loaded at runtime, not compile time
- **Error Handling**: Graceful failures when keys are missing
- **HTTP Client Configuration**: Proper authentication header management
- **Template System**: Extensible website generation

## 🎯 Best Practices Implemented

1. **Never Store Secrets in Code or Config Files**
2. **Use Encryption for Key Storage**
3. **Support Multiple Configuration Sources**
4. **Implement Proper Error Handling**
5. **Log Security Events (Without Exposing Data)**
6. **Validate Configuration at Startup**
7. **Use Dependency Injection for Testability**

## 🔄 Migration from Insecure Setup

If you currently have keys in web.config:

1. **Extract Keys**: Remove from web.config/appsettings.json
2. **Use Environment Variables**: Set keys as environment variables
3. **Update Code**: Use IConfiguration to load from environment
4. **Test Thoroughly**: Ensure no hardcoded references remain

## 🧪 Testing

```bash
# Run the application
dotnet run

# Test key configuration
curl -X POST http://localhost:5000/Admin/KeyConfiguration

# Test website generation
curl -X POST http://localhost:5000/GenerateWebsite
```

## 🔮 Future Enhancements

- Azure Key Vault integration
- AWS Secrets Manager support
- Kubernetes secrets integration
- HashiCorp Vault connector
- Certificate-based authentication
- Multi-tenant key isolation

## 📖 Related Documentation

- [ASP.NET Core Configuration](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/)
- [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/)
- [Environment Variables in .NET](https://docs.microsoft.com/en-us/dotnet/api/system.environment.getenvironmentvariable)
- [Secure Storage Best Practices](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)

---

**Note**: This implementation uses simple encryption for demonstration. In production, use industry-standard encryption libraries and proper key derivation functions.
