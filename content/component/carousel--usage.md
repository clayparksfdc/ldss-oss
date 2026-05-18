---
title: "Carousel - Usage"
slug: "carousel--usage"
category: "component"
parent: "carousel"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-carousel--base)

## Overview

Carousels are best for displaying content that cycles through different views, helping users explore a collection of related items or updates in a visually engaging way.

* The carousel is a sliding component for showing featured content within a limited space.
* Navigate through content using the image indicator controls.
* A carousel works well for dynamic, visually rich content and is commonly used in Salesforce apps for showing featured content, tips, or other rotating content.

### Best Practices

* Use images or concise messages to capture users’ attention quickly.
* A carousel can accept a maximum number of 5 panels where only 1 panel is visible at a time.
* If images contain text, be sure to include what they say in the header, description, or alt-text.


### When Not to Use

* Don’t use carousels if users want to see all items at once or if items require in-depth reading.
* Don’t place critical content in a carousel where it can be missed.
* Use a simple list or grid view if the content doesn’t change or cycle.

## Types

| **Base Carousel**  A carousel displays images that users can swipe or click through, often used for promotions or visual content. **Use case:** When displaying simple informational content. | ![standard](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/83d5b5f1d952996a5eda28?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042727Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1def04462ae6ccfec47f204ee3a76a167b08feb010118afc65901d77d0c31058) **standard** *Example of a base carousel.* |
| --- | :---: |

## Appearance 

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/dea79e336827de9b4c8452?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042727Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b58c1a58e903a53ffbbab8233c1b48cab060ffb076253476edd881935246cb35)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042727Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f60bcffeebe5fb1934362821aa9ff115c11aaeb88a35dab31117a99757596bce) | **Image:** Where the carousel displays the main image for the current slide. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042727Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fcd4d14dc3d1d2304fba461c6a91a726cff2c842c7f3f4022127cea9f4ab488f) | **Slide Title:** Title for the current slide. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042727Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=91faaa1e5a20cdf640bb01dc79ec35193144e63351c3bf93ae12daa9acf89836) | **Slide Description:** Description for the current slide. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042727Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=70ceb07e9485cfc690f99c9f7b536d622b6b227f4d5bdb7e1ffe6b234d0e0326) | **Auto-play Button:** Turns autoplay on or off. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042727Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a0d22e7c3f061284153a48d2016e6a10f9cb1380c4a09fa93b4da924628fb388) | **Image Indicator:** Shows the current position within the set of items and allows for navigation via mouse or keyboard interaction.  |

### Customization Options

**Autoplay:** The autoplay button is an optional element, and can be removed from the carousel.**Full Image:** You can omit the header and description attributes to leave just the image to take up the full carousel without additional text. Alternative text is still required for accessibility, even if the image takes up the full carousel.

### Size

* By default, carousels are designed to stretch to 100% of their container's width.
* The height of the carousel is determined by the aspect ratio of the image. Use consistent image dimensions to avoid visual inconsistencies.

* Carousels are responsive, automatically adjusting to fit the screen size.

### Layout

* Images flow horizontally as users navigate.
* Ideal for full-width layouts or in grid sections.

### UI Content

* Make sure content is concise and uncomplicated for scannability. 
* Text is short and focused. We recommend a limit of 10–20 words per item.
* Maintain consistent styling across items in the carousel for visual continuity.

## Behaviors

### States

![interaction](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/4a4c0d9a85187d19e47495?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042727Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e4b06f752c2b7c35ce718a1e1a4db95f58eab5f87e84359ac27dc5a280b5d7ba)

**interaction**

---

1. **Default:** Shows the first item within the carousel.
2. **Hover**: Image indicators are highlighted on hover.
3. **Focus:** Content and image indicators are keyboard-navigable, highlighting the focused element.
4. **Selected:** The selected image indicator is highlighted with a different color to make it stand out.

### Interactions

**Image**: Selecting an image that has an associated link opens the link according to its target.

**Image Indicator:** Image indicators allow users to navigate between images.

### Position

* Place the carousel in a prominent but non-intrusive location, where users can easily interact without it disrupting the main task.
* Ensure adequate spacing between the carousel and other page elements for a clean, uncluttered look.

### Loading

The carousel component doesn't have a built-in loading state. To display a loading state, you can customize it by adding a spinner, stencil, or placeholder content within the content area.

## Related Components
