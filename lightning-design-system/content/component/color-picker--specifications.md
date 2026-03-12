---
title: "Color Picker - Specifications"
slug: "color-picker--specifications"
category: "component"
parent: "color-picker"
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
.slds-color-picker_swatches-only

Summary
Swatches Only UI

Support
dev-ready

Restrict
.slds-color-picker

Variant
true

Selector
.slds-color-picker_predefined-only

Summary
Swatches Only UI

Support
dev-ready

Restrict
.slds-color-picker

Variant
true

Selector
.slds-color-picker_custom-only

Summary
Swatches Only UI

Support
dev-ready

Restrict
.slds-color-picker

Variant
true

Selector
.slds-color-picker__selector-footer

Summary
Footer for the Color Selector Picker

Restrict
.slds-color-picker__selector div

Selector
.slds-color-picker__custom-inputs

Summary
The group of direct input elements

Restrict
.slds-color-picker__custom > div

Selector
.slds-swatch

Summary
A swatch

Restrict
.slds-color-picker__swatch span, .slds-color-picker__summary-button span, .slds-color-picker__hue-and-preview span

Selector
.slds-color-picker__hue-slider

Summary
The slide input that controls the hue

Restrict
.slds-color-picker__hue-and-preview input

Selector
.slds-color-picker__hue-and-preview

Summary
Container element for the hue slider and preview swatch

Restrict
.slds-color-picker__custom div

Selector
.slds-color-picker__range-indicator

Summary
true

Restrict
.slds-color-picker__custom-range > a

Selector
.slds-color-picker__custom-range

Summary
Custom picker range element

Restrict
.slds-color-picker__custom div

Selector
.slds-color-picker__custom

Summary
Custom picker selection container

Restrict
.slds-color-picker__selector div

Selector
.slds-swatch

Summary
A swatch

Restrict
.slds-color-picker__swatch span, .slds-color-picker__summary-button span, .slds-color-picker__hue-and-preview span

Selector
.slds-color-picker__swatch

Summary
Color Picker swatch

Restrict
.slds-color-picker__swatches li

Selector
.slds-color-picker__swatches

Summary
Swatch container

Restrict
.slds-color-picker__selector ul

Selector
.slds-color-picker__selector

Summary
The selector subcomponent. Extends upon a .slds-popover

Restrict
.slds-color-picker div, .slds-color-picker section

Selector
.slds-color-picker__summary-input

Summary
Input field for summary UI

Restrict
.slds-color-picker__summary div

Selector
.slds-color-picker__button

Summary
Button that toggles the Color Picker Selector

Restrict
.slds-color-picker__summary .slds-button

Selector
.slds-color-picker__summary-label

Summary
Label for summary input

Restrict
.slds-color-picker__summary > label

Selector
.slds-color-picker__summary

Summary
'Summary' element for color selection.

Restrict
.slds-color-picker > div

Selector
.slds-color-picker

Summary
Fully featured color picker, with swatches and a custom color config

Support
dev-ready

Restrict
div

Variant
true
