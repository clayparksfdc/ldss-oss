---
title: "Checkbox"
slug: "checkbox--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/980561-checkbox/b/74d5d4"
extractedAt: "2026-02-21T21:46:29.140Z"
---

## Interactions

### Mouse

Click toggles the selected state.

### Keyboard

Selection can be toggled using the spacebar when focused.

### Other

Works with assistive devices like screen readers and sip-and-puff devices, which announce the checkbox label and state.

## Design Considerations

- Designers should ensure checkbox labels are clear, short, and easy to understand, with adequate space around each checkbox for easy navigation.
- When deviating from the standard checkbox styling hooks, ensure proper contrast ratios for readability.

Designers should ensure checkbox labels are clear, short, and easy to understand, with adequate space around each checkbox for easy navigation.

When deviating from the standard checkbox styling hooks, ensure proper contrast ratios for readability.

## Development Considerations

- Groups of checkboxes should be marked up using the `fieldset` and `legend` element. This helps someone using assistive technology to understand the question they're answering with the group of checkboxes. The fieldset is placed around the whole group and the legend contains the question.
- Custom checkboxes are created by applying the `.slds-checkbox class` to a `<label>` element. To remain accessible to all user agents, place `<input>` with `type="checkbox"` inside the `<label>` element. The `<input>` is then visually hidden, and the styling is placed on a span with the `.slds-checkbox_faux` class. The styling of the span changes based on whether the checkbox is selected or focused by using a pseudo-element. A second span with `.slds-form-element__label` contains the label text.
- When a single checkbox is required, `<div class="slds-checkbox">` should get `<abbr class="required" title="required">*</abbr>` added to the DOM, directly before the `<input type="checkbox" />` for visual indication that the checkbox is required.
- When a checkbox group is required, the `<fieldset>` should receive the class `.slds-is-required`. The <legend> should then get `<abbr class="required" title="required">*</abbr>` added to the DOM for visual indication that the checkbox group is required.
- As SLDS checkboxes rely on the `:checked` pseudo selector, and the indeterminate state is only accessible via JavaScript, the use of a CSS class on the input will be necessary to implement this in SLDS. Use JavaScript to add the class when the indeterminate property is set to true on the input.

Groups of checkboxes should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they're answering with the group of checkboxes. The fieldset is placed around the whole group and the legend contains the question.

Custom checkboxes are created by applying the .slds-checkbox class to a  element. To remain accessible to all user agents, place  with type="checkbox" inside the  element. The  is then visually hidden, and the styling is placed on a span with the .slds-checkbox_faux class. The styling of the span changes based on whether the checkbox is selected or focused by using a pseudo-element. A second span with .slds-form-element__label contains the label text.

When a single checkbox is required,  should get * added to the DOM, directly before the  for visual indication that the checkbox is required.

When a checkbox group is required, the  should receive the class .slds-is-required. The  should then get * added to the DOM for visual indication that the checkbox group is required.

As SLDS checkboxes rely on the :checked pseudo selector, and the indeterminate state is only accessible via JavaScript, the use of a CSS class on the input will be necessary to implement this in SLDS. Use JavaScript to add the class when the indeterminate property is set to true on the input.

## Content Considerations

- Each checkbox requires a clear label. Avoid using only icons without explanatory text.
- All checkboxes marked as required with an * must have an accompanying legend.

**Example:** * denotes a required field

Each checkbox requires a clear label. Avoid using only icons without explanatory text.

All checkboxes marked as required with an * must have an accompanying legend.

Example: * denotes a required field

## Internationalization

Support multi-language labels and left-to-right or right-to-left alignment based on locale settings.

