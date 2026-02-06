---
description: Capture a high-quality screenshot of a given webpage URL using Playwright
argument-hint: "<url> [filename]"
---

# /capture-screenshot - Capture Webpage Screenshot

Capture a screenshot of a specific URL to analyze UI/UX patterns, verify visual consistency, or document existing web interfaces.

## Usage

```bash
/capture-screenshot <url> [filename]
```

## Features

- **Full Page Capture**: Ability to take full-page screenshots.
- **Responsive Views**: Option to capture in different viewport sizes (mobile, tablet, desktop).
- **Wait For Load**: Automatically waits for network idle to ensure dynamic content is rendered.

## Workflow

1. **URL Validation**: Verify the provided URL is accessible.
2. **Browser Launch**: Start a headless browser instance via Playwright.
3. **Navigation**: Navigate to the target URL.
4. **Environment Setup**: Set standard viewport size (1280x720 by default).
5. **Content Loading**: Wait for the page to reach `networkidle` state.
6. **Capture**: Execute the screenshot capture (full page).
7. **Storage**: Save the screenshot as a PNG file in the workspace.

## Examples

### Example 1: Basic Screenshot
```bash
/capture-screenshot https://example.com
```

### Example 2: Custom Filename
```bash
/capture-screenshot https://google.com homepage-mockup.png
```

## Related Commands
- `/reverse-engineer` - Use screenshots to identify UI components during analysis.
- `/generate-plan` - Reference screenshots for component mapping.

## Notes
- Screenshots are saved as PNG files.
- The command uses Chromium for capturing.
- Complex pages with infinite scroll may require manual scrolling (handled by the skill logic).
