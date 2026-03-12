---
title: "Dynamic Icons"
slug: "dynamic-icons--usage"
category: "foundation"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/26424b-dynamic-icons/b/39205c"
extractedAt: "2026-02-21T21:48:34.201Z"
---

## Overview

Dynamic icons provide animated visual cues that indicate specific actions, states, or insights. This immediate visual feedback helps users understand the function and status of elements in the interface. Dynamic icons help users quickly understand content status or navigate functions without excessive UI text.

## Usage

Dynamic icons are used to guide users through workflows and signal important information at a glance.

### Best Practices

- Use dynamic icons to supplement text or other UI elements, provide visual feedback, or emphasize a state such as success, error, or loading.
- Use dynamic icons sparingly to avoid overwhelming the user interface and maintain clarity.
- Update icons like loading spinners and success indicators in real time to reflect current status.
- To create a more intuitive experience for users, pair icons with interactive elements like buttons, links, or toggles.
### When Not to Use

- Don’t use dynamic icons as a replacement for actionable components like buttons or links that need direct user interaction.
- Use the correct icon type that aligns with their purpose:

**Utility icons:** For actions or functionality (such as edit and refresh).
- **Dynamic icons:** For real-time status changes (such as loading spinners, success indicators).
- **Standard icons:**For Salesforce-specific objects (such as Accounts, Opportunities).

Don’t use dynamic icons as a replacement for actionable components like buttons or links that need direct user interaction.

Use the correct icon type that aligns with their purpose:

-**Utility icons:** For actions or functionality (such as edit and refresh).
- **Dynamic icons:** For real-time status changes (such as loading spinners, success indicators).
- **Standard icons:**For Salesforce-specific objects (such as Accounts, Opportunities).
## Types

Ellie Icon

Represents Einstein features. Used to signal AI-powered insights and recommendations across various Salesforce products.

**Use case:** Used in lead management or case resolution, helping users make data-driven decisions.





Light[View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-dynamic-icons--ellie)



EQ Icon

Displays a pulsing animation while loading data to indicate an ongoing process.

**Use case:** Used in the customer support panel, offering emotional context and sentiment analysis to help support agents tailor their responses.



Light[View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-dynamic-icons--eq)



Strength Icon

Used for password strength indicators in contexts such as user account setup or password updates.

**Use case:** The Strength icon is used in Salesforce’s user account settings or login pages to visually represent password strength, guiding users to create secure passwords.

Light[View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-dynamic-icons--strength)





Score Icon

Displays key scores to inform users of account status or engagement level.



**Use case:**The Score icon is shown on account pages, helping sales teams quickly assess lead quality or engagement levels to prioritize follow-up actions.



Light[View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-dynamic-icons--score)





Trend Icon

Visualizes directional trends in data to highlight changes over time.

**Use case:** The Trend icon is used in analytics sections to show sales, performance, or usage trends, helping users spot upward or downward movements at a glance.

Light[View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-dynamic-icons--trend)





Typing Icon

Indicates when a user is actively composing a message.

**Use Case:** The Typing icon appears in live chat windows, showing support agents or users that the other party is typing.

Light[View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-dynamic-icons--typing)



Waffle Icon

Used to access the Salesforce App Launcher.

**Use Case:**The Waffle icon is located in the header and opens the App Launcher, allowing users to quickly switch between Salesforce applications like Sales Cloud, Service Cloud, or Experience Cloud.

Light[View in Storybook](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-dynamic-icons--waffle)### Ellie Icon

Represents Einstein features. Used to signal AI-powered insights and recommendations across various Salesforce products.

Use case: Used in lead management or case resolution, helping users make data-driven decisions.

### EQ Icon

Displays a pulsing animation while loading data to indicate an ongoing process.

Use case: Used in the customer support panel, offering emotional context and sentiment analysis to help support agents tailor their responses.

### Strength Icon

Used for password strength indicators in contexts such as user account setup or password updates.

Use case: The Strength icon is used in Salesforce’s user account settings or login pages to visually represent password strength, guiding users to create secure passwords.

### Score Icon

Displays key scores to inform users of account status or engagement level.

Use case: The Score icon is shown on account pages, helping sales teams quickly assess lead quality or engagement levels to prioritize follow-up actions.

### Trend Icon

Visualizes directional trends in data to highlight changes over time.

Use case: The Trend icon is used in analytics sections to show sales, performance, or usage trends, helping users spot upward or downward movements at a glance.

### Typing Icon

Indicates when a user is actively composing a message.

Use Case: The Typing icon appears in live chat windows, showing support agents or users that the other party is typing.

### Waffle Icon

Used to access the Salesforce App Launcher.

Use Case: The Waffle icon is located in the header and opens the App Launcher, allowing users to quickly switch between Salesforce applications like Sales Cloud, Service Cloud, or Experience Cloud.

## Appearance

### Layout

Icons must have enough spacing from surrounding text and components to avoid clutter. Consistent margins and padding provide clarity and visual distinction. Text labels can be used for additional clarity and context.

### States

Dynamic Icons can exhibit various states, including:

-**Default:** The standard appearance of the icon, such as Ellie showing its smiling face when idle.
- **Hover**: Only the Waffle and Global Action Help Dynamic Icons use a hover state. The hover state is triggered when the mouse cursor hovers over the icon, and provides a visual indicator such as color or size.
- **Active:** Occurs when the icon is clicked or selected, like Help changing its appearance to indicate an action has been triggered.
- **Error or Failure State:** Icons like Strength change their appearance to show errors, for example if a password is too weak and a red icon appears.
- **Pause State:**Icons like Ellie and Strength pause when waiting for user input. Typing pauses when typing activity stops.
-**Static State:**Icons like Ellie stop updating or animating, signaling completion of an action.
-**Typing State:** Indicates typing activity is detected. Pauses when typing activity stops.
### Interactions

Dynamic icons are interactive depending on context. Some icons act as visual indicators, while others trigger actions. For example:

- **Feedback:** The animated Typing dynamic icon provides an animated visual indicator of an ongoing process.
- **Actionable:** Waffle opens a menu or displays additional resources when clicked.
- **Static:**Trend icon, Ellie, and Strength serve as informational indicators without triggering further actions.
## Related Components

