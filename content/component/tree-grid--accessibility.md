---
title: "Tree Grid - Accessibility"
slug: "tree-grid--accessibility"
category: "component"
order: 0
---

## Interactions

### Keyboard 

* Overall keyboard interaction should follow the same keyboard modal as the [Advanced and Inline Edit Data Table](/component/data-table) with some additions
    * Navigation mode is the default mode. The grid only has a single focusable element at any time and it is either the `tr` or the `td`
    * Actionable mode is enabled when the user presses the `Enter` key, where actionable elements become focusable in the cell
    * Actionable mode is exited when the user presses the `Escape` key, and the user is placed back into Navigation Mode on the last cell they were in
* User focus is initially placed on the first row in the tree grid
* `Down` arrow key moves the user down one row and moves `tabindex="0"` with it
* `Up` arrow key moves the user up one row and moves `tabindex="0"` with it
* `Space` key when focused on a row should select that row by setting `aria-selected="true` on the `tr` element
* `Right` arrow key on a collapsed row, will expand it and update `aria-expanded`
* `Right` arrow key on an expanded or end row will move the user to the first cell in the row and move `tabindex="0"` with it
* `Right` arrow key on a cell will move the user to the next cell in the row and move `tabindex="0"` with it
* `Left` arrow key on a collapsed or end row will move the user to it's parent row and collapse it, if it has one
* `Left` arrow key on an expanded row will collapse it and update `aria-expanded`
* `Left` arrow key on a cell will move the user to the previous cell in the row and moves `tabindex="0"` with it
* `Left` arrow key on the first cell of a row will move the user back to the row and moves `tabindex="0"` with it

![Tree Grid - Tab Order](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/f125797da56e6111ae5f0b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042738Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d98c660272a09f4fb0549cc65635e8226b7a95f9e2dfd39e6cbac056323e7331)

**Tree Grid - Tab Order**

---

## Developer Considerations

### Markup

* `role="treegrid"` should be applied to the `table` element
* `aria-readonly="true"` should be applied to the `table` element
* `aria-level="n"` where `n` represents the nesting level of a particular grid row, should be applied to the `tr` element
* `aria-setsize="n"` where `n` is the number of items for that specific `aria-level` should be applied to the `tr` element
* `aria-posinset="n"` where `n` represents the position in the `aria-level` set the row is placed at, should be applied to the `tr` element
* `aria-expanded="false"` should be placed on rows that are collapsed and have child rows
* `aria-expanded="true"` should be placed on rows that are expanded and have child rows
* `tabindex="0"` should be placed on the first `tr` in the grid on load, to make the row focusable
* Every actionable element in the grid should have `tabindex="-1"` applied to make them not focusable in the grids navigation mode

### Multi-select tree grid

* `aria-multiselectable="true"` should be placed on the `table` element
* `aria-selected="false"` should be set by default on all `tr` elements that aren't selected
* `aria-selected="true"` should be set only on the `tr` elements that are selected

### Single Select tree grid

* `aria-selected="true"` should be applied to the `tr` that is selected in the tree grid
