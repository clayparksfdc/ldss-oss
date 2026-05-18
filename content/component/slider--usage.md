---
title: "Slider"
slug: "slider--usage"
category: "component"
parent: "slider"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-slider--base)

## Overview

* Used for adjusting numerical values within a defined range.
* Commonly found in settings, filters, and configuration panels.
* Provides a visual and interactive way to select a value instead of typing.
* Supports customization options such as step intervals and min/max values.

## Usage

Sliders are best suited for cases where users need to set a value within a known range efficiently. They provide an intuitive way to adjust settings such as volume, price filters, or opacity levels.

### Best Practices

* Using the slider component when selecting a value within a range is easier than typing.
* Provide clear min and max labels for better usability.
* Use step intervals when precision input is required.
* Ensure the slider is large enough to be easily interacted with on touch devices.
* Use a tooltip or inline value display to show the selected value.

### When Not to Use

* When users need to input an exact number (use an input field instead).
* When the range is too large, making fine-tuned selection difficult.
* If the value change requires real-time feedback that may slow performance.

## Types

|  **Horizontal (default)**  A slider that allows users to select a value by moving a handle left or right along a horizontal track.   | ![base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/282d0da3d14bb5d9bc8510?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a1e1c3e6e50c132b61ea86ac68d0238b21ad648492e6ae6a5afa8c72cfa07290) **base** |
| --- | :---: |
|   |   |
|  **Vertical**  A slider that allows users to select a value by moving a handle up or down along a vertical track.   | ![Vertical](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/07c2c49984b158b00763f6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=11b0078903c1177ba667d460592d8398645ca8dd6a7eeaeec1d78de65809b93d) **Vertical** |
|   |   |

## Appearance

### Anatomy

![anatomy-b](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/294e8c8a8878e38bb5e993?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b039cd75fa7f0d2d23f5faba3bf3e0b2432afa845494fce366c1751ac4578251)

**anatomy-b**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9e519b637a5b6007cdbb13fa0e9f454e7f9c5b9caab672a10d4e067bf78e3284)  | **Field Label**: The field label describes the purpose of the slider, helping users understand what value they are adjusting. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9ae6f59ec2e363ebf205c179d89cd2a5bdb86f811e902ce0ad44e9b3b457a66f)  | **Range:** Indicates the range boundaries. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=99b1016fb49825d447caf453dbad4278b3ab4e785e9c5b665a9a948b0a7eb4fc)  | **Handle:** The draggable handle that allows users to select a value by moving it along the track. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ad9b75fe25ab01c76461fb82c8d98328169c3eaf813b3670f17de75c09ec290a)  | **Bar (track bar):** The horizontal or vertical line that represents the selectable range and provides a visual reference for the slider’s value.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ddb600bb2255e2ecb4134fd48f6d43c6b418b8390f503e16fa2fb7c2e78f8167)  | **Max Value**: A visual label indicating the max value of the slider.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042747Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=93ccc2fded0053c0827e39f2865fb2dd53c80617ea848daa3ee1bd2f01ee332c)  | **Supporting Text:** The error text appears below the slider to indicate validation issues and guide users on how to correct them. |

### Size

The slider comes in many sizes: x-small, small, medium, and large. The default slider size takes up the width of the view port.

### Layout

* Can be used in forms, settings panels, and filter sections.
* Should be vertically aligned when space is limited.

### UI Content

* Labels should clearly indicate the purpose.
* Supporting text messages should be concise and informative.

## Behaviors

### States

#### **Handle**

* **Default**: Interactive and draggable.
* **Hover**: Highlights the handle.
* **Active**: Handle is being moved.
* **Disabled**: Greyed out and non-interactive.

**Bar**

* **Default:** Displays the selectable range with a standard color and style.
* **Hover:** Changes color slightly or shows a shadow when hovered.
* **Active:** Updates dynamically as the user moves the slider.
* **Disabled:** Appears grayed out and non-interactive.
* **Read-Only:** Visible but cannot be adjusted.
* **Error:** Highlights in red or shows an error message if the value is invalid.

### Interactions

* **Click & Drag**: Moves handle to adjust the value.
* **Keyboard Navigation**: Arrow keys to fine-tune selection.


### Position

* **Horizontal**: A slider that allows users to select a value by moving a handle left or right along a horizontal track.
* **Vertical:**  A slider that allows users to select a value by moving a handle left or right along a vertical track.

### Responsive

Width adapts based on container size.

### Validation

* Enforce min/max constraints.
* Provide error messaging for invalid selections.

## Related Components
