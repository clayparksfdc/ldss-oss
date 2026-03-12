---
title: "Tooltip - Accessibility"
slug: "tooltip--accessibility"
category: "component"
parent: "tooltip"
order: 0
---

## Interactions

### Mouse

- Tooltips appear on hover and disappear when the cursor moves away.

### Keyboard

- Tooltips should appear on focus and remain visible until focus is lost.

### Other

- Ensure Tooltips are accessible to screen readers and can be activated by assistive devices.

## Design Considerations

- Avoid using color alone to convey meaning.
- Ensure sufficient contrast between the Tooltip and the background.
- Showing the tooltip on hover or on keyboard focus of a focusable element ensures that all users can access it, even if they aren’t using a mouse. Examples of focusable elements include links, buttons, and inputs.

## Development Considerations

- Implement ARIA roles (e.g., `aria-describedby`) to associate the Tooltip with its trigger element.
- Give the tooltip an `ID` and use that as the value of the `aria-describedby` attribute of the DOM element it describes. This helps users of assistive technology read the tooltip content.
- When using a link as the focusable element to show a tooltip, add a `<div>` at the bottom of the tooltip bubble that includes a description of where the link will take the user. Add `aria-hidden='true'` to this element, and ensure that the link text itself matches the text within this `<div>`.
- `lightning-helptext` contains a focusable button element. To ensure that users who aren't using a mouse can access the tooltip, `lightning-helptext `shows the tooltip on hover or on keyboard focus. The button renders with an `aria-describedby` attribute set to an `ID` that matches the element containing the tooltip text. The `aria-describedby` attribute enables assistive technology to announce the tooltip content.
- The component renders the tooltip using `role="tooltip"`. When you remove focus from the button or mouse away from it, the tooltip is hidden. To provide important information, display descriptive text in the component itself instead of using `lightning-helptext`.
- Ensure Tooltips are dismissible using the Esc key.

When using a link as the focusable element to show a tooltip, add a `<div>` at the bottom of the tooltip bubble that includes a description of where the link will take the user. Add `aria-hidden='true'` to this element, and ensure that the link text itself matches the text within this `<div>`.

## Content Considerations

- Keep content concise, relevant, and understandable.
- The button renders assistive text that contains "Help" by default. To provide your own description, use the `alternative-text` attribute. The text should describe the function of the icon, for example, "Show help text", instead of repeating the content description. Providing the purpose of the icon in the description improves usability and removes repetition of content for users of assistive technology.

## Internationalization

Ensure Tooltips support multiple languages and text expansion for localization.
