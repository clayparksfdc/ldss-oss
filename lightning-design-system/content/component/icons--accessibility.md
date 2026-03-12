---
title: "Icons"
description: "Hover Behavior:Icons should provide visible feedback when hovered, conveying their title or label."
category: "component"
slug: "icons--accessibility"
status: "published"
lastModified: "2026-03-11"
---

## Interactions

### Mouse

- **Hover Behavior:**Icons should provide visible feedback when hovered, conveying their title or label.


### Other

-**Screen Readers:**Icons must use the alternative-text, associated text labels, or the title attribute to convey their purpose. Screen readers should not announce decorative icons.
-**Magnification Tools:**The SLDS Icon Library uses svg files so icons remain visually distinct and scalable without pixelation or distortion.


## Design Considerations

- Ensure that icons are universally recognizable or paired with text for context. Avoid using ambiguous symbols.
- Icons must meet minimum contrast ratios against their background (4.5:1 for normal text size).
- Icons should align with related elements (e.g., placing a "Save" icon next to a text field).
- Avoid decorative icons that do not add value or may confuse users.


## Development Considerations

- Use the aria-hidden attribute for decorative icons.
- Icons require a containing element for two reasons:<ul><li>If assistive text is required, the containing element should contain both the icon and a `` with hidden assistive text describing the icon using the `slds-assistive-text` class.</li><li>If the icon is used without a visible, descriptive label, a `title` attribute is needed on the containing element. The `title` should describe the icon.</li></ul>
- If assistive text is required, the containing element should contain both the icon and a `` with hidden assistive text describing the icon using the `slds-assistive-text` class.
- If the icon is used without a visible, descriptive label, a `title` attribute is needed on the containing element. The `title` should describe the icon.
- If an icon has a visible label that describes what the icon represents, no title or hidden assistive text is required.
- The containing element must have the `slds-icon_container` class.


- If assistive text is required, the containing element should contain both the icon and a `` with hidden assistive text describing the icon using the `slds-assistive-text` class.
- If the icon is used without a visible, descriptive label, a `title` attribute is needed on the containing element. The `title` should describe the icon.


- For informational icons, add descriptive aria-label or assistive-text attributes to communicate the icon's function. For example: `<lightning-icon icon-name="utility:search" aria-label="Search" alternative-text="Search"></lightning-icon>`
- If an icon is decorative, use: `<lightning-icon icon-name="utility:search" aria-hidden="true"></lightning-icon>`


## Content Considerations

- Icons must include descriptive labels that explain their purpose. Avoid generic terms like "icon" or "button."
- Keep text labels or tooltips short but meaningful (e.g., “Search” instead of “Search the database”).

