---
title: "Toast"
slug: "toast--accessibility"
category: "guideline"
url: "/component/toast/b/74d5d4"
extractedAt: "2026-02-21T21:56:02.545Z"
---

## **Interactions**

### **Mouse**

* Click the close button to dismiss.

### **Keyboard**

* Use **Tab** to focus on the toast.
* **Enter** or **Space** dismiss the toast.

### **Other**

* Screen readers announce the type and content of the toast when it appears.

## **Design Considerations**

* Ensure sufficient color contrast for text and icons.
* Use descriptive, meaningful icons for clarity.

## **Development Considerations**

* Use`role="alert"` on the toast container to signal to assistive technology that it requires the user’s attention.
* When the design uses multiple toasts simultaneously, set the role to `role="status"`. Historically, toasts would use the role of `alert`, but because you can invoke multiple toasts, assertive alerts would override previous toasts in the screen reader's speech queue. The role of `status` is a polite live region, which doesn't clear the queue, reducing the risk of a missed toast message.
* Use a span with `slds-assistive-text` to let the user know what type of notification it is.
* Set auto-dismiss with a duration sufficient for all users to read the message.

## **Content Considerations**

* Write messages with clear, actionable language.

## **Accessibility Labels**

* Include ARIA labels describing the toast's type and purpose. Example: "Success: Your changes have been saved."

## Globalization

* Support translations for message text and accessibility labels.
* Account for text length variations in different languages.
