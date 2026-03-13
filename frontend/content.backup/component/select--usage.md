---
title: "Select"
description: "A select component provides a structured way for users to select from a menu. It enhances user experience by reducing input errors and improving efficiency when predefined options are appropriate."
category: "component"
slug: "select--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

A select component provides a structured way for users to select from a menu. It enhances user experience by reducing input errors and improving efficiency when predefined options are appropriate.

- Allows users to choose one or more options from a dropdown menu.
- Used in forms, settings, and data filtering across applications.
- Improves efficiency by presenting predefined options instead of requiring manual text entry.
- Consistent design standards, ensuring accessibility and usability.


Allows users to choose one or more options from a dropdown menu.

Used in forms, settings, and data filtering across applications.

Improves efficiency by presenting predefined options instead of requiring manual text entry.

Consistent design standards, ensuring accessibility and usability.

### Best Practices

- Provide clear, concise labels to help users understand their choices.
- Ensure the default selection is meaningful to prevent unnecessary user actions.


Provide clear, concise labels to help users understand their choices.

Ensure the default selection is meaningful to prevent unnecessary user actions.

### When Not to Use

- When users must enter custom values; use a text input.
- When the list is too long and needs search functionality.


When users must enter custom values; use a text input.

When the list is too long and needs search functionality.

## Types

| <h3>**Single-Select**</h3> Default menu for choosing an option | *Single selection component closed and open* |
| --- | --- |
|   |   |
| <h3>**Multi-Select**</h3> When the multiple attribute is used, most browsers display a scrollable list instead of a single dropdown. | *Multi-selection component with an exposed list and scrollbar* |
|   |   |


### Single-Select

Default menu for choosing an option

*Single selection component closed and open*

### Multi-Select

When the multiple attribute is used, most browsers display a scrollable list instead of a single dropdown.

*Multi-selection component with an exposed list and scrollbar*

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Select Label:** Describes what the user is selecting. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Dropdown Field:** Expands the list of options. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Supporting Text: **Additional instructions. *(optional)* |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Dropdown Arrows: **Indicates a menu will open over the dropdown field |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **List Items:** Display available choices. |


**Select Label:** Describes what the user is selecting.

**Dropdown Field:** Expands the list of options.

**Supporting Text: **Additional instructions. *(optional)*

**Dropdown Arrows: **Indicates a menu will open over the dropdown field

**List Items:** Display available choices.

### Customization Options

- Select Labels, placeholder text, and supporting text can be edited.
- The default selection can be empty or a specified option.


Select Labels, placeholder text, and supporting text can be edited.

The default selection can be empty or a specified option.

#### Label Positioning

The variants here show the available label positions the select component uses relative to the dropdown menu. The positioning of the label in relation to the dropdown menu for the select component is shown in the variants here.

| <h4>**Standard**</h4> The default, which displays the label above the dropdown menu. | *A select component with its label default on top, left aligned* |
| --- | --- |
|   |   |
| <h4>**Hidden**</h4> Hides the label but makes it available to assistive technology. If you provide a value for `field-level-help`, the tooltip icon is still displayed. | *A select component with its label hidden and tooltip icon displayed* |
|   |   |
| <h4>**Inline**</h4> Aligns the label and dropdown menu horizontally. | *A select component with its label horizontally aligned to the left* |


#### Standard

The default, which displays the label above the dropdown menu.

*A select component with its label default on top, left aligned*

#### Hidden

Hides the label but makes it available to assistive technology. If you provide a value for `field-level-help`, the tooltip icon is still displayed.

*A select component with its label hidden and tooltip icon displayed*

#### Inline

Aligns the label and dropdown menu horizontally.

*A select component with its label horizontally aligned to the left*

### Size

Can adjust width but should align with form elements.

### UI Content

- Keep labels for list items concise.
- The preferred placeholder text for dropdowns and picklists is "Select..."


Keep labels for list items concise.

The preferred placeholder text for dropdowns and picklists is "Select..."

## Behavior

### States

1. **Default**: Ready for selection.
2. **Active: **The dropdown menu expands, exposing selectable options.
3. **Disabled: **Grayed out, indicating the select component is currently unavailable.
4. **Focus-Closed: **Dark border around the triggering select component.
5. **Focus-Open: **Dark border around the triggering select component and highlighting the first option in the open menu.


**Default**: Ready for selection.

**Active: **The dropdown menu expands, exposing selectable options.

**Disabled: **Grayed out, indicating the select component is currently unavailable.

**Focus-Closed: **Dark border around the triggering select component.

**Focus-Open: **Dark border around the triggering select component and highlighting the first option in the open menu.

### Interactions

- Mouse click expands the dropdown to show available options.
- Keyboard navigation (arrow keys) is supported.


Mouse click expands the dropdown to show available options.

Keyboard navigation (arrow keys) is supported.

#### Selection Patterns

When you **Shift + Click** to select multiple items, it selects a range of items between your first and second clicks. This behavior is common in file managers, lists, tables, and multi-select interfaces across various applications. This can be contiguous or non-contiguous.

🛑 **Warning:** The keyboard method for selecting multiple non-adjacent items, explained below, currently works only in Firefox.

On macOS, the **Ctrl + Up** and **Ctrl + Down** shortcuts are used for **Mission Control** and **Application Windows** by default. To use them for selection, you'll need to disable these OS shortcuts first.

| <h4>Contiguous Selection</h4>**<strong>Mouse:** **Mouse users can select or deselect multiple options by holding Ctrl (Windows/Linux) or Command (macOS) while clicking. You can also use Shift to select a range of options.. <strong>Keyboard**:<ul><li>Focus on the <select> element (e.g., by pressing **Tab**).</li><li>Use the **Up** or **Down** arrow keys to navigate to the first item in the desired selection range.</li></ul>Hold **Shift** and press the **Up** or **Down** arrow keys to expand or shrink the selection range | *Multi-selection menu with contiguous options selected* |
| --- | --- |
|   |   |
| <h4>Non-Contiguous Selection</h4>**<strong>Mouse: **Ctrl + Click (Windows) or Cmd + Click (Mac)** <strong>Keyboard:**<ul><li>Focus on the <select> element (e.g., by pressing **Tab**).</li><li>Hold **Ctrl** and use the **Up** or **Down** arrow keys to move focus between options without selecting them. The focused option is highlighted with a dotted outline, similar to a keyboard-focused link.</li></ul>Press **Space** to select or deselect the focused option. | *Multi-selection menu with non-contiguous options selected* |
|   |   |


#### Contiguous Selection

**Mouse:**

Mouse users can select or deselect multiple options by holding Ctrl (Windows/Linux) or Command (macOS) while clicking. You can also use Shift to select a range of options..

**<strong>Keyboard**:

- Focus on the <select> element (e.g., by pressing **Tab**).
- Use the **Up** or **Down** arrow keys to navigate to the first item in the desired selection range.


Focus on the <select> element (e.g., by pressing **Tab**).

Use the **Up** or **Down** arrow keys to navigate to the first item in the desired selection range.

Hold **Shift** and press the **Up** or **Down** arrow keys to expand or shrink the selection range

*Multi-selection menu with contiguous options selected*

#### Non-Contiguous Selection

**Mouse: **

Ctrl + Click (Windows) or Cmd + Click (Mac)

**Keyboard:**

- Focus on the <select> element (e.g., by pressing **Tab**).
- Hold **Ctrl** and use the **Up** or **Down** arrow keys to move focus between options without selecting them. The focused option is highlighted with a dotted outline, similar to a keyboard-focused link.


Focus on the <select> element (e.g., by pressing **Tab**).

Hold **Ctrl** and use the **Up** or **Down** arrow keys to move focus between options without selecting them. The focused option is highlighted with a dotted outline, similar to a keyboard-focused link.

Press **Space** to select or deselect the focused option.

*Multi-selection menu with non-contiguous options selected*

### Scrolling

When using a multi-select variant, most browsers show a scrolling list box instead of a single-line dropdown. Alternatively, use the [dual listbox](https://www.lightningdesignsystem.com/2e1ef8501/p/763763) to move options between two lists and reorder the list options.

Select components can set a maximum height; scrolling helps users see all options without the menu getting too long. If there are more options than can fit in the visible space, a scrollbar appears so users can scroll with a mouse, trackpad, keyboard, or touch. If someone navigates with the keyboard, the menu automatically scrolls to keep the highlighted option in view.

To keep things easy to use, choose a height that shows enough options without feeling overwhelming.

## Validation

| <h4>**Required**</h4> Required fields are indicated by the red asterisk (*). | *A required select component* |
| --- | --- |
|   |   |
| <h4>**Error**</h4> A select component will change to an error state when a required option hasn’t been made. | *A required select component in an error state* |
|   |   |


#### Required

Required fields are indicated by the red asterisk (*).

*A required select component*

#### Error

A select component will change to an error state when a required option hasn’t been made.

*A required select component in an error state*

## Related Components
