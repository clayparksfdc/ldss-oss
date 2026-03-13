---
title: "Vertical Navigation"
description: "The vertical navigation component is designed to help users filter and access content within a page efficiently. It's particularly useful in scenarios where users need to switch between different view"
category: "general"
slug: "vertical-navigation--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

The vertical navigation component is designed to help users filter and access content within a page efficiently. It's particularly useful in scenarios where users need to switch between different views or datasets without leaving the current page.

- Organizes related links vertically to aid in-app navigation.
- Ideal for filtering content within a page without reloading.
- Comprises sections and items, with support for collapsible groups.


### Best Practices

- Employ vertical navigation when users need to filter or switch between subsets of data on the same page.
- Group related items under clear section headers to enhance discoverability.
- Clearly highlights the selected item to inform users of their current context.
- Utilize collapsible sections to handle extensive lists, reducing visual clutter.


### When Not to Use

- If deep nesting is required, consider using a Tree to represent the hierarchy.
- For main application navigation, opt for the Global Navigation component.


## Types

## Appearance

### Anatomy

| <img alt="" src="/uploads/Bi5Gh1oUfx83F66yhAYtuQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Group Header:** Creates sections within the navigation |
| --- | --- |
| <img alt="" src="/uploads/6TrujATk_F15RTvUcpAsDQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Nav item label:**Name of the linked section or page |
| <img alt="" src="/uploads/Ox8SUMfxl0TuYFQFIwS7qQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |**Icon (optional):**Offers an additional visual cue to users |
| <img alt="" src="/uploads/43C0hbDSst2MbiPklUvifw.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |**Notification Badge (optional):**Notifies users of new content |
| <img alt="" src="/uploads/tOaHla90mJKSsdRXjVKVWQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |**Overflow:**Expandable section that nests content |


### Customization Options:

- Icons and badges may be added to nav items.
- May be made filterable by appending the vertical nav to an input using [the Quickfind](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/60977d-vertical-navigation/t/c9ba8d8265).


### Size

- The Vertical Navigation component is designed to be responsive, adjusting to various screen sizes. It's recommended to maintain a minimum width of 225 pixels to ensure readability.
- The compact attribute may be added to reduce vertical spacing.


### Layout

- Items are arranged in a single vertical column. Use padding and margins to ensure adequate spacing between items and sections, enhancing readability and touch accessibility.


## Position

- Place the Vertical Navigation component on the left side of the page or section it controls, aligning with common user expectations for in-page navigation.


### UI Content

- Use concise and descriptive labels for navigation items.
- Incorporate icons where appropriate to aid recognition.
- Provide tooltips for additional context if necessary.


## Behaviors

### States

For reference, a comprehensive list of possible states of a component:

1.**Default:** Item is displayed in its standard state.
2. **Hover:** Item changes background color to indicate interactivity.
3. **Active:** The currently selected item is highlighted to show the user's location.
4. **Disabled**: Item is visible but not interactive.
5. **Focus**: Item label is underlined as a visual cue for keyboard navigation.


### Interactions

For reference, a comprehensive list of possible interactions of a component:

- Click: Navigate to the linked page or section.
- Expand/Collapse: Toggle sections to show or hide contained navigation items.


### Loading

If content is dynamically loading within the navigation, provide a visual indicator, such as a spinner, to inform users that it is loading.

### Scrolling

Ensure that the vertical navigation component is scrollable if the number of items exceeds the available vertical space, allowing users to access all navigation options.

### Default selection

Highlight the default or currently active navigation item to indicate the user's current location within the application.

## Related Components
