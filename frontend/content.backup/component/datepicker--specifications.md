---
title: "Datepicker"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "component"
slug: "datepicker--specifications"
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
| Selector | .slds-is-selected-multi |
| Summary | Indicates if the selected days are apart of a date range |
| Restrict | .slds-datepicker td |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-has-multi-row-selection |
| Summary | Class on row to notify that more than one date will be selected with multiple weeks |
| Restrict | .slds-datepicker tr |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-has-multi-selection |
| Summary | Class on row to notify that more than one date will be selected within the week |
| Support | dev-ready |
| Restrict | .slds-datepicker tr |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-day_adjacent-month |
| Summary | Indicates days that are in previous/next months |
| Restrict | .slds-datepicker__month td |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-datepicker__month |
| Summary | Container of the month table |
| Restrict | .slds-datepicker table |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-datepicker__filter_month |
| Summary | Spaces out month filter |
| Restrict | .slds-datepicker div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-datepicker__filter |
| Summary | Aligns filter items horizontally |
| Restrict | .slds-datepicker div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-selected |
| Summary | Indicates selected days |
| Restrict | .slds-datepicker td |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-today |
| Summary | Indicates today |
| Restrict | .slds-datepicker td |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-day |
| Summary | Style for calendar days |
| Restrict | .slds-datepicker td span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-datepicker |
| Summary | Initiates a datepicker component |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
|   |   |


### Deprecated Classes

|   |   |
| --- | --- |
| Selector | .slds-disabled-text |
| Restrict | .slds-datepicker td |
|   |   |

