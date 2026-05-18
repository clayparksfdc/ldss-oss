---
title: "Progress Bar"
slug: "progress-bar--usage"
category: "component"
parent: "progress-bar"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-progress-bar--base)

## Overview

* The Progress Bar is a visual indicator that shows the ongoing progress of a task, indicating that a user’s request is being processed.
* Displays progress from 0% to 100%, giving users feedback on the status of long-running processes or time remaining on a task.
* Useful to provide users with real-time feedback for linear, predictable operations like file uploads or downloads.

## Usage

### Best Practices

* Use the Progress Bar to show task completion especially when a process is time-consuming. 
* If possible, display the percentage of completion so users have a clear understanding of how much is left.
* Avoid cluttering the Progress Bar with too many labels or indicators. Use concise text and clear visuals.

### When Not to Use

* Avoid using a Progress Bar for tasks that are completed in less than a few seconds. Instead, use a spinner or loading indicator.
* Don’t use the Progress Bar if your process requires user input or decisions at each step. Use a [Progress Indicator](https://zeroheight.com/2e1ef8501/p/64d280-progress-indicator) instead.

## Types

| **Base**  A horizontal bar that fills from left to right to indicate progress.  **Use case** **I**deal for general progress tracking like file uploads or loading data.  | ![base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/f5f49f8ad2a232d7b50cf9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1b20a785e45630be3e012392ee40d24b4c5d2d8b6d0abce3bc8969074d573211) **base** |
| --- | :---: |
|   |   |
| **Vertical**  A vertical bar that fills from bottom to top to indicate progress.  **Use case** Best for side panels, dashboards, or where vertical space is more readily available than horizontal.  | ![Vertical](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/e84175a7ab5b1dbc8d4e01?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8da2939f5b731d8c22ea6d61d51aa124bb6b9c9c53b6f6880948b641ccad3204) **Vertical** |

## Appearance

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/82feb26fd03a2cc188bd02?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a946af46e2c190c17453bf60b514dd0329e7af720f68147d255a87836115f85e)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e3edbd9bfd5bc276141a890b0270fb69b1251eb0a82a591d42c141389ff75e94) | **Bar Label**: (optional) Title describes the purpose of the process. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a7f30aa0cac78c5b827f4d8aa1625a1add57860147615ed002337bae898f0c6c) | **Progress Label**(optional)**:** Text to show additional information about the process such as percentages or numeric values.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6a0f8d2ac3b0caa15869818c06b9db504acd1a279131f2f5f9243b6d25ee9f8d) | **Bar Value**: The colored segment indicating the progress.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/7ri9WHhSQUbqZwfuJQjXsQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=acfc820c0aa26f39fee79a7379b32440f3ad5cdfd15344498563658982dd910a)  | **Track**: The background container showing the full length of the progress bar. |

### Customization Options

#### **Bar Label**

The Bar label can be added to describe the purpose of the progress bar. 

#### **Progress Label**

A progress label can be added to the progress bar to provide the user with additional details about the loading process. Percentages and numbers need to use a variable to align with the loading position of the Bar Value.

### Size

The Progress Bar is responsive and adjusts to the width of its parent container. Additionally, it offers four thickness sizes: extra small, small, medium, and large. Each type of Progress Bar can use these sizes.

![Size](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/88d27c1e9b01450b274198?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d3d0f935f84741ed344b1b86997975b9bcdb7a2c433203434eac949433904bf7)

**Size**

---

#### **Radius**

Each size also supports the radius modifier, allowing for rounded variants.

![Radius](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/f6b4ece1d0b721d48d10e4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b92dcf92c6b4f619b5dfbc763a610d73d653f1c2d9e8613bbd106ad72c019cff)

**Radius**

---

### UI Content

#### **Bar Label**

* Use clear, descriptive names that make sense on their own. For example, use “Download Progress” instead of just “Progress.”
* Aim for concise labels—one or two words if possible.
* Use Title Case. Capitalize the main words.

#### **Progress Label**

* Progress Label can be a general phrase like, “Download Initializing”  or can provide values of the process being completed “24/68 files”.
* Use short, descriptive labels (e.g., "5.6 of 10MB") or percentages ("50% complete").

## Behaviors

### States

![Progress Bar - States 2](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/ecd81409648d98827c7dfa?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=be533e2ea496ab7e4aefce800ef57c9f5300eb4cfedffcc7833b0b17d74a5be0)

**Progress Bar - States 2**

---

1. **Default:** When the bar percentage is not filled (0%).
2. **Active:** The ongoing progression of a task, visually represented by the bar gradually filling from 0% to 100%.
3. **Complete:** The finished bar value is at 100% when the process is completed. Alternatively, a success Progress Bar can be used to show the completed process.

### Validation

#### **Error Messaging**

* The Progress Bar does not have a built-in error state or indeterminate state. Use one of the following to notify users when a process fails to complete:
    * Inline Text
    * Toast
    * Scoped Notification
* Best practices for error messaging:
    * Ensure clarity and conciseness in error messages.
    * Provide guidance on how users can resolve the issue.
    * Position error messages near the relevant component for better visibility.

| ****Success**** A success variant can be added to a progress bar to signify when the process was completed. | ![Success](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/e45d540dfb3f96765c1cab?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042811Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fcdef5ed91e030e5bb5258e0b8819c3f99f6f8c7e59e879e656c89bab30cc921) **Success**  |
| --- | :---: |
|   |   |

## Related Components
