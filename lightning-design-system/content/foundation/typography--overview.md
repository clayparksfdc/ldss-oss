---
title: "Typography - Overview"
slug: "typography--overview"
category: "foundation"
parent: "typography"
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

The font scale uses the property`font-scale` and ranges in size from` `

to 

. Set font sizes within your code using`--slds-g-font-scale-*` styling hooks.

ℹ️ In SLDS 2, font sizes differ slightly from the original Salesforce Lightning Design System (SLDS 1). If you're using SLDS 2, review your components to see if there's a new type scale specification. Most components have minor font changes when viewed in SLDS 2 compared to SLDS 1.

## Font weight

SLDS 2 uses only light, regular, semibold, and bold font weights.

Font weights uses the property 

 through 

. Set font weights within your code using`--slds-g-font-weight-*` styling hooks.


| **Weight** | **Styling Hook** | **Value** | **Used For** |
| --- | --- | --- | --- |
| Light |  | 300 | Display text |
| Regular |  | 400 | Titles and body text |
| Semibold |  | 600 | Buttons and smaller body titles |
| Bold |  | 700 | Emphasize text where needed, use sparingly |

## Font color

On light backgrounds, you can apply these colors to text.

- (lightest text)
- (darker text)
- (titles)

On dark backgrounds, you can apply `on-surface-inverse`.

- Text links use 

 (electric blue 40)
- Feedback text can use the appropriate alert color, such as 

 or
