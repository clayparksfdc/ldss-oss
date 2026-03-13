---
title: "Button"
description: "Users should be able to interact with buttons using standard mouse actions."
category: "component"
slug: "button--accessibility"
status: "published"
lastModified: "2026-03-11"
---

## Interactions

### Mouse

- Users should be able to interact with buttons using standard mouse actions.
- Hover states provide a visual cue that indicates the button is clickable. On hover, the appearance changes and the cursor becomes a pointer (hand icon).


Users should be able to interact with buttons using standard mouse actions.

Hover states provide a visual cue that indicates the button is clickable. On hover, the appearance changes and the cursor becomes a pointer (hand icon).

### Keyboard

- **Keyboard Commands**: Buttons must be navigable and operable with the keyboard alone.<ul><li>**Tab**: Moves focus to the next interactive element on the page.</li><li>**Enter/Space**: Activates the button’s action.</li></ul>
- **Tab**: Moves focus to the next interactive element on the page.
- **Enter/Space**: Activates the button’s action.
- **Initial Focus**: Ensure the button is included in the tab order and receives focus in a logical sequence, improving navigation for users relying on keyboard interaction.


**Keyboard Commands**: Buttons must be navigable and operable with the keyboard alone.

- **Tab**: Moves focus to the next interactive element on the page.
- **Enter/Space**: Activates the button’s action.


**Tab**: Moves focus to the next interactive element on the page.

**Enter/Space**: Activates the button’s action.

**Initial Focus**: Ensure the button is included in the tab order and receives focus in a logical sequence, improving navigation for users relying on keyboard interaction.

### Other

- **Screen Readers**: Buttons should have descriptive labels (e.g., `aria-label`) to convey purpose when read aloud by screen readers.
- **Alternative Input Devices**: Users with devices like speech recognition or sip-and-puff devices should be able to focus on and activate buttons. Labels should be clear and intuitive to aid users who may rely on voice commands.
- **Braille Displays**: Buttons with appropriate ARIA labels provide readable content to braille displays, ensuring users understand each button’s purpose.


**Screen Readers**: Buttons should have descriptive labels (e.g., `aria-label`) to convey purpose when read aloud by screen readers.

**Alternative Input Devices**: Users with devices like speech recognition or sip-and-puff devices should be able to focus on and activate buttons. Labels should be clear and intuitive to aid users who may rely on voice commands.

**Braille Displays**: Buttons with appropriate ARIA labels provide readable content to braille displays, ensuring users understand each button’s purpose.

## Design Considerations

Designers must ensure that buttons are visually distinguishable and comply with color contrast standards (e.g., WCAG minimum contrast ratio of 4.5:1 for text). Key responsibilities include:

- **Focus and Hover States**: Define clear visual styles for focus and hover states, allowing users to identify interactive elements visually and with keyboard navigation.
- **Color Contrast**: Ensure that button text and background colors meet accessibility contrast requirements.
- **Consistent Layouts**: Place primary actions (e.g., Brand buttons) prominently and secondary actions less prominently to guide users visually.
- **Accessible Labels**: Include labels that clearly communicate the button’s function (e.g., “Submit Form” rather than “Submit”).


**Focus and Hover States**: Define clear visual styles for focus and hover states, allowing users to identify interactive elements visually and with keyboard navigation.

**Color Contrast**: Ensure that button text and background colors meet accessibility contrast requirements.

**Consistent Layouts**: Place primary actions (e.g., Brand buttons) prominently and secondary actions less prominently to guide users visually.

**Accessible Labels**: Include labels that clearly communicate the button’s function (e.g., “Submit Form” rather than “Submit”).

## Development Considerations

Developers are responsible for implementing accessible buttons according to Salesforce’s design system standards.

- As with all components, use semantic HTML. ARIA roles should be used sparingly.
- **Focus Management**: Ensure buttons are keyboard navigable with `tabindex=0` and that focus indicators are visible.
- **Event Listeners**: Ensure buttons are clickable with both `Enter` and `Space` keys, and avoid JavaScript that overrides these default actions.
- **Assistive Technology Compatibility**: Test buttons with screen readers (e.g., JAWS, NVDA) to ensure compatibility and correct label reading.
- **Accessibility Labels: **Use `aria-label` or `aria-labelledby` for buttons without visible labels, ensuring screen readers describe the button’s purpose. **Stateful buttons **use ARIA aria-pressed attributes to indicate the state of toggle buttons, so screen readers announce whether a button is pressed (active) or unpressed (default).


As with all components, use semantic HTML. ARIA roles should be used sparingly.

**Focus Management**: Ensure buttons are keyboard navigable with `tabindex=0` and that focus indicators are visible.

**Event Listeners**: Ensure buttons are clickable with both `Enter` and `Space` keys, and avoid JavaScript that overrides these default actions.

**Assistive Technology Compatibility**: Test buttons with screen readers (e.g., JAWS, NVDA) to ensure compatibility and correct label reading.

**Accessibility Labels: **Use `aria-label` or `aria-labelledby` for buttons without visible labels, ensuring screen readers describe the button’s purpose. **Stateful buttons **use ARIA aria-pressed attributes to indicate the state of toggle buttons, so screen readers announce whether a button is pressed (active) or unpressed (default).

## Content Considerations

### Button Labels and Messaging

- **Concise Labels**: Button text should be short and descriptive (e.g., “Save” or “Submit”). Avoid vague terms like “Click Here.”
- **Accessible Language**: Button labels should use plain language, with additional context provided through ARIA attributes where necessary.
- **Avoid Abbreviations and Acronyms**: If an abbreviation or acronym is necessary, ensure it is widely recognized or provide a full description elsewhere on the page.


**Concise Labels**: Button text should be short and descriptive (e.g., “Save” or “Submit”). Avoid vague terms like “Click Here.”

**Accessible Language**: Button labels should use plain language, with additional context provided through ARIA attributes where necessary.

**Avoid Abbreviations and Acronyms**: If an abbreviation or acronym is necessary, ensure it is widely recognized or provide a full description elsewhere on the page.

### Internationalization

- Labels should be short, to ensure that localized text will fit. Design with different languages in mind to avoid truncation.
- Account for right-to-left (RTL) languages (e.g., Arabic, Hebrew) by ensuring that content dynamically adapts to RTL layouts.


Labels should be short, to ensure that localized text will fit. Design with different languages in mind to avoid truncation.

Account for right-to-left (RTL) languages (e.g., Arabic, Hebrew) by ensuring that content dynamically adapts to RTL layouts.
