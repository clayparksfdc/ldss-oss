---
title: "Rich Text Editor"
slug: "rich-text-editor"
category: "component"
order: 0
---

## Overview

Use the rich text editor to enable users to create text input and format it with advanced styling options. It’s ideal for creating clear and engaging content, such as knowledge articles, emails, or detailed descriptions in records.

- The rich text editor provides users with a customizable toolbar to apply formatting to text in Salesforce products.
- Often used in components like email composers, knowledge article editors, and custom forms.
- Enhances efficiency by enabling users to format text input directly in the user interface.

## Usage

### Best Practices

- Use the rich text editor for tasks that require formatted text.
- Keep the toolbar simple. Include only the features that are necessary for the user’s tasks.

### When Not to Use

- Avoid using the rich text editor for simple text inputs where formatting isn’t required.
- Don’t include it in workflows where plain text or structured fields are more appropriate.

## Types


| ### Base  A content editor with formatting options such as bold, italic, underline, and lists. Can also include options for inserting images, tables, and hyperlinks, suitable for use cases like knowledge articles or marketing emails. |  |
| --- | --- |

### Base

A content editor with formatting options such as bold, italic, underline, and lists. Can also include options for inserting images, tables, and hyperlinks, suitable for use cases like knowledge articles or marketing emails.

## Appearance

### Anatomy


| *                                * ** ** ** | **Field Label:  **Describes the purpose of the rich text editor. |
| --- | --- |
| *                                * ** ** ** | **Toolbar: **Provides formatting controls and editing actions for rich text content. |
| *                                * ** ** ** | **Placeholder Text: **Optional text for a hint or example to guide the user to enter appropriate input. |
| *                                * ** ** ** | **Content Area: **The editable region where users enter and format rich text. |
| *                                * ** ** ** | **Supporting Text: **Offers additional guidance or contextual information such as the character limit, or displays errors or confirmation messages after user action. |

**Field Label:  **Describes the purpose of the rich text editor.

**Toolbar: **Provides formatting controls and editing actions for rich text content.

**Placeholder Text: **Optional text for a hint or example to guide the user to enter appropriate input.

**Content Area: **The editable region where users enter and format rich text.

**Supporting Text: **Offers additional guidance or contextual information such as the character limit, or displays errors or confirmation messages after user action.

### Customization Options

- Custom styling can be added.
- Add or remove toolbar options based on use case needs.
- See the [Component Reference](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-rich-text/documentation#:~:text=Customizing%20the%20Toolbar) to customize the toolbar menus and buttons by adding and removing specific feature categories.
- Custom buttons can be added to the rich text editor. Custom buttons are contained in a button group that displays at the end of the toolbar.

### Size

- Supports fluid width and responsive behavior.
- Minimum recommended width is 300px to make the editor easy to use.
- Make sure the editor fits correctly in containers.

### Layout

- Maintain consistent padding around the editor.
- Align the toolbar and content area to match the page’s visual hierarchy.
- Toolbar can appear at either the top or bottom of the content area.

### UI Content

- Limit character count if the editor is used in constrained spaces.
- Use line spacing and font sizes that improve readability.

## Behaviors

### States

1. **Default:** The initial state before user interaction. Include placeholder content to guide users if needed.
2. **Focus**: Highlights the input field when it receives focus.
3. **Error:** Shows an error message when input data fails validation criteria. It’s recommended to add an error icon to your error message.
4. **Disabled: **Color changes to light gray to show it’s not usable and the field doesn't receive focus.

### Interactions

- **Click**: Activates the toolbar or applies formatting.
- **Keyboard shortcuts**: Supports standard shortcuts, such as Ctrl+B for bold and so on.

### Position

- Place the editor close to the context of use, such as below a title or subject field.
- Avoid separating the editor from related components.

### Responsive

The toolbar adjusts its layout for smaller screens.

### Default Selection

Placeholder text, such as "Start typing..." appears in the content area by default.

### Validation

Input validation isn't built-in—your component must provide logic. Use best practices such as validating required fields on form submission, and showing inline error messages for unsupported content.

## Related Components
