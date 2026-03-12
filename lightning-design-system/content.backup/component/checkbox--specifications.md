---
title: "Checkbox"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "component"
slug: "checkbox--specifications"
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
| Selector | .slds-checkbox_standalone |
| Summary | Checkbox with top-level label and value != label |
| Support | dev-ready |
| Restrict | .slds-checkbox |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-checkbox__label |
| Summary | Container for faux checkbox, text, and slds-form-element__label |
| Restrict | .slds-checkbox label |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-checkbox_faux |
| Summary | Creates a custom styled checkbox |
| Restrict | .slds-checkbox span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-checkbox |
| Summary | Initializes checkbox |
| Support | dev-ready |
| Restrict | span, label, div |
| Variant | true |
|   |   |


### Deprecated Classes

|   |   |
| --- | --- |
| Selector | .slds-checkbox_stacked |
| Summary | stacks label over checkbox |
| Restrict | .slds-checkbox |
| Modifier | true |
|   |   |

