---
title: "Pills - Specifications"
slug: "pills--specifications"
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
.slds-listbox [role="listbox"]

Summary
A listbox of Pills is a way to display a list of selected options when performing user input

Support
dev-ready

Restrict
.slds-pill

Variant
true

Selector
.slds-has-error

Restrict
.slds-pill

Modifier
true

Selector
.slds-pill__action

Restrict
.slds-pill_link a

Selector
.slds-pill_link

Restrict
.slds-pill

Selector
.slds-pill__remove

Restrict
.slds-pill button, .slds-pill span

Selector
.slds-pill__icon_container

Restrict
.slds-pill span

Selector
.slds-pill__label

Restrict
.slds-pill a, .slds-pill span

Selector
.slds-pill_bare

Restrict
.slds-pill

Modifier
true

Selector
.slds-pill

Summary
Initializes pill

Support
dev-ready

Restrict
span

Variant
true
