---
title: "Cards"
slug: "cards--usage"
category: "component"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-card--base
title: Card - Base
height: 400px
```

## Overview

- A card is used to group similar types of information, such as recent records, upcoming tasks, or alerts.
- Cards visually separate content into distinct sections, making it easier to read and interact with.
- They can include a header, body, and footer, often displaying dynamic content and actions.
- The body can hold any content or components.

Salesforce Card displaying recent opportunities with a header, content, and footer.

## Usage

### Best Practices

- Focus each card on a single task, idea, or piece of information.
- Use typography, spacing, and visuals to create a clear hierarchy within the card.
- For complex content, separate it into sections using nested cards, tabs, accordions, or expandable areas.
- Use concise, clear titles that convey the purpose of the card.
- Place buttons or links in the footer for contextual actions or access to more details.

### When Not to Use

- Avoid making the entire card or non-interactive areas clickable.
- Don't overload the card body with too many actions or links.

## Types

A card is composed of a header, body, and footer and can be used with various combinations of those parts.


| Base Card  Includes a header, body, and a footer for action buttons or links. The header and footer are optional when using a card.  **Use Case:** When the card's content needs a title and actions. | *A visual mockup of a card with a header and footer. No content needed.* |
| --- | --- |

## Appearance

Cards use a white container with rounded corners, without shadows or outlines. They appear on a background that uses `neutral 95` or darker.


|  | **Header:**The top section of a card component. It can contain a title, icon, or buttons for quick context. |
| --- | --- |
|  |**Title:** Summarizes content, helping users quickly identify the card's purpose. |
|  | **Icon:**Provides visual cues and supports quick recognition. |
|  |**Button/Button Menu**: Provides quick access to primary actions related to the card’s content. |
|  | **Body:**The main content area that displays detailed information, such as text, images, or components. |
|  |**Footer:** The bottom section includes secondary actions, links, or supplementary information. |

### Customization Options

- Can include dynamic content like badges or status updates (for example, "In Progress").
- Icons and buttons are customizable based on the context.
- The header can be hidden if unnecessary.

- Adjust padding based on content (for example, remove padding for data tables).
- Displays collapsed by default if no content is available.

- Supports multiple button types, navigational links (for example, "View All"), or supplementary text or [progress indicators](/component/progress-indicator)
- The footer can be hidden if not needed.

### Configurations


| No Header  Displays only the body and footer.  **Use case:**When the context of the content is already clear without a title, this allows the user to focus on content and actions. | *A visual mockup of a card without a header. No content needed.* |
| --- | --- |
|  |  |
| No Footer  Displays the header and body only.  **Use Case:**For informational content without required actions (for example, announcements). | *A visual mockup of a card without a footer. No content needed.* |
|  |  |
| No Header or Footer  Displays only the body.  **Use Case:**When the content is self-explanatory and doesn’t require any context or actions. | *A visual mockup of a card without a header or footer. No content needed.* |

### Size

Cards can either have a **fluid width** that adjusts with the container or a **fixed width** based on specific design needs.

### Layout


| Nested  Place a card inside another card to group related content hierarchically within a single container.   A card can be nested inside another card and can be used with or without a border.  **Use case:** Grouping data within an entity, such as account details with sections for contact info and recent activity. | *A nested card with borders, A nested card without borders.* |
| --- | --- |
|  |  |
| Wrapped  Multiple cards that appear within the same container but remain independent of one another.  **Use Case:** Dashboard layouts displaying various data points. | *A visual mockup of a card without a header. No content needed.* |

### UI Content

#### Card Title

Use title capitalization and keep it short and informative.

#### Card Content

Limit content to a few key points to avoid overwhelming users.

## Behaviors


| Collapsible  The body and footer collapse if no data is available. |  |
| --- | --- |


| Expandable Content  Cards are static, but an expand or collapse pattern can be added within the body for longer content. This pattern is useful when presenting long blocks of information, allowing users to reveal more content without overloading the page visually. |  |
| --- | --- |


| Loading  When fetching content or performing an asynchronous action, a card shows a loading spinner to indicate that data is being retrieved or processed. |  |
| --- | --- |

## Related Components
