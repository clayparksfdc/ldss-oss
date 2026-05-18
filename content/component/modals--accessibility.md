---
title: "Modals - Accessibility"
slug: "modals--accessibility"
category: "component"
parent: "modals"
order: 0
---

## **Interactions**

### **Mouse**

* Users interact with modal elements via standard mouse clicks.
* The “Close” button (an "X" above the header) and any footer action buttons (e.g., "Save" or "Cancel") are clickable.

### **Keyboard**

* **Tab** moves focus between interactive elements within the modal in sequential order.
* **Shift + Tab** moves focus backward through interactive elements.
* **Enter** activates the currently focused button or link.
* **Escape** closes the modal.
* When open, focus is trapped within the modal to prevent interaction with elements outside it.

![Modal - Tab Order](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/37ffe1a7f144bfb61785f3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042740Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1b1dddcba4cdd406a05d4fffc9ab7b35b5289bebd4c3f1db6c4ee8fb3d4a41e2)

**Modal - Tab Order**

---

### **Other**

* **Screen Readers**: Modal announces its role (e.g., `dialog`), title, and content when opened.
* **Magnifiers**: Ensure all modal content is visible without distortion when zooming.
* **Alternative Input Devices**: All modal actions should be operable using speech commands or other input mechanisms.

## **Design Considerations**

* Ensure modals are appropriately sized for both desktop and mobile devices to prevent content truncation.

## **Development Considerations**

* Use ARIA roles and attributes to define the modal’s role and state:
    * `role="dialog"`: Defines the element as a dialog box.
    * `aria-labelledby`: Links the modal title to the dialog for accessibility.
    * `aria-describedby` (optional): Provides additional description of the modal's purpose if needed.
* Ensure buttons have descriptive aria-label attributes if their text content is insufficient for context.
* Implement a focus trap to prevent focus from escaping the modal while it’s open.
* Ensure modal content and controls are keyboard-navigable.
* Include robust handling for `escape` key events to close the modal.
* Dynamically add or remove modals from the DOM to improve screen reader support.
* Test for responsiveness to ensure proper rendering on different devices and screen sizes.

## **Content Considerations**

* Modal titles should clearly describe the purpose of the modal.
* Avoid excessive text; keep content focused and concise.
* Use plain, straightforward language to minimize ambiguity.
* Include descriptive labels for input fields and actionable buttons.
