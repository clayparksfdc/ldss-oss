---
title: "Color Picker"
slug: "color-picker--usage"
category: "component"
parent: "color-picker"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-color-picker--base)

## Overview

* With the color picker, you can select colors for use in different Salesforce components and customizations.
* Commonly used in Salesforce to add brand color selections or personalize interface elements.
* Select from a standard color palette or use the color input field for custom colors.
* The color picker is composed of input, popover, tabs, and button components.

## Usage

The color picker component is designed for cases where users want to select, customize, or update colors, such as charts, backgrounds, or highlights, within their Salesforce environments. It enables the user to pick from a set of predefined colors (swatches), or to pick a custom color using a hue-saturation-brightness (HSB) selection interface. 

### Best Practices

* Use the color picker when you want to give users control over visual customization, like adding branding elements.
* Limit custom color options with a predefined color palette to encourage brand consistency and avoid overly complex or inaccessible color choices.
* Make sure that selected colors meet contrast standards for readability and accessibility.

### When Not to Use

* Don’t use the color picker for selecting text colors on dynamic content, as it can reduce readability.
* Don’t overwhelm users with a large palette—limit choices to promote a cleaner, more usable interface.
* Avoid embedding the color picker within multi-step workflows or modals where it can feel intrusive.

## Types

| **Base **  A set of predefined colors that align with the Salesforce branding guidelines.  **Use case** When Salesforce brand alignment is critical. | ![Base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/071ba1bdc716a842aa6b8d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c6daacb5e53619a4ad26a9a7f3f16f6242c004881b7a4ec818ec796dcf8b8b9d) **Base** *Example of a base color picker closed (left) and open (right).*  |
| --- | :---: |
|   |   |
| **Custom **  A free-form color selection tool that allows users to mix and select any color using a spectrum, slider, or input field.  **Use case**  Use when users need to define unique or brand-specific colors that aren't available in a predefined palette, such as creating themes, charts, or custom visuals. | ![Custom](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/74599ff843ac4e46cb8d17?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8f99ef263da5eb61ddeccf878c1fba459594eb2ef620938964bcda605b347aca) **Custom** *Example of a custom color picker closed (left) and open (right).* |
|   |   |
| **Predefined**  Predefined offers an initial selected color, a curated set of swatches, and an optional custom color input.  **Use case** Use when maintaining visual consistency is important—such as adhering to a design system or brand palette—while still giving users room for customization when needed.   | ![Predefined](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/526092276e75c511dd1c37?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=64f14ec621e10294b0cec8ad27b03fc60fdeff8681643ec89c256db90b0bc24b) **Predefined** *Example of a predefined color picker closed (left) and open (right).* |
|   |   |
| **Swatch**  Includes both predefined colors and a custom input option.  **Use case** When the need for consistency and flexibility coexists. | ![Swatches](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/fc7fdab91e950c5084ef4c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0cf1fcce84569625d92b76ac89213fa8bcfc5c19c0e6a4cb965fd6f60e196847) **Swatches** *Example of a swatch color picker closed (left) and open (right).* |

## Appearance

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/416f1f3d539b38a898e46b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=45e8d4d15aef9f68b2055629740cab55b2dafc1f4addceaa0f208f5155c5f8be)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b237d6f569d31751cee84c34d461cf007040b6b0ab1cfa81fefd87ec0f7d62eb) | **Dropdown with color swatch:** A small preview box showing the currently selected color. It updates immediately whenever the selected color changes. Pressing the color swatch opens the color palette.  |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d742fdaf5d2f59a1ceb1ed58220929ac2c3af3f342f4dbbd9f82a0c19d55e572) | **Custom color input (Hex):** Displays the hexadecimal value of the current color (e.g., #FFFFFF). Users can view or manually enter a hex color. If valid, it updates the color swatch and other connected elements. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2f29003094e674d8f1d237bc92ca7249bd423dad2d84abaf32a9061c4b5a7889) | **Custom color input (RGB):** Users can view or manually input color values in Hex, RGB (Red, Green, Blue). If valid, it updates the color swatch and other connected elements. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f2c994416f38c7cc7181a6b712f62c09a0ae4fa045ac65882265d6db0a6320ec)  | 1. **Color Palette:** A grid of selectable color swatches representing standard color options.
    1. **Color swatch:** A small preview box showing the currently selected color (“working color”). It updates immediately whenever the selected color changes.
    2. **Hue slider:** Lets users adjust the hue (color family) of the selected color.
    3. **Custom range (saturation and brightness matrix):** Adjusts saturation and brightness in a draggable grid. Clicking anywhere on the grid updates the color based on the clicked position, and it moves the range indicator to reflect the new selection. |

### Customization Options

#### Size

The color picker is fixed-width and has a compact design so it can fit into small spaces within forms or settings panels.

#### Layout

The color picker is easy to use and doesn't take up too much space. It has a central color palette, custom color input fields, and preview areas. When you click the dropdown, the color picker appears as a popover displayed at the top of the z-index.

### UI Content

Make sure color values (hex or RGB) are formatted accurately and are easy to read.

#### **Field Labels**

Labels tell users what information is needed in each field.

#### **Best Practices**

* Use clear, descriptive names that make sense on their own. For example, use “Email Address” instead of just “Email.”
* Aim for concise labels—one or two words if possible.
* Use Title Case. Capitalize the main words, for example “First Name” and “Phone Number.”
* Make sure every field has a label. This helps screen readers identify fields correctly. If you hide labels visually, use `aria-label` to make sure they’re accessible.

## Behaviors

### States

* **Default:** The open popover shows available colors with custom input fields.
* **Hover:** The cursor changes to a pointing hand over the color swatch.
* **Active:** Displays the selected color in the preview area.
* **Disabled:** Turns input fields gray if customization is unavailable to the user.

### Interactions

**Triggers or Clickable Areas:** Clicking on the input activates the color picker. Clicking on a color swatch activates the selected color.

### Position

Position the color picker within settings or customization areas, generally aligning it near relevant objects like themes or dashboard widgets. Avoid placing it in areas unrelated to customization.

### Loading

If loading is needed for custom palettes, show a loading spinner to indicate progress.

![loading](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/41db9ff89f4db4b5fdffd7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b5e380e546486460b38b1cd420d4e6d014fcc4deb3e4d3fe99c118c8b457fe32)

**loading**

---

### Default Selection

For best usability, show a default color within the component, giving users a reference point.

### Validation

Provide clear validation messages for incorrect hex or RGB values to help users correct their entries. For example: “Invalid color code. Please enter a hex code like #FFFFFF.”

*Image Placeholder: Validation message displayed when an invalid color is entered.*

* **Description:** Illustration showing the color picker with a validation message for an invalid color code.
* **Caption:** "Example of validation message in the color picker."

**Alt Text:** "Illustration of the color picker with a validation message for incorrect input."

![error](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/c0eb79bc6978fdcfeb39ec?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042758Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=eb7aa2645e16a45ac2e31f397db5c50af8b9ec013ab64cfba97c76a21b3f8d65)

**error**

---

## Related Components
