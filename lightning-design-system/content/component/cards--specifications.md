---
title: "Cards - Specifications"
slug: "cards--specifications"
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
.slds-card-wrapper

Summary
Removes the card look from nested cards and pulls them to the boundary of the card wrapper, making the nested cards look like they are inside of one card

Support
dev-ready

Restrict
div

Variant
true

Selector
.slds-card__footer-action

Summary
Actionable element within card footer

Restrict
.slds-card__footer a

Selector
.slds-card__footer

Summary
Initializes card footer

Restrict
.slds-card footer

Selector
.slds-card__body_inner

Summary
Apply the same spacing found on the card header to the card body

Restrict
.slds-card__body

Selector
.slds-card__body

Summary
Initializes card body

Restrict
.slds-card div

Selector
.slds-einstein-header__actions

Summary
Einstein themed card header actions

Restrict
.slds-einstein-header

Selector
.slds-einstein-header__figure

Summary
Einstein themed card header figure

Restrict
.slds-einstein-header, div, header

Selector
.slds-einstein-header

Summary
Einstein themed card header

Support
dev-ready

Restrict
.slds-card__header

Variant
true

Selector
.slds-card__header-link

Summary
Actionable element within the card header title

Restrict
.slds-card__header h2 a

Selector
.slds-card__header-title

Summary
Title element within card header

Restrict
.slds-card__header h2

Selector
.slds-card__header

Summary
Initializes card header

Restrict
.slds-card div

Selector
.slds-card_boundary

Summary
Used to bring back the border on a card when needed

Restrict
.slds-card

Selector
.slds-card

Summary
Initializes card

Support
dev-ready

Restrict
article, div, section

Variant
true
