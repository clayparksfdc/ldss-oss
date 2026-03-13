---
title: "Combobox - Specifications"
slug: "combobox--specifications"
category: "component"
parent: "combobox"
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
.slds-listbox-toggle

Summary
Toggle button to show all of the pill selections

Restrict
.slds-listbox_selection-group > span

Selector
.slds-is-expanded

Summary
Expanded state of a selection group

Restrict
.slds-listbox_selection-group

Selector
.slds-dropdown_length-with-icon-10

Summary
Forces overflow scrolling after 10 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-with-icon-7

Summary
Forces overflow scrolling after 7 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-with-icon-5

Summary
Forces overflow scrolling after 5 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-10

Summary
Forces overflow scrolling after 10 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-7

Summary
Forces overflow scrolling after 7 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-5

Summary
Forces overflow scrolling after 5 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-listbox_vertical

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox__icon-selected

Restrict
.slds-listbox__item svg

Selector
.slds-listbox__option-meta

Restrict
.slds-listbox__option span

Selector
.slds-listbox__option-text_entity

Restrict
.slds-listbox__option span

Selector
.slds-is-selected

Restrict
.slds-listbox__option

Modifier
true

Selector
.slds-listbox__option_has-meta

Restrict
.slds-listbox__option

Selector
.slds-listbox__option_plain

Restrict
.slds-listbox__option

Selector
.slds-listbox__option_entity

Restrict
.slds-listbox__option

Selector
.slds-has-focus

Restrict
.slds-listbox__option

Modifier
true

Selector
.slds-listbox__option-icon

Summary
Container for listbox option icon

Restrict
.slds-listbox__option span

Selector
.slds-listbox__option-header

Summary
Header for choosable option within listbox

Restrict
.slds-listbox__option h3

Selector
.slds-listbox__option

Restrict
.slds-listbox__item > div

Selector
.slds-listbox__item

Restrict
.slds-listbox > li

Selector
.slds-listbox_horizontal

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox_inline

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox

Support
dev-ready

Restrict
.slds-dropdown ul, .slds-dueling-list__options ul, .slds-pill_container ul, .slds-listbox_selection-group ul, .slds-combobox_container ul, .slds-form-element__control ul, .slds-popover__body ul

Variant
true

Selector
.slds-listbox_selection-group

Summary
The container of pill selections found inside of a combobox group

Restrict
.slds-combobox-group ~ div, .slds-combobox_container ~ div

Selector
.slds-combobox-addon_end

Summary
The last combobox in the combobox group

Restrict
.slds-combobox-group div

Selector
.slds-combobox-addon_start

Summary
The first combobox in the combobox group

Restrict
.slds-combobox-group div

Selector
.slds-has-selection

Summary
Modifier that notifies the combobox group that a selection has been made

Restrict
.slds-combobox-group, .slds-combobox_container

Selector
.slds-combobox_object-switcher

Summary
Modifier that identifies the combobox as the object switcher, applies specific interactions for its context

Restrict
.slds-combobox-group div

Selector
.slds-combobox-group

Summary
Container for a combobox group

Support
dev-ready

Restrict
div

Variant
true

Selector
.slds-listbox-toggle

Summary
Toggle button to show all of the pill selections

Restrict
.slds-listbox_selection-group > span

Selector
.slds-is-expanded

Summary
Expanded state of a selection group

Restrict
.slds-listbox_selection-group

Selector
.slds-dropdown_length-with-icon-10

Summary
Forces overflow scrolling after 10 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-with-icon-7

Summary
Forces overflow scrolling after 7 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-with-icon-5

Summary
Forces overflow scrolling after 5 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-10

Summary
Forces overflow scrolling after 10 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-7

Summary
Forces overflow scrolling after 7 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-5

Summary
Forces overflow scrolling after 5 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-listbox_vertical

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox__icon-selected

Restrict
.slds-listbox__item svg

Selector
.slds-listbox__option-meta

Restrict
.slds-listbox__option span

Selector
.slds-listbox__option-text_entity

Restrict
.slds-listbox__option span

Selector
.slds-is-selected

Restrict
.slds-listbox__option

Modifier
true

Selector
.slds-listbox__option_has-meta

Restrict
.slds-listbox__option

Selector
.slds-listbox__option_plain

Restrict
.slds-listbox__option

Selector
.slds-listbox__option_entity

Restrict
.slds-listbox__option

Selector
.slds-has-focus

Restrict
.slds-listbox__option

Modifier
true

Selector
.slds-listbox__option-icon

Summary
Container for listbox option icon

Restrict
.slds-listbox__option span

Selector
.slds-listbox__option-header

Summary
Header for choosable option within listbox

Restrict
.slds-listbox__option h3

Selector
.slds-listbox__option

Restrict
.slds-listbox__item > div

Selector
.slds-listbox__item

Restrict
.slds-listbox > li

Selector
.slds-listbox_horizontal

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox_inline

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox

Support
dev-ready

Restrict
.slds-dropdown ul, .slds-dueling-list__options ul, .slds-pill_container ul, .slds-listbox_selection-group ul, .slds-combobox_container ul, .slds-form-element__control ul, .slds-popover__body ul

Variant
true

Selector
.slds-listbox_selection-group

Summary
The container of pill selections found inside of a combobox group

Restrict
.slds-combobox-group ~ div, .slds-combobox_container ~ div

Selector
.slds-combobox[aria-haspopup=“dialog”]

Support
dev-ready

Restrict
.slds-combobox_container .slds-combobox

Variant
true

Selector
.slds-combobox_container__icon

Restrict
.slds-combobox_container svg

Selector
.slds-has-inline-listbox

Restrict
.slds-combobox_container

Selector
.slds-has-selection

Summary
Modifier that notifies the combobox group that a selection has been made

Restrict
.slds-combobox-group, .slds-combobox_container

Selector
.slds-combobox_container__icon

Restrict
.slds-combobox_container svg

Selector
.slds-dropdown_length-with-icon-10

Summary
Forces overflow scrolling after 10 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-with-icon-7

Summary
Forces overflow scrolling after 7 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-with-icon-5

Summary
Forces overflow scrolling after 5 list items with an icon

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-10

Summary
Forces overflow scrolling after 10 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-7

Summary
Forces overflow scrolling after 7 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-dropdown_length-5

Summary
Forces overflow scrolling after 5 list items

Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox

Modifier
true

Selector
.slds-listbox_vertical

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox__icon-selected

Restrict
.slds-listbox__item svg

Selector
.slds-listbox__option-meta

Restrict
.slds-listbox__option span

Selector
.slds-listbox__option-text_entity

Restrict
.slds-listbox__option span

Selector
.slds-is-selected

Restrict
.slds-listbox__option

Modifier
true

Selector
.slds-listbox__option_has-meta

Restrict
.slds-listbox__option

Selector
.slds-listbox__option_plain

Restrict
.slds-listbox__option

Selector
.slds-listbox__option_entity

Restrict
.slds-listbox__option

Selector
.slds-has-focus

Restrict
.slds-listbox__option

Modifier
true

Selector
.slds-listbox__option-icon

Summary
Container for listbox option icon

Restrict
.slds-listbox__option span

Selector
.slds-listbox__option-header

Summary
Header for choosable option within listbox

Restrict
.slds-listbox__option h3

Selector
.slds-listbox__option

Restrict
.slds-listbox__item > div

Selector
.slds-listbox__item

Restrict
.slds-listbox > li

Selector
.slds-listbox_horizontal

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox_inline

Restrict
.slds-listbox

Modifier
true

Selector
.slds-listbox

Support
dev-ready

Restrict
.slds-dropdown ul, .slds-dueling-list__options ul, .slds-pill_container ul, .slds-listbox_selection-group ul, .slds-combobox_container ul, .slds-form-element__control ul, .slds-popover__body ul

Variant
true

Selector
.slds-has-icon_left

Restrict
.slds-combobox

Selector
.slds-has-focus

Summary
Force focus state of the input

Restrict
.slds-combobox__input

Selector
.slds-combobox__input-value

Restrict
.slds-combobox__input

Selector
[aria-autocomplete="list"]

Support
dev-ready

Restrict
.slds-combobox__input

Variant
true

Selector
.slds-combobox__input

Summary
Input field within a combobox

Restrict
.slds-combobox__form-element input, .slds-combobox__form-element button

Selector
.slds-combobox__input-entity-icon

Restrict
.slds-combobox__form-element span

Selector
.slds-combobox__form-element

Restrict
.slds-combobox > div

Selector
.slds-is-open

Restrict
.slds-combobox

Modifier
true

Selector
.slds-combobox

Restrict
.slds-combobox_container > div

Selector
.slds-has-icon-only

Summary
Icon only variant of a combobox

Restrict
.slds-combobox_container

Selector
.slds-has-selection

Summary
Apply when a combobox has a selection

Restrict
.slds-combobox_container

Selector
.slds-combobox_container

Support
dev-ready

Restrict
div

Variant
true

### Deprecated Classes

Selector
[readonly]

Support
dev-ready

Restrict
.slds-combobox_container input

Variant
true

Selector
.slds-has-object-switcher

Support
dev-ready

Restrict
.slds-combobox_container

Variant
true

Selector
.slds-has-inline-listbox

Support
dev-ready

Restrict
.slds-combobox_container

Variant
true
