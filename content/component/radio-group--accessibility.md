---
title: "Radio Group - Accessibility"
slug: "radio-group--accessibility"
category: "component"
order: 0
---

## Interactions

### Mouse

- Users can interact with radio buttons using a mouse by clicking the radio button or its label.

### Keyboard

- **Tab:** Navigate into and out of radio groups.
- **Arrow keys:** Move through available options, automatically selecting the newly focused item.
- **Spacebar:** Used to select an option.

## Design Considerations

- Designers ensure that radio buttons are large enough to be easily clickable and have sufficient contrast against the background.

## Development Considerations

- Groups of radio buttons should be marked up using the `fieldset` and `legend` element. This helps someone using assistive technology to understand the question they're answering with the group of radio buttons. The `fieldset` is placed around the whole group and the legend contains the question.
- Custom radio buttons are created by applying the `.slds-radio` class to a `<label>` element. To remain accessible to all user agents, place an `<input>` with `type="radio"` inside the `<label>` element. The `<input>` is then visually hidden, and the styling is placed on a span with the `.slds-radio_faux` class. The styling of the span changes based on whether the radio button is selected or focused by using a pseudo-element. A second span with `.slds-form-element__label` contains the label text.
- When a radio group is required, the `<fieldset>` should receive the class `.slds-is-required`. The `<legend>` should then get `<abbr class="required" title="required">*</abbr>` added to the DOM for visual indication that the radio group is required.
- When disabling a radio button, either the entire group must be disabled or if only some radio buttons are disabled, then the checked radio button cannot be disabled.

## Content Considerations

- Ensure content for radio buttons is concise and descriptive, providing clear choices for users.
- All radio groups marked as required with an * must have an accompanying legend.

**Example:** * denotes a required field

**Example:** * denotes a required field

## Accessibility Labels

- Ensure that each radio button has an accessible name and that the group label provides context for the options.

## Internationalization

- Ensure that radio button labels and group labels are translatable and adapt to different languages and text directions.
