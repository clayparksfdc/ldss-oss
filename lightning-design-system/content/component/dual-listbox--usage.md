---
title: "Dual Listbox"
slug: "dual-listbox--usage"
category: "component"
parent: "dual-listbox"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-dueling-picklist--base
title: Dueling Picklist - Base
height: 400px
```

## Overview

- Select multiple items from one list and move them to another, building a list of selected items in the right-hand list.
- Commonly used in situations such as configuring user permissions, selecting products, or filtering lists.
- Add or remove items from the selection by using the arrow button icons.

ℹ️ In HTML Blueprint code, a **dual listbox** is referred to as a “*dueling lis*t” or *"dueling picklist"*. This distinction applies only to HTML Blueprints. It is referred to as a **dual listbox** anywhere else, including Base Components, documentation, and design libraries.

## Usage

The dual listbox allows users to easily move items between two lists, making it ideal for selecting and organizing data like user roles or product categories.

### Best Practices

- Use for a large set of options that can be organized into two categories, such as “Available Languages” and “Selected Languages.”
- Clearly label each list to avoid confusion.
- Provide helpful tooltips or instructions for how to use the component if necessary.
- Keep the lists fairly short to avoid overwhelming users. Aim for fewer than 20 items in each list.

### When Not to Use

- Don't use a dual listbox for binary selections (yes/no) where a simple toggle is appropriate.
- Don't use it for situations with fewer than five options, as it can complicate the interface unnecessarily. If possible, use a combobox.
- Don't use it in areas of the UI where space is limited, as it requires enough room to display both lists and the arrow buttons effectively.

## Types


| Standard Dual Listbox  This is the default style, featuring two lists with simple arrow buttons for item movement.  **Use case**  A manager is setting up a project team by selecting from a list of available employees. | *Dual listbox showing list of available and assigned employees.* |
| --- | --- |

## Appearance

The dual listbox consists of two main sections: the left list of available items, and the right list of selected items. Arrow buttons display between the lists and next to the list of selected items.

### Anatomy


| *                                *  | **Group label:** Describes the purpose of the dual listbox, such as "Select Languages". |
| --- | --- |
| *                                *  | **Field label:**Describes each list, such as “Available Languages” and “Selected Languages”. |
| *                                *  | **Dual listbox  / Left List**: Displays available items. Users can select one or more items to move to the right list. |
| *                                *                           *                                *  | **Arrow Icon Buttons**: Includes arrows for transferring items between lists, and can also feature labels such as "Add" and "Remove" to clarify actions. |
| *                                *  | **Dual listbox  / Right List**: Displays selected items. Users can remove items back to the left list. |
| *                       *  *           *                           *                       *  *           *  | **Up and down arrows:**Arrow buttons for changing the order of the selected items. These buttons can also feature labels such as "Move Up" and "Move Down" to clarify actions. |

### Customization Options

-**Labels**: Provide a group label for the component so users understand what it’s for. Give each list a field label to clarify what the list represents. The group label can have a required asterisk (*) and info tooltip.

### Size

- **Default:**

**Default Width:**240px
-**Maximum Width**: 400 pixels
- **Minimum Width**: 200 pixels

- **Default Width:**240px
-**Maximum Width**: 400 pixels
- **Minimum Width**: 200 pixels

### UI Content

- Labels use title case.
- **Options and values**: 

Use title case.
- To make it easy for users to find what they need, present the available items in the order you expect them to be used. This works best for shorter lists.
- Don’t use double hyphens around “None” or other options.

- Use title case.
- To make it easy for users to find what they need, present the available items in the order you expect them to be used. This works best for shorter lists.
- Don’t use double hyphens around “None” or other options.

**Truncation:**If item names are too long to show in the lists, text is truncated with an ellipsis. To make the list accessible to all users, display the full item name in a tooltip or other indicator that users can view or hear.

#### Content - Validation

The component automatically checks if users follow the rules you set, such as selecting a minimum or maximum number of options.

- Maximum Options (rangeOverflow) 

**Error Text: "Select at most [max] options."**
- Minimum Options (rangeUnderflow)

**Error Text: "At least [min] options must be selected."**
- Required Selection (valueMissing)

**Error Text: "An option must be selected."**

- **Error Text: "Select at most [max] options."**

- **Error Text: "At least [min] options must be selected."**

- **Error Text: "An option must be selected."**

You can change the default error messages to match the context of your application. For instance, instead of "At least [min] options must be selected," you might show "Choose at least three items to proceed."

Use these attributes to define your own messages:

- `message-when-range-overflow`: Customize the message for selecting too many options.
- `message-when-range-underflow`: Customize the message for selecting too few options.
- `message-when-value-missing`: Customize the message for no selection.

## Behaviors

### States

1. **Default:** List items are displayed in their standard state.
2. **Hover:**List items change background color to indicate interactivity.
3.**Active:** The currently selected list item is highlighted.
4. **Disabled:**Disabled list items are visible but not interactive.
5.**Component Disabled:**Both listboxes are grayed-out and non-interactive.

### Interactions

#### Triggers or Clickable Areas

Click on an item in either list to select it, then use the arrow buttons to move it.

#### Multiple selections

To move multiple items at once, press the Shift or Ctrl/Cmd key while clicking on the list items you want to move. Click on the arrow buttons to move them.

### Loading

During loading, the component can display a spinner or a loading message to indicate processing.

### Scrolling

When a listbox is set to a fixed height, scrolling is enabled to view additional options.

### Default Selection

This component supports pre-selected items. Pre-define required selections to give users an initial selection. Set a limit on the number of choices users can make with the `max` attribute. Make sure users select a minimum number of options with the `min` attribute.

## Related Components
