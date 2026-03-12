---
title: "Timepicker"
description: "Users can click the input field to open the dropdown."
category: "foundation"
slug: "timepicker--accessibility"
status: "published"
lastModified: "2026-03-11"
---

## Interactions

### Mouse

- Users can click the input field to open the dropdown.
- Dropdown options are selectable with a single click.
- Clicking outside the dropdown closes the menu.


Users can click the input field to open the dropdown.

Dropdown options are selectable with a single click.

Clicking outside the dropdown closes the menu.

### Keyboard

- **Tab** moves focus to the Timepicker.
- **Enter** opens or closes the dropdown.
- **Up** and **Down** navigate through time options in the dropdown.
- **Escape** closes the dropdown.
- Typing in the field allows direct input of time.


**Tab** moves focus to the Timepicker.

**Enter** opens or closes the dropdown.

**Up** and **Down** navigate through time options in the dropdown.

**Escape** closes the dropdown.

Typing in the field allows direct input of time.

### Other

- **Screen Readers**: The component is fully labeled with accessible names and ARIA attributes to announce its purpose and current value.
- **Magnifiers**: Labels and dropdown options are clear and scalable, ensuring compatibility with zoom levels.
- **Assistive Devices**: Compatibility with alternative input devices, such as speech recognition, to allow selecting dropdown options or entering time values.


**Screen Readers**: The component is fully labeled with accessible names and ARIA attributes to announce its purpose and current value.

**Magnifiers**: Labels and dropdown options are clear and scalable, ensuring compatibility with zoom levels.

**Assistive Devices**: Compatibility with alternative input devices, such as speech recognition, to allow selecting dropdown options or entering time values.

## Design Considerations

- Ensure clear focus states are visually evident for the input field and dropdown options.
- Allow sufficient spacing around the Timepicker for easy target selection.
- Avoid overly complex dropdown designs to minimize cognitive load.


Ensure clear focus states are visually evident for the input field and dropdown options.

Allow sufficient spacing around the Timepicker for easy target selection.

Avoid overly complex dropdown designs to minimize cognitive load.

## Development Considerations

- Add ARIA attributes (`aria-label`, `aria-expanded`, `aria-haspopup`) to announce the state and functionality of the Timepicker.
- Use semantic HTML for the input and dropdown (e.g., `<input>` and `<ul><li>`).
- Ensure keyboard focus is properly managed between the input field and dropdown.
- Provide validation feedback via assistive technology using ARIA live regions.
- Test the component with screen readers, keyboard-only navigation, and other assistive devices.


Add ARIA attributes (`aria-label`, `aria-expanded`, `aria-haspopup`) to announce the state and functionality of the Timepicker.

Use semantic HTML for the input and dropdown (e.g., `<input>` and `<ul><li>`).

Ensure keyboard focus is properly managed between the input field and dropdown.

Provide validation feedback via assistive technology using ARIA live regions.

Test the component with screen readers, keyboard-only navigation, and other assistive devices.

## Content Considerations

- Include meaningful labels for the input field (e.g., “Select a time”).
- Use placeholder text to provide guidance (e.g., “HH:MM AM/PM”).
- Provide concise and descriptive error messages when validation fails (e.g., “Please enter a valid time format”).


Include meaningful labels for the input field (e.g., “Select a time”).

Use placeholder text to provide guidance (e.g., “HH:MM AM/PM”).

Provide concise and descriptive error messages when validation fails (e.g., “Please enter a valid time format”).

## Internationalization

- The Timepicker supports both 12-hour and 24-hour formats, ensuring compatibility with global time standards.
- Localization of AM/PM indicators and time formats should be handled based on user locale settings.


The Timepicker supports both 12-hour and 24-hour formats, ensuring compatibility with global time standards.

Localization of AM/PM indicators and time formats should be handled based on user locale settings.
