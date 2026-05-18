---
title: "Typography"
slug: "typography--styling-hooks"
category: "foundation"
url: "/foundation/typography/b/48e09b"
extractedAt: "2026-02-21T21:37:53.689Z"
---

## Font Scale

Font sizes are scaled based on the --slds-g-font-size-base (0.8125rem) property that sets the default font size of the application.

![Global Type Scale](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/9b91fb2f498cf0cd8e2cca?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042847Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f865d930b7d18296a37a4a7f17f4b80bb9a199ef674dd8d1bb1dccfaf1941557)

**Global Type Scale**

---

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-font-scale-neg-2 | 0.625rem | Font Scale Neg 2 | 10px. |
| --slds-g-font-scale-neg-1 | 0.75rem | Font Scale Neg 1 | 12px. |
| --slds-g-font-size-base | 0.8125rem | Font Size Base | 13px. |
| --slds-g-font-scale-1 | 0.875rem | Font Scale 1 | 14px. |
| --slds-g-font-scale-2 | 1rem | Font Scale 2 | 16px. |
| --slds-g-font-scale-3 | 1.25rem | Font Scale 3 | 20px. |
| --slds-g-font-scale-4 | 1.5rem | Font Scale 4 | 24px. |
| --slds-g-font-scale-5 | 1.75rem | Font Scale 5 | 28px. |
| --slds-g-font-scale-6 | 2rem | Font Scale 6 | 32px. |
| --slds-g-font-scale-7 | 2.5rem | Font Scale 7 | 40px. |
| --slds-g-font-scale-8 | 3rem | Font Scale 8 | 48px. |

## Font Weight

Font weights are available in a range where  --slds-g-font-weight-4 (400)is the default weight.

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-font-weight-1 | 100 | Font Weight 1 | 100. |
| --slds-g-font-weight-2 | 200 | Font Weight 2 | 200. |
| --slds-g-font-weight-3 | 300 | Light | 300. |
| --slds-g-font-weight-4 | 400 | Regular | 400. |
| --slds-g-font-weight-5 | 500 | Font Weight 5 | 500. |
| --slds-g-font-weight-6 | 600 | SemiBold | 600. |
| --slds-g-font-weight-7 | 700 | Bold | 700. |

## Line Height

Line height values are set to unitless numbers, which are multiplied by the font size used in the element to obtain the desired line height.

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-font-lineheight-1 | 1 | Font Lineheight 1 | 16px. |
| --slds-g-font-lineheight-2 | 1.25 | Font Lineheight 2 | 20px. |
| --slds-g-font-lineheight-3 | 1.375 | Font Lineheight 3 | 22px. |
| --slds-g-font-lineheight-4 | 1.5 | Font Lineheight 4 | 24px. |
| --slds-g-font-lineheight-5 | 1.75 | Font Lineheight 5 | 28px. |
| --slds-g-font-lineheight-6 | 2 | Font Lineheight 6 | 32px. |

## Content Hooks

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-sizing-content-1 | 20ch | Sizing Content 1. |
| --slds-g-sizing-content-2 | 45ch | Sizing Content 2. |
| --slds-g-sizing-content-3 | 60ch | Sizing Content 3. |

## Heading Hooks

| Token | Value | Description |
| --- | --- | --- |
| --slds-g-sizing-heading-1 | 20ch | Sizing Heading 1. |
| --slds-g-sizing-heading-2 | 25ch | Sizing Heading 2. |
| --slds-g-sizing-heading-3 | 35ch | Sizing Heading 3. |

## Density-Aware Typography

These density-aware styling hooks control spacing that’s applied equally to all sides of an element when the system switches between comfy and compact display density settings. The spacing corresponds to the top, bottom, left, and right margins or paddings. To learn how display density works in SLDS, see [Display Density](/foundation/display-density)[.](/foundation/display-density)

Density-aware styling hooks are available for several categories of styling properties. Use these hooks to ensure your components adapt correctly to the user's chosen density setting.
