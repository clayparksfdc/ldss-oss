---
title: "Data Table - Specifications"
slug: "data-table--specifications"
category: "component"
order: 0
---

## Styling Hooks Overview

Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, [read the technical documentation](/develop/global-styling-hooks).

## Overview of CSS Classes


| **Category** | **Description** |
| --- | --- |
| **Selector** | The CSS class being referred to. |
| **Summary** | A description of what the class does. |
| **Support** | Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet). |
| **Restrict** | The selector that the class name is allowed to be used on. |
| **Variant** | The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button. |
| **Modifier** | A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning. |

### Available Classes

Selector
.slds-max-medium-table_stacked-horizontal

Summary
Creates stacked rows with horizontal cells

Support
prototype

Restrict
.slds-table

Modifier
true

Selector
.slds-max-medium-table_stacked

Summary
Creates stacked row with stacked cells

Support
prototype

Restrict
.slds-table

Variant
true

Selector
.slds-no-cell-focus

Restrict
.slds-table_edit

Modifier
true

Selector
.slds-cell-edit__button

Restrict
.slds-cell-edit button

Selector
.slds-has-error

Restrict
.slds-cell-edit

Modifier
true

Selector
.slds-is-edited

Restrict
.slds-cell-edit

Modifier
true

Selector
.slds-cell-edit

Restrict
.slds-table_edit th, .slds-table_edit td

Selector
.slds-cell-error

Restrict
.slds-table_edit td

Selector
.slds-table_edit

Summary
Initiates inline-edit mode for data-tables

Support
dev-ready

Restrict
.slds-table

Variant
true

Selector
.slds-table_header-hidden

Summary
Used to remove the top border when a table's header is visually hidden

Support
dev-ready

Restrict
.slds-table

Variant
true

Selector
.slds-th__action_form

Restrict
.slds-th__action

Selector
.slds-th__action

Restrict
.slds-table th div, .slds-table th a

Selector
.slds-resizable__divider

Restrict
.slds-resizable__handle span

Selector
.slds-resizable__handle

Restrict
.slds-resizable span

Selector
.slds-resizable

Restrict
.slds-is-resizable div

Selector
.slds-is-resizable

Restrict
.slds-table_resizable-cols th

Selector
.slds-table_resizable-cols

Restrict
.slds-table_fixed-layout

Selector
.slds-is-sorted_asc

Restrict
.slds-is-sorted

Modifier
true

Selector
.slds-is-sorted

Restrict
.slds-table_fixed-layout th

Selector
.slds-th__action-button

Restrict
.slds-has-button-menu .slds-button_icon

Selector
.slds-has-button-menu

Restrict
.slds-table_fixed-layout th

Selector
.slds-is-sortable__icon

Restrict
.slds-is-sortable .slds-icon

Selector
.slds-is-sortable

Restrict
.slds-table_fixed-layout th

Selector
.slds-table_fixed-layout

Summary
Set table to use fixed layout for width and truncation purposes

Support
dev-ready

Restrict
.slds-table

Variant
true

Selector
.slds-table_striped

Restrict
.slds-table

Modifier
true

Selector
.slds-table_col-bordered

Restrict
.slds-table

Modifier
true

Selector
.slds-table_bordered

Restrict
.slds-table

Modifier
true

Selector
.slds-table_cell-buffer

Restrict
.slds-table

Modifier
true

Selector
.slds-cell_action-mode

Restrict
.slds-table th, .slds-table td

Modifier
true

Selector
.slds-has-focus

Restrict
.slds-table th, .slds-table td

Modifier
true

Selector
.slds-cell-buffer_right

Restrict
.slds-table th, .slds-table td

Modifier
true

Selector
.slds-cell-buffer_left

Restrict
.slds-table th, .slds-table td

Modifier
true

Selector
.slds-cell-wrap

Restrict
.slds-table th, .slds-table td

Modifier
true

Selector
.slds-is-selected

Restrict
.slds-table tr

Modifier
true

Selector
.slds-no-row-hover

Restrict
.slds-table

Modifier
true

Selector
.slds-table

Summary
Initializes data table

Support
dev-ready

Restrict
table

Variant
true
