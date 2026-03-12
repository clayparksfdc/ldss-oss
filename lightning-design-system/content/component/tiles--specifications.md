---
title: "Tiles - Specifications"
slug: "tiles--specifications"
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
.slds-tile_board__icon

Summary
Tile board icon

Restrict
.slds-tile_board span

Selector
.slds-tile_board

Summary
Initializes tile board

Support
dev-ready

Restrict
article

Variant
true

Selector
.slds-tile__meta

Restrict
.slds-tile div

Selector
.slds-tile__detail

Restrict
.slds-tile div

Selector
.slds-card__tile

Summary
Use class if card consumes any form of a tile

Restrict
.slds-tile

Selector
.slds-tile

Summary
Initializes tile

Support
dev-ready

Restrict
article

Variant
true
