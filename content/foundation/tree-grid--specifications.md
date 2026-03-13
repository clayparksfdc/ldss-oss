---
title: "Tree Grid · Lightning Design System 2"
slug: "tree-grid--specifications"
category: "foundation"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/1234e1-tree-grid/b/166c39"
extractedAt: "2026-02-21T21:56:46.430Z"
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
| Selector | .slds-tree__item-meta |
| Summary | The meta text or secondary text of a tree item |
| Restrict | .slds-tree__item span |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-tree__item-label |
| Summary | The label text of a tree item or tree branch |
| Restrict | .slds-tree__item span |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-is-hovered |
| Summary | Hover state for a tree item |
| Restrict | .slds-tree__item |
| Modifier | true |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-tree__item |
| Summary | Initializes a slds tree item |
| Restrict | .slds-table_tree th |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-table_tree |
| Support | dev-ready |
| Restrict | table |
| Variant | true |
|  |  |

### Deprecated Classes


|  |  |
| --- | --- |
| Selector | .slds-is-focused |
| Summary | Focus state for a tree item |
| Restrict | .slds-tree__item |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-is-selected |
| Summary | Selected state for a tree item |
| Restrict | .slds-tree__item |
|  |  |


|  |  |
| --- | --- |
| Selector | .slds-is-disabled |
| Summary | When a branch doesn't have children, apply slds-is-disabled to the button icon |
| Restrict | .slds-tree__item button |
| Modifier | true |
|  |  |
