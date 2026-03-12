---
title: "Notifications"
description: "To craft helpful and unobtrusive notifications, define and use a clear priority system. To determine a notification’s pronunciation, or level of priority, identify the information that is most importa"
category: "general"
slug: "notifications--notification-priority"
status: "published"
lastModified: "2026-03-11"
---

## Notification Priority

To craft helpful and unobtrusive notifications, define and use a clear priority system. To determine a notification’s pronunciation, or level of priority, identify the information that is most important at each point in a workflow.

Based on when your users need to act on a notification they received, there are three levels of pronunciation.

- **Urgent (Act now):** An urgent notification interrupts a user's workflow to present critical information. It enables direct action or offers a clear path to completing a task.
- **Standard (Act soon):** A standard notification pushes relevant, timely information that improves productivity. It nudges the user as necessary, but doesn't demand immediate action.
- **Discreet (Act later):** A discreet notification provides awareness with minimal disruption. These pull notifications allow the users to review information at their convenience.


**Urgent (Act now):** An urgent notification interrupts a user's workflow to present critical information. It enables direct action or offers a clear path to completing a task.

**Standard (Act soon):** A standard notification pushes relevant, timely information that improves productivity. It nudges the user as necessary, but doesn't demand immediate action.

**Discreet (Act later):** A discreet notification provides awareness with minimal disruption. These pull notifications allow the users to review information at their convenience.

### Priority Levels of Notification Components

| **Priority** | **Bell and Notification Tray** | **Alert** | **Scoped Notification** | **Notification Tile** | **Docked Composer** | **Modal / Prompt** | **Welcome Mat** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Urgent | ✅ |   |   | ✅ | ✅ | ✅ | ✅ |
| Standard | ✅ | ✅ | ✅ |   |   |   |   |
| Discrete | ✅ |   |   |   |   |   |   |


**Priority**

**Bell and Notification Tray**

**Alert**

**Scoped Notification**

**Notification Tile**

**Docked Composer**

**Modal / Prompt**

**Welcome Mat**

Urgent

✅

✅

✅

✅

✅

Standard

✅

✅

✅

Discrete

✅

## Urgent Notification Components

Urgent notifications use components that interrupt the user's workflow to present critical information.

### Docked Composer

| A docked composer expands into a docked assistant, allowing users to complete tasks or gather information through chat, a dialer, or email. The notification can be minimized and docked at the bottom of the console. In live collaborations, it appears expanded at the bottom right of the screen.**<h4>Priority</h4>Urgent <h4><strong>Usage**</h4>A docked composer is marked as read after it’s minimized or dragged to a new window. It's also used in [onboarding](https://www.lightningdesignsystem.com/2e1ef8501/p/732cfe) to highlight features that boost productivity and can be reviewed later if dismissed. <h4>Component</h4>[Docked Composer](https://v1.lightningdesignsystem.com/components/docked-composer/) | * A docked assistant <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


A docked composer expands into a docked assistant, allowing users to complete tasks or gather information through chat, a dialer, or email. The notification can be minimized and docked at the bottom of the console. In live collaborations, it appears expanded at the bottom right of the screen.

#### Priority

Urgent

#### Usage

A docked composer is marked as read after it’s minimized or dragged to a new window. It's also used in [onboarding](https://www.lightningdesignsystem.com/2e1ef8501/p/732cfe) to highlight features that boost productivity and can be reviewed later if dismissed.

#### Component

[Docked Composer](https://v1.lightningdesignsystem.com/components/docked-composer/)

A docked assistant

#### Accessibility

To ensure the docked composer is usable by everyone, please implement the following:

**Keyboard Movement:** The composer must be movable using keyboard arrow keys, not just by dragging with a mouse. This provides an essential alternative for users with motor disabilities.

**Navigable Region: **Define the composer component as a distinct, navigable region of the page and give it a name that matches its visible title, like Chat or Email Composer. Wrap the component in a landmark so screen reader users can easily find it. Use `role="region" `on the container and `aria-labelledby `to connect it to the visible header's ID.

**Announce New Messages:** Use `aria-live="polite"` to audibly announce when new messages arrive. For clarity, include the component's name, such as New message in Chat, in the announcement.

| * A docked composer with chat input <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | * A docked composter with a videoA docked composer with chat input <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


A docked composer with chat input

A docked composter with a videoA docked composer with chat input

### Modals and Prompts

| Modals and prompts present information that requires halting the current workflow. They show content in a layer preceding the app and are centered vertically in the viewport.**<h4>Priority</h4>Urgent <h4><strong>Usage **</h4>To dismiss a prompt, a user must confirm its call to action. A modal can be dismissed via the close icon, cancel button, or by clicking outside the dialog window. <h4>Component</h4>[Modal](https://www.lightningdesignsystem.com/2e1ef8501/p/01c12a) [Prompt](https://www.lightningdesignsystem.com/2e1ef8501/p/925906) | * A modal <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


Modals and prompts present information that requires halting the current workflow. They show content in a layer preceding the app and are centered vertically in the viewport.

#### Priority

Urgent

#### Usage

To dismiss a prompt, a user must confirm its call to action. A modal can be dismissed via the close icon, cancel button, or by clicking outside the dialog window.

#### Component

[Modal](https://www.lightningdesignsystem.com/2e1ef8501/p/01c12a) [Prompt](https://www.lightningdesignsystem.com/2e1ef8501/p/925906)

A modal

### Welcome Mat

| Welcome mats are specialized modals used for [deeper learning](https://www.lightningdesignsystem.com/2e1ef8501/p/25d63d-user-engagement), such as highlighting new features. They typically include an informational pane and an actionable pane.**<h4>Priority</h4>Urgent <h4><strong>Usage **</h4>A welcome mat displays information in a layer preceding the app. It can trigger walkthroughs, other modals, videos, or direct users to a URL. <h4>Component</h4>[Welcome Mat](https://v1.lightningdesignsystem.com/components/welcome-mat/) | * A welcome mat <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


Welcome mats are specialized modals used for [deeper learning](https://www.lightningdesignsystem.com/2e1ef8501/p/25d63d-user-engagement), such as highlighting new features. They typically include an informational pane and an actionable pane.

#### Priority

Urgent

#### Usage

A welcome mat displays information in a layer preceding the app. It can trigger walkthroughs, other modals, videos, or direct users to a URL.

#### Component

[Welcome Mat](https://v1.lightningdesignsystem.com/components/welcome-mat/)

A welcome mat

### Bell and Notification Tray

| The notification bell and its accompanying tray deliver urgent, standard, and discreet notifications. Clicking the bell icon expands and collapses the tray.**<h4>Priority</h4>Urgent, Standard, or Discreet <h4><strong>Usage**</h4>When a new notification arrives, an enumerated badge appears on the bell, and the count of notifications is updated. Each item in the tray allows direct navigation to its content. <h4>Component</h4>[Stateful Button Icon](https://v1.lightningdesignsystem.com/components/button-icons/#Stateful) (Bell) [Popover](https://v1.lightningdesignsystem.com/components/popovers/#site-main-content) (dialog with list of notifications) | * A bell icon and notification tray <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


The notification bell and its accompanying tray deliver urgent, standard, and discreet notifications. Clicking the bell icon expands and collapses the tray.

#### Priority

Urgent, Standard, or Discreet

#### Usage

When a new notification arrives, an enumerated badge appears on the bell, and the count of notifications is updated. Each item in the tray allows direct navigation to its content.

#### Component

[Stateful Button Icon](https://v1.lightningdesignsystem.com/components/button-icons/#Stateful) (Bell) [Popover](https://v1.lightningdesignsystem.com/components/popovers/#site-main-content) (dialog with list of notifications)

A bell icon and notification tray

#### Accessibility

Badges are designed to be non-interruptive. To simulate the visual cue for low-vision or non-visual users, consider using an `aria-live="polite"` announcement on page load for the notification count.

## Standard Notification Components

Standard notifications push relevant, timely information to improve productivity without demanding immediate action.

### Notification Tiles

| Notification tiles present time-sensitive information like work reminders, upcoming events, and due tasks. After they’re dismissed, view them in the notification tray.**<h4>Priority</h4>Standard <h4><strong>Usage **</h4>Clicking the body of a tile dismisses it and opens its URL in a new browser tab. The tile can also be dismissed by clicking the X icon. <h4>Component</h4>[Notification Tiles](https://v1.lightningdesignsystem.com/components/notifications/) | * Another example of a notification: Notification tiles. <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


Notification tiles present time-sensitive information like work reminders, upcoming events, and due tasks. After they’re dismissed, view them in the notification tray.

#### Priority

Standard

#### Usage

Clicking the body of a tile dismisses it and opens its URL in a new browser tab. The tile can also be dismissed by clicking the X icon.

#### Component

[Notification Tiles](https://v1.lightningdesignsystem.com/components/notifications/)

Another example of a notification: Notification tiles.

#### Accessibility

**Control Time Limits:** If a tile disappears automatically, [users must be able to turn off](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html), adjust, or extend the time limit before it expires.

**Provide a Clear Structure: **Group all visible tiles in a container with `role="log"` and an accessible name, such as `aria-label="Notifications”`. Each tile should be a list item `(<li>)` inside this container to give users context on the number of notifications.

**Announce New Tiles: **When a new tile appears, it must be announced to screen readers using `aria-live="polite"`.

### Alerts

| An alert presents status information for the entire app or a specific record, and persists until it’s dismissed or replaced. App-wide alerts include system maintenance or browser issues. Record status alerts notify users of changes to a specific record.**<h4>Priority</h4>Standard <h4><strong>Usage **</h4>Alert banners appear without user initiation, communicate system- or page-wide states, and persist throughout a user’s session. An alert shows one of these states: [Error](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/12db58-interface-feedback/t/135c158535), [Warning](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/12db58-interface-feedback/t/a79d2790f8), [Informational](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/12db58-interface-feedback/t/8cdf28f107), and [Offline](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/12db58-interface-feedback/t/a5763afbc7). <h4>Component</h4>[Alert](https://www.lightningdesignsystem.com/2e1ef8501/p/541420) | * An alert banner <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


An alert presents status information for the entire app or a specific record, and persists until it’s dismissed or replaced. App-wide alerts include system maintenance or browser issues. Record status alerts notify users of changes to a specific record.

#### Priority

Standard

#### Usage

Alert banners appear without user initiation, communicate system- or page-wide states, and persist throughout a user’s session.

An alert shows one of these states: [Error](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/12db58-interface-feedback/t/135c158535), [Warning](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/12db58-interface-feedback/t/a79d2790f8), [Informational](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/12db58-interface-feedback/t/8cdf28f107), and [Offline](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/12db58-interface-feedback/t/a5763afbc7).

#### Component

[Alert](https://www.lightningdesignsystem.com/2e1ef8501/p/541420)

An alert banner

#### Accessibility

| **Alert State** | **Requirements** |
| --- | --- |
| <h4>Error</h4>Informs the user they can’t proceed | `aria-role="alert"` and `aria-live="assertive"` |
| <h4>**Information**</h4>Provides additional details | `aria-role="status"` and `aria-live="polite"` |
| <h4>**Warning**</h4>Warns of potential issues | `aria-role="status"`and `aria-live="polite".` |
| <h4>**Offline**</h4>Informs the user they are in offline mode | `aria-role="status"` and `aria-live="polite"`. |


**Alert State**

**Requirements**

#### Error

Informs the user they can’t proceed

`aria-role="alert"` and `aria-live="assertive"`

#### Information

Provides additional details

`aria-role="status"` and `aria-live="polite"`

#### Warning

Warns of potential issues

`aria-role="status"`and `aria-live="polite".`

#### Offline

Informs the user they are in offline mode

`aria-role="status"` and `aria-live="polite"`.

| * An alert positioned above the header <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | * An alert positioned below the header <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


An alert positioned above the header

An alert positioned below the header

## Discreet Notification Components

Discreet notifications act as pull notifications, providing awareness without disrupting workflow. They’re recorded by the system and can be reviewed in the notification tray.

### Scoped Notifications

| A scoped notification presents information specific to a component or page section. It's tethered to its component and isn’t dismissible or viewable elsewhere.**<h4>Priority</h4>Discreet <h4><strong>Usage**</h4>Scoped notifications are used for information that isn't important enough to justify a full alert. <h4>Component</h4>[Scoped Notification](https://v1.lightningdesignsystem.com/components/scoped-notifications/) | * A scoped notification <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


A scoped notification presents information specific to a component or page section. It's tethered to its component and isn’t dismissible or viewable elsewhere.

#### Priority

Discreet

#### Usage

Scoped notifications are used for information that isn't important enough to justify a full alert.

#### Component

[Scoped Notification](https://v1.lightningdesignsystem.com/components/scoped-notifications/)

A scoped notification
