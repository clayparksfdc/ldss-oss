---
title: "Media Object"
description: "Media object utility classes are used to construct layout patterns that pair media elements (like images or videos) with text content, typically positioning the media to one side while the content flo"
category: "general"
slug: "media-object--examples"
status: "published"
lastModified: "2026-03-11"
---

Media object utility classes are used to construct layout patterns that pair media elements (like images or videos) with text content, typically positioning the media to one side while the content flows beside it. They are arranged in a flexible horizontal layout.

Media objects can be on the right, the left, or both. The text can start at the top of the image or be centered next to it. The width of the media object is controlled by the parent container or a secondary module class.

## Examples

### Base

The `.slds-media` object is a container that can be used on any element. Within the container, there are two required elements. The figure is typically an image or an icon that's placed inside an element with the `.slds-media__figure` class. Then there's typically some text that's placed in an element with the `.slds-media__body` class.

### Center Vertically

By default, the text starts at the top of the figure. Center the body and the figure by applying the `.slds-media_center` class to `.slds-media`.

### Reverse

To position the figure on the other side of the body, apply the `.slds-media__figure_reverse` to the figure.

You can also position figures on both sides of the body at the same time using `.slds-media__figure` and `.slds-media__figure_reverse`.

### Reverse Centered Vertically

### Double Figures

### Small Space

### Large Space

### Responsive
