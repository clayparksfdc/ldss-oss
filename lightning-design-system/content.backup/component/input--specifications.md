---
title: "Input"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "component"
slug: "input--specifications"
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
| Selector | .slds-input_borders |
| Summary | Modifier to allow a [readonly] input to have borders |
| Restrict | .slds-input |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input_height |
| Restrict | .slds-input |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input_bare |
| Restrict | .slds-input, input, textarea |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | [readonly] |
| Restrict | .slds-input |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input_counter |
| Summary | Variant for number input with increment and decrement buttons |
| Restrict | .slds-input |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-input |
| Summary | Initializes text input |
| Support | dev-ready |
| Restrict | input |
| Variant | true |
|   |   |

