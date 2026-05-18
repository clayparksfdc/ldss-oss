---
title: "Datetime Picker"
slug: "datetime-picker--usage"
category: "component"
parent: "datetime-picker"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-datetime-picker--base)

## Overview

* The datetime picker is a form element that lets you select a date and time in one place.
* Used to schedule events or set time-based records.
* Helps users input date and time accurately, saving time and reducing errors.
* Type a date and time directly or select from the calendar and time dropdown options.

## Usage

The datetime picker is typically used when an application or record requires both a date and time input. It's commonly used for event scheduling, booking appointments, or setting reminders.

### Best Practices

* Use the datetime picker when both date and time are required, such as for scheduled appointments or event planning.
* To simplify input, default to the current date and time as the starting point.
* Show the required format with clear instructions or placeholder text in the input field.

### When Not to Use

* Don't use a datetime picker if only the date or only the time is needed. Instead, use either the date picker or time picker components.
* Don't use the datetime picker for static content that doesn't require user input.

## Appearance

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/7116ae28e5c378695ad824?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=076c16ccc46eb21a0c4134db42f5e828f5d8d84d24fa3e08e050f19adc3243a0)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6e91936b252ee63ebf64af8b585ad629c03f76f859bc39a3bcc95a1800dfbac9)  | **Date Field:** Input field that displays the selected date or a date that the user types.   |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7e359ff906d927c84fbdca4463a1d1dc79fcf4a656c0110739cc687e5ba6e2cc)  | **Time Field:** Input field that displays the selected time or a time that the user types.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f75f867ec9ddc17d1e8daf13aff8d441fc4c00a9e355dd9a2888624c9999898e)  | **Calendar:** The calendar interface that appears when the user interacts with the input field for the date picklist.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=21b1a8cca50ba6314c9e0591e6370db1e688dad69a5e024377660eef89c26fa7)  | **Time Menu:** Opens when the user interacts with the time input field so users can pick a time from a list.  |

### Customization Options

#### **Input Field**

* Customizable for different date and time formats.

### Layout

Maintain padding around the datetime picker so it doesn’t look cramped. Use standard spacing within the form layout for consistency.

### UI Content

The input format can be set to one of these styles.

* **Medium (default):** Set `date-style="medium"` to display the date in a medium-length style, such as Jan 7, 2025 in the en-US locale. 
* **Short:** Set `date-style="short”` to display a short style such as 1/7/2025.
* **Long:** Set `date-style="long"` to display a long style such as January 7, 2025.

#### Labels

* **Field label:** Use title capitalization without end punctuation. If the UI design lacks a visible label, a hidden text label or offscreen field label is required for accessibility.
* **Field caption:** Use a phrase or a full sentence without end punctuation. 
* **Use a field caption in these situations:**
    * If a label alone doesn't clearly define a field or a fieldset, you can include a field caption with a field label or with the field itself.
    * To convey information that’s critical to the use of a field.
* **Don’t use a field caption in these situations:**
    * If the field label is clear enough to define the field.
    * To convey noncritical information without sending users to a help page. In that case, use an infobubble instead.

Also, see the [form element](https://zeroheight.com/2e1ef8501/p/96252b) component.

#### Placeholder text

* Placeholder text is optional, and can be included to give context or help the user know what to enter into the field.
* Use sentence capitalization. Unless the text ends with a question mark, end it with an ellipsis.
* Use a friendly tone but be concise, and keep in mind that localization of labels sometimes makes them longer.
* In type-ahead and autofill fields, results show up as you type. Use standard placeholder text such as “Search this field…”
* All fields require a field label, even if they have placeholder text. If the UI design lacks a visible label, include an offscreen label for accessibility.

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-datetime-picker--base)

## Behaviors

### States

![Datetime States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/1746db92b7ad66ba7ec8fb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b851f82cf221bc8d5b7680381863370af435e97aea157b456fed537bef6e048e)

**Datetime States**

---

1. **Default:** Standard display with no user input.
2. **Disabled:** Disabled pickers are colored light gray to appear unavailable and can't be selected.
3. **Active:** Border changes to show focus, accessible by keyboard. Input field and dropdown are open for selection.

### Interactions

| ****Hover**** The mouse pointer changes to a text cursor (I-beam) when hovering over the input field.  | ![hover](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/59c435f0ecf0a5db997ff0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2381a5e167bc3f791d77b4d8da50c465dcde68c1589fa0a8cfaf30478efa0eea) **hover** *Example of a datetime picker component with the hover state shown.*  |
| :--- | :---: |
| ****Expanded**** Shows calendar or time dropdown.  |  ![expanded](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/21b246599d089c3574d772?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=14b88c49a9243fd4390c343bec9a5d78fa738fef2f3911345150ed45916501af) **expanded** *Example of a datetime picker component with calendar dropdown.* |
| ****Selected**** Shows selected date or time.   | ![filled](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/767ed7fa5e4d8899a1f0c8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=294630bd8a9b814562e4d965fe6a1c0d7b2e490db60c5df0a8476b0660a953d4) **filled** *Example of a datetime picker that has been filled.* |

### Loading

Displays a loading indicator when fetching dates or times if connected to live data.

### Scrolling

The time dropdown is scrollable to navigate through times.

### Responsive

The datetime picker is responsive, so it adapts to the available screen size. It takes up minimal space in mobile views. The input field and dropdown sizes also adapt to fit the overall layout.

### Default selection

Defaults to the current date unless otherwise specified.

### Validation

Includes error messages for invalid dates or times and a tooltip for correct formatting.

## Related Components
