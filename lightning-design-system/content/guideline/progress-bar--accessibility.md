---
title: "Progress Bar"
slug: "progress-bar--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/70ad36-progress-bar/b/90c8bb"
extractedAt: "2026-02-21T21:51:45.117Z"
---

## Interactions

### Mouse

- Users can visually track progress as the progress bar fills.
- No direct mouse interaction is typically required for progress bars, as they primarily serve a display function.
### Keyboard

- Progress Bars are generally not interactive elements.
- If the Progress Bar includes optional labels or step indicators, developers must ensure users can navigate through these steps using the `tab` key.
- When combined with actionable elements (e.g., buttons for navigating steps), standard keyboard navigation must be implemented (`tab`, `shift+tab`, `enter`, `space`, arrow keys).
### Other

- **Screenreaders:**The Progress Bar must include proper ARIA roles (`role="progressbar"`) and `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes to convey progress information. If labels are included, these must be accessible through `aria-labelledby`.
-**Magnifiers**: Ensure progress text or percentages are clear and readable when magnified.
- **Alternative Input Devices**: Progress Bars do not require direct interaction, but step navigation (if available) should work with speech recognition or other input devices.
- **Braille Displays**: The current progress should be output as text, using attributes like `aria-valuetext`.
- **Text labels:**Ensure that progress labels are included to provide additional information, such as percentages or numeric values, unless all segments of the progress bar meet a 3:1 contrast ratio against each other and the background.
## Design Considerations

-**Visibility**: The Progress Bar is visually distinct, with clear contrast against the background.
- **Clarity**: Include a visible or text-based indication of progress, such as percentages or milestones.
- **Step Labels**: If using labels, make sure they are evenly spaced and legible, and include visual cues for completed and upcoming steps.
- **Color Contrast**

Follow WCAG contrast standards (minimum 3:1) for the progress indicator segments and background.Text used for labels meet a minimum of 4.5:1.
- Avoid solely color-based indicators. Add patterns, shapes, or text to indicate progress for users with color blindness.

Visibility: The Progress Bar is visually distinct, with clear contrast against the background.

Clarity: Include a visible or text-based indication of progress, such as percentages or milestones.

Step Labels: If using labels, make sure they are evenly spaced and legible, and include visual cues for completed and upcoming steps.

Color Contrast

- Follow WCAG contrast standards (minimum 3:1) for the progress indicator segments and background.Text used for labels meet a minimum of 4.5:1.
- Avoid solely color-based indicators. Add patterns, shapes, or text to indicate progress for users with color blindness.
## Development Considerations

- Use native `<progress>` elements when possible or include ARIA attributes (`role="progressbar"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`) for custom implementations.
- Include dynamic updates for screen readers to announce changes in progress.
- Ensure the component adapts to different screen sizes and orientations.
- Implement keyboard accessibility for any actionable elements associated with the Progress Bar (e.g., step controls).
- Use `aria-label` or `aria-labelledby` to describe the purpose of the Progress Bar clearly.

Use native  elements when possible or include ARIA attributes (role="progressbar", aria-valuemin, aria-valuemax, aria-valuenow) for custom implementations.

Include dynamic updates for screen readers to announce changes in progress.

Ensure the component adapts to different screen sizes and orientations.

Implement keyboard accessibility for any actionable elements associated with the Progress Bar (e.g., step controls).

Use aria-label or aria-labelledby to describe the purpose of the Progress Bar clearly.

## Content Considerations

- Use concise, descriptive text for any labels or milestones.
- Provide text updates (e.g., "50% completed") for users relying on assistive technologies.
- Progress descriptions should be clear and easy to understand.