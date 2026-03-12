---
title: "Modals"
slug: "modals--usage"
category: "component"
parent: "modals"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-modal--base&globals=theme%3Alight
title: Modal - Base
height: 400px
```

## Overview

Modals are best for presenting focused content or gathering input without navigating away. Use them sparingly to avoid overwhelming users or disrupting workflows.

- They temporarily block the underlying interface, ensuring user action on the task.
- Modals are dismissible via buttons and keyboard shortcuts.

## Usage

### Best Practices

- Use to capture attention for critical tasks or information.
- Use clear, actionable titles and concise content.

### When Not to Use

- Avoid using modals for minor notifications; use a Toast or Alert instead.
- Do not use modals for system alerts that the user must acknowledge; use a Prompt instead.
- Don’t use modals for persistent content; consider embedding content directly on the page.

## Appearance

### Anatomy


| *                                *  | **Header** |
| --- | --- |
| *                                *  | **Title** |
| *                                *  | **Tagline** |
| *                                *  | **Close button** |
| *                                *  | **Body** |
| *                                *  | **Placeholder content** |
| *                       *  *           *  | **Footer** |
| *                       *  *           *  | **Right button 2** |
| *                       *  *           *  | **Right button 1** |

### Customization Options:

Styling is supported, but must be applied to individual helper components:

- `lightning-modal-body`
- `lightning-modal-header`
- `lightning-modal-footer`

Modal footer is fully customizable, and can include additional left and right buttons, icons, checkbox, and progress indicator.

### Size

Modal is set to relative width and adjusts based on the width of the available viewport. Each size includes minimum and maximum widths. The initial size should be based on the amount of content expected to be displayed.

**Small**: 60% of viewport - for brief messages.

**Medium**(Default): 70% of viewport - for most tasks.

**Large**: up to 90% of viewport - for detailed forms.

**Full**: for mobile - 90% on desktop and 100% on mobile.

### Layout


| HeadlessModal headers are optional. You may choose not to include a header for stylized modals that include a headline or title in the body. If you don't use lightning-modal-header, the accessible label is provided using aria-label set to the label you provide in the modal. | *Modal is shown with no header or title area.* |
| --- | --- |
|  |  |
| FootlessModal footers are optional. You may choose not to include a footer for stylized modals that have calls to action within the body. | *Modal is shown with no footer.* |
|  |  |
| DirectionalUse when the modal is part of a multistep process. | *Modal is shown with left and right directional buttons in footer.* |
|  |  |

### UI Content

- Title - Clear and concise (max. 50 characters).
- Body - Use short paragraphs or bulleted lists for readability.

## Behaviors

### Interactions

Close Modal via "X" icon, footer buttons, or Escape key.

### Position

Modals are centered within the viewport.

### Scrolling

## Related Components
