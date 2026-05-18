---
title: "Radio Group - Usage"
slug: "radio-group--usage"
category: "component"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-radio-group--base)

## Overview

* The radio group presents a set of options and allows only one option to be selected at a time.
* Consists of a group of radio buttons aligned vertically.
* Users can choose a single option from multiple choices.
* Often used in forms, surveys, and other situations where a user must choose one option from a list.

## Usage

### Best Practices

* Give each radio button a descriptive label to clearly state what it represents.
* Always include a label for the group to provide context about what's being selected.
* Pre-select the option that users are likely to choose. If you're not sure which option they'll prefer, pre-select the first one in the list. 

### When Not to Use

* Don't use a radio group if the user can select more than one option. 
* Avoid using radio groups if the options aren’t mutually exclusive.
* If options must change frequently or dynamically, consider using a picklist instead.
* When there are a lot of options in a list, such as a list of US states, it can be difficult for users to scroll or adjust their view to see all the options. For these situations, consider using a different component, such as a [picklist](https://v1.lightningdesignsystem.com/components/picklist/).

## Appearance

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/75a754a25526b4c36b260b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042750Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ea69020ebd7ccfb6a7671d8822c6ae971372469d1792058e23a06fee0a0cc2ab)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042750Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=931e19569665e73215103d246d99132cc5800c057bd17ffb80528d297077a2c0) | **Group Label:** Gives context for the options provided by the group of radio buttons. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042750Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a6cec8902c4e1a1a7b8098d16a49454510e9751ffdda54230405297c0c5dfa1c) | **Radio Button:** Circular element that indicates if an option is selected or unselected. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042750Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d93cae3a27de31e954b288fe7d856a9ba768e57e35560723a8643d3a4f7c76c7) | **Label:** Description of the option. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042750Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9ce33bc08e82414087505ed1e27ae1a93d8d0292017a765c87306f877364ef93) | **Supporting Text:** Provides extra guidance or validation messages for the entire group or specific options. |

### Layout

Arrange radio buttons vertically, with enough padding between each option to prevent selection errors. The radio group component has the layout and default spacing built-in.

![RTL](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/0477b976bca1f2a60e4bdb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042750Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7458722b63746e537de907d560f9fd2264fd0b66170c8fe7dc45f5e9be977599)

**RTL**

---

### UI Content

* Use the same text style for each item in a list.

* Keep radio button labels short and clear. This makes them easy to read and helps users quickly make a choice. Use 1–3 words per label.
* If more explanation is needed, describe what happens from the user’s perspective.
* Start with a verb that describes what the option does. Don't use “enable” or “activate”.
* Use sentence capitalization in the labels for these UI elements. No end punctuation.

## Behaviors

### States

![States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/99b215241316e58d85e835?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042750Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=21c68d9459f2af4158687146549e2fd3e7e3265a2912621e9e33032cd791fa3e)

**States**

---

1. **Default**: The initial state before user interaction.
2. **Selected**: Indicates the current selection within the group.
3. **Focus:** Highlights the radio button when the user navigates through the set using a keyboard. For this component, selection follows focus—when an item is in focus, it's also selected.
4. **Error:** Indicates a problem by highlighting the options in pink and displaying an error message to inform the user that a selection is required or invalid.
5. **Disabled:** Displays radio buttons in light gray and non-interactive, indicating that the user can't select or change any of the options.

### Interactions

Users can make a selection by clicking, pressing a key, or tapping either the radio button or its label.

### Position

Group radio buttons together near the related content or questions. This placement makes it easier for users to navigate through the content.

### Size

Radio buttons are adaptive—they're mobile-friendly and adjust to different screen sizes. On touch devices, they increase in size for easier tapping.

### Default Selection

To streamline the user experience, pre-select an option if a likely choice is clear.

### Validation

Error states are visually indicated with a red border around the radio buttons and an error message below the radio group, helping users quickly identify and correct the issue.

![Error - validation](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/bb931a1afd88843367f32a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042750Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=957376c2507f234430c8ffd2f0836155ebd0c72ede28247d4f1bb5c37b4d5738)

**Error - validation**

---

## Related Components
