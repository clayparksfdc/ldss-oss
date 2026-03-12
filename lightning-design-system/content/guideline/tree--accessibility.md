---
title: "Tree"
slug: "tree--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/950b57-tree/b/65bc39"
extractedAt: "2026-02-21T21:56:30.328Z"
---

## Markup

- `role="tree"` is placed on the `ul`
- `role="tree"` element also has `aria-labelledby` applied which points to the trees heading element
- `role="treeitem"` is placed on the tree `li` elements
- `aria-level` is applied to `treeitem` elements to indicate their nesting depth
- `aria-expanded` is applied to `treeitem` elements that have child tree nodes. It is set to `true` or `false`
- `aria-label` is applied to `treeitem` elements that have child tree nodes. Be sure to add any metatext to the label, if applicable
- `aria-selected="true"` is applied to `treeitem` elements that are selected
- `aria-disabled="true"` is applied to `treeitem` elements that are disabled. They do not receive a `tabindex`.
- `tabindex="0"` is applied to the `treeitem` that is in focus
- `role="group"` is applied to child tree node containers, `ul`

role="tree" is placed on the ul

role="tree" element also has aria-labelledby applied which points to the trees heading element

role="treeitem" is placed on the tree li elements

aria-level is applied to treeitem elements to indicate their nesting depth

aria-expanded is applied to treeitem elements that have child tree nodes. It is set to true or false

aria-label is applied to treeitem elements that have child tree nodes. Be sure to add any metatext to the label, if applicable

aria-selected="true" is applied to treeitem elements that are selected

aria-disabled="true" is applied to treeitem elements that are disabled. They do not receive a tabindex.

tabindex="0" is applied to the treeitem that is in focus

role="group" is applied to child tree node containers, ul

## Interactions

- Only a single action per tree item
- Only 1 focused item per Tree
- Actionable elements in a tree item are mouse only and should not be focusable, they should be presentational and should be hidden from screen readers and keyboard users
- Focus is placed on the entire `li[role="treeitem"]`. If that item has child items, focus must include those as well.
### Mouse

- Clicking the chevrons expand/collapse the parent nodes.
- Clicking the labels selects the node. If linked, navigates to a new page or section.
### Keyboard Navigation

- Clicking on a tree item creates a selection
- `Up` and `Down` arrow keys move `:focus` **and** `aria-selected`. Previous selections are cleared
- `Right` arrow key to expand collapsed node.
- `Left` arrow key to collapse expanded node.
- `Left` arrow key on an end child node, collapses the group and moves `:focus` and `aria-selected` to the parent `treeitem`
- `Enter` performs the default action on an end tree item (if there is one).
- `Ctrl` + `Up` and `Ctrl` + `Down` moves focus. Current selection is maintained
- `Ctrl` + `Space` will add or remove the currently focused tree item to the selection

Clicking on a tree item creates a selection

Up and Down arrow keys move :focus and aria-selected. Previous selections are cleared

Right arrow key to expand collapsed node.

Left arrow key to collapse expanded node.

Left arrow key on an end child node, collapses the group and moves :focus and aria-selected to the parent treeitem

Enter performs the default action on an end tree item (if there is one).

Ctrl + Up and Ctrl + Down moves focus. Current selection is maintained

Ctrl + Space will add or remove the currently focused tree item to the selection

### Other

Screen readers should announce the node level and whether it is expanded or collapsed.

### Filtering

When filtering a tree you should couple the tree with a search input. The search input will control the contents of the tree and as such should the attribute aria-controls added to it. The value of the aria-controls attribute should be the ID of the tree it controls. The search input should also be of type search.

Upon typing in the input the tree should start filtering immediately, expanding all nodes that have matching tree items to display, and highlighting the search term in each of the matching items. The highlight is provided by wrapping the term in  elements.

## Development Considerations

- Implement `aria-expanded` `and aria-level` attributes for nodes.
- Dynamically update attributes during interaction.

Implement aria-expanded and aria-level attributes for nodes.

Dynamically update attributes during interaction.

## Content Considerations

- Node labels should be meaningful and unique.

Node labels should be meaningful and unique.

## Accessibility Labels

Use aria-label or aria-labelledby for tree containers.

## Internationalization

Text direction and alignment adapt to right-to-left (RTL) languages.

