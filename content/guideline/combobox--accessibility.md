---
title: "Combobox · Lightning Design System 2"
slug: "combobox--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/31c42a-combobox/b/74d5d4"
extractedAt: "2026-02-21T21:47:29.215Z"
---

## Interactions

### Mouse

- Users can click the input field to focus and display the listbox.
- Clicking an option selects it and closes the listbox.
- Clicking outside the component dismisses the listbox.

### Keyboard

**Keyboard Commands**


| **Action** | **Key Combination** | **Description** |
| --- | --- | --- |
| Open listbox | Enter or Down Arrow | Expands the listbox menu to show available options. |
| Close listbox | Esc | Closes the listbox and clears any selection made. |
| Navigate options | Up Arrow/Down Arrow | Moves focus up or down the list of options. |
| Select an option | Enter or Tab | Selects the highlighted option and closes the listbox. |
| Clear selection | Backspace | Removes the current selection from the input field, as well as typed alpha-numeric characters in the input. |

**Action**

**Key Combination**

**Description**

Open listbox

Enter or Down Arrow

Expands the listbox menu to show available options.

Close listbox

Esc

Closes the listbox and clears any selection made.

Navigate options

Up Arrow/Down Arrow

Moves focus up or down the list of options.

Select an option

Enter or Tab

Selects the highlighted option and closes the listbox.

Clear selection

Backspace

Removes the current selection from the input field, as well as typed alpha-numeric characters in the input.

### Other

- **Screen Readers**: Combobox announces its label, state (e.g., `expanded` or `collapsed`), and options count. Highlighted options are read aloud.
- **Magnifiers**: Visual focus indicators and clear spacing support users with magnifiers.
- **Alternative Input Devices**: Speech recognition users can activate the listbox by saying the label or input prompt.

## Design Considerations

- **Labeling**: Designers must ensure the component has a visible label for clarity. Avoid relying solely on placeholder text as a label substitute.
- **Focus Management**: Ensure the first available option becomes the active item, through the use of `aria-activedescendant`, when the listbox is opened.
- **Visual Indicators**: Provide clear visual cues for hover, focus, and selected states.
- **Color Contrast**: Adhere to WCAG 2.1 color contrast guidelines for text and interactive elements.
- **Error Feedback**: Ensure error states are visually distinguishable and accompanied by accessible text. These should be associated with the element which has `role=”combobox”`, through the use of `aria-describedby`.

## Development Considerations

**ARIA Roles and Properties**:

- `role="combobox"` for the input, or the element which displays the currently selected option.
- `aria-expanded` to indicate listbox state.
- `aria-activedescendant` for the highlighted option.
- `aria-controls` to associate the input with the listbox.
- `aria-haspopup` set to the listbox type. Valid types are grid, tree, or dialog. If the type is listbox this attribute may be omited, as comboboxes default to listbox, and in that case this attribute is set implicitly.
- `aria-autocomplete` to indicate the autocomplete behavior:
`none`: When the popup is displayed, the suggested values it contains are the same regardless of the characters typed in the combobox.
- `list`: When the popup is triggered, it presents suggested values. If the combobox is editable, the values complete or logically correspond to the characters typed in the combobox.
- `both`: When the popup is triggered, it presents suggested values that complete or logically correspond to the characters typed in the combobox. In addition, the portion of the selected suggestion that has not been typed by the user, known as the completion string, appears inline after the input cursor in the combobox. The inline completion string is visually highlighted and has a selected state.
- A properly associated label element. Alternatively `aria-labelledby` or `aria-label` may be used for the component label if the element with `role=”combobox”` does not support the use of the label element.
- `role=”listbox”` for the container of the list of options.
- `role=”options”` for each one of the options.
- `role=”presentation”` on any intervening elements that would prevent the `role=”option”` from being a direct descendant of the `role=”listbox”`.
- `aria-selected=”true”` on the current combobox option, or options if the combobox indicates multiple selections.
- `aria-checked=”true”` if a check is present denoting the previous combobox value.
`role="combobox"` for the input, or the element which displays the currently selected option.

`aria-expanded` to indicate listbox state.

`aria-activedescendant` for the highlighted option.

`aria-controls` to associate the input with the listbox.

`aria-haspopup` set to the listbox type. Valid types are grid, tree, or dialog. If the type is listbox this attribute may be omited, as comboboxes default to listbox, and in that case this attribute is set implicitly.

`aria-autocomplete` to indicate the autocomplete behavior:

- `none`: When the popup is displayed, the suggested values it contains are the same regardless of the characters typed in the combobox.
- `list`: When the popup is triggered, it presents suggested values. If the combobox is editable, the values complete or logically correspond to the characters typed in the combobox.
- `both`: When the popup is triggered, it presents suggested values that complete or logically correspond to the characters typed in the combobox. In addition, the portion of the selected suggestion that has not been typed by the user, known as the completion string, appears inline after the input cursor in the combobox. The inline completion string is visually highlighted and has a selected state.
A properly associated label element. Alternatively `aria-labelledby` or `aria-label` may be used for the component label if the element with `role=”combobox”` does not support the use of the label element.

`role=”listbox”` for the container of the list of options.

`role=”options”` for each one of the options.

`role=”presentation”` on any intervening elements that would prevent the `role=”option”` from being a direct descendant of the `role=”listbox”`.

`aria-selected=”true”` on the current combobox option, or options if the combobox indicates multiple selections.

`aria-checked=”true”` if a check is present denoting the previous combobox value.

### Content

- **Input Labels**: Always provide meaningful and descriptive labels for the input field.
- **Helper Text**: Include helper text for guidance, such as acceptable formats or limitations.
- **Error Messages**: Ensure error messages are brief, descriptive, and programmatically associated with the input.

## Accessibility Labels

Combobox requires appropriate labels for clarity and usability.

- **Labeling Recommendations**:
Use properly associated label elements to define the component's purpose. You may use `aria-label` or `aria-labelledby` if the element with role=”combobox” does not support a label element with a properly formed id/for relationship.
- Apply `aria-placeholder` for accessible placeholder text (if necessary).
- Ensure the listbox is associated with the input field using `aria-controls`.
**Labeling Recommendations**:

- Use properly associated label elements to define the component's purpose. You may use `aria-label` or `aria-labelledby` if the element with role=”combobox” does not support a label element with a properly formed id/for relationship.
- Apply `aria-placeholder` for accessible placeholder text (if necessary).
- Ensure the listbox is associated with the input field using `aria-controls`.

## Internationalization

- Support for languages with right-to-left (RTL) text direction.
- Display of localized placeholder text and listbox items.
- Keyboard navigation consistency across different language settings.