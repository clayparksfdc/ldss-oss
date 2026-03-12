---
title: "Icons"
slug: "icons"
category: "foundation"
order: 0
---

## About

Icons are symbols used to represent features, functionality, or content. Visit the [icon page](/foundation/icons) to see a library of all icons and the [icon component](/component/icons) for implementation details.

Several types of icons communicate information within Salesforce, each with variations based on what they represent and their use case. Here are the icon types, in order of most use to least use.

:::card-grid{columns=3}
::card{title="Get Icons" description="Download the SLDS Icons zip folder with both svg and png file types." href="/foundation/icons"}
::card{title="Icons for Figma" description="Access the SLDS icons in the Figma UI Kit." href="https://www.figma.com/community/file/854597149359643291"}
::card{title="Browse Icons" description="Browse the SLDS icon library" href="/foundation/icons"}
:::

### Icon Types

#### Utility Icons

Utility icons are simple single-color glyphs that identify labels and actions. You can use them across all device types. These icons don't have a background shape and can be any color. You can use them on their own or paired with text. If you pair them with text, make sure the icon color matches the text color. For example, if an icon sits next to a title, use the same `on-surface-3` (blue 15) color.

:::card-grid{columns=1}
::card{title="Utility Icons" description="Example: File" href="/foundation/icons--utility"}
:::

ℹ️ Utility icons haven't changed in SLDS 2.

#### Object Icons (Standard and Custom)

Object icons fall into two categories, standard and custom. Standard object icons represent objects (such as Accounts, Leads, Opportunities, and Cases) and related entities that come with Salesforce. Custom object icons are a unique set of icons used to represent custom objects that customers create. Both types of object icons feature a white glyph against a solid background color. Object icons use a specific limited color palette.

:::card-grid{columns=1}
::card{title="Object Icons (Standard and Custom)" description="Example: Account" href="/foundation/icons--object"}
:::

ℹ️ SLDS 2 updates the background shape of standard icons to a circle.

#### Doctype Icons

Doctype icons represent document file formats. Each doctype icon features a white glyph representing its file type, on a background resembling a piece of paper with a folded corner.

:::card-grid{columns=1}
::card{title="Doctype Icons" description="Example: MS Word" href="/foundation/icons--doctype"}
:::

ℹ️ Doctype icons haven't changed in SLDS 2.

#### Action Icons

Action icons are touch-device-specific icons that appear next to an item—for example, a page header or card—so users can take action in a specific context. Each action icon features a white glyph on a colored circle. Action icons use a specific limited color palette.

:::card-grid{columns=1}
::card{title="Action Icons" description="Example: Email" href="/foundation/icons--action"}
:::

ℹ️ Action icons haven't changed in SLDS 2.

#### Product Icons

Product icons represent Salesforce applications and feature the product branding. On the desktop, they’re used only in the App Launcher and at the top left of each Salesforce application window. On mobile device home screens, they launch the corresponding mobile app. Product icons are two-color and use official product color palettes.

:::card-grid{columns=1}
::card{title="Product Icons" description="Example: Sales Cloud" href="/foundation/icons--product"}
:::

## Design Principles

Salesforce icon design is a blend of professional and playful. Our icons are simple, approachable, and legible. Icons should be recognizable and easy to remember.

## Accessibility

Screen readers handle icons in two different ways. If an icon is informational, the screen reader reads it out loud. If an icon is decorative, the screen reader ignores it. Choose the right icon type for your use case. If you're using an informational icon, write an accessible label for it.

For more information on icon accessibility, see the [Icon](/component/icons) component.

### Informational Icons

Informational icons—for example, button icons and standalone avatars—convey important information that the surrounding text doesn’t. Each icon requires either assistive text or an `aria-label` attribute (a code string that labels the element). Each image requires an `alt` description. In the `alt` description, briefly describe the purpose of the  icon or image, not what it looks like (for example "Upload File" instead of "paperclip").

### Decorative Icons

Decorative icons and images don't add relevant information or functionality. Icons and images that reinforce the meaning of adjacent text but don't add new information, fall into this category. Screen readers skip* *decorative icons. For images, use an empty `alt` tag to force screen readers to skip them.

## Grid System and Keyline Shapes

Icons are based on an 8pt grid system and come in four keyline shapes—circle, square, vertical rectangle, and horizontal rectangle. These shapes are created using business process model and notation ([BPMN](https://www.omg.org/spec/BPMN/2.0.2/)) diagram conventions.

## Mobile Tap Targeting

When designing for mobile, add space around each icon to make it easier to select.

## Anatomy

- Based on a 60x60px grid
- 6px stroke weight
- 6px corner radius
- 6px negative space

### Artboard

- Recommended canvas size for setting up Illustrator or Figma files: 100x100px
- Live area of 60x60px, with 20px padding on each side
