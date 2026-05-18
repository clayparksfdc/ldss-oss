---
title: "Progress Indicator"
slug: "progress-indicator--usage"
category: "component"
parent: "progress-indicator"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-progress-indicator--base)

## Overview

* Guides users through multi-step processes by providing a clear representation of progress.
* Commonly used in wizards, onboarding flows, and step-by-step workflows.
* Indicates completed, current, and pending steps, supporting clear navigation and task tracking.

## Usage

Progress indicators make it simple to navigate multi-step processes. They provide context so users always know where they are in the flow and what to expect next.

### Best Practices

* Use for processes with three or more steps.
* Label steps with actionable language (for example "Verify Account" rather than "Step 3").
* Keep your process simple and easy to follow. If there are more than six steps, group them logically.

### When Not to Use

* For single-step actions or processes.
* When the steps don't follow a sequential order.
* In dynamic workflows with changing steps.

## Appearance

The progress indicator visually represents the steps in a process. It consists of a horizontal or vertical track with evenly spaced steps, each represented by a circle or icon. Steps can be complete, active, or incomplete, using different styles to indicate progress.

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/611d8305bc2ac96b150cc9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e2d8c54e69e5ff498f12db9362f52c81b1ee7f3055e4218df9d56b5a3d98afa0)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e0870eec29d0da77fa94947fef0cbf249f7131036950fd3540061c4a73dbfccd) | **Completed Step:** Shows that the step was finished. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bc796c1485243fb6a9dfb2ae683c19f2890860ed359d37efb66ed4a617470721) | **Current Step:** Highlights the active step. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c9d16c15c197f95aa05dbffcb8bd05aeb5f11c5bced5658ff26340b3682386b1) | **Uncompleted Step:** Represents a step that hasn't started. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/7ri9WHhSQUbqZwfuJQjXsQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1ef05b0deaf201a32a770b23f32bc0c68d9b686851940dca286a280fb009dc0a)  | **Error:** Shows that an error has occurred in the step.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/sMjzgnAf8xLmqqDa3XWvFA.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ae82b0afef7ad2ef8c26fe0bbf93426a579a1f0a33227ca5a7ddb175d13ce319)  | **Tooltip:** Displays the step label on hover. |

### Customization Options

#### Size

* Responsive: Adjusts to fit available horizontal or vertical space.
* Minimum Width: 320px for mobile layouts.

### UI Content

* Keep step labels concise, no more than 30 characters.

## Behaviors

### States

![Progress Indicator States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/6352fc5a5b0628ce968b34?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=77c9f2694c89482ae3514a3f24dc22c3469ff34b16f13f8b11aa6bc6544aeec7)

**Progress Indicator States**

---

The Progress Indicator has the following states: 

1. **Default:** Neutral appearance with a grey dot.
2. **Hover:** Displays the step label in a tooltip.
3. **Active:** Indicates the currently selected step.
4. **Focus:** The step is selected when it receives focus. 

### Interactions

| ****Completed Step**** Shows that the step was finished. | ![completed](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/d2588bc59c21ec792a2fd4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8a5714fb305ee0bf3b0fd4f6b05a457a223640f1ace7115786b15e7942c457dc) **completed** |
| --- | :---: |
|   |   |
| ****Current Step**** Highlights the active step. | ![current](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/2a1b203f4603e6611ece02?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=49abe21adf445ce6a9638299efb80ca4dd9b10bf473dce2d122f02c88e68b55d) **current** |
|   |   |
| ****Uncompleted Step**** Represents a step that hasn't started. | ![uncompleted](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/1be6c5f7e6fbc1782b2e25?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f1730a95b00d879f963e7eb6ec8188b7c14d6dd163092217197a9a59539ee75e) **uncompleted** |

### Validation

Display an error state if users fail to complete required fields before progressing.

| ****Error**** Shows that an error has occurred in the step. | ![error](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/1b562ffc5b4e02389c4162?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042810Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7c070962cf1b86c0a4d15863ae021e63e1f4f751e4b6f03a434c0c76a9ba5251) **error** |
| --- | --- |

## Related Components
