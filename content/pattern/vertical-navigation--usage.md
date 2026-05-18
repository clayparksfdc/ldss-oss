---
title: "Vertical Navigation"
slug: "vertical-navigation--usage"
category: "pattern"
url: "/component/vertical-navigation/b/7978cc"
extractedAt: "2026-02-21T21:56:54.727Z"
---

[Basic](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-vertical-navigation--basic)

## Overview

The vertical navigation component is designed to help users filter and access content within a page efficiently. It's particularly useful in scenarios where users need to switch between different views or datasets without leaving the current page.

* Organizes related links vertically to aid in-app navigation.
* Ideal for filtering content within a page without reloading.
* Comprises sections and items, with support for collapsible groups.


### Best Practices

* Employ vertical navigation when users need to filter or switch between subsets of data on the same page.
* Group related items under clear section headers to enhance discoverability.
* Clearly highlights the selected item to inform users of their current context.
* Utilize collapsible sections to handle extensive lists, reducing visual clutter.


### When Not to Use

* If deep nesting is required, consider using a Tree to represent the hierarchy.
* For main application navigation, opt for the Global Navigation component.

## Types

![Base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/6831ae159c028a34247e52?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bad4ffa03773b7cc07baa1551a21537047192a766838f093a4039d685183d2fc)

**Base**

---

![Shaded](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/215a06f66e4defebc24cb5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ba64b4deeb120344c78a70e7ed02943d5734db39b546cf6e36d8acb9616c8a84)

**Shaded**

---

![Compact](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/182bae3ac4e03279fee892?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9a9480ddc92149d5e103e1f7db6d3fb5313690d2fe1c14bddb5879f93d96229a)

**Compact**

---

![Quickfind](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/977b2e76e7aa8b528aa03b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=30c4b91b12b76b18aac5a9f76dd7e873d6a89be81ea4866a876a67921961e675)

**Quickfind**

---

## Appearance

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/f98d3732ce63dd5d549865?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6dd1556dd793e7611c9e9af29255285aaf03c1e82d7b30d162376b48d545382c)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=867c0d0cf233d48aa92a485145628bf543130260e756032110c88299738a1482) | **Group Header:** Creates sections within the navigation |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=88d320743323fe6121e62952ba1fa0938201b750debbad6590ca0a9156ca0ad2) | **Nav item label:** Name of the linked section or page |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6c6d5fe9845664328c798d2a740e03829fd471b98b9b27dd46ca5a08da3d8649) | **Icon (optional):** Offers an additional visual cue to users |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=41cf198d25ef947b234a64b91abdc82c78d8870876787b403b3de12e0873068a) | **Notification Badge (optional):** Notifies users of new content |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=99407ac7b4b4d52d69494ada052473377d93699a8954500b0ae9041aed365e1e) | **Overflow:** Expandable section that nests content |

### Customization Options:

* Icons and badges may be added to nav items.
* May be made filterable by appending the vertical nav to an input using [the Quickfind](/component/vertical-navigation/t/c9ba8d8265).

### Size 

* The Vertical Navigation component is designed to be responsive, adjusting to various screen sizes. It's recommended to maintain a minimum width of 225 pixels to ensure readability.
* The compact attribute may be added to reduce vertical spacing.

### Layout

* Items are arranged in a single vertical column. Use padding and margins to ensure adequate spacing between items and sections, enhancing readability and touch accessibility.

## Position

* Place the Vertical Navigation component on the left side of the page or section it controls, aligning with common user expectations for in-page navigation.

### UI Content

* Use concise and descriptive labels for navigation items.
* Incorporate icons where appropriate to aid recognition.
* Provide tooltips for additional context if necessary.

## Behaviors

### States

For reference, a comprehensive list of possible states of a component: 

![States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/1ab3a58dacf5df580b484f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042724Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=89bbc59f61daa2691ec8d8b4fecbf940f1bc76cb3ea194b6d44d8f85b8f85052)

**States**

---

1. **Default:** Item is displayed in its standard state.
2. **Hover:** Item changes background color to indicate interactivity.
3. **Active:** The currently selected item is highlighted to show the user's location.
4. **Disabled**: Item is visible but not interactive.
5. **Focus**: Item label is underlined as a visual cue for keyboard navigation.


### Interactions

For reference, a comprehensive list of possible interactions of a component: 

* Click: Navigate to the linked page or section.
* Expand/Collapse: Toggle sections to show or hide contained navigation items.


### Loading 

If content is dynamically loading within the navigation, provide a visual indicator, such as a spinner, to inform users that it is loading.

### Scrolling

Ensure that the vertical navigation component is scrollable if the number of items exceeds the available vertical space, allowing users to access all navigation options.

### Default selection

Highlight the default or currently active navigation item to indicate the user's current location within the application.

## Related Components
