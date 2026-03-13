---
title: "Sizing"
description: "Sizing utility classes provide a consistent way to manage the width sizing of elements within a layout. These classes ensure that elements maintain proper proportions and adhere to responsive design p"
category: "foundation"
slug: "sizing--examples"
status: "published"
lastModified: "2026-03-11"
---

Sizing utility classes provide a consistent way to manage the width sizing of elements within a layout. These classes ensure that elements maintain proper proportions and adhere to responsive design principles.

The sizing class names are set up in a human-readable format. For example, `.slds-size_1-of-2` equates to a width of 50%.

By default, sizing utilities are based on standard grid column spans of 2, 3, 4, 5, 6, 7, 8, and 12. For example, if you have 3 cards that you want to align horizontally along the same x-axis, use the class `.slds-size_1-of-3` on each element. Each card then takes up 33.333% of the containing section.

The sizing utilities have responsive options. Simply insert a breakpoint name before `size` in the class name. For example, to set the width at a medium breakpoint for the `.slds-size_1-of-3` sizing class, add the breakpoint name `medium` to create `.slds-medium-size_1-of-3`. The output for this class is the width at the medium breakpoint.

Absolute sizing utilities are also available, where widths are declared in `rem` units:

`.slds-size_xx-small`, `.slds-size_x-small`, `.slds-size_small`, `.slds-size_medium`, `.slds-size_large`, `.slds-size_x-large`, `.slds-size_xx-large`

Rarely, you need a sizing utility that works up to a specified breakpoint. In those cases, use the classes that begin with `max-` to achieve your goal.

Here's an overview of the available breakpoint names.

| **Breakpoint Name** | **Breakpoint Width** |
| --- | --- |
| `small-` | 30em / 480px and higher |
| `medium-` | 48em / 768px and higher |
| `large-` | 64em / 1024px and higher |
| `max-small-` | Up to 29.9375em / 479px |
| `max-medium-` | Up to 47.9375em / 767px |
| `max-large-` | Up to 63.9375em / 1023px |


`max-medium-`

Up to 47.9375em / 767px

`max-large-`

Up to 63.9375em / 1023px

Responsive sizing utilities use a mobile-first approach. Add responsive sizing utility classes to an element to override the previous breakpoint. A default sizing utility class is required and responsive sizing utilities are additive. The following example demonstrates the class name position for each breakpoint:

``

For example, you can provide values like this.

``

**ℹ️ Custom Heights**: SLDS doesn't include specific height utility classes. To control vertical spacing, use padding, margins, or custom styles in combination with container classes.

## Examples

### 2 Column Span

### 3 Column Span

### 4 Column Span

### 5 Column Span

### 6 Column Span

### 7 Column Span

### 8 Column Span

### 12 Column Span
