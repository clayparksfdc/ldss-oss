---
title: "Carousel - Accessibility"
slug: "carousel--accessibility"
category: "component"
parent: "carousel"
order: 0
---

## Interactions

### Mouse

**Navigation:**

- Users can click Image Indicators to move through carousel items.

**Auto-play Button:**

- Users can click Auto-play Button to play or pause the carousel.

**Cursor Changes:**

- The cursor changes to a pointer when hovering over clickable elements to indicate interactivity.

### Keyboard

**Tab Navigation:**

- Tab key moves through the three main elements of the carousel: autoplay button first, then current slide, then image indicator list.
- Shift+Tab keys, when focused on any element within the carousel, move focus entirely from the carousel.

**Enter Key:**

- Enter key toggles Auto-play Button on/off.
- Enter key, when focused on a selected carousel image, opens the associated link.

**Arrow Keys:**

- Arrow keys, when focused on an image indicator, cycle selection to the next or previous indicator.

**Focus States:**

- Visible focus states highlight interactive elements as users navigate with the keyboard, ensuring that users can track their position within the component.

### Other

**Screen Readers:**

- Aria labels and `aria-live` regions provide announcements of carousel actions, such as “Slide 2 of 5,” enhancing screen reader compatibility.
- Auto-play Button should announce play/pause status of the carousel.

## Design Considerations

- Avoid text in images, but if text does exist, ensure that it retains appropriate color contrast rules.

## Development Considerations

A Carousel is built using a tabbed UI specification and requires the following to meet accessibility requirements:

- The image indicator tab list, which should have `role="tablist"`.
- The tabs in that list, which should each be an `<a role="tab">` anchor wrapped in a `<li role="presentation">` list item.
- The tab panels, which display each tab’s content and should each have `role="tabpanel"`.

The tabs in that list, which should each be an `<a role="tab">` anchor wrapped in a `<li role="presentation">` list item.

- Selected tab’s anchor has `aria-selected="true"`, all other tabs’ anchors have `aria-selected="false"`.
- Selected tab’s anchor has `tabindex="0"`, all other tabs have `tabindex="-1"`.
- Each tab’s anchor has an `aria-controls` attribute whose value is the id of the associated `<div role="tabpanel">`.
- Each tab panel has an `aria-labelledby` attribute whose value is the id of its associated `<a role="tab">`.
- Each tab panel has an hidden attribute whose value is toggled based on which panel is visible.
- When the Carousel is set to auto-play, the HTML for the pause button is required to precede the HTML of the tab set.
- When that pause button is interacted with, the aria-pressed role must be toggled to true.
- When making the `slds-carousel__panel` active, the indicator is updated with the `slds-is-active` class. This provides visual feedback showing which carousel panel is active.
- Reference the [WCAG Carousel Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)  wherever possible.

Each tab’s anchor has an `aria-controls` attribute whose value is the id of the associated `<div role="tabpanel">`.

Each tab panel has an `aria-labelledby` attribute whose value is the id of its associated `<a role="tab">`.

### Content

- **Alt Text for Images:** Add descriptive alt text for each image displayed in the carousel, ensuring users with visual impairments can understand the content.
- **Short, Relevant Content:** Keep content concise to improve readability and ensure that messages are accessible within the short viewing time between slides.
- **Consistent Descriptions:** Use consistent labels and descriptions for each slide to help users understand and navigate carousel items more easily.

## Accessibility Labels

**Image Indicators:** Each image indicator must be labeled to announce the corresponding slide, such as `aria-label="Slide 1 of 5"`.

**Carousel Role:** Set the component role as a region with a descriptive aria-label, such as “Product Showcase Carousel,” to help users quickly identify its purpose.

## Internationalization

**Localizable Text:** Ensure that all carousel text, such as button labels and announcements, is localizable to support multiple languages.

**RTL Support:**The Carousel component is compatible with right-to-left (RTL) layouts, ensuring that elements like navigation arrows are correctly oriented based on the reading direction.
