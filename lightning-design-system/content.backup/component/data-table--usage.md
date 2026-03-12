---
title: "Data Table"
description: "Data Tables are ideal for organizing data into a structured format, enabling users to view, manage, and interact with data quickly."
category: "component"
slug: "data-table--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

Data Tables are ideal for organizing data into a structured format, enabling users to view, manage, and interact with data quickly.

- Data tables display information and allow users to view, scan, and interact with that information.
- Key features include:<ul><li>Batch formatting and data type display</li><li>Infinite row scrolling</li><li>Inline editing for specific data types</li><li>Header and row-level actions</li><li>Resizable columns</li><li>Row selection and sorting</li><li>Text wrapping and clipping</li><li>Row numbering and content alignment for better data management.</li><li>Multi-column Sorting</li></ul>
- Batch formatting and data type display
- Infinite row scrolling
- Inline editing for specific data types
- Header and row-level actions
- Resizable columns
- Row selection and sorting
- Text wrapping and clipping
- Row numbering and content alignment for better data management.
- Multi-column Sorting


Data tables display information and allow users to view, scan, and interact with that information.

Key features include:

- Batch formatting and data type display
- Infinite row scrolling
- Inline editing for specific data types
- Header and row-level actions
- Resizable columns
- Row selection and sorting
- Text wrapping and clipping
- Row numbering and content alignment for better data management.
- Multi-column Sorting


Batch formatting and data type display

Infinite row scrolling

Inline editing for specific data types

Header and row-level actions

Resizable columns

Row selection and sorting

Text wrapping and clipping

Row numbering and content alignment for better data management.

Multi-column Sorting

### Best Practices

- Organize data clearly, using column sorting and filtering.
- Use inline editing only for fields that require frequent updates.
- For larger tables, use infinite scrolling to enhance loading performance.
- Ensure data tables span edge-to-edge within a list view, with a top border to delineate the header.
- For tables displayed within a popover, use a border around the table for a clear definition.


Organize data clearly, using column sorting and filtering.

Use inline editing only for fields that require frequent updates.

For larger tables, use infinite scrolling to enhance loading performance.

Ensure data tables span edge-to-edge within a list view, with a top border to delineate the header.

For tables displayed within a popover, use a border around the table for a clear definition.

### When Not to Use

- Don’t use data tables for unstructured content, such as rich text or multimedia that doesn’t fit neatly into rows and columns.
- Avoid tables with too many fields or complex inline edits that increase the user’s cognitive load and make them hard to read.
- When one record or a few items are shown, use a list or card layout.
- Don’t use data tables for complex interactions.
- Tables are difficult to navigate and read on small screens or mobile devices. Use stacked cards or lists instead.
- For trends or hierarchies, use charts, tree views, or diagrams instead of tables.


Don’t use data tables for unstructured content, such as rich text or multimedia that doesn’t fit neatly into rows and columns.

Avoid tables with too many fields or complex inline edits that increase the user’s cognitive load and make them hard to read.

When one record or a few items are shown, use a list or card layout.

Don’t use data tables for complex interactions.

Tables are difficult to navigate and read on small screens or mobile devices. Use stacked cards or lists instead.

For trends or hierarchies, use charts, tree views, or diagrams instead of tables.

## Types

Data tables are available in several variations, each serving a specific purpose in displaying data.

### Base

A **base data table** presents structured data in rows and columns. It serves as a starting point for more complex tables, and offers a clean, minimal layout to display information. It does not include additional functionality like inline actions or batch operations.

### Actionable Table

An **actionable data table** displays structured data and allows users to perform actions in the table to enhance user productivity. Use this type of table in workflows that involve managing, reviewing, or modifying data records.

#### Key Features

1. **Inline Editing**: Users can edit record content directly in the table using row-level buttons.
2. **Batch Actions**: Supports selecting multiple rows and applying actions like mass edits or bulk updates.
3. **Sortable Columns**: Column headers may include sorting controls to organize data by attributes such as name, date, or priority.
4. **Filter and Search**: Tools for filtering visible rows, enabling users to focus on relevant data.
5. **Dynamic Content**: Real-time updates or status indicators, such as icons, reflect changes in the data.


**Inline Editing**: Users can edit record content directly in the table using row-level buttons.

**Batch Actions**: Supports selecting multiple rows and applying actions like mass edits or bulk updates.

**Sortable Columns**: Column headers may include sorting controls to organize data by attributes such as name, date, or priority.

**Filter and Search**: Tools for filtering visible rows, enabling users to focus on relevant data.

**Dynamic Content**: Real-time updates or status indicators, such as icons, reflect changes in the data.

### Inline Edit Table

An **inline editing data table** allows users to edit cells. This feature streamlines workflows by eliminating the need to navigate to separate forms or pages to make changes, enabling faster and more efficient data updates.

#### Key Features

1. **Editable Cells**: Click an editable cell to activate edit mode and update the content directly within the table.
2. **Real-Time Validation**: Built-in validation verifies that input meets required formats or constraints, such as date formats or character limits.
3. **Highlighting Edits**: Visual cues such as color or icons show which cells have been modified.
4. **Batch Editing Support**: Make multiple edits across rows before committing changes in bulk.


**Editable Cells**: Click an editable cell to activate edit mode and update the content directly within the table.

**Real-Time Validation**: Built-in validation verifies that input meets required formats or constraints, such as date formats or character limits.

**Highlighting Edits**: Visual cues such as color or icons show which cells have been modified.

**Batch Editing Support**: Make multiple edits across rows before committing changes in bulk.

## Appearance

The data table features structured rows and columns.

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Header Row:** The top row that displays column titles and provides context for the data in the columns. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Row:** A horizontal group of cells representing a single record or data entry. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Hover Row: **A highlighted row to show that the user's mouse cursor is currently positioned over. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Selected Row: **A highlighted row to show that the user has explicitly chosen or activated. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Column:** A vertical group of cells containing data of the same type or category. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Header Row Label**: A text label within the header row describing the column content. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Sort Button:** A button in the header row for sorting the column's data in ascending or descending order. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Text Wrapping/Clipping**: A button in the column header to set text to wrap multiple lines or be clipped and truncated. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Cell**: The basic unit of a data table, holding a single piece of data. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Cell Content**: Content inside a cell. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Inline Edit**: A button icon to edit cell content directly within the table. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Preceding Icon**: An icon displayed before the content in a cell, adding visual context. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Text Link**: A clickable link within a cell, often navigating to related content or actions. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Action Menu: **A menu that extends the actions users can perform. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Row Divider**: A horizontal line that separates rows to make them easier to see. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Column Divider**: A vertical line that separates columns to make the table more readable and clear. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Border:** An optional border can be used to help separate the table from the background. |


**Header Row:** The top row that displays column titles and provides context for the data in the columns.

**Row:** A horizontal group of cells representing a single record or data entry.

**Hover Row: **A highlighted row to show that the user's mouse cursor is currently positioned over.

**Selected Row: **A highlighted row to show that the user has explicitly chosen or activated.

**Column:** A vertical group of cells containing data of the same type or category.

**Header Row Label**: A text label within the header row describing the column content.

**Sort Button:** A button in the header row for sorting the column's data in ascending or descending order.

**Text Wrapping/Clipping**: A button in the column header to set text to wrap multiple lines or be clipped and truncated.

**Cell**: The basic unit of a data table, holding a single piece of data.

**Cell Content**: Content inside a cell.

**Inline Edit**: A button icon to edit cell content directly within the table.

**Preceding Icon**: An icon displayed before the content in a cell, adding visual context.

**Text Link**: A clickable link within a cell, often navigating to related content or actions.

**Action Menu: **A menu that extends the actions users can perform.

**Row Divider**: A horizontal line that separates rows to make them easier to see.

**Column Divider**: A vertical line that separates columns to make the table more readable and clear.

**Border:** An optional border can be used to help separate the table from the background.

### Customization Options

| <h4>Header Row</h4>Add custom elements like tooltips, popovers, or icons to headers. |   |
| --- | --- |
|   |   |
| <h4>Headerless</h4>Data tables without a header row. This option removes features and behaviors commonly used with data table headers. |   |
|   |   |
| <h4>Striped Rows</h4>Choose between striped or non-striped rows. |   |
|   |   |
| <h4>**Vertical Column Dividers**</h4>Vertical dividers can be used to separate the columns. | *Dividers used between columns* |
|   |   |
| <h4>Horizontal Borders</h4>Rows can be separated by horizontal borders. |   |
|   |   |
| <h4>Borderless</h4>Tables can be used without vertical dividers or horizontal borders for a minimal look. |   |


#### Header Row

Add custom elements like tooltips, popovers, or icons to headers.

#### Headerless

Data tables without a header row. This option removes features and behaviors commonly used with data table headers.

#### Striped Rows

Choose between striped or non-striped rows.

#### Vertical Column Dividers

Vertical dividers can be used to separate the columns.

*Dividers used between columns*

#### Horizontal Borders

Rows can be separated by horizontal borders.

#### Borderless

Tables can be used without vertical dividers or horizontal borders for a minimal look.

#### Table Border

Borders are optional. ** **If a table has a border, the corners are rounded to 8px *<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*--slds-g-radius-border-2.

In certain situations, like when a table is flush against another element **(1)**, round only specific corners such as the top-left and top-right.

Borders can help tables align with other content. Be sure to left-align data tables with the page content for easy scanning.

### Size

Data tables are responsive by default, automatically adjusting to fit different screen sizes. Data tables aren’t optimized for mobile devices.

## Behaviors

Interactive states in data tables are inherently complex because they must account for user feedback at multiple levels–rows, columns, and individual cells–while maintaining clarity and usability. Each level of interaction introduces overlapping states, such as hover, focus, active, and selected.

Explore the examples here to experience the Data Table’s interactive states.

### Row Selection

Users select one or multiple rows via checkboxes or radio buttons for bulk actions like delete or export.

### Row Actions

Actions like Edit, Delete, or View Details are available for individual rows through dropdown menus or icons.

### Errors

Displays error feedback when data fails to load. Error cells show an error icon at the beginning of the row. Use clear, concise affordances explaining the issue and next steps.

### Inline Edit

Allows users to edit certain data types directly within the table without leaving the context.

### Dirty State

To show users when a field or cell has been modified but not yet saved, a cell displays a yellow highlight as a visual indicator.

### Row Numbering Column

A dedicated column displays row numbers for reference, particularly useful in large datasets. When the table has inline editing, the number column displays. This way, any validation errors can be displayed in a tooltip next to the row number.

### Text Wrapping

Content in columns, including column headers, can either wrap to show all text or clip to fit within the column width. If a column is set to Clip Text, the content in each column cell is truncated (...), exposing only what the cell’s width allows. If a column is set to Wrap Text, then each cell in that column expands its height to reveal all the content. The entire row's height also expands.

### Infinite Scrolling

Rows load dynamically in batches as users scroll, reducing initial page load time. A [spinner](https://www.lightningdesignsystem.com/2e1ef8501/p/959d6d) is shown when data is being fetched.

### Single Column Sorting

Table data can be sorted in ascending or descending order of one column's data. The type of data in the sort column determines whether the table data is sorted alphabetically, numerically, by date, and so on.

- Hovering over the column header reveals an arrow icon for sortable columns.
- An up/down arrow icon in the column header shows the current sorting state.
- Sorting automatically resets sorting when new filters are applied.


Hovering over the column header reveals an arrow icon for sortable columns.

An up/down arrow icon in the column header shows the current sorting state.

Sorting automatically resets sorting when new filters are applied.

### Multi-Column Sorting

Multi-column sorting offers a powerful way to organize complex data. It enables the creation of a logical sort order across several columns, arranging information with precision. This makes it easier to analyze and navigate large datasets.

#### How to Sort

To add, reorder, or remove sort criteria, open the multi-column sort modal from the action menu on any data table. If a sort order is already configured, the modal displays the saved settings upon opening.

#### Customizing the Sort

1. **Set Sort Order** <ol><li>In **Sort by**, choose the primary column to sort by. </li><li>Sorting is limited to the columns displayed in the current view, up to 5 columns.</li></ol>
2. In **Sort by**, choose the primary column to sort by.
3. Sorting is limited to the columns displayed in the current view, up to 5 columns.
4. **Add Columns**


**Set Sort Order**

1. In **Sort by**, choose the primary column to sort by.
2. Sorting is limited to the columns displayed in the current view, up to 5 columns.


In **Sort by**, choose the primary column to sort by.

Sorting is limited to the columns displayed in the current view, up to 5 columns.

**Add Columns**

To add additional columns to or remove from the sorting sequence, click **+ Add a sort column**".

1. **Choose Direction**


**Choose Direction**

To change the direction of sorting for each column, click **Ascending** or **Descending**.

1. **Reorder and Remove**<ol><li>To change the sort priority, use the up and down arrows.</li><li>To remove a column from the criteria, click the trashcan icon.</li></ol>
2. To change the sort priority, use the up and down arrows.
3. To remove a column from the criteria, click the trashcan icon.
4. **Clear Sorting**


**Reorder and Remove**

1. To change the sort priority, use the up and down arrows.
2. To remove a column from the criteria, click the trashcan icon.


To change the sort priority, use the up and down arrows.

To remove a column from the criteria, click the trashcan icon.

**Clear Sorting**

To restore the table’s default view, click **Clear**.

#### Visual Indicators

1. After a sort is applied, the header for each sorted column displays a visual indicator for the sort direction.
2. The system also provides clear messages for invalid configurations, such as sorting by the same column twice or leaving a field empty, to guide the resolution process.


After a sort is applied, the header for each sorted column displays a visual indicator for the sort direction.

The system also provides clear messages for invalid configurations, such as sorting by the same column twice or leaving a field empty, to guide the resolution process.

## Related Components
