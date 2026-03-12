---
title: "Dynamic Icons"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "component"
slug: "dynamic-icons--specifications"
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
| Selector | .slds-icon-waffle |
| Summary | Element container circles for the waffle icon |
| Restrict | .slds-icon-waffle_container > span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-waffle_container |
| Summary | Containing actionable element that holds the waffle icon |
| Support | dev-ready |
| Restrict | button |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-typing__dot |
| Summary | Dots within the typing icon |
| Restrict | .slds-icon-typing span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-paused |
| Summary | Add when you wish to pause the dots animation |
| Restrict | .slds-icon-typing |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-animated |
| Summary | Add when you wish to animate the dots |
| Restrict | .slds-icon-typing |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-typing |
| Summary | Initializes typing icon |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-trend__circle |
| Summary | Circle element inside of trend icon |
| Restrict | .slds-icon-trend circle |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-trend__arrow |
| Summary | Arrow element inside of trend icon |
| Restrict | .slds-icon-trend path |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-paused |
| Summary | Add .slds-is-paused to the SVG to pause the icon with an animation. |
| Restrict | .slds-icon-trend |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-animated |
| Summary | Add .slds-is-animated to the SVG to enhance the icon with an animation. |
| Restrict | .slds-icon-trend |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-trend |
| Summary | Initializes trend icon |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-paused |
| Summary | Add .slds-is-paused to the SVG to pause the icon with an animation. |
| Restrict | .slds-icon-strength |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-animated |
| Summary | Add .slds-is-animated to the SVG to enhance the icon with an animation. |
| Restrict | .slds-icon-strength |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-strength |
| Summary | Initializes strength icon |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-score__negative |
| Summary | Negative score icon |
| Restrict | .slds-icon-score svg |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-score__positive |
| Summary | Positive score icon |
| Restrict | .slds-icon-score svg |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-score |
| Summary | Initializes score icon |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-help_focus |
| Summary | Modifies focus effect of global help icon |
| Restrict | .slds-icon-help circle |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-help_hover |
| Summary | Modifies hover effect of global help icon |
| Restrict | .slds-icon-help circle |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-help |
| Summary | Hover and click animations for help icon |
| Support | prototype |
| Restrict | button, a |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-eq__bar |
| Summary | Vertical bar for equalizer icon |
| Restrict | .slds-icon-eq div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-animated |
| Summary | Turn animation on for animated icon |
| Restrict | .slds-icon-eq |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-eq |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-paused |
| Summary | Add .slds-is-paused to the SVG to pause the icon with an animation. |
| Restrict | .slds-icon-ellie |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-is-animated |
| Summary | Add .slds-is-animated to the SVG to enhance the icon with an animation. |
| Restrict | .slds-icon-ellie |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-icon-ellie |
| Support | dev-ready |
| Restrict | span |
| Variant | true |
|   |   |

