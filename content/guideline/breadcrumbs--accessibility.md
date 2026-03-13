---
title: "Breadcrumbs"
slug: "breadcrumbs--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/13cc12-breadcrumbs/b/74d5d4"
extractedAt: "2026-02-21T21:44:40.188Z"
---

## Interactions

### Mouse

Breadcrumbs should change color on hover to indicate that they are clickable. The mouse cursor should change to a pointer.

### Keyboard

- **Tab**: Moves focus between breadcrumb links.
- **Enter/Spacebar**: Opens the overflow menu, allowing users to tab through hidden breadcrumbs.
- **Arrow Keys:** Cycle through menu items.
- **Escape:**Closes the overflow menu.

## Design Considerations

- When deviating from the standard breadcrumb styling hooks, ensure proper contrast ratios for readability.

## Development Considerations

- As with all components, use semantic HTML. ARIA roles should be used sparingly.
- Place the breadcrumb in a nav element with `role="navigation"`. The nav element is also marked-up with `aria-label="Breadcrumbs"` to describe the type of navigation.

### ARIA Roles and Attributes:

- Use `aria-current="page"` for the last breadcrumb to indicate the current location in the hierarchy to screen readers.
- Set `aria-label="Breadcrumbs"` on the breadcrumb container to announce it as a breadcrumb trail to assistive technologies.
- Use `role="list"` for the breadcrumb container and `role="listitem"` for each breadcrumb link to define the structure.
Use aria-current="page" for the last breadcrumb to indicate the current location in the hierarchy to screen readers.

Set aria-label="Breadcrumbs" on the breadcrumb container to announce it as a breadcrumb trail to assistive technologies.

Use role="list" for the breadcrumb container and role="listitem" for each breadcrumb link to define the structure.

### Overflow Menu Accessibility:

- If an overflow menu is used, it should follow standard ARIA practices for dropdown menus, including announcing when it is expanded, and supporting keyboard navigation within the menu.
- An `aria-label` should be applied describing the purpose of the dropdown “More breadcrumbs”.
An aria-label should be applied describing the purpose of the dropdown “More breadcrumbs”.

## Content Considerations

### Consistent Language

- Use consistent, clear labels, so that they are easily recognizable in context.

### Internationalization

- Labels should be short, to ensure that localized text will fit. Design with different languages in mind to avoid truncation.
- Account for right-to-left (RTL) languages (e.g., Arabic, Hebrew) by ensuring that breadcrumbs and chevrons dynamically adapt to RTL layouts.