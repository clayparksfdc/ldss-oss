---
title: "Rich Text Editor"
description: "Interaction Details: Users can interact with the Rich Text Editor toolbar, text area, and additional options using point-and-click actions."
category: "foundation"
slug: "rich-text-editor--accessibility"
status: "published"
lastModified: "2026-03-11"
---

## Interactions

### Mouse

- **Interaction Details**: Users can interact with the Rich Text Editor toolbar, text area, and additional options using point-and-click actions.
- **Cursor Changes**: Cursor changes dynamically based on the context (e.g., text cursor when editing text, pointer cursor over toolbar buttons).
- **Considerations**: All interactive elements in the toolbar and text area should have a visible focus state to aid users transitioning between mouse and keyboard use.


**Interaction Details**: Users can interact with the Rich Text Editor toolbar, text area, and additional options using point-and-click actions.

**Cursor Changes**: Cursor changes dynamically based on the context (e.g., text cursor when editing text, pointer cursor over toolbar buttons).

**Considerations**: All interactive elements in the toolbar and text area should have a visible focus state to aid users transitioning between mouse and keyboard use.

### Keyboard

**Keyboard Commands Table**:

| **Action** | **Keyboard Command** |
| --- | --- |
| Navigate toolbar | Tab / Shift + Tab |
| Activate a button | Enter / Spacebar |
| Move between toolbar items | Left / Right Arrow Keys |
| Open dropdown menus | Enter |
| Select dropdown option | Down Arrow / Up Arrow + Enter |
| Bold/Italicize/Underline | Ctrl + B/I/U (Windows) or Cmd + B/I/U (Mac) |
| Add link | Ctrl + K (Windows) or Cmd + K (Mac) |
| Undo/Redo | Ctrl + Z/Y (Windows) or Cmd + Z/Y (Mac) |


**Action**

**Keyboard Command**

Navigate toolbar

Tab / Shift + Tab

Activate a button

Enter / Spacebar

Move between toolbar items

Left / Right Arrow Keys

Open dropdown menus

Enter

Select dropdown option

Down Arrow / Up Arrow + Enter

Bold/Italicize/Underline

Ctrl + B/I/U (Windows) or Cmd + B/I/U (Mac)

Add link

Ctrl + K (Windows) or Cmd + K (Mac)

Undo/Redo

Ctrl + Z/Y (Windows) or Cmd + Z/Y (Mac)

**Initial Focus**:

- Initial focus defaults to the first item in the toolbar (font selector).


Initial focus defaults to the first item in the toolbar (font selector).

### Other

- **Screen Readers**: The Rich Text Editor provides ARIA labels for toolbar buttons, dropdowns, and text areas. Developers should ensure all labels are descriptive and avoid using ambiguous terms like "Button 1."
- **Magnifiers**: Ensure high-contrast mode is compatible with all UI elements, including text highlights and selected toolbar icons.
- **Speech Recognition Software**: Labeling and focus management are critical to enable effective voice commands for toolbar functions.
- **Alternative Input Devices**: For users relying on sip-and-puff or other devices, ensure logical tab order and shortcuts.


**Screen Readers**: The Rich Text Editor provides ARIA labels for toolbar buttons, dropdowns, and text areas. Developers should ensure all labels are descriptive and avoid using ambiguous terms like "Button 1."

**Magnifiers**: Ensure high-contrast mode is compatible with all UI elements, including text highlights and selected toolbar icons.

**Speech Recognition Software**: Labeling and focus management are critical to enable effective voice commands for toolbar functions.

**Alternative Input Devices**: For users relying on sip-and-puff or other devices, ensure logical tab order and shortcuts.

## Design Considerations

- Ensure toolbar icons and text area elements are distinguishable and have sufficient color contrast (WCAG AA or better).
- Include visual indicators for focus, hover, and selected states to guide users relying on visual aids.
- Collaborate with developers to maintain logical reading and navigation order.
- Avoid overcrowding the toolbar to minimize cognitive load.


Ensure toolbar icons and text area elements are distinguishable and have sufficient color contrast (WCAG AA or better).

Include visual indicators for focus, hover, and selected states to guide users relying on visual aids.

Collaborate with developers to maintain logical reading and navigation order.

Avoid overcrowding the toolbar to minimize cognitive load.

## Development Considerations

- Implement ARIA roles (aria-label, `aria-labelledby`, `aria-describedby`) for all toolbar elements and text areas.
- Include keyboard navigation support and intuitive shortcuts.
- Manage focus on dropdowns and modals, ensuring it moves back to the triggering element when closed.
- Test using assistive technologies to validate compatibility.
- Avoid hardcoded strings to support internationalization.


Implement ARIA roles (aria-label, `aria-labelledby`, `aria-describedby`) for all toolbar elements and text areas.

Include keyboard navigation support and intuitive shortcuts.

Manage focus on dropdowns and modals, ensuring it moves back to the triggering element when closed.

Test using assistive technologies to validate compatibility.

Avoid hardcoded strings to support internationalization.

## Content Considerations

- Avoid using color alone to convey meaning. Use alternative text for embedded images or videos.
- Include meaningful link descriptions instead of "Click Here."


Avoid using color alone to convey meaning. Use alternative text for embedded images or videos.

Include meaningful link descriptions instead of "Click Here."

## Accessibility Labels

- Toolbar buttons, dropdowns, and text area include ARIA attributes for accessibility.
- Example: Each button must include an aria-label (e.g., "Bold", "Italic", "Insert Link").


Toolbar buttons, dropdowns, and text area include ARIA attributes for accessibility.

Example: Each button must include an aria-label (e.g., "Bold", "Italic", "Insert Link").

## Internationalization

- The Rich Text Editor supports localization and must align with Salesforce's language and region settings.
- Ensure language directionality (e.g., right-to-left for Arabic or Hebrew) is maintained..


The Rich Text Editor supports localization and must align with Salesforce's language and region settings.

Ensure language directionality (e.g., right-to-left for Arabic or Hebrew) is maintained..
