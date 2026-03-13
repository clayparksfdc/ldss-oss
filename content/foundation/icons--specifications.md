---
title: "Icons"
slug: "icons--specifications"
category: "foundation"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/19e451-icons/b/78a0e7"
extractedAt: "2026-02-21T21:49:56.731Z"
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
| Selector | [class*='slds-icon-standard-'] |
| Summary | Standard icons |
| Support | dev-ready |
| Restrict | .slds-icon_container, svg, abbr |
| Variant | true |
|  |  |


|  |  |
| --- | --- |
| Selector | [class*='slds-icon-doctype-'] |
| Summary | Container for icons |
| Support | dev-ready |
| Restrict | .slds-icon_container, svg |
| Variant | true |
|  |  |


|  |  |
| --- | --- |
| Selector | [class*='slds-icon-custom-'] |
| Summary | Custom icons |
| Support | dev-ready |
| Restrict | .slds-icon_container, svg, abbr |
| Variant | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon_disabled |
| Restrict | .slds-icon_container |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-current-color |
| Restrict | .slds-icon_container |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon-text-light |
| Restrict | .slds-icon, svg |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon-text-error |
| Summary | Changes the icon fill color to match the error state |
| Restrict | .slds-icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon-text-success |
| Summary | Changes the icon fill color to match the success state |
| Restrict | .slds-icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon-text-warning |
| Summary | Changes the icon fill color to match the warning state |
| Restrict | .slds-icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-is-disabled |
| Summary | Changes the icon fill color to match the disabled state |
| Restrict | .slds-icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon-text-default |
| Summary | Changes the icon fill color to match the default state |
| Restrict | .slds-icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon_large |
| Restrict | .slds-icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon_small |
| Restrict | .slds-icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon_x-small |
| Restrict | .slds-icon, .slds-button__icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon_xx-small |
| Restrict | .slds-icon |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon |
| Restrict | .slds-icon_container svg, svg |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon_container_circle |
| Summary | Circle container for icons |
| Restrict | .slds-icon_container |
|  |  |


|  |  |
| --- | --- |
| Selector | [class*='slds-icon-action-'] |
| Summary | Action icons |
| Support | dev-ready |
| Restrict | .slds-icon_container, svg, abbr |
| Variant | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-avatar-grouped__icon |
| Summary | Modifier for the icon Avatar in an Avatar Group |
| Restrict | .slds-icon_container |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-icon_container |
| Summary | Container for icons |
| Support | dev-ready |
| Restrict | span, div |
| Variant | true |
|  |  |
