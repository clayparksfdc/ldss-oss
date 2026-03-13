---
title: "Button Icons - Accessibility"
slug: "button-icons--accessibility"
category: "component"
order: 0
---

## Interactions

### Mouse

- **Hover State**: Button Icons display a hover effect to visually indicate interactivity.
- **Click Activation**: Users can activate Button Icons with a click, triggering the designated action.

### Keyboard

- **Tab Navigation**: Button Icons should be fully navigable using the Tab key, moving sequentially through focusable elements.
- **Activation**: The Enter or Space keys should trigger the Button Icon’s action when focused.
- **Focus State**: A clear, visible outline around the Button Icon should indicate focus, ensuring it’s easy for keyboard users to identify.

### Other

- **Screen Readers**: Button Icons should have an accessible label (aria-label) that provides clear context for the action (e.g., “Delete record”).
- **Alternative Input Devices**: Button Icons should be operable via various assistive devices, such as speech recognition (e.g., “Click Delete Button”), sip-and-puff devices, and keyboard modifications. Proper labeling ensures compatibility with these devices.
- **Magnification Tools**: For low-vision users, Button Icons should have scalable, high-contrast icons that are clear when magnified.

## Design Considerations

- Choose universally recognizable icons for actions (e.g., trash for delete) to ensure users easily understand each Button Icon’s purpose.
- Ensure Button Icons meet color contrast guidelines, especially when using inverse icons on dark backgrounds.
- When possible, provide tooltips that describe the action of the Button Icon. This enhances usability for users who may not immediately recognize an icon’s purpose.

## Development Considerations

- Add aria-label attributes to Button Icons to describe the action to screen readers.
- Test Button Icons with screen readers and other assistive tools to ensure a smooth, predictable experience.

## Content Considerations

- Include aria-label descriptions like “Edit record,” “Delete item,” or “Close modal” provide clear context.
- Use standard terms for common actions to ensure consistency and reduce cognitive load.
- Choose simple, commonly understood icons that are intuitive for diverse users.

## Internationalization

Button Icons should be accessible to users in various languages and locales. Ensure that all tooltips, labels, and alternative text are translatable, and icons used should be culturally appropriate for all audiences.
