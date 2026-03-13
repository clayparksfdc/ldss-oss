---
title: "Button"
slug: "button--usage"
category: "component"
parent: "button"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-button-lbc-examples--basic
title: Button - Basic
height: 400px
```

## Overview

- Used across Salesforce products to perform common actions.
- Buttons provide a familiar, accessible way for users to engage with the interface, increasing efficiency and user satisfaction.
- Different button styles are provided to fit many contexts and user needs—brand, neutral, base, destructive, destructive text, success, and inverse.

## Usage

The button component is essential in Salesforce applications to guide users through workflows, perform key actions, and streamline processes. Create buttons that are clear, easy to identify, and accessible.

### Button vs. Link

The HTML elements for buttons and links describe a very specific type of action that is going to be taken when they are used. It is important you know when to use which, as the distinction matters:

- Use a **link** when you're **navigating to another place**, such as: a "view all" page, "Jane Chen" profile, a page "skip link" etc.
- Use **buttons** when you are **performing an action**, such as: "submit," "merge," "create new," "upload," etc.
- An action is almost **always** on the same page

### Best Practices

- Use button labels that describe actions, such as "Submit," "Save".
- Choose button types (such as brand, neutral) to match the action's importance.
- Use buttons to perform an action, such as: "submit," "merge," "create new," "upload," and so on.
- Buttons perform an action on the same page where they are located.
- Maintain sufficient spacing around buttons to prevent accidental clicks.

### When Not to Use

- Don't use too many buttons on one screen, which can overwhelm users.
- Avoid vague labels like "Click Here" or "More."
- Use a link instead of a button to navigate to another place, such as a "view all" page, "Jane Chen" profile, and so on.

## Types

### Brand

Brand buttons are used for primary actions that drive the main purpose of the page or form. Brand buttons effectively guide users toward their primary goals by creating visual clarity and focus, making tasks more efficient and intentional.

#### When to Use Brand Buttons

- When a page or form has a clear primary action that users are expected to take, such as "Save," "Submit," or "Continue," a brand button highlights that path.
- To guide users through multi-step processes by highlighting key steps in a multi-step process.
- For completing tasks with high impact, such as "Approve" on an approval request.

#### When Not to Use Brand Buttons

- Avoid using brand buttons for secondary or supporting actions like "Cancel," "Reset," or "Back." Instead, use neutral buttons to reduce visual clutter and avoid competing actions.
- If a page has more than one possible primary action, using multiple brand buttons can confuse users about the priority. Consider which action is most important or break out other actions as links, neutral, or base buttons.
- Avoid using brand buttons for actions like "Delete" or "Remove," as the high-contrast color can give unintended encouragement to proceed. Use a destructive or destructive text button to signal caution.

### Neutral

Neutral buttons are used for secondary actions that are important but not the main focus of a page. They're designed to be visually less prominent than brand buttons, helping users differentiate between primary and supporting actions.

#### When to Use Neutral Buttons

- Use for actions like "Cancel," "Back," or "Close," alongside primary actions like "Submit."
- Perfect for tasks like "View Details" or "More Information," indicating their secondary nature.
- Balance multiple actions, such as pairing "Save" (brand) with "Cancel" (neutral) in a modal.
- Use in lists or cards for less critical tasks like "View" or "Edit," keeping the interface visually clear.

#### When Not to Use Neutral Buttons

- Avoid for key actions like "Submit" or "Save," which need brand buttons for emphasis.
- Don't use for actions like "Delete" or "Remove." Use destructive buttons to signal caution.
- Avoid for critical steps like "Next" or "Continue," which require more visual importance.

### Base

Base buttons are minimal, without borders or background styling. They're best for utility or tertiary actions that don't need visual emphasis, keeping the interface clean and unobtrusive.

#### When to Use Base Buttons

- Ideal for supplementary tasks like "Learn More" or "Details" that support the main workflow.
- Use when the action should blend into content, like "Forgot Password?" in a form.

#### When Not to Use Base Buttons

- Avoid for critical tasks like "Submit" or "Save," which need more visual prominence.
- Don't use for risky actions like "Delete." Use destructive buttons to convey caution.
- Avoid when users need a clear indication of interactivity, as base buttons can look like plain text.

### Brand Outline

Brand outline buttons are less visually dominant than brand buttons but still emphasize important actions. They feature a Salesforce primary color outline for a softer, balanced look, making them ideal for secondary or alternative actions.

#### When to Use Brand Outline Buttons

- Use for important secondary actions, like "Preview" or "More Info," placed next to a main brand button, such as "Submit."
- Ideal for primary actions that don't require a strong emphasis, like "Skip" or "Start Tutorial."
- Ideal for offering options without overshadowing the main action, such as "Save for Later" alongside "Checkout".

#### When Not to Use Brand Outline Buttons

- Use a standard brand button for the most critical action, like "Submit."
- Don't use for risky actions like "Delete." Use destructive buttons to convey caution.
- Limit usage to avoid clutter. Focus on highlighting the most critical actions.

### Destructive

Destructive buttons are used for actions that carry serious consequences, such as deleting or permanently altering data. These buttons are styled using the error alert palette to signal the importance and potential risk of the action. Destructive buttons are intended to prompt users to think twice before clicking, helping to prevent unintended changes or data loss.

#### When to Use Destructive Buttons

- For permanent actions like "Delete Account" or "Clear Data" that can't be undone.
- In dialogs or forms where deletion is the main focus, such as for "Are you sure you want to delete this record?" confirmation prompt.
- For tasks that affect workflows or data integrity, such as "Remove Contact" from a case.
- For critical bulk actions like "Delete All," to make sure users understand the effect.

#### When Not to Use Destructive Buttons

- Use neutral or base buttons for actions that have no lasting effects, like "Cancel" or "Close".
- Use a single primary destructive button and destructive text buttons for secondary options to avoid overwhelming users.
- Avoid using destructive buttons for actions like "Clear Filters" or "Reset Settings" that don't involve data loss.

### Destructive Text

Destructive text buttons are used for secondary actions with potential negative effects, signaling caution without overshadowing primary actions.

#### When to Use Destructive Text Buttons

- For less critical tasks like removing an attachment or clearing a form field.
- Use where the action isn't the main focus, like "Delete Optional Note."
- Balance with primary actions, such as pairing "Save" (brand) with "Cancel" (destructive text).

#### When Not to Use Destructive Text Buttons

- Avoid using destructive text buttons as the only button on the page to prevent confusion or reduced visibility.
- Use a solid destructive button for critical actions like permanently deleting a record.

### Success

Success buttons are used in Salesforce products to indicate actions that confirm positive outcomes, such as submitting or completing a task successfully. These buttons guide users toward actions that lead to completion, achievement, or confirmation of a successful status. Success buttons reinforce a sense of accomplishment and help Salesforce users recognize that they've achieved key milestones in their workflows.

#### When to Use Success Buttons

- For actions like "Complete" or "Approve" that signify task completion or a positive result.
- Use for milestones, like "Finish Setup" in onboarding, to reinforce accomplishment.
- For actions like "Convert Lead" or "Close Case" that represent success for the user and organization.

#### When Not to Use Success Buttons

- Avoid using success buttons for transitional steps like "Next" in a process; use brand buttons instead.
- Never use for tasks like "Delete" or "Remove"; use destructive buttons instead.
- Avoid using for inconsequential actions like "Cancel" or "Back"; use neutral buttons to prevent confusion.

### Stateful and Dual Stateful Buttons

Stateful buttons represent a single switch of an ongoing state. When clicked, the label and icon change to reflect the current state, helping users easily understand the status of an action. Common examples include switching a feature on or off, marking an item as "Favorite," or indicating an active subscription.

While stateful buttons retain the same neutral style in both states, dual stateful buttons change their appearance between neutral and brand styles.

#### Selected with Hover state

Stateful buttons can display different content (label and icon) on hover and focus, such as "Unfollow" on a "Follow"/"Following" button.

#### When to Use Stateful and Dual Stateful Buttons

- Use stateful buttons to show whether a feature is currently enabled or disabled.

#### Best Practices for Stateful Buttons

- Make sure that the button's label reflects the current state, like showing "Following" or "Follow" instead of only icons.
- Provide ARIA attributes to describe each state, so screen readers can announce the current state to low-vision users.

### Inverse

Inverse buttons are designed for use on dark or colored backgrounds, where standard buttons lack sufficient contrast. They feature white text with a white border to make the button readable and visually clear. These buttons maintain accessibility and usability in contexts where the default button styles don't stand out effectively.

#### When to Use Inverse Buttons

- Use inverse buttons when designing for sections on dark backgrounds.

#### When Not to Use Inverse Buttons

- Avoid using inverse buttons on light backgrounds, as they don't stand out and can cause visual confusion.
- Don't use inverse buttons alongside standard buttons unless there's a clear visual or functional distinction between the two. Mixing styles can confuse users about the hierarchy of actions.

## Appearance

### Anatomy

Buttons in Salesforce have a text label, an optional icon, and different visual states. They contain the elements described here.

- **Container**: The contents of the button are contained within rounded corners.
- **Label**: Text that describes the main action or intent of the button.
- **Left Icon** *(optional)*: Although SLDS provides several categories of icons, only the utility category can be used.
- **Right Icon** *(optional)*: Although SLDS provides several categories of icons, only the utility category can be used.

### Size

Buttons have one size, but are adaptive. They have a mobile variant designed specifically for use on mobile devices. See [Responsive section](/component/button) for more information.

By default, button widths adapt to the content. To expand the button to take up the entire width available, apply the `.slds-button_stretch` class to the button. If using the `lightning-button` base component, add the `stretch` attribute to your markup instead.

### Layout

- Place primary actions where they are easy to spot. Secondary actions should be less prominent.
- Align buttons consistently within forms or action panels.

### UI Content

- Make button labels concise, clear, and action-oriented.
- Use Title Case for the label
- Describe actions

## Behaviors

### States

1. **Default:** Button ready for interaction.
2. **Hover:** Changes appearance to indicate interactivity.
3. **Active:** When clicked, the button's appearance changes to show that the action has been initiated. If it triggers a menu, popover, or panel, the button remains in the active state while the triggered component is open.
4. **Focus:** A distinct style when using keyboard navigation. Focus shows the button is ready to receive input from the user.
5. **Disabled:** Indicates an inactive or unavailable action.

### Loading

Show a loading spinner for actions requiring processing time.

### Responsive

Buttons adapt to screen size, ensuring usability on mobile and desktop. Mobile buttons are optimized for smaller screens and thumb-friendly interactions, so users can navigate and complete tasks comfortably on mobile.

## Related Components
