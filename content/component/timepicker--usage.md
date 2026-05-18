---
title: "Timepicker"
slug: "timepicker--usage"
category: "component"
parent: "timepicker"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-timepicker--base)

## Overview

The Timepicker enables users to input or select a time in a user-friendly manner. It reduces potential errors from manual text entry by offering preformatted time values in a dropdown. Users can also type a time directly if necessary. The Timepicker is flexible and customizable, making it suitable for various applications requiring time entry.

* The Timepicker simplifies time input by providing a dropdown menu with preformatted time values.
* It ensures consistency and reduces user errors compared to manual time entry.
* Often used in forms, scheduling tools, and workflows requiring precise time input.
* The component supports both 12-hour (with AM/PM) and 24-hour formats, adapting to regional settings.

## Usage

### Best Practices

* Place the Timepicker in a logical position within forms or workflows, aligned with other inputs.
* Default to a 12-hour or 24-hour format based on the user's locale or application settings.
* Provide clear validation messages if the input format is incorrect.

### When Not to Use

* Avoid using the Timepicker for date or datetime selection. Use a Datepicker or Datetime Picker instead.
* Do not use the Timepicker if approximate time input is sufficient (e.g., “morning” or “afternoon”).

## Appearance

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/cb4af3a991039e621793bc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6e6688044f4e1df7b802c6fdc38013dbf930e2cfca2559a9ee758bd086f454c0)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e2b9e2251b06085d2d6d793d375c1c2b8cd978907d0c1de776a4fab4681fbe4a) | **Field label:** Describes the purpose of the input field. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=eef4c1c106411f9ec1deed614534649c51a2017bd3174efb213d3496d3f7aeba) | **Input Field:** Area where users type or select their data. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d7aed924b3b03dfcb9ecc51ab123837d29f33b5e95650b209779d0a23982e4aa) | **Listbox:** Container with a list of options, where only one can be selected. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=51c5694eab849058c2e1ef59af09673e414eb85c16b7fd1303f584486ba25497) | **Selected listbox item:** Selected menu item in a listbox. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4995a3a44c4b9060d2e5e816fcaca340cd2c8763d3ec88bfa205551551a1c67c) | **Listbox item:** Menu item in a listbox.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e6fc66eba06f9b29e955d821056835e9f1739da1b107680340b92f86b8b0f676) | **Dropdown:** Icon to indicate that a menu opens when clicked. |

### Customization Options

* Change interval steps (e.g., 15 minutes, 1 hour).
* Enable or disable manual text input.
* Adjust the display format (12-hour or 24-hour).
* Enable display of seconds.
* On mobile devices, this component uses the native time picker, which ignores the time-style attribute. The native time picker uses the user's device settings for the input time format.

### UI Content

* Placeholder text: Use descriptive text like “Select a time.”
* Validation: Use concise error messages, e.g., “Enter a valid time.”

## Behaviors

### States

![Pills - States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/2aaf78a6472b4043ea592b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e0358e5d9bc9cb59991930954758bfbad57e9fe8be1239bbdfaf46837728d6f1)

**Pills - States**

---

1. **Default**
2. **Active**
3. **Selected**
4. **Closed+Filled**

### Interactions

* **Triggers**: Clicking or pressing enter/space on a keyboard activates the dropdown.
* **Input**: If enabled, users can type a time or select from the dropdown.

### Validation

* Validation occurs after focus moves away. 
* Displays error states with help text for invalid formats (e.g., “Invalid time format. Use HH:MM AM/PM”).

## Related Components
