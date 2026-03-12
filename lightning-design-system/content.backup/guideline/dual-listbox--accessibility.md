---
title: "Dual Listbox"
slug: "dual-listbox--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/763763-dual-listbox/b/74d5d4"
extractedAt: "2026-02-21T21:48:56.270Z"
---

## Interactions

### Mouse

- **Cursor Change**: When a user hovers over the dual listbox component, the cursor should change to a pointer, indicating that the element is interactive.
- **Selection**: Users can select items by clicking on them. Once selected, users can use the arrow buttons to move items between lists.

Cursor Change: When a user hovers over the dual listbox component, the cursor should change to a pointer, indicating that the element is interactive.

Selection: Users can select items by clicking on them. Once selected, users can use the arrow buttons to move items between lists.

### Keyboard

Keyboard Commands: The following table summarizes the keyboard interactions for the dual listbox component:

**Action**

**Key Command**

**Description**

Move focus to the next option

Down Arrow

Moves focus to the next available option in the list.

Move focus to the previous option

Up Arrow

Moves focus to the previous available option in the list.

Move the focus to the first option

Home

Focuses on the first item in the list.

Move the focus to the last option

End

Focuses on the last item in the list.

Move focus based on the first letter typed

First letter of an option



Moves focus to the first option, starting with the typed letter.

Select the focused option

Space or Enter

Selects the focused item or removes the selection if it's already selected.

Select multiple options consecutively

Shift + Down/Up Arrow

Selects multiple items by holding Shift while navigating up or down the list.

Move focus without selecting

Ctrl (or Command on macOS) + Up/Down Arrow

Moves focus up or down without selecting/deselecting items.

Select/Deselect all options

Ctrl (or Command) + A

Selects or deselects all options in the list.

Select all options up to the first or last

Ctrl (or Command) + Shift + Home/End

Selects all items from the focused item to the first or last item.Action

Key Command

Description

Move focus to the next option

Down Arrow

Moves focus to the next available option in the list.

Move focus to the previous option

Up Arrow

Moves focus to the previous available option in the list.

Move the focus to the first option

Home

Focuses on the first item in the list.

Move the focus to the last option

End

Focuses on the last item in the list.

Move focus based on the first letter typed

First letter of an option

Moves focus to the first option, starting with the typed letter.

Select the focused option

Space or Enter

Selects the focused item or removes the selection if it's already selected.

Select multiple options consecutively

Shift + Down/Up Arrow

Selects multiple items by holding Shift while navigating up or down the list.

Move focus without selecting

Ctrl (or Command on macOS) + Up/Down Arrow

Moves focus up or down without selecting/deselecting items.

Select/Deselect all options

Ctrl (or Command) + A

Selects or deselects all options in the list.

Select all options up to the first or last

Ctrl (or Command) + Shift + Home/End

Selects all items from the focused item to the first or last item.

### Other

- **Screen Readers:** The component should be properly labeled to inform users about its purpose and available actions.
- **Speech Recognition Software:** Users can interact with the component through voice commands, enabling actions like “select item,” “move to right,” or “add.”
- **Braille Displays:** Users should receive accurate information about item selection and available actions on their display.

Screen Readers: The component should be properly labeled to inform users about its purpose and available actions.

Speech Recognition Software: Users can interact with the component through voice commands, enabling actions like “select item,” “move to right,” or “add.”

Braille Displays: Users should receive accurate information about item selection and available actions on their display.

## Design Considerations

Designers should ensure that the dual listbox component adheres to accessibility best practices, such as:

- **Alternative Text**: Provide descriptive text for icons or buttons to enhance understanding.

Alternative Text: Provide descriptive text for icons or buttons to enhance understanding.

## Development Considerations

Developers are responsible for ensuring the dual listbox component meets accessibility standards, including:

- **Error Handling**: Provide clear error messages or notifications when actions cannot be completed, ensuring users understand what went wrong.

Error Handling: Provide clear error messages or notifications when actions cannot be completed, ensuring users understand what went wrong.

## Content Considerations

When presenting information in the dual listbox, ensure that all content:

- It is concise and clear to avoid confusion.
- Utilizes appropriate headings and lists for structure.
- Avoids jargon to maintain comprehension.

It is concise and clear to avoid confusion.

Utilizes appropriate headings and lists for structure.

Avoids jargon to maintain comprehension.

## Accessibility Labels

- ARIA Roles: Use appropriate ARIA (Accessible Rich Internet Applications) roles and attributes to convey the component's purpose and state to assistive technologies.

`aria-multiselectable="true"` should be set on each listbox
- `aria-selected` should be placed on each `role="option"`, and set to false by default
- `aria-labelledby` is used to identify the list to the user and should point to the list label
- `aria-describedby` is used to provide operation instructions for the Drag and Drop interaction
- `tabindex` should be set to `0` when an item is selected and `-1` otherwise

ARIA Roles: Use appropriate ARIA (Accessible Rich Internet Applications) roles and attributes to convey the component's purpose and state to assistive technologies.

- `aria-multiselectable="true"` should be set on each listbox
- `aria-selected` should be placed on each `role="option"`, and set to false by default
- `aria-labelledby` is used to identify the list to the user and should point to the list label
- `aria-describedby` is used to provide operation instructions for the Drag and Drop interaction
- `tabindex` should be set to `0` when an item is selected and `-1` otherwise

aria-multiselectable="true" should be set on each listbox

aria-selected should be placed on each role="option", and set to false by default

aria-labelledby is used to identify the list to the user and should point to the list label

aria-describedby is used to provide operation instructions for the Drag and Drop interaction

tabindex should be set to 0 when an item is selected and -1 otherwise

