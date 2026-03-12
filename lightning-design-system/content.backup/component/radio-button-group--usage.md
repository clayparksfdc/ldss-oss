---
title: "Radio Button Group"
description: "The radio button group lets users select one option from a list of predefined options. This component is ideal for situations where you want users to make a single, clear choice."
category: "component"
slug: "radio-button-group--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

The radio button group lets users select one option from a list of predefined options. This component is ideal for situations where you want users to make a single, clear choice.

- A radio button group is a set of related options where users can only select one option at a time.
- Help users make decisions easily by presenting clear, grouped choices in a radio button group.
- Rounded buttons, each with a label, are arranged in horizontal groups.


A radio button group is a set of related options where users can only select one option at a time.

Help users make decisions easily by presenting clear, grouped choices in a radio button group.

Rounded buttons, each with a label, are arranged in horizontal groups.

## Usage

### Best Practices

- Use clear, concise labels for each option.
- Group related options logically.
- Keep the number of options within 3–7 to remain manageable.
- Provide a default selection if possible.


Use clear, concise labels for each option.

Group related options logically.

Keep the number of options within 3–7 to remain manageable.

Provide a default selection if possible.

### When Not to Use

- Don't use a radio button group when multiple selections are allowed—use a checkbox button group or checkboxes instead.
- Don't use it for binary choices—use a toggle checkbox or checkbox.


Don't use a radio button group when multiple selections are allowed—use a checkbox button group or checkboxes instead.

Don't use it for binary choices—use a toggle checkbox or checkbox.

## Types

| <h3>Default</h3> Displays text labels within buttons. Use when there's ample horizontal space, so that buttons align with the surrounding content. | *Default radio button group with six options.* |
| --- | --- |
|   |   |
| <h3>Icons</h3> Use icons when text isn't needed or takes up too much space. | *Icon radio button group with six options.* |
|   |   |


### Default

Displays text labels within buttons. Use when there's ample horizontal space, so that buttons align with the surrounding content.

*Default radio button group with six options.*

### Icons

Use icons when text isn't needed or takes up too much space.

*Icon radio button group with six options.*

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Field Label: **Describes the purpose of the radio button group. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>* | **Buttons: **Element that indicates if an option is selected or unselected. |


**Field Label: **Describes the purpose of the radio button group.

**Buttons: **Element that indicates if an option is selected or unselected.

### Customization Options

- `label-hidden` hides the radio group label but makes it available to assistive technology. This variant doesn't hide the button labels.
- `label-inline` horizontally aligns the label and radio group.
- `label-stacked` places the label above the radio group.
- `standard` is the default variant, which displays the radio group label above the options.


`label-hidden` hides the radio group label but makes it available to assistive technology. This variant doesn't hide the button labels.

`label-inline` horizontally aligns the label and radio group.

`label-stacked` places the label above the radio group.

`standard` is the default variant, which displays the radio group label above the options.

### Size

Adjusts automatically to fit any screen size.

### UI Content

- Use concise labels up to 20 characters.
- Avoid abbreviations unless they're universally understood.


Use concise labels up to 20 characters.

Avoid abbreviations unless they're universally understood.

## Behaviors

### States

1. **Default**
2. **Hover**
3. **Active (while pressing)**
4. **Focus (selection follows focus)**
5. **Disabled**
6. **Selected**
7. **Selected + Hover**
8. **Selected + Active**
9. **Selected + Disabled**


**Default**

**Hover**

**Active (while pressing)**

**Focus (selection follows focus)**

**Disabled**

**Selected**

**Selected + Hover**

**Selected + Active**

**Selected + Disabled**

### Interactions

- When users click a button, the button instantly updates to show it's selected.
- Only one button can be selected at a time.


When users click a button, the button instantly updates to show it's selected.

Only one button can be selected at a time.

### Default Selection

Create a smooth user experience by pre-selecting the most likely option.

| <h3>Validation</h3> Display error messages below the group when a required selection isn't made. Include help text for additional context. | *Example of error message.* |
| --- | --- |


### Validation

Display error messages below the group when a required selection isn't made. Include help text for additional context.

*Example of error message.*

## Related Components
