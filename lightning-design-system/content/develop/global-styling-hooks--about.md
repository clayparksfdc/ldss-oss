---
title: "Global Styling Hooks - About"
slug: "global-styling-hooks--about"
category: "develop"
parent: "global-styling-hooks"
order: 0
---

To style your components in SLDS 2, reference global styling hooks in your code to apply SLDS values correctly. The design system determines the values of global styling hooks. Salesforce can change these values at any time and announces the changes in release notes.

This document describes the SLDS 2 global styling hooks and recommends best practices for using them.

If you’re transitioning existing SLDS 1 code to SLDS 2, use these recommendations to help you implement the changes recommended in these resources:

- [Prepare Customizations for SLDS Architecture Updates](https://help.salesforce.com/s/articleView?id=001622575&type=1)
- [SLDS Architecture Updates FAQs](https://help.salesforce.com/s/articleView?id=001622574&type=1)
- [SLDS 2 Transition Guide](/get-started/transition-to-slds-2)

⚠️ If you’re looking for guidance on component-level styling hooks in SLDS 1, visit the [SLDS 1 website](https://v1.lightningdesignsystem.com/).

## What are Global Styling Hooks?

Global styling hooks are CSS custom properties that we identify with the '`-g-`' syntax that comes after the` --slds-` namespace in the custom property name. They're designed for general use and don't impose specific usage rules. You can apply these properties across standard HTML elements, components, selectors, and more. The versatility of global styling hooks allows designers to implement overarching changes to an application while complying with SLDS.

We created a system to define the values and names of global styling hooks. The styling hooks typically are in sets, where each hook has a common base name and ends with a different numerical identifier. Generally, the set begins with '1', signifying the smallest or starting value, and increments by 'x'. However, each category can have different ranges within its set, reflecting their usage frequency in UI design. For instance, font sizes likely have a wider range than box-shadows.

Global styling hooks are organized into several property categories, each addressing a different aspect of design:

- [**Color:**](/uncategorized/system-palette) These properties define the color palette of your application and include primary key colors, UI surface colors, neutral colors, and explicit colors.
- [**Typography:**](/uncategorized/usage) These properties influence the typography in your application, defining aspects like font family, size, weight, line-height, etc.
- [**Borders and  Radius:**](/foundations/borders-and-radius) These properties manage the curvature of UI elements' corners, impacting the perceived softness or hardness of components.
- [**Shadows:**](/foundations/shadows) These properties control the appearance of shadows, affecting the depth perception and layering of UI elements.
- [**Sizing:**](/foundation/spacing-and-sizing) These properties dictate the dimensions of UI components, directly affecting layout.
- [**Spacing:**](/foundation/spacing-and-sizing) These properties govern the amount of space between UI elements, guiding the overall layout and ensuring adequate whitespace for readability and aesthetics.

[**Borders and  Radius:**](/foundations/borders-and-radius) These properties manage the curvature of UI elements' corners, impacting the perceived softness or hardness of components.

Global styling hooks offer a structured, flexible, and wide-ranging framework for designers to effectively craft their application's look and feel. The SLDS color system is part of these properties and plays a crucial role in defining the visual identity of your application.

#### 🛑 Do not reassign globals

Re-assigning a new value to a global styling hook inside your component is prohibited, because your design code will experience test failures and future breaking changes. Only reference global styling hooks in your code to consume predetermined values as defined by SLDS. The values are subject to change by Salesforce. Don’t override these predetermined values in your code.

### General Concepts

Here are some helpful concepts to hold onto as you read further.

- **Semantic UI Colors:** A set of semantic styling hooks that derive the design properties that express the visual language of the SLDS brand. These styling hooks are mutable and their values are subject to change.

**Surface:** Used for backgrounds and large areas of the application that express new visual stacking context to create visual depth.
- **Accent:** Used to emphasize key elements, typically through brand colors. Accent colors are configured through [Themes and Branding](https://help.salesforce.com/s/articleView?id=xcloud.brand_your_org_in_lightning_experience.htm&type=5). Setting brand colors in Themes and Branding will automatically assign corresponding accent values.
- **Container:** The fill color for elements that contain text or icons.
- **On:** Indicates the color of text or icons that is paired with a container color. All surface, accent, and feedback colors have a pairing and should be used together. For example, on-accent should always be paired with an accent-container value.
- **Feedback:** A group of colors that indicate actions such as success, error, warning, info, and disabled feedback states.
- **Accessible System Colors:** A set of accessible colors that are used throughout the user interface. These styling hooks contain the complete set of values based on their semantics, brand, neutral, and feedback colors. These styling hooks are mutable and their values are subject to change. Only reference these in edge cases where a semantic UI color does not make sense.
- **Color Palettes:** A range of accessible color palettes. These colors hold no semantics, and must be used sparingly for use cases that semantic and system colors don’t cover. These values are immutable and don’t change.
- **Ranges:** Every global styling hook set uses names that end in a numerical range, starting at 1 and ending at 100. The lowest number is always the lightest color of a color range or the lowest value of a property range. The highest number x is the darkest color of a color range or the largest value of a property range.

- **Surface:** Used for backgrounds and large areas of the application that express new visual stacking context to create visual depth.
- **Accent:** Used to emphasize key elements, typically through brand colors. Accent colors are configured through [Themes and Branding](https://help.salesforce.com/s/articleView?id=xcloud.brand_your_org_in_lightning_experience.htm&type=5). Setting brand colors in Themes and Branding will automatically assign corresponding accent values.
- **Container:** The fill color for elements that contain text or icons.
- **On:** Indicates the color of text or icons that is paired with a container color. All surface, accent, and feedback colors have a pairing and should be used together. For example, on-accent should always be paired with an accent-container value.
- **Feedback:** A group of colors that indicate actions such as success, error, warning, info, and disabled feedback states.

## Global Styling Hook Examples

To correctly employ global styling hooks in your code, follow these rules..

- Reference styling hooks
- Don’t re-assign the styling hook values.
- Provide a fallback value for your code to render properly in SLDS 1

### Reference code example:

#### Code to support SLDS 2 with fallback to SLDS 1

In this example, the SLDS 2 global styling hook is correctly referenced and the required fallback value is included.

```css
/* Incorrect */
.myClass {
--slds-g-color-accent-1: #ff0000; /* not recommended to re-assign global styling hook */  
}

/* correct */
.myClass {
    font-weight: var(--slds-g-font-weight-7,   /* slds 2 styling hook */
	      var(--lwc-fontWeightBold));   /* fallback -> slds1 design token */

}

.myClass {
    font-weight: var(--slds-g-font-weight-7, 700); /* fallback -> hard-coded value */

}
```

## Salesforce Private CSS Properties and Syntax

🛑 The use of SLDS private styling hooks and `@layer` syntax is prohibited.

Some SLDS styling hooks are private and reserved only for internal Salesforce use. They aren't documented for your use. Private SLDS styling hooks have prefixes `--_slds-` and `--slds-s-`. If you come across one of these hooks in your rendered content, don't reference it or assign a new value to it. These reserved properties are subject to change and can be removed in future releases.

You may also discover some syntax called `@layer`. This is an internal mechanism Salesforce uses to establish the correct CSS cascade that we expect CSS to render. Don't attempt to use `@layer` within your component CSS or modify the CSS within a layer.

## See Also

To learn more, check out these resources:

- Learn about[ component-level styling hooks](https://v1.lightningdesignsystem.com/platforms/lightning/styling-hooks/) on the SLDS 1 website
- Read about[ components](/components/components) on the SLDS 2 website
- Read about[ component blueprints](https://v1.lightningdesignsystem.com/components/overview/) on the SLDS 1 website
- Discover more about global styling hooks in the[ Global Styling Hooks Reference](/develop/global-styling-hooks)
- Read about density-aware styling hooks in [Display Density](/foundation/display-density)
