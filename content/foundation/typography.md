---
title: "Typography"
slug: "typography"
category: "foundation"
order: 0
---

## About

Typography is a cornerstone of any design system, shaping how users consume and understand content. In the Salesforce Lightning Design System (SLDS), typography is standardized to create a consistent, readable, and accessible experience across all products. SLDS uses a predefined set of font sizes, weights, and styles that adapt to various screen sizes and contexts.

### Best Practices

- **Legibility**. To make text readable across devices, use appropriate font sizes and weights. Avoid using overly light or small text for essential content.
- **Hierarchy**. To guide users through the content, consistently apply heading styles and text colors. Stick to the predefined SLDS scale to maintain visual balance.
- **Customization**. To customize typography, use SLDS styling hooks instead of hardcoding styles. Styling hooks automatically receive SLDS updates and provide consistency and resilience for your styling.
- **Accessibility**. To make content accessible, provide proper contrast between text and background colors, especially for critical content like error messages or buttons.

## Fonts

The design system uses system fonts provided by a user device's operating system. The system font varies across devices. The Figma library for SLDS 2 uses SF Pro as its primary typeface. SF Pro is a variant of the San Francisco typeface and is used as the system font on Apple devices.

### Download System Fonts

ℹ️ All font weights and sizes remain the same in any system font.

## Font scale

The font scale uses the property`font-scale` and ranges in size from` `**
--slds-g-font-scale-2

to **
--slds-g-font-scale-8

. Set font sizes within your code using`--slds-g-font-scale-*` styling hooks.

ℹ️ In SLDS 2, font sizes differ slightly from the original Salesforce Lightning Design System (SLDS 1). If you're using SLDS 2, review your components to see if there's a new type scale specification. Most components have minor font changes when viewed in SLDS 2 compared to SLDS 1.

## Font weight

SLDS 2 uses only light, regular, semibold, and bold font weights.

Font weights uses the property **
--slds-g-font-weight-3

 through **
--slds-g-font-weight-7

. Set font weights within your code using`--slds-g-font-weight-*` styling hooks.


| **Weight** | **Styling Hook** | **Value** | **Used For** |
| --- | --- | --- | --- |
| Light | ** --slds-g-font-weight-3 | 300 | Display text |
| Regular | ** --slds-g-font-weight-4 | 400 | Titles and body text |
| Semibold | ** --slds-g-font-weight-6 | 600 | Buttons and smaller body titles |
| Bold | ** --slds-g-font-weight-7 | 700 | Emphasize text where needed, use sparingly |

**Weight**

**Styling Hook**

**Value**

**Used For**

Light

**
--slds-g-font-weight-3

300

Display text

Regular

**
--slds-g-font-weight-4

400

Titles and body text

Semibold

**
--slds-g-font-weight-6

600

Buttons and smaller body titles

Bold

**
--slds-g-font-weight-7

700

Emphasize text where needed, use sparingly

## Font color

On light backgrounds, you can apply these colors to text.

- --slds-g-color-on-surface-1
 (lightest text)
- --slds-g-color-on-surface-2
(darker text)
- --slds-g-color-on-surface-3
 (titles)

--slds-g-color-on-surface-1

 (lightest text)

--slds-g-color-on-surface-2

(darker text)

--slds-g-color-on-surface-3

 (titles)

On dark backgrounds, you can apply `on-surface-inverse`.

- Text links use 
--slds-g-color-accent-1

 (electric blue 40)
- Feedback text can use the appropriate alert color, such as 
--slds-g-color-error-1

 or 

--slds-g-color-on-error-1

Text links use 

--slds-g-color-accent-1

 (electric blue 40)

Feedback text can use the appropriate alert color, such as 

--slds-g-color-error-1

 or 

--slds-g-color-on-error-1
