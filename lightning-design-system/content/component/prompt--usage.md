---
title: "Prompt"
slug: "prompt--usage"
category: "component"
parent: "prompt"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-prompt--base
title: Prompt - Base
height: 400px
```

## Overview

- Prompt is a modal dialog ideal for urgent tasks requiring user focus or decision-making.
- Ensures users make deliberate choices or provide necessary data before resuming other actions on the page.
- Prompts appear when the system needs to communicate a message to the user; it doesn’t show up as a result of user action.

## Usage

### Best Practices

- Use for critical actions such as errors or system alerts, or confirming an action.
- Keep content concise and relevant to the user’s immediate task.
- Provide clear actions, such as "OK" or "Cancel."
- Prompts should appear rarely and generally should not be a part of a typical user flow.

### When Not to Use

- Avoid using Prompt for non-critical interactions; consider [Scoped Notifications](/component/scoped-tabs) or [Toast](/component/toast) instead.
- Do not overuse; too many prompts can lead to "prompt fatigue."
- Avoid complex content within a prompt; keep it focused on a single task.

## Types


| Alert  Customizable header with a single action button. |  |
| --- | --- |
|  |  |
| Confirm  Headerless with two action buttons. |  |
|  |  |
| Prompt  Customizable header with two action buttons. |  |
|  |  |

## Appearance

### Anatomy


| *                                *  | **Title** |
| --- | --- |
| *                                *  | **Header** |
| *                                *  | **Body** |
| *                                *  | **Footer** |
| *                                *  | **Outline button** |
| *                                *  | **Brand button** |

### Types


| DefaultNotifies the user of neutral information about the task being completed. |  |
| --- | --- |
|  |  |
| ShadeNotifies the user of neutral information about the task being completed. |  |
|  |  |
| InfoCommunicates neutral information about the system. |  |
|  |  |
| OfflineNotifies the user they are not connected to the internet. |  |
|  |  |
| InverseNotifies the user of neutral information about a specific feature. |  |
|  |  |
| Alt-inverseNotifies the user of neutral information about a specific feature. |  |
|  |  |
| SuccessCommunicates the successful completion of an action. |  |
|  |  |
| WarningWarns the user about important system information that deserves caution. |  |
|  |  |
| ErrorAlerts the user about an error in the system that needs immediate attention. |  |

### Size

Responsive design with adaptable dimensions. Supports minimum and maximum width constraints to ensure readability on all devices.

### UI Content

- Title - Clear and concise (max. 50 characters).
- Body - Use short paragraphs or bulleted lists for readability.

## Behaviors

### Interactions

Close Prompt via footer buttons, or Escape key.

### Position

Primary action (e.g., "Confirm") is highlighted and focusable by default.

### Validation

- Inline error messages guide users if required input is missing.
- Example: "Please provide a reason for this action."

## Related Components
