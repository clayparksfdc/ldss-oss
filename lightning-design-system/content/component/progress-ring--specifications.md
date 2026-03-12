---
title: "Progress Ring - Specifications"
slug: "progress-ring--specifications"
category: "component"
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
.slds-progress-ring_active-step

Summary
Blue progress ring

Restrict
.slds-progress-ring

Modifier
true

Selector
.slds-progress-ring_large

Summary
Larger ring size

Restrict
.slds-progress-ring

Modifier
true

Selector
.slds-progress-ring_complete

Summary
Complete colors

Restrict
.slds-progress-ring

Modifier
true

Selector
.slds-progress-ring_expired

Summary
Expired colors

Restrict
.slds-progress-ring

Modifier
true

Selector
.slds-progress-ring_warning

Summary
Warning colors

Restrict
.slds-progress-ring

Modifier
true

Selector
.slds-progress-ring__content

Summary
Progress ring content area

Restrict
.slds-progress-ring > div

Selector
.slds-progress-ring__progress-head

Restrict
.slds-progress-ring__progress div

Selector
.slds-progress-ring__path

Restrict
.slds-progress-ring__progress path, .slds-progress-ring__progress circle

Selector
.slds-progress-ring__progress

Summary
Progress indicator

Restrict
.slds-progress-ring div

Selector
.slds-progress-ring

Summary
Progress Ring component

Support
prototype

Restrict
div

Variant
true
