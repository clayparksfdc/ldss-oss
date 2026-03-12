---
title: "Slider"
slug: "slider--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/0176bc-slider/b/13dd46"
extractedAt: "2026-02-21T21:54:04.601Z"
---

## Interactions

### Mouse

- Users can drag the handle to adjust the value.

Users can drag the handle to adjust the value.

### Keyboard

- **Tab** moves focus to the handle.
- While focused, **Left**, **Right**, **Up**, and **Down** keys increment/decrement the slider.
### Other

- Screen readers should announce current value and range.

Screen readers should announce current value and range.

## Design Considerations

- Ensure sufficient contrast between track and handle.
- Provide clear focus indicators for keyboard users.
## Development Considerations

- Implement `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes.
- Ensure the component is navigable via keyboard.
- Use `aria-labelledby` for clear descriptions.

Implement aria-valuenow, aria-valuemin, and aria-valuemax attributes.

Ensure the component is navigable via keyboard.

Use aria-labelledby for clear descriptions.

## Content Considerations

- Use concise labels and instructions.

Use concise labels and instructions.

## Internationalization

- Ensure proper formatting for different number formats and RTL languages.

Ensure proper formatting for different number formats and RTL languages.

