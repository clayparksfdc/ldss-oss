---
title: "Shadows"
slug: "shadows--usage"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/64b580-shadows/b/404e68"
extractedAt: "2026-02-21T21:38:47.293Z"
---

## Shadow Usage

When applying a shadow, consider the element's priority in the stacking order. Assign higher shadow values to elements that are higher in the stacking order, which are layered on top of others on the page. You can also use the z-index property to visually manage the stacking order. This property ensures that the element with the highest shadow value appears to be visually layered on top of others on the page.

This chart shows which components use particular shadow styling hooks.

**Styling Hook**

**Components using shadows**

--slds-g-shadow-2

Menu, docked form footer, docked utility bar, color picker, notifications

--slds-g-shadow-3

Panel, docked composer, tooltip, toast



--slds-g-shadow-4



Modal, popover, App LauncherStyling Hook

Components using shadows

--slds-g-shadow-2

Menu, docked form footer, docked utility bar, color picker, notifications

--slds-g-shadow-3

Panel, docked composer, tooltip, toast

--slds-g-shadow-4

Modal, popover, App Launcher

### Base Level (no shadow)

Components that are base level sit on the surface and don't cover up other components. Base level components do not have shadows in the SLDS 2 design.

The background color of a base level component depends on the color of the surface it sits on.

- On a gray surface: A base level component has a white background
- On a white surface: a base level component has a white background with a border

- On a gray surface: A base level component has a white background
- On a white surface: a base level component has a white background with a border

On a gray surface: A base level component has a white background

On a white surface: a base level component has a white background with a border

## Shadows in Figma

Shadows can be applied via the Effects dropdown in the properties panel. We’ve provided SLDS 2 shadows in different directions as used by components in our library.

For example, Panels components use shadow-3 left or shadow-3 right depending on which side of the screen they're placed.

### Inset Shadows

- Our button components use a hover bevel and inner shadow on click that is separate from our elevation system.
- Bevel and Inset are only used on buttons and inputs where specified and shouldn’t be used in custom situations.

Our button components use a hover bevel and inner shadow on click that is separate from our elevation system.

Bevel and Inset are only used on buttons and inputs where specified and shouldn’t be used in custom situations.

`button-shadow-active`

0px 1px 0px 0px rgba(0, 0, 0, 0.25) inset0px 0.5px 2px 0px rgba(0, 0, 0, 0.5) inset2px 2px 5px 0px rgba(0, 0, 0, 0.1) inset



Used on all buttons, no matter the color or border







  UUID: 2a869a46-3899-40c3-a30f-c7f72a2993e4
 -->

  







`button-shadow-hover`

inset 0px 1px 0px 0px rgba(0, 0, 0, 0.25)0px 0.5px 2px 0px rgba(0, 0, 0, 0.5)2px 2px 5px 0px rgba(0, 0, 0, 0.1)



Used on all buttons, no matter the color or border







  UUID: 29ba3f9e-7ee6-4e09-a94d-be0241514254
 -->

  





`mark-shadow-checked`

0px 1px 0px 0px rgba(0, 0, 0, 0.25) inset0px 0.5px 2px 0px rgba(0, 0, 0, 0.5) inset2px 2px 5px 0px rgba(0, 0, 0, 0.1) inset



Used on selected or active checkboxes, radio buttons, and checkbox toggles







  UUID: 72e4e0a2-6cfd-4ca6-9797-4c116c97236f
 -->

  





`input-shadow-active`

0px 1px 0px 0px rgba(0, 0, 0, 0.15) inset0px 0.5px 2px 0px rgba(0, 0, 0, 0.35) inset2px 2px 5px 0px rgba(0, 0, 0, 0.08) inset



Used on active input fields







  UUID: 18922d10-2a7e-4975-8b2b-c187119724f6
 -->

  





`xxx-shadow-focus`

0 0 0 2px var(—slds-g-color-surface-2),  0 0 0 4px var(—slds-g-color-brand-base-15)





The same focus state is  used for most elements. Naming is specific to the component







  UUID: b083246a-4144-48ae-8512-ac010bde96b0
 -->button-shadow-active

0px 1px 0px 0px rgba(0, 0, 0, 0.25) inset0px 0.5px 2px 0px rgba(0, 0, 0, 0.5) inset2px 2px 5px 0px rgba(0, 0, 0, 0.1) inset

Used on all buttons, no matter the color or border

button-shadow-hover

inset 0px 1px 0px 0px rgba(0, 0, 0, 0.25)0px 0.5px 2px 0px rgba(0, 0, 0, 0.5)2px 2px 5px 0px rgba(0, 0, 0, 0.1)

Used on all buttons, no matter the color or border

mark-shadow-checked

0px 1px 0px 0px rgba(0, 0, 0, 0.25) inset0px 0.5px 2px 0px rgba(0, 0, 0, 0.5) inset2px 2px 5px 0px rgba(0, 0, 0, 0.1) inset

Used on selected or active checkboxes, radio buttons, and checkbox toggles

input-shadow-active

0px 1px 0px 0px rgba(0, 0, 0, 0.15) inset0px 0.5px 2px 0px rgba(0, 0, 0, 0.35) inset2px 2px 5px 0px rgba(0, 0, 0, 0.08) inset

Used on active input fields

xxx-shadow-focus

0 0 0 2px var(—slds-g-color-surface-2),  0 0 0 4px var(—slds-g-color-brand-base-15)

The same focus state is  used for most elements. Naming is specific to the component

### Applying Focus Shadow

Focus states within the SLDS 2 design consist of a white border outline surrounded by a dark blue border outline. This style ensures that the focus state meets accessibility requirements for any background.

In Figma, apply SLDS 2 focus states via a shadow.

Using an Effects style, apply the focus state by:

- Applying it to a frame
- That frame must have a fill color applied
- Clip content must be selected in the frame panel

Applying it to a frame

That frame must have a fill color applied

Clip content must be selected in the frame panel

