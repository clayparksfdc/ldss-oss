---
title: "Scoped Tabs"
slug: "scoped-tabs--usage"
category: "component"
parent: "scoped-tabs"
order: 0
---

[Scoped](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-tabs--scoped)

## Overview

Scoped tabs are a variant of the [tabs](/component/tabs) component and have a more targeted purpose. Instead of structuring the main content of a page, they segment content within a page's main body or subsection. Like the main tabs, scoped tabs help users focus on their current task because only one tab's contents are visible at any given time.

* Scoped tabs are a secondary tabset that complements the main tabs on a page.
* Scoped tabs help you group related content into sections. Users can easily switch between sections without leaving the page.
* Each scoped tab is a nested section with related content.
* Scoped tabs are often used within specific sections of a page. You can use them inside cards and modals. Scoped tabs are also helpful for organizing sections within a dashboard.
* A scoped tabs component is a collection of tab components.

## Usage

### Best Practices

* Ideal for cases where tabs directly relate to the content of a container, keeping the context clear and contained.
* Organize content into clear, related sections relevant to the user’s tasks.
* Set the most important or frequently used tab as the default active tab.
* Use descriptive, concise tab labels so users know what content to expect in the tab.
* Use an overflow menu for tabsets with too many tabs or long labels that don’t fit the available space.
* Suitable when the tabbed content is secondary to the main workflow or page.
* Use scoped tabs for small areas, like sidebars or cards.


### When Not to Use

* Avoid scoped tabs if the content under each tab is unrelated.
* Don't use for page-level navigation, where the tabs organize the overall structure of a page.
* When content doesn’t belong to a clearly defined container.
* Don’t use scoped tabs when all content should be visible at the same time.
* Avoid too many tabs, as they can complicate navigation. Consider using vertical tabs if there are more than five tabs in a set.
* Don’t overload tabs with icons, as this creates visual clutter.
* Use buttons, not tabs, for initiating actions.
* Use a progress indicator or path component for process tracking.

## Types

| **Base** Scoped tabs for grouping related content.  **Use Case** Use three to five tabs for related sections, providing quick access to task-critical content.  | ![base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/9631a4e7017c169524f6d4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6bdf0142a8a45e83246c30b160bee5d12876ed36984116e58fff568c769a0491) **base** *Default scoped tabs example.* |
| --- | :---: |

## Appearance

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/88de1b29abe410d32f1bf6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1517e343034cc432d19b6690b4e292f2529b7c149bda576d08afdc6b6473677d)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=74e1a20b7c330033ff7ae8eba6ff2c36e1792219f8efd0764cb1899cffac9907) | **Container:** Encloses the tabset and associated content. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d654c4fa1e3e4b0ae9a87fad12ff66e9322f71ce6028083df28f56f9126a927f) | **Tabset:** The container that holds a group of tabs. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b7f2e26ad9ef3a95ecec9617166b55fa54edcb5739d8f765bd15dd9f298ead66) | **Tab:** Individual navigational items within the tabset. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c9256e943441ecb0616aad466e69705e8c81cd37fefae3487fe81d02a24a5b7c) | **Label**: A concise name describing the tab’s content. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=db01d237f4082287e100422813d83c2113a320dc0e3c2803f2617be0a31712d4) | **Overflow Menu:** A dropdown for additional tabs that don’t fit in the visible area.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ff54f3a9730466b0d93c88f7c88132acf2a94bc52dbbe9ec4330a27b7dfda1d0) | **Content area: **Displays content of the active tab. |

### Customization Options

To apply additional styling, such as background, padding, or text color, use the SLDS utility classes with the `class` attribute.

**Icons **

Use utility icons or standard object icons to differentiate tabs visually.

### Layout

Scoped tabs are enclosed in a bordered container. Align the container with nearby content to maintain visual harmony.

### UI Content

* Use title case for labels.
* Labels clearly and concisely describe the content.
* Avoid overly general labels. If the tab content contains tasks, use actionable labels, such as “Review Contract,” “Edit Terms”.
* Tab labels don’t truncate—use an overflow menu if lengthy labels make the tabset become too wide.

## Behaviors

### States

![default](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/7f2770f175b3149a0d03fd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1e0a544baf4827c77dfcc96f67b9503670de53bc744b2cdda8f1ea014abea911)

**default**

---

1. **Selected:** The active tab is highlighted with a text label color change and the bottom border is remove.
2. **Default:** Scoped tabs are inactive except for the default selected tab.
3. **Hover:** The tab changes color.
4. **Focus:** Focus follows selection. The active/focused tab is highlighted with a text label color change and the bottom border is removed. An underline is also shown on the label as a focus indicator.


### Interactions

![interactions](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/f12ea8552f42937fe0ead1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1129c91dee9dc0a364fd05969f2571a536ebaa3adb886e9566b020a834c0e675)

**interactions**

---

### Position

* Scoped tabs are used within a container like a card, modal, or panel. This makes it clear that the tabs are part of a specific content grouping and not part of global or high-level navigation.

* Place scoped tabs close to the content or actions they directly relate to. This ensures users understand their relationship to the content being displayed.
* Scoped tabs can appear nested below a tabs component, but use caution when placing scoped tabs directly next to navigation elements to prevent confusion.

### Loading

Scoped tabs don’t have a built-in loading state. Use a spinner or stencil in the tab’s content area to make custom loading indicators. To improve performance, tab content loads only as it's needed, when the tab is activated. You can only query the content for the active and previously active tabs.

### Scrolling

Tab containers automatically adjust to fit the content by default unless explicitly constrained. SLDS utility classes can be used to set a max-height and enable scrolling.

### Overflow Menu

![overflow](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/e1b8ad16cc57cf5ffc3aa4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042742Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=eab5e02fb1433b7096ff4bb43aaef3aaa4a433892c65149e40d3d5e152ec4239)

**overflow**

---

* Don’t truncate tab labels. 
* Make sure tabs are visible and usable on all devices. 
* When a tabset contains more tabs than can fit in the viewport, the tabs that don't fit are moved into an overflow menu next to the last tab that fits. 
* The overflow menu replaces the last fully visible tab in the set. 
* The active tab always shows and is never moved into the overflow.

### Default Selection

The first tab is active by default when the tabset loads.

### Validation

To help users quickly identify tabs with errors, display an error icon next to the tab label. To explain the issue, include detailed error messages within the tab content area. You can display error messages using inline text, tooltips, or feedback components.

## Related Components
