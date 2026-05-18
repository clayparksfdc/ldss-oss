---
title: "Breadcrumbs"
slug: "breadcrumbs--usage"
category: "component"
parent: "breadcrumbs"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-breadcrumbs--base)

## Overview

* Breadcrumbs help users navigate complex websites. They show the path from the top to the current page, and let you easily backtrack to previous pages.
* Breadcrumbs are ideal for multi-level interfaces, and are most effective on pages that are at least two levels deep. Breadcrumbs link only to important pages in a hierarchy.
* Breadcrumbs give context and help users find pages they want to revisit without relying on the back button.
* Place breadcrumbs consistently at the top of a page, left-aligned, and follow a horizontal layout. 

## Usage

Breadcrumbs aren't exactly like leaving a trail of breadcrumbs in a forest so you can find your way back home. Breadcrumbs show the hierarchy path (parent­-child relationships) of the page you're on, rather than the order of your browsing history. They're especially useful if you follow a link directly to a page that is nested in a hierarchy but want to go to a parent page. 

### Best Practices

* Use breadcrumbs to show the navigation path through the hierarchy, from the highest-level page to the current page.
* Use short and meaningful labels for each link. Clearly communicate page names or categories with your labels, and help users to understand where they are.
* Use breadcrumbs for pages that are at least two levels deep.
* Link breadcrumbs only to important steps. Not every page or action must be represented.
* Left-align breadcrumbs at the top of the page, ensuring a consistent and predictable layout.

### When Not to Use

* Don't use breadcrumbs on a page that lacks a hierarchical relationship with previous pages. For example, help or FAQ pages accessed via search don't require breadcrumbs.

* Don't replace other navigation with breadcrumbs. Breadcrumbs are intended to complement primary navigation such as tabs and sidebars.

## Types

| **Default Breadcrumb**  Shows the full path. Ideal for pages with a simple hierarchy.  **Use Case:** When users need to see their path and quickly return to previous categories.  | ![base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/711da57f72c5c1d52c153e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b83707a31387e01b04aed2867d64866211e6a677ed859b226432e094d668072d) **base** *Base breadcrumb example.* |
| --- | :---: |
|   |   |
| **Overflow Breadcrumb**  Shows the last few breadcrumbs in the path before the current page. The higher-level pages are hidden in a dropdown that can be expanded.   **Use Case:** Use to show only the most relevant levels. Hiding levels prevents clutter while offering an easy way to navigate back to the parent topic.  | ![overflow](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/a3ad0cb1c0325e5cabf415?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=321cf14584b41089c3f9c28c054a9b5093d39d183e7f17720b1d642cfbb85565) **overflow** *Overflow breadcrumb example.* |
|   |   |

## Appearance

The breadcrumbs component is made up of two primary sections, link, and overflow, which contain the elements described here.

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/63daa42aab03b0614e3a05?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d47a107cb70fd0f6c9675fd0b4a67f1c9f0114713ea9d289b42f006a9f068a98)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fc21a8d18ba9b973d1e8f7720448947d6687d3a50a31213b90637190770e5809) | **Menu**: Use the overflow button icon to condense the breadcrumb trail. When the button is clicked, a dropdown menu opens a list of the hidden breadcrumb links to select. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=713330e37e575dceafa5a458ba8f65f67425a817c107f8e6ac80440350e15cc0) | **Overflow**: Use the overflow button icon to condense the breadcrumb trail. When the button is clicked, a dropdown menu opens a list of the hidden breadcrumb links to select. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a3a68557a4614e729697650aa17a2f760f1a4e8cda6834432c35fefd701046e1) | **Chevron:** Breadcrumbs are evenly spaced with chevron icons between them to show the path to the current page. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=472a6a65758d7197b2ad8ffe8fa8960a0bc6d32c77a3b8d7798dadc71ad61085) | **Breadcrumb:** An individual item or link within the breadcrumbs trail. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fe7a1a01b8ea8972b18386b617c85a2e451085aac2a6d35eaadc6af933b5d20a) | **Breadcrumbs**: Each navigation node is composed of an individual breadcrumb that is combined to create breadcrumbs.  |

### Layout

**Horizontal Orientation **

Breadcrumbs are displayed horizontally, with links separated by chevrons.

**Overflow**

On a second- or third-level page, the full hierarchy path is listed because there's usually enough space. On the fourth-level page and deeper, the breadcrumbs display only the last two links for the level 3 and level 4 pages. The rest of the hierarchy path is truncated, as shown in the next figure.

![truncation](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/3ecaddd97023242afd77bc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=549a91b03dfde0b80adcf8c56c037b5fad3f90689303ece78a3f422ae491f17b)

**truncation**

---

### UI Content

Each breadcrumb is a text link that represents a page or location within the system. Use only simple location names.

## Behaviors

### States

![Breadcrumb States 1](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/d7eceac0ac412cd618dac0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2610943fe122dd39c5e7bd91f2a226237e21999e9b87acdfafdc477f317714be)

**Breadcrumb States 1**

---

1. **Default:** Breadcrumbs links are displayed with chevron separators between the links.
2. **Hover:** When a mouse pointer is hovering over a breadcrumb, the link changes color and displays an underline.

### Interactions

* The breadcrumb for the current page isn't a clickable link. Each breadcrumb link for a higher-level page in the trail is clickable and navigates to the corresponding parent page. 
* Clicking the Overflow Icon Button opens a menu that displays breadcrumbs that aren't shown due to space limitations.

### Position

Breadcrumbs are usually left-aligned at the top of the page, preceding the main title or content header, to keep the breadcrumbs visible and accessible for easy navigation.

## Related Components
