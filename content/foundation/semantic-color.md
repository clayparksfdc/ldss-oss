---
title: "Color"
slug: "semantic-color"
category: "foundation"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/655b28-color/b/25b51f"
extractedAt: "2026-02-21T18:18:10.522Z"
---

## Understand the SLDS color system

The Salesforce Lightning Design System (SLDS) color system gives you a flexible framework for building consistent and beautiful designs across your products. It includes derived color values for primary key colors and UI "surfaces," as well as explicit color values.

[Styling hooks](https://www.lightningdesignsystem.com/2e1ef8501/p/319e5f) manage visual styles. In Figma, styling hooks appear as variables and are applied through style properties. In code, styling hooks are expressed as CSS variables. We organize and name styling hooks so you can quickly understand where and how to use them.

## Categories


| **Category** | **Description** |
| --- | --- |
| `color, fill` | The default base color value. |
| `surface` | Applied only to the background of pages bottom layers of specific elements. |
| `surface-container` | Applied only to the background of elements that sit on top of a surface, and contain other UI elements or artifacts, such as text or icons. |
| `on-surface`, `on-feedback`, `on-accent` | Applied to the content (text or icons) that sits on top of a surface or a surface container such as a button. |
| `border` | Used for borders around containers, strokes, or divider lines. |

**Category**

**Description**

`color, fill`

The default base color value.

`surface`

Applied only to the background of pages bottom layers of specific elements.

`surface-container`

Applied only to the background of elements that sit on top of a surface, and contain other UI elements or artifacts, such as text or icons.

`on-surface`, `on-feedback`, `on-accent`

Applied to the content (text or icons) that sits on top of a surface or a surface container such as a button.

`border`

Used for borders around containers, strokes, or divider lines.

### Surface

A surface is a canvas that UI elements sit on. Surface colors express the visual stacking context of an app. Surface colors work together to enable sweeping changes, like dark mode.

Surface colors are reserved for the bottom layer of a surface. These elements are surfaces:

- Application background
- Panels
- Modals
- Docked containers
- Popovers
Anything that comes into the application's view and has a higher stacking context than a previous surface ultimately establishes a new surface.

**ℹ️ **Don't apply any decoration, brand bands, or textures to an application background.

### Surface-container

Surface container colors are reserved for the elements that sit on top of a surface and contain other UI elements or artifacts, such as text or icons. These elements are surface containers:

- Cards or containers
- Buttons
- Button icons
- Tabsets
One of the clearest signals that something is a surface container is if it contains text or icons.

ℹ️ **WCAG 2.1 color contrast requirements**

To ensure proper WCAG 2.1 color contrast requirements, pair the text that sits on top of a surface with an `on` surface value. It's valid to use any of the accent or feedback colors that are used for text or icons on top of a surface color, for example, 

--slds-g-color-accent-1

.

### On-Surface

Use the `on-surface` color value for text or icons that appear on top of a surface or surface container. This practice ensures that your content meets the color contrast requirements set by the Web Content Accessibility Guidelines (WCAG) 2.1.

For example, if a surface container is 

--slds-g-color-surface-container-3

 it will use 

--slds-g-color-on-surface-3

for the text on it.

ℹ️ Text links 

--slds-g-color-accent-2

,  disabled text 

--slds-g-color-on-disabled-2

, and feedback text colors 

--slds-g-color-on-error-1

 are available and can be found in those sections.

### Borders

Used for borders around containers, strokes, or divider lines. There are two border colors available on light and dark backgrounds.

#### ℹ️ WCAG 2.1 color contrast requirements

For compliance with WCAG 2.1 color contrast guidelines, if your component is an interactive element like a `button` or `input`, use 

--slds-g-color-border-2

. If your component is a non-interactive, presentational element like a divider line, use 

--slds-g-color-border-1

.

### Feedback

Feedback or alert colors provide visual feedback to the user regarding the status of an action or event. These colors are intentionally reserved to convey specific associations throughout the Salesforce UI.


| **Color** | **Meaning** |
| --- | --- |
| *                                * ** ** ** | An error that needs to be addressed before progressing |
| *                                * ** ** ** | A warning of potential issues the user needs to be aware of |
| *                                * ** ** ** | A positive or successful action or outcome |
| *                                * ** ** ** | Convey non-critical information to users |
| *                                * ** ** ** | Indicates that a component is unavailable |

**Color**

**Meaning**

An error that needs to be addressed before progressing

A warning of potential issues the user needs to be aware of

A positive or successful action or outcome

Convey non-critical information to users

Indicates that a component is unavailable

ℹ️ Only use feedback colors for their intended meaning so users have clear color associations throughout all of Salesforce products.

### Accent

Accent colors express a brand's accent color throughout the user interface or to draw attention to an action.

Brand colors highlight actions on the page through buttons and links.

- **accent-1, 2**, and **3** are used for color files like text or icons
- **accent-container-1, 2**, and **3** are for containers such as the brand buttons and hover and active states
- **border-accent-1, 2,** and **3** are reserved for button outlines
- **brand-base-90** and **80** are used for backgrounds and hover states for menu type components using the brand-base styling hooks
Accents can be used when no text or icon is on top of the accent color. Typically, accents are used to draw attention to something, and as a text color to indicate that an element is active or selected.

These elements can use accent colors:

- Links
- Icons
ℹ️ **electric blue-50**, **electric blue-40**, and **electric blue-30 **are reserved for buttons, hover states, and selected or active states. Do not use them for decorative purposes.

#### Border

The border accent color is reserved for adding borders or outlines that render the brand's accent color. You can use this independently or pair it with an accent container color.

## Do's and Don'ts

## Semantic Styling Hooks

### Surface Colors

Used for backgrounds and large areas of the application that express a new visual stacking context to create visual depth.

### On Surface

### Container

### Accent Colors

Accent colors, typically brand colors, to emphasize areas that you want to draw attention to.
