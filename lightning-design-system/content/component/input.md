---
title: "Input"
slug: "input"
category: "component"
order: 0
---

## Overview

- Used for collecting user data such as names, emails, and numerical entries.
- Can handle different types of data, such as text, number, date, and so on.
- Designed to be compliant with accessibility standards for user-friendly data entry.

## Usage

The input component is used across forms, data entry pages, and any interface that needs user input. It supports multiple input types, including text, number, date, and password fields, to accommodate various use cases.

### Best Practices

- To improve usability, use clear, concise labels.
- Include placeholder text for context but don’t use it as a substitute for labels.
- Use adequate spacing around the input component to make it easy to read and tap. See [form element](/component/form-element).
- Validate input data and provide immediate feedback.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-input--base
title: Input - Base
height: 400px
```

### When Not to Use

- Don't use input fields without proper labels—using placeholders by themselves can confuse users.
- Avoid long placeholder text, as users can confuse it with actual input.
- Don’t overload a form with too many inputs, as it can overwhelm the user.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-input--base
title: Input - Base
height: 400px
```

## Types


| Base  A base input field. |  |
| --- | --- |
|  |  |
| Email  An input field for entering an email address up to 80 characters. |  |
|  |  |
| Number  An input field for entering a number. Specifications can define different types of input numbers, such as phone numbers, percentages, currency, and geolocation coordinates. |  |
|  |  |
| Password  An input field for entering a password. Characters you enter are masked as you enter them. |  |
|  |  |
| Search  In-context search allows users to find content on a page without having to switch context and navigate away and use global search. Examples in the Salesforce UI of in-context search are in list views and feeds.  For more information see [In-Context Search Design Guidance](https://www.lightningdesignsystem.com/guidelines/search/in-context/#site-main-content) |  |
|  |  |
| URL  Displays a URL input field which checks for a protocol such as http:// or ftp:// . |  |

## Appearance

### Anatomy


|  | **Field Label:**Describes the purpose of the input field. |  |
| --- | --- | --- |
|  |**Input Field:** The main area where users type or select their data. |  |
|  | **Supporting Text:**Provides additional guidance or contextual information. |  |
|  |**Validation Message:** Displays a validation error if user enters invalid data. |  |

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-input--email-input
title: Input - Email Input
height: 400px
```

### Customization Options

- Hide labels if necessary, but add an aria-label for accessibility.
- To supply custom validation messages, use `messageWhen` properties.
- To help users fill out a field, use the `placeholder` attribute to provide text in the field as a hint.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-input-lbc-examples--number
title: Input - Number
height: 400px
```

### Layout

- Use the [form element](/component/form-element) component to make sure there's enough spacing between input fields.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-input-lbc-examples--password
title: Input - Password
height: 400px
```

### UI Content

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-input--search-input
title: Input - Search Input
height: 400px
```

#### Field Labels

Labels guide users by telling them what information to enter in each field.

##### Best Practices:

- Use clear, descriptive names that make sense on their own. For example, use “Email Address” instead of just “Email.”
- Aim for concise labels—one or two words if possible.
- Use title case. Capitalize the main words, for example “First Name,” “Phone Number.”
- Provide a label for every field. This helps all users identify fields correctly. If hiding labels visually, use aria-label to make sure they’re accessible for screen readers.

#### Placeholder Content

Placeholder text helps users understand what information to enter in a field.

##### Best Practices:

- Give users an example of how to fill out a field. For example, an email field can have placeholder text "john.doe@example.com".
- Placeholder text can't replace labels because it disappears when the user starts typing, which can cause confusion.
- Use placeholder text to guide but not instruct. Complex instructions belong in support text or labels.
- Placeholder text must have sufficient color contrast for readability, at least 4.5:1 for WCAG compliance.

Supporting text gives users extra guidance to help them fill out a field properly.

##### Best Practices:

- Add supporting text to clarify the field’s requirements, such as “Password must be at least 8 characters.”
- Use plain language, and keep it short. Aim for one line or a short sentence.
- Place the supporting text immediately below the input field, so it’s easy for users to spot.
- Use `aria-describedby` to connect support text with the input field so screen readers can pick it up.

#### Error Messages

Error messages help users by letting them know when they've made a mistake and guiding them on how to fix it.

##### Best Practices:

- Use error messages to clearly explain what’s wrong and how to fix it. For example, “Enter a valid email address” or “Phone number must be 10 digits.”
- Use a neutral, helpful tone—avoid blaming language.
- When possible, show error messages as soon as the user enters invalid data rather than waiting until form submission.
- Accessibility:

Use `aria-live="assertive"` to announce error messages to screen readers as soon as they appear.
- Associate error messages with the field using `aria-describedby` so screen readers understand which field the error relates to.

- Use `aria-live="assertive"` to announce error messages to screen readers as soon as they appear.
- Associate error messages with the field using `aria-describedby` so screen readers understand which field the error relates to.

## Behaviors

### States

1. **Default**: Before a user interacts with a field, it's in its initial default state. You can include some placeholder text in the field to guide users, but don't use it to replace the field label.
2. **Active/Focus**: When a user interacts with a field, the input is activated. The focus indicator appears and placeholder text disappears.
3. **Disabled**: Styled in light gray and doesn't receive focus, showing it’s not usable.
4. **Read-Only**: Displays information that has previously been entered. Read-only inputs can be edited if a nested edit button icon is present and enabled. 

Also see [form element - View Mode](/component/form-element).
5. **Error**: Shows error messages when input data fails validation criteria. It’s recommended to add an error icon to your error message.
6. **Dirty:**When an input has  unsaved changes, they have a light yellow highlight surrounding the field and label.

Also see [form element - View Mode](/component/form-element).

**Dirty:**When an input has  unsaved changes, they have a light yellow highlight surrounding the field and label.

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-input--url-input
title: Input - Url Input
height: 400px
```

### Interactions

**Click/Tap**: Focuses the input field and activates typing mode.

**Tab**: Navigates through input fields and activates them.

Validation in input fields helps ensure that the data users enter is correct and complete. This keeps data clean and makes forms easier to use.

#### Types of Validation

- **Required Fields**: Users must fill these in before submitting a form.
- **Pattern Matching**: Checks if input matches a set format, like email or phone numbers.
- **Range Checks**: For numbers, you can set minimum and maximum values.
- **Custom Rules**: Developers can add custom validation logic for specific needs.

#### Validation Feedback

- Shows when input is incorrect. You’ll see:

A red border around the field.
- An error message in red under the field, such as “Enter a valid email.”

- A red border around the field.
- An error message in red under the field, such as “Enter a valid email.”

- Error message text tells users how to fix a field that has a validation error.
- Consider adding an error or warning icon to your validation messages so everyone, even those with color blindness, can better understand the feedback.

- Don’t wait until form submission to show errors for input fields. Real-time feedback helps users fix mistakes as they go. The `lightning-input` base component automatically validates fields as the cursor leaves the field.

## Related Components
