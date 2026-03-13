---
title: "Modals - Specifications"
slug: "modals--specifications"
category: "component"
parent: "modals"
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
.slds-backdrop_open

Restrict
.slds-backdrop

Modifier
true

Selector
.slds-backdrop

Restrict
.slds-modal ~ div

Selector
.slds-slide-down-cancel

Restrict
.slds-modal

Modifier
true

Selector
.slds-slide-up-saving

Restrict
.slds-modal

Modifier
true

Selector
.slds-slide-up-open

Restrict
.slds-modal

Modifier
true

Selector
.slds-fade-in-open

Restrict
.slds-modal

Modifier
true

Selector
.slds-modal_full

Summary
Makes the modal full screen in small viewports

Restrict
.slds-modal

Modifier
true

Selector
.slds-modal_large

Summary
Widens the modal to take more horizontal space than large

Restrict
.slds-modal

Modifier
true

Selector
.slds-modal_medium

Summary
Widens the modal to take more horizontal space than small

Restrict
.slds-modal

Modifier
true

Selector
.slds-modal_small

Summary
Widens the modal to take more horizontal space than default

Restrict
.slds-modal

Modifier
true

Selector
.slds-modal__close

Restrict
.slds-modal button

Selector
.slds-modal__footer_directional

Restrict
.slds-modal__footer

Modifier
true

Selector
.slds-modal__footer

Restrict
.slds-modal footer

Selector
.slds-modal__content_footless

Restrict
.slds-modal__content

Selector
.slds-modal__content_headless

Restrict
.slds-modal__content

Selector
.slds-modal__content

Restrict
.slds-modal div

Selector
.slds-modal__title

Restrict
.slds-modal__header h1, .slds-modal__header h2, .slds-modal__header h3, .slds-modal__header h4, .slds-modal__header h5

Selector
.slds-modal__header

Restrict
.slds-modal header

Selector
.slds-modal__container

Restrict
.slds-modal div

Selector
.slds-modal

Support
dev-ready

Restrict
section

Variant
true

### Deprecated Classes
