---
title: "Tooltip - Usage"
slug: "tooltip--usage"
category: "component"
parent: "tooltip"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-tooltip--base
title: Tooltip - Base
height: 400px
```

## Overview

Tooltips display brief, relevant information about an interactive element. They’re ideal for explaining unfamiliar icons, abbreviations, or functionality without occupying space in the primary layout.

- Tooltips are small popup elements that provide supplemental information about a specific UI element.
- They appear near interactive elements such as buttons, icons, or input fields to provide explanations, tips, or clarifications.
- Tooltips enhance usability by offering non-intrusive, on-demand guidance that doesn’t disrupt the workflow.
- Tooltips are triggered by user interactions like hovering over, focusing on, or tapping the associated element.

## Usage

### Best Practices

- Tooltip content is concise and contextually relevant.
- Place the tooltip close to the associated element without obscuring it.
- Use tooltips to clarify icons, buttons, or text links for users.

### When Not to Use

- Don’t use tooltips for essential instructions—include critical information in visible text.
- Don’t use tooltips for non-interactive, focusable elements.
- Don’t overload the tooltip with lengthy or detailed content.
- Avoid reliance on tooltips for mobile users because hover interactions are limited on mobile devices

## Types


| Base  The default tooltip provides brief text guidance and appears on hover or focus.  **Use case:** Explain the function of a button or icon. |  |
| --- | --- |

## Appearance

### Anatomy


|  | **Nubbin:** The small visual indicator that points to the trigger element. |
| --- | --- |
|  | **Container:** The content container that provides the surface for the tooltip message. |
|  | **Message:**Text content of the tooltip. |
|  |**Trigger Element:** The UI element, such as a button or icon, that activates the tooltip. |

### Customization Options

- Content can include plain text, rich text, and in-line icons.
- Tooltip positioning can be adjusted for optimal visibility. You can place it above, below, or beside the trigger element.

Nubbins are indicators that inform the user of the direction of the content associated with the tooltip. A tooltip can accept the following nubbin position classes, `.slds-nubbin_left`, `.slds-nubbin_left-top`, `.slds-nubbin_left-bottom`, `.slds-nubbin_top-left`, `.slds-nubbin_top-right`, `.slds-nubbin_right-top`, `.slds-nubbin_right-bottom`,` .slds-nubbin_bottom-left`, `.slds-nubbin_bottom-right`.
Learn more about how to use them at [Popover Nubbins](https://v1.lightningdesignsystem.com/components/popovers/#Nubbins).

### Size

Keep tooltips concise, with 200 characters or less. This ensures optimal readability. Tooltips are sized to fit their content, and remain compact.

### UI Content

- Use plain, conversational language.
- Avoid jargon and technical terms unless necessary.
- Keep line length under 30–40 characters.

## Behaviors

### States

1. **Default:**The tooltip is hidden until triggered
2.**Hover**: Appears when the user hovers over the trigger element.
3. **Focus**: Appears when the user focuses on the trigger element using the keyboard.

### Interactions

- Triggered by hover or focus.
- Automatically dismissed when the user navigates away from the trigger element.

### Position


| *Top-Left* | *Top-Middle* | *Top-Right* |
| --- | --- | --- |
|  |  |  |
| *Right-Bottom* | *Right-Middle* | *Right-Top* |
|  |  |  |
| *Left-Bottom* | *Left-Middle* | *Left-Top* |
|  |  |  |
| *Bottom-Left* | *Bottom-Middle* | *Bottom-Right* |

*Top-Middle*

*Top-Right*

*Right-Bottom*

*Right-Middle*

*Left-Bottom*

*Left-Middle*

*Left-Top*

*Bottom-Left*

*Bottom-Middle*

*Bottom-Right*

### Responsive

Tooltips must adjust their position and size for mobile and desktop viewports. Consider touch-friendly alternatives for mobile devices.

### Validation

Never use tooltips to replace validation messages. Use tooltips to supplement, not substitute, essential feedback.

## Related Components
