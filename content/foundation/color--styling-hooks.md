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

All color styling hooks are prefixed with `--slds-g-color-` and are followed by the color name. For example, --slds-g-color-accent-1 (#066AFE) is the styling hook for the accent color.

#### Exceptions

These global styling hooks are available in SLDS 1 but not in SLDS 2.

| `--slds-g-color-border-base-1` `--slds-g-color-border-base-2` `--slds-g-color-border-base-3` `--slds-g-color-border-base-4` `--slds-g-color-border-brand-1` `--slds-g-color-border-brand-2` `--slds-g-link-color` `--slds-g-link-color-hover` `--slds-g-link-color-focus` `--slds-g-link-color-active` | `--slds-g-color-neutral-10-opacity-10` `--slds-g-color-neutral-10-opacity-25` `--slds-g-color-neutral-10-opacity-50` `--slds-g-color-neutral-10-opacity-75` `--slds-g-color-neutral-100-opacity-10` `--slds-g-color-neutral-100-opacity-25` `--slds-g-color-neutral-100-opacity-50` `--slds-g-color-neutral-100-opacity-75` `--slds-g-shadow-outset-focus-1` `--slds-g-shadow-inset-focus-1` `--slds-g-shadow-inset-inverse-focus-1` `--slds-g-shadow-outline-focus-1` |
| :--- | --- |

All other system color styling hooks in this table are compatible with Lightning UI and Enhanced Lightning UI.

#### Surface Colors

Used for backgrounds and large areas of the application that express a new visual stacking context to create visual depth.

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-surface-1 | #FFFFFF | Color surface used for page backgrounds. |
| --slds-g-color-surface-2 | #F3F3F3 | Color surface used for darker page backgrounds. |
| --slds-g-color-surface-3 | #F3F3F3 | Color surface used for containers. |
| --slds-g-color-surface-inverse-1 | #032D60 | Inverse page background. Always pair with on-surface-inverse-1. |
| --slds-g-color-surface-inverse-2 | #03234D | Darker inverse page background. Always pair with on-surface-inverse-2. |

#### On Surface

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-on-surface-1 | #5C5C5C | Lightest text and icon fill. Used for body text, placeholder text, field labels, sub-headings, and taglines. |
| --slds-g-color-on-surface-2 | #2E2E2E | Darker text and icon fills used for secondary and tertiary headings, dark body copy, and filled input fields. |
| --slds-g-color-on-surface-3 | #03234D | Darkest text and icon fill used for title and pages or components. |
| --slds-g-color-on-surface-inverse-1 | #FFFFFF | Lightest text and icon fill on dark backgrounds. Always pair with surface-inverse-1 or surface-container-inverse-1. |
| --slds-g-color-on-surface-inverse-2 | #A8CBFF | Darker text and icon fill on dark backgrounds (50 to 100). Always pair with surface-inverse-2 or surface-container-inverse-2. |

#### Container

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-surface-container-1 | #FFFFFF | Default container background fill for components such as cards and modals. |
| --slds-g-color-surface-container-2 | #F3F3F3 | Darker color for container background fill for components. |
| --slds-g-color-surface-container-3 | #E5E5E5 | Darkest color for container background fill for components. |
| --slds-g-color-surface-container-inverse-1 | #032D60 | Inverse color container background fill for components. Always pair with on-surface-inverse-1. |
| --slds-g-color-surface-container-inverse-2 | #03234D | Inverse darker color container background fill for components. Always pair with on-surface-inverse-2. |

#### Accent Colors

Accent colors, typically brand colors, to emphasize areas that you want to draw attention to.

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-accent-1 | #066AFE | Emphasis color for large text and icon fills. |
| --slds-g-color-accent-2 | #0250D9 | Emphasis color for text, links, and icon color fills. Hover state color for interactive elements. |
| --slds-g-color-accent-3 | #022AC0 | Emphasis color for text, links, and icon alternative colors. Hover state color for interactive elements. |
| --slds-g-color-accent-container-1 | #066AFE | Background fill for containers that emphasize branded component and interactive elements such as Brand buttons. Always pair with on-accent-1. |
| --slds-g-color-accent-container-2 | #0250D9 | Background fill on hover state for containers that emphasize branded component and interactive elements such as Brand buttons. Always pair with on-accent-2. |
| --slds-g-color-accent-container-3 | #022AC0 | Alternative background fill on hover state for containers that emphasize branded component and interactive elements such as Brand buttons. Always pair with on-accent-3. |
| --slds-g-color-border-accent-1 | #066AFE | Border color for branded containers. |
| --slds-g-color-border-accent-2 | #0250D9 | Border color for branded containers. |
| --slds-g-color-border-accent-3 | #022AC0 | Hover border color for branded containers. |
| --slds-g-color-on-accent-1 | #FFFFFF | Text and icon fill color displayed on branded containers. Always pair with on-accent-container-1. |
| --slds-g-color-on-accent-2 | #FFFFFF | Text and icon fill color displayed on branded containers. Always pair with on-accent-container-2. |
| --slds-g-color-on-accent-3 | #FFFFFF | Text and icon fill color displayed on branded containers. Always pair with on-accent-container-3. |

### Feedback Colors

#### **Error Colors**

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-error-1 | #B60554 | Fill color for text and icons displaying an error. |
| --slds-g-color-on-error-1 | #B60554 | Fill color for text and icons displayed within an error container. Always pair with error-container-1. |
| --slds-g-color-on-error-2 | #8A033E | Fill color for text and icons displayed within an error container. Always pair with error-container-2. |
| --slds-g-color-error-container-1 | #FDDDE3 | Container background fill for error components such as toast or alerts. Always pair with on-error-1. |
| --slds-g-color-error-container-2 | #FDB6C5 | Container background fill for error components such as destructive buttons. Always pair with on-error-2. |
| --slds-g-color-border-error-1 | #B60554 | Border color for error containers such as destructive buttons. |
| --slds-g-color-border-error-2 | #8A033E | Hover border color for error containers such as destructive buttons. |

#### Warning Colors

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-warning-1 | #8C4B02 | Color Warning 1. |
| --slds-g-color-on-warning-1 | #8C4B02 | Step 1 in the On Warning scale. |
| --slds-g-color-warning-container-1 | #F9E3B6 | Color Warning Container 1. |
| --slds-g-color-border-warning-1 | #DD7A01 | Step 1 in the Border Warning scale for colors that define the borders of warning containers. |

#### Success Colors

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-success-1 | #056764 | Color Success 1. |
| --slds-g-color-on-success-1 | #056764 | Step 1 in the On Success scale for colors that define the on success colors. |
| --slds-g-color-on-success-2 | #023434 | Step 2 in the On Success scale for colors that define the on success colors. |
| --slds-g-color-border-success-1 | #056764 | Step 1 in the Border Success scale for colors that define the borders of success containers. |
| --slds-g-color-border-success-2 | #056764 | Step 2 in the Border Success scale for colors that define the borders of success containers. |
| --slds-g-color-success-container-1 | #ACF3E4 | Color Success Container 1. |
| --slds-g-color-success-container-2 | #04E1CB | Color Success Container 2. |

#### Info Colors

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-info-1 | #0B5CAB | Step 1 in the Info scale for colors that define the info colors. |
| --slds-g-color-info-container-1 | #D8E6FE | Step 1 in the Info Container scale for colors that define the info containers. |
| --slds-g-color-on-info-1 | #0B5CAB | Step 1 in the On Info scale for colors that define the on info colors. |

#### Disabled Colors

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-disabled-1 | #757575 | Fill color fo text and icons in disabled components or with disabled content. |
| --slds-g-color-on-disabled-1 | #757575 | Fill color for text and icons displayed within disabled-container-1 (netural-100). Always pair with disabled-container-1. |
| --slds-g-color-on-disabled-2 | #757575 | Fill color for text and icons displayed within disabled-container-2 (neutral-80). Always pair with disabled-container-2. |
| --slds-g-color-disabled-container-1 | #E5E5E5 | Disabled container background fill for white components. Always pair with on-disabled-1. |
| --slds-g-color-disabled-container-2 | #C9C9C9 | Disabled container background fill for grey components. Always pair with on-disabled-2. |
| --slds-g-color-border-disabled-1 | #757575 | Border color for disabled containers (border-2 becomes border-disabled-1 for disabled states). |

### System Colors

A set of accessible colors that are used throughout the user interface. They define visual intents like *brand*, *error*, *warning*, and *success*, without being tied to specific UI elements or components. Only use in edge cases where a semantic UI color does not make sense.

#### Neutral Colors

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-neutral-base-10 | #181818 | Step 10 in the Neutral color scale. |
| --slds-g-color-neutral-base-15 | #242424 | Step 15 in the Neutral color scale. |
| --slds-g-color-neutral-base-20 | #2E2E2E | Step 20 in the Neutral color scale. |
| --slds-g-color-neutral-base-30 | #444444 | Step 30 in the Neutral color scale. |
| --slds-g-color-neutral-base-40 | #5C5C5C | Step 40 in the Neutral color scale. |
| --slds-g-color-neutral-base-50 | #747474 | Step 50 in the Neutral color scale. |
| --slds-g-color-neutral-base-60 | #939393 | Step 60 in the Neutral color scale. |
| --slds-g-color-neutral-base-65 | #A0A0A0 | Step 65 in the Neutral color scale. |
| --slds-g-color-neutral-base-70 | #AEAEAE | Step 70 in the Neutral color scale. |
| --slds-g-color-neutral-base-80 | #C9C9C9 | Step 80 in the Neutral color scale. |
| --slds-g-color-neutral-base-90 | #E5E5E5 | Step 90 in the Neutral color scale. |
| --slds-g-color-neutral-base-95 | #F3F3F3 | Step 95 in the Neutral color scale. |
| --slds-g-color-neutral-base-100 | #FFFFFF | Step 100 in the Neutral color scale. |

#### **Brand Colors**

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-brand-base-10 | #001642 | Step 10 in the Brand color scale. |
| --slds-g-color-brand-base-15 | #001E5B | Step 15 in the Brand color scale. |
| --slds-g-color-brand-base-20 | #002775 | Step 20 in the Brand color scale. |
| --slds-g-color-brand-base-30 | #022AC0 | Step 30 in the Brand color scale. |
| --slds-g-color-brand-base-40 | #0250D9 | Step 40 in the Brand color scale. |
| --slds-g-color-brand-base-50 | #066AFE | Step 50 in the Brand color scale. |
| --slds-g-color-brand-base-60 | #4992FE | Step 60 in the Brand color scale. |
| --slds-g-color-brand-base-65 | #5F9FFE | Step 65 in the Brand color scale. |
| --slds-g-color-brand-base-70 | #7CB1FE | Step 70 in the Brand color scale. |
| --slds-g-color-brand-base-80 | #A8CBFF | Step 80 in the Brand color scale. |
| --slds-g-color-brand-base-90 | #D6E6FF | Step 90 in the Brand color scale. |
| --slds-g-color-brand-base-95 | #EDF4FF | Step 95 in the Brand color scale. |
| --slds-g-color-brand-base-100 | #FFFFFF | Step 100 in the Brand color scale. |

#### **Error Colors**

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-error-base-10 | #370114 | Step 10 in the Error color scale. |
| --slds-g-color-error-base-20 | #61022A | Step 20 in the Error color scale. |
| --slds-g-color-error-base-30 | #8A033E | Step 30 in the Error color scale. |
| --slds-g-color-error-base-40 | #B60554 | Step 40 in the Error color scale. |
| --slds-g-color-error-base-50 | #E3066A | Step 50 in the Error color scale. |
| --slds-g-color-error-base-60 | #FF538A | Step 60 in the Error color scale. |
| --slds-g-color-error-base-70 | #FE8AA7 | Step 70 in the Error color scale. |
| --slds-g-color-error-base-80 | #FDB6C5 | Step 80 in the Error color scale. |
| --slds-g-color-error-base-90 | #FDDDE3 | Step 90 in the Error color scale. |
| --slds-g-color-error-base-95 | #FEF0F3 | Step 95 in the Error color scale. |
| --slds-g-color-error-base-100 | #FFFFFF | Step 100 in the Error color scale. |

#### **Warning Colors**

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-warning-base-10 | #281202 | Step 10 in the Warning color scale. |
| --slds-g-color-warning-base-20 | #4F2100 | Step 20 in the Warning color scale. |
| --slds-g-color-warning-base-30 | #6F3400 | Step 30 in the Warning color scale. |
| --slds-g-color-warning-base-40 | #8C4B02 | Step 40 in the Warning color scale. |
| --slds-g-color-warning-base-50 | #A86403 | Step 50 in the Warning color scale. |
| --slds-g-color-warning-base-60 | #CA8501 | Step 60 in the Warning color scale. |
| --slds-g-color-warning-base-70 | #E4A201 | Step 70 in the Warning color scale. |
| --slds-g-color-warning-base-80 | #FCC003 | Step 80 in the Warning color scale. |
| --slds-g-color-warning-base-90 | #F9E3B6 | Step 90 in the Warning color scale. |
| --slds-g-color-warning-base-95 | #FBF3E0 | Step 95 in the Warning color scale. |
| --slds-g-color-warning-base-100 | #FFFFFF | Step 100 in the Warning color scale. |

#### **Success Colors**

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-success-base-10 | #071B12 | Step 10 in the Success color scale. |
| --slds-g-color-success-base-20 | #023434 | Step 20 in the Success color scale. |
| --slds-g-color-success-base-30 | #024D4C | Step 30 in the Success color scale. |
| --slds-g-color-success-base-40 | #056764 | Step 40 in the Success color scale. |
| --slds-g-color-success-base-50 | #0B827C | Step 50 in the Success color scale. |
| --slds-g-color-success-base-60 | #06A59A | Step 60 in the Success color scale. |
| --slds-g-color-success-base-70 | #01C3B3 | Step 70 in the Success color scale. |
| --slds-g-color-success-base-80 | #04E1CB | Step 80 in the Success color scale. |
| --slds-g-color-success-base-90 | #ACF3E4 | Step 90 in the Success color scale. |
| --slds-g-color-success-base-95 | #DEF9F3 | Step 95 in the Success color scale. |
| --slds-g-color-success-base-100 | #FFFFFF | Step 100 in the Success color scale. |

### Color Palette

A range of accessible color palettes. These colors hold no semantics and can be used within the user interface. These values are immutable and will not change.

#### Neutral

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-neutral-10 | #181818 | Step 10 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-15 | #242424 | Step 15 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-20 | #2E2E2E | Step 20 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-30 | #444444 | Step 30 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-40 | #5C5C5C | Step 40 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-50 | #747474 | Step 50 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-60 | #939393 | Step 60 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-65 | #A0A0A0 | Step 65 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-70 | #AEAEAE | Step 70 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-80 | #C9C9C9 | Step 80 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-90 | #E5E5E5 | Step 90 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-95 | #F3F3F3 | Step 95 in the palette Neutral scale. |
| --slds-g-color-palette-neutral-100 | #FFFFFF | Step 100 in the palette Neutral scale. |

#### Blue

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-blue-10 | #001639 | Step 10 in the palette Blue scale. |
| --slds-g-color-palette-blue-15 | #03234D | Step 15 in the palette Blue scale. |
| --slds-g-color-palette-blue-20 | #032D60 | Step 20 in the palette Blue scale. |
| --slds-g-color-palette-blue-30 | #014486 | Step 30 in the palette Blue scale. |
| --slds-g-color-palette-blue-40 | #0B5CAB | Step 40 in the palette Blue scale. |
| --slds-g-color-palette-blue-50 | #0176D3 | Step 50 in the palette Blue scale. |
| --slds-g-color-palette-blue-60 | #1B96FF | Step 60 in the palette Blue scale. |
| --slds-g-color-palette-blue-65 | #57A3FD | Step 65 in the palette Blue scale. |
| --slds-g-color-palette-blue-70 | #78B0FD | Step 70 in the palette Blue scale. |
| --slds-g-color-palette-blue-80 | #AACBFF | Step 80 in the palette Blue scale. |
| --slds-g-color-palette-blue-90 | #D8E6FE | Step 90 in the palette Blue scale. |
| --slds-g-color-palette-blue-95 | #EEF4FF | Step 95 in the palette Blue scale. |

#### Cloud Blue

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-cloud-blue-10 | #001A28 | Step 10 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-15 | #0A2636 | Step 15 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-20 | #023248 | Step 20 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-30 | #084968 | Step 30 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-40 | #05628A | Step 40 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-50 | #107CAD | Step 50 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-60 | #0D9DDA | Step 60 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-65 | #08ABED | Step 65 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-70 | #1AB9FF | Step 70 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-80 | #90D0FE | Step 80 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-90 | #CFE9FE | Step 90 in the palette Cloud Blue scale. |
| --slds-g-color-palette-cloud-blue-95 | #EAF5FE | Step 95 in the palette Cloud Blue scale. |

#### Electric Blue

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-electric-blue-10 | #001642 | Step 10 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-15 | #001E5B | Step 15 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-20 | #002775 | Step 20 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-30 | #022AC0 | Step 30 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-40 | #0250D9 | Step 40 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-50 | #066AFE | Step 50 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-60 | #4992FE | Step 60 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-65 | #5F9FFE | Step 65 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-70 | #7CB1FE | Step 70 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-80 | #A8CBFF | Step 80 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-90 | #D6E6FF | Step 90 in the palette Electric Blue scale. |
| --slds-g-color-palette-electric-blue-95 | #EDF4FF | Step 95 in the palette Electric Blue scale. |

#### Indigo

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-indigo-10 | #200647 | Step 10 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-15 | #1F0974 | Step 15 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-20 | #321D71 | Step 20 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-30 | #2F2CB7 | Step 30 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-40 | #3A49DA | Step 40 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-50 | #5867E8 | Step 50 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-60 | #7F8CED | Step 60 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-65 | #8E9BEF | Step 65 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-70 | #9EA9F1 | Step 70 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-80 | #BEC7F6 | Step 80 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-90 | #E0E5F8 | Step 90 in the palette Indigo scale. |
| --slds-g-color-palette-indigo-95 | #F1F3FB | Step 95 in the palette Indigo scale. |

#### Purple

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-purple-10 | #240643 | Step 10 in the palette Purple scale. |
| --slds-g-color-palette-purple-15 | #300B60 | Step 15 in the palette Purple scale. |
| --slds-g-color-palette-purple-20 | #401075 | Step 20 in the palette Purple scale. |
| --slds-g-color-palette-purple-30 | #5A1BA9 | Step 30 in the palette Purple scale. |
| --slds-g-color-palette-purple-40 | #7526E3 | Step 40 in the palette Purple scale. |
| --slds-g-color-palette-purple-50 | #9050E9 | Step 50 in the palette Purple scale. |
| --slds-g-color-palette-purple-60 | #AD7BEE | Step 60 in the palette Purple scale. |
| --slds-g-color-palette-purple-65 | #B78DEF | Step 65 in the palette Purple scale. |
| --slds-g-color-palette-purple-70 | #C29EF1 | Step 70 in the palette Purple scale. |
| --slds-g-color-palette-purple-80 | #D7BFF2 | Step 80 in the palette Purple scale. |
| --slds-g-color-palette-purple-90 | #ECE1F9 | Step 90 in the palette Purple scale. |
| --slds-g-color-palette-purple-95 | #F6F2FB | Step 95 in the palette Purple scale. |

#### Violet

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-violet-10 | #2E0039 | Step 10 in the palette Violet scale. |
| --slds-g-color-palette-violet-15 | #3D0157 | Step 15 in the palette Violet scale. |
| --slds-g-color-palette-violet-20 | #481A54 | Step 20 in the palette Violet scale. |
| --slds-g-color-palette-violet-30 | #730394 | Step 30 in the palette Violet scale. |
| --slds-g-color-palette-violet-40 | #9602C7 | Step 40 in the palette Violet scale. |
| --slds-g-color-palette-violet-50 | #BA01FF | Step 50 in the palette Violet scale. |
| --slds-g-color-palette-violet-60 | #CB65FF | Step 60 in the palette Violet scale. |
| --slds-g-color-palette-violet-65 | #D17DFE | Step 65 in the palette Violet scale. |
| --slds-g-color-palette-violet-70 | #D892FE | Step 70 in the palette Violet scale. |
| --slds-g-color-palette-violet-80 | #E5B9FE | Step 80 in the palette Violet scale. |
| --slds-g-color-palette-violet-90 | #F2DEFE | Step 90 in the palette Violet scale. |
| --slds-g-color-palette-violet-95 | #F9F0FF | Step 95 in the palette Violet scale. |

#### Red

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-red-10 | #300C01 | Step 10 in the palette Red scale. |
| --slds-g-color-palette-red-15 | #4A0C04 | Step 15 in the palette Red scale. |
| --slds-g-color-palette-red-20 | #640103 | Step 20 in the palette Red scale. |
| --slds-g-color-palette-red-30 | #8E030F | Step 30 in the palette Red scale. |
| --slds-g-color-palette-red-40 | #BA0517 | Step 40 in the palette Red scale. |
| --slds-g-color-palette-red-50 | #EA001E | Step 50 in the palette Red scale. |
| --slds-g-color-palette-red-60 | #FE5C4C | Step 60 in the palette Red scale. |
| --slds-g-color-palette-red-65 | #FE7765 | Step 65 in the palette Red scale. |
| --slds-g-color-palette-red-70 | #FE8F7D | Step 70 in the palette Red scale. |
| --slds-g-color-palette-red-80 | #FEB8AB | Step 80 in the palette Red scale. |
| --slds-g-color-palette-red-90 | #FEDED8 | Step 90 in the palette Red scale. |
| --slds-g-color-palette-red-95 | #FEF1EE | Step 95 in the palette Red scale. |

#### Pink

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-pink-10 | #370114 | Step 10 in the palette Pink scale. |
| --slds-g-color-palette-pink-15 | #4B0620 | Step 15 in the palette Pink scale. |
| --slds-g-color-palette-pink-20 | #61022A | Step 20 in the palette Pink scale. |
| --slds-g-color-palette-pink-30 | #8A033E | Step 30 in the palette Pink scale. |
| --slds-g-color-palette-pink-40 | #B60554 | Step 40 in the palette Pink scale. |
| --slds-g-color-palette-pink-50 | #E3066A | Step 50 in the palette Pink scale. |
| --slds-g-color-palette-pink-60 | #FF538A | Step 60 in the palette Pink scale. |
| --slds-g-color-palette-pink-65 | #FE7298 | Step 65 in the palette Pink scale. |
| --slds-g-color-palette-pink-70 | #FE8AA7 | Step 70 in the palette Pink scale. |
| --slds-g-color-palette-pink-80 | #FDB6C5 | Step 80 in the palette Pink scale. |
| --slds-g-color-palette-pink-90 | #FDDDE3 | Step 90 in the palette Pink scale. |
| --slds-g-color-palette-pink-95 | #FEF0F3 | Step 95 in the palette Pink scale. |

#### Hot Orange

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-hot-orange-10 | #281202 | Step 10 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-15 | #421604 | Step 15 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-20 | #4A2413 | Step 20 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-30 | #7E2600 | Step 30 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-40 | #AA3001 | Step 40 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-50 | #D83A00 | Step 50 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-60 | #FF5D2D | Step 60 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-65 | #FF784F | Step 65 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-70 | #FF906E | Step 70 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-80 | #FEB9A5 | Step 80 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-90 | #FFDED5 | Step 90 in the palette Hot Orange scale. |
| --slds-g-color-palette-hot-orange-95 | #FEF1ED | Step 95 in the palette Hot Orange scale. |

#### Orange

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-orange-10 | #201600 | Step 10 in the palette Orange scale. |
| --slds-g-color-palette-orange-15 | #371E03 | Step 15 in the palette Orange scale. |
| --slds-g-color-palette-orange-20 | #3E2B02 | Step 20 in the palette Orange scale. |
| --slds-g-color-palette-orange-30 | #5F3E02 | Step 30 in the palette Orange scale. |
| --slds-g-color-palette-orange-40 | #825101 | Step 40 in the palette Orange scale. |
| --slds-g-color-palette-orange-50 | #A96404 | Step 50 in the palette Orange scale. |
| --slds-g-color-palette-orange-60 | #DD7A01 | Step 60 in the palette Orange scale. |
| --slds-g-color-palette-orange-65 | #F38303 | Step 65 in the palette Orange scale. |
| --slds-g-color-palette-orange-70 | #FE9339 | Step 70 in the palette Orange scale. |
| --slds-g-color-palette-orange-80 | #FFBA90 | Step 80 in the palette Orange scale. |
| --slds-g-color-palette-orange-90 | #FEDFD0 | Step 90 in the palette Orange scale. |
| --slds-g-color-palette-orange-95 | #FFF1EA | Step 95 in the palette Orange scale. |

#### Yellow

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-yellow-10 | #281202 | Step 10 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-15 | #2E2204 | Step 15 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-20 | #4F2100 | Step 20 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-30 | #6F3400 | Step 30 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-40 | #8C4B02 | Step 40 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-50 | #A86403 | Step 50 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-60 | #CA8501 | Step 60 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-65 | #D79304 | Step 65 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-70 | #E4A201 | Step 70 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-80 | #FCC003 | Step 80 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-90 | #F9E3B6 | Step 90 in the palette Yellow scale. |
| --slds-g-color-palette-yellow-95 | #FBF3E0 | Step 95 in the palette Yellow scale. |

#### Teal

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-teal-10 | #071B12 | Step 10 in the palette Teal scale. |
| --slds-g-color-palette-teal-15 | #072825 | Step 15 in the palette Teal scale. |
| --slds-g-color-palette-teal-20 | #023434 | Step 20 in the palette Teal scale. |
| --slds-g-color-palette-teal-30 | #024D4C | Step 30 in the palette Teal scale. |
| --slds-g-color-palette-teal-40 | #056764 | Step 40 in the palette Teal scale. |
| --slds-g-color-palette-teal-50 | #0B827C | Step 50 in the palette Teal scale. |
| --slds-g-color-palette-teal-60 | #06A59A | Step 60 in the palette Teal scale. |
| --slds-g-color-palette-teal-65 | #03B4A7 | Step 65 in the palette Teal scale. |
| --slds-g-color-palette-teal-70 | #01C3B3 | Step 70 in the palette Teal scale. |
| --slds-g-color-palette-teal-80 | #04E1CB | Step 80 in the palette Teal scale. |
| --slds-g-color-palette-teal-90 | #ACF3E4 | Step 90 in the palette Teal scale. |
| --slds-g-color-palette-teal-95 | #DEF9F3 | Step 95 in the palette Teal scale. |

#### Green

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-color-palette-green-10 | #071B12 | Step 10 in the palette Green scale. |
| --slds-g-color-palette-green-15 | #0C2912 | Step 15 in the palette Green scale. |
| --slds-g-color-palette-green-20 | #1C3326 | Step 20 in the palette Green scale. |
| --slds-g-color-palette-green-30 | #194E31 | Step 30 in the palette Green scale. |
| --slds-g-color-palette-green-40 | #396547 | Step 40 in the palette Green scale. |
| --slds-g-color-palette-green-50 | #2E844A | Step 50 in the palette Green scale. |
| --slds-g-color-palette-green-60 | #3BA755 | Step 60 in the palette Green scale. |
| --slds-g-color-palette-green-65 | #41B658 | Step 65 in the palette Green scale. |
| --slds-g-color-palette-green-70 | #45C65A | Step 70 in the palette Green scale. |
| --slds-g-color-palette-green-80 | #91DB8B | Step 80 in the palette Green scale. |
| --slds-g-color-palette-green-90 | #CDEFC4 | Step 90 in the palette Green scale. |
| --slds-g-color-palette-green-95 | #EBF7E6 | Step 95 in the palette Green scale. |
