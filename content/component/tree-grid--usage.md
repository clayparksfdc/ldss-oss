---
title: "Tree Grid"
slug: "tree-grid--usage"
category: "component"
parent: "tree-grid"
order: 0
---

## Overview

A Tree Grid is used to display complex hierarchical data where users need to navigate and interact with nested structures.

- Displays hierarchical data in a structured, collapsible format.
- Used in scenarios where data needs to be viewed in parent-child relationships.
- Use when interactivity beyond selection for each item is desired.Bullet Points of overview

### Best Practices

- Include clear labels for columns and rows to enhance readability.
- Optimize performance when dealing with large datasets by limiting expanded rows by default.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-tree-grid--base&globals=theme%3Alight
title: Tree Grid - Base
height: 400px
```

### When Not to Use

- Do not use if the hierarchical relationship is not essential to the user’s workflow; use a Data Table.
- If no actions beyond the selection of items are necessary; use a Tree instead.
- When more than 20 nested levels are required, a custom component must be built.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-tree-grid--base-expanded&globals=theme%3Alight
title: Tree Grid - Base Expanded
height: 400px
```

## Appearance

### Anatomy


| *                       *  *           *  | **Header Row (optional):** The top row that displays column titles and provides context for the data below. |
| --- | --- |
| *                       *  *           *  | **Row:** A horizontal group of cells representing a single record or data entry. |
| *                       *  *           *  | **Selected Row:**A highlighted row indicating user selection. |
| *                       *  *           *  | **Column:** A vertical group of cells containing data of the same type or category. |
| *                       *  *           *  | **Header Row Label**: A text label within the header row describing the column content. |
| *                       *  *           *  | **Text Wrapping/Clipping**: A button in the column header to set text to wrap multiple lines or be clipped and truncated. |
| *                       *  *           *  | **Cell**: The basic unit of a tree grid, holding a single piece of data. |
| *                       *  *           *  | **Cell Label**: Descriptive text inside a cell, explaining or identifying the content. |
| *                       *  *           *  | **Chevron Button Icon**: Allows users to show or hide child nodes. |
| *                       *  *           *  | **Preceding Icon**: An icon appearing before the content in a cell, adding visual context. |
| *                       *  *           *  | **Text Link**: A clickable link within a cell, often navigating to related content or actions. |
| *                       *  *           *  | **Action Menu (optional):**A menu that extends the actions users are able to perform. |
| *                       *  *           *  | **Row Divider**: A horizontal line separating rows for better visual distinction. |

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-tree-grid--base-selected-row&globals=theme%3Alight
title: Tree Grid - Base Selected Row
height: 400px
```

### Size

Tree grids are responsive by default, automatically adjusting to fit different screen sizes.

### UI Content

The first data column in the tree grid supports the following data types.


| **Type** | **Description** | **Supported Type Attributes** |
| --- | --- | --- |
| button | Displays a button using `lightning-button` | disabled, iconName, iconPosition, label, name, title, variant |
| button-icon | Displays a button icon using `lightning-button-icon` | alternativeText, class, disabled, iconClass, iconName, name, title, variant |
| currency | Displays a currency using `lightning-formatted-number` | currencyCode, currencyDisplayAs, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits |
| date | Displays a date and time based on the locale using `lightning-formatted-date-time` | day, era, hour, hour12, minute, month, second, timeZone, timeZoneName, weekday, year |
| number | Displays a number using `lightning-formatted-number` | minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits |
| percent | Displays a percentage using `lightning-formatted-number` | Same as number type |
| text | Displays text using `lightning-formatted-text` | N/A |
| url | Displays a URL using `lightning-formatted-url` | label, target, tooltip |

All other columns support the following data types.


| **Type** | **Description** | **Supported Type Attributes** |
| --- | --- | --- |
| action | Displays a dropdown menu using `lightning-button-menu` with actions as menu items | rowActions (required), menuAlignment (defaults to right) |
| boolean | Displays the icon utility:check if the value is true, and a blank value otherwise. | N/A |
| button | Displays a button using `lightning-button` | disabled, iconName, iconPosition, label, name, title, variant |
| button-icon | Displays a button icon using `lightning-button-icon` | alternativeText, class, disabled, iconClass, iconName, name, title, variant |
| currency | Displays a currency using `lightning-formatted-number` | currencyCode, currencyDisplayAs, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits |
| date | Displays a date and time based on the locale using `lightning-formatted-date-time` | day, era, hour, hour12, minute, month, second, timeZone, timeZoneName, weekday, year |
| date-local | Displays a simple date that is formatted based on the locale. The value passed is assumed to be in the browser local time zone and there is no time zone transformation. | day, month, year |
| email | Displays an email address using `lightning-formatted-email` | N/A |
| location | Displays a latitude and longitude of a location using `lightning-formatted-location` | latitude, longitude |
| number | Displays a number using `lightning-formatted-number` | minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits |
| percent | Displays a percentage using `lightning-formatted-number` | Same as number type |
| phone | Displays a phone number using `lightning-formatted-phone` | N/A |
| text | Displays text using `lightning-formatted-text` | linkify |
| url | Displays a URL using `lightning-formatted-url` | label, target, tooltip |

## Position

Typically placed within record pages or dashboards where hierarchical data is required.

## Behaviors

Interactive states in tree grids are inherently complex because they must account for user feedback at multiple levels (rows, columns, and individual cells) while maintaining clarity and usability. Each level of interaction introduces overlapping states, such as hover, focus, active, and selected.

### Interactions


| **Expand/Collapse Nodes**Parent nodes can be expanded to expose the nested child nodes, and collapsed to hide them.  Light**  *  [*View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-tree-grid--base-expanded) |
| --- |
|  |
| Row SelectionUsers can select one or more rows via checkboxes for bulk actions like delete or export. Selecting parent nodes does not select the associated child nodes.  Light**  *  [*View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-tree-grid--base-selected-row) |
|  |
| **Row Actions**Actions like "Edit," "Delete," or "View Details" are available for individual rows through dropdown menus. |
|  |
|**Text Wrapping and Clipping**Content in cells, including headers, can either wrap to show all text or clip to fit within the column width. When columns are set to Clip Text, the content will be truncated (...), exposing only what the cell’s width allows. If a column is set to Wrap Text, then each cell in that column will expand its height to reveal all the content. This will also expand the entire row as well. |
|  |
|**Infinite Scrolling**Rows load dynamically in batches as users scroll, reducing initial page load time. A Spinner is shown when data is being fetched. |
|  |
|**Error**Highlights rows or cells with validation issues, using red borders or icons. |
|  |

### Responsive

Tree Grids adjust to container size changes, ensuring optimal usability on both desktop and mobile devices. Scrolling behavior adapts to the device's touch or mouse input.

### Loading

- A spinner is displayed while loading items.
- If you have a large number of nested items that would delay the loading of your data, consider loading the nested items asynchronously. The nested items are displayed only when you expand the particular row.

## Related Components
