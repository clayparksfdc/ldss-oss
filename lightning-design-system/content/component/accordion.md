---
title: "Accordion"
slug: "accordion"
category: "component"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-accordion--base&globals=theme%3Alight
title: Accordion - Base
height: 400px
```

## Overview

Accordions help users focus by enabling them to show and hide content.

Accordions enable you to:

- Make complex information easier to understand by grouping similar content together.
- Reduce the length of your content so customers can see it all without scrolling too much.
- Show and hide content by expanding and collapsing sections. Typically, only one section is expanded at a time.
- Create a streamlined page layout that helps users quickly find the information they need.
- Show only the most relevant data to avoid overwhelming your customers.

Use the accordion to efficiently organize large amounts of content. Only one section of the accordion can be opened at a time by default. When you open a new section, the currently open section closes. You can change the settings to enable multiple sections to be open simultaneously.

Accordions are most useful when you want only one section of content to be visible at a time, which helps keep pages clean and uncluttered.

### Accordion, Expandable Section, or Summary Detail

The Salesforce Lightning Design System (SLDS) has three types of components that can show and hide content: Accordion, [Expandable Section](https://v1.lightningdesignsystem.com/components/expandable-section/), and [Summary Detail](https://v1.lightningdesignsystem.com/components/summary-detail/). Each type has an ideal use case based on how much information you want to show and how users interact with the data.


| **Component** | **Best For** | **Structure** | **Interaction** |
| --- | --- | --- | --- |
| **Accordion** | Multiple related sections | Vertical stack, one open at a time | Expands/collapses to keep content manageable |
| **Expandable Section** | Isolated, optional details | Standalone | Independent visibility control |
| **Summary Detail** | Compact summary with optional details | Summary with expandable details | Quick snapshot with more detail on demand |

### Best Practices

- Use accordions if information sections are related, and it’s not necessary for users to view all open sections simultaneously.
- Each section's header clearly describes its content so users can quickly find what they need.
- Keep the number of sections as small as possible, and in a logical order. Too many accordion sections on a page can overwhelm users.
- You can set an accordion section to be open by default. If users often want to see the same information, consider expanding that section by default.

### When Not to Use

- Content is equally important and needs to be viewed simultaneously.
- Users need quick access to all sections without extra interactions.
- For a single accordion-like component, refer to [Related Components](#related-components) for an alternative option.

## Types


| **Conditional Accordion**  Only one section can be expanded at a time  **Use Case:**Use to help the user concentrate on one section at a time. | *An accordion with one section open by default.* |
| --- | --- |
|  |  |
| **Multi-Expand Accordion**  Allows multiple sections to be expanded at a time.  **Use Case:**If users want to reference more than one section at a time. | *An accordion with two sections open at a time.* |
|  |  |

## Appearance

The accordion uses a chevron to show expandable sections separated by a visual divider.

### Anatomy

Each accordion section is made up of two primary elements, the header and body, with various elements within them:


| *                                *  | **Accordion Section Header:**The element that expands or collapses the section content. |
| --- | --- |
| *                                *  | **Accordion Section Body:** The element that reveals its content as the header expands. The body can hold almost anything—text, images, tables, or other components. |
| *                                *  | **Chevron:** Visual indicator that shows whether an accordion section is expanded or collapsed. |
| *                                *  | **Accordion Section Title:** The title describes the content in the accordion body. |
| *                                *  | **Action Overflow Menu:** Used for additional actions to be taken. *(Optional)* |
| *                                *  | **Divider**: The horizontal divider line between accordion sections. |

### Customization Options

The optional action overflow menu gives users easy access to additional options related to the accordion section. You can use various button types in the header in the overflow menu, though we recommend using a button icon or either a base button or a neutral button to create a more consistent user experience.

#### Nested Accordions

You can nest accordions inside accordion sections to create multiple levels in the accordion. The chevron icon is used for all sections and levels.

### Placement

Place accordions within containers such as cards, panels, or modals.

### Layout

### UI Content

- Use title capitalization.
- Make titles concise but descriptive. For example, instead of "Info," use "Customer Information" to make it easier for users to know what to expect in each section.

## Behaviors

### States

An accordion component starts with the first section open by default, but you can modify it to expand a specific section upon page load.

1. **Default:**The first section is expanded and all the others are collapsed.
2.**Expanded:** A section that is currently open and has content displayed. Clicking on the accordion section header expands the section
3. **Collapsed:** A section is hidden, waiting for the user to expand it. Clicking on the accordion header collapses the section.
4. **Hover:**The section header content is highlighted when the mouse hovers over it to show that it's interactive. Highlighting changes the chevron and title color.
5.**Focus:** A keyboard user has focused on a section header for navigation. Focus underlines the title of the accordion section.
6. **Disabled:**Disable sections that are unavailable for user interaction. Disabling changes the chevron and title color to a lighter shade.


|**Loading**While content inside an accordion is loading, you can show that data is still being fetched with a spinner or loading message. | *A *[*spinner*](/component/spinners)* displayed over the content of an accordion to indicate loading.* |
| --- | --- |
|  |  |
| **Scrolling**Enable scrolling when content exceeds the height of the container so users can have access to all of the content. | *The body of an accordion can display a scrollbar.* |

## Related Components
