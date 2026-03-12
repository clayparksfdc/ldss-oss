---
title: "Modals"
description: "Users interact with modal elements via standard mouse clicks."
category: "component"
slug: "modals--accessibility"
status: "published"
lastModified: "2026-03-11"
---

## Interactions

### Mouse

- Users interact with modal elements via standard mouse clicks.
- The “Close” button (an "X" above the header) and any footer action buttons (e.g., "Save" or "Cancel") are clickable.


Users interact with modal elements via standard mouse clicks.

The “Close” button (an "X" above the header) and any footer action buttons (e.g., "Save" or "Cancel") are clickable.

### Keyboard

- **Tab** moves focus between interactive elements within the modal in sequential order.
- **Shift + Tab** moves focus backward through interactive elements.
- **Enter** activates the currently focused button or link.
- **Escape** closes the modal.
- When open, focus is trapped within the modal to prevent interaction with elements outside it.


**Tab** moves focus between interactive elements within the modal in sequential order.

**Shift + Tab** moves focus backward through interactive elements.

**Enter** activates the currently focused button or link.

**Escape** closes the modal.

When open, focus is trapped within the modal to prevent interaction with elements outside it.

### Other

- **Screen Readers**: Modal announces its role (e.g., `dialog`), title, and content when opened.
- **Magnifiers**: Ensure all modal content is visible without distortion when zooming.
- **Alternative Input Devices**: All modal actions should be operable using speech commands or other input mechanisms.


**Screen Readers**: Modal announces its role (e.g., `dialog`), title, and content when opened.

**Magnifiers**: Ensure all modal content is visible without distortion when zooming.

**Alternative Input Devices**: All modal actions should be operable using speech commands or other input mechanisms.

## Design Considerations

- Ensure modals are appropriately sized for both desktop and mobile devices to prevent content truncation.


Ensure modals are appropriately sized for both desktop and mobile devices to prevent content truncation.

## Development Considerations

- Use ARIA roles and attributes to define the modal’s role and state:<ul><li>`role="dialog"`: Defines the element as a dialog box.</li><li>`aria-labelledby`: Links the modal title to the dialog for accessibility.</li><li>`aria-describedby` (optional): Provides additional description of the modal's purpose if needed.</li></ul>
- `role="dialog"`: Defines the element as a dialog box.
- `aria-labelledby`: Links the modal title to the dialog for accessibility.
- `aria-describedby` (optional): Provides additional description of the modal's purpose if needed.
- Ensure buttons have descriptive aria-label attributes if their text content is insufficient for context.
- Implement a focus trap to prevent focus from escaping the modal while it’s open.
- Ensure modal content and controls are keyboard-navigable.
- Include robust handling for `escape` key events to close the modal.
- Dynamically add or remove modals from the DOM to improve screen reader support.
- Test for responsiveness to ensure proper rendering on different devices and screen sizes.


Use ARIA roles and attributes to define the modal’s role and state:

- `role="dialog"`: Defines the element as a dialog box.
- `aria-labelledby`: Links the modal title to the dialog for accessibility.
- `aria-describedby` (optional): Provides additional description of the modal's purpose if needed.


`role="dialog"`: Defines the element as a dialog box.

`aria-labelledby`: Links the modal title to the dialog for accessibility.

`aria-describedby` (optional): Provides additional description of the modal's purpose if needed.

Ensure buttons have descriptive aria-label attributes if their text content is insufficient for context.

Implement a focus trap to prevent focus from escaping the modal while it’s open.

Ensure modal content and controls are keyboard-navigable.

Include robust handling for `escape` key events to close the modal.

Dynamically add or remove modals from the DOM to improve screen reader support.

Test for responsiveness to ensure proper rendering on different devices and screen sizes.

## Content Considerations

- Modal titles should clearly describe the purpose of the modal.
- Avoid excessive text; keep content focused and concise.
- Use plain, straightforward language to minimize ambiguity.
- Include descriptive labels for input fields and actionable buttons.


Modal titles should clearly describe the purpose of the modal.

Avoid excessive text; keep content focused and concise.

Use plain, straightforward language to minimize ambiguity.

Include descriptive labels for input fields and actionable buttons.
