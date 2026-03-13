---
title: "Vertical Navigation"
slug: "vertical-navigation--specifications"
category: "pattern"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/60977d-vertical-navigation/b/1398de"
extractedAt: "2026-02-21T21:57:00.035Z"
---

## Styling Hooks Overview

Use CSS Custom Properties as hooks to customize this SLDS component with your own style. For more information, read the technical documentation.

## Overview of CSS Classes

**Category**

**Description**

**Selector**

The CSS class being referred to.

**Summary**

A description of what the class does.

**Support**

Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet).

**Restrict**

The selector that the class name is allowed to be used on.

**Variant**

The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button.

**Modifier**

A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning.Category

Description

Selector

The CSS class being referred to.

Summary

A description of what the class does.

Support

Whether the class name is dev-ready (meaning it's fully vetted and tested and safe to use) or prototype (which means it's not fully vetted yet).

Restrict

The selector that the class name is allowed to be used on.

Variant

The base level pattern for a component. A variant can be extended to create another variant of that component, for example, a stateful button is a derivative of the base button.

Modifier

A single class that can be added to an HTML element of a component to modify its output. Typically these will be colors, sizing and positioning.

### Available Classes

Selector
.slds-nav-vertical__item [type="radio"]


Summary
Version of vertical nav that uses radio buttons


Support
dev-ready


Restrict
.slds-nav-vertical


Variant
trueSelector
.slds-nav-vertical_radio-faux


Summary
Used for styling the radio button


Restrict
.slds-nav-vertical__action spanSelector
.slds-nav-vertical__action-text


Restrict
.slds-nav-vertical__action_overflow spanSelector
.slds-nav-vertical__action_overflow


Restrict
.slds-nav-vertical__actionSelector
.slds-nav-vertical__action


Summary
Actionable element inside of vertical navigation list item


Restrict
.slds-nav-vertical a, .slds-nav-vertical button, .slds-nav-vertical labelSelector
.slds-is-active


Summary
Active state of a list item within a vertical navigation


Restrict
.slds-nav-vertical__item


Modifier
trueSelector
.slds-nav-vertical__item


Summary
List of the vertical navigation


Restrict
.slds-nav-vertical li, .slds-nav-vertical spanSelector
.slds-nav-vertical__title


Summary
Section title of the vertical navigation


Restrict
.slds-nav-vertical h2, .slds-nav-vertical legendSelector
.slds-nav-vertical_shade


Summary
Modifier to adjust list item when vertical navigation is sitting on top of a shaded background


Restrict
.slds-nav-vertical


Modifier
trueSelector
.slds-nav-vertical_compact


Summary
Modifer to reduce spacing between navigation items


Restrict
.slds-nav-vertical


Modifier
trueSelector
.slds-nav-vertical


Support
dev-ready


Restrict
nav, fieldset


Variant
true