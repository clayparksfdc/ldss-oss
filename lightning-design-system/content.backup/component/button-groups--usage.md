---
title: "Button Groups"
description: "Used to group related actions or options together. Button groups allow users to make selections or trigger actions without navigating away."
category: "component"
slug: "button-groups--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- Used to group related actions or options together. Button groups allow users to make selections or trigger actions without navigating away.
- Displays buttons in a row or dropdown format, creating a clear, consistent layout for quick access.
- Buttons within a button group can toggle, link to pages, or perform specific actions based on user selections.
- Available in outline, brand, and inverse button styles.
- Can contain text buttons, icon buttons, or dropdown buttons.


Used to group related actions or options together. Button groups allow users to make selections or trigger actions without navigating away.

Displays buttons in a row or dropdown format, creating a clear, consistent layout for quick access.

Buttons within a button group can toggle, link to pages, or perform specific actions based on user selections.

Available in outline, brand, and inverse button styles.

Can contain text buttons, icon buttons, or dropdown buttons.

## Usage

Button groups simplify workflows by keeping related actions in one place. They’re most effective when users need quick access to several actions or options.

### Best Practices

- Use button groups for related actions like filter, sort, or export.
- To avoid clutter, limit the number of buttons. Too many options can overwhelm users.
- Use a descriptive label for each button so that users know what action to expect.
- Keep button group content consistent across pages.


Use button groups for related actions like filter, sort, or export.

To avoid clutter, limit the number of buttons. Too many options can overwhelm users.

Use a descriptive label for each button so that users know what action to expect.

Keep button group content consistent across pages.

### When Not to Use

- Avoid using button groups for standalone actions.
- Avoid long button groups.** **Too many buttons in a group can be confusing and harder to use.
- Separate unrelated actions into individual buttons or button groups.


Avoid using button groups for standalone actions.

Avoid long button groups.** **Too many buttons in a group can be confusing and harder to use.

Separate unrelated actions into individual buttons or button groups.

## Types

| <h3>Base Button Group</h3>**Displays buttons in a simple row without extra styling. <strong>Use case:** For related actions on a page, which allows the user to take quick actions without navigating away. | *Base Button Group Example.* |
| --- | --- |
|   |   |
| <h3>Icon-Only Button Group</h3>**Uses icons instead of text for actions that are easily recognizable, like a settings gear or a trash can icon. <strong>Use case:** A compact toolbar uses an icon-only button group with "Download," "Share," and "Favorite" icon buttons, which allow users to quickly perform actions. | *Icon-only Base Button Group Example.* |
|   |   |
| <h3>Split Button Group</h3>**Allows users to select a main action while providing additional options in a dropdown format. <strong>Use case**: In an email client, a split button uses “Send" as the main button, with additional options like "Send Later" or "Schedule" in a dropdown. | *Split Button Group Example.* |


### Base Button Group

Displays buttons in a simple row without extra styling.

**<strong>Use case:** For related actions on a page, which allows the user to take quick actions without navigating away.

*Base Button Group Example.*

### Icon-Only Button Group

Uses icons instead of text for actions that are easily recognizable, like a settings gear or a trash can icon.

**<strong>Use case:** A compact toolbar uses an icon-only button group with "Download," "Share," and "Favorite" icon buttons, which allow users to quickly perform actions.

*Icon-only Base Button Group Example.*

### Split Button Group

Allows users to select a main action while providing additional options in a dropdown format.

**Use case**: In an email client, a split button uses “Send" as the main button, with additional options like "Send Later" or "Schedule" in a dropdown.

*Split Button Group Example.*

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Button Container**: Holds all buttons in a unified layout. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Button Icons**: Can display icons next to or instead of text labels. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Dropdown Indicator**: Indicates a split button option. |


**Button Container**: Holds all buttons in a unified layout.

**Button Icons**: Can display icons next to or instead of text labels.

**Dropdown Indicator**: Indicates a split button option.

### Size

Button group size is dependent on the button label content.

### Layout

Maintain equal spacing between buttons. Margins and padding keep the group visually balanced.

### UI Content

Keep labels brief and descriptive (for example "Save" or "Cancel").

Avoid long text; icons can be used for frequently recognized actions.

## Behaviors

### States

1. **Default: **Buttons are visible and active.
2. **Hover: **Button changes color slightly to indicate interactivity.
3. **Active: **Button color changes to show it’s been clicked.
4. **Disabled:** Button is visible but not clickable, revealing that its action isn't available for certain users or conditions.
5. **Focus: **Button receives a highlighted border for keyboard navigation accessibility.


**Default: **Buttons are visible and active.

**Hover: **Button changes color slightly to indicate interactivity.

**Active: **Button color changes to show it’s been clicked.

**Disabled:** Button is visible but not clickable, revealing that its action isn't available for certain users or conditions.

**Focus: **Button receives a highlighted border for keyboard navigation accessibility.

### Interactions

- **Click:** Executes the primary action tied to the button.
- **Dropdown Expand: **Split buttons expand to show additional options on click.
- **Loading: **Indicates data is loading for actions that take time to complete, such as "Processing" or a loading spinner.


**Click:** Executes the primary action tied to the button.

**Dropdown Expand: **Split buttons expand to show additional options on click.

**Loading: **Indicates data is loading for actions that take time to complete, such as "Processing" or a loading spinner.

### Responsive

- Button groups adapt to various screen sizes, stacking vertically on smaller screens.
- Button groups are responsive and automatically adjust to fit mobile, tablet, and desktop views.


Button groups adapt to various screen sizes, stacking vertically on smaller screens.

Button groups are responsive and automatically adjust to fit mobile, tablet, and desktop views.

## Related Components
