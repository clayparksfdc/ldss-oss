---
title: "Textarea"
slug: "textarea--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/11f590-textarea/b/74d5d4"
extractedAt: "2026-02-21T21:54:57.766Z"
---

## Interactions

### Mouse

- Users can click the textarea to activate it and start typing.
- If enabled, users can click and drag the resize handle to adjust the size of the textarea.
- The mouse pointer changes to a text cursor (I-beam) when hovering over the textarea.

Users can click the textarea to activate it and start typing.

If enabled, users can click and drag the resize handle to adjust the size of the textarea.

The mouse pointer changes to a text cursor (I-beam) when hovering over the textarea.

### Keyboard

- **Tab:** Moves the focus to the textarea.
- **Shift + Tab:** Moves the focus to the previous focusable element.
- **Enter:** Submits a form if used within a form context.
- **Arrow Keys:** Navigate through text within the textarea.

Tab: Moves the focus to the textarea.

Shift + Tab: Moves the focus to the previous focusable element.

Enter: Submits a form if used within a form context.

Arrow Keys: Navigate through text within the textarea.

### Other

- **Screen Readers:** The textarea announces its label, character limits (if applicable), and error state. Ensure ARIA attributes are correctly set for labels and validation messages.
- **Speech Recognition Software:** Users can activate the textarea using voice commands and dictate text.
- **Braille Displays:** textarea are represented on refreshable braille displays with labels and content.

Screen Readers: The textarea announces its label, character limits (if applicable), and error state. Ensure ARIA attributes are correctly set for labels and validation messages.

Speech Recognition Software: Users can activate the textarea using voice commands and dictate text.

Braille Displays: textarea are represented on refreshable braille displays with labels and content.

## Design Considerations

- Ensure that each textarea has a clear and descriptive label that helps users understand the type of information required.
- Don’t rely solely on placeholder text for guidance, as it disappears when users start typing.
- Always pair textareas with a label.
- If character limits are included, ensure the counter updates dynamically as users type.

Ensure that each textarea has a clear and descriptive label that helps users understand the type of information required.

Don’t rely solely on placeholder text for guidance, as it disappears when users start typing.

Always pair textareas with a label.

If character limits are included, ensure the counter updates dynamically as users type.

## Development Considerations

- To maintain the flow of navigation, ensure that tab order follows a logical sequence.
- Use appropriate ARIA attributes (`aria-required`, `aria-invalid`, `aria-describedby`) to convey important states and instructions.
- Ensure textareas are accessible by using proper `aria-label` or `aria-labelledby` attributes for screen readers.
- Implement validation with informative error messages that are read aloud by screen readers using `aria-live` or similar techniques.

To maintain the flow of navigation, ensure that tab order follows a logical sequence.

Use appropriate ARIA attributes (aria-required, aria-invalid, aria-describedby) to convey important states and instructions.

Ensure textareas are accessible by using proper aria-label or aria-labelledby attributes for screen readers.

Implement validation with informative error messages that are read aloud by screen readers using aria-live or similar techniques.

## Content Considerations

- Provide clear, concise, and actionable error messages that guide the user to resolve input issues.
- Include supporting text that remains visible at all times, not just when the user is interacting with the input field.
- Use simple language and avoid complex terms to make content more accessible.
- All form elements marked as required with an * must have an accompanying legend.

**Example:** * denotes a required field

Provide clear, concise, and actionable error messages that guide the user to resolve input issues.

Include supporting text that remains visible at all times, not just when the user is interacting with the input field.

Use simple language and avoid complex terms to make content more accessible.

All form elements marked as required with an * must have an accompanying legend.

Example: * denotes a required field

## Accessibility Labels

ARIA Attributes:

- `aria-labelledby`: Associates the label with the Textarea.
- `aria-describedby`: Links to help text or error messages.
- `aria-invalid`: Indicates whether the input is invalid.

aria-labelledby: Associates the label with the Textarea.

aria-describedby: Links to help text or error messages.

aria-invalid: Indicates whether the input is invalid.

## Internationalization

- Textarea supports Unicode, allowing users to enter content in any supported language.
- Right-to-left (RTL) languages should be tested to ensure proper alignment and mirroring.
- Error messages and placeholder text must be localized.

Textarea supports Unicode, allowing users to enter content in any supported language.

Right-to-left (RTL) languages should be tested to ensure proper alignment and mirroring.

Error messages and placeholder text must be localized.

