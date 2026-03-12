---
title: "File Selector - Specifications"
slug: "file-selector--specifications"
category: "component"
parent: "file-selector"
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
.slds-file-selector__text_integrated

Restrict
.slds-file-selector_integrated span

Selector
.slds-file-selector__body_integrated

Restrict
.slds-file-selector_integrated label

Selector
.slds-has-drag-over

Restrict
.slds-file-selector__dropzone_integrated

Modifier
true

Selector
.slds-has-drag

Restrict
.slds-file-selector__dropzone_integrated

Modifier
true

Selector
.slds-file-selector__dropzone_integrated

Restrict
.slds-file-selector_integrated div

Selector
.slds-file-selector_integrated

Support
dev-ready

Restrict
.slds-file-selector

Variant
true

Selector
.slds-file-selector_images

Support
dev-ready

Restrict
.slds-file-selector

Variant
true

Selector
.slds-file-selector__text

Restrict
.slds-file-selector span

Selector
.slds-file-selector__body

Restrict
.slds-file-selector label

Selector
.slds-file-selector_files

Restrict
.slds-file-selector

Selector
.slds-file-selector__button

Restrict
.slds-file-selector button, .slds-file-selector span

Selector
.slds-file-selector__input

Restrict
.slds-file-selector input

Selector
.slds-has-drag-over

Restrict
.slds-file-selector__dropzone

Modifier
true

Selector
.slds-file-selector__dropzone

Restrict
.slds-file-selector div

Selector
.slds-file-selector

Support
dev-ready

Restrict
div

Variant
true
