---
title: "Color - Overview"
slug: "color--overview"
category: "foundation"
parent: "color"
order: 0
---

## About

Color is a foundational element in design that conveys meaning, improves usability, and builds a consistent brand identity. In the Salesforce Lightning Design System (SLDS), colors are carefully selected to support accessibility, maintain consistency, and align with Salesforce’s visual identity.

### Principles of Color Usage in SLDS

- **Accessibility First**
Colors in SLDS meet or exceed [Web Content Accessibility Guidelines (WCAG) 2.1 AA](https://www.w3.org/TR/WCAG21/) standards for contrast. The color choices make it easy for everyone to read our content, including people with visual impairments. Always test color combinations to make sure that they meet contrast requirements, especially for text on backgrounds.
- **Consistency Across Experiences**
Use SLDS styling hooks consistently to customize your styling. Styling hooks help to create a unified appearance across all Salesforce products and customizations. Avoid hardcoding colors so you can adapt to different themes.
- **Communicating Status and Meaning**
SLDS uses specific colors to represent different states, such as success, error, or warning. Styling hooks for these colors have semantic names that make it easy to understand their purpose. To align with Salesforce standards, always use these styling hooks instead of custom colors.

## Color Theory

### Color is intentional

Our color palette relies on white surfaces with intentional pops of bright color. These bold colors draw your attention to the most important information without overwhelming you.

### Color provides meaning

Consistent use of color styling hooks helps users easily associate colors with specific meanings.

### Color is a guide

Color choices in the user interface help users focus on important tasks, navigate the journey with ease, and complete tasks efficiently.

### Color sparks joy

The vibrant color pairs and gradients are meant to be delightful, but are used minimally within our system to make interfaces with lots of information easier to understand.

## Foundational Color

Foundational colors give meaning to specific UI elements.

Use foundational colors only for their intended purpose. Customers can use a product more easily if a specific color is associated with a consistent meaning throughout the product.

Foundational colors consist of:

- [**Semantically-named colors:**](/foundation/color--semantic-color) Used for building components and UI page elements such as backgrounds, borders, and fills. Use these colors only for their respective locations. For example, 

--slds-g-color-border-1

is meant for borders, strokes, or divider lines. Don’t use this color for the background of a container.
- [**System palette:**](/foundation/color--system-palette) Colors with no semantic assignment, but are commonly used by semantic hooks for elements throughout the UI.
- [**Color palette:**](/foundation/color--color-palette) Full spectrum of colors that aren't assigned to specific elements, and can be used for undefined situations.

## Color Density

For consistency across all pages, consider using a specific color palette to maintain the look and feel of the SLDS 2 visual design.

- **UI:** Use clean, light backgrounds to create a sense of simplicity and elegance. The foundational colors are white and light grays, with dark grays and dark blue to create contrast for text and interactive elements.
- **Accents:** Use bright hues strategically with the accent palette (electric blue) and feedback palettes (pink, yellow, teal, blue), to draw attention to specific elements and guide users to finish tasks.
- **Expressive colors:** Use the expressive palette for customized experiences with your app. The colors complement the palettes for the UI and accents.

## General Concepts

As you read, keep these key concepts in mind.

- **Semantic UI Colors:** A set of semantically-named styling hooks to represent the design properties that express the SLDS visual design. The styling hook names indicate where or how the colors are meant to be used. These styling hooks are mutable, so their values can change with the theme selected. 

**Surface:**Colors used for backgrounds and large areas of the application that create visual depth with a new visual stacking context.
-**Accent:** Colors, typically brand colors, used to draw the user's attention to a particular area.
- **Container:** The fill color for elements that contain text or icons.
- **On:** Colors to use for text or icons that are placed on a colored container. Each surface, accent, and feedback color has a paired color that's designed to be used with it. For example, an on-accent color is paired with an accent-container color.
- **Feedback:** Colors to indicate the status of Create, Read, Update, and Delete (CRUD) actions. The colors can represent success, error, warning, information, and disabled.
- **System Colors:** A set of accessible colors that are used throughout the user interface. These styling hooks contain the complete set of color values and have names to indicate their intended use. The set includes brand, neutral, and feedback colors. These styling hooks are mutable, so their values can change with the theme selected. Use them only in edge cases where semantic UI colors, such as those for surfaces and accents, don't make sense.
- **Color Palettes:** A range of accessible color palettes. These styling hooks are named after the colors they represent, rather than their intended use. They can be used anywhere within the user interface. These values are constant and won't change, regardless of the theme selected.
- **Ranges:** Every global styling hook set uses names that end in a numerical range, starting at 1 and ending at 100. The lowest number is always the lightest color of a color range or the lowest value of a property range. The highest number x is the darkest color of a color range or the largest value of a property range.

- **Surface:**Colors used for backgrounds and large areas of the application that create visual depth with a new visual stacking context.
-**Accent:** Colors, typically brand colors, used to draw the user's attention to a particular area.
- **Container:** The fill color for elements that contain text or icons.
- **On:** Colors to use for text or icons that are placed on a colored container. Each surface, accent, and feedback color has a paired color that's designed to be used with it. For example, an on-accent color is paired with an accent-container color.
- **Feedback:** Colors to indicate the status of Create, Read, Update, and Delete (CRUD) actions. The colors can represent success, error, warning, information, and disabled.
