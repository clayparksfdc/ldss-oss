---
title: "Timepicker"
description: "The Timepicker enables users to input or select a time in a user-friendly manner. It reduces potential errors from manual text entry by offering preformatted time values in a dropdown. Users can also "
category: "general"
slug: "timepicker"
status: "published"
lastModified: "2026-03-11"
---

## Overview

The Timepicker enables users to input or select a time in a user-friendly manner. It reduces potential errors from manual text entry by offering preformatted time values in a dropdown. Users can also type a time directly if necessary. The Timepicker is flexible and customizable, making it suitable for various applications requiring time entry.

- The Timepicker simplifies time input by providing a dropdown menu with preformatted time values.
- It ensures consistency and reduces user errors compared to manual time entry.
- Often used in forms, scheduling tools, and workflows requiring precise time input.
- The component supports both 12-hour (with AM/PM) and 24-hour formats, adapting to regional settings.


The Timepicker simplifies time input by providing a dropdown menu with preformatted time values.

It ensures consistency and reduces user errors compared to manual time entry.

Often used in forms, scheduling tools, and workflows requiring precise time input.

The component supports both 12-hour (with AM/PM) and 24-hour formats, adapting to regional settings.

## Usage

### Best Practices

- Place the Timepicker in a logical position within forms or workflows, aligned with other inputs.
- Default to a 12-hour or 24-hour format based on the user's locale or application settings.
- Provide clear validation messages if the input format is incorrect.


Place the Timepicker in a logical position within forms or workflows, aligned with other inputs.

Default to a 12-hour or 24-hour format based on the user's locale or application settings.

Provide clear validation messages if the input format is incorrect.

### When Not to Use

- Avoid using the Timepicker for date or datetime selection. Use a Datepicker or Datetime Picker instead.
- Do not use the Timepicker if approximate time input is sufficient (e.g., “morning” or “afternoon”).


Avoid using the Timepicker for date or datetime selection. Use a Datepicker or Datetime Picker instead.

Do not use the Timepicker if approximate time input is sufficient (e.g., “morning” or “afternoon”).

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Field label: **Describes the purpose of the input field. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Input Field: **Area where users type or select their data. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Listbox: **Container with a list of options, where only one can be selected. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Selected listbox item: **Selected menu item in a listbox. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Listbox item: **Menu item in a listbox. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Dropdown: **Icon to indicate that a menu opens when clicked. |


**Field label: **Describes the purpose of the input field.

**Input Field: **Area where users type or select their data.

**Listbox: **Container with a list of options, where only one can be selected.

**Selected listbox item: **Selected menu item in a listbox.

**Listbox item: **Menu item in a listbox.

**Dropdown: **Icon to indicate that a menu opens when clicked.

### Customization Options

- Change interval steps (e.g., 15 minutes, 1 hour).
- Enable or disable manual text input.
- Adjust the display format (12-hour or 24-hour).
- Enable display of seconds.
- On mobile devices, this component uses the native time picker, which ignores the time-style attribute. The native time picker uses the user's device settings for the input time format.


Change interval steps (e.g., 15 minutes, 1 hour).

Enable or disable manual text input.

Adjust the display format (12-hour or 24-hour).

Enable display of seconds.

On mobile devices, this component uses the native time picker, which ignores the time-style attribute. The native time picker uses the user's device settings for the input time format.

### UI Content

- Placeholder text: Use descriptive text like “Select a time.”
- Validation: Use concise error messages, e.g., “Enter a valid time.”


Placeholder text: Use descriptive text like “Select a time.”

Validation: Use concise error messages, e.g., “Enter a valid time.”

## Behaviors

### States

1. **Default**
2. **Active**
3. **Selected**
4. **Closed+Filled**


**Default**

**Active**

**Selected**

**Closed+Filled**

### Interactions

- **Triggers**: Clicking or pressing enter/space on a keyboard activates the dropdown.
- **Input**: If enabled, users can type a time or select from the dropdown.


**Triggers**: Clicking or pressing enter/space on a keyboard activates the dropdown.

**Input**: If enabled, users can type a time or select from the dropdown.

### Validation

- Validation occurs after focus moves away.
- Displays error states with help text for invalid formats (e.g., “Invalid time format. Use HH:MM AM/PM”).


Validation occurs after focus moves away.

Displays error states with help text for invalid formats (e.g., “Invalid time format. Use HH:MM AM/PM”).

## Related Components
