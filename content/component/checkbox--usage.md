---
title: "Checkbox"
slug: "checkbox--usage"
category: "component"
parent: "checkbox"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-checkbox--base)

## Overview

* Enables you to select and deselect individual items within a group of options or turn settings on and off.
* Commonly used in forms, settings, and filter options.
* Displays as a small box, with a checkmark appearing when selected.

## Usage

### Best Practices

* To select multiple options, use checkboxes instead of radio buttons or switches.
* If you have a long list of options, consider using a multi-select dropdown or group your options to make them easier to scan.
* Always provide clear, concise labels for each checkbox to help users understand each option.
* Align checkboxes vertically with proper spacing to avoid confusion.

### When Not to Use

* Don’t use checkboxes if only one of several options can be selected—use radio buttons instead.
* Unlike checkbox toggles, checkboxes don't retain their selection until saved or applied through a confirmation action like submitting a form.
* Avoid overwhelming users with too many checkboxes. Instead, group related options or use categories where possible.

![Different states of a checkbox](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/d1fa7207b649030870f663?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c1465b97f20350678df5d075c2dd5a176d621d29ec481037f929d68c4ccc7ed4)

**Different states of a checkbox**

---

## Appearance

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/80854459fb1dc05c246eaf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=96e19b04024d30e1b6e1dbe46b4a57112a3075c61fbf2fa7283d2f94ddeef76b)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/9P1CnPWDB0CbpM3KZRD9aQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f78e8869da35fb3a8e101cdcc7d63258721b1ac4ba2593a5457ab5e73c765a80) | **Box:** Show selection state. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/B0v97wLYjFuUeHFmOCgNnw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=17080ce787a50bdbb41df73274067ae14f6059714ee1e8a62cce8791d15a0ce8) | **Label:** Text description that defines the option.  Checkboxes can be used without a label in datatables to select the row. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/MU9c0XU1ZXRJG6eVW9g4_Q.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ead97ab3a895534ffab245d2c8ff74cb5a220a7395e0f37f98acef61a0478007) | **Required Indicator:** *(optional)* Shows that users must select an option. |

### Size

Checkboxes are adaptive and have a mobile variant with increased size for touch devices.

### Layout

Arrange checkboxes vertically, with enough padding between each option to prevent selection errors. The `lightning-checkbox-group` base component has default spacing built-in.

For languages that read right-to-left, the labels can be positioned to the left of the checkbox.

### UI Content

* Use short, actionable text for checkbox labels. This makes them easier to scan and understand. Use a label of 1 to 3 words if it makes the choice clear.
* If more explanation is needed, describe what happens from the user’s perspective (for example "Show notifications" instead of “Enable notifications”).
* Use a similar style for each item in a list.
* Start with a verb that describes what the option does instead of using “enable” or “activate”.
* Use sentence capitalization in the labels for these UI elements. No end punctuation.
* In some cases, a checkbox is used to validate a user's understanding of or acceptance of specific terms and conditions. In these cases, the checkbox label is a short sentence or even a paragraph.

## Behaviors

### States

![Checkbox States 1](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/cd3554a49689fdd7fd9fc1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=23290aa57fdac21ec290e56c9a4e06e8cc610b41ee206792f1e428826f105743)

**Checkbox States 1**

---

1. **Unselected**: The checkbox’s default state
2. **Selected:** A user's current selection within a range of options
3. **Intermediate:** Indicates a partial selection, such as when a parent checkbox controls multiple child checkboxes and some of them are selected.

![Checkbox States 2](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/84b7e6010433f542495b10?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=87a0bd728d2230fd8433b6f0236d4c9d6ec743d870b552a6deb13fbe9ed6a7e6)

**Checkbox States 2**

---

4. **Error:** Indicates an error, usually a required selection is missed.
5. **Read Only:** Shows the state of selection but can't be interacted with.
6. **Disabled:** Disabled items don't receive focus.
7. **Focus:** Displays a focus outline for keyboard users.

### Interactions

![Interaction Trigger](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/a8f90c2c992f6d57542262?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7e2913ddb5f119a9a934e1ed0f58bdbe1bdf874167d16adc09a256f8616327eb)

**Interaction Trigger**

---

### Validation

Error is the only type of validation available for checkboxes. Errors typically appear when the user attempts to save or submit the form. Here are some common situations where a checkbox displays an error state.

1. **Required Selection**: If a checkbox selection is mandatory and the user tries to continue without selecting it, an error message appears to remind them to complete this required step.
2. **Invalid Combination**: If certain checkboxes can't be selected together (for example, selecting incompatible options), an error message can help to guide the user toward valid choices.

Error states are visually indicated with a red border around the checkbox and an error message below it, helping users quickly identify and correct the issue.

![Required checkbox](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/397d28ff2f2c9a4c8041ae?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=444bcf20e18e178386cce2374fd921ede497b2ccec8ea2bf4d5838ea2dce0faf)

**Required checkbox**

---

![Checkbox error state](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/f45e4064aa9b36be866e55?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ad3fab6cfa3887cc5f2a6420ace50a064970c0fb7919cb81ce4d4b1608a1ea13)

**Checkbox error state**

---

## Related Components
