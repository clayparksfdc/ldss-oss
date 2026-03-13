---
title: "Vertical Navigation"
description: "We understand the importance of operations that enhance the experience for all users and others who rely on various navigation methods. Lightning also integrates numerous other accessibility considera"
category: "foundation"
slug: "vertical-navigation--accessibility"
status: "published"
lastModified: "2026-03-11"
---

We understand the importance of operations that enhance the experience for all users and others who rely on various navigation methods. Lightning also integrates numerous other accessibility considerations, some outlined below.

## Interactions

### Mouse

- Click on navigation items to move to different sections or pages.
- For overflow sections, users can click the chevron icon or label to expand or collapse the list of items.


### Keyboard

- The `Tab` key moves focus through the navigation items.
- `Shift+Tab` moves focus to the previous item.
- To expand or collapse an overflow section, press the `Enter` or `Space` key when the section header is focused.


### Other

- Ensure that navigation items are announced clearly by screen readers.


## Development Considerations

- ARIA Roles and Properties: Implement appropriate ARIA roles, such as `aria-expanded` for expandable sections, to convey the state to assistive technologies.


## Content Considerations

- Use clear and concise language for navigation item labels.
- If icons are used without accompanying text, provide alternative text to describe their function.


## Accessibility Labels

Ensure that each navigation item has an appropriate `aria-label` or descriptive text to convey its purpose.

## Internationalization

Ensure that text labels can be translated, and consider the impact of text expansion in different languages on the layout.
