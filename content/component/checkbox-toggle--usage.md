---
title: "Checkbox Toggle"
slug: "checkbox-toggle--usage"
category: "component"
parent: "checkbox-toggle"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-checkbox-toggle--base)

## Overview

* Checkbox toggle enables you to switch settings between two binary states, such as enabling or disabling features.
* It’s commonly used for user preferences, feature settings, or workflows.
* It's easy to use. You get instant feedback, so you know right away if a feature is on or off.

## Usage

The checkbox toggle is ideally suited for selecting one of two mutually exclusive states, such as activating or deactivating a feature. It’s commonly used in setting up Salesforce products, allowing users to consider their preferences or actions, such as enabling notifications or adjusting workflow automation settings.

### Best Practices

* Always label the toggle so the user understands the action they’re taking.
* Use toggles for settings that take effect immediately.
* When a toggle is activated, give users immediate feedback to show if the action was successful.
* Make the component accessible for keyboard navigation and screen readers.

### When Not to Use

* For actions involving more than two options, use other methods instead of a toggle switch.
* Avoid using toggles for actions that require confirmation or have significant consequences.
* Don’t use toggles to make a selection that is better suited for radio buttons, checkboxes, or picklists. 
* Don’t use toggles for irreversible actions (for example, deleting records).

Here are two examples of a checkbox toggle. One is toggled to the active position, and the other is toggled to inactive.

![default](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/e861b2d7e2888f964a768f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e31116eb8d7a3aa24d0a5ae42154ed542eb90d01d1c61fa45985f4ec15d3fda2)

**default**

---

![inactive](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/9d31c452ded1b95b418c62?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=adc4b700eddfec22c851be57aeaddb416083a77514e9e6454d9f6785c0e42e7a)

**inactive**

---

## Types

| **Base Toggle**  The default toggle used for binary options.  |  ![on](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/2d3e2f59d3d9fa5475fb36?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8370367c39108624d070e365346d17cb30a9ee2b36b26c8d6b5f0d40d6b697fa) **on** *A Checkbox toggle that is enabled with a state label.*  |
| --- | :---: |
|   |   |

## Appearance

The checkbox toggle aligns with the Salesforce Lightning Design System. It's easy to use, and you'll understand what it does right away.

### Anatomy

![Checkbox Toggle Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/6cfa4ebe0dca1ada29de6a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e173a8ef7e19aad60e7a3a527e97d12c05c2b5eb144bca4c574a48c4ca55166b)

**Checkbox Toggle Anatomy**

---

A checkbox toggle is made up of two primary sections (Handle and Track) with various elements that support usability and accessibility:

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=69b9cad14e962ff35b22e957eb550d702f376256c5afdfbf516a9393a59c13b8)  | **Handle:** The circular switch that moves to indicate the current state.  |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=94d533d1b969bda949a5ec62d4f38d9c4d0337bd28df50c3511c851988be16d4)  | **Track:** The background line that the handle moves along.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f1e7f666d53926ca0d300831c140241e716595ecb9f585ce5679e9a0ae7b29f6)  | **Check:** The icon indicates the active state.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b1100c1035486ce70c5111a51fcd0756c5139cf65fa80091f85667c16f1d18f4)  | **Field Label:** A text label indicating the purpose of the toggle.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=63570aebe21f61352ce539f84ec3b5b0eeb2dd72b69d728aaa387f1b637ab2e2)  | **State Label:** Label identifying the switch state. *(optional)*  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e1092dcf85c2c6e805a0cd6439a5b10b74a96d24cb7b271d33e1810c2123114d)  | **Required:** An asterisk (*) signifies a required selection when the conditions apply.  |

### Customization Options

#### **State Labels**

State labels are optional and help users understand whether the toggle is active or inactive, as a complement to the handle position. Unlike field labels, state labels aren't a requirement for accessibility standards. The state label is meant to reflect binary pairs like On/Off, Active/Inactive, or Enabled/Disabled. 

### Size

| **Desktop** 48x24px for desktop browsers.  | ![desktop](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/43e2d7d8150595c3a800cf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=238e750b18152990d2b3b34724afbdd3e304586ef35e86214029a876d07a4979) **desktop**   |
| --- | --- |
| **Mobile** On mobile devices, checkbox toggles feature larger label text for touch interactions. This change automatically applies in Salesforce native mobile apps without requiring code modifications, as it activates with the secondary touch style sheet.  |  ![mobile](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/25240b17921dd7b31c8330?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ee818cc96205deaa50677673eecf15a64e944638875385a3ab4172be7c6aa580) **mobile**  |

### Layout

Make sure there’s sufficient space around the toggle to prevent accidental activation. In mobile views, toggles don’t change in size—only the label size increases.

### Position

Place toggles where a user expects binary actions, such as in settings menus or at the end of rows in a list.

### UI Content

#### **Field Labels**

* Use clear, descriptive names that stand on their own. For example, use "Enable Notifications" instead of "Notifications," because the first example clearly describes what the button does when you click it.
* Aim for concise labels—one or two words if possible.
* Use title case. Capitalize the main words, for example “First Name” and “Phone Number”.

## Behaviors

### States

![checkbox_toggle - States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/f90bfe9dcc5ebea1ed682b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c23c334580cffbb52d29fd86cedc5bbae2e2c192c29b18198ddf712633160cbf)

**checkbox_toggle - States**

---

1. **Default:** The toggle is in an active state or “on”.
2. **Hover:** When you hover over it, the toggle slightly changes its appearance to show that it’s interactive.
3. **Inactive:** Represents the inactive state or “off”.
4. **Disabled + Inactive:** The toggle appears darker gray and inactive when it’s unavailable for interaction.
5. **Disabled + Active:** The toggle appears darker gray and active when it's not available for interaction.
6. **Focus:** When the toggle is focused using keyboard navigation, it's highlighted. Focus is applied to both inactive and active states.

### Interactions

* **Click:** The toggle switches between the active and inactive states.
* **Touch:** On mobile, the toggle responds to touch gestures.
* **Keyboard**: Users can toggle between active and inactive states using Enter or the spacebar.

### Loading

If the action associated with the toggle takes time to complete, a spinner or loading animation is displayed after activating the toggle.

![loading](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/3d37b9dcbba3e63754d6d0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042800Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3191a6d29bd7b86672c5331baecab503b4800889036af59d814e42e9fe1f8215)

**loading**

---

## Related Components
