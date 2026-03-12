---
title: "Toast"
slug: "toast--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/216f79-toast/b/74d5d4"
extractedAt: "2026-02-21T21:56:02.545Z"
---

## Interactions

### Mouse

- Click the close button to dismiss.

Click the close button to dismiss.

### Keyboard

- Use **Tab** to focus on the Toast.
- **Enter** or **Space** dismiss the Toast.
### Other

- Screen readers announce the type and content of the Toast when it appears.

Screen readers announce the type and content of the Toast when it appears.

## Design Considerations

- Ensure sufficient color contrast for text and icons.
- Use descriptive, meaningful icons for clarity.
## Development Considerations

- Implement ARIA roles (alert or status) for screen reader compatibility.
- Toast should contain `role="alert"` on the container to signal to assistive technology that they require the user’s attention.
- When the design uses multiple toasts simultaneously, set the role to `role="status"`. Historically, toasts would use the role of `alert`, but because you can invoke multiple toasts, assertive alerts would override previous toasts in the screen reader's speech queue. The role of `status` is a polite live region, which does not clear the queue, reducing the risk of a missed toast message.
- Use a span with `slds-assistive-text` to let the user know what type of notification it is.
- Set auto-dismiss with a duration sufficient for all users to read the message.

Implement ARIA roles (alert or status) for screen reader compatibility.

Toast should contain role="alert" on the container to signal to assistive technology that they require the user’s attention.

When the design uses multiple toasts simultaneously, set the role to role="status". Historically, toasts would use the role of alert, but because you can invoke multiple toasts, assertive alerts would override previous toasts in the screen reader's speech queue. The role of status is a polite live region, which does not clear the queue, reducing the risk of a missed toast message.

Use a span with slds-assistive-text to let the user know what type of notification it is.

Set auto-dismiss with a duration sufficient for all users to read the message.

## Content Considerations

- Write messages with clear, actionable language.

Write messages with clear, actionable language.

## Accessibility Labels

- Include ARIA labels describing the Toast's type and purpose (e.g., "Success: Your changes have been saved.").

Include ARIA labels describing the Toast's type and purpose (e.g., "Success: Your changes have been saved.").

## Internationalization

- Support translations for message text and accessibility labels.
- Account for text length variations in different languages.