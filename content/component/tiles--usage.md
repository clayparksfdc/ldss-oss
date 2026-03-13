---
title: "Tiles · Lightning Design System 2 - Usage"
slug: "tiles--usage"
category: "component"
order: 0
---

## Overview

Tiles provide a compact and structured way to display key data and related actions. They are commonly used for records, dashboards, and data summaries. Users can interact with tiles to view additional details or take actions.

- Tiles are UI components used to present related content in a structured format.
- Tiles help users quickly scan and interact with key information, offering a visual and accessible way to present grouped data.

### Best Practices

- Use tiles to visually organize related data and provide a clear hierarchy.
- Ensure tile content remains concise and scannable to avoid cognitive overload.
- Utilize appropriate icons and actions within the tile to enhance usability.

### When Not to Use

- Avoid using tiles for displaying large amounts of text or complex data tables.
- Do not use tiles when a simple list or table format provides better readability.
- Do not overload tiles with too many actions or excessive visual elements.
- Avoid using tiles for critical data entry workflows where modals or forms may be more effective.

## Types


| ### Base  A simple tile with a title and body content. |  |
| --- | --- |
|  |  |
| ### Article  Used to display key details about a knowledge article, including its title, summary, and metadata, providing users with a quick overview and easy access to relevant content. |  |
|  |  |
| ### Task  Displays a summary of an individual task, including key details such as status, due date, and priority, enabling users to quickly review and take action on their assigned work. |  |
|  |  |
| ### Board  Used to represent a collection of related records or tasks, providing a high-level summary and quick access to grouped information within a dashboard or workspace. |  |

### Base

A simple tile with a title and body content.

### Article

Used to display key details about a knowledge article, including its title, summary, and metadata, providing users with a quick overview and easy access to relevant content.

### Task

Displays a summary of an individual task, including key details such as status, due date, and priority, enabling users to quickly review and take action on their assigned work.

### Board

Used to represent a collection of related records or tasks, providing a high-level summary and quick access to grouped information within a dashboard or workspace.

## Appearance

### Anatomy


| *                                * ** ** ** | **Object icon or Avatar**: visually represents the type of record or entity associated with the tile, helping users quickly identify its context. |
| --- | --- |
| *                                * ** ** ** | **Tile title link**: serves as the primary clickable element, allowing users to navigate to the detailed view of the associated record or entity. |
| *                                * ** ** ** | **List Item**: Displays additional details like metadata, status, or key info below the Tile Title for quick scanning. |
| *                                * ** ** ** | **Menu button icon**: provides access to additional actions or options related to the tile, typically displayed in a dropdown menu. |
| *                                * ** ** ** | **Item Name**: text that identifies the specific content or object within the tile, helping users quickly recognize what the tile represents. |
| *                                * ** ** ** | **Label**: refers to the text element that provides a clear, concise description or title for the content within the tile, helping users understand its purpose or context. |

**Object icon or Avatar**: visually represents the type of record or entity associated with the tile, helping users quickly identify its context.

**Tile title link**: serves as the primary clickable element, allowing users to navigate to the detailed view of the associated record or entity.

**List Item**: Displays additional details like metadata, status, or key info below the Tile Title for quick scanning.

**Menu button icon**: provides access to additional actions or options related to the tile, typically displayed in a dropdown menu.

**Item Name**: text that identifies the specific content or object within the tile, helping users quickly recognize what the tile represents.

**Label**: refers to the text element that provides a clear, concise description or title for the content within the tile, helping users understand its purpose or context.

### Customization Options:

Tiles can contain elements such as headers, body content, icons, and actions, allowing for customization based on user needs.

- **Object Icon or Avatar**: Displays a visual representation of the associated record or entity.
- **Metadata**: Displays supplementary information such as timestamps, categories, or statuses.
- **Menu Button Icon**: Allows access to additional actions or options via a dropdown menu.
- **Labels:** Highlights key attributes, classifications, or statuses of the tile’s content.

### Size

Tiles are responsive and should adjust fluidly across different screen sizes.

### Layout

Maintain consistent margins and spacing between tiles to ensure readability and alignment.

### UI Content

- Keep text short and to the point.
- Use action labels that clearly describe the interaction.

## Behaviors

### States

The **Tile component** contains nested interactive elements, such as **Text Links, Button Icons, and Actions**, each with independent states. These nested components follow their respective interaction patterns

For example, a **text Link** behaves like a standard hyperlink with hover and focus states, while a **Menu Button Icon** follows button interaction states. Each nested component functions independently while maintaining a cohesive user experience within the Tile.

#### Text Link

The **Text Link** (typically used for the Tile title) provides navigational access to related records or additional information. It follows standard link states:

- **Default**: Displays as a standard hyperlink in the primary text color.
- **Hover**: Changes color to indicate interactivity when the user hovers over the link.
- **Active**: Changes color briefly when clicked, providing feedback that the action is in progress.
- **Focus**: Displays a focus outline to indicate keyboard navigation focus.
- **Visited**: Changes color if the link has been previously visited (depending on system/browser styling).
- **Disabled**: Appears in a muted color and is non-interactive if linking is unavailable.

#### Button Icon (Menu Button Icon)

The **Button Icon** (typically used for accessing additional actions in a tile) follows standard button states:

- **Default**: Displays as a clickable icon button with a neutral or lightly styled appearance.
- **Hover**: Changes background color or adds a subtle highlight to indicate interactivity.
- **Active**: Slightly changes color and applies a pressed effect when clicked.
- **Focus**: Displays a focus outline when navigated to via the keyboard.
- **Disabled**: Appears faded and is non-interactive when actions are unavailable.

### Loading

Skeleton loading states help maintain UI consistency while data is fetched. ipsum...

### Scrolling

Tiles within a container may scroll if content exceeds the max-height of the tile height. .

## Related Components
