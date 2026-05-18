---
title: "Icons"
slug: "icons--overview"
category: "foundation"
url: "/component/icons/b/4610b2"
extractedAt: "2026-02-21T21:36:50.973Z"
---

![Icon_banner](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/d07519083e68854c043236?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fee3b48173ab65a6d8b3510ab5fbef1dba91d8fd46014d1b45b4e5d8fe8c7d3b)

**Icon_banner**

---

## About

Icons are symbols used to represent features, functionality, or content. Visit the [icon page](/component/icons/b/586464) to see a library of all icons and the [icon component](/component/icons) for implementation details.

Several types of icons communicate information within Salesforce, each with variations based on what they represent and their use case. Here are the icon types, in order of most use to least use.

### Icon Types

#### Utility Icons

Utility icons are simple single-color glyphs that identify labels and actions. You can use them across all device types. These icons don't have a background shape and can be any color. You can use them on their own or paired with text. If you pair them with text, make sure the icon color matches the text color. For example, if an icon sits next to a title, use the same `on-surface-3` (blue 15) color.

>ℹ️ Utility icons haven't changed in SLDS 2.

#### Object Icons (Standard and Custom)

Object icons fall into two categories, standard and custom. Standard object icons represent objects (such as Accounts, Leads, Opportunities, and Cases) and related entities that come with Salesforce. Custom object icons are a unique set of icons used to represent custom objects that customers create. Both types of object icons feature a white glyph against a solid background color. Object icons use a specific limited color palette.

>ℹ️ SLDS 2 updates the background shape of standard icons to a circle.

#### Doctype Icons

Doctype icons represent document file formats. Each doctype icon features a white glyph representing its file type, on a background resembling a piece of paper with a folded corner.

>ℹ️ Doctype icons haven't changed in SLDS 2.

#### Action Icons

Action icons are touch-device-specific icons that appear next to an item—for example, a page header or card—so users can take action in a specific context. Each action icon features a white glyph on a colored circle. Action icons use a specific limited color palette.

>ℹ️ Action icons haven't changed in SLDS 2. 

#### Product Icons

Product icons represent Salesforce applications and feature the product branding. On the desktop, they’re used only in the App Launcher and at the top left of each Salesforce application window. On mobile device home screens, they launch the corresponding mobile app. Product icons are two-color and use official product color palettes.

## Design Principles

Salesforce icon design is a blend of professional and playful. Our icons are simple, approachable, and legible. Icons should be recognizable and easy to remember.

![Design Principles](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/a12ee1efe9ef6af0a78293?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a2269751b424666155cc3bcc628dabd43dfc576627a51b43e2acecc52f4e509b)

**Design Principles**

---

## Accessibility

Screen readers handle icons in two different ways. If an icon is informational, the screen reader reads it out loud. If an icon is decorative, the screen reader ignores it. Choose the right icon type for your use case. If you're using an informational icon, write an accessible label for it. 

For more information on icon accessibility, see the [Icon](/component/icons) component.

### Informational Icons

Informational icons—for example, button icons and standalone avatars—convey important information that the surrounding text doesn’t. Each icon requires either assistive text or an `aria-label` attribute (a code string that labels the element). Each image requires an `alt` description. In the `alt` description, briefly describe the purpose of the  icon or image, not what it looks like (for example "Upload File" instead of "paperclip").

![Overview-Informational](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/dd920fabbf1f73f26040c9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a8c7bc69052afb10606baa389f3c56347a30fd9956ce1d970346c7ad2f6c67e7)

**Overview-Informational**

---

### Decorative Icons

Decorative icons and images don't add relevant information or functionality. Icons and images that reinforce the meaning of adjacent text but don't add new information, fall into this category. Screen readers skip decorative icons. For images, use an empty `alt` tag to force screen readers to skip them.

![Overview-Decorative](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/d6091ae159d0a10adeea50?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0c33bf10247089d229c229d790e950fc692af88ab1fa08e7db31d0d43b194ad8)

**Overview-Decorative**

---

## Grid System and Keyline Shapes

Icons are based on an 8pt grid system and come in four keyline shapes—circle, square, vertical rectangle, and horizontal rectangle. These shapes are created using business process model and notation ([BPMN](https://www.omg.org/spec/BPMN/2.0.2/)) diagram conventions.

![Overview-Grid](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/3bea1fc9b88d51574fb93b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=090200965fd89142fa31076836695740bcd1ab90b8aea277501ea80c354c437e)

**Overview-Grid**

---

## Mobile Tap Targeting

When designing for mobile, add space around each icon to make it easier to select.

![Overview-Mobile 1](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/a9f5bb511ec1da366b8ca8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=31caaaa5d7db04dddd5bac3220ab767057bfb543be0cbc1295aadf85c9a11a6c)

**Overview-Mobile 1**

---

![Overview-Mobile 2](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/4d4c061617c5c6c72e0f77?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=45cc2297ddcac1bfe716fa0bfc28f651526a9fd46b27933018f840dcc27ea287)

**Overview-Mobile 2**

---

## Anatomy

* Based on a 60x60px grid
* 6px stroke weight
* 6px corner radius
* 6px negative space


![Overview-Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/a30180289904a578c582d0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=da27f11ee38822f570084352c273e301fb503282901c1b3a8e4e34ecb5c4fae6)

**Overview-Anatomy**

---

### Artboard

* Recommended canvas size for setting up Illustrator or Figma files: 100x100px
* Live area of 60x60px, with 20px padding on each side


![Overview-Artboard](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/0b824428ce593d37601dcc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042846Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8647cba5c832313324d809d18415058f7493cafd7d2fd74d9adfb30bdc204777)

**Overview-Artboard**

---
