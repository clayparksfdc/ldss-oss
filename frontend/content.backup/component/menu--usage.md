---
title: "Menu"
description: "Use a menu to offer a list of actions a user can take on a page or a specific record."
category: "component"
slug: "menu--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- Use a menu to offer a list of actions a user can take on a page or a specific record.
- The component consists of a trigger and a dropdown list of menu items that appears on user interaction.
- Menus are ideal for grouping secondary or less frequently used actions to keep the primary interface clean.


Use a menu to offer a list of actions a user can take on a page or a specific record.

The component consists of a trigger and a dropdown list of menu items that appears on user interaction.

Menus are ideal for grouping secondary or less frequently used actions to keep the primary interface clean.

## Usage

### Best Practices

- Use menus to group related actions together.
- Keep menu item labels short and direct. Start with a verb when possible, such as View Profile or Add to Campaign.
- Order menu items by usage, with the most common actions at the top.
- Use a divider to create logical groups within a long menu.
- Ensure the trigger or label clearly indicates the type of actions contained within the menu. A gear icon, for instance, implies settings or controls.


Use menus to group related actions together.

Keep menu item labels short and direct. Start with a verb when possible, such as View Profile or Add to Campaign.

Order menu items by usage, with the most common actions at the top.

Use a divider to create logical groups within a long menu.

Ensure the trigger or label clearly indicates the type of actions contained within the menu. A gear icon, for instance, implies settings or controls.

### When Not to Use

- **For primary actions or navigation**: Don't use a Menu for critical, top-level application navigation.
- **For a single action:** If there's only one possible action, use a Button instead of a Menu with a single item.
- **For Complex interactions**: Consider using a modal or combobox for complicated actions.


**For primary actions or navigation**: Don't use a Menu for critical, top-level application navigation.

**For a single action:** If there's only one possible action, use a Button instead of a Menu with a single item.

**For Complex interactions**: Consider using a modal or combobox for complicated actions.

## Types

| <h3>Base Menu</h3> A menu that appears when a button is clicked, displays a list of options. Base menu components can be used for navigational purposes as well. | *Base menu example.* |
| --- | --- |
|   |   |
| <h3>Single-Selection Menu</h3> A single-select menu lets users choose one option at a time. Selecting a new option replaces the previously selected one, similar to radio buttons. Unlike radio buttons, selecting the already selected option will deselect it, turning off the related feature. | *Single-selection menu example.* |
|   |   |
| <h3>Multi-Selection Menu</h3> A multi-select menu lets users select multiple options at once. Choosing an option adds it to the selection while selecting it again removes it. Each selection is independent, allowing flexibility in selecting or unselecting multiple options as needed. | *Multi-selection menu example.* |
|   |   |


### Base Menu

A menu that appears when a button is clicked, displays a list of options.

Base menu components can be used for navigational purposes as well.

*Base menu example.*

### Single-Selection Menu

A single-select menu lets users choose one option at a time. Selecting a new option replaces the previously selected one, similar to radio buttons.

Unlike radio buttons, selecting the already selected option will deselect it, turning off the related feature.

*Single-selection menu example.*

### Multi-Selection Menu

A multi-select menu lets users select multiple options at once. Choosing an option adds it to the selection while selecting it again removes it.

Each selection is independent, allowing flexibility in selecting or unselecting multiple options as needed.

*Multi-selection menu example.*

## Appearance

### Anatomy

| <img alt="" src="/uploads/Bi5Gh1oUfx83F66yhAYtuQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Trigger: **The element that opens the menu. |
| --- | --- |
| <img alt="" src="/uploads/6TrujATk_F15RTvUcpAsDQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Menu Items:** The selectable options within the menu. |
| <img alt="" src="/uploads/Ox8SUMfxl0TuYFQFIwS7qQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Left Icon: **Furthers the user’s understanding of the option. *(optional)* |
| <img alt="" src="/uploads/43C0hbDSst2MbiPklUvifw.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Dividers**: Creates separators between menu groups. *(optional)* |
| <img alt="" src="/uploads/tOaHla90mJKSsdRXjVKVWQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Subheader: **Defines a section of options within the menu. *(optional)* |
| <img alt="" src="/uploads/4r547Ot70gSMLe054YON3A.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Selected Option: **User-selected option that remains until unselected. |
| <img alt="" src="/uploads/I8yM9qIJTCophCJwl3ITzw.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Right Icon:** Additional affordance of meaning. *(optional)* |
| <img alt="" src="/uploads/AfQh9ytyPoU_bOUNPlHFWA.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Menu Container:** The area that houses menu items. |


**Trigger: **The element that opens the menu.

**Menu Items:** The selectable options within the menu.

**Left Icon: **Furthers the user’s understanding of the option. *(optional)*

**Dividers**: Creates separators between menu groups. *(optional)*

**Subheader: **Defines a section of options within the menu. *(optional)*

**Selected Option: **User-selected option that remains until unselected.

**Right Icon:** Additional affordance of meaning. *(optional)*

**Menu Container:** The area that houses menu items.

### Size & Layout

- The width of the menu dropdown is determined by the length of the content in its menu items.
- If the number of items exceeds the vertical space available in the viewport, the menu list becomes scrollable.
- SLDS provides different sizing classes for fixed menu list


The width of the menu dropdown is determined by the length of the content in its menu items.

If the number of items exceeds the vertical space available in the viewport, the menu list becomes scrollable.

SLDS provides different sizing classes for fixed menu list

| **Sizing Class** | **Actual Size** |
| --- | --- |
| `slds-dropdown_xx-small` | 6rem / 96px |
| `slds-dropdown_x-small` | 12rem / 192px |
| `slds-dropdown_small` | 15rem / 240px |
| `slds-dropdown_medium` | 20rem / 320px |
| `slds-dropdown_large` | 25rem / 400pxs |


**Sizing Class**

**Actual Size**

`slds-dropdown_xx-small`

6rem / 96px

`slds-dropdown_x-small`

12rem / 192px

`slds-dropdown_small`

15rem / 240px

`slds-dropdown_medium`

20rem / 320px

`slds-dropdown_large`

25rem / 400pxs

### Position

- Menus appear near their trigger element.
- The menu component automatically adjusts its position to stay within the browser's viewport, preventing the menu from appearing off-screen
- Control the menu's position relative to the trigger with the `menu-alignment` attribute. Options include `left, right, center, bottom-left, bottom-center,` and `bottom-right.`


Menus appear near their trigger element.

The menu component automatically adjusts its position to stay within the browser's viewport, preventing the menu from appearing off-screen

Control the menu's position relative to the trigger with the `menu-alignment` attribute. Options include `left, right, center, bottom-left, bottom-center,` and `bottom-right.`

### UI Content

- Ensure menu labels are short and action-oriented.<ul><li>For example, use "Add Product" instead of "You can add a product here."</li></ul>
- For example, use "Add Product" instead of "You can add a product here."
- Use sentence case for readability..


Ensure menu labels are short and action-oriented.

- For example, use "Add Product" instead of "You can add a product here."


For example, use "Add Product" instead of "You can add a product here."

Use sentence case for readability..

## Behaviors

### States

1. **Default**: Menu is hidden until triggered.
2. **Hover**: The background of a menu item changes color when a user hovers their mouse over it.
3. **Selected: **A menu item can be marked as selected using the `checked` attribute, which displays a checkmark icon to the left of the label.
4. **Disabled**: A disabled item is grayed out and can’t be hovered over or selected. Use this state when an action isn’t currently available.
5. **Focus: **When navigating with a keyboard, the focused item is highlighted with the hover and focus ring.


**Default**: Menu is hidden until triggered.

**Hover**: The background of a menu item changes color when a user hovers their mouse over it.

**Selected: **A menu item can be marked as selected using the `checked` attribute, which displays a checkmark icon to the left of the label.

**Disabled**: A disabled item is grayed out and can’t be hovered over or selected. Use this state when an action isn’t currently available.

**Focus: **When navigating with a keyboard, the focused item is highlighted with the hover and focus ring.

### Loading

When menu items are loaded from a server, the menu displays a spinner in place of the menu items, informing the user that content is on its way.

### Scrolling

When a menu’s content exceeds the available screen space, a vertical scrollbar appears. This is the default overflow behavior and allows users to access all items in a single, scrollable list.

### Status Notifications

| A menu item can display a status to provide users with more context at a glance. Add text and an optional icon placed on the right side of the menu item, separate from the main label. | *A menu item botification showing a warning state*. |
| --- | --- |


A menu item can display a status to provide users with more context at a glance. Add text and an optional icon placed on the right side of the menu item, separate from the main label.

*A menu item botification showing a warning state*.

### Submenu

| A submenu is a secondary menu nested within a parent menu item. Use a submenu only when a primary action has a small, well-defined set of secondary actions, such as listing available statuses under a Change Status item. For best results, the parent item must have a `utility:chevronright` icon and a clear category label. To ensure a good user experience, **do not** nest submenus more than one level deep. Before implementing a submenu, first consider simpler alternatives for managing a long list of actions. Organizing a single menu with dividers and headers is often clearer, while launching a modal from a menu item provides more space for complex workflows. | *A submenu opened within the nested parent menu.* |
| --- | --- |


A submenu is a secondary menu nested within a parent menu item. Use a submenu only when a primary action has a small, well-defined set of secondary actions, such as listing available statuses under a Change Status item. For best results, the parent item must have a `utility:chevronright` icon and a clear category label. To ensure a good user experience, **do not** nest submenus more than one level deep.

Before implementing a submenu, first consider simpler alternatives for managing a long list of actions. Organizing a single menu with dividers and headers is often clearer, while launching a modal from a menu item provides more space for complex workflows.

*A submenu opened within the nested parent menu.*

## Related Components
