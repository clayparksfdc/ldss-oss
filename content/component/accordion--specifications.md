---
title: "Accordion - Specifications"
slug: "accordion--specifications"
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
.slds-is-open

Summary
Toggle visibility of accordion section + rotate icon

Restrict
.slds-accordion__section

Modifier
true

Selector
.slds-accordion__content

Summary
Each expandable panel inside of an accordion

Restrict
.slds-accordion__section div

Selector
.slds-accordion__summary-heading

Summary
Summary title for each expandable panel inside of an accordion

Restrict
.slds-accordion__section h2

Selector
.slds-accordion__summary-content

Summary
Text of summary title for each expandable panel inside of an accordion

Restrict
.slds-accordion__summary-action span

Selector
.slds-accordion__summary-action-icon

Summary
Icon inside of actionable button within an accordion section

Restrict
.slds-accordion__summary-action svg

Selector
.slds-accordion__summary-action

Summary
Actionable button inside of accordion summary that would toggle the visibility of each section

Restrict
.slds-accordion__summary button

Selector
.slds-accordion__summary

Summary
Summary title for each expandable panel inside of an accordion

Restrict
.slds-accordion__section div

Selector
.slds-accordion__section

Summary
Each expandable panel inside of an accordion

Restrict
.slds-accordion section

Selector
.slds-accordion__list-item

Summary
List item for each accordion section

Restrict
.slds-accordion li

Selector
.slds-accordion

Summary
Initializes an accordion list with more than one section that will have its display toggled by invoking an interaction on the summary title

Support
dev-ready

Restrict
ul

Variant
true
