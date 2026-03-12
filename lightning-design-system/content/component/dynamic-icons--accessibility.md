---
title: "Dynamic Icons - Accessibility"
slug: "dynamic-icons--accessibility"
category: "component"
parent: "dynamic-icons"
order: 0
---

## Interactions

### Mouse

- **Cursor Change**: The cursor must change to indicate interactive elements, such as changing to a pointer when hovering over the icons.

### Keyboard


| **Action** | **Key Combination** | **Description** |
| --- | --- | --- |
| Focus Icon | Tab | Moves focus to the next interactive icon. |
| Activate Icon | Enter / Space | Activates the focused icon to trigger its action. |
| Navigate Icons | Arrow Keys (Left/Right) | Cycles through icons without losing focus. |

### Other

#### Assistive Devices:

- **Screen Readers**: Icons should have descriptive labels that convey their purpose. Screen readers will announce the action associated with each icon when focused.
- **Magnifiers**: The component must maintain clarity and usability when zoomed in, ensuring no critical information is lost.
- **Alternative Input Devices**: Users of speech recognition software must be able to activate icons via voice commands, while users of braille displays should receive accurate feedback on the focused icon’s action.

## Design Considerations

- **Color Contrast**: Ensure sufficient contrast between icons and backgrounds for users with low vision. Avoid using color alone to convey meaning.
- **Tooltips and Accessible Labels**: Provide descriptive tooltips or aria-labels for screen readers. Avoid ambiguity to ensure icons are understood by all users.
- **Avoid Overuse**: Limit the number of dynamic icons to avoid overwhelming users, particularly those with cognitive disabilities.

## Development Considerations

Developers are responsible for implementing the following accessibility practices:

- **ARIA Roles and Properties**: Use appropriate ARIA roles to ensure dynamic icons are described correctly for assistive technologies.
- **Keyboard Navigation**: Ensure the dynamic icons are navigable via the keyboard using standard tab navigation and provide keyboard event handling for interaction.

## Content Considerations

- **Text Alternatives**: Provide meaningful alt text for dynamic icons to describe their state or purpose for screen reader users.
- **Error Messages**: Provide clear, accessible error messages and instructions in a way that assists all users in understanding what is required.
