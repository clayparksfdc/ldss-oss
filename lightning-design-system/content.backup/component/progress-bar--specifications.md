---
title: "Progress Bar"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "component"
slug: "progress-bar--specifications"
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
| Selector | .slds-progress-bar_vertical |
| Summary | Create a vertical progress bar |
| Support | dev-ready |
| Restrict | .slds-progress-bar |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-progress-bar__value_success |
| Summary | Create a green progress bar |
| Restrict | .slds-progress-bar__value |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-progress-bar__value |
| Summary | Fill up blue bar inside of the progress bar |
| Restrict | .slds-progress-bar span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-progress-bar_circular |
| Summary | Adds a border radius to the progress bar to give it a circular look |
| Restrict | .slds-progress-bar |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-progress-bar_large |
| Summary | Creates a progress bar height at the smaller .75rem (12px) size |
| Restrict | .slds-progress-bar |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-progress-bar_medium |
| Summary | Creates a progress bar height at the smaller .5rem (8px) size |
| Restrict | .slds-progress-bar |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-progress-bar_small |
| Summary | Creates a progress bar height at the smaller .25rem (4px) size |
| Restrict | .slds-progress-bar |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-progress-bar_x-small |
| Summary | Creates a progress bar height at the smaller .125rem (2px) size |
| Restrict | .slds-progress-bar |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-progress-bar |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
|   |   |

