---
title: "Prompt · Lightning Design System 2"
slug: "prompt--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/925906-prompt/b/84fd89"
extractedAt: "2026-02-21T21:52:13.065Z"
---

## Interactions

### Mouse

- Users can interact with buttons or close the prompt by clicking on the confirmation button.
- Clicking outside the modal does not close the prompt to avoid accidental actions.

### Keyboard

- **Tab Key**: Moves focus between interactive elements within the modal in sequential order.
- **Shift + Tab**: Moves focus backward through interactive elements.
- **Enter**: Activates the currently focused button or link.
- **Escape**: Closes the modal.
- **Focus Trap**: When open, focus is trapped within the modal to prevent interaction with elements outside it.

### Other

- **Screen Readers:** Labels and roles are announced for each part (header, body, footer).
- **Braille Displays:** Content is structured for proper navigation and focus.

## Design Considerations

- Ensure prompts are visually distinguishable with clear text and high-contrast buttons.
- Maintain focus states on interactive elements.
- Use appropriate icons or visual cues in warning prompts.

## Development Considerations

- Define `aria-labelledby` and `aria-describedby` for header and body content.
- Implement focus management: initial focus on the primary button and return focus to the triggering element after closing.

## Content Considerations

- Provide clear and concise labels for buttons.
- Avoid ambiguous language; e.g., "Delete Record" instead of "Submit."