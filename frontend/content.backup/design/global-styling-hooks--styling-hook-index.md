---
title: "Global Styling Hooks"
slug: "global-styling-hooks--styling-hook-index"
category: "design"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/591960-global-styling-hooks/b/768d36"
extractedAt: "2026-02-23T01:26:01.374Z"
---

## Global Styling Hooks Index

This section lists the available global styling hooks and their values. Reference the global styling hooks to apply Salesforce Lightning Design System values correctly to style your components. The design system determines the values of global styling hooks. Salesforce can change these values at any time and announce the changes in release notes. We don't support overriding the values of global styling hooks in your customizations.

⚠️ Global styling hooks are compatible with SLDS 2. If you’re working in SLDS 1, reference component-level styling hooks and design tokens instead of global styling hooks.

## Color

### Semantic UI Color System

All color styling hooks are prefixed with --slds-g-color- and are followed by the color name. For example, --slds-g-color-accent-1 is the styling hook for the accent color.

#### Exceptions

These global styling hooks are available in SLDS 1 but not in SLDS 2.

`--slds-g-color-border-base-1`

`--slds-g-color-border-base-2`

`--slds-g-color-border-base-3`

`--slds-g-color-border-base-4`

`--slds-g-color-border-brand-1`

`--slds-g-color-border-brand-2`

`--slds-g-link-color`

`--slds-g-link-color-hover`

`--slds-g-link-color-focus`

`--slds-g-link-color-active`

`--slds-g-color-neutral-10-opacity-10`

`--slds-g-color-neutral-10-opacity-25`

`--slds-g-color-neutral-10-opacity-50`

`--slds-g-color-neutral-10-opacity-75`

`--slds-g-color-neutral-100-opacity-10`

`--slds-g-color-neutral-100-opacity-25`

`--slds-g-color-neutral-100-opacity-50`

`--slds-g-color-neutral-100-opacity-75`

`--slds-g-shadow-outset-focus-1`

`--slds-g-shadow-inset-focus-1`

`--slds-g-shadow-inset-inverse-focus-1`

`--slds-g-shadow-outline-focus-1`All other system color styling hooks in this table are compatible with Lightning UI and Enhanced Lightning UI.

#### Surface Colors

Used for backgrounds and large areas of the application that express a new visual stacking context to create visual depth.


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-surface-1` | Color surface used for page backgrounds. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |
|  | `--slds-g-color-surface-2` | Color surface used for darker page backgrounds. | #F3F3F3 / rgb(243, 243, 243) / hsl(0, 0%, 95.3%) |
|  | `--slds-g-color-surface-3` | Color surface used for containers. | #F3F3F3 / rgb(243, 243, 243) / hsl(0, 0%, 95.3%) |
|  | `--slds-g-color-surface-inverse-1` | Inverse page background. Always pair with on-surface-inverse-1. | #032D60 / rgb(3, 45, 96) / hsl(212.9, 93.9%, 19.4%) |
|  | `--slds-g-color-surface-inverse-2` | Darker inverse page background. Always pair with on-surface-inverse-2. | #03234D / rgb(3, 35, 77) / hsl(214.1, 92.5%, 15.7%) |

#### On Surface


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-on-surface-1` | Lightest text and icon fill. Used for body text, placeholder text, field labels, sub-headings, and taglines. | #5C5C5C / rgb(92, 92, 92) / hsl(0, 0%, 36.1%) |
|  | `--slds-g-color-on-surface-2` | Darker text and icon fills used for secondary and tertiary headings, dark body copy, and filled input fields. | #2E2E2E / rgb(46, 46, 46) / hsl(0, 0%, 18%) |
|  | `--slds-g-color-on-surface-3` | Darkest text and icon fill used for title and pages or components. | #03234D / rgb(3, 35, 77) / hsl(214.1, 92.5%, 15.7%) |
|  | `--slds-g-color-on-surface-inverse-1` | Lightest text and icon fill on dark backgrounds. Always pair with surface-inverse-1 or surface-container-inverse-1. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |
|  | `--slds-g-color-on-surface-inverse-2` | Darker text and icon fill on dark backgrounds (50 to 100). Always pair with surface-inverse-2 or surface-container-inverse-2. | #A8CBFF / rgb(168, 203, 255) / hsl(215.9, 100%, 82.9%) |

#### Container


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-surface-container-1` | Default container background fill for components such as cards and modals. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |
|  | `--slds-g-color-surface-container-2` | Darker color for container background fill for components. | #F3F3F3 / rgb(243, 243, 243) / hsl(0, 0%, 95.3%) |
|  | `--slds-g-color-surface-container-3` | Darkest color for container background fill for components. | #E5E5E5 / rgb(229, 229, 229) / hsl(0, 0%, 89.8%) |
|  | `--slds-g-color-surface-container-inverse-1` | Inverse color container background fill for components. Always pair with on-surface-inverse-1. | #032D60 / rgb(3, 45, 96) / hsl(212.9, 93.9%, 19.4%) |
|  | `--slds-g-color-surface-container-inverse-2` | Inverse darker color container background fill for components. Always pair with on-surface-inverse-2. | #03234D / rgb(3, 35, 77) / hsl(214.1, 92.5%, 15.7%) |

#### Accent Colors

Accent colors, typically brand colors, to emphasize areas that you want to draw attention to.


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-accent-1` | Emphasis color for large text and icon fills. | #066AFE / rgb(6, 106, 254) / hsl(215.8, 99.2%, 51%) |
|  | `--slds-g-color-accent-2` | Emphasis color for text, links, and icon color fills. Hover state color for interactive elements. | #0250D9 / rgb(2, 80, 217) / hsl(218.2, 73.9%, 42.9%) |
|  | `--slds-g-color-accent-3` | Emphasis color for text, links, and icon alternative colors. Hover state color for interactive elements. | #022AC0 / rgb(2, 42, 192) / hsl(227.4, 60.1%, 38%) |
|  | `--slds-g-color-accent-container-1` | Background fill for containers that emphasize branded component and interactive elements such as Brand buttons. Always pair with on-accent-1. | #066AFE / rgb(6, 106, 254) / hsl(215.8, 99.2%, 51%) |
|  | `--slds-g-color-accent-container-2` | Background fill on hover state for containers that emphasize branded component and interactive elements such as Brand buttons. Always pair with on-accent-2. | #0250D9 / rgb(2, 80, 217) / hsl(218.2, 73.9%, 42.9%) |
|  | `--slds-g-color-accent-container-3` | Alternative background fill on hover state for containers that emphasize branded component and interactive elements such as Brand buttons. Always pair with on-accent-3. | #022AC0 / rgb(2, 42, 192) / hsl(227.4, 60.1%, 38%) |
|  | `--slds-g-color-border-accent-1` | Border color for branded containers. | #066AFE / rgb(6, 106, 254) / hsl(215.8, 99.2%, 51%) |
|  | `--slds-g-color-border-accent-2` | Border color for branded containers. | #0250D9 / rgb(2, 80, 217) / hsl(218.2, 73.9%, 42.9%) |
|  | `--slds-g-color-border-accent-3` | Hover border color for branded containers. | #022AC0 / rgb(2, 42, 192) / hsl(227.4, 60.1%, 38%) |
|  | `--slds-g-color-on-accent-1` | Text and icon fill color displayed on branded containers. Always pair with on-accent-container-1. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |
|  | `--slds-g-color-on-accent-2` | Text and icon fill color displayed on branded containers. Always pair with on-accent-container-2. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |
|  | `--slds-g-color-on-accent-3` | Text and icon fill color displayed on branded containers. Always pair with on-accent-container-3. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |

### Feedback Colors

#### Error Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-error-1` | Fill color for text and icons displaying an error. | #B60554 / rgb(182, 5, 84) / hsl(333.2, 54.8%, 36.7%) |
|  | `--slds-g-color-on-error-1` | Fill color for text and icons displayed within an error container. Always pair with error-container-1. | #B60554 / rgb(182, 5, 84) / hsl(333.2, 54.8%, 36.7%) |
|  | `--slds-g-color-on-error-2` | Fill color for text and icons displayed within an error container. Always pair with error-container-2. | #8A033E / rgb(138, 3, 62) / hsl(333.8, 36.6%, 27.6%) |
|  | `--slds-g-color-error-container-1` | Container background fill for error components such as toast or alerts. Always pair with on-error-1. | #FDDDE3 / rgb(253, 221, 227) / hsl(348.8, 88.9%, 92.9%) |
|  | `--slds-g-color-error-container-2` | Container background fill for error components such as destructive buttons. Always pair with on-error-2. | #FDB6C5 / rgb(253, 182, 197) / hsl(347.3, 94.7%, 85.3%) |
|  | `--slds-g-color-border-error-1` | Border color for error containers such as destructive buttons. | #B60554 / rgb(182, 5, 84) / hsl(333.2, 54.8%, 36.7%) |
|  | `--slds-g-color-border-error-2` | Hover border color for error containers such as destructive buttons. | #8A033E / rgb(138, 3, 62) / hsl(333.8, 36.6%, 27.6%) |

#### Warning Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-warning-1` | Color Warning 1. | #8C4B02 / rgb(140, 75, 2) / hsl(31.7, 37.5%, 27.8%) |
|  | `--slds-g-color-on-warning-1` | Step 1 in the On Warning scale. | #8C4B02 / rgb(140, 75, 2) / hsl(31.7, 37.5%, 27.8%) |
|  | `--slds-g-color-warning-container-1` | Color Warning Container 1. | #F9E3B6 / rgb(249, 227, 182) / hsl(40.3, 84.8%, 84.5%) |
|  | `--slds-g-color-border-warning-1` | Step 1 in the Border Warning scale for colors that define the borders of warning containers. | #DD7A01 / rgb(221, 122, 1) / hsl(33, 76.4%, 43.5%) |

#### Success Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-success-1` | Color Success 1. | #056764 / rgb(5, 103, 100) / hsl(178.2, 90.7%, 21.2%) |
|  | `--slds-g-color-on-success-1` | Step 1 in the On Success scale for colors that define the on success colors. | #056764 / rgb(5, 103, 100) / hsl(178.2, 90.7%, 21.2%) |
|  | `--slds-g-color-on-success-2` | Step 2 in the On Success scale for colors that define the on success colors. | #023434 / rgb(2, 52, 52) / hsl(180, 92.6%, 10.6%) |
|  | `--slds-g-color-border-success-1` | Step 1 in the Border Success scale for colors that define the borders of success containers. | #056764 / rgb(5, 103, 100) / hsl(178.2, 90.7%, 21.2%) |
|  | `--slds-g-color-border-success-2` | Step 2 in the Border Success scale for colors that define the borders of success containers. | #056764 / rgb(5, 103, 100) / hsl(178.2, 90.7%, 21.2%) |
|  | `--slds-g-color-success-container-1` | Color Success Container 1. | #ACF3E4 / rgb(172, 243, 228) / hsl(167.3, 74.7%, 81.4%) |
|  | `--slds-g-color-success-container-2` | Color Success Container 2. | #04E1CB / rgb(4, 225, 203) / hsl(174, 78.6%, 44.9%) |

#### Info Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-info-1` | Step 1 in the Info scale for colors that define the info colors. | #0B5CAB / rgb(11, 92, 171) / hsl(209.6, 48.8%, 35.7%) |
|  | `--slds-g-color-info-container-1` | Step 1 in the Info Container scale for colors that define the info containers. | #D8E6FE / rgb(216, 230, 254) / hsl(217.9, 95%, 92.2%) |
|  | `--slds-g-color-on-info-1` | Step 1 in the On Info scale for colors that define the on info colors. | #0B5CAB / rgb(11, 92, 171) / hsl(209.6, 48.8%, 35.7%) |

#### Disabled Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-disabled-1` | Fill color fo text and icons in disabled components or with disabled content. | #757575 / rgb(117, 117, 117) / hsl(0, 0%, 45.9%) |
|  | `--slds-g-color-on-disabled-1` | Fill color for text and icons displayed within disabled-container-1 (netural-100). Always pair with disabled-container-1. | #757575 / rgb(117, 117, 117) / hsl(0, 0%, 45.9%) |
|  | `--slds-g-color-on-disabled-2` | Fill color for text and icons displayed within disabled-container-2 (neutral-80). Always pair with disabled-container-2. | #757575 / rgb(117, 117, 117) / hsl(0, 0%, 45.9%) |
|  | `--slds-g-color-disabled-container-1` | Disabled container background fill for white components. Always pair with on-disabled-1. | #E5E5E5 / rgb(229, 229, 229) / hsl(0, 0%, 89.8%) |
|  | `--slds-g-color-disabled-container-2` | Disabled container background fill for grey components. Always pair with on-disabled-2. | #C9C9C9 / rgb(201, 201, 201) / hsl(0, 0%, 78.8%) |
|  | `--slds-g-color-border-disabled-1` | Border color for disabled containers (border-2 becomes border-disabled-1 for disabled states). | #757575 / rgb(117, 117, 117) / hsl(0, 0%, 45.9%) |

### System Colors

A set of accessible colors that are used throughout the user interface. They define visual intents like brand, error, warning, and success, without being tied to specific UI elements or components. Only use in edge cases where a semantic UI color does not make sense.

#### Neutral Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-neutral-base-0` | Step 0 in the Neutral color scale. | #000000 / rgb(0, 0, 0) / hsl(0, 0%, 0%) |
|  | `--slds-g-color-neutral-base-10` | Step 10 in the Neutral color scale. | #181818 / rgb(24, 24, 24) / hsl(0, 0%, 9.4%) |
|  | `--slds-g-color-neutral-base-15` | Step 15 in the Neutral color scale. | #242424 / rgb(36, 36, 36) / hsl(0, 0%, 14.1%) |
|  | `--slds-g-color-neutral-base-20` | Step 20 in the Neutral color scale. | #2E2E2E / rgb(46, 46, 46) / hsl(0, 0%, 18%) |
|  | `--slds-g-color-neutral-base-30` | Step 30 in the Neutral color scale. | #444444 / rgb(68, 68, 68) / hsl(0, 0%, 26.7%) |
|  | `--slds-g-color-neutral-base-40` | Step 40 in the Neutral color scale. | #5C5C5C / rgb(92, 92, 92) / hsl(0, 0%, 36.1%) |
|  | `--slds-g-color-neutral-base-50` | Step 50 in the Neutral color scale. | #747474 / rgb(116, 116, 116) / hsl(0, 0%, 45.5%) |
|  | `--slds-g-color-neutral-base-60` | Step 60 in the Neutral color scale. | #939393 / rgb(147, 147, 147) / hsl(0, 0%, 57.6%) |
|  | `--slds-g-color-neutral-base-65` | Step 65 in the Neutral color scale. | #A0A0A0 / rgb(160, 160, 160) / hsl(0, 0%, 62.7%) |
|  | `--slds-g-color-neutral-base-70` | Step 70 in the Neutral color scale. | #AEAEAE / rgb(174, 174, 174) / hsl(0, 0%, 68.2%) |
|  | `--slds-g-color-neutral-base-80` | Step 80 in the Neutral color scale. | #C9C9C9 / rgb(201, 201, 201) / hsl(0, 0%, 78.8%) |
|  | `--slds-g-color-neutral-base-90` | Step 90 in the Neutral color scale. | #E5E5E5 / rgb(229, 229, 229) / hsl(0, 0%, 89.8%) |
|  | `--slds-g-color-neutral-base-95` | Step 95 in the Neutral color scale. | #F3F3F3 / rgb(243, 243, 243) / hsl(0, 0%, 95.3%) |
|  | `--slds-g-color-neutral-base-100` | Step 100 in the Neutral color scale. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |

#### Brand Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-brand-base-10` | Step 10 in the Brand color scale. | #001642 / rgb(0, 22, 66) / hsl(220, 100%, 12.9%) |
|  | `--slds-g-color-brand-base-15` | Step 15 in the Brand color scale. | #001E5B / rgb(0, 30, 91) / hsl(220.2, 100%, 17.8%) |
|  | `--slds-g-color-brand-base-20` | Step 20 in the Brand color scale. | #002775 / rgb(0, 39, 117) / hsl(220, 100%, 22.9%) |
|  | `--slds-g-color-brand-base-30` | Step 30 in the Brand color scale. | #022AC0 / rgb(2, 42, 192) / hsl(227.4, 60.1%, 38%) |
|  | `--slds-g-color-brand-base-40` | Step 40 in the Brand color scale. | #0250D9 / rgb(2, 80, 217) / hsl(218.2, 73.9%, 42.9%) |
|  | `--slds-g-color-brand-base-50` | Step 50 in the Brand color scale. | #066AFE / rgb(6, 106, 254) / hsl(215.8, 99.2%, 51%) |
|  | `--slds-g-color-brand-base-60` | Step 60 in the Brand color scale. | #4992FE / rgb(73, 146, 254) / hsl(215.8, 98.9%, 64.1%) |
|  | `--slds-g-color-brand-base-65` | Step 65 in the Brand color scale. | #5F9FFE / rgb(95, 159, 254) / hsl(215.8, 98.8%, 68.4%) |
|  | `--slds-g-color-brand-base-70` | Step 70 in the Brand color scale. | #7CB1FE / rgb(124, 177, 254) / hsl(215.5, 98.5%, 74.1%) |
|  | `--slds-g-color-brand-base-80` | Step 80 in the Brand color scale. | #A8CBFF / rgb(168, 203, 255) / hsl(215.9, 100%, 82.9%) |
|  | `--slds-g-color-brand-base-90` | Step 90 in the Brand color scale. | #D6E6FF / rgb(214, 230, 255) / hsl(216.6, 100%, 92%) |
|  | `--slds-g-color-brand-base-95` | Step 95 in the Brand color scale. | #EDF4FF / rgb(237, 244, 255) / hsl(216.7, 100%, 96.5%) |

#### Error Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-error-base-10` | Step 10 in the Error color scale. | #370114 / rgb(55, 1, 20) / hsl(338.9, 96.4%, 11%) |
|  | `--slds-g-color-error-base-20` | Step 20 in the Error color scale. | #61022A / rgb(97, 2, 42) / hsl(334.7, 96%, 19.4%) |
|  | `--slds-g-color-error-base-30` | Step 30 in the Error color scale. | #8A033E / rgb(138, 3, 62) / hsl(333.8, 36.6%, 27.6%) |
|  | `--slds-g-color-error-base-40` | Step 40 in the Error color scale. | #B60554 / rgb(182, 5, 84) / hsl(333.2, 54.8%, 36.7%) |
|  | `--slds-g-color-error-base-50` | Step 50 in the Error color scale. | #E3066A / rgb(227, 6, 106) / hsl(332.9, 79.8%, 45.7%) |
|  | `--slds-g-color-error-base-60` | Step 60 in the Error color scale. | #FF538A / rgb(255, 83, 138) / hsl(340.8, 100%, 66.3%) |
|  | `--slds-g-color-error-base-70` | Step 70 in the Error color scale. | #FE8AA7 / rgb(254, 138, 167) / hsl(345, 98.3%, 76.9%) |
|  | `--slds-g-color-error-base-80` | Step 80 in the Error color scale. | #FDB6C5 / rgb(253, 182, 197) / hsl(347.3, 94.7%, 85.3%) |
|  | `--slds-g-color-error-base-90` | Step 90 in the Error color scale. | #FDDDE3 / rgb(253, 221, 227) / hsl(348.8, 88.9%, 92.9%) |
|  | `--slds-g-color-error-base-95` | Step 95 in the Error color scale. | #FEF0F3 / rgb(254, 240, 243) / hsl(347.1, 87.5%, 96.9%) |
|  | `--slds-g-color-error-base-100` | Step 100 in the Error color scale. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |

#### Warning Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-warning-base-10` | Step 10 in the Warning color scale. | #281202 / rgb(40, 18, 2) / hsl(25.3, 90.5%, 8.2%) |
|  | `--slds-g-color-warning-base-20` | Step 20 in the Warning color scale. | #4F2100 / rgb(79, 33, 0) / hsl(25.1, 100%, 15.5%) |
|  | `--slds-g-color-warning-base-30` | Step 30 in the Warning color scale. | #6F3400 / rgb(111, 52, 0) / hsl(28.1, 100%, 21.8%) |
|  | `--slds-g-color-warning-base-40` | Step 40 in the Warning color scale. | #8C4B02 / rgb(140, 75, 2) / hsl(31.7, 37.5%, 27.8%) |
|  | `--slds-g-color-warning-base-50` | Step 50 in the Warning color scale. | #A86403 / rgb(168, 100, 3) / hsl(35.3, 48.7%, 33.5%) |
|  | `--slds-g-color-warning-base-60` | Step 60 in the Warning color scale. | #CA8501 / rgb(202, 133, 1) / hsl(39.4, 65.5%, 39.8%) |
|  | `--slds-g-color-warning-base-70` | Step 70 in the Warning color scale. | #E4A201 / rgb(228, 162, 1) / hsl(42.6, 80.8%, 44.9%) |
|  | `--slds-g-color-warning-base-80` | Step 80 in the Warning color scale. | #FCC003 / rgb(252, 192, 3) / hsl(45.5, 97.6%, 50%) |
|  | `--slds-g-color-warning-base-90` | Step 90 in the Warning color scale. | #F9E3B6 / rgb(249, 227, 182) / hsl(40.3, 84.8%, 84.5%) |
|  | `--slds-g-color-warning-base-95` | Step 95 in the Warning color scale. | #FBF3E0 / rgb(251, 243, 224) / hsl(42.2, 77.1%, 93.1%) |
|  | `--slds-g-color-warning-base-100` | Step 100 in the Warning color scale. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |

#### Success Colors


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-success-base-10` | Step 10 in the Success color scale. | #071B12 / rgb(7, 27, 18) / hsl(153, 58.8%, 6.7%) |
|  | `--slds-g-color-success-base-20` | Step 20 in the Success color scale. | #023434 / rgb(2, 52, 52) / hsl(180, 92.6%, 10.6%) |
|  | `--slds-g-color-success-base-30` | Step 30 in the Success color scale. | #024D4C / rgb(2, 77, 76) / hsl(179.2, 94.9%, 15.5%) |
|  | `--slds-g-color-success-base-40` | Step 40 in the Success color scale. | #056764 / rgb(5, 103, 100) / hsl(178.2, 90.7%, 21.2%) |
|  | `--slds-g-color-success-base-50` | Step 50 in the Success color scale. | #0B827C / rgb(11, 130, 124) / hsl(177, 32.2%, 27.6%) |
|  | `--slds-g-color-success-base-60` | Step 60 in the Success color scale. | #06A59A / rgb(6, 165, 154) / hsl(175.8, 46.9%, 33.5%) |
|  | `--slds-g-color-success-base-70` | Step 70 in the Success color scale. | #01C3B3 / rgb(1, 195, 179) / hsl(175.1, 61.8%, 38.4%) |
|  | `--slds-g-color-success-base-80` | Step 80 in the Success color scale. | #04E1CB / rgb(4, 225, 203) / hsl(174, 78.6%, 44.9%) |
|  | `--slds-g-color-success-base-90` | Step 90 in the Success color scale. | #ACF3E4 / rgb(172, 243, 228) / hsl(167.3, 74.7%, 81.4%) |
|  | `--slds-g-color-success-base-95` | Step 95 in the Success color scale. | #DEF9F3 / rgb(222, 249, 243) / hsl(166.7, 69.2%, 92.4%) |
|  | `--slds-g-color-success-base-100` | Step 100 in the Success color scale. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |

### Color Palette

A range of accessible color palettes. These colors hold no semantics and can be used within the user interface. These values are immutable and will not change.

#### Neutral


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-neutral-0` | Step 0 in the palette Neutral scale. | #000000 / rgb(0, 0, 0) / hsl(0, 0%, 0%) |
|  | `--slds-g-color-palette-neutral-10` | Step 10 in the palette Neutral scale. | #181818 / rgb(24, 24, 24) / hsl(0, 0%, 9.4%) |
|  | `--slds-g-color-palette-neutral-15` | Step 15 in the palette Neutral scale. | #242424 / rgb(36, 36, 36) / hsl(0, 0%, 14.1%) |
|  | `--slds-g-color-palette-neutral-20` | Step 20 in the palette Neutral scale. | #2E2E2E / rgb(46, 46, 46) / hsl(0, 0%, 18%) |
|  | `--slds-g-color-palette-neutral-30` | Step 30 in the palette Neutral scale. | #444444 / rgb(68, 68, 68) / hsl(0, 0%, 26.7%) |
|  | `--slds-g-color-palette-neutral-40` | Step 40 in the palette Neutral scale. | #5C5C5C / rgb(92, 92, 92) / hsl(0, 0%, 36.1%) |
|  | `--slds-g-color-palette-neutral-50` | Step 50 in the palette Neutral scale. | #747474 / rgb(116, 116, 116) / hsl(0, 0%, 45.5%) |
|  | `--slds-g-color-palette-neutral-60` | Step 60 in the palette Neutral scale. | #939393 / rgb(147, 147, 147) / hsl(0, 0%, 57.6%) |
|  | `--slds-g-color-palette-neutral-65` | Step 65 in the palette Neutral scale. | #A0A0A0 / rgb(160, 160, 160) / hsl(0, 0%, 62.7%) |
|  | `--slds-g-color-palette-neutral-70` | Step 70 in the palette Neutral scale. | #AEAEAE / rgb(174, 174, 174) / hsl(0, 0%, 68.2%) |
|  | `--slds-g-color-palette-neutral-80` | Step 80 in the palette Neutral scale. | #C9C9C9 / rgb(201, 201, 201) / hsl(0, 0%, 78.8%) |
|  | `--slds-g-color-palette-neutral-90` | Step 90 in the palette Neutral scale. | #E5E5E5 / rgb(229, 229, 229) / hsl(0, 0%, 89.8%) |
|  | `--slds-g-color-palette-neutral-95` | Step 95 in the palette Neutral scale. | #F3F3F3 / rgb(243, 243, 243) / hsl(0, 0%, 95.3%) |
|  | `--slds-g-color-palette-neutral-100` | Step 100 in the palette Neutral scale. | #FFFFFF / rgb(255, 255, 255) / hsl(0, 0%, 100%) |

#### Blue


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-blue-10` | Step 10 in the palette Blue scale. | #001639 / rgb(0, 22, 57) / hsl(216.8, 100%, 11.2%) |
|  | `--slds-g-color-palette-blue-15` | Step 15 in the palette Blue scale. | #03234D / rgb(3, 35, 77) / hsl(214.1, 92.5%, 15.7%) |
|  | `--slds-g-color-palette-blue-20` | Step 20 in the palette Blue scale. | #032D60 / rgb(3, 45, 96) / hsl(212.9, 93.9%, 19.4%) |
|  | `--slds-g-color-palette-blue-30` | Step 30 in the palette Blue scale. | #014486 / rgb(1, 68, 134) / hsl(209.8, 35.5%, 26.5%) |
|  | `--slds-g-color-palette-blue-40` | Step 40 in the palette Blue scale. | #0B5CAB / rgb(11, 92, 171) / hsl(209.6, 48.8%, 35.7%) |
|  | `--slds-g-color-palette-blue-50` | Step 50 in the palette Blue scale. | #0176D3 / rgb(1, 118, 211) / hsl(206.6, 70.5%, 41.6%) |
|  | `--slds-g-color-palette-blue-60` | Step 60 in the palette Blue scale. | #1B96FF / rgb(27, 150, 255) / hsl(207.6, 100%, 55.3%) |
|  | `--slds-g-color-palette-blue-65` | Step 65 in the palette Blue scale. | #57A3FD / rgb(87, 163, 253) / hsl(212.5, 97.6%, 66.7%) |
|  | `--slds-g-color-palette-blue-70` | Step 70 in the palette Blue scale. | #78B0FD / rgb(120, 176, 253) / hsl(214.7, 97.1%, 73.1%) |
|  | `--slds-g-color-palette-blue-80` | Step 80 in the palette Blue scale. | #AACBFF / rgb(170, 203, 255) / hsl(216.7, 100%, 83.3%) |
|  | `--slds-g-color-palette-blue-90` | Step 90 in the palette Blue scale. | #D8E6FE / rgb(216, 230, 254) / hsl(217.9, 95%, 92.2%) |
|  | `--slds-g-color-palette-blue-95` | Step 95 in the palette Blue scale. | #EEF4FF / rgb(238, 244, 255) / hsl(218.8, 100%, 96.7%) |

#### Cloud Blue


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-cloud-blue-10` | Step 10 in the palette Cloud Blue scale. | #001A28 / rgb(0, 26, 40) / hsl(201, 100%, 7.8%) |
|  | `--slds-g-color-palette-cloud-blue-15` | Step 15 in the palette Cloud Blue scale. | #0A2636 / rgb(10, 38, 54) / hsl(201.8, 68.8%, 12.5%) |
|  | `--slds-g-color-palette-cloud-blue-20` | Step 20 in the palette Cloud Blue scale. | #023248 / rgb(2, 50, 72) / hsl(198.9, 94.6%, 14.5%) |
|  | `--slds-g-color-palette-cloud-blue-30` | Step 30 in the palette Cloud Blue scale. | #084968 / rgb(8, 73, 104) / hsl(199.4, 85.7%, 22%) |
|  | `--slds-g-color-palette-cloud-blue-40` | Step 40 in the palette Cloud Blue scale. | #05628A / rgb(5, 98, 138) / hsl(198, 36.2%, 28%) |
|  | `--slds-g-color-palette-cloud-blue-50` | Step 50 in the palette Cloud Blue scale. | #107CAD / rgb(16, 124, 173) / hsl(198.7, 48.9%, 37.1%) |
|  | `--slds-g-color-palette-cloud-blue-60` | Step 60 in the palette Cloud Blue scale. | #0D9DDA / rgb(13, 157, 218) / hsl(197.9, 73.5%, 45.3%) |
|  | `--slds-g-color-palette-cloud-blue-65` | Step 65 in the palette Cloud Blue scale. | #08ABED / rgb(8, 171, 237) / hsl(197.3, 86.4%, 48%) |
|  | `--slds-g-color-palette-cloud-blue-70` | Step 70 in the palette Cloud Blue scale. | #1AB9FF / rgb(26, 185, 255) / hsl(198.3, 100%, 55.1%) |
|  | `--slds-g-color-palette-cloud-blue-80` | Step 80 in the palette Cloud Blue scale. | #90D0FE / rgb(144, 208, 254) / hsl(205.1, 98.2%, 78%) |
|  | `--slds-g-color-palette-cloud-blue-90` | Step 90 in the palette Cloud Blue scale. | #CFE9FE / rgb(207, 233, 254) / hsl(206.8, 95.9%, 90.4%) |
|  | `--slds-g-color-palette-cloud-blue-95` | Step 95 in the palette Cloud Blue scale. | #EAF5FE / rgb(234, 245, 254) / hsl(207, 90.9%, 95.7%) |

#### Electric Blue


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-electric-blue-10` | Step 10 in the palette Electric Blue scale. | #001642 / rgb(0, 22, 66) / hsl(220, 100%, 12.9%) |
|  | `--slds-g-color-palette-electric-blue-15` | Step 15 in the palette Electric Blue scale. | #001E5B / rgb(0, 30, 91) / hsl(220.2, 100%, 17.8%) |
|  | `--slds-g-color-palette-electric-blue-20` | Step 20 in the palette Electric Blue scale. | #002775 / rgb(0, 39, 117) / hsl(220, 100%, 22.9%) |
|  | `--slds-g-color-palette-electric-blue-30` | Step 30 in the palette Electric Blue scale. | #022AC0 / rgb(2, 42, 192) / hsl(227.4, 60.1%, 38%) |
|  | `--slds-g-color-palette-electric-blue-40` | Step 40 in the palette Electric Blue scale. | #0250D9 / rgb(2, 80, 217) / hsl(218.2, 73.9%, 42.9%) |
|  | `--slds-g-color-palette-electric-blue-50` | Step 50 in the palette Electric Blue scale. | #066AFE / rgb(6, 106, 254) / hsl(215.8, 99.2%, 51%) |
|  | `--slds-g-color-palette-electric-blue-60` | Step 60 in the palette Electric Blue scale. | #4992FE / rgb(73, 146, 254) / hsl(215.8, 98.9%, 64.1%) |
|  | `--slds-g-color-palette-electric-blue-65` | Step 65 in the palette Electric Blue scale. | #5F9FFE / rgb(95, 159, 254) / hsl(215.8, 98.8%, 68.4%) |
|  | `--slds-g-color-palette-electric-blue-70` | Step 70 in the palette Electric Blue scale. | #7CB1FE / rgb(124, 177, 254) / hsl(215.5, 98.5%, 74.1%) |
|  | `--slds-g-color-palette-electric-blue-80` | Step 80 in the palette Electric Blue scale. | #A8CBFF / rgb(168, 203, 255) / hsl(215.9, 100%, 82.9%) |
|  | `--slds-g-color-palette-electric-blue-90` | Step 90 in the palette Electric Blue scale. | #D6E6FF / rgb(214, 230, 255) / hsl(216.6, 100%, 92%) |
|  | `--slds-g-color-palette-electric-blue-95` | Step 95 in the palette Electric Blue scale. | #EDF4FF / rgb(237, 244, 255) / hsl(216.7, 100%, 96.5%) |

#### Indigo


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-indigo-10` | Step 10 in the palette Indigo scale. | #200647 / rgb(32, 6, 71) / hsl(264, 84.4%, 15.1%) |
|  | `--slds-g-color-palette-indigo-15` | Step 15 in the palette Indigo scale. | #1F0974 / rgb(31, 9, 116) / hsl(252.3, 85.6%, 24.5%) |
|  | `--slds-g-color-palette-indigo-20` | Step 20 in the palette Indigo scale. | #321D71 / rgb(50, 29, 113) / hsl(255, 59.2%, 27.8%) |
|  | `--slds-g-color-palette-indigo-30` | Step 30 in the palette Indigo scale. | #2F2CB7 / rgb(47, 44, 183) / hsl(241.3, 49.1%, 44.5%) |
|  | `--slds-g-color-palette-indigo-40` | Step 40 in the palette Indigo scale. | #3A49DA / rgb(58, 73, 218) / hsl(234.4, 68.4%, 54.1%) |
|  | `--slds-g-color-palette-indigo-50` | Step 50 in the palette Indigo scale. | #5867E8 / rgb(88, 103, 232) / hsl(233.8, 75.8%, 62.7%) |
|  | `--slds-g-color-palette-indigo-60` | Step 60 in the palette Indigo scale. | #7F8CED / rgb(127, 140, 237) / hsl(232.9, 75.3%, 71.4%) |
|  | `--slds-g-color-palette-indigo-65` | Step 65 in the palette Indigo scale. | #8E9BEF / rgb(142, 155, 239) / hsl(232, 75.2%, 74.7%) |
|  | `--slds-g-color-palette-indigo-70` | Step 70 in the palette Indigo scale. | #9EA9F1 / rgb(158, 169, 241) / hsl(232, 74.8%, 78.2%) |
|  | `--slds-g-color-palette-indigo-80` | Step 80 in the palette Indigo scale. | #BEC7F6 / rgb(190, 199, 246) / hsl(230.4, 75.7%, 85.5%) |
|  | `--slds-g-color-palette-indigo-90` | Step 90 in the palette Indigo scale. | #E0E5F8 / rgb(224, 229, 248) / hsl(227.5, 63.2%, 92.5%) |
|  | `--slds-g-color-palette-indigo-95` | Step 95 in the palette Indigo scale. | #F1F3FB / rgb(241, 243, 251) / hsl(228, 55.6%, 96.5%) |

#### Purple


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-purple-10` | Step 10 in the palette Purple scale. | #240643 / rgb(36, 6, 67) / hsl(269.5, 83.6%, 14.3%) |
|  | `--slds-g-color-palette-purple-15` | Step 15 in the palette Purple scale. | #300B60 / rgb(48, 11, 96) / hsl(266.1, 79.4%, 21%) |
|  | `--slds-g-color-palette-purple-20` | Step 20 in the palette Purple scale. | #401075 / rgb(64, 16, 117) / hsl(268.5, 75.9%, 26.1%) |
|  | `--slds-g-color-palette-purple-30` | Step 30 in the palette Purple scale. | #5A1BA9 / rgb(90, 27, 169) / hsl(266.6, 45.2%, 38.4%) |
|  | `--slds-g-color-palette-purple-40` | Step 40 in the palette Purple scale. | #7526E3 / rgb(117, 38, 227) / hsl(265.1, 77.1%, 52%) |
|  | `--slds-g-color-palette-purple-50` | Step 50 in the palette Purple scale. | #9050E9 / rgb(144, 80, 233) / hsl(265.1, 77.7%, 61.4%) |
|  | `--slds-g-color-palette-purple-60` | Step 60 in the palette Purple scale. | #AD7BEE / rgb(173, 123, 238) / hsl(266.1, 77.2%, 70.8%) |
|  | `--slds-g-color-palette-purple-65` | Step 65 in the palette Purple scale. | #B78DEF / rgb(183, 141, 239) / hsl(265.7, 75.4%, 74.5%) |
|  | `--slds-g-color-palette-purple-70` | Step 70 in the palette Purple scale. | #C29EF1 / rgb(194, 158, 241) / hsl(266, 74.8%, 78.2%) |
|  | `--slds-g-color-palette-purple-80` | Step 80 in the palette Purple scale. | #D7BFF2 / rgb(215, 191, 242) / hsl(268.2, 66.2%, 84.9%) |
|  | `--slds-g-color-palette-purple-90` | Step 90 in the palette Purple scale. | #ECE1F9 / rgb(236, 225, 249) / hsl(267.5, 66.7%, 92.9%) |
|  | `--slds-g-color-palette-purple-95` | Step 95 in the palette Purple scale. | #F6F2FB / rgb(246, 242, 251) / hsl(266.7, 52.9%, 96.7%) |

#### Violet


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-violet-10` | Step 10 in the palette Violet scale. | #2E0039 / rgb(46, 0, 57) / hsl(288.4, 100%, 11.2%) |
|  | `--slds-g-color-palette-violet-15` | Step 15 in the palette Violet scale. | #3D0157 / rgb(61, 1, 87) / hsl(281.9, 97.7%, 17.3%) |
|  | `--slds-g-color-palette-violet-20` | Step 20 in the palette Violet scale. | #481A54 / rgb(72, 26, 84) / hsl(287.6, 52.7%, 21.6%) |
|  | `--slds-g-color-palette-violet-30` | Step 30 in the palette Violet scale. | #730394 / rgb(115, 3, 148) / hsl(286.3, 40.4%, 29.6%) |
|  | `--slds-g-color-palette-violet-40` | Step 40 in the palette Violet scale. | #9602C7 / rgb(150, 2, 199) / hsl(285.1, 63.8%, 39.4%) |
|  | `--slds-g-color-palette-violet-50` | Step 50 in the palette Violet scale. | #BA01FF / rgb(186, 1, 255) / hsl(283.7, 100%, 50.2%) |
|  | `--slds-g-color-palette-violet-60` | Step 60 in the palette Violet scale. | #CB65FF / rgb(203, 101, 255) / hsl(279.7, 100%, 69.8%) |
|  | `--slds-g-color-palette-violet-65` | Step 65 in the palette Violet scale. | #D17DFE / rgb(209, 125, 254) / hsl(279.1, 98.5%, 74.3%) |
|  | `--slds-g-color-palette-violet-70` | Step 70 in the palette Violet scale. | #D892FE / rgb(216, 146, 254) / hsl(278.9, 98.2%, 78.4%) |
|  | `--slds-g-color-palette-violet-80` | Step 80 in the palette Violet scale. | #E5B9FE / rgb(229, 185, 254) / hsl(278.3, 97.2%, 86.1%) |
|  | `--slds-g-color-palette-violet-90` | Step 90 in the palette Violet scale. | #F2DEFE / rgb(242, 222, 254) / hsl(277.5, 94.1%, 93.3%) |
|  | `--slds-g-color-palette-violet-95` | Step 95 in the palette Violet scale. | #F9F0FF / rgb(249, 240, 255) / hsl(276, 100%, 97.1%) |

#### Red


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-red-10` | Step 10 in the palette Red scale. | #300C01 / rgb(48, 12, 1) / hsl(14, 95.9%, 9.6%) |
|  | `--slds-g-color-palette-red-15` | Step 15 in the palette Red scale. | #4A0C04 / rgb(74, 12, 4) / hsl(6.9, 89.7%, 15.3%) |
|  | `--slds-g-color-palette-red-20` | Step 20 in the palette Red scale. | #640103 / rgb(100, 1, 3) / hsl(358.8, 98%, 19.8%) |
|  | `--slds-g-color-palette-red-30` | Step 30 in the palette Red scale. | #8E030F / rgb(142, 3, 15) / hsl(354.8, 38.1%, 28.4%) |
|  | `--slds-g-color-palette-red-40` | Step 40 in the palette Red scale. | #BA0517 / rgb(186, 5, 23) / hsl(354, 56.7%, 37.5%) |
|  | `--slds-g-color-palette-red-50` | Step 50 in the palette Red scale. | #EA001E / rgb(234, 0, 30) / hsl(352.3, 84.8%, 45.9%) |
|  | `--slds-g-color-palette-red-60` | Step 60 in the palette Red scale. | #FE5C4C / rgb(254, 92, 76) / hsl(5.4, 98.9%, 64.7%) |
|  | `--slds-g-color-palette-red-65` | Step 65 in the palette Red scale. | #FE7765 / rgb(254, 119, 101) / hsl(7.1, 98.7%, 69.6%) |
|  | `--slds-g-color-palette-red-70` | Step 70 in the palette Red scale. | #FE8F7D / rgb(254, 143, 125) / hsl(8.4, 98.5%, 74.3%) |
|  | `--slds-g-color-palette-red-80` | Step 80 in the palette Red scale. | #FEB8AB / rgb(254, 184, 171) / hsl(9.4, 97.6%, 83.3%) |
|  | `--slds-g-color-palette-red-90` | Step 90 in the palette Red scale. | #FEDED8 / rgb(254, 222, 216) / hsl(9.5, 95%, 92.2%) |
|  | `--slds-g-color-palette-red-95` | Step 95 in the palette Red scale. | #FEF1EE / rgb(254, 241, 238) / hsl(11.2, 88.9%, 96.5%) |

#### Pink


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-pink-10` | Step 10 in the palette Pink scale. | #370114 / rgb(55, 1, 20) / hsl(338.9, 96.4%, 11%) |
|  | `--slds-g-color-palette-pink-15` | Step 15 in the palette Pink scale. | #4B0620 / rgb(75, 6, 32) / hsl(337.4, 85.2%, 15.9%) |
|  | `--slds-g-color-palette-pink-20` | Step 20 in the palette Pink scale. | #61022A / rgb(97, 2, 42) / hsl(334.7, 96%, 19.4%) |
|  | `--slds-g-color-palette-pink-30` | Step 30 in the palette Pink scale. | #8A033E / rgb(138, 3, 62) / hsl(333.8, 36.6%, 27.6%) |
|  | `--slds-g-color-palette-pink-40` | Step 40 in the palette Pink scale. | #B60554 / rgb(182, 5, 84) / hsl(333.2, 54.8%, 36.7%) |
|  | `--slds-g-color-palette-pink-50` | Step 50 in the palette Pink scale. | #E3066A / rgb(227, 6, 106) / hsl(332.9, 79.8%, 45.7%) |
|  | `--slds-g-color-palette-pink-60` | Step 60 in the palette Pink scale. | #FF538A / rgb(255, 83, 138) / hsl(340.8, 100%, 66.3%) |
|  | `--slds-g-color-palette-pink-65` | Step 65 in the palette Pink scale. | #FE7298 / rgb(254, 114, 152) / hsl(343.7, 98.6%, 72.2%) |
|  | `--slds-g-color-palette-pink-70` | Step 70 in the palette Pink scale. | #FE8AA7 / rgb(254, 138, 167) / hsl(345, 98.3%, 76.9%) |
|  | `--slds-g-color-palette-pink-80` | Step 80 in the palette Pink scale. | #FDB6C5 / rgb(253, 182, 197) / hsl(347.3, 94.7%, 85.3%) |
|  | `--slds-g-color-palette-pink-90` | Step 90 in the palette Pink scale. | #FDDDE3 / rgb(253, 221, 227) / hsl(348.8, 88.9%, 92.9%) |
|  | `--slds-g-color-palette-pink-95` | Step 95 in the palette Pink scale. | #FEF0F3 / rgb(254, 240, 243) / hsl(347.1, 87.5%, 96.9%) |

#### Hot Orange


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-hot-orange-10` | Step 10 in the palette Hot Orange scale. | #281202 / rgb(40, 18, 2) / hsl(25.3, 90.5%, 8.2%) |
|  | `--slds-g-color-palette-hot-orange-15` | Step 15 in the palette Hot Orange scale. | #421604 / rgb(66, 22, 4) / hsl(17.4, 88.6%, 13.7%) |
|  | `--slds-g-color-palette-hot-orange-20` | Step 20 in the palette Hot Orange scale. | #4A2413 / rgb(74, 36, 19) / hsl(18.5, 59.1%, 18.2%) |
|  | `--slds-g-color-palette-hot-orange-30` | Step 30 in the palette Hot Orange scale. | #7E2600 / rgb(126, 38, 0) / hsl(18.1, 100%, 24.7%) |
|  | `--slds-g-color-palette-hot-orange-40` | Step 40 in the palette Hot Orange scale. | #AA3001 / rgb(170, 48, 1) / hsl(16.7, 49.9%, 33.5%) |
|  | `--slds-g-color-palette-hot-orange-50` | Step 50 in the palette Hot Orange scale. | #D83A00 / rgb(216, 58, 0) / hsl(16.1, 73.5%, 42.4%) |
|  | `--slds-g-color-palette-hot-orange-60` | Step 60 in the palette Hot Orange scale. | #FF5D2D / rgb(255, 93, 45) / hsl(13.7, 100%, 58.8%) |
|  | `--slds-g-color-palette-hot-orange-65` | Step 65 in the palette Hot Orange scale. | #FF784F / rgb(255, 120, 79) / hsl(14, 100%, 65.5%) |
|  | `--slds-g-color-palette-hot-orange-70` | Step 70 in the palette Hot Orange scale. | #FF906E / rgb(255, 144, 110) / hsl(14.1, 100%, 71.6%) |
|  | `--slds-g-color-palette-hot-orange-80` | Step 80 in the palette Hot Orange scale. | #FEB9A5 / rgb(254, 185, 165) / hsl(13.5, 97.8%, 82.2%) |
|  | `--slds-g-color-palette-hot-orange-90` | Step 90 in the palette Hot Orange scale. | #FFDED5 / rgb(255, 222, 213) / hsl(12.9, 100%, 91.8%) |
|  | `--slds-g-color-palette-hot-orange-95` | Step 95 in the palette Hot Orange scale. | #FEF1ED / rgb(254, 241, 237) / hsl(14.1, 89.5%, 96.3%) |

#### Orange


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-orange-10` | Step 10 in the palette Orange scale. | #201600 / rgb(32, 22, 0) / hsl(41.3, 100%, 6.3%) |
|  | `--slds-g-color-palette-orange-15` | Step 15 in the palette Orange scale. | #371E03 / rgb(55, 30, 3) / hsl(31.2, 89.7%, 11.4%) |
|  | `--slds-g-color-palette-orange-20` | Step 20 in the palette Orange scale. | #3E2B02 / rgb(62, 43, 2) / hsl(41, 93.8%, 12.5%) |
|  | `--slds-g-color-palette-orange-30` | Step 30 in the palette Orange scale. | #5F3E02 / rgb(95, 62, 2) / hsl(38.7, 95.9%, 19%) |
|  | `--slds-g-color-palette-orange-40` | Step 40 in the palette Orange scale. | #825101 / rgb(130, 81, 1) / hsl(37.2, 34%, 25.7%) |
|  | `--slds-g-color-palette-orange-50` | Step 50 in the palette Orange scale. | #A96404 / rgb(169, 100, 4) / hsl(34.9, 49%, 33.9%) |
|  | `--slds-g-color-palette-orange-60` | Step 60 in the palette Orange scale. | #DD7A01 / rgb(221, 122, 1) / hsl(33, 76.4%, 43.5%) |
|  | `--slds-g-color-palette-orange-65` | Step 65 in the palette Orange scale. | #F38303 / rgb(243, 131, 3) / hsl(32, 90.9%, 48.2%) |
|  | `--slds-g-color-palette-orange-70` | Step 70 in the palette Orange scale. | #FE9339 / rgb(254, 147, 57) / hsl(27.4, 99%, 61%) |
|  | `--slds-g-color-palette-orange-80` | Step 80 in the palette Orange scale. | #FFBA90 / rgb(255, 186, 144) / hsl(22.7, 100%, 78.2%) |
|  | `--slds-g-color-palette-orange-90` | Step 90 in the palette Orange scale. | #FEDFD0 / rgb(254, 223, 208) / hsl(19.6, 95.8%, 90.6%) |
|  | `--slds-g-color-palette-orange-95` | Step 95 in the palette Orange scale. | #FFF1EA / rgb(255, 241, 234) / hsl(20, 100%, 95.9%) |

#### Yellow


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-yellow-10` | Step 10 in the palette Yellow scale. | #281202 / rgb(40, 18, 2) / hsl(25.3, 90.5%, 8.2%) |
|  | `--slds-g-color-palette-yellow-15` | Step 15 in the palette Yellow scale. | #2E2204 / rgb(46, 34, 4) / hsl(42.9, 84%, 9.8%) |
|  | `--slds-g-color-palette-yellow-20` | Step 20 in the palette Yellow scale. | #4F2100 / rgb(79, 33, 0) / hsl(25.1, 100%, 15.5%) |
|  | `--slds-g-color-palette-yellow-30` | Step 30 in the palette Yellow scale. | #6F3400 / rgb(111, 52, 0) / hsl(28.1, 100%, 21.8%) |
|  | `--slds-g-color-palette-yellow-40` | Step 40 in the palette Yellow scale. | #8C4B02 / rgb(140, 75, 2) / hsl(31.7, 37.5%, 27.8%) |
|  | `--slds-g-color-palette-yellow-50` | Step 50 in the palette Yellow scale. | #A86403 / rgb(168, 100, 3) / hsl(35.3, 48.7%, 33.5%) |
|  | `--slds-g-color-palette-yellow-60` | Step 60 in the palette Yellow scale. | #CA8501 / rgb(202, 133, 1) / hsl(39.4, 65.5%, 39.8%) |
|  | `--slds-g-color-palette-yellow-65` | Step 65 in the palette Yellow scale. | #D79304 / rgb(215, 147, 4) / hsl(40.7, 72.5%, 42.9%) |
|  | `--slds-g-color-palette-yellow-70` | Step 70 in the palette Yellow scale. | #E4A201 / rgb(228, 162, 1) / hsl(42.6, 80.8%, 44.9%) |
|  | `--slds-g-color-palette-yellow-80` | Step 80 in the palette Yellow scale. | #FCC003 / rgb(252, 192, 3) / hsl(45.5, 97.6%, 50%) |
|  | `--slds-g-color-palette-yellow-90` | Step 90 in the palette Yellow scale. | #F9E3B6 / rgb(249, 227, 182) / hsl(40.3, 84.8%, 84.5%) |
|  | `--slds-g-color-palette-yellow-95` | Step 95 in the palette Yellow scale. | #FBF3E0 / rgb(251, 243, 224) / hsl(42.2, 77.1%, 93.1%) |

#### Teal


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-teal-10` | Step 10 in the palette Teal scale. | #071B12 / rgb(7, 27, 18) / hsl(153, 58.8%, 6.7%) |
|  | `--slds-g-color-palette-teal-15` | Step 15 in the palette Teal scale. | #072825 / rgb(7, 40, 37) / hsl(174.5, 70.2%, 9.2%) |
|  | `--slds-g-color-palette-teal-20` | Step 20 in the palette Teal scale. | #023434 / rgb(2, 52, 52) / hsl(180, 92.6%, 10.6%) |
|  | `--slds-g-color-palette-teal-30` | Step 30 in the palette Teal scale. | #024D4C / rgb(2, 77, 76) / hsl(179.2, 94.9%, 15.5%) |
|  | `--slds-g-color-palette-teal-40` | Step 40 in the palette Teal scale. | #056764 / rgb(5, 103, 100) / hsl(178.2, 90.7%, 21.2%) |
|  | `--slds-g-color-palette-teal-50` | Step 50 in the palette Teal scale. | #0B827C / rgb(11, 130, 124) / hsl(177, 32.2%, 27.6%) |
|  | `--slds-g-color-palette-teal-60` | Step 60 in the palette Teal scale. | #06A59A / rgb(6, 165, 154) / hsl(175.8, 46.9%, 33.5%) |
|  | `--slds-g-color-palette-teal-65` | Step 65 in the palette Teal scale. | #03B4A7 / rgb(3, 180, 167) / hsl(175.6, 54.1%, 35.9%) |
|  | `--slds-g-color-palette-teal-70` | Step 70 in the palette Teal scale. | #01C3B3 / rgb(1, 195, 179) / hsl(175.1, 61.8%, 38.4%) |
|  | `--slds-g-color-palette-teal-80` | Step 80 in the palette Teal scale. | #04E1CB / rgb(4, 225, 203) / hsl(174, 78.6%, 44.9%) |
|  | `--slds-g-color-palette-teal-90` | Step 90 in the palette Teal scale. | #ACF3E4 / rgb(172, 243, 228) / hsl(167.3, 74.7%, 81.4%) |
|  | `--slds-g-color-palette-teal-95` | Step 95 in the palette Teal scale. | #DEF9F3 / rgb(222, 249, 243) / hsl(166.7, 69.2%, 92.4%) |

#### Green


| Swatch | Styling Hook | Description | Value |
| --- | --- | --- | --- |
|  | `--slds-g-color-palette-green-10` | Step 10 in the palette Green scale. | #071B12 / rgb(7, 27, 18) / hsl(153, 58.8%, 6.7%) |
|  | `--slds-g-color-palette-green-15` | Step 15 in the palette Green scale. | #0C2912 / rgb(12, 41, 18) / hsl(132.4, 54.7%, 10.4%) |
|  | `--slds-g-color-palette-green-20` | Step 20 in the palette Green scale. | #1C3326 / rgb(28, 51, 38) / hsl(146.1, 29.1%, 15.5%) |
|  | `--slds-g-color-palette-green-30` | Step 30 in the palette Green scale. | #194E31 / rgb(25, 78, 49) / hsl(147.2, 51.5%, 20.2%) |
|  | `--slds-g-color-palette-green-40` | Step 40 in the palette Green scale. | #396547 / rgb(57, 101, 71) / hsl(139.1, 27.8%, 31%) |
|  | `--slds-g-color-palette-green-50` | Step 50 in the palette Green scale. | #2E844A / rgb(46, 132, 74) / hsl(139.5, 25.9%, 34.9%) |
|  | `--slds-g-color-palette-green-60` | Step 60 in the palette Green scale. | #3BA755 / rgb(59, 167, 85) / hsl(134.4, 38%, 44.3%) |
|  | `--slds-g-color-palette-green-65` | Step 65 in the palette Green scale. | #41B658 / rgb(65, 182, 88) / hsl(131.8, 44.5%, 48.4%) |
|  | `--slds-g-color-palette-green-70` | Step 70 in the palette Green scale. | #45C65A / rgb(69, 198, 90) / hsl(129.8, 53.1%, 52.4%) |
|  | `--slds-g-color-palette-green-80` | Step 80 in the palette Green scale. | #91DB8B / rgb(145, 219, 139) / hsl(115.5, 52.6%, 70.2%) |
|  | `--slds-g-color-palette-green-90` | Step 90 in the palette Green scale. | #CDEFC4 / rgb(205, 239, 196) / hsl(107.4, 57.3%, 85.3%) |
|  | `--slds-g-color-palette-green-95` | Step 95 in the palette Green scale. | #EBF7E6 / rgb(235, 247, 230) / hsl(102.4, 51.5%, 93.5%) |

## Shadows

SLDS global shadow examples showing four white rounded rectangles, each with increasing shadow depth: shadow 1, shadow 2, shadow 3, and shadow 4.


| Styling Hook | Description | Value |
| --- | --- | --- |
| `--slds-g-shadow-1` | Shadow 1.0px 0px 1.5px 0px | #000000 |
| `--slds-g-shadow-2` | Shadow 2.0px 0px 3px 0px | #000000 |
| `--slds-g-shadow-3` | Shadow 3.0px 0px 4.5px 0px | #000000 |
| `--slds-g-shadow-4` | Shadow 4.0px 0px 6.75px 0px | #000000 |

## Borders

### Border Width

Use these styling hooks to specify the pixel width of a border.

SLDS border width examples showing squares with increasing border thickness. Styling Hooks: --slds-g-sizing-border-1, -2, -3, -4.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-sizing-border-1` | Border Width 1 | 1px.1px |
| `--slds-g-sizing-border-2` | Border Width 2 | 2px.2px |
| `--slds-g-sizing-border-3` | Border Width 3 | 3px.3px |
| `--slds-g-sizing-border-4` | Border Width 4 | 4px.4px |

### Border Radius

These properties manage the curvature of UI elements' corners, impacting the perceived softness or hardness of components.

SLDS border radius examples showing shapes with increasing corner roundness. Styling Hooks: --slds-g-radius-border-1, -2, -3, -4, and examples for circle and pill shapes.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-radius-border-1` | Radius Border 1 | 4px.0.25rem |
| `--slds-g-radius-border-2` | Radius Border 2 | 8px.0.5rem |
| `--slds-g-radius-border-3` | Radius Border 3 | 12px.0.75rem |
| `--slds-g-radius-border-4` | Radius Border 4 | 20px.1.25rem |
| `--slds-g-radius-border-circle` | Radius Border Circle | 100% 100px.100% |
| `--slds-g-radius-border-pill` | Radius Border Pill.15rem |

## Typography

### Font Scale

Font sizes are scaled based on the --slds-g-font-size-base property that sets the default font size of the application.

SLDS font scale examples showing 'The quick brown fox jumps over the lazy dog' at different sizes. Styling Hooks: --slds-g-font-scale-neg-2, -neg-1, base, 1, 2, 3, 4, 5, 6, 7, 8, increasing in size.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-font-scale-neg-2` | Font Scale Neg 2 | 10px.0.625rem |
| `--slds-g-font-scale-neg-1` | Font Scale Neg 1 | 12px.0.75rem |
| `--slds-g-font-size-base` | Font Size Base | 13px.0.8125rem |
| `--slds-g-font-scale-1` | Font Scale 1 | 14px.0.875rem |
| `--slds-g-font-scale-2` | Font Scale 2 | 16px.1rem |
| `--slds-g-font-scale-3` | Font Scale 3 | 20px.1.25rem |
| `--slds-g-font-scale-4` | Font Scale 4 | 24px.1.5rem |
| `--slds-g-font-scale-5` | Font Scale 5 | 28px.1.75rem |
| `--slds-g-font-scale-6` | Font Scale 6 | 32px.2rem |
| `--slds-g-font-scale-7` | Font Scale 7 | 40px.2.5rem |
| `--slds-g-font-scale-8` | Font Scale 8 | 48px.3rem |

### Density-aware Font Scale

These density-aware styling hooks control the font scale when the system switches between comfy and compact display density settings. To learn how display density works in SLDS, see Display Density.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-font-scale-var-neg-1` | Comfy (default) = 0.75rem | Compact = 0.75rem.0.75rem{--slds-g-font-scale-neg-1} |
| `--slds-g-font-scale-var-neg-2` | Comfy (default) = 0.625rem | Compact = 0.625rem.0.625rem{--slds-g-font-scale-neg-2} |
| `--slds-g-font-scale-var-neg-3` | Comfy (default) = 0.625rem | Compact = 0.625rem.0.625rem{--slds-g-font-scale-var-neg-2} |
| `--slds-g-font-scale-var-neg-4` | Comfy (default) = 0.625rem | Compact = 0.625rem.0.625rem{--slds-g-font-scale-var-neg-3} |
| `--slds-g-font-scale-var-1` | Comfy (default) = 0.875rem | Compact = 0.875rem.0.875rem{--slds-g-font-scale-1} |
| `--slds-g-font-scale-var-2` | Comfy (default) = 1rem | Compact = 0.875rem.1rem{--slds-g-font-scale-2} |
| `--slds-g-font-scale-var-3` | Comfy (default) = 1.25rem | Compact = 1rem.1.25rem{--slds-g-font-scale-3} |
| `--slds-g-font-scale-var-4` | Comfy (default) = 1.5rem | Compact = 1.25rem.1.5rem{--slds-g-font-scale-4} |
| `--slds-g-font-scale-var-5` | Comfy (default) = 1.75rem | Compact = 1.75rem.1.75rem{--slds-g-font-scale-5} |
| `--slds-g-font-scale-var-6` | Comfy (default) = 2rem | Compact = 2rem.2rem{--slds-g-font-scale-6} |
| `--slds-g-font-scale-var-7` | Comfy (default) = 2.5rem | Compact = 2.5rem.2.5rem{--slds-g-font-scale-7} |
| `--slds-g-font-scale-var-8` | Comfy (default) = 3rem | Compact = 3rem.3rem{--slds-g-font-scale-8} |
| `--slds-g-font-scale-var-9` | Comfy (default) = 3rem | Compact = 3rem.3rem{--slds-g-font-scale-var-8} |
| `--slds-g-font-scale-var-10` | Comfy (default) = 3rem | Compact = 3rem.3rem{--slds-g-font-scale-var-8} |

### Font Weight

Font weights are available in a range where --slds-g-font-weight-4 is the default weight.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-font-weight-1` | Font Weight 1 | 100.100 |
| `--slds-g-font-weight-2` | Font Weight 2 | 200.200 |
| `--slds-g-font-weight-3` | Light | 300.300 |
| `--slds-g-font-weight-4` | Regular | 400.400 |
| `--slds-g-font-weight-5` | Font Weight 5 | 500.500 |
| `--slds-g-font-weight-6` | SemiBold | 600.600 |
| `--slds-g-font-weight-7` | Bold | 700.700 |

### Line Height

Line height values are set to unitless numbers, which are multiplied by the font size used in the element to obtain the desired line height.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-font-lineheight-1` | Font Lineheight 1 | 16px.1 |
| `--slds-g-font-lineheight-2` | Font Lineheight 2 | 20px.1.25 |
| `--slds-g-font-lineheight-3` | Font Lineheight 3 | 22px.1.375 |
| `--slds-g-font-lineheight-4` | Font Lineheight 4 | 24px.1.5 |
| `--slds-g-font-lineheight-5` | Font Lineheight 5 | 28px.1.75 |
| `--slds-g-font-lineheight-6` | Font Lineheight 6 | 32px.2 |

### Density-Aware Line Height

This density-aware styling hook controls the line height when the system switches between comfy and compact display density settings. To learn how display density works in SLDS, see Display Density.

**Comfy  (default)**

**Compact **

--slds-g-font-lineheight-var-base1.5x

Normal (~1.2x)#### --slds-g-font-lineheight-var-base

## Spacing

The spacing values create space between elements. The styling hook values are relative to the root font size and follow a modular scale of 4. Use them to set values for margins and padding, for example.

Don't use spacing properties to establish an element's dimensions, targeting width and height. Instead, use the sizing properties for this purpose.

SLDS global spacing examples showing twelve dark blue rectangles increasing in width from spacing 1 to spacing 12, each labeled with their corresponding --slds-g-spacing token.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-spacing-1` | Spacing 1 | 4px.0.25rem |
| `--slds-g-spacing-2` | Spacing 2 | 8px.0.5rem |
| `--slds-g-spacing-3` | Spacing 3 | 12px.0.75rem |
| `--slds-g-spacing-4` | Spacing 4 | 16px.1rem |
| `--slds-g-spacing-5` | Spacing 5 | 24px.1.5rem |
| `--slds-g-spacing-6` | Spacing 6 | 32px.2rem |
| `--slds-g-spacing-7` | Spacing 7 | 40px.2.5rem |
| `--slds-g-spacing-8` | Spacing 8 | 48px.3rem |
| `--slds-g-spacing-9` | Spacing 9 | 56px.3.5rem |
| `--slds-g-spacing-10` | Spacing 10 | 64px.4rem |
| `--slds-g-spacing-11` | Spacing 11 | 72px.4.5rem |
| `--slds-g-spacing-12` | Spacing 12 | 80px.5rem |

### Density-Aware Spacing

These density-aware styling hooks control spacing that’s applied equally to all sides of an element when the system switches between comfy and compact display density settings. The spacing corresponds to the top, bottom, left, and right margins or paddings. To learn how display density works in SLDS, see Display Density.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-spacing-var-1` | Comfy (default) = 0.25rem | Compact = 0.125rem.0.25rem{--slds-g-spacing-1} |
| `--slds-g-spacing-var-2` | Comfy (default) = 0.5rem | Compact = 0.125rem.0.5rem{--slds-g-spacing-2} |
| `--slds-g-spacing-var-3` | Comfy (default) = 0.75rem | Compact = 0.25rem.0.75rem{--slds-g-spacing-3} |
| `--slds-g-spacing-var-4` | Comfy (default) = 1rem | Compact = 0.5rem.1rem{--slds-g-spacing-4} |
| `--slds-g-spacing-var-5` | Comfy (default) = 1.5rem | Compact = 0.75rem.1.5rem{--slds-g-spacing-5} |
| `--slds-g-spacing-var-6` | Comfy (default) = 2rem | Compact = 1rem.2rem{--slds-g-spacing-6} |
| `--slds-g-spacing-var-7` | Comfy (default) = 2.5rem | Compact = 1.5rem.2.5rem{--slds-g-spacing-7} |
| `--slds-g-spacing-var-8` | Comfy (default) = 3rem | Compact = 2rem.3rem{--slds-g-spacing-8} |
| `--slds-g-spacing-var-9` | Comfy (default) = 3.5rem | Compact = 2.5rem.3.5rem{--slds-g-spacing-9} |
| `--slds-g-spacing-var-10` | Comfy (default) = 4rem | Compact = 3rem.4rem{--slds-g-spacing-10} |
| `--slds-g-spacing-var-11` | Comfy (default) = 4.5rem | Compact = 3.5rem.4.5rem{--slds-g-spacing-11} |
| `--slds-g-spacing-var-12` | Comfy (default) = 5rem | Compact = 4rem.5rem{--slds-g-spacing-12} |

### Density-Aware Vertical Spacing

These density-aware styling hooks control spacing along the vertical (block) axis when the system switches between comfy and compact display density settings. This spacing corresponds to the top and bottom margins or paddings. To learn how display density works in SLDS, see Display Density.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-spacing-var-block-1` | Comfy (default) = 0.25rem | Compact = 0.125rem.0.25rem{--slds-g-spacing-1} |
| `--slds-g-spacing-var-block-2` | Comfy (default) = 0.5rem | Compact = 0.25rem.0.5rem{--slds-g-spacing-2} |
| `--slds-g-spacing-var-block-3` | Comfy (default) = 0.75rem | Compact = 0.5rem.0.75rem{--slds-g-spacing-3} |
| `--slds-g-spacing-var-block-4` | Comfy (default) = 1rem | Compact = 0.5rem.1rem{--slds-g-spacing-4} |
| `--slds-g-spacing-var-block-5` | Comfy (default) = 1.5rem | Compact = 0.75rem.1.5rem{--slds-g-spacing-5} |
| `--slds-g-spacing-var-block-6` | Comfy (default) = 2rem | Compact = 1rem.2rem{--slds-g-spacing-6} |
| `--slds-g-spacing-var-block-7` | Comfy (default) = 2.5rem | Compact = 1.5rem.2.5rem{--slds-g-spacing-7} |
| `--slds-g-spacing-var-block-8` | Comfy (default) = 3rem | Compact = 2rem.3rem{--slds-g-spacing-8} |
| `--slds-g-spacing-var-block-9` | Comfy (default) = 3.5rem | Compact = 2.5rem.3.5rem{--slds-g-spacing-9} |
| `--slds-g-spacing-var-block-10` | Comfy (default) = 4rem | Compact = 3rem.4rem{--slds-g-spacing-10} |
| `--slds-g-spacing-var-block-11` | Comfy (default) = 4.5rem | Compact = 3.5rem.4.5rem{--slds-g-spacing-11} |
| `--slds-g-spacing-var-block-12` | Comfy (default) = 5rem | Compact = 4rem.5rem{--slds-g-spacing-12} |

### Density-Aware Horizontal Spacing

These density-aware styling hooks control spacing along the horizontal (inline) axis when the system switches between comfy and compact display density settings. This spacing corresponds to left and right margins or paddings. To learn how display density works in SLDS, see Display Density.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-spacing-var-inline-1` | Comfy (default) = 0.25rem | Compact = 0.125rem.0.25rem{--slds-g-spacing-1} |
| `--slds-g-spacing-var-inline-2` | Comfy (default) = 0.5rem | Compact = 0.25rem.0.5rem{--slds-g-spacing-2} |
| `--slds-g-spacing-var-inline-3` | Comfy (default) = 0.75rem | Compact = 0.5rem.0.75rem{--slds-g-spacing-3} |
| `--slds-g-spacing-var-inline-4` | Comfy (default) = 1rem | Compact = 0.75rem.1rem{--slds-g-spacing-4} |
| `--slds-g-spacing-var-inline-5` | Comfy (default) = 1.5rem | Compact = 0.75rem.1.5rem{--slds-g-spacing-5} |
| `--slds-g-spacing-var-inline-6` | Comfy (default) = 2rem | Compact = 1rem.2rem{--slds-g-spacing-6} |
| `--slds-g-spacing-var-inline-7` | Comfy (default) = 2.5rem | Compact = 1.5rem.2.5rem{--slds-g-spacing-7} |
| `--slds-g-spacing-var-inline-8` | Comfy (default) = 3rem | Compact = 2rem.3rem{--slds-g-spacing-8} |
| `--slds-g-spacing-var-inline-9` | Comfy (default) = 3.5rem | Compact = 2.5rem.3.5rem{--slds-g-spacing-9} |
| `--slds-g-spacing-var-inline-10` | Comfy (default) = 4rem | Compact = 3rem.4rem{--slds-g-spacing-10} |
| `--slds-g-spacing-var-inline-11` | Comfy (default) = 4.5rem | Compact = 3.5rem.4.5rem{--slds-g-spacing-11} |
| `--slds-g-spacing-var-inline-12` | Comfy (default) = 5rem | Compact = 4rem.5rem{--slds-g-spacing-12} |

## Sizing

Use these styling hooks for elements like icons to set their height and width relative to the root element's font-size.

### Dimensions

SLDS global sizing examples showing sixteen dark blue rectangles increasing in width from sizing 1 to sizing 16, each labeled with their corresponding --slds-g-sizing styling hooks.


| Styling Hook | Description |
| --- | --- |
| `--slds-g-sizing-1` | Sizing 1 | 2px.0.125rem |
| `--slds-g-sizing-2` | Sizing 2 | 4px.0.25rem |
| `--slds-g-sizing-3` | Sizing 3 | 8px.0.5rem |
| `--slds-g-sizing-4` | Sizing 4 | 12px.0.75rem |
| `--slds-g-sizing-5` | Sizing 5 | 16px.1rem |
| `--slds-g-sizing-6` | Sizing 6 | 20px.1.25rem |
| `--slds-g-sizing-7` | Sizing 7 | 24px.1.5rem |
| `--slds-g-sizing-8` | Sizing 8 | 28px.1.75rem |
| `--slds-g-sizing-9` | Sizing 9.2rem |
| `--slds-g-sizing-10` | Sizing 10 | 48px.3rem |
| `--slds-g-sizing-11` | Sizing 11 | 64px.4rem |
| `--slds-g-sizing-12` | Sizing 12 | 80px.5rem |
| `--slds-g-sizing-13` | Sizing 13 | 160px.10rem |
| `--slds-g-sizing-14` | Sizing 14 | 240px.15rem |
| `--slds-g-sizing-15` | Sizing 15 | 320px.20rem |
| `--slds-g-sizing-16` | Sizing 16 | 480px.30rem |

## Deprecated

Global styling hooks are compatible with SLDS 2. If you’re working in SLDS 1, reference component-level styling hooks and design tokens instead of global styling hooks.

As of Winter ‘26, these global styling hooks are deprecated in SLDS 2. In your code, use the appropriate replacement styling hook instead.

**Deprecated Global Styling Hook**

**Replacement Styling Hook**

--slds-g-color-accent-dark-1

--slds-g-color-brand-base-20

--slds-g-color-accent-dark-2

--slds-g-color-brand-base-10

--slds-g-color-accent-light-1

--slds-g-color-brand-base-95

--slds-g-color-accent-light-2

--slds-g-color-brand-base-90

--slds-g-color-brand-base-100

--slds-g-color-neutral-base-100

--slds-g-color-error-base-100

--slds-g-color-neutral-base-100

--slds-g-color-info-base-100

--slds-g-color-neutral-base-100

--slds-g-color-success-base-100

--slds-g-color-neutral-base-100

--slds-g-color-warning-base-100

--slds-g-color-neutral-base-100

--slds-g-font-family

--slds-g-font-family-base

--slds-g-font-lineheight-base

--slds-g-font-line-height-base

--slds-g-font-lineheight-1

--slds-g-font-line-height-1

--slds-g-font-lineheight-2

--slds-g-font-line-height-2

--slds-g-font-lineheight-3

--slds-g-font-line-height-3

--slds-g-font-lineheight-4

--slds-g-font-line-height-4

--slds-g-font-lineheight-5

--slds-g-font-line-height-5

--slds-g-font-lineheight-6

--slds-g-font-line-height-6