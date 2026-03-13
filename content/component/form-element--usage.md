---
title: "Form Element"
slug: "form-element--usage"
category: "component"
parent: "form-element"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--base
title: Form Element - Base
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--stacked
title: Form Element - Stacked
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--horizontal
title: Form Element - Horizontal
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--horizontal
title: Form Element - Horizontal
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--single-column-support-with-50-split
title: Form Element - Single Column Support With 50 Split
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--compound-row
title: Form Element - Compound Row
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--compound-address
title: Form Element - Compound Address
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--record-form-view-mode-stacked
title: Form Element - Record Form View Mode Stacked
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--view-mode
title: Form Element - View Mode
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--inline-edit
title: Form Element - Inline Edit
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--required
title: Form Element - Required
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--error
title: Form Element - Error
height: 400px
```

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--with-help-text-icon
title: Form Element - With Help Text Icon
height: 400px
```

## Overview

Form elements should be used whenever user input is required within a Salesforce interface. This ensures that data entry is clear, easy to use, and visually consistent. Implement form elements according to best practices to optimize user experience and adhere to accessibility guidelines.

- A form element wraps around an input field or other form control to provide structure and supporting elements like labels, help text, and validation.
- Used to organize form fields for better user interaction and a consistent design language.
- Ensures consistency and accessibility across various interfaces by standardizing the way forms are laid out.
- There are many types of input elements that can be used in the form element, including inputs, text areas, checkboxes, and radio buttons.

### Best Practices

- Group related fields to help users understand the context.
- Display validation/feedback messages and tooltips that are straightforward and supportive.
- Ensure form elements adapt to various screen sizes for a seamless experience on any device.

### When Not to Use

- Avoid using too many fields in a single form without grouping, which can overwhelm users.
- Don’t overcomplicate with custom interactions that diverge from familiar usage.

## Types

Form element provides a standardized structure to ensure accessibility, responsiveness, and alignment within forms. Form elements include a field label, input component (see below), helptext, required signifier, and supporting text/validation feedback.

The form element can accept the following input components. Visit the individual component pages for in-depth details of their specific states and visuals.

- Button
- Checkbox
- Checkbox Button
- Checkbox Toggle
- Combobox
- Datepicker
- Datetime Picker
- File Selector
- Input (Types: email, password, telephone, url, number, text, search)
- Textarea
- Timepicker
- Radio Group

## Appearance

### Anatomy


| *                                *  | **Required Asterisk:**Communicates that the input is required and triggers validation upon form submission. |
| --- | --- |
| *                                *  | **Field Label**: Describes the purpose of the input field. |
| *                                *  | **Helptext Icon:**Triggers a tooltip to provide the user with additional information. |
| *                                *  | **Input Component**: The main area where users type or select their data. |
| *                                *  | **Supporting Text:**Provides additional guidance or contextual information. |
| *                                *  | **Validation Message**: Displays errors or confirmation messages after user action. |
| *                                *  | **Static input component**: Read-only version of the input component. |
| *                                *  | **Edit Icon**: Displayed if inline edit is enabled. |

### Layout

#### Stacked Layout

Labels are placed above the input fields.

- **Benefits**: Improves vertical scanning, making it easier for users to move from field to field.
- **Best Used For**: Mobile screens or forms where space is limited.
- **Considerations**: Increases vertical space usage, so it might not be ideal for compact interfaces.

To vertically stack `<label>` and `<input>` pairs, place `slds-form-element_stacked` on the div with the class of `slds-form-element` for optimal spacing.

### Stacked

#### Default Horizontal Layout

Labels are placed to the left of the input fields.

- **Benefits**: Reduces the vertical space used and aligns with standard reading patterns (left to right).
- **Best Used For**: Forms on wider screens or desktop applications where space allows side-by-side elements.
- **Considerations**: May cause issues on smaller screens if not properly adapted.

To horizontally align a `<label>` and `<input>`, use the `slds-form-element_horizontal` class on the div with the class of `slds-form-element`. The `slds-form-element__label` takes up 33% of the width, and the `slds-form-element__control` uses the remaining 66%.

#### Horizontal Single Column Support

When using `slds-form-element_horizontal`, you might find that the 33/66% distribution of the label to control might be too much in a single column form when displayed in a larger region. Another scenario where single column support would be useful is when a form element spans 100% while the other form elements in your form are 50/50 split. To reduce the distribution and/or align with 50/50 split form elements, adding the class `slds-form-element_1-col` to `slds-form-element` will re-distribute the layout.

### Horizontal

#### Compound Layout

Form fields are grouped under a fieldset (group) label.

- **Benefits**: Helps users understand related inputs by visually organizing sections.
- **Best Used For**: Long forms that require input in multiple categories (e.g., personal information, payment details).
- **Considerations**: Keep groups logically consistent to avoid user confusion.

The compound form should be implemented as a `<fieldset>`, where the fieldset label is implemented as a `<legend>` element.

The `<fieldset>` requires the class` slds-form-element_compound`. This class handles the layout and wrapping of the form elements that are grouped together.

The `<legend>` element requires the class `slds-form-element__legend`. Legend elements can only accept a limited amount of CSS properties so this class is there to help manage its layout.

#### Rows

Each row of a compound field should be wrapped in a `<div>` with the class `slds-form-element__row`. Each field inside of a compound row can be explicitly sized by using a sizing class. `slds-size_1-of-2`.

#### Address

Though an address form is utilizing the `slds-form-element_compound` class, we need to also add the `slds-form-element_address` class to the component. We modify some of the behavior of an address form with this class.

#### Record Form

Use the `lightning-record-form` component to quickly create forms to add, view, or update a record.

Using this component to create record forms is easier than building forms manually with `lightning-record-edit-form` or `lightning-record-view-form`. The lightning-record-form component provides these helpful features:

- Switches between view and edit modes automatically when the user begins editing a field in a view form
- Provides Cancel and Save buttons automatically in edit forms
- Uses the object's default record layout with support for multiple columns
- Loads all fields in the object's compact or full layout, or only the fields you specify

However, `lightning-record-form` is less customizable. To customize the form layout or provide custom rendering of record data, use `lightning-record-edit-form` (add or update a record) and `lightning-record-view-form` (view a record).

## Behavior

### Conditions

#### View Mode

Displays the form in a static, non-editable, state.

#### Inline Edit

Applies a button icon to switch the input out of view mode so it is editable

Field label is marked with a red asterisk. Makes the input field required before submitting

#### Error

Provides feedback when an error occurs while submitting a form by highlighting the input and providing supporting text below the component.

Displays a help icon next to the field label, which triggers a tooltip on hover.

### Validation Feedback

- Shows when input is incorrect. You’ll see:

A red border around the field.
- An error message under the field, like “Enter a valid email.”

- A red border around the field.
- An error message under the field, like “Enter a valid email.”

- Error messages should tell users exactly what’s wrong and how to fix it.
- Consider adding an error or warning icon to your validation messages so everyone, even those with color blindness, can better understand the feedback.

## Related Components
