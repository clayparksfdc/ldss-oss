---
title: "Datepicker"
slug: "datepicker--usage"
category: "general"
url: "/component/datepicker/b/39205c"
extractedAt: "2026-02-21T21:47:49.695Z"
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-datepicker--base)

## Overview

* The datepicker is designed to help users select dates quickly and accurately from a calendar view.
* Select a single date or a date range.
* Typically used in forms where date input is required.
* Click to select a date, page through the months, and select the year.

## Usage

The datepicker is a form element component that helps users select dates in forms using a calendar. It’s ideal for situations that require a standard date entry field such as record creation, task scheduling, or event planning.

### Best Practices

* Use the datepicker when users must select a specific date.
* Label the datepicker field clearly to indicate its purpose, such as "Start Date" or "Due Date."
* Provide clear error messages if the user selects an invalid or out-of-range date.
* Clearly indicate the expected date format (such as MM/DD/YYYY) in the supporting text.

### When Not to Use

* Don't use the datepicker if the task requires a broad date range, such as selecting only a year or month without a specific day. 
* Broad date ranges, such as decades or centuries.

## Types

| **Standard Datepicker**  The default datepicker with full calendar view, allowing users to select any date.  **Use Case:** Ideal for picking a single date.   | ![default](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/7ed09352aa3fa0171a5524?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e0d582499e26273dde2b95598b077eb5f164f16bfdd2bca063b321e1b23ccdf0) **default** *Standard datepicker in the default state.* |
| --- | :---: |
|   |   |
| **Date Range Picker**  Allows users to select a range of dates.  **Use Case:** Useful for situations that require the selection of a start and end date, such as scheduling events or tasks.   | ![default](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/32b4ccd1b73ef461b1eabb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=684ff8c17b60aea2434282eeb6dc576a7a43d6733446358d84bc5de4c8a97f2b) **default** *Date range picker in the default state.* |
|   |   |

## Appearance

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/5cf10530ad2da39b715cb1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=17acf0bd8c030c31d43f7a4be6a72af9f2bf2d29808336d42e0ed9cc6d789f6a)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d598dd0ef138a5096fd4478130218d13c5bfffbc0c15a4b9b79024cca145b87e)  | **Input Field**: Where the date is displayed and can be edited directly or through the calendar view.   |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6af8cff42cf2be165b941f58c86b8b2d5d6f07f62c1744d06d2afb9f1037d955)  | **Calendar Popup**: The calendar interface that appears when the user interacts with the input field.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3904e437a44807789b0347e1fcc23b5e062a76736c6229914b53b15a85b4c0cf)  | **Navigation Buttons**: Arrows to move between months or years in the calendar view.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=43283b2eebc5ac6921092a5973e8a745b223632acb14fb3f5ff4ecf59059516e)  | **Date Cells**: Individual clickable dates within the calendar.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f06765822979e8e7b5dc111b330f9a8bc406c092d1a08035fd54d2a47245079d)  | **Today’s Date**: The current date receives distinctive styling. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7cf9a355bc241ca61de644e5eb2ac5d8c6a1ba43070b2683fd4d12f8910949fe)  | **End Date Input Field:** May include today’s date.   |

### Customization Options

#### **Start Date**

* Set a default start date for specific use cases, such as project deadlines or recurring events.

#### **Min/Max Date Range**

* Configure a date range to limit selectable dates.


### Size

The datepicker field resizes based on the width of its container.

### Layout

Margins and padding must be set according to your [form's](https://zeroheight.com/2e1ef8501/p/96252b) layout. Give the datepicker enough space from other form elements to make the form easier to read.

On desktop, the datepicker calendar is clipped behind other components on the page if the parent container has a smaller width or height than the calendar. To prevent clipping, make sure that the parent container has a minimum width of 285 px and a minimum height of 310 px.

By default, the datepicker calendar renders above all modals and the main Salesforce header.

### UI Content

* Keep text labels short and clear. Clearly indicate the purpose of a date field. For example, label the field as "Start Date," "End Date," or "Due Date".
* See Placeholder guidance on the Input page for more information about placeholder text.

## Behaviors

### States

![Datepicker States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/a0b5eb6050ec211c310c19?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e82a00ef6c218c991da47b4c164d14d590e9c80258d60a7c0876449565846dac)

**Datepicker States**

---

1. **Default:** If no date is selected, the datepicker displays the current date or an empty field.
2. **Disabled:** Disabled dates appear unavailable and can’t be selected.
3. **Hover:** Hovering over a date highlights it to indicate a selection.
4. **Active:** The calendar opens when you click the date input field. However, it doesn’t open upon receiving focus. Tab to the calendar button icon and open it by pressing Enter or the spacebar.
5. **Selected:** The selected date remains highlighted after you select it.
6. **Focus:** When the field receives focus through keyboard navigation, it's highlighted to make it easier to identify.


### Interactions

| ****Triggers**** Clicking the input field triggers the calendar to open.  | ![active](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/33c6b63f26f58876967916?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042756Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4765f53aab86f75a4ecce4143a6279b6f3aaa88bd4c07b1ef6a7670ed712d3f0) **active** *Calendar opened.* |
| --- | :---: |
|   |   |

### Validation

Validate the selected dates to ensure they meet the constraints (such as date ranges or formats). If they select an invalid date, let users know.

## Related Components
