---
title: "Line Clamp"
description: "Line clamp utility classes control how many lines a block of text displays before it's truncated. The remaining content is replaced with an ellipsis (...) so readers know there's more to see. These ut"
category: "general"
slug: "line-clamp--examples"
status: "published"
lastModified: "2026-03-11"
---

Line clamp utility classes control how many lines a block of text displays before it's truncated. The remaining content is replaced with an ellipsis (`...`) so readers know there's more to see. These utilities make sure text fits within the design constraints while maintaining readability and preserving the layout's balance.

SLDS supports the following line clamp limits.

| **Class** | **Truncation** |
| --- | --- |
| `slds-line-clamp` | Truncates after 3 lines of content — from a default value of 3 for the `line-clamp` token. |
| `slds-line-clamp_x-small` | Truncates after 2 lines of content. |
| `slds-line-clamp_small` | Truncates after 3 lines of content. |
| `slds-line-clamp_medium` | Truncates after 5 lines of content. |
| `slds-line-clamp_large` | Truncates after 7 lines of content. |


**Class**

**Truncation**

`slds-line-clamp`

Truncates after 3 lines of content — from a default value of 3 for the `line-clamp` token.

`slds-line-clamp_x-small`

Truncates after 2 lines of content.

`slds-line-clamp_small`

Truncates after 3 lines of content.

`slds-line-clamp_medium`

Truncates after 5 lines of content.

`slds-line-clamp_large`

Truncates after 7 lines of content.

**🛑 IE11 Not Supported: **The use of the `line-clamp` css property is not supported in IE11.

**🛑 Not Supported on Container Elements**

Apply this class directly to a text element only.

If you apply this class to elements that contain HTML elements, it doesn't work as expected. This use case is not supported.

## Examples

### Default

The `slds-line-clamp` class truncates text after three lines. You can change the number of lines by reassigning a value to the `line-clamp` token.

### X-Small

The `slds-line-clamp_x-small` class truncates text after two lines.

### Small

The `slds-line-clamp_small` class truncates text after three lines.

### Medium

The `slds-line-clamp_medium` class truncates text after five lines.

### Large

The `slds-line-clamp_large` class truncates text after seven lines.

### Block Level Children
