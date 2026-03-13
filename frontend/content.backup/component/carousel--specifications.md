---
title: "Carousel"
description: "Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation."
category: "component"
slug: "carousel--specifications"
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
| Selector | .slds-is-active |
| Summary | Active state notifying the tab that its current panel is active |
| Restrict | .slds-carousel__indicator-action |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__indicator-action |
| Summary | Actionable element inside of each tab-list indicator |
| Restrict | .slds-carousel__indicator a |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__indicator |
| Summary | Carousel's tab-list indicator items |
| Restrict | .slds-carousel__indicators li |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__indicators |
| Summary | List element that contains the carousel's tab-list inidicators |
| Restrict | .slds-carousel ul |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__autoplay |
| Summary | Element that contains the auto-play button icon to toggle on/off |
| Restrict | .slds-carousel__stage span |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__content-title |
| Summary | Heading element that contains the title of the carousel's tab-panel |
| Restrict | .slds-carousel__content h2 |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__content |
| Summary | Element that contains the content inside the carousel's tab-panel |
| Restrict | .slds-carousel__panel-action div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__image |
| Summary | Element that contains the image inside the carousel's tab-panel |
| Restrict | .slds-carousel__panel-action div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__panel-action |
| Summary | Actionable element that contains the carousel's tab-panel content |
| Restrict | .slds-carousel__stage a |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__panels |
| Summary | Tabpanel region that contains all carousel panels |
| Restrict | .slds-carousel__stage div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel__stage |
| Summary | Main stage for carousel's tab-panels and tab-list inidicators |
| Restrict | .slds-carousel div |
|   |   |


|   |   |
| --- | --- |
| Selector | .slds-carousel |
| Summary | Initiates a carousel component |
| Support | dev-ready |
| Restrict | div |
| Variant | true |
|   |   |

