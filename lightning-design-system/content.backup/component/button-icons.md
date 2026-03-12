---
title: "Button Icons"
description: "Button icons are simple and compact, saving space in the Salesforce user interface. They're often used for actions that are easy to understand from the icon alone, like closing a window or editing an "
category: "component"
slug: "button-icons"
status: "published"
lastModified: "2026-03-11"
---

## Overview

Button icons are simple and compact, saving space in the Salesforce user interface. They're often used for actions that are easy to understand from the icon alone, like closing a window or editing an item. No need for text labels!

- Button icons are icon-only buttons that convey specific actions.
- They’re commonly used throughout Salesforce for compact layouts or toolbars.
- They provide quick access to close, delete, or edit functions while saving space.
- Button icons are optimized for user accessibility and screen reader compatibility.


Button icons are icon-only buttons that convey specific actions.

They’re commonly used throughout Salesforce for compact layouts or toolbars.

They provide quick access to close, delete, or edit functions while saving space.

Button icons are optimized for user accessibility and screen reader compatibility.

## Usage

### Best Practices

- Use button icons for simple, frequent actions like "Close" or "Clear."
- Make sure the icon meaning is universally recognizable (for example, the trash icon for delete).
- Include alternative text for screen readers to improve accessibility.
- Use button tooltips to give extra context when necessary.


Use button icons for simple, frequent actions like "Close" or "Clear."

Make sure the icon meaning is universally recognizable (for example, the trash icon for delete).

Include alternative text for screen readers to improve accessibility.

Use button tooltips to give extra context when necessary.

### When Not to Use

- Don’t use button icons for complex actions that need a text label to clarify their intent.
- Don’t rely solely on button icons if the icon meaning isn’t universally clear.
- Avoid using button icons in crowded interfaces where they can appear cluttered or hard to tap.


Don’t use button icons for complex actions that need a text label to clarify their intent.

Don’t rely solely on button icons if the icon meaning isn’t universally clear.

Avoid using button icons in crowded interfaces where they can appear cluttered or hard to tap.

## Types

There are three types of button icons. Each type has style variants that you can use to suit user needs.

- **Button icon**: for a specific action. Can use these style variants described next: bare, container, brand, border, border-filled, bare-inverse, and border-inverse.
- **Button icon stateful:** maintains a selection or active state until changed by the user providing clear feedback about its current condition. Can use these style variants: border, border-filled, and border-inverse.
- **Button menu: **displays a dropdown menu of actions or functions when you click it. The button menu has these style variants: bare, container, brand, border, border-filled, bare-inverse, and border-inverse. Button menu has additional


**Button icon**: for a specific action. Can use these style variants described next: bare, container, brand, border, border-filled, bare-inverse, and border-inverse.

**Button icon stateful:** maintains a selection or active state until changed by the user providing clear feedback about its current condition. Can use these style variants: border, border-filled, and border-inverse.

**Button menu: **displays a dropdown menu of actions or functions when you click it. The button menu has these style variants: bare, container, brand, border, border-filled, bare-inverse, and border-inverse. Button menu has additional

### Bare

Bare button icons don’t have a defined container, and the size of each button is based on the icon size alone.

| <h4>Base</h4>Displays an icon without a container or border. |   |
| --- | --- |
|   |   |
| <h4>Bare Inverse</h4>Displays an icon in white color without a container or border, useful for dark backgrounds. |   |
|   |   |
| <h4>Feedback</h4>**Error** button icons are typically used in conjunction with an [error popover](https://v1.lightningdesignsystem.com/components/popovers/#Error).**<strong>Warning** button icons are typically used in conjunction with a [warning popover](https://v1.lightningdesignsystem.com/components/popovers/#Warning). |   |


#### Base

Displays an icon without a container or border.

#### Bare Inverse

Displays an icon in white color without a container or border, useful for dark backgrounds.

#### Feedback

**Error** button icons are typically used in conjunction with an [error popover](https://v1.lightningdesignsystem.com/components/popovers/#Error).

**Warning** button icons are typically used in conjunction with a [warning popover](https://v1.lightningdesignsystem.com/components/popovers/#Warning).

### Container

Container button icons have a defined container that makes up its actual size. Use the variant attribute with one of these values to apply styling.

| <h4>Base</h4> Displays an icon in a transparent container without a border. |   |
| --- | --- |
|   |   |
| <h4>Border</h4> The default variant displays an icon in a transparent container with a border. |   |
|   |   |
| <h4>Border Inverse</h4> Displays an icon in a transparent container with a border, used on dark backgrounds. |   |
|   |   |
| <h4>Border Filled</h4> Displays an icon in a filled container with a border. |   |
|   |   |
| <h4>Brand</h4> Brand is a blue button, used to draw attention to the primary action on a page. Use this style sparingly to highlight the most crucial action. |   |


#### Base

Displays an icon in a transparent container without a border.

#### Border

The default variant displays an icon in a transparent container with a border.

#### Border Inverse

Displays an icon in a transparent container with a border, used on dark backgrounds.

#### Border Filled

Displays an icon in a filled container with a border.

#### Brand

Brand is a blue button, used to draw attention to the primary action on a page. Use this style sparingly to highlight the most crucial action.

### Stateful

Like a switch, a stateful button maintains a selection or active state until changed by the user, providing clear feedback about its current condition. It's especially useful for persistent actions such as liking a post or selecting an item as a favorite.

| <h4>Border</h4>Displays an icon in a transparent container with a dark border. |   |
| --- | --- |
|   |   |
| <h4>Border Inverse</h4>Displays an icon in a transparent container with a light border, useful for dark backgrounds. |   |
|   |   |
| <h4>Border Filled</h4>Displays an icon in a filled container with a border. |   |


#### Border

Displays an icon in a transparent container with a dark border.

#### Border Inverse

Displays an icon in a transparent container with a light border, useful for dark backgrounds.

#### Border Filled

Displays an icon in a filled container with a border.

### Menu

A button menu displays a dropdown menu of actions or functions when you click it. The menu closes when you click away from it, and it also closes and puts the focus back on the button when you select a menu item. Button menus are available as a dropdown menu only, which uses the default dropdown symbol, or an icon with a dropdown. Both can be styled using bare and container styles and sizes.

| <h4>Dropdown Menu</h4>The dropdown symbol is the only icon available. |   |
| --- | --- |
|   |   |
| <h4>Icon with Dropdown</h4>Pairs a small dropdown symbol with an informational icon to improve the users understanding. |   |


#### Dropdown Menu

The dropdown symbol is the only icon available.

#### Icon with Dropdown

Pairs a small dropdown symbol with an informational icon to improve the users understanding.

### Example

## Appearance

Button Icons are primarily divided into three groups: **Base**, **Container, and Menu**.

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Utility Icon** |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Container: **Border variation shown. Only available on Container variants. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>* | **Dropdown:** Icon to indicate that a menu opens when the button is clicked. |


**Utility Icon**

**Container: **Border variation shown. Only available on Container variants.

**Dropdown:** Icon to indicate that a menu opens when the button is clicked.

### Customization Options

The [SLDS utility icon](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/83309d-iconography/b/875c85) category offers nearly 200 utility icons that can be used in the stateful button icon. Although the SLDS provides several categories of icons, only the utility category can be used with this component.

### Size

#### Bare

The bare variant can be displayed in four sizes: x-small, small, medium (default), and large.

#### Container and Stateful

Contained variants can be displayed in four sizes: xx-small, x-small, small, and medium (default).

#### Menu

Dropdown menu variants can be displayed in all sizes of bare and container variants: xx-small, x-small, small, medium, and large.

Icon with Dropdown Menu variants can be displayed in all sizes of bare and container variants: xx-small, x-small, small, medium, and large.

#### Mobile

- On touch devices like phones, buttons are enlarged for easier finger tapping.
- No code changes are needed in the Salesforce Platform context, as this change occurs automatically in Salesforce native mobile applications.


On touch devices like phones, buttons are enlarged for easier finger tapping.

No code changes are needed in the Salesforce Platform context, as this change occurs automatically in Salesforce native mobile applications.

ℹ️ For users who aren't on the Salesforce Platform, these modifications appear automatically when the secondary touch style sheet is loaded, and touch is the primary method of interaction on the device.

### Layout

The default spacing between adjacent elements is 8px. Maintaining this spacing helps prevent mistaken clicks and ensures a consistent layout. Consider how the button’s padding, relative to its container (visible or hidden), impacts the UI’s presentation and hierarchy.

### UI Content

Don’t use any text when using button icons, except for tooltips that offer context (for example, “Delete record”). Review tooltips for additional content guidance.

## Behaviors

### States

Button icons follow the same behavior as standard buttons.

1. **Default: **Standard appearance without interaction.
2. **Hover: **Background color changes to show interactivity.
3. **Active: **Icon color changes to show selection.
4. **Focus**: Border or shadow to indicate keyboard focus.
5. **Disabled**: Grayed-out and non-interactive


**Default: **Standard appearance without interaction.

**Hover: **Background color changes to show interactivity.

**Active: **Icon color changes to show selection.

**Focus**: Border or shadow to indicate keyboard focus.

**Disabled**: Grayed-out and non-interactive

****Hover vs. Focus:**** When a user hovers their cursor over an interactive element, a hover state is triggered to indicate this action. Similarly, a focused state is activated when a user highlights an element using an input method like a keyboard or voice.*

### Interactions

- Hover: Displays a tooltip with additional context.
- Click: Executes the assigned action (for example, delete).
- Pressed: For on or off actions, like favoriting.


Hover: Displays a tooltip with additional context.

Click: Executes the assigned action (for example, delete).

Pressed: For on or off actions, like favoriting.

### Position

- Align button icons consistently within toolbars or lists.
- Place icons close to the item or area they impact (for example, delete the icon next to the item it removes).


Align button icons consistently within toolbars or lists.

Place icons close to the item or area they impact (for example, delete the icon next to the item it removes).

### Responsive

Button icons are adaptive and have a mobile variant with increased size for touch devices.

### Validation

Error and warning button icons are typically used in conjunction with an error and warning popover.

When using feedback button icons in Salesforce, it’s essential to consider error and warning conditions to ensure a smooth user experience. Here are specific guidelines on handling errors and warning states.

- Provide immediate feedback by displaying an error icon and color change on the feedback button to indicate the failure.
- Show an error popover or scoped notification near the icon, such as *“Unable to submit feedback. Check your network connection or try again later.”*
- Allow users to retry their action or automatically queue the feedback for submission when the network is restored.
- Ensure that screen readers announce error messages and have appropriate ARIA labels. <ul><li>Add `aria-live="assertive"` for high-priority announcements.</li><li>Add `aria-disabled="true"` on temporarily disabled feedback icons.</li><li>Ensure all error and warning messages are reachable by screen readers.</li></ul>
- Add `aria-live="assertive"` for high-priority announcements.
- Add `aria-disabled="true"` on temporarily disabled feedback icons.
- Ensure all error and warning messages are reachable by screen readers.


Provide immediate feedback by displaying an error icon and color change on the feedback button to indicate the failure.

Show an error popover or scoped notification near the icon, such as *“Unable to submit feedback. Check your network connection or try again later.”*

Allow users to retry their action or automatically queue the feedback for submission when the network is restored.

Ensure that screen readers announce error messages and have appropriate ARIA labels.

- Add `aria-live="assertive"` for high-priority announcements.
- Add `aria-disabled="true"` on temporarily disabled feedback icons.
- Ensure all error and warning messages are reachable by screen readers.


Add `aria-live="assertive"` for high-priority announcements.

Add `aria-disabled="true"` on temporarily disabled feedback icons.

Ensure all error and warning messages are reachable by screen readers.

## Related Components
