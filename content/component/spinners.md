---
title: "Spinners"
slug: "spinners"
category: "component"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-spinner--base
title: Spinner - Base
height: 400px
```

## Overview

Spinners provide feedback when a system action is in progress. They should be used sparingly and in situations where users need confirmation that an action is taking place.

- Spinners provide feedback that content is loading or an operation is in progress.
- Helps manage user expectations by signaling that the system is working.
- Should be used appropriately to avoid unnecessary distractions or confusion.

### Best Practices

- Use spinners only when an operation takes more than a second.
- Place the spinner near the relevant content or component.
- Ensure that spinners are accompanied by meaningful context or messages when necessary.
- Include a background overlay when placed on top of text or other content to ensure visibility.

### When Not to Use

- For extremely short operations (under a second), a spinner may not be visible long enough to be helpful.
- When an alternative visual cue, such as a progress bar or a stencil would provide better feedback.

## Types


| Base (default)  The default spinner uses the color Neutral 50. |  |
| --- | --- |
|  |  |
| Brand  Setting the variant type to ”Brand” matches the org’s brand color. |  |
|  |  |
| Inverse  Use on dark backgrounds. |  |
|  |  |

## Appearance

### Anatomy


| *                                *  | **Spinner ball**: Six in total. |  |
| --- | --- | --- |
|  |  |  |

### Customization Options:

- A white transparent background overlay may be added by using the `slds-spinner_container` class.

### Size

Spinners come in 5 sizes.

## Behaviors

### Animation

- Spinners are animated

### Position

- Spinners should be centered in the viewport for full-page loading or the content container for localized operations.

### Loading

- Appears immediately when an action starts.
- Disappears when the process completes.
- Used when the loading time is non-determinate.

## Related Components
