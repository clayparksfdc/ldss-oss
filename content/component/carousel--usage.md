---
title: "Carousel - Usage"
slug: "carousel--usage"
category: "component"
parent: "carousel"
order: 0
---

## Overview

Carousels are best for displaying content that cycles through different views, helping users explore a collection of related items or updates in a visually engaging way.

- The carousel is a sliding component for showing featured content within a limited space.
- Navigate through content using the image indicator controls.
- A carousel works well for dynamic, visually rich content and is commonly used in Salesforce apps for showing featured content, tips, or other rotating content.

### Best Practices

- Use images or concise messages to capture users’ attention quickly.
- A carousel can accept a maximum number of 5 panels where only 1 panel is visible at a time.
- If images contain text, be sure to include what they say in the header, description, or alt-text.

### When Not to Use

- Don’t use carousels if users want to see all items at once or if items require in-depth reading.
- Don’t place critical content in a carousel where it can be missed.
- Use a simple list or grid view if the content doesn’t change or cycle.

## Types


| ### Base Carousel  A carousel displays images that users can swipe or click through, often used for promotions or visual content.  **Use case:** When displaying simple informational content. | *Example of a base carousel.* |
| --- | --- |

### Base Carousel

A carousel displays images that users can swipe or click through, often used for promotions or visual content.

**Use case:** When displaying simple informational content.

*Example of a base carousel.*

## Appearance

### Anatomy


| *                                * ** ** ** | **Image:** Where the carousel displays the main image for the current slide. |
| --- | --- |
| *                                * ** ** ** | **Slide Title:** Title for the current slide. |
| *                                * ** ** ** | **Slide Description:** Description for the current slide. |
| *                                * ** ** ** | **Auto-play Button:** Turns autoplay on or off. |
| *                                * ** ** ** | **Image Indicator:** Shows the current position within the set of items and allows for navigation via mouse or keyboard interaction. |

**Image:** Where the carousel displays the main image for the current slide.

**Slide Title:** Title for the current slide.

**Slide Description:** Description for the current slide.

**Auto-play Button:** Turns autoplay on or off.

**Image Indicator:** Shows the current position within the set of items and allows for navigation via mouse or keyboard interaction.

### Customization Options

**Autoplay: **The autoplay button is an optional element, and can be removed from the carousel.**Full Image:** You can omit the header and description attributes to leave just the image to take up the full carousel without additional text. Alternative text is still required for accessibility, even if the image takes up the full carousel.

### Size

- By default, carousels are designed to stretch to 100% of their container's width.
- The height of the carousel is determined by the aspect ratio of the image. Use consistent image dimensions to avoid visual inconsistencies.
- Carousels are responsive, automatically adjusting to fit the screen size.

### Layout

- Images flow horizontally as users navigate.
- Ideal for full-width layouts or in grid sections.

### UI Content

- Make sure content is concise and uncomplicated for scannability.
- Text is short and focused. We recommend a limit of 10–20 words per item.
- Maintain consistent styling across items in the carousel for visual continuity.

## Behaviors

### States

1. **Default:** Shows the first item within the carousel.
2. **Hover**: Image indicators are highlighted on hover.
3. **Focus:** Content and image indicators are keyboard-navigable, highlighting the focused element.
4. **Selected: **The selected image indicator is highlighted with a different color to make it stand out.

### Interactions

**Image**: Selecting an image that has an associated link opens the link according to its target.

**Image Indicator: **Image indicators allow users to navigate between images.

### Position

- Place the carousel in a prominent but non-intrusive location, where users can easily interact without it disrupting the main task.
- Ensure adequate spacing between the carousel and other page elements for a clean, uncluttered look.

### Loading

The carousel component doesn't have a built-in loading state. To display a loading state, you can customize it by adding a spinner, stencil, or placeholder content within the content area.

## Related Components
