using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using IflyWebApp.Services;

namespace IflyWebApp.Pages
{
    public class GenerateWebsiteModel : PageModel
    {
        private readonly IWebsiteGenerationService _websiteGeneration;
        private readonly ILogger<GenerateWebsiteModel> _logger;

        [BindProperty]
        public string Title { get; set; } = "";

        [BindProperty]
        public string WebsiteContent { get; set; } = "";

        [BindProperty]
        public string Template { get; set; } = "standard";

        [BindProperty]
        public string Theme { get; set; } = "light";

        public string? Message { get; set; }
        public bool IsError { get; set; }
        public bool IsConfigured { get; set; }
        public string? GeneratedWebsite { get; set; }

        public GenerateWebsiteModel(IWebsiteGenerationService websiteGeneration, ILogger<GenerateWebsiteModel> logger)
        {
            _websiteGeneration = websiteGeneration;
            _logger = logger;
        }

        public async Task<IActionResult> OnGetAsync()
        {
            IsConfigured = await _websiteGeneration.IsConfiguredAsync();
            
            if (!IsConfigured)
            {
                Message = "Website generation is not configured. Please set up your API keys first.";
                IsError = true;
            }

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            IsConfigured = await _websiteGeneration.IsConfiguredAsync();

            if (!IsConfigured)
            {
                Message = "Website generation is not configured. Please set up your API keys first.";
                IsError = true;
                return Page();
            }

            if (string.IsNullOrWhiteSpace(Title) || string.IsNullOrWhiteSpace(WebsiteContent))
            {
                Message = "Please provide both title and content for the website.";
                IsError = true;
                return Page();
            }

            try
            {
                var parameters = new Dictionary<string, string>
                {
                    ["title"] = Title,
                    ["content"] = WebsiteContent,
                    ["theme"] = Theme
                };

                GeneratedWebsite = await _websiteGeneration.GenerateWebsiteAsync(Template, parameters);
                Message = "Website generated successfully using securely stored API keys!";
                IsError = false;

                _logger.LogInformation("Website generated successfully for title: {Title}", Title);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to generate website");
                Message = "Failed to generate website. Please check the configuration and try again.";
                IsError = true;
            }

            return Page();
        }
    }
}