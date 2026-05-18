---
title: "Button Groups"
slug: "button-groups--usage"
category: "component"
parent: "button-groups"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-button-group--base)

## Overview

* Used to group related actions or options together. Button groups allow users to make selections or trigger actions without navigating away.
* Displays buttons in a row or dropdown format, creating a clear, consistent layout for quick access.
* Buttons within a button group can toggle, link to pages, or perform specific actions based on user selections.
* Available in outline, brand, and inverse button styles. 
* Can contain text buttons, icon buttons, or dropdown buttons.

## Usage

Button groups simplify workflows by keeping related actions in one place. They’re most effective when users need quick access to several actions or options.

### Best Practices

* Use button groups for related actions like filter, sort, or export.
* To avoid clutter, limit the number of buttons. Too many options can overwhelm users.
* Use a descriptive label for each button so that users know what action to expect.
* Keep button group content consistent across pages.


### When Not to Use

* Avoid using button groups for standalone actions.
* Avoid long button groups. Too many buttons in a group can be confusing and harder to use.
* Separate unrelated actions into individual buttons or button groups.

## Types

| **Base Button Group**  Displays buttons in a simple row without extra styling. **Use case:** For related actions on a page, which allows the user to take quick actions without navigating away.  | ![Base Text](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/bc0023d459a6d049c5fa77?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b1fa4cab8050eda35254a7505a8bfbd96523573d8a80053ff527090de682bcd1) **Base Text** *Base Button Group Example.* |
| --- | :---: |
|   |   |
| **Icon-Only Button Group**  Uses icons instead of text for actions that are easily recognizable, like a settings gear or a trash can icon. **Use case:** A compact toolbar uses an icon-only button group with "Download," "Share," and "Favorite" icon buttons, which allow users to quickly perform actions.  | ![Base icon](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/493640629c5854d6406a52?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=23f67e6564ce1e63facee25831d877f51a5e8802166c8701ced2c0242a0d5473) **Base icon** *Icon-only Base Button Group Example.* |
|   |   |
| **Split Button Group**  Allows users to select a main action while providing additional options in a dropdown format.  **Use case**: In an email client, a split button uses “Send" as the main button, with additional options like "Send Later" or "Schedule" in a dropdown.   | ![Split](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/1108cdcf0bc754ee710590?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ffe2fbe5eef3c5de981995d11e1989c9be96eb07487c54f6891eec3399e59df3) **Split** *Split Button Group Example.* |

## Appearance

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/19e764c8fc494107d20d8c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fd80774d5c467682529db77740fc9d4d18d82795f11392aa3508ab260d74fa17)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=72356bbef3854b602132b1cc1c27e3113c65f40e2648f36e2e9c841866dca24c) | **Button Container**: Holds all buttons in a unified layout. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7dfb0bb3be91214e4533cb5e76dd05e8da0678e4fc9eb2836cc4dad2c8470980) | **Button Icons**: Can display icons next to or instead of text labels. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=36c9fccc64557ea41b04681a5dc7461a8eaa247e14c6b3eebca6e86fa1950422) | **Dropdown Indicator**: Indicates a split button option. |

### Size

Button group size is dependent on the button label content.

### Layout

Maintain equal spacing between buttons. Margins and padding keep the group visually balanced.

### UI Content

Keep labels brief and descriptive (for example "Save" or "Cancel").

Avoid long text; icons can be used for frequently recognized actions.

## Behaviors

### States

![Button Group States](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/343fd878cfe70da32369e1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f072c726fe6f401be599e9eb19df9456f5f8fccb6fa144a067da68f62bfdc061)

**Button Group States**

---

1. **Default:** Buttons are visible and active.
2. **Hover:** Button changes color slightly to indicate interactivity.
3. **Active:** Button color changes to show it’s been clicked.
4. **Disabled:** Button is visible but not clickable, revealing that its action isn't available for certain users or conditions.
5. **Focus:** Button receives a highlighted border for keyboard navigation accessibility.

### Interactions

* **Click:** Executes the primary action tied to the button.
* **Dropdown Expand:** Split buttons expand to show additional options on click.
* **Loading:** Indicates data is loading for actions that take time to complete, such as "Processing" or a loading spinner.

### Responsive

* Button groups adapt to various screen sizes, stacking vertically on smaller screens.
* Button groups are responsive and automatically adjust to fit mobile, tablet, and desktop views.


## Related Components
