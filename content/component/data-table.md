---
title: "Data Table"
slug: "data-table"
category: "component"
order: 0
---

## Overview

Data Tables are ideal for organizing data into a structured format, enabling users to view, manage, and interact with data quickly.

- Data tables display information and allow users to view, scan, and interact with that information.
- Key features include:

Batch formatting and data type display
- Infinite row scrolling
- Inline editing for specific data types
- Header and row-level actions
- Resizable columns
- Row selection and sorting
- Text wrapping and clipping
- Row numbering and content alignment for better data management.
- Multi-column Sorting

- Batch formatting and data type display
- Infinite row scrolling
- Inline editing for specific data types
- Header and row-level actions
- Resizable columns
- Row selection and sorting
- Text wrapping and clipping
- Row numbering and content alignment for better data management.
- Multi-column Sorting

### Best Practices

- Organize data clearly, using column sorting and filtering.
- Use inline editing only for fields that require frequent updates.
- For larger tables, use infinite scrolling to enhance loading performance.
- Ensure data tables span edge-to-edge within a list view, with a top border to delineate the header.
- For tables displayed within a popover, use a border around the table for a clear definition.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table--base
title: Data Table - Base
height: 400px
```

### When Not to Use

- Don’t use data tables for unstructured content, such as rich text or multimedia that doesn’t fit neatly into rows and columns.
- Avoid tables with too many fields or complex inline edits that increase the user’s cognitive load and make them hard to read.
- When one record or a few items are shown, use a list or card layout.
- Don’t use data tables for complex interactions.
- Tables are difficult to navigate and read on small screens or mobile devices. Use stacked cards or lists instead.
- For trends or hierarchies, use charts, tree views, or diagrams instead of tables.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table-lbc-examples--with-row-selection
title: Data Table - With Row Selection
height: 400px
```

## Types

Data tables are available in several variations, each serving a specific purpose in displaying data.

### Base

A **base data table** presents structured data in rows and columns. It serves as a starting point for more complex tables, and offers a clean, minimal layout to display information. It does not include additional functionality like inline actions or batch operations.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table--with-row-actions
title: Data Table - With Row Actions
height: 400px
```

### Actionable Table

An **actionable data table** displays structured data and allows users to perform actions in the table to enhance user productivity. Use this type of table in workflows that involve managing, reviewing, or modifying data records.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table--edited-cell-with-row-level-error
title: Data Table - Edited Cell With Row Level Error
height: 400px
```

#### Key Features

1. **Inline Editing**: Users can edit record content directly in the table using row-level buttons.
2. **Batch Actions**: Supports selecting multiple rows and applying actions like mass edits or bulk updates.
3. **Sortable Columns**: Column headers may include sorting controls to organize data by attributes such as name, date, or priority.
4. **Filter and Search**: Tools for filtering visible rows, enabling users to focus on relevant data.
5. **Dynamic Content**: Real-time updates or status indicators, such as icons, reflect changes in the data.

### Inline Edit Table

An **inline editing data table** allows users to edit cells. This feature streamlines workflows by eliminating the need to navigate to separate forms or pages to make changes, enabling faster and more efficient data updates.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table--with-inline-edit
title: Data Table - With Inline Edit
height: 400px
```

#### Key Features

1. **Editable Cells**: Click an editable cell to activate edit mode and update the content directly within the table.
2. **Real-Time Validation**: Built-in validation verifies that input meets required formats or constraints, such as date formats or character limits.
3. **Highlighting Edits**: Visual cues such as color or icons show which cells have been modified.
4. **Batch Editing Support**: Make multiple edits across rows before committing changes in bulk.

## Appearance

The data table features structured rows and columns.

### Anatomy


|  | **Header Row:** The top row that displays column titles and provides context for the data in the columns. |
| --- | --- |
|  | **Row:** A horizontal group of cells representing a single record or data entry. |
|  | **Hover Row:**A highlighted row to show that the user's mouse cursor is currently positioned over. |
|  |**Selected Row:**A highlighted row to show that the user has explicitly chosen or activated. |
|  |**Column:** A vertical group of cells containing data of the same type or category. |
|  | **Header Row Label**: A text label within the header row describing the column content. |
|  | **Sort Button:** A button in the header row for sorting the column's data in ascending or descending order. |
|  | **Text Wrapping/Clipping**: A button in the column header to set text to wrap multiple lines or be clipped and truncated. |
|  | **Cell**: The basic unit of a data table, holding a single piece of data. |
|  | **Cell Content**: Content inside a cell. |
|  | **Inline Edit**: A button icon to edit cell content directly within the table. |
|  | **Preceding Icon**: An icon displayed before the content in a cell, adding visual context. |
|  | **Text Link**: A clickable link within a cell, often navigating to related content or actions. |
|  | **Action Menu:**A menu that extends the actions users can perform. |
|  |**Row Divider**: A horizontal line that separates rows to make them easier to see. |
|  | **Column Divider**: A vertical line that separates columns to make the table more readable and clear. |
|  | **Border:** An optional border can be used to help separate the table from the background. |

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table--with-row-numbers
title: Data Table - With Row Numbers
height: 400px
```

### Customization Options


| Header RowAdd custom elements like tooltips, popovers, or icons to headers. |  |
| --- | --- |
|  |  |
| HeaderlessData tables without a header row. This option removes features and behaviors commonly used with data table headers. |  |
|  |  |
| Striped RowsChoose between striped or non-striped rows. |  |
|  |  |
| **Vertical Column Dividers**Vertical dividers can be used to separate the columns. | *Dividers used between columns* |
|  |  |
| Horizontal BordersRows can be separated by horizontal borders. |  |
|  |  |
| BorderlessTables can be used without vertical dividers or horizontal borders for a minimal look. |  |

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table--with-text-wrapping
title: Data Table - With Text Wrapping
height: 400px
```

#### Table Border

Borders are optional. If a table has a border, the corners are rounded to 8px 

.

In certain situations, like when a table is flush against another element**(1)**, round only specific corners such as the top-left and top-right.

Borders can help tables align with other content.  Be sure to left-align data tables with the page content for easy scanning.

### Size

Data tables are responsive by default, automatically adjusting to fit different screen sizes. Data tables aren’t optimized for mobile devices.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table-lbc-examples--with-infinite-scrolling
title: Data Table - With Infinite Scrolling
height: 400px
```

## Behaviors

Interactive states in data tables are inherently complex because they must account for user feedback at multiple levels–rows, columns, and individual cells–while maintaining clarity and usability. Each level of interaction introduces overlapping states, such as hover, focus, active, and selected.

Explore the examples here to experience the Data Table’s interactive states.

### Row Selection

Users select one or multiple rows via checkboxes or radio buttons for bulk actions like delete or export.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-data-table--with-sorting
title: Data Table - With Sorting
height: 400px
```

### Row Actions

Actions like Edit, Delete, or View Details are available for individual rows through dropdown menus or icons.

### Errors

Displays error feedback when data fails to load. Error cells show an error icon at the beginning of the row. Use clear, concise affordances explaining the issue and next steps.

Allows users to edit certain data types directly within the table without leaving the context.

### Dirty State

To show users when a field or cell has been modified but not yet saved, a cell displays a yellow highlight as a visual indicator.

### Row Numbering Column

A dedicated column displays row numbers for reference, particularly useful in large datasets. When the table has inline editing, the number column displays. This way, any validation errors can be displayed in a tooltip next to the row number.

Content in columns, including column headers, can either wrap to show all text or clip to fit within the column width. If a column is set to Clip Text, the content in each column cell is truncated (...), exposing only what the cell’s width allows. If a column is set to Wrap Text, then each cell in that column expands its height to reveal all the content. The entire row's height also expands.

### Infinite Scrolling

Rows load dynamically in batches as users scroll, reducing initial page load time. A [spinner](/components/spinners) is shown when data is being fetched.

### Single Column Sorting

Table data can be sorted in ascending or descending order of one column's data. The type of data in the sort column determines whether the table data is sorted alphabetically, numerically, by date, and so on.

- Hovering over the column header reveals an arrow icon for sortable columns.
- An up/down arrow icon in the column header shows the current sorting state.
- Sorting automatically resets sorting when new filters are applied.

### Multi-Column Sorting

Multi-column sorting offers a powerful way to organize complex data. It enables the creation of a logical sort order across several columns, arranging information with precision. This makes it easier to analyze and navigate large datasets.

#### How to Sort

To add, reorder, or remove sort criteria, open the multi-column sort modal from the action menu on any data table. If a sort order is already configured, the modal displays the saved settings upon opening.

#### Customizing the Sort

1. **Set Sort Order** 

In **Sort by**, choose the primary column to sort by.
2. Sorting is limited to the columns displayed in the current view, up to 5 columns.
3. **Add Columns**

1. In **Sort by**, choose the primary column to sort by.
2. Sorting is limited to the columns displayed in the current view, up to 5 columns.

To add additional columns to or remove from the sorting sequence,  click **+ Add a sort column**".

1. **Choose Direction**

To change the direction of sorting for each column, click **Ascending** or **Descending**.

1. **Reorder and Remove**

To change the sort priority, use the up and down arrows.
2. To remove a column from the criteria, click the trashcan icon.
3. **Clear Sorting**

1. To change the sort priority, use the up and down arrows.
2. To remove a column from the criteria, click the trashcan icon.

To restore the table’s default view, click **Clear**.

#### Visual Indicators

1. After a sort is applied, the header for each sorted column displays a visual indicator for the sort direction.
2. The system also provides clear messages for invalid configurations, such as sorting by the same column twice or leaving a field empty, to guide the resolution process.

## Related Components
