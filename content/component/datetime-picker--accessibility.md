---
title: "Datetime Picker - Accessibility"
slug: "datetime-picker--accessibility"
category: "component"
order: 0
---

## Interactions

### Mouse

* **Hover States**: When a user hovers over the input field or dropdown, the cursor changes to cursor: text to indicate interactivity.
* **Click Actions**: Users can click on the input field to open the calendar and time dropdowns, allowing them to select a date and time easily. Clicking the calendar icon opens the calendar widget, which follows the[ ](/component/datepicker)[Datepicker](/component/datepicker) Accessibility guidance.

### Keyboard

| **Action** | **Key Command** | **Description** |
| :--- | :--- | :--- |
| Open Date Picker | Tab + Enter | While focused on the input field, press Tab to navigate to the calendar icon, and Enter/Space to open the calendar. |
| Navigate Dates | Arrow Keys | Arrow keys (left, right, up, down) |
| Select Date | Enter, Spacebar | Press Enter or Spacebar to select the highlighted date. |
| Open Time Dropdown | Tab + Down Arrow | Focus on the time dropdown and press the up/down arrows to open it. |
| Select Time | Enter | Press Enter to select the highlighted time. |
| Close Picker | Esc | Press Esc to close the calendar or time dropdowns without making a selection. |

![Datetime Picker - Tab Order](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/8e7467c27037c69e6014ea?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=dd241982b25fb9d49ea9393b41fa3cf11209ac3b6acd59a8958824f1787c79bd)

**Datetime Picker - Tab Order**

---

## Design Considerations

* Ensure that all inputs and dropdowns have descriptive labels that convey their purpose to users, including screen reader users.

## Development Considerations

* **ARIA Attributes**: Use ARIA roles and properties to provide additional context to screen readers, such as `aria-labelledby` for labeling input fields and dropdowns.

## Content Considerations

Accessibility requirements for the content include:

* **Descriptive Labels**: Use clear and concise labels for the input fields and buttons within the datetime picker.
* **Error Messages**: Provide informative error messages for invalid date/time entries, ensuring they are announced by screen readers.
* **Enter a valid date.** A Date Format Visible variation displays a message about the expected date format. When the date field receives focus, a message appears under the field to show the expected date format. When focus is removed from the date field, the message is hidden and available as assistive text.
* All datetime fields marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field
