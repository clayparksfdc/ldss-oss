---
title: "Radio Button Group"
slug: "radio-button-group--usage"
category: "component"
parent: "radio-button-group"
order: 0
---

[Button](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-radio-button-group--button)

## Overview

The radio button group lets users select one option from a list of predefined options. This component is ideal for situations where you want users to make a single, clear choice.

* A radio button group is a set of related options where users can only select one option at a time.
* Help users make decisions easily by presenting clear, grouped choices in a radio button group.
* Rounded buttons, each with a label, are arranged in horizontal groups.

## Usage

### Best Practices

* Use clear, concise labels for each option.
* Group related options logically.
* Keep the number of options within 3–7 to remain manageable. 
* Provide a default selection if possible.

### When Not to Use

* Don't use a radio button group when multiple selections are allowed—use a checkbox button group or checkboxes instead.
* Don't use it for binary choices—use a toggle checkbox or checkbox.

## Types

| **Default**  Displays text labels within buttons. Use when there's ample horizontal space, so that buttons align with the surrounding content.  | ![default](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/cb906432ac41efe02a0837?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042751Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=482de297cadf56e40e8722823555cb3ec2ad65d79365b208eb5421220c50c593) **default** *Default radio button group with six options.* |
| --- | :---: |
|   |   |
| **Icons**  Use icons when text isn't needed or takes up too much space.  | ![icons](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/910ae70e30f5a0669c5fc0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042751Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b7d84723e5bd05862fafc96850b4ac5a1c0c25df03f757317db3132451761401) **icons** *Icon radio button group with six options.* |
|   |   |

## Appearance

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/dbb00c9c4ddbd753febfa8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042751Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d0a3872527294137d03c67de4712057e4d8c2902123c53b62ccfc308ddd38975)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042751Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9c8cfa489244446649c420a3c842f297fe2794b828268e9e5627983ccd2f5572) | **Field Label:** Describes the purpose of the radio button group. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042751Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ac87e4e618581a51762dd091bbbb8b3712fd1bbee974a064748be9ef174bfb59) | **Buttons:** Element that indicates if an option is selected or unselected. |

### Customization Options

* `label-hidden` hides the radio group label but makes it available to assistive technology. This variant doesn't hide the button labels.
* `label-inline` horizontally aligns the label and radio group.
* `label-stacked` places the label above the radio group.
* `standard` is the default variant, which displays the radio group label above the options.

### Size

Adjusts automatically to fit any screen size.

### UI Content

* Use concise labels up to 20 characters.
* Avoid abbreviations unless they're universally understood.

## Behaviors

### States

![states](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/9c8c481d3ef9e8cd3f279a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042751Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=eb0bc73808c11d7774ad15603cf97fbe7dcd3f9808547b00f6bdeef05ffde6bb)

**states**

---

1. **Default**
2. **Hover**
3. **Active (while pressing)**
4. **Focus (selection follows focus)**
5. **Disabled**
6. **Selected**
7. **Selected + Hover**
8. **Selected + Active**
9. **Selected + Disabled**

### Interactions

* When users click a button, the button instantly updates to show it's selected. 
* Only one button can be selected at a time.

### Default Selection

Create a smooth user experience by pre-selecting the most likely option.

| **Validation**  Display error messages below the group when a required selection isn't made. Include help text for additional context. | ![error](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/4363fc0cac5808401d80fb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042751Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9583f325187c946987c5ba7bb069793c2c64ecae1f1ca525966f20b2b147cfc7) **error** *Example of error message.* |
| :--- | :---: |

## Related Components
