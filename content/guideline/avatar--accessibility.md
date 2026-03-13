---
title: "Avatar · Lightning Design System 2"
slug: "avatar--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/94085e-avatar/b/74d5d4"
extractedAt: "2026-02-21T21:43:59.237Z"
---

## Interactions

### Keyboard

Ensure visible focus indicators (e.g., outlines) appear on avatars when focused.

- **Tab**: Moves focus to and between avatars.
- **Enter/Spacebar**: Activates interactive avatars.

### Mouse Interactions

- **Clickable Areas**: Interactive avatars should have a clearly defined and appropriately sized clickable area for ease of use.
- **Hover Feedback**: Provide visual feedback (e.g., changes in color, border, or shadow) when a user hovers over an interactive avatar to indicate interactivity.
- **Tooltips or Pop-ups**: If additional information appears on hover, ensure the same information is accessible via focus or click for keyboard users.
- **Focus vs. Hover**: Differentiate between hover and focus states so users relying on a keyboard can distinguish interactive elements.

## Design Considerations

- When deviating from the standard Avatar styling hooks, ensure proper contrast ratios against their background.
- Design avatars that are visually clear and appropriately sized to fit within the layout without overwhelming it.

## Development Considerations

- As with all components, use semantic HTML. ARIA roles should be used sparingly.
- Use meaningful `alt` text for avatars associated with entities (e.g., names or roles). For decorative avatars, set `alt=""`.

## Content Considerations

### Alternative Text (Alt Text)

- Add clear and descriptive alternative text to each avatar to help screen readers identifying the person or entity depicted. If the avatar is a user’s profile picture, the alt text can include the person’s full name, such as "Alex Brown." For generic icons (e.g., a group icon), describe them with text like "Group icon."
- When an avatar appears alongside a visible name, adding the name to the alt text can lead to redundancy.
- We recommend setting the alt attribute to an empty value (`alt=""`) to hide the graphic from screen readers. Additionally, phrases like "picture of" are generally unnecessary, as screen readers already identify the image type.

### Supplement with Context

- Provide descriptive labels or text alongside avatars to clarify their purpose or associated entity. Avoid relying on images alone for key information.