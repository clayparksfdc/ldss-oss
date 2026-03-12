---
title: "Spinners"
description: "Spinners provide feedback when a system action is in progress. They should be used sparingly and in situations where users need confirmation that an action is taking place."
category: "component"
slug: "spinners--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

Spinners provide feedback when a system action is in progress. They should be used sparingly and in situations where users need confirmation that an action is taking place.

- Spinners provide feedback that content is loading or an operation is in progress.
- Helps manage user expectations by signaling that the system is working.
- Should be used appropriately to avoid unnecessary distractions or confusion.


Spinners provide feedback that content is loading or an operation is in progress.

Helps manage user expectations by signaling that the system is working.

Should be used appropriately to avoid unnecessary distractions or confusion.

### Best Practices

- Use spinners only when an operation takes more than a second.
- Place the spinner near the relevant content or component.
- Ensure that spinners are accompanied by meaningful context or messages when necessary.
- Include a background overlay when placed on top of text or other content to ensure visibility.


Use spinners only when an operation takes more than a second.

Place the spinner near the relevant content or component.

Ensure that spinners are accompanied by meaningful context or messages when necessary.

Include a background overlay when placed on top of text or other content to ensure visibility.

### When Not to Use

- For extremely short operations (under a second), a spinner may not be visible long enough to be helpful.
- When an alternative visual cue, such as a progress bar or a stencil would provide better feedback.


For extremely short operations (under a second), a spinner may not be visible long enough to be helpful.

When an alternative visual cue, such as a progress bar or a stencil would provide better feedback.

## Types

| <h3>Base (default)</h3> The default spinner uses the color Neutral 50. |   |
| --- | --- |
|   |   |
| <h3>Brand</h3> Setting the variant type to ”Brand” matches the org’s brand color. |   |
|   |   |
| <h3>Inverse</h3> Use on dark backgrounds. |   |
|   |   |


### Base (default)

The default spinner uses the color Neutral 50.

### Brand

Setting the variant type to ”Brand” matches the org’s brand color.

### Inverse

Use on dark backgrounds.

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Spinner ball**: Six in total. |   |
| --- | --- | --- |
|   |   |   |


**Spinner ball**: Six in total.

### Customization Options:

- A white transparent background overlay may be added by using the `slds-spinner_container` class.


A white transparent background overlay may be added by using the `slds-spinner_container` class.

### Size

Spinners come in 5 sizes.

## Behaviors

### Animation

- Spinners are animated


Spinners are animated

### Position

- Spinners should be centered in the viewport for full-page loading or the content container for localized operations.


Spinners should be centered in the viewport for full-page loading or the content container for localized operations.

### Loading

- Appears immediately when an action starts.
- Disappears when the process completes.
- Used when the loading time is non-determinate.


Appears immediately when an action starts.

Disappears when the process completes.

Used when the loading time is non-determinate.

## Related Components
