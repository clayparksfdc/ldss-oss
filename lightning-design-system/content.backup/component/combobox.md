---
title: "Combobox"
description: "Commonly used for selecting from a large list of options."
category: "component"
slug: "combobox"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- Commonly used for selecting from a large list of options.
- Displays a dropdown listbox when users interact with the input field.
- Comboboxes are divided into two types: picklists and lookups. With picklists, the user can only select from a list of options. Lookups, on the other hand, allow users to filter through the options by typing into the input field.


Commonly used for selecting from a large list of options.

Displays a dropdown listbox when users interact with the input field.

Comboboxes are divided into two types: picklists and lookups. With picklists, the user can only select from a list of options. Lookups, on the other hand, allow users to filter through the options by typing into the input field.

## Usage

Comboboxes are ideal when users choose from a large dataset. They make it easy to find and select the right option, without having to scroll through a long list.

### Best Practices

- Provide clear, concise labels for list items.
- Use meaningful placeholder text to guide user input.
- Make sure options are relevant and ordered logically.


Provide clear, concise labels for list items.

Use meaningful placeholder text to guide user input.

Make sure options are relevant and ordered logically.

### When Not to Use

- Avoid using a combobox for binary choices—use a toggle or checkbox instead.
- Avoid implementing a combobox where predefined options aren't applicable.


Avoid using a combobox for binary choices—use a toggle or checkbox instead.

Avoid implementing a combobox where predefined options aren't applicable.

## Appearance

### Anatomy

| <img alt="" src="/uploads/Bi5Gh1oUfx83F66yhAYtuQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Field Label: **Describes the purpose of the combobox. |
| --- | --- |
| <img alt="" src="/uploads/6TrujATk_F15RTvUcpAsDQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Dropdown Icon: **Icon to indicate that a menu opens when clicked. |
| <img alt="" src="/uploads/Ox8SUMfxl0TuYFQFIwS7qQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Input Field: **Area where users type or select their data. |


**Field Label: **Describes the purpose of the combobox.

**Dropdown Icon: **Icon to indicate that a menu opens when clicked.

**Input Field: **Area where users type or select their data.

### Customization Options

- Field label customization options:<ul><li>Use `label-hidden` to hide the label but make it available to assistive technology.</li><li>Use `label-inline` to horizontally align the label and combobox.</li><li>Use `label-stacked` to place the label above the combobox.</li></ul>
- Use `label-hidden` to hide the label but make it available to assistive technology.
- Use `label-inline` to horizontally align the label and combobox.
- Use `label-stacked` to place the label above the combobox.


Field label customization options:

- Use `label-hidden` to hide the label but make it available to assistive technology.
- Use `label-inline` to horizontally align the label and combobox.
- Use `label-stacked` to place the label above the combobox.


Use `label-hidden` to hide the label but make it available to assistive technology.

Use `label-inline` to horizontally align the label and combobox.

Use `label-stacked` to place the label above the combobox.

### Size

- By default, the listbox width matches the input field width.
- Listbox height scrolls to the size of the list unless a max-height value is set.


By default, the listbox width matches the input field width.

Listbox height scrolls to the size of the list unless a max-height value is set.

### Layout

- Maintain consistent spacing with adjacent fields.
- Align the listbox edge with the input field for a clean UI.


Maintain consistent spacing with adjacent fields.

Align the listbox edge with the input field for a clean UI.

### UI Content

- Use title capitalization. In most cases (relatively short lists), order items by likely use. If the default option is a prompt, follow with an ellipsis.
- Limit text in listbox items to avoid truncation.
- Use concise labels to make them easy to scan.


Use title capitalization. In most cases (relatively short lists), order items by likely use. If the default option is a prompt, follow with an ellipsis.

Limit text in listbox items to avoid truncation.

Use concise labels to make them easy to scan.

## Behaviors

### States

Combobox has the following states:

1. **Default: **Input field displays optional placeholder text.
2. **Default with selected item(s)**: The input field displays the selected option(s).<ul><li>Selected options in the listbox are shown with a checkmark.</li></ul>
3. Selected options in the listbox are shown with a checkmark.
4. **Active/Focus: **Focus indicator is shown on the input field, which displays the optional placeholder text or selected option(s). <ul><li>The listbox opens by default when the combobox is clicked or receives focus.</li></ul>
5. The listbox opens by default when the combobox is clicked or receives focus.
6. **Disabled**: Input is inactive and visually muted.


**Default: **Input field displays optional placeholder text.

**Default with selected item(s)**: The input field displays the selected option(s).

- Selected options in the listbox are shown with a checkmark.


Selected options in the listbox are shown with a checkmark.

**Active/Focus: **Focus indicator is shown on the input field, which displays the optional placeholder text or selected option(s).

- The listbox opens by default when the combobox is clicked or receives focus.


The listbox opens by default when the combobox is clicked or receives focus.

**Disabled**: Input is inactive and visually muted.

### Interactions

- Listbox dropdown expands on click or focus.
- Items highlight on hover/focus and select on click/enter.


Listbox dropdown expands on click or focus.

Items highlight on hover/focus and select on click/enter.

### Loading

Shows a spinner when options are dynamically fetched.

### Scrolling

Listbox scrolls independently if items exceed the viewport or max-height is used.

### Responsive

Adjust listbox placement and width based on screen size.

### Default Selection

Pre-fill input with default values for convenience.

### Validation

- Show inline error messages when input doesn’t meet criteria.
- Use supporting text for guidance on the input format.


Show inline error messages when input doesn’t meet criteria.

Use supporting text for guidance on the input format.

## Related Components
