---
title: "Dual Listbox"
slug: "dual-listbox--specifications"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/763763-dual-listbox/b/495bf5"
extractedAt: "2026-02-21T21:48:53.783Z"
---

## Styling Hooks Overview

Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation.

## Overview of CSS Classes

**Category**

**Description**

**Selector**

The CSS class being referred to.

**Summary**

A description of what the class does.

**Support**

Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet).

**Restrict**

The selector that the class name is allowed to be used on.

**Variant**

The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button.

**Modifier**

A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning.Category

Description

Selector

The CSS class being referred to.

Summary

A description of what the class does.

Support

Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet).

Restrict

The selector that the class name is allowed to be used on.

Variant

The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button.

Modifier

A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning.

### Available Classes

ℹ️ In HTML Blueprint code, a dual listbox is referred to as a “dueling list” or "dueling picklist". This distinction applies only to HTML Blueprints. It is referred to as a dual listbox anywhere else, including Base Components, documentation, and design libraries.

Selector
.slds-is-disabled


Summary
Disabled state of a picklist option


Restrict
.slds-dueling-list__optionsSelector
.slds-is-grabbed


Summary
grabbed state of a listbox option


Restrict
.slds-dueling-list__options divSelector
.slds-is-selected


Summary
Selected/dragging state of a listbox option


Restrict
.slds-dueling-list__options divSelector
.slds-dropdown_length-with-icon-10


Summary
Forces overflow scrolling after 10 list items with an icon


Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox


Modifier
trueSelector
.slds-dropdown_length-with-icon-7


Summary
Forces overflow scrolling after 7 list items with an icon


Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox


Modifier
trueSelector
.slds-dropdown_length-with-icon-5


Summary
Forces overflow scrolling after 5 list items with an icon


Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox


Modifier
trueSelector
.slds-dropdown_length-10


Summary
Forces overflow scrolling after 10 list items


Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox


Modifier
trueSelector
.slds-dropdown_length-7


Summary
Forces overflow scrolling after 7 list items


Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox


Modifier
trueSelector
.slds-dropdown_length-5


Summary
Forces overflow scrolling after 5 list items


Restrict
.slds-dropdown, .slds-dropdown__list, .slds-listbox


Modifier
trueSelector
.slds-listbox_vertical


Restrict
.slds-listbox


Modifier
trueSelector
.slds-listbox__icon-selected


Restrict
.slds-listbox__item svgSelector
.slds-listbox__option-meta


Restrict
.slds-listbox__option spanSelector
.slds-listbox__option-text_entity


Restrict
.slds-listbox__option spanSelector
.slds-is-selected


Restrict
.slds-listbox__option


Modifier
trueSelector
.slds-listbox__option_has-meta


Restrict
.slds-listbox__optionSelector
.slds-listbox__option_plain


Restrict
.slds-listbox__optionSelector
.slds-listbox__option_entity


Restrict
.slds-listbox__optionSelector
.slds-has-focus


Restrict
.slds-listbox__option


Modifier
trueSelector
.slds-listbox__option-icon


Summary
Container for listbox option icon


Restrict
.slds-listbox__option spanSelector
.slds-listbox__option-header


Summary
Header for choosable option within listbox


Restrict
.slds-listbox__option h3Selector
.slds-listbox__option


Restrict
.slds-listbox__item > divSelector
.slds-listbox__item


Restrict
.slds-listbox > liSelector
.slds-listbox_horizontal


Restrict
.slds-listbox


Modifier
trueSelector
.slds-listbox_inline


Restrict
.slds-listbox


Modifier
trueSelector
.slds-listbox


Support
dev-ready


Restrict
.slds-dropdown ul, .slds-dueling-list__options ul, .slds-pill_container ul, .slds-listbox_selection-group ul, .slds-combobox_container ul, .slds-form-element__control ul, .slds-popover__body ul


Variant
trueSelector
.slds-dueling-list__options


Summary
Bounding visual container for listbox of options


Restrict
.slds-dueling-list divSelector
.slds-dueling-list__column_responsive


Summary
Changes the layout of the dual listbox to be responsive


Restrict
.slds-dueling-list__columnSelector
.slds-dueling-list__column


Summary
Handles the layout of the dual listbox


Restrict
.slds-dueling-list divSelector
.slds-dueling-list


Summary
Initializes a dual listbox


Support
dev-ready


Restrict
div


Variant
true