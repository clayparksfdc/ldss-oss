---
title: "Map"
slug: "map--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/160625-map/b/74d5d4"
extractedAt: "2026-02-21T21:50:32.849Z"
---

## Interactions

### Mouse

- Users can click on markers to view additional information.
- Standard mouse interactions like hover and drag are supported.
- Scroll wheel zoom functionality is enabled by default but should have an option to disable for better accessibility.

Users can click on markers to view additional information.

Standard mouse interactions like hover and drag are supported.

Scroll wheel zoom functionality is enabled by default but should have an option to disable for better accessibility.

### Keyboard

- Tab navigation allows users to cycle through focusable elements (e.g., markers, controls).
- Arrow keys pan the map view when focused on the map canvas.
- Enter/Space activates markers or buttons, such as opening an info window.
- Escape closes any open popups or modal-like elements within the map.

Tab navigation allows users to cycle through focusable elements (e.g., markers, controls).

Arrow keys pan the map view when focused on the map canvas.

Enter/Space activates markers or buttons, such as opening an info window.

Escape closes any open popups or modal-like elements within the map.

**Action**

**Key Command**

Navigate markers

Tab (forward), Shift+Tab (back)

Activate marker

Enter or Space

Pan map

Arrow keys

Zoom in/out

"+" or "-" keys

Close popups

EscapeAction

Key Command

Navigate markers

Tab (forward), Shift+Tab (back)

Activate marker

Enter or Space

Pan map

Arrow keys

Zoom in/out

"+" or "-" keys

Close popups

Escape

### Other

- **Screen Readers:** The map provides semantic labels for markers and other controls, allowing assistive technologies to interpret the content. Use ARIA landmarks and roles to enhance screen reader compatibility.
- **Magnifiers:** Ensure zoom controls are distinguishable and not reliant on color alone.
- **Alternative Input Devices:** Verify compatibility with sip-and-puff devices, speech recognition software, and other assistive tools.

Screen Readers: The map provides semantic labels for markers and other controls, allowing assistive technologies to interpret the content. Use ARIA landmarks and roles to enhance screen reader compatibility.

Magnifiers: Ensure zoom controls are distinguishable and not reliant on color alone.

Alternative Input Devices: Verify compatibility with sip-and-puff devices, speech recognition software, and other assistive tools.

## Design Considerations

- Ensure contrast ratios meet WCAG 2.1 standards (minimum 4.5:1 for text and interface elements).
- Use distinct and meaningful icons for markers to avoid reliance on color alone.
- Provide fallback visualizations or messaging for users unable to interact with the map (e.g., textual lists of locations).
- Limit the complexity of map overlays and prioritize readability.

Ensure contrast ratios meet WCAG 2.1 standards (minimum 4.5:1 for text and interface elements).

Use distinct and meaningful icons for markers to avoid reliance on color alone.

Provide fallback visualizations or messaging for users unable to interact with the map (e.g., textual lists of locations).

Limit the complexity of map overlays and prioritize readability.

## Development Considerations

- **ARIA Roles:** Implement roles such as `role="application"` for the map and `role="button"` for interactive elements like markers.
- **Labels:** Ensure markers and controls include accessible names and descriptions via `aria-label` or `aria-labelledby` attributes.
- **Focus Management:** Handle focus transitions effectively, such as moving focus to a marker's info window when it opens.
- **Error Messaging:** Provide accessible error notifications if the map fails to load.
- Tab order for interactive elements (e.g., markers, zoom controls).

Elements with `role=”button”`, or other custom elements that need to take focus must have a `tabindex=”0”`.
- The use of positive `tabindexes` should be avoided. They may be necessary, but only when the focus order cannot otherwise be controlled through DOM order.
- Default keyboard navigation for zooming and panning. Consider creating a help modal that explains the various keyboard functions.
- Screen reader-friendly labels for controls and markers.

ARIA Roles: Implement roles such as role="application" for the map and role="button" for interactive elements like markers.

Labels: Ensure markers and controls include accessible names and descriptions via aria-label or aria-labelledby attributes.

Focus Management: Handle focus transitions effectively, such as moving focus to a marker's info window when it opens.

Error Messaging: Provide accessible error notifications if the map fails to load.

Tab order for interactive elements (e.g., markers, zoom controls).

- Elements with `role=”button”`, or other custom elements that need to take focus must have a `tabindex=”0”`.
- The use of positive `tabindexes` should be avoided. They may be necessary, but only when the focus order cannot otherwise be controlled through DOM order.

Elements with role=”button”, or other custom elements that need to take focus must have a tabindex=”0”.

The use of positive tabindexes should be avoided. They may be necessary, but only when the focus order cannot otherwise be controlled through DOM order.

Default keyboard navigation for zooming and panning. Consider creating a help modal that explains the various keyboard functions.

Screen reader-friendly labels for controls and markers.

## Content Considerations

- Include concise and descriptive text for marker labels and popups.
- Provide alternative content for map-based information, such as lists or tables.

Include concise and descriptive text for marker labels and popups.

Provide alternative content for map-based information, such as lists or tables.

## Accessibility Labels

Markers and map controls include built-in support for accessibility labels. Developers must:

- Add meaningful aria-label or aria-labelledby attributes to markers.
- Use descriptive names for map layers and controls.

Add meaningful aria-label or aria-labelledby attributes to markers.

Use descriptive names for map layers and controls.

## Internationalization

The Map component supports internationalization through localized map tiles and text labels. Developers should ensure:

- Marker labels and info windows display content in the user’s preferred language.
- Right-to-left (RTL) languages are accounted for in the layout and interactions.

Marker labels and info windows display content in the user’s preferred language.

Right-to-left (RTL) languages are accounted for in the layout and interactions.

