---
title: "Select · Lightning Design System 2"
slug: "select--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/60fa86-select/b/62ec79"
extractedAt: "2026-02-21T21:53:50.096Z"
---

## Interactions

### Mouse

- Users can click on the Select component to open the dropdown.
- Clicking an option selects it and closes the dropdown.
- Clicking outside the dropdown closes it without making a selection.
- If the Select has a clear button, clicking it resets the selection.

### Keyboard

- **Tab** moves focus to the Select component.
- **Enter** or **Space** opens the dropdown when focused.
- **Up** or **Down** navigate through options when the dropdown is open.
- **Esc** closes the dropdown without selecting an option.
- **Enter** selects the highlighted option and closes the dropdown.
- **Home** moves focus to the first option.
- **End** moves focus to the last option.
- Typing characters filters options based on the typed input.

### Other

- Screen readers announce the Select label, current selection, and the total number of options.
- Voice recognition software can activate the dropdown and select an option using commands like "Select [option name]."
- Alternative input devices (such as sip-and-puff or switch devices) can navigate through options using the keyboard interactions outlined above.

## Design Considerations

- Ensure sufficient color contrast between text, background, and borders.
- Provide a visible focus state for keyboard navigation.
- Avoid relying solely on color to convey state changes (e.g., disabled, error).
- Label the Select component clearly to provide context.
- Minimize the number of options where possible to prevent cognitive overload.

## Development Considerations

- Use the `aria-labelledby` or `aria-label` attributes to associate the Select with a descriptive label.
- `aria-expanded` should be true when the dropdown is open and false when closed.
- `aria-activedescendant` should reference the currently focused option.
- Implement `role="listbox"` for the dropdown and `role="option"` for each item.
- Support `aria-selected` for indicating the currently chosen option.
- Maintain expected keyboard behavior for navigation and selection.
- Ensure the Select component works with high contrast mode and zoomed interfaces.

## Content Considerations

- Avoid placeholder text as the sole method of instruction — use a visible label.
- Keep option labels concise and descriptive.
- Use sentence case for consistency and readability.
- All form elements marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

Avoid placeholder text as the sole method of instruction — use a visible label.

Keep option labels concise and descriptive.

Use sentence case for consistency and readability.

All form elements marked as required with an * must have an accompanying legend.

**Example:** * denotes a required field

## Internationalization

- Supports right-to-left (RTL) languages automatically.
- Ensure localized option labels are properly translated.
- Option sorting and filtering should accommodate different language conventions.
- No additional internationalization considerations noted beyond standard practices.