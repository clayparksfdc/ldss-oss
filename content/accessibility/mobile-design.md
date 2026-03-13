---
title: "Mobile Design · Lightning Design System 2"
slug: "mobile-design"
category: "accessibility"
order: 0
---

Mobile devices have distinct accessibility concerns, and require careful consideration to accommodate all users. While using SLDS patterns and components is a good start, the following best practices will help to ensure an accessible experience, regardless of device.

## Best Practices

### Give every toggle and button a visible label that explicitly conveys its state.

To make them understandable to screen reader users, label toggles and buttons, and identify if they’re in a pressed or checked state. Label both radio button groups and each individual radio button. When using an icon as a button, give each state its own label. For buttons such as the SLDS stateful button that change color when pressed, make sure that the button’s pressed state is returned.

### Remember accessibility when creating custom gestures.

Every custom gesture should have a one-finger equivalent, so users with limited motor capabilities can use it.

All custom gestures must be duplicated in the custom actions system of the screen reader. Make custom gestures easily discoverable, and include accessible help text describing their behavior.

### Avoid horizontal scrolling lists.

Long or infinitely horizontal scrolling lists make it difficult for screen reader users to track their place, given that only parts of them are visible in the viewport at any given time. Screen readers rely on content to be in the viewport to communicate information reliably to the user.

### Anchor action bars.

Keep all action bars (those containing buttons or other interactive controls) in the viewport at all times, even when the user scrolls. Screen reader users who use direct touch need such elements to stay in one place.

In the example below, the contents of the record detail change, but the action bar remains in one place.

### Anchor floating action buttons.

Anchor floating action buttons (those that exist on a plane above the regular scrolling UI) on the page, aligning them either in a corner or centered on an edge. They may disappear, as long as their behavior is reliable. Rare exceptions are possible, but please consult an accessibility specialist.

### Make tap targets large enough for all users.

To serve all users, make tap targets at least 44pt/dp/px, regardless of operating system.
