---
title: "Accordion"
description: "Accordions help users focus by enabling them to show and hide content."
category: "component"
slug: "accordion"
status: "published"
lastModified: "2026-03-11"
---

## Overview

Accordions help users focus by enabling them to show and hide content.

Accordions enable you to:

- Make complex information easier to understand by grouping similar content together.
- Reduce the length of your content so customers can see it all without scrolling too much.
- Show and hide content by expanding and collapsing sections. Typically, only one section is expanded at a time.
- Create a streamlined page layout that helps users quickly find the information they need.
- Show only the most relevant data to avoid overwhelming your customers.


Make complex information easier to understand by grouping similar content together.

Reduce the length of your content so customers can see it all without scrolling too much.

Show and hide content by expanding and collapsing sections. Typically, only one section is expanded at a time.

Create a streamlined page layout that helps users quickly find the information they need.

Show only the most relevant data to avoid overwhelming your customers.

Use the accordion to efficiently organize large amounts of content. Only one section of the accordion can be opened at a time by default. When you open a new section, the currently open section closes. You can change the settings to enable multiple sections to be open simultaneously.

Accordions are most useful when you want only one section of content to be visible at a time, which helps keep pages clean and uncluttered.

### Accordion, Expandable Section, or Summary Detail

The Salesforce Lightning Design System (SLDS) has three types of components that can show and hide content: Accordion, [Expandable Section](https://v1.lightningdesignsystem.com/components/expandable-section/), and [Summary Detail](https://v1.lightningdesignsystem.com/components/summary-detail/). Each type has an ideal use case based on how much information you want to show and how users interact with the data.

| **Component** | **Best For** | **Structure** | **Interaction** |
| --- | --- | --- | --- |
| **Accordion** | Multiple related sections | Vertical stack, one open at a time | Expands/collapses to keep content manageable |
| **Expandable Section** | Isolated, optional details | Standalone | Independent visibility control |
| **Summary Detail** | Compact summary with optional details | Summary with expandable details | Quick snapshot with more detail on demand |


**Component**

**Best For**

**Structure**

**Interaction**

**Accordion**

Multiple related sections

Vertical stack, one open at a time

Expands/collapses to keep content manageable

**Expandable Section**

Isolated, optional details

Standalone

Independent visibility control

**Summary Detail**

Compact summary with optional details

Summary with expandable details

Quick snapshot with more detail on demand

### Best Practices

- Use accordions if information sections are related, and it’s not necessary for users to view all open sections simultaneously.
- Each section's header clearly describes its content so users can quickly find what they need.
- Keep the number of sections as small as possible, and in a logical order. Too many accordion sections on a page can overwhelm users.
- You can set an accordion section to be open by default. If users often want to see the same information, consider expanding that section by default.


Use accordions if information sections are related, and it’s not necessary for users to view all open sections simultaneously.

Each section's header clearly describes its content so users can quickly find what they need.

Keep the number of sections as small as possible, and in a logical order. Too many accordion sections on a page can overwhelm users.

You can set an accordion section to be open by default. If users often want to see the same information, consider expanding that section by default.

### When Not to Use

- Content is equally important and needs to be viewed simultaneously.
- Users need quick access to all sections without extra interactions.
- For a single accordion-like component, refer to [Related Components](https://zeroheight.com/2e1ef8501/v/0/p/8488c4-accordion/t/26d747ebd5) for an alternative option.


Content is equally important and needs to be viewed simultaneously.

Users need quick access to all sections without extra interactions.

For a single accordion-like component, refer to [Related Components](https://zeroheight.com/2e1ef8501/v/0/p/8488c4-accordion/t/26d747ebd5) for an alternative option.

## Types

| **Conditional Accordion**Only one section can be expanded at a time**<strong>Use Case: **Use to help the user concentrate on one section at a time. | *An accordion with one section open by default.* |
| --- | --- |
|   |   |
| **Multi-Expand Accordion**Allows multiple sections to be expanded at a time.**Use Case: **If users want to reference more than one section at a time. | *An accordion with two sections open at a time.* |
|   |   |


**Conditional Accordion**

Only one section can be expanded at a time

**Use Case: **Use to help the user concentrate on one section at a time.

*An accordion with one section open by default.*

**Multi-Expand Accordion**

Allows multiple sections to be expanded at a time.

**Use Case: **If users want to reference more than one section at a time.

*An accordion with two sections open at a time.*

## Appearance

The accordion uses a chevron to show expandable sections separated by a visual divider.

### Anatomy

Each accordion section is made up of two primary elements, the header and body, with various elements within them:

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Accordion Section Header: **The element that expands or collapses the section content. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Accordion Section Body:** The element that reveals its content as the header expands. The body can hold almost anything—text, images, tables, or other components. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Chevron:** Visual indicator that shows whether an accordion section is expanded or collapsed. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Accordion Section Title:** The title describes the content in the accordion body. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Action Overflow Menu:** Used for additional actions to be taken. *(Optional)* |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Divider**: The horizontal divider line between accordion sections. |


**Accordion Section Header: **The element that expands or collapses the section content.

**Accordion Section Body:** The element that reveals its content as the header expands. The body can hold almost anything—text, images, tables, or other components.

**Chevron:** Visual indicator that shows whether an accordion section is expanded or collapsed.

**Accordion Section Title:** The title describes the content in the accordion body.

**Action Overflow Menu:** Used for additional actions to be taken. *(Optional)*

**Divider**: The horizontal divider line between accordion sections.

### Customization Options

**Action Overflow Menu**

The optional action overflow menu gives users easy access to additional options related to the accordion section. You can use various button types in the header in the overflow menu, though we recommend using a button icon or either a base button or a neutral button to create a more consistent user experience.

#### Nested Accordions

You can nest accordions inside accordion sections to create multiple levels in the accordion. The chevron icon is used for all sections and levels.

### Placement

Place accordions within containers such as cards, panels, or modals.

### Layout

Accordions are responsive, adapting to the container they’re placed in. Test components that include accordions in different screen sizes to make sure you can use the accordions as expected.

### UI Content

**Accordion Title**

- Use title capitalization.
- Make titles concise but descriptive. For example, instead of "Info," use "Customer Information" to make it easier for users to know what to expect in each section.


Use title capitalization.

Make titles concise but descriptive. For example, instead of "Info," use "Customer Information" to make it easier for users to know what to expect in each section.

## Behaviors

### States

An accordion component starts with the first section open by default, but you can modify it to expand a specific section upon page load.

1. **Default: **The first section is expanded and all the others are collapsed.
2. **Expanded:** A section that is currently open and has content displayed. Clicking on the accordion section header expands the section
3. **Collapsed:** A section is hidden, waiting for the user to expand it. Clicking on the accordion header collapses the section.
4. **Hover: **The section header content is highlighted when the mouse hovers over it to show that it's interactive. Highlighting changes the chevron and title color.
5. **Focus:** A keyboard user has focused on a section header for navigation. Focus underlines the title of the accordion section.
6. **Disabled: **Disable sections that are unavailable for user interaction. Disabling changes the chevron and title color to a lighter shade.


**Default: **The first section is expanded and all the others are collapsed.

**Expanded:** A section that is currently open and has content displayed. Clicking on the accordion section header expands the section

**Collapsed:** A section is hidden, waiting for the user to expand it. Clicking on the accordion header collapses the section.

**Hover: **The section header content is highlighted when the mouse hovers over it to show that it's interactive. Highlighting changes the chevron and title color.

**Focus:** A keyboard user has focused on a section header for navigation. Focus underlines the title of the accordion section.

**Disabled: **Disable sections that are unavailable for user interaction. Disabling changes the chevron and title color to a lighter shade.

### Interactions

| <h4>**Loading**</h4>While content inside an accordion is loading, you can show that data is still being fetched with a spinner or loading message. | *A *[*spinner*](https://zeroheight.com/2e1ef8501/p/959d6d)* displayed over the content of an accordion to indicate loading.* |
| --- | --- |
|   |   |
| <h4>**Scrolling**</h4>Enable scrolling when content exceeds the height of the container so users can have access to all of the content. | *The body of an accordion can display a scrollbar.* |


#### Loading

While content inside an accordion is loading, you can show that data is still being fetched with a spinner or loading message.

*A *[*spinner*](https://zeroheight.com/2e1ef8501/p/959d6d)* displayed over the content of an accordion to indicate loading.*

#### Scrolling

Enable scrolling when content exceeds the height of the container so users can have access to all of the content.

*The body of an accordion can display a scrollbar.*

## Related Components
