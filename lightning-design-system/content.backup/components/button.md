---
title: Button Component
description: Buttons are used to trigger actions or events
category: components
order: 1
---

# Button Component

Buttons allow users to take actions and make choices with a single tap.

## Overview

::: callout type="info"
Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.
:::

## Component Demo

::: component-demo storybook="https://example.com/storybook?path=/story/button" title="Button Examples" height="300"
:::

## Button Types

### Primary Button

Use primary buttons for the main action on a screen.

::: code-example language="html"
```html
<button class="slds-button slds-button_brand">
  Primary Button
</button>
```
:::

### Secondary Button

Use secondary buttons for less important actions.

```html
<button class="slds-button slds-button_neutral">
  Secondary Button
</button>
```

## Best Practices

::: callout type="warning"
Avoid using too many primary buttons on a single page. This can confuse users about which action is most important.
:::

### Do's
- Use clear, action-oriented labels
- Maintain consistent button sizes within a group
- Place primary actions on the right in dialogs

### Don'ts
- Don't use generic labels like "Click here" or "Submit"
- Don't make buttons too small or too large
- Don't use too many button variants on one screen

## Accessibility

All buttons should:
- Have clear, descriptive labels
- Be keyboard accessible
- Have appropriate ARIA attributes
- Provide visual feedback on interaction

::: callout type="success"
Following these guidelines ensures your buttons are accessible to all users.
:::
