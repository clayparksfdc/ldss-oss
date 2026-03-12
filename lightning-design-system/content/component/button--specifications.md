---
title: "Button - Specifications"
slug: "button--specifications"
category: "component"
parent: "button"
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
.slds-is-selected

Summary
When button is pressed and selected

Restrict
.slds-button_stateful

Modifier
true

Selector
.slds-is-selected-clicked

Summary
When button is selected and still has focus from click

Restrict
.slds-button_stateful

Modifier
true

Selector
.slds-text-not-selected

Summary
Shown text when button is not selected - default state

Restrict
.slds-button_stateful span

Selector
.slds-text-selected-focus

Summary
Shown text when button is selected and focused

Restrict
.slds-button_stateful span

Selector
.slds-text-selected

Summary
Shown text when button is selected

Restrict
.slds-button_stateful span

Selector
.slds-not-selected

Restrict
.slds-button_stateful

Modifier
true

Selector
.slds-button_stateful

Summary
Initiates a stateful button

Support
dev-ready

Restrict
button

Variant
true

Selector
.slds-is-pressed

Summary
When button is in pressed state

Restrict
.slds-button_dual-stateful

Modifier
true

Selector
.slds-text-pressed

Summary
Shown text when button is pressed

Restrict
.slds-button_dual-stateful span

Selector
.slds-text-not-pressed

Summary
Shown text when button is not pressed - default state

Restrict
.slds-button_dual-stateful span

Selector
.slds-button_dual-stateful

Summary
Initiates a dual stateful button

Support
dev-ready

Restrict
button

Variant
true

Selector
.slds-input__button_increment

Summary
Positions increment button within counter input field

Restrict
.slds-button

Selector
.slds-input__button_decrement

Summary
Positions decrement button within counter input field

Restrict
.slds-button

Selector
.slds-button_stretch

Summary
Creates a button style for 100% width with centered text that maintains current styling

Restrict
.slds-button

Modifier
true

Selector
.slds-button_full-width

Summary
Creates a button style for full width that resets styling

Restrict
.slds-button

Modifier
true

Selector
.slds-icon_x-small

Restrict
.slds-icon, .slds-button__icon

Modifier
true

Selector
.slds-button__icon_right

Summary
Position of icon when sitting to the right side of the text when inside a button

Restrict
.slds-button__icon, .slds-button__icon_stateful

Selector
.slds-button__icon_left

Summary
Position of icon when sitting to the left side of the text when inside a button

Restrict
.slds-button__icon, .slds-button__icon_stateful

Selector
.slds-button__icon_x-small

Summary
X-Small size for button icon svg

Support
dev-ready

Restrict
.slds-button__icon

Modifier
true

Selector
.slds-button__icon_small

Summary
Small size for button icon svg

Support
dev-ready

Restrict
.slds-button__icon

Modifier
true

Selector
.slds-button__icon_large

Summary
Large size for button icon svg

Support
dev-ready

Restrict
.slds-button__icon

Modifier
true

Selector
.slds-button__icon

Summary
Sizing for icon that sits inside button__icon

Support
dev-ready

Restrict
.slds-button svg

Variant
true

Selector
.slds-button_success

Summary
Creates a green button style

Restrict
.slds-button

Modifier
true

Selector
.slds-button_text-destructive

Summary
Creates a neutral button with red text

Restrict
.slds-button

Modifier
true

Selector
.slds-button_destructive

Summary
Creates a red button style

Restrict
.slds-button

Modifier
true

Selector
.slds-button_inverse

Summary
Creates the inverse style for dark backgrounds

Restrict
.slds-button

Modifier
true

Selector
.slds-button_outline-brand

Summary
Creates the outlined button with the brand color

Restrict
.slds-button

Modifier
true

Selector
.slds-button_brand

Summary
Creates the brand blue Salesforce style

Restrict
.slds-button

Modifier
true

Selector
.slds-button_neutral

Summary
Creates the gray border with white background default style

Restrict
.slds-button

Modifier
true

Selector
.slds-button_last

Summary
Explicitly style the last button in a button group

Restrict
.slds-button

Selector
.slds-button_middle

Summary
Explicitly style buttons in the middle (i.e., not first or last) in a button group

Restrict
.slds-button

Selector
.slds-button_first

Summary
Explicitly style the first button in a button group

Restrict
.slds-button

Selector
.slds-button

Summary
This neutralizes all the base styles making it look like a text link

Support
dev-ready

Restrict
button, a, span

Variant
true

### Depreciated Classes
