---
title: "Tabs"
slug: "tabs--usage"
category: "component"
parent: "tabs"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-tabs--base)

## Overview

* Tabs organize related content into sections within a single page. This makes it easy for users to find what they need, without having to go to a different page. Users simply switch between the tabs.
* Tabs help you manage large amounts of content. They make it easy for users to focus on specific sections of content as needed.
* Available in three sizes—Default, Medium, and Large—to suit different layouts and page hierarchies.
* A tabset component contains multiple tab components.

## Usage

### Best Practices

* Organize content into clear, related sections relevant to the user’s tasks.
* Set the most important or frequently used tab as the default active tab.
* Use descriptive, concise tab labels so users know what content to expect in the tab.
* Use icons strategically to clarify your message. They're great for highlighting actions or categorizing information.
* Use an overflow menu for tabsets with too many tabs or long labels that don’t fit the available space.


| ![Usage - overflow](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/458c56b52f4baf7db262c7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=60f567483369eb1d0af0348e6f7173ef9d14d7200e71de4be4e8e5df24dff1cb) **Usage - overflow**  |
| --- |

|   |
| --- |

| Rule | Image | Caption | Description |
| :--- | :--- | :--- | :--- |
| Do | ![](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/87562c8c865ee9d6a7c695?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b1eccc97013f024368a9b1ea4f969702270c41719c8c11758cb78de73e31cf2c) |   | Do use an overflow menu instead of truncating tabs. |

### When Not to Use

* Avoid too many tabs, as they can complicate navigation.
* Limit nested tabs, which can confuse users.
* Don’t overload tabs with icons, as this creates visual clutter.
* Use buttons, not tabs, for initiating actions.
* In small spaces such as sidebars or card bodies, use scoped tabs.
* Use a progress indicator or path component for process tracking.

| Rule | Image | Caption | Description |
| :--- | :--- | :--- | :--- |
| Don't | ![](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/aa985fc5e926dac990e9f0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ca1bd9a81bef41602a856ffc05677e945860c37f9ca2b96f400608838d7671a6) |   | Don’t use more than one icon type. |
| Don't | ![](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/2b7e912ff25251514e0727?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cad047a1fec6d6e61900eabd3d00078f4f8e356b7da734f56c52387abafb51c2) |   | Don’t add additional space between tabs. |

## Types

| **Base Tabs**  Horizontal tabs display labels in a single row, with the selected tab’s content shown below. **Use Case** Use three to five tabs for related sections, providing quick access to task-critical content.  | ![Full page image](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/74e9ae9be1f0af8b3944c0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=687bac0f61b23757b530a863e879af8f0816eba816ad56584fd3edbbcf481703) **Full page image** *Base tabs example.* |
| --- | :---: |

## Appearance

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/c35dc7d25ca86bbfbca68e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=870d1fb73c98323d15756bc4fcd4198738666ff1395caa924b5b1cbebf934b94)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=313a3c5fbe1ce650644aa9f625d2fbfa180250480b1e10cdccec6eb75e7d0d95) | **Tab:** A single container within a tabset that holds related content, allowing users to switch views without navigating away. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6caf8ae9e3e87566afadb2ea591af553aff79bcfdd4d06f40c76341297fed9e0) | **Icon:** Adds a visual indicator for the tab’s purpose, placed before or after the label. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f32c3dff5b24c5554167bd7a7aa690ec26cde3ed92fca726c8305682b8a016fc) | **Label:** A concise name indicating the tab’s content. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=53524ceaea74e6f9129436c6b6811152da51556b1bb2382c994b4a766c2e6ab2) | **Tabset:** A group of tabs. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8ba685b6137d341868ca661c207d637ee6ca0e38909b0656935d2777bdea5bf1) | **Overflow Menu:** Holds additional tabs that don’t fit within the visible area.  |

### Customization Options

#### **Icons **

Use utility icons or standard object icons to differentiate tabs visually.

**Dynamic Titles** 

Update tab titles dynamically to reflect real-time changes, for example by adding “(New)” or updated counts.

**Active Default Tab**

The first tab is active by default but can be set to another tab using the `active-tab-value` property.

![Customization](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/e5b5b97d8e8136c5a71d30?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=206029aa9d1206a1de8f6bc125dc33d37e5b4dbf7f9ab01b31648de3e07ee186)

**Customization**

---

### Size

Base tabs can be set to default, medium, and large sizes using the [SLDS utility classes](https://zeroheight.com/2e1ef8501/v/0/p/1152cf-tabs/t/ea2af43e9a) to accommodate different layouts, user needs, and content requirements.  

| **Default**: The standard size supported by the tabset component. Useful for most dashboard and record page layouts. Best for smaller spaces so that tabs don't overflow.   **Medium:** Use for side panels or when you want to emphasize a section within a larger layout. Medium tabs can accommodate longer labels, but keep them brief to avoid tab overflow.**Large**: Perfect for touch devices or when users frequently switch between tabs.  | ![Sizes](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/0e87a2b221213dcbb56b17?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c369c03b579e3d4c95d8c47676f8dbeb02292cef89cf11710b02b1eeeb223e96) **Sizes**  |
| :--- | :---: |
|   |   |

### UI Content

* Use title case for labels.
* Labels clearly and concisely describe the content.
* Avoid overly general labels. If the tab content contains tasks, use actionable labels, such as “Review Contract,” “Edit Terms”.
* Tab labels don’t truncate—use an overflow menu if lengthy labels make the tabset too wide for the container.

## Behaviors

### States

![States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/notfoundfile.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a2a283fe7e5c1f22d3f895a128cac60a4e4feed234b46164b787b9d49b149da6)

**States**

---

![States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/4d3790fb4121d12839aed6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b58cc9e6e964afb1de00c1e94bb9e1c423b8fa7c24822bc5a54879cd8c5c1826)

**States**

---

1. **Default**: Tabs are inactive except for the default selected tab.
2. **Hover**: The label changes color and an underline is added to the border under the tab labels.
3. **Selected**: The active tab is highlighted with an underline and label color change.
4. **Focus**: Adds a focus indicator, an underline for the label. Focus follows selection, so the tab is also highlighted for the selected state with an underline and label color change.

### Default Selection

The first tab is active by default when the tabset loads.

### Position

Tabs appear at the top of a content area and control the content below them within the same container.

### Loading

Tabs don’t have a built-in loading state. Use a spinner or placeholder content in the tab’s content area to make  custom loading indicators. To improve performance, tab content loads only as it's needed, when the tab is activated. You can only query the content for the active and previously active tabs.

### Overflow Menu

* Don't truncate tab labels.
* Make sure tabs are visible and usable on all devices. 
* When a tabset contains more tabs than can fit in the viewport, the tabs that don't fit are moved into an overflow menu next to the last tab that fits. 
* The overflow menu replaces the last fully visible tab in the set. 
* The active tab always shows and is never moved into the overflow.

![overflow menu](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/e40dc0ec6e6998236c32e8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T183621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=05d146f199efee00932a8e48dd7606ec1ee2057cbd82f5eab5f77f7fe37c4d43)

**overflow menu**

---

### Validation

To help users quickly identify tabs with errors, display an error icon next to the tab label. Include detailed error messages within the tab content area to explain the issue. You can use inline text, tooltips, or a feedback component to display an error message.

## Related Components
