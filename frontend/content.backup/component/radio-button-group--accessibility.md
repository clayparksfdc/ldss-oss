---
title: "Radio Button Group"
description: "Users interact with the Radio Button Group using mouse clicks. Each button is clickable, and selecting one automatically deselects the previously selected button within the group."
category: "component"
slug: "radio-button-group--accessibility"
status: "published"
lastModified: "2026-03-11"
---

## Interactions

### Mouse

Users interact with the Radio Button Group using mouse clicks. Each button is clickable, and selecting one automatically deselects the previously selected button within the group.

- **Hover State:** Buttons visually indicate hover with a subtle background change.
- **Click State:** Buttons reflect the active state when clicked.
- **Disabled State:** Buttons appear greyed out and are non-interactive.


**Hover State:** Buttons visually indicate hover with a subtle background change.

**Click State:** Buttons reflect the active state when clicked.

**Disabled State:** Buttons appear greyed out and are non-interactive.

### Keyboard

| **Key** | **Action** |
| --- | --- |
| **Tab** | Moves focus to the Radio Button Group or next focusable element. |
| **Arrow Keys** | Navigates between radio buttons in the group (up/down or left/right). |
| **Space/Enter** | Selects the currently focused radio button. |


**Key**

**Action**

**Tab**

Moves focus to the Radio Button Group or next focusable element.

**Arrow Keys**

Navigates between radio buttons in the group (up/down or left/right).

**Space/Enter**

Selects the currently focused radio button.

- **Initial Focus:** Focus defaults to the first selected option or the first button in the group if no option is selected.
- **Focus Ring:** A visible focus ring indicates which button is currently active for navigation.


**Initial Focus:** Focus defaults to the first selected option or the first button in the group if no option is selected.

**Focus Ring:** A visible focus ring indicates which button is currently active for navigation.

### Other

For users relying on assistive devices, the Radio Button Group supports:

- **Screen Readers:** Each button has an accessible name derived from its label, and the group is announced as a single control with a role of `radiogroup`.
- **Magnifiers:** Labels and buttons are designed for readability and scaling.
- **Alternative Input Devices:** Supports navigation via speech recognition or other input methods by focusing and selecting buttons.


**Screen Readers:** Each button has an accessible name derived from its label, and the group is announced as a single control with a role of `radiogroup`.

**Magnifiers:** Labels and buttons are designed for readability and scaling.

**Alternative Input Devices:** Supports navigation via speech recognition or other input methods by focusing and selecting buttons.

## Design Considerations

- Use concise, descriptive text for button labels.
- Arrange buttons in a meaningful order for intuitive navigation.
- Ensure initial focus aligns with user expectations and workflows.
- Provide clear, contextual error messages when validation fails.
- Maintain sufficient contrast between buttons and background to meet WCAG 2.1 AA standards.


Use concise, descriptive text for button labels.

Arrange buttons in a meaningful order for intuitive navigation.

Ensure initial focus aligns with user expectations and workflows.

Provide clear, contextual error messages when validation fails.

Maintain sufficient contrast between buttons and background to meet WCAG 2.1 AA standards.

## Development Considerations

- Implement the `radiogroup` role for the container and radio role for buttons.
- Use `aria-checked` to indicate selection state.
- Ensure correct handling of Tab, Arrow keys, Space, and Enter for navigation and selection.
- Bind labels to buttons using `aria-labelledby` or `aria-label `for clarity.
- Dynamically display error states and messages, linking errors to the group with `aria-describedby`.
- Ensure layout adapts to different screen sizes without compromising usability.


Implement the `radiogroup` role for the container and radio role for buttons.

Use `aria-checked` to indicate selection state.

Ensure correct handling of Tab, Arrow keys, Space, and Enter for navigation and selection.

Bind labels to buttons using `aria-labelledby` or `aria-label `for clarity.

Dynamically display error states and messages, linking errors to the group with `aria-describedby`.

Ensure layout adapts to different screen sizes without compromising usability.

### Content Considerations

- Provide unique, meaningful labels for each radio button.
- Include optional help text to clarify the purpose of the group when necessary.
- Ensure error messages are explicit and actionable.
- All radio button groups marked as required with an * must have an accompanying legend.**Example:** * denotes a required field


Provide unique, meaningful labels for each radio button.

Include optional help text to clarify the purpose of the group when necessary.

Ensure error messages are explicit and actionable.

All radio button groups marked as required with an * must have an accompanying legend.

**Example:** * denotes a required field

## Accessibility Labels

Radio Button Group components include accessible labels by default through:

- `aria-labelledby`: Links the group to its associated label.
- `aria-describedby`: Provides additional context or error messaging when required.


`aria-labelledby`: Links the group to its associated label.

`aria-describedby`: Provides additional context or error messaging when required.

If no customization is required, these labels ensure out-of-the-box component-level accessibility.
