---
title: "Checkbox Button - Accessibility"
slug: "checkbox-button--accessibility"
category: "component"
parent: "checkbox-button"
order: 0
---

## Interactions

### Mouse

When using a mouse to interact with a Checkbox Button, users can:

- Click the checkbox to toggle between the checked and unchecked states.
- Hover over the checkbox to see the visual feedback (e.g., changes in background or border color, indicating interactivity).
For mouse interactions:

- Hover state is important for providing users with a visual indication that the element is clickable.
- When a user clicks a checkbox button, it should toggle its state from checked to unchecked and vice versa.

### Keyboard

For keyboard accessibility, users should be able to interact with the Checkbox Button using the following commands:


| **Action** | **Keyboard Command** | **Result** |
| --- | --- | --- |
| Navigate to the checkbox | Tab (forward), Shift + Tab (backward) | Moves the focus to the next or previous checkbox. |
| Select/Deselect checkbox | Spacebar or Enter | Toggles the checkbox between selected and unselected. |
| Focus | Tab | Focuses on the checkbox, indicated by a visual outline. |

- **Focus state**: When the user navigates to the checkbox button with the Tab key, it must have a clear focus indicator, such as a border or background color change, to show that it is selected and ready to be toggled.
- **Indeterminate state**: If the checkbox is in the indeterminate state, it should still be operable via the Spacebar or Enter key, toggling between the indeterminate, checked, and unchecked states.

### Other

For **assistive devices** and non-traditional input methods (such as **screen readers**, **magnifiers**, **speech recognition software**, **sip-and-puff devices**, and **braille displays**), the **Checkbox Button** should be fully accessible:

- **Screen readers**: The checkbox must have proper **ARIA labels** and roles (role="checkbox") to ensure that screen reader users can identify it as a checkbox and understand its current state (checked, unchecked, or indeterminate). A screen reader should also announce any changes in state when the user interacts with the checkbox.
- **Speech recognition software**: Speech recognition tools should allow users to toggle the checkbox using spoken commands. Developers should ensure that the checkbox can be activated via voice input, such as saying "select" or "deselect," corresponding to a click or toggle action.
- **Braille displays**: A **braille display** will need to map the checkbox element properly and should announce its state correctly, such as "Checkbox: Selected" or "Checkbox: Unselected."
- **Sip-and-puff devices**: For users who rely on sip-and-puff devices, navigating through checkboxes should be possible by controlling the focus and toggling the checkbox state. These devices should trigger the same actions as keyboard commands.

## Design Considerations

- **Visual contrast** is high enough to be easily distinguishable for users with visual impairments, including those with color blindness.
- **Clear, descriptive labels** are used so that all users, especially screen reader users, can understand the purpose of each checkbox.
- The **focus state** is prominent and easily visible to users who navigate using a keyboard, making it clear which checkbox is currently selected.
- **State changes** (checked, unchecked, indeterminate) should be visually clear, using color and text (e.g., “Selected” or “Unselected”) where applicable.
- The **size** of the checkbox should be large enough to be clickable for users with motor impairments, with a recommended clickable area of at least 44x44 pixels, as per web accessibility guidelines.

## Development Considerations

- **ARIA roles and states**: Ensure that the checkbox has the correct `role="checkbox"` and that its `aria-checked` attribute is dynamically updated based on the checkbox’s state. When the checkbox is checked, `aria-checked="true"`, and when unchecked, `aria-checked="false"`. If the checkbox is in an indeterminate state, use `aria-checked="mixed"`.
- **ARIA roles and states**: The checkbox is created through the use of a native `<input type=”checkbox” />` element. This ensures that assistive technologies easily understand the correct role, and state of the element.
- **Keyboard accessibility**: Ensure that keyboard users can navigate to and toggle the checkbox using the Tab, Spacebar, and Enter keys. The checkbox should support both focused and active states when operated with the keyboard.
- **Focus management**: Implement proper focus handling to make sure users can tab through interactive elements, and ensure that the checkbox provides a visible indicator when focused.
- **Labeling**: Make sure that each checkbox has an associated `label` element or an `aria-labelledby` attribute for screen readers. The label should be descriptive and concise, explaining what the checkbox represents.

## Content Considerations

- **Clear, descriptive labels**: The text associated with each checkbox should clearly describe the choice the user is making. Avoid ambiguous labels like “Option 1” or “Option 2.”
- **Instructional text**: If the checkbox controls a critical function (e.g., “Agree to terms and conditions”), ensure there is **clear instructional text** guiding the user’s understanding of its importance.
- **Error handling**: If a checkbox is required and not selected, the form should present a clear, accessible error message that explains why the user needs to make a selection.

## Accessibility Labels

The **Checkbox Button** should follow general best practices for accessibility labels:

- **ARIA labels**: Ensure that each checkbox has an associated aria-label or is linked to a visible text label via the for attribute in the HTML code. This ensures that screen readers can announce the checkbox’s purpose to users.
- **Descriptive text**: The label should be concise but descriptive enough for users to understand the checkbox's purpose without ambiguity. For example, instead of using labels like "Select", use something more specific like "Subscribe to newsletter."

## Internationalization

Internationalization (i18n) considerations for the **Checkbox Button** should include:

- **Translating text labels**: Ensure that the checkbox labels are fully translatable into different languages. This might involve using localization files to manage different languages, and making sure the text is appropriately formatted for various scripts and character sets.
- **Right-to-left (RTL) languages**: The component should be adaptable for right-to-left languages (e.g., Arabic, Hebrew). Ensure that the layout and interaction flow remain intact when the interface is displayed in RTL mode.