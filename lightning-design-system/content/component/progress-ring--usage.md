---
title: "Progress Ring"
slug: "progress-ring--usage"
category: "component"
parent: "progress-ring"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-progress-ring--base
title: Progress Ring - Base
height: 400px
```

## Overview

- The progress ring visually displays progress in a circular form, showing the percentage of completion.
- The base type shows how far along you are in the process, while the active step type shows where you are right now.
- When the progress ring's direction is set to fill, the color flows clockwise in the ring.
- When the progress ring’s direction is set to drain, the color flows counterclockwise. Instead of progress, the drain direction can show the depletion of a value or a countdown, for example.

The progress ring is ideal for showing progress when there's a clear start and end point. By filling the ring with a color, the progress ring shows a value from 0 (start) to 100 (completed). The progress ring has variants for several use cases.

## Usage

### Best Practices

- Use a progress ring for tasks with a defined completion percentage, such as file uploads or process stages.

### When Not to Use

- Don’t use it for tasks where progress is indeterminate.
- Don’t use it in place of a custom data visualization component.
- Don’t use it for tasks that need a lot of detail or explanation in text.
- Don’t use it to track processes where progress updates aren’t necessary.

## Types


| Base (default)  This progress ring represents overall progress towards completion, measured as a percentage from 0 - 100%.    **Use Case**  Processes where users want to see progress as a percentage, such as file uploads or task completion rates. | *Base progress ring showing 50% completion.* |
| --- | --- |
|  |  |
| Base Autocomplete  The `base-autocomplete` variant uses the default green fill color and adds a success icon to denote completion when the value is 100. The success icon is only used with the base autocomplete variant.  **Use Case:**Processes where you want to reinforce a sense of accomplishment or show that an operation was successful. For example, after completing an onboarding process, the autocomplete progress ring can provide users with visual confirmation. | *Completion icon (checkmark).* |
|  |  |
| Active Step  The brand blue ring highlights the specific step the user is currently completing.   **Use Case:**Processes like onboarding, forms with multiple steps, or approval processes where it’s critical to show the user’s current step. | *Active step progress ring.* |

## Appearance

### Anatomy


| *                                *  | **Ring Track**: The component’s unfilled visual track. |
| --- | --- |
| *                                *  | **Indicator**: Displays the progress point of filling or draining along the ring track. |
| *                                *  | **Icon**: Icons appear inside the ring to indicate that warnings or errors have occurred in the process. |

### Size

Progress rings have two sizes: medium (default) and large

## Behaviors

### States


|  | 0% | 25% | 50% | 75% | 100% | Complete |
| --- | --- | --- | --- | --- | --- | --- |
| **Base and Autocomplete**  (Success icon only used with autocomplete variant) |  |  |  |  |  |  |
| **Warning**  *(Base state)* |  |  |  |  |  | N/A |
| **Error**  *(Base state)* |  |  |  |  |  | N/A |

**Empty:** 0% state

**Filled / Drained:** 25%–75%

- The fill value indicates a color flow in the clockwise direction.
- The drain value indicates a color flow in the counterclockwise direction.

**Error/Expired**: Indicates that a user action, system process, or content load has failed due to invalid input, system issues, or restricted access.

### Interactions

Progress rings are non-interactive—they provide visual feedback only.

## Related Components
