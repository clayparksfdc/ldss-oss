---
title: "Radio Group"
description: "The radio group presents a set of options and allows only one option to be selected at a time."
category: "component"
slug: "radio-group"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- The radio group presents a set of options and allows only one option to be selected at a time.
- Consists of a group of radio buttons aligned vertically.
- Users can choose a single option from multiple choices.
- Often used in forms, surveys, and other situations where a user must choose one option from a list.


The radio group presents a set of options and allows only one option to be selected at a time.

Consists of a group of radio buttons aligned vertically.

Users can choose a single option from multiple choices.

Often used in forms, surveys, and other situations where a user must choose one option from a list.

## Usage

### Best Practices

- Give each radio button a descriptive label to clearly state what it represents.
- Always include a label for the group to provide context about what's being selected.
- Pre-select the option that users are likely to choose. If you're not sure which option they'll prefer, pre-select the first one in the list.


Give each radio button a descriptive label to clearly state what it represents.

Always include a label for the group to provide context about what's being selected.

Pre-select the option that users are likely to choose. If you're not sure which option they'll prefer, pre-select the first one in the list.

### When Not to Use

- Don't use a radio group if the user can select more than one option.
- Avoid using radio groups if the options aren’t mutually exclusive.
- If options must change frequently or dynamically, consider using a picklist instead.
- When there are a lot of options in a list, such as a list of US states, it can be difficult for users to scroll or adjust their view to see all the options. For these situations, consider using a different component, such as a [picklist](https://v1.lightningdesignsystem.com/components/picklist/).


Don't use a radio group if the user can select more than one option.

Avoid using radio groups if the options aren’t mutually exclusive.

If options must change frequently or dynamically, consider using a picklist instead.

When there are a lot of options in a list, such as a list of US states, it can be difficult for users to scroll or adjust their view to see all the options. For these situations, consider using a different component, such as a [picklist](https://v1.lightningdesignsystem.com/components/picklist/).

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Group Label:** Gives context for the options provided by the group of radio buttons. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Radio Button:** Circular element that indicates if an option is selected or unselected. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Label:** Description of the option. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Supporting Text: **Provides extra guidance or validation messages for the entire group or specific options. |


**Group Label:** Gives context for the options provided by the group of radio buttons.

**Radio Button:** Circular element that indicates if an option is selected or unselected.

**Label:** Description of the option.

**Supporting Text: **Provides extra guidance or validation messages for the entire group or specific options.

### Layout

Arrange radio buttons vertically, with enough padding between each option to prevent selection errors. The radio group component has the layout and default spacing built-in.

### UI Content

- Use the same text style for each item in a list.


Use the same text style for each item in a list.

- Keep radio button labels short and clear. This makes them easy to read and helps users quickly make a choice. Use 1–3 words per label.
- If more explanation is needed, describe what happens from the user’s perspective.
- Start with a verb that describes what the option does. Don't use “enable” or “activate”.
- Use sentence capitalization in the labels for these UI elements. No end punctuation.


Keep radio button labels short and clear. This makes them easy to read and helps users quickly make a choice. Use 1–3 words per label.

If more explanation is needed, describe what happens from the user’s perspective.

Start with a verb that describes what the option does. Don't use “enable” or “activate”.

Use sentence capitalization in the labels for these UI elements. No end punctuation.

## Behaviors

### States

1. **Default**: The initial state before user interaction.
2. **Selected**: Indicates the current selection within the group.
3. **Focus: **Highlights the radio button when the user navigates through the set using a keyboard. For this component, selection follows focus—when an item is in focus, it's also selected.
4. **Error: **Indicates a problem by highlighting the options in pink and displaying an error message to inform the user that a selection is required or invalid.
5. **Disabled: **Displays radio buttons in light gray and non-interactive, indicating that the user can't select or change any of the options.


**Default**: The initial state before user interaction.

**Selected**: Indicates the current selection within the group.

**Focus: **Highlights the radio button when the user navigates through the set using a keyboard. For this component, selection follows focus—when an item is in focus, it's also selected.

**Error: **Indicates a problem by highlighting the options in pink and displaying an error message to inform the user that a selection is required or invalid.

**Disabled: **Displays radio buttons in light gray and non-interactive, indicating that the user can't select or change any of the options.

### Interactions

Users can make a selection by clicking, pressing a key, or tapping either the radio button or its label.

### Position

Group radio buttons together near the related content or questions. This placement makes it easier for users to navigate through the content.

### Size

Radio buttons are adaptive—they're mobile-friendly and adjust to different screen sizes. On touch devices, they increase in size for easier tapping.

### Default Selection

To streamline the user experience, pre-select an option if a likely choice is clear.

### Validation

Error states are visually indicated with a red border around the radio buttons and an error message below the radio group, helping users quickly identify and correct the issue.

## Related Components
