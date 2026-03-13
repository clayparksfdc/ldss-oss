---
title: "Pills"
description: "Pills display compact labels for items, such as objects or selections, which a user can quickly add, view, or remove."
category: "component"
slug: "pills--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- Pills display compact labels for items, such as objects or selections, which a user can quickly add, view, or remove.
- Pills can contain various elements beyond plain text, including icons, avatars, and links.
- Pills help users manage multiple selections in a clear, concise way within limited screen space.


Pills display compact labels for items, such as objects or selections, which a user can quickly add, view, or remove.

Pills can contain various elements beyond plain text, including icons, avatars, and links.

Pills help users manage multiple selections in a clear, concise way within limited screen space.

### Best Practices

- Use pills to display selected tags, filters, or items in limited space.
- Make sure remove button icons are visible and accessible to enable users to easily remove items.
- Make pills concise—use brief, clear labels that are immediately understandable.
- Use a listbox of pills to show a list of items selected from a multi-select combobox, lookup, or picklist.


Use pills to display selected tags, filters, or items in limited space.

Make sure remove button icons are visible and accessible to enable users to easily remove items.

Make pills concise—use brief, clear labels that are immediately understandable.

Use a listbox of pills to show a list of items selected from a multi-select combobox, lookup, or picklist.

### Pill Containers

A [pill container](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill-container/documentation) is a listbox that groups and displays multiple pills in a row. This allows users to interact with individual pills (for example, to remove them) or manage the entire group within the container.

There are two available Pill Containers:

- **Standard** Displays pills in an unordered listbox as an unordered list (<ul>), while maintaining listbox semantics for accessibility. Visually similar to the standard listbox, but semantically structured for screen readers to interpret each pill as a list item.
- **Bare** A standard listbox container that holds Bare Pills, which have no icons or borders. The container retains the same border and background styling as other pill containers, ensuring consistent structure while presenting a simplified visual treatment for each pill.


**Standard** Displays pills in an unordered listbox as an unordered list (<ul>), while maintaining listbox semantics for accessibility. Visually similar to the standard listbox, but semantically structured for screen readers to interpret each pill as a list item.

**Bare** A standard listbox container that holds Bare Pills, which have no icons or borders. The container retains the same border and background styling as other pill containers, ensuring consistent structure while presenting a simplified visual treatment for each pill.

#### Controlling How Pills Display

You can choose how pills appear in a container to fit your layout needs. By default, all pills are shown and wrap across multiple lines.

| **Wrapping** By default, pills wrap to new lines as needed. The container expands vertically to fit all pills, making every item visible without user interaction. |   |
| --- | --- |
|   |   |
| **Single Line (No wrapping)** To keep layouts compact, you can restrict the container to initially show only one line of pills. Pills that don’t fit wrap to new lines by default. An overflow behavior can be used to expand and collapse to reveal hidden pills. |   |
|   |   |
| **Overflow Behavior**** When not all pills are visible, show a button below the container. Use dynamic text like <strong>+3 more** or a clear label like **Expand** or **Show more**. Using the button reveals all pills and shifts focus for accessibility. |   |


**Wrapping**

By default, pills wrap to new lines as needed. The container expands vertically to fit all pills, making every item visible without user interaction.

**Single Line (No wrapping)**

To keep layouts compact, you can restrict the container to initially show only one line of pills. Pills that don’t fit wrap to new lines by default. An overflow behavior can be used to expand and collapse to reveal hidden pills.

**Overflow Behavior**

When not all pills are visible, show a button below the container. Use dynamic text like **+3 more** or a clear label like **Expand** or **Show more**. Using the button reveals all pills and shifts focus for accessibility.

ℹ️ Read more on how to implement and manage the pill container on our [developer site](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill-container/documentation#:~:text=%3B%0A%20%20%20%20%7D%0A%7D-,Managing%20Pill%20Layout%20in%20the%20Container,-Several%20boolean%20attributes).

### When Not to Use

- Don't use pills for long text labels or complex information.
- Don’t use pills for primary navigation or actions that don’t involve quick additions/removals.
- Avoid overusing pills in a crowded layout—too many pills can create visual clutter.


Don't use pills for long text labels or complex information.

Don’t use pills for primary navigation or actions that don’t involve quick additions/removals.

Avoid overusing pills in a crowded layout—too many pills can create visual clutter.

## Types

| <h3>Base</h3> Includes a remove button icon after the label text that allows users to remove the pill. It can contain an avatar or icon, and the label text can be a link. | *Base pill with label and remove action (X).* |
| --- | --- |
|   |   |


### Base

Includes a remove button icon after the label text that allows users to remove the pill. It can contain an avatar or icon, and the label text can be a link.

*Base pill with label and remove action (X).*

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Pill shape**: The contents of the pill are contained within rounded corners. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Avatar/Icon** *(optional)*: An image or icon that provides a visual representation of the pill item, such as a person or a company. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Remove button icon** *(optional)*: Allows users to remove the pill from the list. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Label**: The required text content of the pill. |
| * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>* | **Label with Link ***(optional)*: Text label with link. |


**Pill shape**: The contents of the pill are contained within rounded corners.

**Avatar/Icon** *(optional)*: An image or icon that provides a visual representation of the pill item, such as a person or a company.

**Remove button icon** *(optional)*: Allows users to remove the pill from the list.

**Label**: The required text content of the pill.

**Label with Link ***(optional)*: Text label with link.

### Customization Options

These elements are optional in a pill.

| <h4>Icon or Avatar</h4>A pill can have an icon or avatar that appears in front of the label to provide additional context or visual distinction. The icon type can be utility, standard, or custom. | *Top: Pill with avatar and remove button icon.**Bottom: Pill with icon and remove button icon.* |
| --- | --- |
|   |   |
| <h4>**Links**</h4>The pill label can act as a hyperlink for navigation. Specifying a target to change where the link should open is not supported. The link opens on the same tab or window. To create a URL that navigates to another page in Salesforce, use [`lightning-navigation`](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill/bundle/lightning-navigation/documentation). | *Linked pill with icon, remove button icon, and linked label text.* |
|   |   |
| <h4>Bare</h4>Doesn't have a border or hover state. Can contain an avatar or icon and the label text can be a link. | *Bare pill with remove button icon, and plain label text.* |
|   |   |
| <h4>Remove Button Icon</h4>A "remove" button icon can enable users to remove the pill from the list. | *1. The X is used as a remove button* |
|   |   |


#### Icon or Avatar

A pill can have an icon or avatar that appears in front of the label to provide additional context or visual distinction. The icon type can be utility, standard, or custom.

*Top: Pill with avatar and remove button icon.*

*Bottom: Pill with icon and remove button icon.*

#### Links

The pill label can act as a hyperlink for navigation. Specifying a target to change where the link should open is not supported. The link opens on the same tab or window.

To create a URL that navigates to another page in Salesforce, use [`lightning-navigation`](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill/bundle/lightning-navigation/documentation).

*Linked pill with icon, remove button icon, and linked label text.*

#### Bare

Doesn't have a border or hover state. Can contain an avatar or icon and the label text can be a link.

*Bare pill with remove button icon, and plain label text.*

#### Remove Button Icon

A "remove" button icon can enable users to remove the pill from the list.

*1. The X is used as a remove button*

### Size

Pills are larger on devices that use touchscreens to make it easier to tap them with a finger.

### Layout

- Use a minimum of 4px spacing between pills to avoid crowding.
- In a group, the pills align horizontally. If there's not enough space, the pills at the end move to the next line.


Use a minimum of 4px spacing between pills to avoid crowding.

In a group, the pills align horizontally. If there's not enough space, the pills at the end move to the next line.

### UI Content

- Make pill labels concise, ideally one or two words.
- Use sentence case for pill labels unless a word in the label is a proper noun, which has an initial capital.


Make pill labels concise, ideally one or two words.

Use sentence case for pill labels unless a word in the label is a proper noun, which has an initial capital.

## Behaviors

### States

1. **Default:** The pill appears with a label and a remove button icon.
2. **Hover**: The pill background slightly changes color on hover to show interactivity.
3. **Focus**: A focus ring appears outside of the pill border when using keyboard navigation.
4. **Error:** Includes an error icon before the label and uses error state coloring.<ol><li>A pill can show an error to indicate an issue with the selected item. Issues can include invalid input, duplicated selection, missing data, a failure to process the selection, or the user doesn't have permission to modify the pill.</li></ol>
5. A pill can show an error to indicate an issue with the selected item. Issues can include invalid input, duplicated selection, missing data, a failure to process the selection, or the user doesn't have permission to modify the pill.


**Default:** The pill appears with a label and a remove button icon.

**Hover**: The pill background slightly changes color on hover to show interactivity.

**Focus**: A focus ring appears outside of the pill border when using keyboard navigation.

**Error:** Includes an error icon before the label and uses error state coloring.

1. A pill can show an error to indicate an issue with the selected item. Issues can include invalid input, duplicated selection, missing data, a failure to process the selection, or the user doesn't have permission to modify the pill.


A pill can show an error to indicate an issue with the selected item. Issues can include invalid input, duplicated selection, missing data, a failure to process the selection, or the user doesn't have permission to modify the pill.

### Interactions

| <h4>A pill has two clickable elements.</h4><ol><li>The pill container</li><li>The remove button icon</li></ol>The entire pill is clickable if linked. The remove button icon has a separate removal trigger. | *Pill with clickable elements numbered - 1. Pill container, 2. Remove button.* |
| --- | --- |


#### A pill has two clickable elements.

1. The pill container
2. The remove button icon


The pill container

The remove button icon

The entire pill is clickable if linked. The remove button icon has a separate removal trigger.

*Pill with clickable elements numbered - 1. Pill container, 2. Remove button.*

## Related Components
