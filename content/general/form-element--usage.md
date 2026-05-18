---
title: "Form Element"
slug: "form-element--usage"
category: "general"
url: "/component/form-element/b/76ea32"
extractedAt: "2026-02-21T21:49:37.667Z"
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--base)

## Overview

Form elements should be used whenever user input is required within a Salesforce interface. This ensures that data entry is clear, easy to use, and visually consistent. Implement form elements according to best practices to optimize user experience and adhere to accessibility guidelines.

* A form element wraps around an input field or other form control to provide structure and supporting elements like labels, help text, and validation.
* Used to organize form fields for better user interaction and a consistent design language.
* Ensures consistency and accessibility across various interfaces by standardizing the way forms are laid out.
* There are many types of input elements that can be used in the form element, including inputs, text areas, checkboxes, and radio buttons. 

### Best Practices

* Group related fields to help users understand the context.
* Display validation/feedback messages and tooltips that are straightforward and supportive.
* Ensure form elements adapt to various screen sizes for a seamless experience on any device.

### When Not to Use

* Avoid using too many fields in a single form without grouping, which can overwhelm users.
* Don’t overcomplicate with custom interactions that diverge from familiar usage.

## Types

Form element provides a standardized structure to ensure accessibility, responsiveness, and alignment within forms. Form elements include a field label, input component (see below), helptext, required signifier, and supporting text/validation feedback.The form element can accept the following input components. Visit the individual component pages for in-depth details of their specific states and visuals.

* Button
* Checkbox 
* Checkbox Button
* Checkbox Toggle
* Combobox
* Datepicker
* Datetime Picker
* File Selector
* Input (Types: email, password, telephone, url, number, text, search)
* Textarea
* Timepicker
* Radio Group

## Appearance

### Anatomy

![Default](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/8fb7ac9a0ed234c79306de?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e6ad632a7ecdf7147b16500af11cf7975fc03d1611db5b6184de498c866c7e2b)

**Default**

---

![Error](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/6743d1a85cf495dcc78a02?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=41ca278ef2106b7fbf06a79a750135c83738a4812db55006f594956c1b41f713)

**Error**

---

![Read Only](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/8204dfd9e03e8a6b6b17d6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=87069bdb85c1e3178925796a6f8de03ff5054e09d8bc7b8a30e4642d1ac2c1de)

**Read Only**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f9581230324042560720ba313d7792e4cc5d106f200a5919a6808ec21243b142) | **Required Asterisk:** Communicates that the input is required and triggers validation upon form submission.  |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=45f362bc26f13fad28a1327b236d28335779a9804bd8c4bd23eadc38433a7476) | **Field Label**: Describes the purpose of the input field.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a82623fd9bad546b9837439b0dfd2fdb5375292ee48d22528cfab25a3ff8bd60) | **Helptext Icon:** Triggers a tooltip to provide the user with additional information.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=23b5c6909a830600e7386ca5ca7bc0e4271e82b6f2f9001ecf6d0fe0505d13b3) | **Input Component**: The main area where users type or select their data.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3182229467b79f8b3e40631e8794b411612a32d022d895783924688a54ef97ee) | **Supporting Text:** Provides additional guidance or contextual information. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8550a27de0b1111c693470bc6bccca0dc9b5974700b69d6d9e02cc66e3182b4a) | **Validation Message**: Displays errors or confirmation messages after user action. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/cM-55qOHVuujqwLpst-qXA.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=79f58555519e2598d8856c563f35512d73419ca37059b31e1344d6c93e04a902) | **Static input component**: Read-only version of the input component. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/7W2nS2L6Q1S190_f3tU1eg.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042754Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=dbb229618f224b3038d1435eb52e8996f65d4cc0dbda52e4751879b9e9357b91) | **Edit Icon**: Displayed if inline edit is enabled. |

### Layout

#### **Stacked Layout**

Labels are placed above the input fields.

* **Benefits**: Improves vertical scanning, making it easier for users to move from field to field.
* **Best Used For**: Mobile screens or forms where space is limited.
* **Considerations**: Increases vertical space usage, so it might not be ideal for compact interfaces.

To vertically stack `<label>` and `<input>` pairs, place `slds-form-element_stacked` on the div with the class of `slds-form-element` for optimal spacing.

### Stacked

[Stacked](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--stacked)

#### **Default Horizontal Layout**

Labels are placed to the left of the input fields.

* **Benefits**: Reduces the vertical space used and aligns with standard reading patterns (left to right).
* **Best Used For**: Forms on wider screens or desktop applications where space allows side-by-side elements.
* **Considerations**: May cause issues on smaller screens if not properly adapted.

To horizontally align a `<label>` and `<input>`, use the `slds-form-element_horizontal` class on the div with the class of `slds-form-element`. The `slds-form-element__label` takes up 33% of the width, and the `slds-form-element__control` uses the remaining 66%.

[Horizontal](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--horizontal)

#### **Horizontal Single Column Support**

When using `slds-form-element_horizontal`, you might find that the 33/66% distribution of the label to control might be too much in a single column form when displayed in a larger region. Another scenario where single column support would be useful is when a form element spans 100% while the other form elements in your form are 50/50 split. To reduce the distribution and/or align with 50/50 split form elements, adding the class `slds-form-element_1-col` to `slds-form-element` will re-distribute the layout.

### Horizontal

[Horizontal](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--horizontal)

#### **Compound Layout**

Form fields are grouped under a fieldset (group) label.

* **Benefits**: Helps users understand related inputs by visually organizing sections.
* **Best Used For**: Long forms that require input in multiple categories (e.g., personal information, payment details).
* **Considerations**: Keep groups logically consistent to avoid user confusion.

The compound form should be implemented as a `<fieldset>`, where the fieldset label is implemented as a `<legend>` element.

The `<fieldset>` requires the class `slds-form-element_compound`. This class handles the layout and wrapping of the form elements that are grouped together.

The `<legend>` element requires the class `slds-form-element__legend`. Legend elements can only accept a limited amount of CSS properties so this class is there to help manage its layout.

[Single Column Support With 50 Split](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--single-column-support-with-50-split)

#### **Rows**

Each row of a compound field should be wrapped in a `<div>` with the class `slds-form-element__row`. Each field inside of a compound row can be explicitly sized by using a sizing class. `slds-size_1-of-2`.

[Compound Row](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--compound-row)

#### **Address**

Though an address form is utilizing the `slds-form-element_compound` class, we need to also add the `slds-form-element_address` class to the component. We modify some of the behavior of an address form with this class.

[Compound Address](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--compound-address)

#### **Record Form **

Use the `lightning-record-form` component to quickly create forms to add, view, or update a record.

Using this component to create record forms is easier than building forms manually with `lightning-record-edit-form` or `lightning-record-view-form`. The lightning-record-form component provides these helpful features:

* Switches between view and edit modes automatically when the user begins editing a field in a view form
* Provides Cancel and Save buttons automatically in edit forms
* Uses the object's default record layout with support for multiple columns
* Loads all fields in the object's compact or full layout, or only the fields you specify

However, `lightning-record-form` is less customizable. To customize the form layout or provide custom rendering of record data, use `lightning-record-edit-form` (add or update a record) and `lightning-record-view-form` (view a record).

[Record Form View Mode Stacked](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--record-form-view-mode-stacked)

## Behavior

### Conditions

#### **View Mode**

Displays the form in a static, non-editable, state.

[View Mode](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--view-mode)

#### **Inline Edit**

Applies a button icon to switch the input out of view mode so it is editable

[Inline Edit](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--inline-edit)

#### **Required**

Field label is marked with a red asterisk. Makes the input field required before submitting

[Required](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--required)

#### **Error**

Provides feedback when an error occurs while submitting a form by highlighting the input and providing supporting text below the component.

[Error](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--error)

#### **Helptext Icon**

Displays a help icon next to the field label, which triggers a tooltip on hover.

[With Help Text Icon](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-form-element--with-help-text-icon)

### Validation Feedback

* Shows when input is incorrect. You’ll see:
    * A red border around the field.
    * An error message under the field, like “Enter a valid email.”

* Error messages should tell users exactly what’s wrong and how to fix it.
* Consider adding an error or warning icon to your validation messages so everyone, even those with color blindness, can better understand the feedback.


## Related Components
