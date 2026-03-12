---
title: "Datepicker - Accessibility"
slug: "datepicker--accessibility"
category: "component"
parent: "datepicker"
order: 0
---

## Interactions

### Mouse

When using a mouse, the Datepicker component allows users to:

- **Select a date**: Users can click a specific date in the calendar.
- **Navigate through months**: Clicking the month or year name allows users to change the view (month, year, etc.).
- **Open or close the date picker**: The date picker opens when the user clicks the input field and closes when the user clicks outside the picker or selects a date.

### Keyboard

For users who rely on the keyboard, these key commands can be used to interact with the Datepicker component:


| **Action** | **Key Command** |
| --- | --- |
| Open/close the date picker | While focused on the input field, press Tab to navigate to the calendar icon, and Enter/Space to open the calendar. |
| Navigate through dates | Arrow keys (left, right, up, down) |
| Select a date | Enter, Spacebar |
| Navigate through months or years | Tab to year picklist, Enter or Spacebar to open year picklist, and arrow keys (up, down) and enter to select. |
| Close the date picker without selection | Escape |

### Other

For users with assistive devices:

- **Screen readers**: The component announces the current selected date, available dates, and month or year change. Descriptive text such as “Selected date” and “Click to select” must be included in the component's labels for a better screen reader experience.
- **Alternative input devices (Speech recognition)**: Users can navigate and select dates using voice commands (such as “select [date]” or “next month”).
- **Braille displays**: Ensure all textual elements, such as labels and date values, are properly tagged in the HTML to be readable by Braille displays.
- **Keyboard modifications (such as StickyKeys)**: The Datepicker must function properly with StickyKeys and other keyboard modifications to ensure that no essential functionality is lost for users with motor impairments.

## Design Considerations

- Accessible labels must be added for all UI elements. For instance, the Datepicker input field must be labeled with "Date," and all other interactive elements must include descriptive labels.
- When deviating from the standard Datepicker styling hooks, ensure proper contrast ratios for readability.

## Development Considerations

Ensure that **ARIA attributes** are correctly applied to interactive elements. For example:

- `aria-labelledby` for labels.

- `aria-describedby` for additional instructions or hints.
- `aria-selected` for the selected date.
- `aria-live` regions must be used for dynamically changing content, such as when the month or year changes.

- Ensure that the component is **compatible with screen readers** by providing descriptive, contextually relevant text that describes the purpose of each UI element.
- Developers are responsible for maintaining **error messages** and **help text** to ensure that any input errors (such as incorrect date format) are conveyed to the user clearly, with instructions on how to correct the issue.

## Content Considerations

- **Clear labels** for the input field.
- **Error messaging**: Ensure that error messages provide guidance for correcting the issue.
- **Help text**: Provide assistive text for fields that need clarification, such as explaining the expected date format.
- **Descriptive tooltips** for any icons (such as next and previous buttons) to make sure users with screen readers or low vision can understand their purpose.
- **Enter a valid date.** A Date Format Visible variation displays a message about the expected date format. When the date field receives focus, a message appears under the field to show the expected date format. When focus is removed from the date field, the message is hidden and available as assistive text.
- All datepicker fields marked as required with an * must have an accompanying legend.

**Example:** * denotes a required field

**Example:** * denotes a required field

## Accessibility Labels

It’s essential that the input field is labeled appropriately. Developers should ensure that the Datepicker’s input field has an accessible label (e.g., `aria-label="Date Picker"`) and that each button or clickable area is properly described using `aria-label` or `aria-labelledby.`

## Internationalization

- The Datepicker component supports multiple languages and regions and formats dates according to the user's locale.
- Translations for month names, weekday names, and date formats must be provided based on the user's locale settings.
