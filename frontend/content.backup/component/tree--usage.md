---
title: "Tree"
description: "The Tree component is ideal for presenting hierarchical data, such as file directories or organizational structures. It simplifies navigation and makes complex data sets more accessible."
category: "component"
slug: "tree--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

The Tree component is ideal for presenting hierarchical data, such as file directories or organizational structures. It simplifies navigation and makes complex data sets more accessible.

- Used to display structured data where items can contain multiple levels of hierarchy.
- Commonly found in features like folder navigation or managing data relationships.
- Provides interactive controls for expanding and collapsing nested items to improve navigation and reduce visual clutter.


Used to display structured data where items can contain multiple levels of hierarchy.

Commonly found in features like folder navigation or managing data relationships.

Provides interactive controls for expanding and collapsing nested items to improve navigation and reduce visual clutter.

### Best Practices

- Use the Tree component to display hierarchical data.
- Label each node meaningfully to ensure context for users.
- Keep the structure shallow if possible; deeply nested hierarchies can overwhelm users.


Use the Tree component to display hierarchical data.

Label each node meaningfully to ensure context for users.

Keep the structure shallow if possible; deeply nested hierarchies can overwhelm users.

### When Not to Use

- Avoid using the Tree component for flat lists without hierarchy.
- Do not use it for datasets that are too large to navigate meaningfully.
- Avoid overloading each node with too much content or functionality.


Avoid using the Tree component for flat lists without hierarchy.

Do not use it for datasets that are too large to navigate meaningfully.

Avoid overloading each node with too much content or functionality.

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Group Header: **Use to group related items within the tree. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Chevron Button Icon**: Allows users to show or hide child nodes. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Left Icon (optional): **Provides more context about each node |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Label: **Name of the tree node. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Linked Label:** Link to the associated object or website. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Right Icon (optional):** Provides more context about each node |
| * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Metatext:** Text provided to aid with identification or disambiguation. |


**Group Header: **Use to group related items within the tree.

**Chevron Button Icon**: Allows users to show or hide child nodes.

**Left Icon (optional): **Provides more context about each node

**Label: **Name of the tree node.

**Linked Label:** Link to the associated object or website.

**Right Icon (optional):** Provides more context about each node

**Metatext:** Text provided to aid with identification or disambiguation.

### Customization Options:

- Icons may be included on either the left or right side of the labels.
- Labels may be hyperlinked.
- A tree may be filtered by appending the tree to an input using [this blueprint](https://www.lightningdesignsystem.com/components/trees/#Filterable-Tree).


Icons may be included on either the left or right side of the labels.

Labels may be hyperlinked.

A tree may be filtered by appending the tree to an input using [this blueprint](https://www.lightningdesignsystem.com/components/trees/#Filterable-Tree).

### UI Content

- Node labels should be concise to avoid truncation.
- Limit the depth of the hierarchy to ensure readability.


Node labels should be concise to avoid truncation.

Limit the depth of the hierarchy to ensure readability.

## Behaviors

### States

1. **Default**: Nodes are displayed in their standard state.
2. **Hover**: Node changes background color to indicate interactivity.
3. **Active**: The currently selected node is highlighted to show the user's location.
4. **Disabled**: Node is visible but not interactive.
5. **Focus**: Node label is underlined as a visual cue for keyboard navigation. Selection follows focus.


**Default**: Nodes are displayed in their standard state.

**Hover**: Node changes background color to indicate interactivity.

**Active**: The currently selected node is highlighted to show the user's location.

**Disabled**: Node is visible but not interactive.

**Focus**: Node label is underlined as a visual cue for keyboard navigation. Selection follows focus.

### Interactions

- Nodes are selected by either clicking on the label or pressing enter/space while focused.
- Parent nodes can be expanded or collapsed by either clicking on the chevron icon or left/right while focused.
- Selection follows focus.


Nodes are selected by either clicking on the label or pressing enter/space while focused.

Parent nodes can be expanded or collapsed by either clicking on the chevron icon or left/right while focused.

Selection follows focus.

### Loading

Use spinners or stencils during lazy loading.

### Default selection

You may pre-select a node to guide users, such as highlighting the current folder in a directory.

## Related Components
