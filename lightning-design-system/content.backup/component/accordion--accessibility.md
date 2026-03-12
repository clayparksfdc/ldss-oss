---
title: "Accordion"
description: "Users can interact with the Accordion by clicking a section header to expand or collapse its content."
category: "component"
slug: "accordion--accessibility"
status: "published"
lastModified: "2026-03-11"
---

## Interactions

### Mouse

Users can interact with the Accordion by clicking a section header to expand or collapse its content.

- While hovering on an Accordion section header, the pointer cursor appears.
- While hover on text content within an Accordion, the text cursor appears.


While hovering on an Accordion section header, the pointer cursor appears.

While hover on text content within an Accordion, the text cursor appears.

### Keyboard

- **Tab**: Moves focus between section headers and nested elements without expanding them.
- **Shift + Tab**: Moves focus to the previously selected element.
- **Enter/Spacebar**: Expands or collapses the focused section header.


**Tab**: Moves focus between section headers and nested elements without expanding them.

**Shift + Tab**: Moves focus to the previously selected element.

**Enter/Spacebar**: Expands or collapses the focused section header.

### Other

Screen readers should announce the state of the Accordion (e.g., expanded or collapsed) when users navigate to each section. The headers should have proper ARIA roles and labels to ensure that assistive technologies can provide adequate information.

## Design Considerations

- When deviating from the standard Accordion styling hooks, ensure proper contrast ratios for readability.
- Avoid hiding critical information inside collapsed sections. If critical information is hidden, signal when it is available.


When deviating from the standard Accordion styling hooks, ensure proper contrast ratios for readability.

Avoid hiding critical information inside collapsed sections. If critical information is hidden, signal when it is available.

## Development Considerations

- Availability of accordion content to assistive technology requires the use of aria-controls and toggling aria-expanded as regions are expanded and collapsed.
- Ensure keyboard navigation is fully functional and intuitive, and follows recommendations of the [WAI-ARIA Authoring Practices for accordions](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).
- Make sure each section header is wrapped in an appropriate header level, according to the information architecture of the page.


Availability of accordion content to assistive technology requires the use of aria-controls and toggling aria-expanded as regions are expanded and collapsed.

Ensure keyboard navigation is fully functional and intuitive, and follows recommendations of the [WAI-ARIA Authoring Practices for accordions](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

Make sure each section header is wrapped in an appropriate header level, according to the information architecture of the page.

## Content Considerations

### Clear Language

- Make sure section headers are clear and non-repetitive.


Make sure section headers are clear and non-repetitive.

### Internationalization

- Accordion headers should support localization and ensure the text adapts based on the user’s language settings.
- Use locale-specific formatting for dates, times, and numbers.


Accordion headers should support localization and ensure the text adapts based on the user’s language settings.

Use locale-specific formatting for dates, times, and numbers.
