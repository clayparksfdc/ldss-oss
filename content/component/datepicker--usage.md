---
title: "Datepicker - Usage"
slug: "datepicker--usage"
category: "component"
parent: "datepicker"
order: 0
---

## Overview

- The datepicker is designed to help users select dates quickly and accurately from a calendar view.
- Select a single date or a date range.
- Typically used in forms where date input is required.
- Click to select a date, page through the months, and select the year.

## Usage

The datepicker is a form element component that helps users select dates in forms using a calendar. It’s ideal for situations that require a standard date entry field such as record creation, task scheduling, or event planning.

### Best Practices

- Use the datepicker when users must select a specific date.
- Label the datepicker field clearly to indicate its purpose, such as "Start Date" or "Due Date."
- Provide clear error messages if the user selects an invalid or out-of-range date.
- Clearly indicate the expected date format (such as MM/DD/YYYY) in the supporting text.

### When Not to Use

- Don't use the datepicker if the task requires a broad date range, such as selecting only a year or month without a specific day.
- Broad date ranges, such as decades or centuries.

## Types


| ### Standard Datepicker  The default datepicker with full calendar view, allowing users to select any date.  **Use Case: **Ideal for picking a single date. | *Standard datepicker in the default state.* |
| --- | --- |
|  |  |
| ### Date Range Picker  Allows users to select a range of dates.  **Use Case: **Useful for situations that require the selection of a start and end date, such as scheduling events or tasks. | *Date range picker in the default state.* |
|  |  |

### Standard Datepicker

The default datepicker with full calendar view, allowing users to select any date.

**Use Case: **Ideal for picking a single date.

*Standard datepicker in the default state.*

### Date Range Picker

Allows users to select a range of dates.

**Use Case: **Useful for situations that require the selection of a start and end date, such as scheduling events or tasks.

*Date range picker in the default state.*

## Appearance

### Anatomy


| *                                * ** ** ** | **Input Field**: Where the date is displayed and can be edited directly or through the calendar view. |
| --- | --- |
| *                                * ** ** ** | **Calendar Popup**: The calendar interface that appears when the user interacts with the input field. |
| *                                * ** ** ** | **Navigation Buttons**: Arrows to move between months or years in the calendar view. |
| *                                * ** ** ** | **Date Cells**: Individual clickable dates within the calendar. |
| *                                * ** ** ** | **Today’s Date**: The current date receives distinctive styling. |
| *                                * ** ** ** | **End Date Input Field:** May include today’s date. |

**Input Field**: Where the date is displayed and can be edited directly or through the calendar view.

**Calendar Popup**: The calendar interface that appears when the user interacts with the input field.

**Navigation Buttons**: Arrows to move between months or years in the calendar view.

**Date Cells**: Individual clickable dates within the calendar.

**Today’s Date**: The current date receives distinctive styling.

**End Date Input Field:** May include today’s date.

### Customization Options

#### Start Date

- Set a default start date for specific use cases, such as project deadlines or recurring events.

#### Min/Max Date Range

- Configure a date range to limit selectable dates.

### Size

The datepicker field resizes based on the width of its container.

### Layout

Margins and padding must be set according to your [form's](https://zeroheight.com/2e1ef8501/p/96252b) layout. Give the datepicker enough space from other form elements to make the form easier to read.

On desktop, the datepicker calendar is clipped behind other components on the page if the parent container has a smaller width or height than the calendar. To prevent clipping, make sure that the parent container has a minimum width of 285 px and a minimum height of 310 px.

By default, the datepicker calendar renders above all modals and the main Salesforce header.

### UI Content

- Keep text labels short and clear. Clearly indicate the purpose of a date field. For example, label the field as "Start Date," "End Date," or "Due Date".
- See Placeholder guidance on the Input page for more information about placeholder text.

## Behaviors

### States

1. **Default: **If no date is selected, the datepicker displays the current date or an empty field.
2. **Disabled:** Disabled dates appear unavailable and can’t be selected.
3. **Hover: **Hovering over a date highlights it to indicate a selection.
4. **Active: **The calendar opens when you click the date input field. However, it doesn’t open upon receiving focus. Tab to the calendar button icon and open it by pressing Enter or the spacebar.
5. **Selected: **The selected date remains highlighted after you select it.
6. **Focus:** When the field receives focus through keyboard navigation, it's highlighted to make it easier to identify.

### Interactions


| #### **Triggers**  Clicking the input field triggers the calendar to open. | *Calendar opened.* |
| --- | --- |
|  |  |

#### Triggers

Clicking the input field triggers the calendar to open.

*Calendar opened.*

### Validation

Validate the selected dates to ensure they meet the constraints (such as date ranges or formats). If they select an invalid date, let users know.

## Related Components
