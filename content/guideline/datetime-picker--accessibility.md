---
title: "Datetime Picker"
slug: "datetime-picker--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/653453-datetime-picker/b/74d5d4"
extractedAt: "2026-02-21T21:48:12.943Z"
---

## Interactions

### Mouse

- **Hover States**: When a user hovers over the input field or dropdown, the cursor changes to cursor: text to indicate interactivity.
- **Click Actions**: Users can click on the input field to open the calendar and time dropdowns, allowing them to select a date and time easily. Clicking the calendar icon opens the calendar widget, which follows the[ Datepicker](https://www.lightningdesignsystem.com/2e1ef8501/p/531362) Accessibility guidance.

### Keyboard

**Action**

**Key Command**

**Description**

Open Date Picker

Tab + Enter

While focused on the input field, press Tab to navigate to the calendar icon, and Enter/Space to open the calendar.

Navigate Dates

Arrow Keys

Arrow keys (left, right, up, down)

Select Date

Enter, Spacebar

Press Enter or Spacebar to select the highlighted date.

Open Time Dropdown

Tab + Down Arrow

Focus on the time dropdown and press the up/down arrows to open it.

Select Time

Enter

Press Enter to select the highlighted time.

Close Picker

Esc

Press Esc to close the calendar or time dropdowns without making a selection.Action

Key Command

Description

Open Date Picker

Tab + Enter

While focused on the input field, press Tab to navigate to the calendar icon, and Enter/Space to open the calendar.

Navigate Dates

Arrow Keys

Arrow keys (left, right, up, down)

Select Date

Enter, Spacebar

Press Enter or Spacebar to select the highlighted date.

Open Time Dropdown

Tab + Down Arrow

Focus on the time dropdown and press the up/down arrows to open it.

Select Time

Enter

Press Enter to select the highlighted time.

Close Picker

Esc

Press Esc to close the calendar or time dropdowns without making a selection.

## Design Considerations

- Ensure that all inputs and dropdowns have descriptive labels that convey their purpose to users, including screen reader users.

## Development Considerations

- **ARIA Attributes**: Use ARIA roles and properties to provide additional context to screen readers, such as `aria-labelledby` for labeling input fields and dropdowns.
ARIA Attributes: Use ARIA roles and properties to provide additional context to screen readers, such as aria-labelledby for labeling input fields and dropdowns.

## Content Considerations

Accessibility requirements for the content include:

- **Descriptive Labels**: Use clear and concise labels for the input fields and buttons within the datetime picker.
- **Error Messages**: Provide informative error messages for invalid date/time entries, ensuring they are announced by screen readers.
- **Enter a valid date.** A Date Format Visible variation displays a message about the expected date format. When the date field receives focus, a message appears under the field to show the expected date format. When focus is removed from the date field, the message is hidden and available as assistive text.
- All datetime fields marked as required with an * must have an accompanying legend.
**Example:** * denotes a required field

Descriptive Labels: Use clear and concise labels for the input fields and buttons within the datetime picker.

Error Messages: Provide informative error messages for invalid date/time entries, ensuring they are announced by screen readers.

Enter a valid date. A Date Format Visible variation displays a message about the expected date format. When the date field receives focus, a message appears under the field to show the expected date format. When focus is removed from the date field, the message is hidden and available as assistive text.

All datetime fields marked as required with an * must have an accompanying legend.

Example: * denotes a required field

