---
title: "Color Picker"
description: "With the color picker, you can select colors for use in different Salesforce components and customizations."
category: "foundation"
slug: "color-picker--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- With the color picker, you can select colors for use in different Salesforce components and customizations.
- Commonly used in Salesforce to add brand color selections or personalize interface elements.
- Select from a standard color palette or use the color input field for custom colors.
- The color picker is composed of input, popover, tabs, and button components.


With the color picker, you can select colors for use in different Salesforce components and customizations.

Commonly used in Salesforce to add brand color selections or personalize interface elements.

Select from a standard color palette or use the color input field for custom colors.

The color picker is composed of input, popover, tabs, and button components.

## Usage

The color picker component is designed for cases where users want to select, customize, or update colors, such as charts, backgrounds, or highlights, within their Salesforce environments. It enables the user to pick from a set of predefined colors (swatches), or to pick a custom color using a hue-saturation-brightness (HSB) selection interface.

### Best Practices

- Use the color picker when you want to give users control over visual customization, like adding branding elements.
- Limit custom color options with a predefined color palette to encourage brand consistency and avoid overly complex or inaccessible color choices.
- Make sure that selected colors meet contrast standards for readability and accessibility.


Use the color picker when you want to give users control over visual customization, like adding branding elements.

Limit custom color options with a predefined color palette to encourage brand consistency and avoid overly complex or inaccessible color choices.

Make sure that selected colors meet contrast standards for readability and accessibility.

### When Not to Use

- Don’t use the color picker for selecting text colors on dynamic content, as it can reduce readability.
- Don’t overwhelm users with a large palette—limit choices to promote a cleaner, more usable interface.
- Avoid embedding the color picker within multi-step workflows or modals where it can feel intrusive.


Don’t use the color picker for selecting text colors on dynamic content, as it can reduce readability.

Don’t overwhelm users with a large palette—limit choices to promote a cleaner, more usable interface.

Avoid embedding the color picker within multi-step workflows or modals where it can feel intrusive.

## Types

| <h3>Base </h3>**A set of predefined colors that align with the Salesforce branding guidelines. <strong>Use case**When Salesforce brand alignment is critical. | *Example of a base color picker closed (left) and open (right).* |
| --- | --- |
|   |   |
| <h3>Custom </h3>**A free-form color selection tool that allows users to mix and select any color using a spectrum, slider, or input field. <strong>Use case **Use when users need to define unique or brand-specific colors that aren't available in a predefined palette, such as creating themes, charts, or custom visuals. | *Example of a custom color picker closed (left) and open (right).* |
|   |   |
| <h3>Predefined</h3>**Predefined offers an initial selected color, a curated set of swatches, and an optional custom color input. <strong>Use case**Use when maintaining visual consistency is important—such as adhering to a design system or brand palette—while still giving users room for customization when needed. | *Example of a predefined color picker closed (left) and open (right).* |
|   |   |
| <h3>Swatch</h3>**Includes both predefined colors and a custom input option. <strong>Use case**When the need for consistency and flexibility coexists. | *Example of a swatch color picker closed (left) and open (right).* |


### Base

A set of predefined colors that align with the Salesforce branding guidelines.

**Use case**

When Salesforce brand alignment is critical.

*Example of a base color picker closed (left) and open (right).*

### Custom

A free-form color selection tool that allows users to mix and select any color using a spectrum, slider, or input field.

**Use case **

Use when users need to define unique or brand-specific colors that aren't available in a predefined palette, such as creating themes, charts, or custom visuals.

*Example of a custom color picker closed (left) and open (right).*

### Predefined

Predefined offers an initial selected color, a curated set of swatches, and an optional custom color input.

**Use case**

Use when maintaining visual consistency is important—such as adhering to a design system or brand palette—while still giving users room for customization when needed.

*Example of a predefined color picker closed (left) and open (right).*

### Swatch

Includes both predefined colors and a custom input option.

**Use case**

When the need for consistency and flexibility coexists.

*Example of a swatch color picker closed (left) and open (right).*

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Dropdown with color swatch: **A small preview box showing the currently selected color. It updates immediately whenever the selected color changes. Pressing the color swatch opens the color palette. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Custom color input (Hex):** Displays the hexadecimal value of the current color (e.g., #FFFFFF). Users can view or manually enter a hex color. If valid, it updates the color swatch and other connected elements. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Custom color input (RGB): **Users can view or manually input color values in Hex, RGB (Red, Green, Blue). If valid, it updates the color swatch and other connected elements. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | <ol><li>**Color Palette:** A grid of selectable color swatches representing standard color options.<ol><li>**Color swatch: **A small preview box showing the currently selected color (“working color”). It updates immediately whenever the selected color changes.</li><li>**Hue slider: **Lets users adjust the hue (color family) of the selected color.</li><li>**Custom range (saturation and brightness matrix): **Adjusts saturation and brightness in a draggable grid. Clicking anywhere on the grid updates the color based on the clicked position, and it moves the range indicator to reflect the new selection.</li></ol></li></ol> |


**Dropdown with color swatch: **A small preview box showing the currently selected color. It updates immediately whenever the selected color changes. Pressing the color swatch opens the color palette.

**Custom color input (Hex):** Displays the hexadecimal value of the current color (e.g., #FFFFFF). Users can view or manually enter a hex color. If valid, it updates the color swatch and other connected elements.

**Custom color input (RGB): **Users can view or manually input color values in Hex, RGB (Red, Green, Blue). If valid, it updates the color swatch and other connected elements.

1. **Color Palette:** A grid of selectable color swatches representing standard color options.<ol><li>**Color swatch: **A small preview box showing the currently selected color (“working color”). It updates immediately whenever the selected color changes.</li><li>**Hue slider: **Lets users adjust the hue (color family) of the selected color.</li><li>**Custom range (saturation and brightness matrix): **Adjusts saturation and brightness in a draggable grid. Clicking anywhere on the grid updates the color based on the clicked position, and it moves the range indicator to reflect the new selection.</li></ol>
2. **Color swatch: **A small preview box showing the currently selected color (“working color”). It updates immediately whenever the selected color changes.
3. **Hue slider: **Lets users adjust the hue (color family) of the selected color.
4. **Custom range (saturation and brightness matrix): **Adjusts saturation and brightness in a draggable grid. Clicking anywhere on the grid updates the color based on the clicked position, and it moves the range indicator to reflect the new selection.


**Color Palette:** A grid of selectable color swatches representing standard color options.

1. **Color swatch: **A small preview box showing the currently selected color (“working color”). It updates immediately whenever the selected color changes.
2. **Hue slider: **Lets users adjust the hue (color family) of the selected color.
3. **Custom range (saturation and brightness matrix): **Adjusts saturation and brightness in a draggable grid. Clicking anywhere on the grid updates the color based on the clicked position, and it moves the range indicator to reflect the new selection.


**Color swatch: **A small preview box showing the currently selected color (“working color”). It updates immediately whenever the selected color changes.

**Hue slider: **Lets users adjust the hue (color family) of the selected color.

**Custom range (saturation and brightness matrix): **Adjusts saturation and brightness in a draggable grid. Clicking anywhere on the grid updates the color based on the clicked position, and it moves the range indicator to reflect the new selection.

### Customization Options

#### Size

The color picker is fixed-width and has a compact design so it can fit into small spaces within forms or settings panels.

#### Layout

The color picker is easy to use and doesn't take up too much space. It has a central color palette, custom color input fields, and preview areas. When you click the dropdown, the color picker appears as a popover displayed at the top of the z-index.

### UI Content

Make sure color values (hex or RGB) are formatted accurately and are easy to read.

#### Field Labels

Labels tell users what information is needed in each field.

#### Best Practices

- Use clear, descriptive names that make sense on their own. For example, use “Email Address” instead of just “Email.”
- Aim for concise labels—one or two words if possible.
- Use Title Case. Capitalize the main words, for example “First Name” and “Phone Number.”
- Make sure every field has a label. This helps screen readers identify fields correctly. If you hide labels visually, use `aria-label` to make sure they’re accessible.


Use clear, descriptive names that make sense on their own. For example, use “Email Address” instead of just “Email.”

Aim for concise labels—one or two words if possible.

Use Title Case. Capitalize the main words, for example “First Name” and “Phone Number.”

Make sure every field has a label. This helps screen readers identify fields correctly. If you hide labels visually, use `aria-label` to make sure they’re accessible.

## Behaviors

### States

- **Default:** The open popover shows available colors with custom input fields.
- **Hover: **The cursor changes to a pointing hand over the color swatch.
- **Active:** Displays the selected color in the preview area.
- **Disabled: **Turns input fields gray if customization is unavailable to the user.


**Default:** The open popover shows available colors with custom input fields.

**Hover: **The cursor changes to a pointing hand over the color swatch.

**Active:** Displays the selected color in the preview area.

**Disabled: **Turns input fields gray if customization is unavailable to the user.

### Interactions

**Triggers or Clickable Areas:** Clicking on the input activates the color picker. Clicking on a color swatch activates the selected color.

### Position

Position the color picker within settings or customization areas, generally aligning it near relevant objects like themes or dashboard widgets. Avoid placing it in areas unrelated to customization.

### Loading

If loading is needed for custom palettes, show a loading spinner to indicate progress.

### Default Selection

For best usability, show a default color within the component, giving users a reference point.

### Validation

Provide clear validation messages for incorrect hex or RGB values to help users correct their entries. For example: “Invalid color code. Please enter a hex code like #FFFFFF.”

*Image Placeholder: Validation message displayed when an invalid color is entered.*

- **Description:** Illustration showing the color picker with a validation message for an invalid color code.
- **Caption:** "Example of validation message in the color picker."


**Description:** Illustration showing the color picker with a validation message for an invalid color code.

**Caption:** "Example of validation message in the color picker."

**Alt Text:** "Illustration of the color picker with a validation message for incorrect input."

## Related Components
