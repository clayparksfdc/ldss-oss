---
title: "Checkbox Button"
description: "Used for single selections as it switches between checked and unchecked states"
category: "component"
slug: "checkbox-button"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- Used for single selections as it switches between checked and unchecked states
- When active, the button shows that it's checked by changing the icon and color.
- Primarily used for adding or removing items in a group.
- The (+) and (✓) icons depict unchecked and checked states.


Used for single selections as it switches between checked and unchecked states

When active, the button shows that it's checked by changing the icon and color.

Primarily used for adding or removing items in a group.

The (+) and (✓) icons depict unchecked and checked states.

## Usage

The checkbox button component in Salesforce makes it clear and easy to select options. It toggles between checked and unchecked states, and the icon changes to reflect the selection.

### Best Practices

- Ensure the checkbox button has a proper accessible name associated with it for screen readers. It should also provide keyboard focus using the Tab key and be operable using the Spacebar or Enter keys. See the Accessibility section for more details.


Ensure the checkbox button has a proper accessible name associated with it for screen readers. It should also provide keyboard focus using the Tab key and be operable using the Spacebar or Enter keys. See the Accessibility section for more details.

### When Not to Use

- Avoid using too many checkbox buttons on a single screen. Too many options can overwhelm the user.
- Don’t use checkbox buttons for anything other than a binary option.
- When you have more than two conditions to choose from, consider using a checkbox, checkbox button group, picklist, or combobox.
- If a checkbox button involves complex choices, consider using a button or dropdown. Checkbox buttons are best suited for switching something on and off.
- Stateful button icons are also used for single actions. Unlike checkbox buttons, the icon doesn't change when selected.


Avoid using too many checkbox buttons on a single screen. Too many options can overwhelm the user.

Don’t use checkbox buttons for anything other than a binary option.

When you have more than two conditions to choose from, consider using a checkbox, checkbox button group, picklist, or combobox.

If a checkbox button involves complex choices, consider using a button or dropdown. Checkbox buttons are best suited for switching something on and off.

Stateful button icons are also used for single actions. Unlike checkbox buttons, the icon doesn't change when selected.

## Types

| <h3>Base Checkbox Button</h3>**A base checkbox button is selected and unselected.<strong>Use case:** Make it obvious what people can do and make it easy for them to take action. | *Checkbox button in default and pressed state.* |
| --- | --- |
|   |   |


### Base Checkbox Button

A base checkbox button is selected and unselected.

**Use case:** Make it obvious what people can do and make it easy for them to take action.

*Checkbox button in default and pressed state.*

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Checkbox Button Container**: Holds all checkbox buttons in a unified layout. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Button Icons**: Can display icons. |


**Checkbox Button Container**: Holds all checkbox buttons in a unified layout.

**Button Icons**: Can display icons.

### Customization Options

#### Icon

- The default (+) and (✓) icons are the only ones available for checkbox button.


The default (+) and (✓) icons are the only ones available for checkbox button.

### Size

The checkbox button is 32x32 pixels in the browser and resizes for mobile and tablet views.

## Behaviors

### States

1. **Default: **Checkbox is unchecked.
2. **Hover: **When you hover over the checkbox, the background color changes to show interactivity.
3. **Active: **The checkbox becomes checked when you select it.
4. **Focused: **If you use keyboard navigation to reach the checkbox, it receives focus and you can press Enter or the spacebar to activate it.
5. **Disabled: **The checkbox appears grayed out and isn't interactive.


**Default: **Checkbox is unchecked.

**Hover: **When you hover over the checkbox, the background color changes to show interactivity.

**Active: **The checkbox becomes checked when you select it.

**Focused: **If you use keyboard navigation to reach the checkbox, it receives focus and you can press Enter or the spacebar to activate it.

**Disabled: **The checkbox appears grayed out and isn't interactive.

1. **Selected:** Check box is checked
2. **Selected + hover:** When you hover over the checked checkbox, the background changes to show interactivity.
3. **Selected + active:** The checkbox becomes unchecked when you select it.
4. **Selected + focus:** If you use keyboard navigation to reach the checkbox, it receives focus and you can press Enter or the spacebar to activate it.
5. **Selected + disabled: **The checkbox appears grayed out and is not interactive.


**Selected:** Check box is checked

**Selected + hover:** When you hover over the checked checkbox, the background changes to show interactivity.

**Selected + active:** The checkbox becomes unchecked when you select it.

**Selected + focus:** If you use keyboard navigation to reach the checkbox, it receives focus and you can press Enter or the spacebar to activate it.

**Selected + disabled: **The checkbox appears grayed out and is not interactive.

## Related Components
