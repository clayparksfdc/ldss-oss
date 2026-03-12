---
title: "Breadcrumbs"
slug: "breadcrumbs--usage"
category: "component"
parent: "breadcrumbs"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-breadcrumbs--base
title: Breadcrumbs - Base
height: 400px
```

## Overview

- Breadcrumbs help users navigate complex websites. They show the path from the top to the current page, and let you easily backtrack to previous pages.
- Breadcrumbs are ideal for multi-level interfaces, and are most effective on pages that are at least two levels deep. Breadcrumbs link only to important pages in a hierarchy.
- Breadcrumbs give context and help users find pages they want to revisit without relying on the back button.
- Place breadcrumbs consistently at the top of a page, left-aligned, and follow a horizontal layout.

## Usage

Breadcrumbs aren't exactly like leaving a trail of breadcrumbs in a forest so you can find your way back home. Breadcrumbs show the hierarchy path (parent­-child relationships) of the page you're on, rather than the order of your browsing history. They're especially useful if you follow a link directly to a page that is nested in a hierarchy but want to go to a parent page.

### Best Practices

- Use breadcrumbs to show the navigation path through the hierarchy, from the highest-level page to the current page.
- Use short and meaningful labels for each link. Clearly communicate page names or categories with your labels, and help users to understand where they are.
- Use breadcrumbs for pages that are at least two levels deep.
- Link breadcrumbs only to important steps. Not every page or action must be represented.
- Left-align breadcrumbs at the top of the page, ensuring a consistent and predictable layout.

### When Not to Use

- Don't use breadcrumbs on a page that lacks a hierarchical relationship with previous pages. For example, help or FAQ pages accessed via search don't require breadcrumbs.

- Don't replace other navigation with breadcrumbs. Breadcrumbs are intended to complement primary navigation such as tabs and sidebars.

## Types


| Default Breadcrumb  Shows the full path. Ideal for pages with a simple hierarchy.  **Use Case:** When users need to see their path and quickly return to previous categories. | *Base breadcrumb example.* |
| --- | --- |
|  |  |
| Overflow Breadcrumb  Shows the last few breadcrumbs in the path before the current page. The higher-level pages are hidden in a dropdown that can be expanded.   **Use Case:** Use to show only the most relevant levels. Hiding levels prevents clutter while offering an easy way to navigate back to the parent topic. | *Overflow breadcrumb example.* |
|  |  |

## Appearance

The breadcrumbs component is made up of two primary sections, link, and overflow, which contain the elements described here.

### Anatomy


| *                                *  | **Menu**: Use the overflow button icon to condense the breadcrumb trail. When the button is clicked, a dropdown menu opens a list of the hidden breadcrumb links to select. |
| --- | --- |
| *                                *  | **Overflow**: Use the overflow button icon to condense the breadcrumb trail. When the button is clicked, a dropdown menu opens a list of the hidden breadcrumb links to select. |
| *                                *  | **Chevron:**Breadcrumbs are evenly spaced with chevron icons between them to show the path to the current page. |
| *                                *  | **Breadcrumb:**An individual item or link within the breadcrumbs trail. |
| *                                *  | **Breadcrumbs**: Each navigation node is composed of an individual breadcrumb that is combined to create breadcrumbs. |

### Layout

**Horizontal Orientation**

Breadcrumbs are displayed horizontally, with links separated by chevrons.

On a second- or third-level page, the full hierarchy path is listed because there's usually enough space. On the fourth-level page and deeper, the breadcrumbs display only the last two links for the level 3 and level 4 pages. The rest of the hierarchy path is truncated, as shown in the next figure.

### UI Content

Each breadcrumb is a text link that represents a page or location within the system. Use only simple location names.

## Behaviors

### States

1. **Default:** Breadcrumbs links are displayed with chevron separators between the links.
2. **Hover:** When a mouse pointer is hovering over a breadcrumb, the link changes color and displays an underline.

### Interactions

- The breadcrumb for the current page isn't a clickable link. Each breadcrumb link for a higher-level page in the trail is clickable and navigates to the corresponding parent page.
- Clicking the Overflow Icon Button opens a menu that displays breadcrumbs that aren't shown due to space limitations.

### Position

Breadcrumbs are usually left-aligned at the top of the page, preceding the main title or content header, to keep the breadcrumbs visible and accessible for easy navigation.

## Related Components
