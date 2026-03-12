---
title: "Form Element - Accessibility"
slug: "form-element--accessibility"
category: "component"
parent: "form-element"
order: 0
---

We understand the importance of a keyboard operation that enhances the experience for blind users and others who rely on keyboard navigation. Lightning also integrates numerous other accessibility considerations, some outlined below.

## Interactions

### Mouse

Users can interact with the Form Element using standard mouse actions:

- **Hover**: Provides visual feedback such as highlighting the field or showing a tooltip (e.g., helptext or validation messages).
- **Click**: Activates the field, enabling text entry or selection for dropdowns, checkboxes, and radio buttons.

### Keyboard

The Form Element is fully navigable and operable via the keyboard. The following table outlines common keyboard commands:


| **Key** | **Action** |
| --- | --- |
| **Tab** | Move focus to the next interactive element. |
| **Shift + Tab** | Move focus to the previous interactive element. |
| **Enter** or **Space** | Activate buttons or toggle elements (e.g., checkboxes). |
| **Arrow Keys** | Navigate between options in dropdowns, radio buttons, or multi-option elements. |
| **Escape** | Close open dropdowns or dialogs without making a selection. |

### Other

#### Screen Readers:

- Ensure the component has correctly associated labels using the aria-labelledby or aria-label attributes.
- Validation messages should be linked to fields using aria-describedby to inform users about errors or guidance.

#### Assistive Devices:

- Ensure the component works with alternative input devices like sip-and-puff systems or speech recognition tools by relying on semantic HTML and ARIA attributes.

## Behavior

### Loading

Form Elements should indicate when data is loading or being processed, often shown with a spinner or similar icon.

### Scrolling

If a form is long, ensure that fields are easy to scroll through without disrupting the experience.

### Responsive

Form Elements should resize based on screen size, maintaining usability across devices.

Ensure that validation rules are clear, user-friendly, and don’t hinder the input experience.

## Design Considerations

- Use clearly associated labels for every field. The for attribute on labels should match the `id` of the input.
- Use `fieldset` and legend for related fields to provide context for screen readers.
- Ensure sufficient color contrast for all text, borders, and states (e.g., hover, focus, disabled).
- Validation Feedback:

Validation errors should be announced to screen readers.
- Use clear and positive phrasing for error messages.
- Help Text:

Use tooltips or supporting text to provide additional guidance without cluttering the UI.
- Ensure helptext tooltips are accessible via keyboard and screen readers.

- Validation errors should be announced to screen readers.
- Use clear and positive phrasing for error messages.

- Use tooltips or supporting text to provide additional guidance without cluttering the UI.
- Ensure helptext tooltips are accessible via keyboard and screen readers.

## Development Considerations

**ARIA Attributes**:

- Add `aria-required` for mandatory fields.
- Use `aria-invalid` for fields with validation errors.

**Semantic HTML**:

- Use `<label>`, `<input>`, `<select>`, `<textarea>`, and other native HTML elements to ensure inherent accessibility.

Use `<label>`, `<input>`, `<select>`, `<textarea>`, and other native HTML elements to ensure inherent accessibility.

**Keyboard Navigation**:

- Verify focus order aligns with the logical structure of the form.
- Ensure focus indicators are visible.

**Error Handling**:

- Programmatically set focus on the first invalid field when the form is submitted with errors.

**Responsiveness**:

- Test Form Elements across devices and screen sizes to ensure consistent usability.

## Content Considerations

- Use concise and descriptive text for labels, supporting text, helptext, placeholder text, and error messages. Avoid jargon and ambiguous terms.

- Provide examples or formats for complex input types (e.g., "Enter date as MM/DD/YYYY").
- Ensure text content can be translated easily for international users.
- All form elements marked as required with an * must have an accompanying legend.

**Example:** * denotes a required field

**Example:** * denotes a required field

## Accessibility Labels

Each Form Element must have an associated label for accessibility. Use the following:

- Labels must have the `for` attribute applied, and its value must match the `id` of the associated form element, like `<input id="unique-id-of-input" />`. This association ensures that assistive technology informs users about what information to enter where.
- Use `aria-describedby` for helptext guidance or error messages.

Labels must have the `for` attribute applied, and its value must match the `id` of the associated form element, like `<input id="unique-id-of-input" />`. This association ensures that assistive technology informs users about what information to enter where.

## Internationalization

Ensure support for Right-to-Left (RTL) languages where applicable.

Allow for localization of:

- Date and time formats
- Numeric formats
- Validation messages and helptext
