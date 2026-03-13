---
title: "Input"
description: "Users can click the input field to activate it and start typing. The mouse pointer changes to a text cursor (I-beam) when hovering over the input field."
category: "component"
slug: "input--accessibility"
status: "published"
lastModified: "2026-03-11"
---

## Interactions

### Mouse

Users can click the input field to activate it and start typing. The mouse pointer changes to a text cursor (I-beam) when hovering over the input field.

### Keyboard

- **Tab**: Moves the focus to the input field.
- **Shift + Tab**: Moves the focus to the previous focusable element.
- **Enter**: Submits a form if used within a form context.
- **Arrow Keys**: Navigate through text within the input field.


**Tab**: Moves the focus to the input field.

**Shift + Tab**: Moves the focus to the previous focusable element.

**Enter**: Submits a form if used within a form context.

**Arrow Keys**: Navigate through text within the input field.

### Other

- **Screen Readers**: Input fields should be paired with meaningful labels that are read aloud when focused.
- **Speech Recognition Software**: Users can activate the input field using voice commands and dictate text.
- **Braille Displays**: Input fields are represented on refreshable braille displays with labels and content.


**Screen Readers**: Input fields should be paired with meaningful labels that are read aloud when focused.

**Speech Recognition Software**: Users can activate the input field using voice commands and dictate text.

**Braille Displays**: Input fields are represented on refreshable braille displays with labels and content.

## Design Considerations

- Ensure that each input field has a clear and descriptive label that helps users understand the type of information required.
- Don’t rely solely on placeholder text for guidance, as it disappears when users start typing. Always pair with a label.


Ensure that each input field has a clear and descriptive label that helps users understand the type of information required.

Don’t rely solely on placeholder text for guidance, as it disappears when users start typing. Always pair with a label.

## Development Considerations

- To maintain the flow of navigation, ensure that tab order follows a logical sequence.
- Use appropriate ARIA attributes (`aria-required`, `aria-invalid`, `aria-describedby`) to convey important states and instructions.
- Ensure input fields are accessible by using proper `aria-label` or `aria-labelledby` attributes for screen readers.
- Implement validation with informative error messages that are read aloud by screen readers using `aria-live` or similar techniques.
- To hide a label from view and make it available to assistive technology, use the `label-hidden` variant.


To maintain the flow of navigation, ensure that tab order follows a logical sequence.

Use appropriate ARIA attributes (`aria-required`, `aria-invalid`, `aria-describedby`) to convey important states and instructions.

Ensure input fields are accessible by using proper `aria-label` or `aria-labelledby` attributes for screen readers.

Implement validation with informative error messages that are read aloud by screen readers using `aria-live` or similar techniques.

To hide a label from view and make it available to assistive technology, use the `label-hidden` variant.

## Content Considerations

- Provide clear, concise, and actionable error messages that guide the user to resolve input issues.
- Include helper text that remains visible at all times for further clarification, not just when the user is interacting with the input field.
- Use simple language and avoid complex terms to make content more accessible.
- All input fields marked as required with an * must have an accompanying legend.**Example:** * denotes a required field


Provide clear, concise, and actionable error messages that guide the user to resolve input issues.

Include helper text that remains visible at all times for further clarification, not just when the user is interacting with the input field.

Use simple language and avoid complex terms to make content more accessible.

All input fields marked as required with an * must have an accompanying legend.

**Example:** * denotes a required field

## Internationalization

Ensure that date, time, and numerical formats are adaptable for different locales and that the input supports right-to-left (RTL) text where needed.
