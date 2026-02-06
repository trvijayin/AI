# Skill: Web Capture & Visual Analysis

Expertise in using automated browser tools (Playwright) to capture, analyze, and document web interfaces for modernization and migration projects.

## Core Expertise

### 1. Browser Automation (Playwright)
- **State Management**: Handling cookies, and local storage to capture specific application states.
- **Dynamic Content rendering**: Dealing with lazy-loaded images, AJAX-driven UI components, and SPAs.
- **Viewport Manipulation**: Capturing responsive designs across multiple breakpoints.

### 2. Visual Documentation
- **Component Isolation**: Mapping visual areas to potential React components.
- **Visual Parity**: Comparing legacy ASP outputs with modern React implementations.
- **Asset Identification**: Identifying brand-specific styles (colors, layout) from screenshots.

## Capture Workflow

### Phase 1: Preparation
1. Identify the target URL.
2. Determine required viewport size and device emulation.
3. Identify any pop-ups or banners that need to be cleared.

### Phase 2: Execution
1. Trigger the `/capture-screenshot` command.
2. Monitor network activity to ensure all assets (fonts, images) are loaded.
3. Capture the full height of the page to see the complete layout.

### Phase 3: Post-Capture Analysis
1. Analyze the resulting image for layout patterns.
2. Identify repetitive UI elements for componentization.
3. Note color schemes and typography for CSS theme development.

## Best Practices
- **Network Idle**: Always wait for `networkidle` to ensure external resources are loaded.
- **Consistent Resolution**: Use a standard 1280x720 or 1440x900 viewport for desktop analysis.
- **Named Screenshots**: Use descriptive filenames that include the page name and date.
