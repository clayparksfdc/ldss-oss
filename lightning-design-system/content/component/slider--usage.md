---
title: "Slider"
slug: "slider--usage"
category: "component"
parent: "slider"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-slider--base
title: Slider - Base
height: 400px
```

## Overview

- Used for adjusting numerical values within a defined range.
- Commonly found in settings, filters, and configuration panels.
- Provides a visual and interactive way to select a value instead of typing.
- Supports customization options such as step intervals and min/max values.

## Usage

Sliders are best suited for cases where users need to set a value within a known range efficiently. They provide an intuitive way to adjust settings such as volume, price filters, or opacity levels.

### Best Practices

- Using the slider component when selecting a value within a range is easier than typing.
- Provide clear min and max labels for better usability.
- Use step intervals when precision input is required.
- Ensure the slider is large enough to be easily interacted with on touch devices.
- Use a tooltip or inline value display to show the selected value.

### When Not to Use

- When users need to input an exact number (use an input field instead).
- When the range is too large, making fine-tuned selection difficult.
- If the value change requires real-time feedback that may slow performance.

## Types


| Horizontal (default)  A slider that allows users to select a value by moving a handle left or right along a horizontal track. |  |
| --- | --- |
|  |  |
| Vertical  A slider that allows users to select a value by moving a handle up or down along a vertical track. |  |
|  |  |

## Appearance

### Anatomy


| *                                *  | **Field Label**: The field label describes the purpose of the slider, helping users understand what value they are adjusting. |
| --- | --- |
| *                                *  | **Range:**Indicates the range boundaries. |
| *                                *  | **Handle:** The draggable handle that allows users to select a value by moving it along the track. |
| *                                *  | **Bar (track bar):** The horizontal or vertical line that represents the selectable range and provides a visual reference for the slider’s value. |
| *                                *  | **Max Value**: A visual label indicating the max value of the slider. |
| *                                *  | **Supporting Text:** The error text appears below the slider to indicate validation issues and guide users on how to correct them. |

### Size

The slider comes in many sizes: x-small, small, medium, and large. The default slider size takes up the width of the view port.

### Layout

- Can be used in forms, settings panels, and filter sections.
- Should be vertically aligned when space is limited.

### UI Content

- Labels should clearly indicate the purpose.
- Supporting text messages should be concise and informative.

## Behaviors

### States

- **Default**: Interactive and draggable.
- **Hover**: Highlights the handle.
- **Active**: Handle is being moved.
- **Disabled**: Greyed out and non-interactive.

**Bar**

- **Default:** Displays the selectable range with a standard color and style.
- **Hover:** Changes color slightly or shows a shadow when hovered.
- **Active:** Updates dynamically as the user moves the slider.
- **Disabled:** Appears grayed out and non-interactive.
- **Read-Only:** Visible but cannot be adjusted.
- **Error:** Highlights in red or shows an error message if the value is invalid.

### Interactions

- **Click & Drag**: Moves handle to adjust the value.
- **Keyboard Navigation**: Arrow keys to fine-tune selection.

**Click & Drag**: Moves handle to adjust the value.

### Position

- **Horizontal**: A slider that allows users to select a value by moving a handle left or right along a horizontal track.
- **Vertical:** A slider that allows users to select a value by moving a handle left or right along a vertical track.

### Responsive

Width adapts based on container size.

### Validation

- Enforce min/max constraints.
- Provide error messaging for invalid selections.

## Related Components
