---
title: "Global Focus · Lightning Design System 2"
slug: "global-focus"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/92a50f-global-focus"
extractedAt: "2026-02-21T22:00:11.129Z"
---

Keyboard navigation of single page apps and large web interfaces can get complicated in a hurry. Use focus management appropriately to guide keyboard users through dynamic UIs.

Many users navigate web interfaces with only their keyboard, tabbing between focusable elements and using arrow keys to navigate interactive widgets such as menus. In dynamic user interfaces, the set of focusable elements on the screen changes as the user interacts with it.

When a user's action causes a UI change, such as an element appearing or disappearing from the screen, we can use focus management techniques to prevent the user from getting lost. When focus management is done right, it helps keyboard and screen reader users discover UI changes and easily reach the next logical step in their flow.

## Key Principles

### Maintain Logical Focus Order

The focus order should follow the visual and logical order of the content. Users should be able to tab through interactive elements, such as links, buttons, and form fields, in a predictable and intuitive sequence.

#### Best Practices:

- Use semantic HTML elements like `<button>`, `<a>`, and `<input>`, which have built-in focus behavior.
- Avoid skipping focusable elements or creating confusing jumps in the focus sequence.
- Use the `tabindex` attribute sparingly to adjust focus order, ensuring it aligns with user expectations.

### Provide Visual Focus Indicators

The Lightning Design System uses a global styling hook for all focus states, creating a visual cue for sighted keyboard users, users working in low visibility situations, and those with cognitive disabilities. Ensure any custom components utilize this global style for seamless integration.

#### Best Practices:

- Use the focus styling hook to define focus styles.
- Avoid removing the focus outline unless you replace it with an equally visible alternative.

### Manage Focus Programmatically

Dynamic interfaces, such as modals, panels, popovers, and single-page experiences, often need programmatic control of focus. Managing focus helps users understand what changed on the screen and ensures that keyboard and assistive technology users aren’t left behind.

#### When to Use Programmatic Focus

**Opening Modals**

Move focus to the most meaningful element based on the modal’s purpose and structure. Refer to [Determining the Initial Focus When a Modal Opens](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/92a50f-global-focus/t/836dcb0951) for specific guidance on multi-step modals, titled modals, and fallback behaviors.

#### Closing Modals

When the dialog closes, return focus to the element that triggered it. This helps users stay oriented in the flow they were working in.

#### Error Handling

If a form submission fails, move focus to the error message or the first invalid field. This immediately directs users to what needs attention.

### Dynamic Interface Updates

For components that replace content on a page, such as guided flows, filtered results, or inline edit regions, move focus to the updated heading or the first meaningful control so that users understand what has changed.

#### Examples

**Focusing on an Element in a Modal**

```
// Identify the appropriate target using your modal's initial-focus rules
const target = this.template.querySelector(
  '#modal-title, #step-subtitle, .first-interactive'
);

target?.focus();
```

**Returning Focus to the Trigger**

```
// After the modal closes
triggerButton.focus();
```

**Focusing on an Error Message or Invalid Field**

```
const error = this.template.querySelector('.slds-form-element__help');
error?.focus();
```

### Prevent Focus Traps

Focus traps occur when users cannot navigate out of a particular section of the interface, such as a modal or dropdown menu.

#### Best Practices:

- Ensure that users can tab forward and backward through all focusable elements.
- Provide an escape mechanism, such as the `Escape` key, to exit the trapped area.
**Example:** In a modal dialog, loop the focus back to the first element when users tab past the last focusable element.

### Skip Navigation Links

Provide a "Skip to Main Content" link at the top of the page to allow keyboard users to bypass repetitive navigation elements.

**Example:**

`<a href="#main-content" class="skip-link">Skip to Main Content</a>`

### Handle Focus Loss Gracefully

Focus should never disappear or become "lost" when users interact with the application. This often happens in dynamic interfaces when elements are removed or replaced.

#### Best Practices:

- When removing an element that currently has focus, move focus to a relevant nearby element.
- Ensure focus transitions are seamless and logical.

### Errors

- When the user attempts to save and is presented with an error:
If there are form element errors, place focus on the first input field with an associated error message. This makes it easy for the user to quickly correct the value.
- If an error popover appears, such as in the Docked Form Footer component, place focus inside the popover.
- If a page-level error appears, place focus on the error message.
- For error toasts, refer to the focus guidelines for Toasts.
When the user attempts to save and is presented with an error:

- If there are form element errors, place focus on the first input field with an associated error message. This makes it easy for the user to quickly correct the value.
- If an error popover appears, such as in the Docked Form Footer component, place focus inside the popover.
- If a page-level error appears, place focus on the error message.
For error toasts, refer to the focus guidelines for Toasts.

## Lists and Tables

**Component and Utility Class Examples**

### Removing an item

When a row is removed from a list, via a button or menu on that list item, where to place focus depends on where the item sits within the list:

- **First row or any middle row:** Place focus on the first focusable element in the next row.
- **Last row in the list:** Place focus on last focusable element of previous row.
- **Only row in the list:** Place focus on the list container or any content identifying the list as being empty.

### Displaying more items in a list

There are several ways to show more items in a list. The important aspect is to ensure that focus is never lost and that when new items are added, focus continues to move "downhill."

#### "Show More" / "Show Less" toggle button

Vertical Navigation is a good example of this strategy, as it uses markup for Expandable Sections inline with a list.

- User tabs through the items in the list.
- If there is a "Show More" button, user tabs to this button after the last item in the list.
- Pressing the "Show More" button reveals more items below the toggle, but focus remains on this button.
- Pressing **Tab** on the "Show More" button moves focus to the first item after the button.

#### Disappearing "Show More" button

Instead of a "Show More" / "Show Less" toggle, sometimes there may only be a single “Show More” button that goes away when pressed. If this is the case, place focus on the first new item that is added to the list.

#### Lazy loading or infinite scrolling lists

- If a list loads as a user scrolls down the page, it also needs to load as a user tabs through the items in the list. There should be no hiccups when tabbing through a lazy loading list. It is best to load new items as the user’s focus approaches the end of the list. Don’t wait until they reach the last item, or tab beyond the last item.
- There must be some keyboard mechanism for moving beyond an infinitely loading list. This will prevent a keyboard-only user from getting stuck in a list that "never ends" when they want to move beyond the list. Options include but are not limited to:
A skip link before the list to take a user to the first focusable element after the list
- A keyboard shortcut to move the user to the first focusable element after the list
If a list loads as a user scrolls down the page, it also needs to load as a user tabs through the items in the list. There should be no hiccups when tabbing through a lazy loading list. It is best to load new items as the user’s focus approaches the end of the list. Don’t wait until they reach the last item, or tab beyond the last item.

There must be some keyboard mechanism for moving beyond an infinitely loading list. This will prevent a keyboard-only user from getting stuck in a list that "never ends" when they want to move beyond the list. Options include but are not limited to:

- A skip link before the list to take a user to the first focusable element after the list
- A keyboard shortcut to move the user to the first focusable element after the list

## Dialogs

Dialogs appear in two primary forms—**modal** and **non-modal**—depending on how they interact with the rest of the application.

### Modal Dialogs

A modal dialog appears above the main application, disabling interaction with the content behind it. Users must close the modal before returning to the underlying page.

**Examples:** Modals, Welcome Mat

### Non-Modal Dialogs

A non-modal dialog sits above the main application but doesn’t block it. Users can move focus back and forth between the dialog and the main interface.

**Examples:** Docked Composers, Notification Cards, Panels, Popovers, Trial Bar

### Opening Dialogs

Users open dialogs by activating a trigger, typically a button, by clicking or pressing the Enter or Space key. When the dialog opens, move focus into the dialog and trap it there so keyboard users stay within the dialog. Tabbing past the last focusable element should loop focus back to the first.

#### Example: Dialog Trigger (LWC)

```
<template>
  <lightning-button
      label="Open Modal"
      onclick={handleOpen}
      aria-controls="demo-modal">
  </lightning-button>

  <template if:true={isOpen}>
    <section
      role="dialog"
      aria-modal="true"
      id="demo-modal"
      class="slds-modal slds-fade-in-open">

      <div class="slds-modal__container">
        <!-- modal content here -->
      </div>

    </section>
    <div class="slds-backdrop slds-backdrop_open"></div>
  </template>
</template>
```

### Determining the Initial Focus When a Modal Opens

To set initial focus where users expect it, use this decision flow. The goal is to give keyboard and assistive technology users a **clear orientation** the moment the modal becomes active. Follow these tiers to determine the most meaningful starting point.

#### Tier 1: Multi-Step Modals

To help users understand that a step has changed when a modal contains multiple steps and its subtitle updates, place focus on the step subtitle by making it temporarily focusable with tabindex="-1".

**Example: Step Subtitle (LWC)**

```
<h2 class="slds-text-heading_medium"
    tabindex="-1"
    aria-live="polite"
    id="step-subtitle">
  Step 2: Confirm Details
</h2>
```

```
// After rendering a new step
const subtitle = this.template.querySelector('#step-subtitle');
subtitle?.focus();
```

#### Tier 2: Standard Modal With a Title

If the modal isn’t a wizard and contains a visible title, focus the modal title. This focus provides immediate context without skipping ahead to interactive controls.

**Example: Modal Title (LWC)**

```
<h1
  class="slds-modal__title slds-hyphenate"
  id="modal-title"
  tabindex="-1">
  Edit Contact
</h1>
```

```
connectedCallback() {
  requestAnimationFrame(() => {
    const title = this.template.querySelector('#modal-title');
    title?.focus();
  });
}
```

#### Tier 3: No Title?... Focus the First Useful Interactive Element

Look for the first interactive control in the modal body (not the footer), and follow these steps. This shift of focus ensures that users always have a clear, actionable starting point.

- If the first interactive element is tooltip-only (hover-triggered): **→** Focus the close button (**X**).
- Otherwise: **→** Focus the first interactive element.
- If the modal contains no interactive elements: **→** Focus the close button.
**Example: First Interactive Element (Blueprint HTML)**

```
<div class="slds-modal__content">
  <lightning-input
    label="Name"
    id="first-field">
  </lightning-input>
</div>
```

```
<script>
  const field = document.getElementById('first-field');
  field?.focus();
</script>
```

**Example: Fallback to Close Button (LWC)**

```
<button
  class="slds-button slds-button_icon slds-modal__close"
  title="Close"
  id="modal-close">
  <lightning-icon icon-name="utility:close"></lightning-icon>
</button>
```

```
const closeButton = this.template.querySelector('#modal-close');
closeButton?.focus();
```

**Tier 4: None of the Above**

If none of the previous conditions apply, focus on the close button. This shift of focus ensures the user can immediately exit if the modal does not offer a meaningful interactive entry point.

### Closing dialogs

- The **Escape** key should close the dialog. Actions such as "OK" or "Cancel" may also be applicable.
- When closing the dialog via one of the above mechanisms, focus must return to the item that triggered the dialog.
If the dialog was triggered from within a menu, place focus on the menu’s trigger.
- If the trigger no longer exists in the DOM, place the focus in a logical location, depending on the new page landscape. An example of this would be deleting a record from a table view. If you choose the "Delete" action from the record's actions menu, you’ll get a modal prompt to confirm deletion. After the deletion, the row and thus the action menu will be gone. In this case, consult our Lists and Tables focus guidelines to learn where to place focus after removing an item.
- If closing a dialog results in a Toast or other confirmation, place focus inside of the toast. When the toast closes, place focus on the element that initially triggered the dialog.
The **Escape** key should close the dialog. Actions such as "OK" or "Cancel" may also be applicable.

When closing the dialog via one of the above mechanisms, focus must return to the item that triggered the dialog.

- If the dialog was triggered from within a menu, place focus on the menu’s trigger.
- If the trigger no longer exists in the DOM, place the focus in a logical location, depending on the new page landscape. An example of this would be deleting a record from a table view. If you choose the "Delete" action from the record's actions menu, you’ll get a modal prompt to confirm deletion. After the deletion, the row and thus the action menu will be gone. In this case, consult our Lists and Tables focus guidelines to learn where to place focus after removing an item.
If closing a dialog results in a Toast or other confirmation, place focus inside of the toast. When the toast closes, place focus on the element that initially triggered the dialog.

### Moving in and out of non-modal dialogs

Pressing **Cmd/Ctrl + F6** should move focus between the dialog, other open dialogs, and the application.

## Notification cards

Notification cards appear as a series of non-modal dialogs, preceded by a visually hidden DOM element with a defined `aria-live` attribute. Updates to the content of the aria-live element will read out to screen reader users.

- When a notification card appears, the focus remains where it is. The text inside the aria-live element should be updated to announce the card's arrival to screen readers.
- Pressing **Cmd/Ctrl + F6** will move through the various non-modal dialogs that are open on the screen, ultimately leading to the notification card.
- If there are multiple cards, **Cmd/Ctrl + F6** should move focus through the cards.
- From the last card, **Cmd/Ctrl + F6** should move focus out of the notification cards and back to the app.

## Rich Text Editors

Newly loaded rich text editors should not grab focus.

#### Component Examples

## Toasts

Toasts work like dialogs, but with the attribute `role="alert"`. This attribute ensures that their contents are read by screen readers.

### Launching a toast

Toasts may only be launched based on a user action, such as saving, creating, deleting or converting a record. This is because toast components act as dialogs. As dialogs, focus must go into them in order for their contents to be read by screen readers. It would be confusing and inappropriate to move focus into dialog without the user triggering this action themselves.

### Exiting a toast

When exiting, focus should go to the item that triggered the toast, such as the button that launched a create dialog.

### Multiple toasts

If there are multiple toasts, **Cmd/Ctrl + F6** should move focus from toast to toast and then back to the application.

## Global Orchestration

For interfaces with a number of alerts, panels, composers, and major sections of the page, focus orchestration at an app-wide level allows the user to easily navigate the application. The industry standard is to use the **F6** key for global focus management. For web UIs, combine the **F6** key with the **Cmd** key on Mac or the **Ctrl** key on other operating systems so as not to conflict with browsers' app-wide keyboard shortcuts. Pressing **Cmd/Ctrl + F6** should cycle a user through the following regions in a reliable and consistent sequence:

- Open non-modal dialogs
- Open utility panels
- Open docked composers
- Task notifications
- Toast messages
- Main content
- Split view
When the user presses **Cmd/Ctrl + F6** to navigate to the next region, focus should go to the first focusable element in that region if nothing was previously focused there, or to the element in that region that last held focus. Pressing **Shift + Cmd/Ctrl + F6** should follow these same rules, but move focus into the previous region instead of the next one.

## Page Loads and Refreshes

Depending on how a page is loaded, the placement of focus varies. The guidelines below are based on Salesforce's Lightning UI and may not universally apply to other apps.

- **Refresh or direct navigation to URL:** Focus goes to the very beginning of the page, before the skip navigation links.
- **Global Navigation:** When opening an object or record from the global navigation, focus should go to center stage.
- **Global Navigation (Console):** When choosing a record or object in Console apps, focus should go to the workspace tab for the new item added. When opening a new subtab from a workspace tab, focus should go to the subtab’s tab.
- **Vertical Navigation:** When choosing an item from a vertical navigation, such as that in Reports, Dashboards, Files, or Chatter, focus should go to center stage for this object.
- **App Launcher:** When switching applications, focus should go to the very beginning of the page, before the skip navigation links.
- **Global Search:** When performing a global search, focus should go to the results.
- **Skip Links:** When clicking on a skip link, focus should be placed where the skip link says it will go, e.g. main navigation, main content area, etc.