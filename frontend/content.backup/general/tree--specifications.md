---
title: "Tree"
slug: "tree--specifications"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/950b57-tree/b/438087"
extractedAt: "2026-02-21T21:56:27.684Z"
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

Selector
.slds-tree__group-header


Summary
Initializes a slds tree group header


Restrict
.slds-tree_container h4Selector
[role="treeitem"]


Summary
Styles the focus and selected state for any tree item that has role="treeitem"


Restrict
.slds-tree liSelector
.slds-tree__item-meta


Summary
The meta text or secondary text of a tree item


Restrict
.slds-tree__item spanSelector
.slds-tree__item-label


Summary
The label text of a tree item or tree branch


Restrict
.slds-tree__item spanSelector
.slds-is-hovered


Summary
Hover state for a tree item


Restrict
.slds-tree__item


Modifier
trueSelector
.slds-tree__item


Summary
Initializes a slds tree item


Restrict
.slds-tree divSelector
.slds-tree


Summary
Initializes a slds tree


Restrict
.slds-tree_container ul, tableSelector
.slds-tree_container


Summary
A tree is visualization of a structure hierarchy. A branch can be expanded or collapsed.


Support
dev-ready


Restrict
div


Variant
true### Deprecated Classes

Selector
.slds-is-focused


Summary
Focus state for a tree item


Restrict
.slds-tree__itemSelector
.slds-is-selected


Summary
Selected state for a tree item


Restrict
.slds-tree__itemSelector
.slds-is-disabled


Summary
When a branch doesn't have children, apply slds-is-disabled to the button icon


Restrict
.slds-tree__item button


Modifier
true