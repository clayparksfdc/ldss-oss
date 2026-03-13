---
title: "Scoped Tabs"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "component"
slug: "scoped-tabs--specifications"
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
| Selector | .slds-tabs_large |
| Summary | Large sized tabs |
| Restrict | .slds-tabs_scoped |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-tabs_medium |
| Summary | Medium sized tabs |
| Restrict | .slds-tabs_scoped |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-tabs_scoped__content |
| Summary | Styles each tab content wrapper |
| Restrict | .slds-tabs_scoped div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-active |
| Summary | Active state for a tab item |
| Restrict | .slds-tabs_scoped__item |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-tabs_scoped__overflow-button |
| Summary | List item containing the overflow button menu |
| Restrict | .slds-tabs_scoped__item |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-tabs_scoped__link |
| Summary | Styles each actionable element inside each tab item |
| Restrict | .slds-tabs_scoped__item a, .slds-tabs_scoped__item button |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-tabs_scoped__item |
| Summary | Styles each list item as a single tab |
| Restrict | .slds-tabs_scoped ul li |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-tabs_scoped__nav |
| Summary | Creates the container for the default tabs |
| Restrict | .slds-tabs_scoped ul |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-tabs_scoped |
| Summary | Initializes scoped tabs |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
|   |   |

