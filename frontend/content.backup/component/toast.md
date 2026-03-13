---
title: "Toast"
description: "Toasts provide immediate feedback to a user without disrupting their current task. The toast content is meant to be short and contextual, and provide the user with the information they need to know wi"
category: "component"
slug: "toast"
status: "published"
lastModified: "2026-03-11"
---

## Overview

Toasts provide immediate feedback to a user without disrupting their current task. The toast content is meant to be short and contextual, and provide the user with the information they need to know without getting in their way.

- Toasts inform users about the success or failure of actions, warnings, or other transient messages.
- Toasts let users know about important system events without getting in the way of their work.
- Toasts appear automatically or in response to user interaction.
- Toasts vanish after a specific time period or when the user closes them.


Toasts inform users about the success or failure of actions, warnings, or other transient messages.

Toasts let users know about important system events without getting in the way of their work.

Toasts appear automatically or in response to user interaction.

Toasts vanish after a specific time period or when the user closes them.

## Usage

### Best Practices

- Use concise language to communicate the message clearly.
- To reinforce the purpose of the message, choose the right toast type: success, warning, error, or info.
- Show one toast at a time to avoid overwhelming users.


Use concise language to communicate the message clearly.

To reinforce the purpose of the message, choose the right toast type: success, warning, error, or info.

Show one toast at a time to avoid overwhelming users.

### When Not to Use

- For persistent notifications, use other components like scoped notifications, alerts, or inline text.
- For messages that require immediate user action, consider a modal instead.
- Don't use toasts for situations where feedback isn't critical or can be delivered inline.


For persistent notifications, use other components like scoped notifications, alerts, or inline text.

For messages that require immediate user action, consider a modal instead.

Don't use toasts for situations where feedback isn't critical or can be delivered inline.

## Types

| <h3>Success</h3>**Communicates the successful completion of an action.<strong>Use case:** After a user successfully saves, submits, or completes an action. |   |
| --- | --- |
|   |   |
| <h3>Error</h3>**Indicates an error or failure.<strong>Use case:** When an action fails because the user makes a mistake or there's a system failure. |   |
|   |   |
| <h3>Warning</h3>**Alerts users to a potential issue or gives a cautionary message.<strong>Use case:** When actions could result in unexpected outcomes. |   |
|   |   |
| <h3>Info</h3>**Provides non-critical information to the user.<strong>Use case: **To communicate updates or general information. |   |


### Success

Communicates the successful completion of an action.

**Use case:** After a user successfully saves, submits, or completes an action.

### Error

Indicates an error or failure.

**Use case:** When an action fails because the user makes a mistake or there's a system failure.

### Warning

Alerts users to a potential issue or gives a cautionary message.

**Use case:** When actions could result in unexpected outcomes.

### Info

Provides non-critical information to the user.

**Use case: **To communicate updates or general information.

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Icon:** Represents the type of message (success, error, warning, info). |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Message Text:** Provides the main context of the toast message. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Detail Text:** Detailed message or instructions related to the toast message. *(optional)* |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Text Link:** Enables users to navigate to resources and help docs. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Button Icon:** Enables users to close the toast manually. |


**Icon:** Represents the type of message (success, error, warning, info).

**Message Text:** Provides the main context of the toast message.

**Detail Text:** Detailed message or instructions related to the toast message. *(optional)*

**Text Link:** Enables users to navigate to resources and help docs.

**Button Icon:** Enables users to close the toast manually.

### Customization Options

- Customize message text to align with the message context and toast type.
- Use text links to provide users with additional information.
- To provide links in toasts on small screens and mobile environments, include links in the toast's message text instead of the detail text.
- Choose to dismiss automatically after a set time, or require manual dismissal. See [dismissal behaviors](https://zeroheight.com/2e1ef8501/v/0/p/216f79-toast/t/25faf512c3).


Customize message text to align with the message context and toast type.

Use text links to provide users with additional information.

To provide links in toasts on small screens and mobile environments, include links in the toast's message text instead of the detail text.

Choose to dismiss automatically after a set time, or require manual dismissal. See [dismissal behaviors](https://zeroheight.com/2e1ef8501/v/0/p/216f79-toast/t/25faf512c3).

### Size

Toasts are responsive and adjust to fit content length while adhering to min and max limits.

### Layout

Toasts are positioned near the top of the screen and centered to ensure they are easily noticeable and visually balanced.

### UI Content

- Keep messages concise, ideally under 100 characters.
- Use plain, accessible language.
- Avoid jargon or overly technical terms.


Keep messages concise, ideally under 100 characters.

Use plain, accessible language.

Avoid jargon or overly technical terms.

## Behaviors

### Interactions

### Toast Dismissal

The `mode` attribute sets the component's dismissal. There are two modes that determine duration:

- **Sticky Toast**<ul><li>Remains on the screen until the user closes it.</li><li>Use this option for important alerts or information that requires immediate action.</li><li>Includes a close button to dismiss the toast.</li></ul>
- Remains on the screen until the user closes it.
- Use this option for important alerts or information that requires immediate action.
- Includes a close button to dismiss the toast.
- **Dismissible Toast**<ul><li>Automatically disappears in a few seconds. </li><li>The amount of time it remains open depends on whether the toast contains a link.<ul><li>No link: 4.8 seconds </li><li>With link: 9.6 seconds</li></ul></li><li>Use this option for non-critical or informational messages that don't need a response.</li><li>Includes a close button, which enables the user to dismiss it before the timer expires.</li></ul>
- Automatically disappears in a few seconds.
- The amount of time it remains open depends on whether the toast contains a link.<ul><li>No link: 4.8 seconds </li><li>With link: 9.6 seconds</li></ul>
- No link: 4.8 seconds
- With link: 9.6 seconds
- Use this option for non-critical or informational messages that don't need a response.
- Includes a close button, which enables the user to dismiss it before the timer expires.


**Sticky Toast**

- Remains on the screen until the user closes it.
- Use this option for important alerts or information that requires immediate action.
- Includes a close button to dismiss the toast.


Remains on the screen until the user closes it.

Use this option for important alerts or information that requires immediate action.

Includes a close button to dismiss the toast.

**Dismissible Toast**

- Automatically disappears in a few seconds.
- The amount of time it remains open depends on whether the toast contains a link.<ul><li>No link: 4.8 seconds </li><li>With link: 9.6 seconds</li></ul>
- No link: 4.8 seconds
- With link: 9.6 seconds
- Use this option for non-critical or informational messages that don't need a response.
- Includes a close button, which enables the user to dismiss it before the timer expires.


Automatically disappears in a few seconds.

The amount of time it remains open depends on whether the toast contains a link.

- No link: 4.8 seconds
- With link: 9.6 seconds


No link: 4.8 seconds

With link: 9.6 seconds

Use this option for non-critical or informational messages that don't need a response.

Includes a close button, which enables the user to dismiss it before the timer expires.

The dismissal mode can also depend on the variant and whether the toast has a link.

| **Variant** | **Has link?** | **Default Mode** |
| --- | --- | --- |
| `info` | ✅ | `sticky` |
| `info` | ❌ | `sticky` |
| `success` | ✅ | `sticky` |
| `success` | ❌ | `dismissible` |
| `warning` | ✅ | `sticky` |
| `warning` | ❌ | `sticky` |
| `error` | ✅ | `sticky` |
| `error` | ❌ | `sticky` |


**Variant**

**Has link?**

**Default Mode**

`info`

✅

`sticky`

`info`

❌

`sticky`

`success`

✅

`sticky`

`success`

❌

`dismissible`

`warning`

✅

`sticky`

`warning`

❌

`sticky`

`error`

✅

`sticky`

`error`

❌

`sticky`

### Responsive

- Scales fluidly for different screen sizes.
- Text is easy to read and see, regardless of screen size.


Scales fluidly for different screen sizes.

Text is easy to read and see, regardless of screen size.

## Related Components
