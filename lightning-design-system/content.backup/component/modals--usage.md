---
title: "Modals"
description: "Modals are best for presenting focused content or gathering input without navigating away. Use them sparingly to avoid overwhelming users or disrupting workflows."
category: "component"
slug: "modals--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

Modals are best for presenting focused content or gathering input without navigating away. Use them sparingly to avoid overwhelming users or disrupting workflows.

- They temporarily block the underlying interface, ensuring user action on the task.
- Modals are dismissible via buttons and keyboard shortcuts.


They temporarily block the underlying interface, ensuring user action on the task.

Modals are dismissible via buttons and keyboard shortcuts.

## Usage

### Best Practices

- Use to capture attention for critical tasks or information.
- Use clear, actionable titles and concise content.


Use to capture attention for critical tasks or information.

Use clear, actionable titles and concise content.

### When Not to Use

- Avoid using modals for minor notifications; use a Toast or Alert instead.
- Do not use modals for system alerts that the user must acknowledge; use a Prompt instead.
- Don’t use modals for persistent content; consider embedding content directly on the page.


Avoid using modals for minor notifications; use a Toast or Alert instead.

Do not use modals for system alerts that the user must acknowledge; use a Prompt instead.

Don’t use modals for persistent content; consider embedding content directly on the page.

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Header** |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Title** |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Tagline** |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Close button** |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Body** |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Placeholder content** |
| * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Footer** |
| * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Right button 2** |
| * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Right button 1** |


**Header**

**Title**

**Tagline**

**Close button**

**Body**

**Placeholder content**

**Footer**

**Right button 2**

**Right button 1**

### Customization Options:

Styling is supported, but must be applied to individual helper components:

- `lightning-modal-body`
- `lightning-modal-header`
- `lightning-modal-footer`


`lightning-modal-body`

`lightning-modal-header`

`lightning-modal-footer`

Modal footer is fully customizable, and can include additional left and right buttons, icons, checkbox, and progress indicator.

### Size

Modal is set to relative width and adjusts based on the width of the available viewport. Each size includes minimum and maximum widths. The initial size should be based on the amount of content expected to be displayed.

**Small**: 60% of viewport - for brief messages.

**Medium **(Default): 70% of viewport - for most tasks.

**Large**: up to 90% of viewport - for detailed forms.

**Full**: for mobile - 90% on desktop and 100% on mobile.

### Layout

| <h4>Headless</h4>Modal headers are optional. You may choose not to include a header for stylized modals that include a headline or title in the body. If you don't use lightning-modal-header, the accessible label is provided using aria-label set to the label you provide in the modal. | *Modal is shown with no header or title area.* |
| --- | --- |
|   |   |
| <h4>Footless</h4>Modal footers are optional. You may choose not to include a footer for stylized modals that have calls to action within the body. | *Modal is shown with no footer.* |
|   |   |
| <h4>Directional</h4>Use when the modal is part of a multistep process. | *Modal is shown with left and right directional buttons in footer.* |
|   |   |


#### Headless

Modal headers are optional. You may choose not to include a header for stylized modals that include a headline or title in the body. If you don't use lightning-modal-header, the accessible label is provided using aria-label set to the label you provide in the modal.

*Modal is shown with no header or title area.*

#### Footless

Modal footers are optional. You may choose not to include a footer for stylized modals that have calls to action within the body.

*Modal is shown with no footer.*

#### Directional

Use when the modal is part of a multistep process.

*Modal is shown with left and right directional buttons in footer.*

### UI Content

- Title - Clear and concise (max. 50 characters).
- Body - Use short paragraphs or bulleted lists for readability.


Title - Clear and concise (max. 50 characters).

Body - Use short paragraphs or bulleted lists for readability.

## Behaviors

### Interactions

Close Modal via "X" icon, footer buttons, or Escape key.

### Position

Modals are centered within the viewport.

### Scrolling

Body content scrolls when exceeding modal height.

## Related Components
