---
title: "Progress Indicator - Specifications"
slug: "progress-indicator--specifications"
category: "component"
parent: "progress-indicator"
order: 0
---

## Styling Hooks Overview

Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, [read the technical documentation](/develop/global-styling-hooks).

## Overview of CSS Classes


| **Category** | **Description** |
| --- | --- |
| **Selector** | The CSS class being referred to. |
| **Summary** | A description of what the class does. |
| **Support** | Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet). |
| **Restrict** | The selector that the class name is allowed to be used on. |
| **Variant** | The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button. |
| **Modifier** | A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning. |

### Available Classes

Selector
.slds-progress_success

Summary
Creates a green bar for the vertical variant

Restrict
.slds-progress_vertical

Selector
.slds-progress_vertical

Support
dev-ready

Restrict
.slds-progress

Variant
true

Selector
.slds-progress__marker_icon-success

Restrict
.slds-progress__marker_icon

Selector
.slds-progress__marker_icon

Restrict
.slds-progress__marker

Selector
.slds-progress__marker

Restrict
.slds-progress ol li button, .slds-progress ol li div, .slds-progress ol li span

Selector
.slds-progress__item_content

Summary
Support content in line with progress marker

Restrict
.slds-progress__item div

Selector
.slds-has-error

Restrict
.slds-progress__item

Modifier
true

Selector
.slds-is-active

Restrict
.slds-progress__item

Modifier
true

Selector
.slds-is-completed

Restrict
.slds-progress__item

Modifier
true

Selector
.slds-progress__item

Restrict
.slds-progress ol li

Selector
.slds-progress__list-bordered

Summary
Add borders between progress items

Restrict
.slds-progress__list

Selector
.slds-progress__list

Restrict
.slds-progress ol

Selector
.slds-progress_shade

Restrict
.slds-progress

Modifier
true

Selector
.slds-progress

Support
dev-ready

Restrict
div

Variant
true
