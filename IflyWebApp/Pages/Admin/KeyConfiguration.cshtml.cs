using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using IflyWebApp.Models;
using IflyWebApp.Services;

namespace IflyWebApp.Pages.Admin
{
    public class KeyConfigurationModel : PageModel
    {
        private readonly IKeyManagementService _keyManagement;
        private readonly ILogger<KeyConfigurationModel> _logger;

        [BindProperty]
        public KeyConfiguration KeyConfig { get; set; } = new();

        public string? Message { get; set; }
        public bool IsError { get; set; }

        public KeyConfigurationModel(IKeyManagementService keyManagement, ILogger<KeyConfigurationModel> logger)
        {
            _keyManagement = keyManagement;
            _logger = logger;
        }

        public async Task<IActionResult> OnGetAsync()
        {
            try
            {
                KeyConfig = await _keyManagement.LoadKeysAsync();
                return Page();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to load key configuration");
                Message = "Failed to load configuration. Please check the logs.";
                IsError = true;
                return Page();
            }
        }

        public async Task<IActionResult> OnPostAsync()
        {
            try
            {
                await _keyManagement.SaveKeysAsync(KeyConfig);
                Message = "Configuration saved successfully! Keys are stored securely on disk.";
                IsError = false;
                
                _logger.LogInformation("Key configuration updated successfully");
                return Page();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to save key configuration");
                Message = "Failed to save configuration. Please check the logs.";
                IsError = true;
                return Page();
            }
        }
    }
}