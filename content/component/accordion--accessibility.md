---
title: "Accordion - Accessibility"
slug: "accordion--accessibility"
category: "component"
order: 0
---

## **Interactions**

### Mouse

Users interact with an accordion by clicking a section header to expand or collapse its content.

* Hover on an accordion section header, and the pointer cursor appears.
* Hover on text content within an Accordion, and the text cursor appears. 

### Keyboard

* **Tab**: Moves focus between section headers and nested elements without expanding them.
* **Shift + Tab**: Moves focus to the previously selected element.
* **Enter/Spacebar**: Expands or collapses the focused section header.

![Accordion - Tab Order](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/59242cd48bb1ff61c4a65c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T180407Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ab4cd0706a63c80fa6d438351361e222ec7e81ae6a009e46ae0233e18d719e99)

**Accordion - Tab Order**

---

### Other

Screen readers should announce the state of the accordion (e.g., expanded or collapsed) when users navigate to each section. The headers should have proper ARIA roles and labels to ensure that assistive technologies can provide adequate information.

## Design Considerations

* When deviating from the standard accordion styling hooks, ensure that proper contrast ratios are maintained for optimal readability.
* Avoid hiding critical information inside collapsed sections. If critical information is hidden, signal when it is available.

## Development Considerations

* Availability of accordion content to assistive technology requires the use of aria-controls and toggling aria-expanded as regions are expanded and collapsed.
* Ensure keyboard navigation is fully functional and intuitive, and follows recommendations of the [WAI-ARIA Authoring Practices for accordions](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).
* Ensure each section header is wrapped in an appropriate header level, according to the page's information architecture.

![Headings](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/82745223ae7ab35f3427cf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T180407Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=12e343e7c568267b0927e3a5c7962b3b3cab26dd1aa55eddac41879c275a262c)

**Headings**

---

## Content Considerations

### Clear Language

* Make sure section headers are clear and non-repetitive.

### Internationalization

* Accordion headers should support localization, ensuring the text adapts according to the user’s language settings. 
* Use locale-specific formatting for dates, times, and numbers to ensure accurate representation.
