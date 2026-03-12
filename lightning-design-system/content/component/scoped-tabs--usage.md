---
title: "Scoped Tabs"
slug: "scoped-tabs--usage"
category: "component"
parent: "scoped-tabs"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-tabs--scoped
title: Tabs - Scoped
height: 400px
```

## Overview

Scoped tabs are a variant of the [tabs](/components/tabs) component and have a more targeted purpose. Instead of structuring the main content of a page, they segment content within a page's main body or subsection. Like the main tabs, scoped tabs help users focus on their current task because only one tab's contents are visible at any given time.

- Scoped tabs are a secondary tabset that complements the main tabs on a page.
- Scoped tabs help you group related content into sections. Users can easily switch between sections without leaving the page.
- Each scoped tab is a nested section with related content.
- Scoped tabs are often used within specific sections of a page. You can use them inside cards and modals. Scoped tabs are also helpful for organizing sections within a dashboard.
- A scoped tabs component is a collection of tab components.

## Usage

### Best Practices

- Ideal for cases where tabs directly relate to the content of a container, keeping the context clear and contained.
- Organize content into clear, related sections relevant to the user’s tasks.
- Set the most important or frequently used tab as the default active tab.
- Use descriptive, concise tab labels so users know what content to expect in the tab.
- Use an overflow menu for tabsets with too many tabs or long labels that don’t fit the available space.
- Suitable when the tabbed content is secondary to the main workflow or page.
- Use scoped tabs for small areas, like sidebars or cards.

### When Not to Use

- Avoid scoped tabs if the content under each tab is unrelated.
- Don't use for page-level navigation, where the tabs organize the overall structure of a page.
- When content doesn’t belong to a clearly defined container.
- Don’t use scoped tabs when all content should be visible at the same time.
- Avoid too many tabs, as they can complicate navigation. Consider using vertical tabs if there are more than five tabs in a set.
- Don’t overload tabs with icons, as this creates visual clutter.
- Use buttons, not tabs, for initiating actions.
- Use a progress indicator or path component for process tracking.

## Types


| BaseScoped tabs for grouping related content.  **Use Case**  Use three to five tabs for related sections, providing quick access to task-critical content. | *Default scoped tabs example.* |
| --- | --- |

## Appearance

### Anatomy


| *                                *  | **Container:**Encloses the tabset and associated content. |
| --- | --- |
| *                                *  | **Tabset:**Thecontainer that holds a group of tabs. |
| *                                *  | **Tab:** Individual navigational items within the tabset. |
| *                                *  | **Label**: A concise name describing the tab’s content. |
| *                                *  | **Overflow Menu:**A dropdown for additional tabs that don’t fit in the visible area. |
| *                                *  | **Content area:**Displays content of the active tab. |

### Customization Options

To apply additional styling, such as background, padding, or text color, use the SLDS utility classes with the `class` attribute.

**Icons**

Use utility icons or standard object icons to differentiate tabs visually.

### Layout

Scoped tabs are enclosed in a bordered container. Align the container with nearby content to maintain visual harmony.

### UI Content

- Use title case for labels.
- Labels clearly and concisely describe the content.
- Avoid overly general labels. If the tab content contains tasks, use actionable labels, such as “Review Contract,” “Edit Terms”.
- Tab labels don’t truncate—use an overflow menu if lengthy labels make the tabset become too wide.

## Behaviors

### States

1. **Selected:** The active tab is highlighted with a text label color change and the bottom border is remove.
2. **Default:** Scoped tabs are inactive except for the default selected tab.
3. **Hover:**The tab changes color.
4.**Focus:**Focus follows selection. The active/focused tab is highlighted with a text label color change and the bottom border is removed. An underline is also shown on the label as a focus indicator.

### Interactions

### Position

- Scoped tabs are used within a container like a card, modal, or panel. This makes it clear that the tabs are part of a specific content grouping and not part of global or high-level navigation.

- Place scoped tabs close to the content or actions they directly relate to. This ensures users understand their relationship to the content being displayed.
- Scoped tabs can appear nested below a tabs component, but use caution when placing scoped tabs directly next to navigation elements to prevent confusion.

### Loading

Scoped tabs don’t have a built-in loading state. Use a spinner or stencil in the tab’s content area to make custom loading indicators. To improve performance, tab content loads only as it's needed, when the tab is activated. You can only query the content for the active and previously active tabs.

### Scrolling

Tab containers automatically adjust to fit the content by default unless explicitly constrained. SLDS utility classes can be used to set a max-height and enable scrolling.

- Don’t truncate tab labels.
- Make sure tabs are visible and usable on all devices.
- When a tabset contains more tabs than can fit in the viewport, the tabs that don't fit are moved into an overflow menu next to the last tab that fits.
- The overflow menu replaces the last fully visible tab in the set.
- The active tab always shows and is never moved into the overflow.

### Default Selection

The first tab is active by default when the tabset loads.

### Validation

To help users quickly identify tabs with errors, display an error icon next to the tab label. To explain the issue, include detailed error messages within the tab content area. You can display error messages using inline text, tooltips, or feedback components.

## Related Components
