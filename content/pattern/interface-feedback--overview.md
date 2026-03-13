---
title: "Interface Feedback - Overview"
slug: "interface-feedback--overview"
category: "pattern"
parent: "interface-feedback"
order: 0
---

## Guiding with Interface Feedback

Interface feedback is the system's response to direct user input. It provides confirmation, guidance, and a sense of control. Effective feedback is guided by a few key principles.

- **Timely, not noisy.** Provide feedback at the right moment. Not every interaction requires a response.
- **Informative, not verbose.** Write concise messages that communicate only what is necessary.
- **Actionable, not static.** To improve efficiency, include shortcuts to relevant actions.
- **Cross-device, not duplicative.** Send alerts to all of your user's devices, and clear the message everywhere after it’s been read.

## Feedback Types

At the highest level, feedback is categorized by the type of user interaction.

- **System Feedback** alerts users to important system-level issues or statuses. It's initiated by the system, not as a direct result of the user’s action.

*Example: System maintenance this weekend.*
- **Engagement Feedback** nudges users to update data or explore a new feature.

*Example: No activity on Opportunity X in the past 30 days. Create a task or schedule an event.*
- **Access Feedback** appears when a user tries to access an unavailable item, often because a record was deleted or the user lacks the necessary permissions.

*Example: Lead X unavailable.*
- **Standard Feedback** responds to **most create, read, update, and delete (CRUD) actions.**

*Example: Account created.*

- *Example: System maintenance this weekend.*

- *Example: No activity on Opportunity X in the past 30 days. Create a task or schedule an event.*

- *Example: Lead X unavailable.*

- *Example: Account created.*

### Choosing the Right Feedback

A relevant and helpful feedback experience can be designed in three steps.

1. Select the appropriate [feedback type](/pattern/interface-feedback) based on the user's interaction with the application.
2. Pick a [component](/pattern/interface-feedback) from the matrix below that fits the user flow, UI, and has the right level of visibility.
3. Determine which feedback state, such as success or error, best characterizes the message.


|  | **Feedback Type** | **Inline Text** | **Popover** | **Toast** | **Alert** | **Illustration & Inline Text** | **Modal** | **Prompt** | **Docked Composer** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | System | ✅ |  |  | ✅ | ✅ |  | ✅ |  |
| 2 | Engagement | ✅ | ✅ |  |  | ✅ | ✅ | ✅ | ✅ |
| 3 | Access | ✅ |  |  |  | ✅ |  |  |  |
| 4 | Standard | ✅ | ✅ | ✅ |  |  | ✅ |  |  |

**Illustration & Inline Text**

### Example: Choosing a Feedback Component

Here’s an example of how to apply this logic to a common scenario.

#### Scenario

A salesperson updates an opportunity record after a sale, changing some of the initial numbers. How should the application confirm that the record is saved?

1. **Identify the Feedback Type** The user initiates the interaction, the record is accessible, and the changes are saved successfully. This is a standard CRUD action.

*Feedback Type: Standard*
2. **Choose a Component** Four components are available for standard feedback.

[Scoped Notification](https://v1.lightningdesignsystem.com/components/scoped-notifications/)**:** Best for empty states, inaccessible states, or field-level errors, not for success messages.
3. [Popover](https://v1.lightningdesignsystem.com/components/popovers/#site-main-content)**:** Suggests a user action or communicates an error after data submission.
4. [Toast](/components/toast)**:** Confirms a create, edit, or delete action.
5. [Modal](/components/modals)**:** Warns a user or confirms an action is intentional.
6. Since this is a simple confirmation of a successful edit, a toast is the most appropriate component.

*Feedback Component: Toast*
7. **Determine the Feedback State** The user successfully saved changes to the record.

*Feedback State: Success*

- *Feedback Type: Standard*

- [Scoped Notification](https://v1.lightningdesignsystem.com/components/scoped-notifications/)**:** Best for empty states, inaccessible states, or field-level errors, not for success messages.
- [Popover](https://v1.lightningdesignsystem.com/components/popovers/#site-main-content)**:** Suggests a user action or communicates an error after data submission.
- [Toast](/components/toast)**:** Confirms a create, edit, or delete action.
- [Modal](/components/modals)**:** Warns a user or confirms an action is intentional.

- *Feedback Component: Toast*

- *Feedback State: Success*

Based on this analysis, the application should show a **success toast**.
