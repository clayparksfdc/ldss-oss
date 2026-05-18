---
title: "Dual Listbox"
slug: "dual-listbox--usage"
category: "component"
parent: "dual-listbox"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-dueling-picklist--base)

## Overview

* Select multiple items from one list and move them to another, building a list of selected items in the right-hand list. 
* Commonly used in situations such as configuring user permissions, selecting products, or filtering lists.
* Add or remove items from the selection by using the arrow button icons.

>ℹ️ In HTML Blueprint code, a **dual listbox** is referred to as a “*dueling lis*t” or *"dueling picklist"*. This distinction applies only to HTML Blueprints. It is referred to as a **dual listbox** anywhere else, including Base Components, documentation, and design libraries.

## Usage

The dual listbox allows users to easily move items between two lists, making it ideal for selecting and organizing data like user roles or product categories.

### Best Practices

* Use for a large set of options that can be organized into two categories, such as “Available Languages” and “Selected Languages.”
* Clearly label each list to avoid confusion.
* Provide helpful tooltips or instructions for how to use the component if necessary.
* Keep the lists fairly short to avoid overwhelming users. Aim for fewer than 20 items in each list.

### When Not to Use

* Don't use a dual listbox for binary selections (yes/no) where a simple toggle is appropriate.
* Don't use it for situations with fewer than five options, as it can complicate the interface unnecessarily. If possible, use a combobox.
* Don't use it in areas of the UI where space is limited, as it requires enough room to display both lists and the arrow buttons effectively.

## Types

| **Standard Dual Listbox**  This is the default style, featuring two lists with simple arrow buttons for item movement.  **Use case** A manager is setting up a project team by selecting from a list of available employees.  | ![standard](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/7b1c6e3d88cce2fa00e1a0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=74f7dcb4e56c343acf55c4a8c9a780610213963c61ff32313e31a0a183c8c8ed) **standard** *Dual listbox showing list of available and assigned employees.*  |
| --- | :---: |

## Appearance

The dual listbox consists of two main sections: the left list of available items, and the right list of selected items. Arrow buttons display between the lists and next to the list of selected items.  

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/a816e3ad2a533544292201?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=870b3fdaff5a423cee4aebd6a04e3901fbf81e786795ba5b17ee62ce3f4f502a)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fede56a478a4a3e813b1976a11d9cd3a527c8e6bd9e0ec16d66b4b078947fed7) | **Group label:** Describes the purpose of the dual listbox, such as "Select Languages". |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d82b01633c5a5a346ffaf86a152b0e6ae7de86ece752b54e1ef05d2fce4500b9) | **Field label:** Describes each list, such as “Available Languages” and “Selected Languages”. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=24f0ffa7e5844107834b86df1829b6c0ffe5ca697fb614dacfd3d218a92d219b) | **Dual listbox  / Left List**: Displays available items. Users can select one or more items to move to the right list. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=354404f3e56bcb918fec9811c1ab8c7015b714a354b45f375fb99357ad7ef12e) ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=643698ca1cc6e94321f13a1bced5daca5042d4d796b666aa1070b485795fd262) | **Arrow Icon Buttons**: Includes arrows for transferring items between lists, and can also feature labels such as "Add" and "Remove" to clarify actions. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5c50a0ae03b2af4496ca187e31468ed61d11c951c1757c63d2a3fb270c8d9002) | **Dual listbox  / Right List**: Displays selected items. Users can remove items back to the left list. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/8BzRb_PcD2OVzbi8M2oQCw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=67091916da46602a0abc87e58be620dde4d907fcaafa518ca792f39c7032d32a) ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/joIh7jmyZdMltf8XV5m9Ug.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=20222a8feb5cb3cf0e07dcc722699da7db40caa12b8aa18708193fbd9b7f5ae4) | **Up and down arrows:** Arrow buttons for changing the order of the selected items. These buttons can also feature labels such as "Move Up" and "Move Down" to clarify actions. |

### Customization Options

* **Labels**: Provide a group label for the component so users understand what it’s for. Give each list a field label to clarify what the list represents. The group label can have a required asterisk (*) and info tooltip.

### Size

* **Default:**
    * **Default Width:** 240px
    * **Maximum Width**: 400 pixels
    * **Minimum Width**: 200 pixels

### UI Content

* Labels use title case.
* **Options and values**: 
    * Use title case. 
    * To make it easy for users to find what they need, present the available items in the order you expect them to be used. This works best for shorter lists.
    * Don’t use double hyphens around “None” or other options.

**Truncation:** If item names are too long to show in the lists, text is truncated with an ellipsis. To make the list accessible to all users, display the full item name in a tooltip or other indicator that users can view or hear.

#### **Content - Validation**

The component automatically checks if users follow the rules you set, such as selecting a minimum or maximum number of options.

* Maximum Options (rangeOverflow) 
    * **Error Text: "Select at most [max] options."**
* Minimum Options (rangeUnderflow)
    * **Error Text: "At least [min] options must be selected."**
* Required Selection (valueMissing)
    * **Error Text: "An option must be selected."**

You can change the default error messages to match the context of your application. For instance, instead of "At least [min] options must be selected," you might show "Choose at least three items to proceed."

Use these attributes to define your own messages:

* `message-when-range-overflow`: Customize the message for selecting too many options.
* `message-when-range-underflow`: Customize the message for selecting too few options.
* `message-when-value-missing`: Customize the message for no selection.

## Behaviors

### States

![Dual Listbox States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/1b5a138dbd60b2de037108?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1746b4fb754a4c3b3c144d338d5e1da60f6db45eaf87294a4ee7393b791952f9)

**Dual Listbox States**

---

![component-disabled](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/fcee65f4016acf7a40a820?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=622188bb6c7ffcdef23cc2215a5dab0cbfa36ef14049bf75dde8c04ff8604491)

**component-disabled**

---

1. **Default:** List items are displayed in their standard state.
2. **Hover:** List items change background color to indicate interactivity.
3. **Active:** The currently selected list item is highlighted.
4. **Disabled:** Disabled list items are visible but not interactive.
5. **Component Disabled:** Both listboxes are grayed-out and non-interactive.

### Interactions

![triggers](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/f59afabb549c8e5e2f0a46?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7efe61e29ce3d374c8d6ff449e3ed60cd31aa35ddf58dfa684387eecd51d2ede)

**triggers**

---

#### **Triggers or Clickable Areas**

Click on an item in either list to select it, then use the arrow buttons to move it. 

![multi-select](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/a3f0f13ae2b46e179e31c7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042726Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b15f65b28f2e7451bd86e78d187036f94a5482ff634cd3b8a7ca7069e264cf41)

**multi-select**

---

#### **Multiple selections**

To move multiple items at once, press the Shift or Ctrl/Cmd key while clicking on the list items you want to move. Click on the arrow buttons to move them.

### Loading

During loading, the component can display a spinner or a loading message to indicate processing.

### Scrolling

When a listbox is set to a fixed height, scrolling is enabled to view additional options.

### Default Selection

This component supports pre-selected items. Pre-define required selections to give users an initial selection. Set a limit on the number of choices users can make with the `max` attribute. Make sure users select a minimum number of options with the `min` attribute.

## Related Components
