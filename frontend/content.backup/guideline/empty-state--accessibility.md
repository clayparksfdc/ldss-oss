---
title: "Empty State"
slug: "empty-state--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/09f001-empty-state/b/74d5d4"
extractedAt: "2026-02-21T21:49:08.243Z"
---

## Interactions

### Mouse

- **Hover Behavior: **Buttons retain their existing hover behavior within empty state. No other elements should receive focus or interaction.

Hover Behavior: Buttons retain their existing hover behavior within empty state. No other elements should receive focus or interaction.

### Keyboard

- **Tab**: Moves focus between interactive elements (buttons).
- **Shift + Tab**: Moves focus to the previously selected element.
- **Enter/Spacebar**: Opens selected element.

Tab: Moves focus between interactive elements (buttons).

Shift + Tab: Moves focus to the previously selected element.

Enter/Spacebar: Opens selected element.

### Other

- **Screen Readers: **Screen readers should not announce illustrations, instead relying on the accompanying descriptive text.
- **Magnification Tools: **The illustration primitive within Empty State uses svg files to remain visually distinct and scalable images without pixelation or distortion.

Screen Readers: Screen readers should not announce illustrations, instead relying on the accompanying descriptive text.

Magnification Tools: The illustration primitive within Empty State uses svg files to remain visually distinct and scalable images without pixelation or distortion.

## Design Considerations

- Illustrations are exempt from WCAG contrast ratio rules, as they are decorative.

Illustrations are exempt from WCAG contrast ratio rules, as they are decorative.

## Development Considerations

- The illustration primitive uses a null alt value.

The illustration primitive uses a null alt value.

## Content Considerations

- Vary the content within empty states on a single page to reduce redundancy for screen readers.
- Keep text short but meaningful (e.g., “Search” instead of “Search the database”).

Vary the content within empty states on a single page to reduce redundancy for screen readers.

Keep text short but meaningful (e.g., “Search” instead of “Search the database”).

