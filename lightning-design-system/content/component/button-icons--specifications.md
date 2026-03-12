---
title: "Button Icons - Specifications"
slug: "button-icons--specifications"
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
.slds-button_icon-container

Summary
Creates a button icon inside of a transparent container

Support
dev-ready

Restrict
button

Variant
true

Selector
.slds-button_icon-inverse

Summary
Creates a button icon inside of a transparent container with a border on an inversed background

Support
dev-ready

Restrict
button

Variant
true

Selector
.slds-button_icon-brand

Summary
Creates a brand button icon

Support
dev-ready

Restrict
button

Variant
true

Selector
.slds-button_icon-border

Summary
Creates a button icon inside of a transparent container with a border

Support
dev-ready

Restrict
button

Variant
true

Selector
.slds-button_icon-border-inverse

Summary
Creates a button icon inside of a transparent container with a border on an inversed background

Support
dev-ready

Restrict
button

Variant
true

Selector
.slds-button_icon-border-filled

Summary
Creates a button icon inside of a filled container with a border

Support
dev-ready

Restrict
button

Variant
true

Selector
.slds-is-selected

Summary
Stateful Button Icon

Support
dev-ready

Restrict
.slds-button_icon

Variant
true

Selector
.slds-button__icon_inverse-hint

Summary
A parent class must be put on anything that contains a .slds-button__icon_inverse-hint so that the child reacts when the parent is hovered. This is for a dark background.

Restrict
.slds-button_icon .slds-button__icon

Selector
.slds-button__icon_hint

Summary
A parent class must be put on anything that contains a .slds-button__icon_hint so that the child reacts when the parent is hovered.

Restrict
.slds-button_icon .slds-button__icon

Selector
.slds-button_icon-container-more

Summary
Creates a button menu icon container that has no borders

Restrict
.slds-button_icon

Selector
.slds-button_icon-more

Summary
Creates a button menu icon container that has borders and a filled background

Restrict
.slds-button_icon

Selector
.slds-button_icon-xx-small

Summary
Changes a button icon container to be 16x16px

Restrict
.slds-button_icon

Selector
.slds-button_icon-x-small

Summary
Changes a button icon container to be 20x20px

Restrict
.slds-button_icon

Selector
.slds-button_icon-small

Summary
Changes a button icon container to be 24x24px

Restrict
.slds-button_icon

Selector
.slds-button_icon-large

Summary
Changes a button icon container to be 48x48px

Restrict
.slds-button_icon

Selector
.slds-button_icon-current-color

Summary
Apply the current color to the icon contained within

Restrict
.slds-button_icon

Selector
.slds-button_icon-warning

Summary
Warning state - Typically used in conjunction with an warning tooltip

Restrict
.slds-button_icon

Selector
.slds-button_icon-error

Summary
Error state - Typically used in conjunction with an error toolip

Restrict
.slds-button_icon

Selector
.slds-button_icon

Summary
Creates a button that looks like a plain icon

Support
dev-ready

Restrict
button

Variant
true
