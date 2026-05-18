---
title: "Rich Text Editor"
slug: "rich-text-editor--usage"
category: "component"
parent: "rich-text-editor"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-rich-text-editor--base)

## Overview

Use the rich text editor to enable users to create text input and format it with advanced styling options. It’s ideal for creating clear and engaging content, such as knowledge articles, emails, or detailed descriptions in records.

* The rich text editor provides users with a customizable toolbar to apply formatting to text in Salesforce products.
* Often used in components like email composers, knowledge article editors, and custom forms.
* Enhances efficiency by enabling users to format text input directly in the user interface.

## Usage

### Best Practices

* Use the rich text editor for tasks that require formatted text.
* Keep the toolbar simple. Include only the features that are necessary for the user’s tasks.

### When Not to Use

* Avoid using the rich text editor for simple text inputs where formatting isn’t required.
* Don’t include it in workflows where plain text or structured fields are more appropriate.

## Types

| **Base**  A content editor with formatting options such as bold, italic, underline, and lists. Can also include options for inserting images, tables, and hyperlinks, suitable for use cases like knowledge articles or marketing emails. | ![base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/eeb4032202aeb3de1a288b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3d07b3af734131da9ae212e1b4e15d92d7633ca4bfa6a12de3036b85a5444d70) **base** |
| --- | :---: |

## Appearance

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/da864e02f3262b0c7ca004?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=03a0e205f9ae3ac24a4411a8af95f12b2cdc79e209a12960c89836848078c164)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3c60e1e15ccb72f29431cbcba9c0466aa29446c13fc7d0c9414b891c300b26a6) | **Field Label:**  Describes the purpose of the rich text editor. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c12018f9fab60e96ed7471637b9cc3f99d1d911822cc6a1f7ca230dc3d6c9ac5) | **Toolbar:** Provides formatting controls and editing actions for rich text content.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5b88e4d3f406e852f31d097c187dded3f2047d2dd88c61b3d0734cfc9ec62294) | **Placeholder Text:** Optional text for a hint or example to guide the user to enter appropriate input.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=178f444e330d31114aa94d8c0364240332cd414494fe0a16057afa624cf5e283) | **Content Area:** The editable region where users enter and format rich text.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fe9d4308c1d952b96c50904c059cee63de2bdc8423802e2fb184fd7554c967ea) | **Supporting Text:** Offers additional guidance or contextual information such as the character limit, or displays errors or confirmation messages after user action.  |

### Customization Options

* Custom styling can be added.
* Add or remove toolbar options based on use case needs.
* See the [Component Reference](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-rich-text/documentation#:~:text=Customizing%20the%20Toolbar) to customize the toolbar menus and buttons by adding and removing specific feature categories.
* Custom buttons can be added to the rich text editor. Custom buttons are contained in a button group that displays at the end of the toolbar.


### Size

* Supports fluid width and responsive behavior.
* Minimum recommended width is 300px to make the editor easy to use.
* Make sure the editor fits correctly in containers.

### Layout

* Maintain consistent padding around the editor.
* Align the toolbar and content area to match the page’s visual hierarchy.
* Toolbar can appear at either the top or bottom of the content area.

![layout-1](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/d7b76ca35d7c13932b7ffc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3a18f549d5ca2c86195f20757779424f1d917aab832706d918f750d9b2f47684)

**layout-1**

---

![layout -2](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/c6ae840d1d8ee8d9955bb7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0a05730350bd220744b8c23c016513e1d44c05635e4ddef78f5cdae1503f16f2)

**layout -2**

---

### UI Content

* Limit character count if the editor is used in constrained spaces.
* Use line spacing and font sizes that improve readability.

## Behaviors

### States

1. **Default:** The initial state before user interaction. Include placeholder content to guide users if needed.
2. **Focus**: Highlights the input field when it receives focus.
3. **Error:** Shows an error message when input data fails validation criteria. It’s recommended to add an error icon to your error message.
4. **Disabled:** Color changes to light gray to show it’s not usable and the field doesn't receive focus.

### Interactions

* **Click**: Activates the toolbar or applies formatting.
* **Keyboard shortcuts**: Supports standard shortcuts, such as Ctrl+B for bold and so on.

### Position

* Place the editor close to the context of use, such as below a title or subject field.
* Avoid separating the editor from related components.

### Responsive

The toolbar adjusts its layout for smaller screens.

### Default Selection

Placeholder text, such as "Start typing..." appears in the content area by default.

### Validation

Input validation isn't built-in—your component must provide logic. Use best practices such as validating required fields on form submission, and showing inline error messages for unsupported content.

## Related Components
