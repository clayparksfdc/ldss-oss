---
title: "Notifications"
slug: "notifications--notification-priority"
category: "pattern"
parent: "notifications"
order: 0
---

## Notification Priority

To craft helpful and unobtrusive notifications, define and use a clear priority system. To determine a notification’s pronunciation, or level of priority, identify the information that is most important at each point in a workflow.

Based on when your users need to act on a notification they received, there are three levels of pronunciation.

- **Urgent (Act now):** An urgent notification interrupts a user's workflow to present critical information. It enables direct action or offers a clear path to completing a task.
- **Standard (Act soon):** A standard notification pushes relevant, timely information that improves productivity. It nudges the user as necessary, but doesn't demand immediate action.
- **Discreet (Act later):** A discreet notification provides awareness with minimal disruption. These pull notifications allow the users to review information at their convenience.

### Priority Levels of Notification Components


| **Priority** | **Bell and Notification Tray** | **Alert** | **Scoped Notification** | **Notification Tile** | **Docked Composer** | **Modal / Prompt** | **Welcome Mat** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Urgent | ✅ |  |  | ✅ | ✅ | ✅ | ✅ |
| Standard | ✅ | ✅ | ✅ |  |  |  |  |
| Discrete | ✅ |  |  |  |  |  |  |


| A docked composer expands into a docked assistant, allowing users to complete tasks or gather information through chat, a dialer, or email. The notification can be minimized and docked at the bottom of the console. In live collaborations, it appears expanded at the bottom right of the screen.  PriorityUrgent  **Usage**A docked composer is marked as read after it’s minimized or dragged to a new window. It's also used in [onboarding](/pattern/user-engagement--onboarding) to highlight features that boost productivity and can be reviewed later if dismissed.  Component[Docked Composer](https://v1.lightningdesignsystem.com/components/docked-composer/) | *                     A docked assistant           *  |
| --- | --- |

#### Accessibility

To ensure the docked composer is usable by everyone, please implement the following:

**Keyboard Movement:** The composer must be movable using keyboard arrow keys, not just by dragging with a mouse. This provides an essential alternative for users with motor disabilities.

**Navigable Region:**Define the composer component as a distinct, navigable region of the page and give it a name that matches its visible title, like Chat or Email Composer. Wrap the component in a landmark so screen reader users can easily find it. Use `role="region" `on the container and `aria-labelledby `to connect it to the visible header's ID.

**Announce New Messages:** Use `aria-live="polite"` to audibly announce when new messages arrive. For clarity, include the component's name, such as New message in Chat, in the announcement.


| *                     A docked composer with chat input           *  | *                     A docked composter with a videoA docked composer with chat input           *  |
| --- | --- |

### Modals and Prompts


| Modals and prompts present information that requires halting the current workflow. They show content in a layer preceding the app and are centered vertically in the viewport.  PriorityUrgent  **Usage**To dismiss a prompt, a user must confirm its call to action. A modal can be dismissed via the close icon, cancel button, or by clicking outside the dialog window.  Component[Modal](/component/modals) [Prompt](/components/prompt) | *                     A modal           *  |
| --- | --- |


| Welcome mats are specialized modals used for [deeper learning](/pattern/user-engagement--deeper-learning), such as highlighting new features. They typically include an informational pane and an actionable pane.  PriorityUrgent  **Usage**A welcome mat displays information in a layer preceding the app. It can trigger walkthroughs, other modals, videos, or direct users to a URL.  Component[Welcome Mat](https://v1.lightningdesignsystem.com/components/welcome-mat/) | *                     A welcome mat           *  |
| --- | --- |


| The notification bell and its accompanying tray deliver urgent, standard, and discreet notifications. Clicking the bell icon expands and collapses the tray.  PriorityUrgent, Standard, or Discreet  **Usage**When a new notification arrives, an enumerated badge appears on the bell, and the count of notifications is updated. Each item in the tray allows direct navigation to its content.  Component[Stateful Button Icon](https://v1.lightningdesignsystem.com/components/button-icons/#Stateful) (Bell) [Popover](https://v1.lightningdesignsystem.com/components/popovers/#site-main-content) (dialog with list of notifications) | *                     A bell icon and notification tray           *  |
| --- | --- |

#### Accessibility

Badges are designed to be non-interruptive. To simulate the visual cue for low-vision or non-visual users, consider using an `aria-live="polite"` announcement on page load for the notification count.


| Notification tiles present time-sensitive information like work reminders, upcoming events, and due tasks. After they’re dismissed, view them in the notification tray.  PriorityStandard  **Usage**Clicking the body of a tile dismisses it and opens its URL in a new browser tab. The tile can also be dismissed by clicking the X icon.  Component[Notification Tiles](https://v1.lightningdesignsystem.com/components/notifications/) | *                     Another example of a notification: Notification tiles.           *  |
| --- | --- |

#### Accessibility

**Control Time Limits:** If a tile disappears automatically, [users must be able to turn off](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html), adjust, or extend the time limit before it expires.

**Provide a Clear Structure:**Group all visible tiles in a container with `role="log"` and an accessible name, such as `aria-label="Notifications”`. Each tile should be a list item `(<li>)` inside this container to give users context on the number of notifications.

**Announce New Tiles:**When a new tile appears, it must be announced to screen readers using `aria-live="polite"`.


| An alert presents status information for the entire app or a specific record, and persists until it’s dismissed or replaced. App-wide alerts include system maintenance or browser issues. Record status alerts notify users of changes to a specific record.  PriorityStandard**Usage **Alert banners appear without user initiation, communicate system- or page-wide states, and persist throughout a user’s session.  An alert shows one of these states: [Error](/pattern/interface-feedback--feedback-states), [Warning](/pattern/interface-feedback--feedback-states), [Informational](/pattern/interface-feedback--feedback-states), and [Offline](/pattern/interface-feedback--feedback-states).  Component[Alert](/component/alert) | *                     An alert banner           *  |
| --- | --- |

#### Accessibility


| **Alert State** | **Requirements** |
| --- | --- |
| ErrorInforms the user they can’t proceed | `aria-role="alert"` and `aria-live="assertive"` |
| **Information**Provides additional details | `aria-role="status"` and `aria-live="polite"` |
|**Warning**Warns of potential issues | `aria-role="status"`and `aria-live="polite".` |
|**Offline**Informs the user they are in offline mode | `aria-role="status"` and `aria-live="polite"`. |


| *                     An alert positioned above the header           *  | *                     An alert positioned below the header           *  |
| --- | --- |

## Discreet Notification Components

Discreet notifications act as pull notifications, providing awareness without disrupting workflow. They’re recorded by the system and can be reviewed in the notification tray.


| A scoped notification presents information specific to a component or page section. It's tethered to its component and isn’t dismissible or viewable elsewhere.  PriorityDiscreet  **Usage**Scoped notifications are used for information that isn't important enough to justify a full alert.  Component[Scoped Notification](https://v1.lightningdesignsystem.com/components/scoped-notifications/) | *                     A scoped notification           *  |
| --- | --- |
