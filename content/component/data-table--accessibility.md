---
title: "Data Table · Lightning Design System 2"
slug: "data-table--accessibility"
category: "component"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/86f13a-data-table/b/74d5d4"
extractedAt: "2026-02-21T21:47:43.898Z"
---

## Interaction

### Keyboard Navigation

#### Navigation Mode

- Tabbing into the grid focuses the first data cell in the table.
- The second tab key press takes the user focus out of the grid onto the next focusable element on the page.
- Once the user has tabbed out of the grid, tabbing back into the grid will return focus to the last cell the user was focused on.
- Navigation in the grid is accomplished via the arrow keys.
- No actionable items in cell contents are focusable.
- Pressing the Enter key on a chosen grid cell, places the entire Grid into Actionable mode.

#### Actionable Mode

- Once in Actionable mode, all focusable items in the entire grid can be tabbed to.
- Arrow navigation still takes the user cell to cell in any direction, but focuses on the first actionable item in the cell, if there is one.
- Pressing the Escape key exits Actionable mode, placing the user back into Navigation mode, keeping the users cursor on the same cell they were focused in.
- When interacting with a component in a cell, such as a Menu, that also uses the Escape key as an exit action, pressing Escape will take the user back to the triggering element in the current cell. A subsequent press of Escape will return the user to Navigation mode.
For the purposes of these docs, the Default state of Inline Edit is representative of Navigation mode, all other states are assumed to be in Actionable Mode.

### Truncation

Currently, cells in a data table automatically truncate long strings. Users can either widen the column to view the full string or hover over the cell to see the full text in a tooltip. The Lightning Data Table is responsive by default.

### Headings

To create an accessible table, the top row of column headers (`th`) are placed in a thread. Each one receives the `scope="col"` attribute. The first non-actionable (meaning that doesn't contain a checkbox or menu) column in each row should be marked as a `th` with a `scope="row" `attribute.

### Labeling

Accessibility labels provide essential cues for assistive technology:

- **Column Headers**: Add `aria-label` or `aria-labelledby` for each header.
- **Rows**: Use ARIA labels on interactive rows (e.g., checkboxes, buttons) to clearly indicate the action.
- **No Data**: If the Data Table is empty, ensure a message displays, such as “No data available,” and that this message is accessible to screen readers.
To give additional context, like a caption or description, to a table for screen readers, the attributes `aria-labelledby` or aria-label can be used on the table element.

For `aria-label`, set the description as the attribute value. Alternatively, if another element, or elements, can serve this purpose for the table, then set the value of `aria-labelledby` with the `id` of the element[s].

## Inline Edit

The Advanced Data Table and Inline Edit Data Table are based on the semantics, roles and interaction model of the ARIA Grid. In SLDS we overlay the [ARIA Grid](http://w3c.github.io/aria/practices/aria-practices.html#grid) on top of native HTML table semantics.

The role of Grid comes with 2 distinct modes, **Navigation mode** and **Actionable mode**. Both come with very specific keyboard interaction modals. Navigation mode is the default mode of the Grid.

Bold text for edited cell examples provide secondary indicators for text, along with yellow backgrounds, to indicate content is edited but unsaved.
