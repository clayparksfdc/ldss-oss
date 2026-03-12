---
title: "Pills"
slug: "pills--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/108a86-pills/b/74d5d4"
extractedAt: "2026-02-21T21:51:14.586Z"
---

## Interactions

- Only one pill can receive focus at a time.
- The remove button icon is a focusable element and click target.
### Keyboard

**Key**

**Action**

**Description**

Tab

Navigate

Moves focus to the next interactive element.

Shift + Tab

Navigate backward

Moves focus to the previous interactive element.

Enter or Space

Select

Activates either the link or the remove button icon—whichever is focused.

Delete

Remove (if enabled)

Removes the Pill without needing to click on the close icon.Key

Action

Description

Tab

Navigate

Moves focus to the next interactive element.

Shift + Tab

Navigate backward

Moves focus to the previous interactive element.

Enter or Space

Select

Activates either the link or the remove button icon—whichever is focused.

Delete

Remove (if enabled)

Removes the Pill without needing to click on the close icon.

- Ensure the pill is included in the tab order and receives focus in a logical sequence, improving navigation for users relying on keyboard interaction.
- If a pill doesn't have a link, the only focusable item is the remove button.
- The first pill in the list should receive focus initially
- Right arrow key will move focus to the next pill in the list
- Left arrow key will move focus to the previous pill in the list
- Left arrow key when on the first pill should cycle user focus to the last pill
- Right arrow key when on the last pill should cycle user focus to the first pill
- On removing of the pill, the focus should then be placed on the nearest pill:

When on the last pill, place user focus on the first pill
- When on the first pill, place user focus on the next pill
- When on the only pill, place user focus on the listbox or any input element the pill might be associated with

Ensure the pill is included in the tab order and receives focus in a logical sequence, improving navigation for users relying on keyboard interaction.

If a pill doesn't have a link, the only focusable item is the remove button.

The first pill in the list should receive focus initially

Right arrow key will move focus to the next pill in the list

Left arrow key will move focus to the previous pill in the list

Left arrow key when on the first pill should cycle user focus to the last pill

Right arrow key when on the last pill should cycle user focus to the first pill

On removing of the pill, the focus should then be placed on the nearest pill:

- When on the last pill, place user focus on the first pill
- When on the first pill, place user focus on the next pill
- When on the only pill, place user focus on the listbox or any input element the pill might be associated with
### Other

Screen Readers: Pills should have descriptive labels (e.g., aria-label) to convey purpose when read aloud by screen readers.

Alternative Input Devices: Users with devices like speech recognition or sip-and-puff devices should be able to focus on and activate pills. Labels should be clear and intuitive to aid users who may rely on voice commands.

Braille Displays: Pills with appropriate ARIA labels provide readable content to braille displays, ensuring users understand each pill’s purpose.

## Development Considerations

Developers are responsible for implementing accessible pills according to Salesforce’s design system standards. This includes:

- **Focus Management**: Ensure pills are keyboard navigable with `tabindex=0 `and that focus indicators are visible.
- **Event Listeners**: Ensure pills are clickable with both Enter and Space keys, and avoid JavaScript that overrides these default actions.
- **Responsiveness**: Make pills adaptive, resizing as needed for mobile and desktop, and ensure they’re usable across all screen sizes.
- **Assistive Technology Compatibility**: Test pills with screen readers (e.g., JAWS, NVDA) to ensure compatibility and correct label reading.
## Content Considerations

- Use sentence case on pill text.
- Keep Pill labels concise and meaningful.
- Avoid duplicative or redundant text in Pill labels and tooltips.
- Provide error messages for invalid inputs (e.g., a duplicate Pill) that are clear and accessible via screen readers.
- Include labels that clearly communicate the pill’s purpose:

When using `lightning-avatar`, use the `alternative-text` attribute to describe the avatar, such as a user's initials or name. This description provides the value for the alt attribute in the `img` HTML tag.
- When using `lightning-icon`, use the `alternative-text` attribute to describe the icon. For example, specify "Account" instead of "Pill icon". This description is used as assistive text on the pill.
- Pills should have descriptive `aria-label` attributes.

Example: For a removable Pill, use `aria-label="Remove tag 'Marketing'"` or a similar structure.
- Custom Pills may require additional labeling for unique behaviors.

Use sentence case on pill text.

Keep Pill labels concise and meaningful.

Avoid duplicative or redundant text in Pill labels and tooltips.

Provide error messages for invalid inputs (e.g., a duplicate Pill) that are clear and accessible via screen readers.

Include labels that clearly communicate the pill’s purpose:

- When using `lightning-avatar`, use the `alternative-text` attribute to describe the avatar, such as a user's initials or name. This description provides the value for the alt attribute in the `img` HTML tag.
- When using `lightning-icon`, use the `alternative-text` attribute to describe the icon. For example, specify "Account" instead of "Pill icon". This description is used as assistive text on the pill.
- Pills should have descriptive `aria-label` attributes.

Example: For a removable Pill, use `aria-label="Remove tag 'Marketing'"` or a similar structure.
- Custom Pills may require additional labeling for unique behaviors.

When using lightning-avatar, use the alternative-text attribute to describe the avatar, such as a user's initials or name. This description provides the value for the alt attribute in the img HTML tag.

When using lightning-icon, use the alternative-text attribute to describe the icon. For example, specify "Account" instead of "Pill icon". This description is used as assistive text on the pill.

Pills should have descriptive aria-label attributes.

- Example: For a removable Pill, use `aria-label="Remove tag 'Marketing'"` or a similar structure.

Example: For a removable Pill, use aria-label="Remove tag 'Marketing'" or a similar structure.

Custom Pills may require additional labeling for unique behaviors.

## Internationalization

- Support multilingual text and adapt to right-to-left (RTL) languages seamlessly.
- Dynamically resize for longer labels in languages such as German or Arabic.