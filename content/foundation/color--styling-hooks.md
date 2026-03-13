---
title: "Color - Styling Hooks"
slug: "color--styling-hooks"
category: "foundation"
parent: "color"
order: 0
---

## About

This section lists the available global styling hooks and their values. Use the global styling hooks to apply Salesforce Lightning Design System values correctly to style your components. The design system determines the values of global styling hooks. Salesforce can change these values at any time and announce the changes in release notes. We don't support overriding the values of global styling hooks in your customizations.

### Semantic UI Color System

All color styling hooks are prefixed with `--slds-g-color-` and are followed by the color name. For example, 

 is the styling hook for the accent color.

#### Exceptions

These global styling hooks are available in SLDS 1 but not in SLDS 2.


| `--slds-g-color-border-base-1`  `--slds-g-color-border-base-2`  `--slds-g-color-border-base-3`  `--slds-g-color-border-base-4`  `--slds-g-color-border-brand-1`  `--slds-g-color-border-brand-2`  `--slds-g-link-color`  `--slds-g-link-color-hover`  `--slds-g-link-color-focus`  `--slds-g-link-color-active` | `--slds-g-color-neutral-10-opacity-10`  `--slds-g-color-neutral-10-opacity-25`  `--slds-g-color-neutral-10-opacity-50`  `--slds-g-color-neutral-10-opacity-75`  `--slds-g-color-neutral-100-opacity-10`  `--slds-g-color-neutral-100-opacity-25`  `--slds-g-color-neutral-100-opacity-50`  `--slds-g-color-neutral-100-opacity-75`  `--slds-g-shadow-outset-focus-1`  `--slds-g-shadow-inset-focus-1`  `--slds-g-shadow-inset-inverse-focus-1`  `--slds-g-shadow-outline-focus-1` |
| --- | --- |

All other system color styling hooks in this table are compatible with Lightning UI and Enhanced Lightning UI.

#### Surface Colors

Used for backgrounds and large areas of the application that express a new visual stacking context to create visual depth.

#### On Surface

#### Container

#### Accent Colors

Accent colors, typically brand colors, to emphasize areas that you want to draw attention to.

### Feedback Colors

#### Error Colors

#### Warning Colors

#### Success Colors

#### Info Colors

#### Disabled Colors

### System Colors

A set of accessible colors that are used throughout the user interface. They define visual intents like *brand*, *error*, *warning*, and *success*, without being tied to specific UI elements or components. Only use in edge cases where a semantic UI color does not make sense.

#### Neutral Colors

#### Brand Colors

#### Error Colors

#### Warning Colors

#### Success Colors

### Color Palette

A range of accessible color palettes. These colors hold no semantics and can be used within the user interface. These values are immutable and will not change.

#### Neutral

#### Blue

#### Cloud Blue

#### Electric Blue

#### Indigo

#### Purple

#### Violet

#### Red

#### Pink

#### Hot Orange

#### Orange

#### Yellow

#### Teal

#### Green
