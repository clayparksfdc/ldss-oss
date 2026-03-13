---
title: "Rich Text Editor"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "general"
slug: "rich-text-editor--specifications"
status: "published"
lastModified: "2026-03-11"
---

## Styling Hooks Overview

Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, [read the technical documentation](https://www.lightningdesignsystem.com/2e1ef8501/p/319e5f).

## Overview of CSS Classes

| **Category** | **Description** |
| --- | --- |
| **Selector** | The CSS class being referred to. |
| **Summary** | A description of what the class does. |
| **Support** | Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet). |
| **Restrict** | The selector that the class name is allowed to be used on. |
| **Variant** | The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button. |
| **Modifier** | A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning. |


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

A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning.

### Available Classes

|   |   |
| --- | --- |
| Selector | .slds-rich-text-area__content |
| Restrict | .slds-rich-text-editor div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-has-error |
| Restrict | .slds-rich-text-editor |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-has-focus |
| Restrict | .slds-rich-text-editor |
| Modifier | true |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor__select_xx-small |
| Restrict | .slds-rich-text-editor__select .slds-combobox__form-element |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor__select_x-small |
| Restrict | .slds-rich-text-editor__select .slds-combobox__form-element |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor__select |
| Restrict | .slds-rich-text-editor__toolbar div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor__toolbar-bottom |
| Restrict | .slds-rich-text-editor__toolbar |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor__col_grow |
| Summary | Container for Rich Text Editor Toolbar |
| Restrict | .slds-rich-text-editor__toolbar div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor__col |
| Summary | Container for Rich Text Editor Toolbar |
| Restrict | .slds-rich-text-editor__toolbar div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor__toolbar |
| Restrict | .slds-rich-text-editor div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor__toolbar_detached |
| Restrict | .slds-rich-text-editor_toolbar-only .slds-rich-text-editor__toolbar |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor_toolbar-only |
| Restrict | .slds-rich-text-editor |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-rich-text-editor |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
|   |   |

