---
title: "Form Element"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "component"
slug: "form-element--specifications"
status: "published"
lastModified: "2026-03-11"
---

## Styling Hooks Overview

Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, [read the technical documentation](https://www.lightningdesignsystem.com/2e1ef8501/p/319e5f).

## Overview of CSS Classes

| **Category** | **Description** |
| --- | --- |
| **Selector** | The CSS class being referred to. |
| **Summary** | A description of what the class does. |
| **Support** | Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet). |
| **Restrict** | The selector that the class name is allowed to be used on. |
| **Variant** | The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button. |
| **Modifier** | A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning. |


**Category**

**Description**

**Selector**

The CSS class being referred to.

**Summary**

A description of what the class does.

**Support**

Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet).

**Restrict**

The selector that the class name is allowed to be used on.

**Variant**

The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button.

**Modifier**

A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning.

### Available Classes

|   |   |
| --- | --- |
| Selector | .slds-is-edited |
| Summary | Indicates if a form element has been edited, but unsaved |
| Restrict | .slds-form div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form__item |
| Summary | Each item inside of a record form row |
| Restrict | .slds-form__row div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form__row |
| Summary | Each row inside of a record form |
| Restrict | .slds-form div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form |
| Summary | Creates layout for a form |
| Support | dev-ready |
| Restrict | div, form |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-slider-label__range |
| Summary | Contains the range for the slider |
| Restrict | .slds-slider-label span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-slider-label__label |
| Summary | Contains the label for the slider and adds a hook for adding `.slds-assistive-text` class to visually hide the label, but not the range |
| Restrict | .slds-slider-label span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-slider-label |
| Summary | Contains the label and range for the slider label - not required |
| Restrict | .slds-form-element span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input-has-fixed-addon |
| Summary | Use on input container to let it know there is fixed text to the left or right of the input |
| Restrict | .slds-form-element .slds-form-element__control |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input__icon-group_right |
| Summary | Positions the close icon and spinner on the right side of the input while searching |
| Restrict | .slds-input__icon-group |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input__icon-group |
| Summary | Positions two items (icons and/or spinners) on one side or the other of the input |
| Restrict | .slds-input-has-icon div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input-has-icon_group-right |
| Restrict | .slds-input-has-icon |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input-has-icon_left-right |
| Summary | Positions .slds-input__icon_left to the left of the text input and .slds-input__icon_right to the right of the text input |
| Restrict | .slds-input-has-icon |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input-has-icon_right |
| Summary | Positions .slds-input__icon to the right of the text input |
| Restrict | .slds-input-has-icon |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input-has-icon_left |
| Summary | Positions .slds-input__icon to the left of the text input |
| Restrict | .slds-input-has-icon |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input__icon_right |
| Summary | Hook for .slds-input-has-icon_left-right |
| Restrict | .slds-input__icon |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input__icon_left |
| Summary | Hook for .slds-input-has-icon--left-right |
| Restrict | .slds-input__icon |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input__icon |
| Summary | Hook for .slds-input-has-icon |
| Restrict | .slds-input-has-icon svg, .slds-input-has-icon button, .slds-input-has-icon span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input-has-icon |
| Summary | Modifier if text input has svg icon adjacent to input |
| Restrict | .slds-form-element div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element_stacked |
| Summary | Vertical form elements with label stacked on top of control |
| Support | dev-ready |
| Restrict | .slds-form-element |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__undo |
| Summary | Container for the undo button icon found inside of slds-form-element |
| Restrict | .slds-form-element div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element_horizontal |
| Summary | Horizontal form elements with label left-aligned to the control |
| Support | dev-ready |
| Restrict | .slds-form-element |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element_address |
| Summary | Creates a form that consists of multiple form groups specific to an address form |
| Support | dev-ready |
| Restrict | .slds-form-element_compound, .slds-form_compound |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element_compound |
| Summary | Creates a form that consists of multiple form groups |
| Support | dev-ready |
| Restrict | .slds-form-element |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-has-error |
| Summary | Error styles for form element |
| Restrict | .slds-form-element |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-required |
| Summary | Required asterisk |
| Restrict | .slds-form-element abbr, abbr |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__static |
| Summary | Initializes read-only form element |
| Restrict | .slds-form-element span, .slds-form-element div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__addon |
| Summary | Fixed text that sits to the left or right of an input |
| Restrict | .slds-form-element span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__legend |
| Summary | The form element label when applied to a legend element |
| Restrict | .slds-form-element legend, .slds-form-element span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element_readonly |
| Summary | When a form element is in view mode, we modify some styling |
| Restrict | .slds-form-element |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element_edit |
| Summary | Modifier on slds-form-element that it needs to reserve space for the inline-edit trigger button |
| Restrict | .slds-form-element |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__help |
| Summary | Creates inline help styles, sits below .form-element__control |
| Restrict | .slds-form-element div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__icon |
| Summary | When an icon sits within a form element wrapper and adjacent to another element inside that wrapper such as a .form-element__label |
| Restrict | .slds-form-element div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-dropdown_length-with-icon-10 |
| Summary | Forces overflow scrolling after 10 list items with an icon |
| Restrict | .slds-dropdown, .slds-dropdown__list, .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-dropdown_length-with-icon-7 |
| Summary | Forces overflow scrolling after 7 list items with an icon |
| Restrict | .slds-dropdown, .slds-dropdown__list, .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-dropdown_length-with-icon-5 |
| Summary | Forces overflow scrolling after 5 list items with an icon |
| Restrict | .slds-dropdown, .slds-dropdown__list, .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-dropdown_length-10 |
| Summary | Forces overflow scrolling after 10 list items |
| Restrict | .slds-dropdown, .slds-dropdown__list, .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-dropdown_length-7 |
| Summary | Forces overflow scrolling after 7 list items |
| Restrict | .slds-dropdown, .slds-dropdown__list, .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-dropdown_length-5 |
| Summary | Forces overflow scrolling after 5 list items |
| Restrict | .slds-dropdown, .slds-dropdown__list, .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox_vertical |
| Restrict | .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__icon-selected |
| Restrict | .slds-listbox__item svg |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__option-meta |
| Restrict | .slds-listbox__option span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__option-text_entity |
| Restrict | .slds-listbox__option span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-selected |
| Restrict | .slds-listbox__option |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__option_has-meta |
| Restrict | .slds-listbox__option |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__option_plain |
| Restrict | .slds-listbox__option |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__option_entity |
| Restrict | .slds-listbox__option |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-has-focus |
| Restrict | .slds-listbox__option |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__option-icon |
| Summary | Container for listbox option icon |
| Restrict | .slds-listbox__option span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__option-header |
| Summary | Header for choosable option within listbox |
| Restrict | .slds-listbox__option h3 |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__option |
| Restrict | .slds-listbox__item > div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox__item |
| Restrict | .slds-listbox > li |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox_horizontal |
| Restrict | .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox_inline |
| Restrict | .slds-listbox |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-listbox |
| Support | dev-ready |
| Restrict | .slds-dropdown ul, .slds-dueling-list__options ul, .slds-pill_container ul, .slds-listbox_selection-group ul, .slds-combobox_container ul, .slds-form-element__control ul, .slds-popover__body ul |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__control |
| Summary | Wrapper to any form display element |
| Restrict | .slds-form-element div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element |
| Summary | Creates layout for a form element |
| Support | dev-ready |
| Restrict | div, fieldset, li |
| Variant | true |
|   |   |


### Deprecated Classes

|   |   |
| --- | --- |
| Selector | .slds-form_stacked |
| Summary | Vertical form elements with label stacked on top of control |
| Restrict | .slds-form |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form_horizontal |
| Summary | Horizontal form elements with label left-aligned to the control |
| Restrict | .slds-form |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__static_edit |
| Summary | Inline Edit on static form element |
| Restrict | .slds-form-element__static |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-form-element__legend_has-tooltip |
| Summary | Aligns the legend properly when there is an info tooltip |
| Restrict | .slds-form-element__legend |
|   |   |

