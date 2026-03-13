---
title: "Button Groups · Lightning Design System 2"
slug: "button-groups--specifications"
category: "component"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/30363d-button-groups/b/091a7b"
extractedAt: "2026-02-21T21:45:05.162Z"
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


|  |  |
| --- | --- |
| Selector | .slds-button-group-item |
| Summary | Each item inside of a button group row that needs spacing applied to it |
| Restrict | .slds-button-group-row li, .slds-button-group-row div |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-button-group-row |
| Summary | Creates button group container that provides spacing between each button |
| Support | dev-ready |
| Restrict | div, ul |
| Variant | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-button_last |
| Summary | If the last button in the group is required to be wrapped in a div, apply this class to the div |
| Restrict | .slds-button-group div, .slds-button-group-list div |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-button-group-list |
| Summary | Creates button group container for list items |
| Support | dev-ready |
| Restrict | ul |
| Variant | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-button-group |
| Summary | Creates button group container |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
|  |  |
