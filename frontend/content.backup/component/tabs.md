---
title: "Tabs"
description: "Tabs organize related content into sections within a single page. This makes it easy for users to find what they need, without having to go to a different page. Users simply switch between the tabs."
category: "component"
slug: "tabs"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- Tabs organize related content into sections within a single page. This makes it easy for users to find what they need, without having to go to a different page. Users simply switch between the tabs.
- Tabs help you manage large amounts of content. They make it easy for users to focus on specific sections of content as needed.
- Available in three sizes—Default, Medium, and Large—to suit different layouts and page hierarchies.
- A tabset component contains multiple tab components.


Tabs organize related content into sections within a single page. This makes it easy for users to find what they need, without having to go to a different page. Users simply switch between the tabs.

Tabs help you manage large amounts of content. They make it easy for users to focus on specific sections of content as needed.

Available in three sizes—Default, Medium, and Large—to suit different layouts and page hierarchies.

A tabset component contains multiple tab components.

## Usage

### Best Practices

- Organize content into clear, related sections relevant to the user’s tasks.
- Set the most important or frequently used tab as the default active tab.
- Use descriptive, concise tab labels so users know what content to expect in the tab.
- Use icons strategically to clarify your message. They're great for highlighting actions or categorizing information.
- Use an overflow menu for tabsets with too many tabs or long labels that don’t fit the available space.


Organize content into clear, related sections relevant to the user’s tasks.

Set the most important or frequently used tab as the default active tab.

Use descriptive, concise tab labels so users know what content to expect in the tab.

Use icons strategically to clarify your message. They're great for highlighting actions or categorizing information.

Use an overflow menu for tabsets with too many tabs or long labels that don’t fit the available space.

### When Not to Use

- Avoid too many tabs, as they can complicate navigation.
- Limit nested tabs, which can confuse users.
- Don’t overload tabs with icons, as this creates visual clutter.
- Use buttons, not tabs, for initiating actions.
- In small spaces such as sidebars or card bodies, use scoped tabs.
- Use a progress indicator or path component for process tracking.


Avoid too many tabs, as they can complicate navigation.

Limit nested tabs, which can confuse users.

Don’t overload tabs with icons, as this creates visual clutter.

Use buttons, not tabs, for initiating actions.

In small spaces such as sidebars or card bodies, use scoped tabs.

Use a progress indicator or path component for process tracking.

## Types

| <h3>Base Tabs</h3>**Horizontal tabs display labels in a single row, with the selected tab’s content shown below.<strong>Use Case**Use three to five tabs for related sections, providing quick access to task-critical content. | *Base tabs example.* |
| --- | --- |


### Base Tabs

Horizontal tabs display labels in a single row, with the selected tab’s content shown below.

**Use Case**

Use three to five tabs for related sections, providing quick access to task-critical content.

*Base tabs example.*

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Tab: **A single container within a tabset that holds related content, allowing users to switch views without navigating away. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Icon:** Adds a visual indicator for the tab’s purpose, placed before or after the label. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Label:** A concise name indicating the tab’s content. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Tabset: **A group of tabs. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Overflow Menu:** Holds additional tabs that don’t fit within the visible area. |


**Tab: **A single container within a tabset that holds related content, allowing users to switch views without navigating away.

**Icon:** Adds a visual indicator for the tab’s purpose, placed before or after the label.

**Label:** A concise name indicating the tab’s content.

**Tabset: **A group of tabs.

**Overflow Menu:** Holds additional tabs that don’t fit within the visible area.

### Customization Options

#### Icons

Use utility icons or standard object icons to differentiate tabs visually.

**Dynamic Titles**

Update tab titles dynamically to reflect real-time changes, for example by adding “(New)” or updated counts.

**Active Default Tab**

The first tab is active by default but can be set to another tab using the `active-tab-value` property.

### Size

Base tabs can be set to default, medium, and large sizes using the [SLDS utility classes](https://zeroheight.com/2e1ef8501/v/0/p/1152cf-tabs/t/ea2af43e9a) to accommodate different layouts, user needs, and content requirements.

| **Default**: The standard size supported by the tabset component. Useful for most dashboard and record page layouts. Best for smaller spaces so that tabs don't overflow. **<strong>Medium: **Use for side panels or when you want to emphasize a section within a larger layout. Medium tabs can accommodate longer labels, but keep them brief to avoid tab overflow.** <strong>Large**: Perfect for touch devices or when users frequently switch between tabs. |   |
| --- | --- |
|   |   |


**Default**: The standard size supported by the tabset component. Useful for most dashboard and record page layouts. Best for smaller spaces so that tabs don't overflow.

**Medium: **Use for side panels or when you want to emphasize a section within a larger layout. Medium tabs can accommodate longer labels, but keep them brief to avoid tab overflow.** <strong>Large**: Perfect for touch devices or when users frequently switch between tabs.

### UI Content

- Use title case for labels.
- Labels clearly and concisely describe the content.
- Avoid overly general labels. If the tab content contains tasks, use actionable labels, such as “Review Contract,” “Edit Terms”.
- Tab labels don’t truncate—use an overflow menu if lengthy labels make the tabset too wide for the container.


Use title case for labels.

Labels clearly and concisely describe the content.

Avoid overly general labels. If the tab content contains tasks, use actionable labels, such as “Review Contract,” “Edit Terms”.

Tab labels don’t truncate—use an overflow menu if lengthy labels make the tabset too wide for the container.

## Behaviors

### States

1. **Default**: Tabs are inactive except for the default selected tab.
2. **Hover**: The label changes color and an underline is added to the border under the tab labels.
3. **Selected**: The active tab is highlighted with an underline and label color change.
4. **Focus**: Adds a focus indicator, an underline for the label. Focus follows selection, so the tab is also highlighted for the selected state with an underline and label color change.


**Default**: Tabs are inactive except for the default selected tab.

**Hover**: The label changes color and an underline is added to the border under the tab labels.

**Selected**: The active tab is highlighted with an underline and label color change.

**Focus**: Adds a focus indicator, an underline for the label. Focus follows selection, so the tab is also highlighted for the selected state with an underline and label color change.

### Default Selection

The first tab is active by default when the tabset loads.

### Position

Tabs appear at the top of a content area and control the content below them within the same container.

### Loading

Tabs don’t have a built-in loading state. Use a spinner or placeholder content in the tab’s content area to make custom loading indicators. To improve performance, tab content loads only as it's needed, when the tab is activated. You can only query the content for the active and previously active tabs.

### Overflow Menu

- Don't truncate tab labels.
- Make sure tabs are visible and usable on all devices.
- When a tabset contains more tabs than can fit in the viewport, the tabs that don't fit are moved into an overflow menu next to the last tab that fits.
- The overflow menu replaces the last fully visible tab in the set.
- The active tab always shows and is never moved into the overflow.


Don't truncate tab labels.

Make sure tabs are visible and usable on all devices.

When a tabset contains more tabs than can fit in the viewport, the tabs that don't fit are moved into an overflow menu next to the last tab that fits.

The overflow menu replaces the last fully visible tab in the set.

The active tab always shows and is never moved into the overflow.

### Validation

To help users quickly identify tabs with errors, display an error icon next to the tab label. Include detailed error messages within the tab content area to explain the issue. You can use inline text, tooltips, or a feedback component to display an error message.

## Related Components
