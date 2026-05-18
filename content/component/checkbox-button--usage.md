---
title: "Checkbox Button"
slug: "checkbox-button--usage"
category: "component"
url: "/component/checkbox-button/b/39205c"
extractedAt: "2026-02-21T21:46:35.307Z"
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-checkbox-button--base)

## Overview

* Used for single selections as it switches between checked and unchecked states
* When active, the button shows that it's checked by changing the icon and color.
* Primarily used for adding or removing items in a group.
* The (+) and (✓) icons depict unchecked and checked states.

## Usage

The checkbox button component in Salesforce makes it clear and easy to select options. It toggles between checked and unchecked states, and the icon changes to reflect the selection.

### Best Practices

* Ensure the checkbox button has a proper accessible name associated with it for screen readers. It should also provide keyboard focus using the Tab key and be operable using the Spacebar or Enter keys. See the Accessibility section for more details.

### When Not to Use

* Avoid using too many checkbox buttons on a single screen. Too many options can overwhelm the user.
* Don’t use checkbox buttons for anything other than a binary option. 
* When you have more than two conditions to choose from, consider using a checkbox, checkbox button group, picklist, or combobox.
* If a checkbox button involves complex choices, consider using a button or dropdown. Checkbox buttons are best suited for switching something on and off.
* Stateful button icons are also used for single actions. Unlike checkbox buttons, the icon doesn't change when selected.

## Types

| **Base Checkbox Button**  A base checkbox button is selected and unselected. **Use case:** Make it obvious what people can do and make it easy for them to take action.  |  ![standard](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/eb184501fd66eec3fe299f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042801Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ddd8449cf17103f04c9b8927c86047f59784564befa6469eb7604b2909322d25) **standard** *Checkbox button in default and pressed state.* |
| :--- | :---: |
|   |   |

## Appearance

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/b31b1a4a044fe3b12dc954?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042801Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a5c482f4d5ec94752c87b4bbcbe2420c45b9ef7d910b4f910058e98ac816e12c)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042801Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3679c83dcd78bc9524c4a9a86bb89c725ecf24515f4199e45fc05a178500a379) | **Checkbox Button Container**: Holds all checkbox buttons in a unified layout. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042801Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a90a309a4e6f07a798a617634394d5d5b94264f1f4440dfd6d3c2788525a180c) | **Button Icons**: Can display icons. |

### Customization Options

#### **Icon**

* The default (+) and (✓) icons are the only ones available for checkbox button.



### Size

The checkbox button is 32x32 pixels in the browser and resizes for mobile and tablet views.

## Behaviors

### States

![unchecked](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/b40075f0d162fef74ef793?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042801Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cc35c9344b8fc49c98c88d2e6cc8afff5e8a11be103e0861ea564c2466cfd79b)

**unchecked**

---

1. **Default:** Checkbox is unchecked.
2. **Hover:** When you  hover over the checkbox, the background color changes to show interactivity.
3. **Active:** The checkbox becomes checked when you select it.
4. **Focused:** If you use keyboard navigation to reach the checkbox, it receives focus and you can press Enter or the spacebar to activate it.
5. **Disabled:** The checkbox appears grayed out and isn't interactive.


![checked](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/4dacf909dc935add0bf68c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042801Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=feaf177a17dded981c35ca0028fdc586a4567e2256f6fe4331612bca5c8c9a7a)

**checked**

---

1. **Selected:** Check box is checked
2. **Selected + hover:** When you hover over the checked checkbox, the background changes to show  interactivity.
3. **Selected + active:** The checkbox becomes unchecked when you select it.
4. **Selected + focus:** If you use keyboard navigation to reach the checkbox, it receives focus and you can press Enter or the spacebar to activate it.
5. **Selected + disabled:** The checkbox appears grayed out and is not interactive.

## Related Components
