---
title: "Tiles · Lightning Design System 2 - Usage"
slug: "tiles--usage"
category: "component"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-tile--base)

## Overview

Tiles provide a compact and structured way to display key data and related actions. They are commonly used for records, dashboards, and data summaries. Users can interact with tiles to view additional details or take actions.

* Tiles are UI components used to present related content in a structured format.
* Tiles help users quickly scan and interact with key information, offering a visual and accessible way to present grouped data.

### Best Practices

* Use tiles to visually organize related data and provide a clear hierarchy.
* Ensure tile content remains concise and scannable to avoid cognitive overload.
* Utilize appropriate icons and actions within the tile to enhance usability.

### When Not to Use

* Avoid using tiles for displaying large amounts of text or complex data tables.
* Do not use tiles when a simple list or table format provides better readability.
* Do not overload tiles with too many actions or excessive visual elements.
* Avoid using tiles for critical data entry workflows where modals or forms may be more effective.

## Types

| **Base**  A simple tile with a title and body content.  | ![base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/702972d92c1126a44fe780?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=82b13a1e554aaa48fb219107a052d01f6962fdac3c703d1da005931573c416fa) **base** |
| --- | :---: |
|   |   |
| **Article**  Used to display key details about a knowledge article, including its title, summary, and metadata, providing users with a quick overview and easy access to relevant content.   | ![article](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/958489fb14f12c21ee64b5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=16b1646f9a8f7093d5cc66c6ce7f37a7228e140086220e30fd877ec875d0df33) **article** |
|   |   |
| **Task**  Displays a summary of an individual task, including key details such as status, due date, and priority, enabling users to quickly review and take action on their assigned work.   | ![task](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/43d18f56cf3c43fc5bf332?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bf5ced925def99d76a96e1e8b88e0a7cc293d8393f41396b171e6a9be898112e) **task** |
|   |   |
| **Board**  Used to represent a collection of related records or tasks, providing a high-level summary and quick access to grouped information within a dashboard or workspace. | ![board](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/e655bcacb0c91c315e7bf4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=129dc5a0b64d10aa05d3c1736aed2e806d6a29d364847d98351aab0042e7f9b1) **board** |

## Appearance

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/41682de1a3aa0ea1c25d5d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f009b4f05eed89e1811cb5970c4c49623dcdb3741440aad81abec80f5ffc8b33)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c3a7469f805e3a3b1061759b806d7a67c3fd1b09ef747bb3992e5a6cb72cbfd9) | **Object icon or Avatar**: visually represents the type of record or entity associated with the tile, helping users quickly identify its context. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=56ea170126d692cf01acba139a6af517669bf30b455c3b5c417176f3904980c0)  | **Tile title link**: serves as the primary clickable element, allowing users to navigate to the detailed view of the associated record or entity. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b331d9d585cbf703f21e794995fcf6af3b7ada96013ae86708aa251a4f59cff6)  | **List Item**: Displays additional details like metadata, status, or key info below the Tile Title for quick scanning.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=32b051564a1908c4343e520c1f2babfaffc760b5a6192d9268ac6b893ec2955d)  | **Menu button icon**: provides access to additional actions or options related to the tile, typically displayed in a dropdown menu.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bb316ab30f979f8504e5f3ad14a52bbff30aa55e5877ead50a3f20079327d2aa)  | **Item Name**: text that identifies the specific content or object within the tile, helping users quickly recognize what the tile represents.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=de605e6585a20d7a5625cd6ae3e7c2c877e672f07d8f68d4d7dbcba0d1901ff8)  | **Label**: refers to the text element that provides a clear, concise description or title for the content within the tile, helping users understand its purpose or context.  |

### Customization Options:

Tiles can contain elements such as headers, body content, icons, and actions, allowing for customization based on user needs.

* **Object Icon or Avatar**: Displays a visual representation of the associated record or entity.
* **Metadata**: Displays supplementary information such as timestamps, categories, or statuses.
* **Menu Button Icon**: Allows access to additional actions or options via a dropdown menu.
* **Labels:** Highlights key attributes, classifications, or statuses of the tile’s content.

### Size

Tiles are responsive and should adjust fluidly across different screen sizes.

### Layout

Maintain consistent margins and spacing between tiles to ensure readability and alignment.

### UI Content

* Keep text short and to the point.
* Use action labels that clearly describe the interaction.

## Behaviors

### States

The **Tile component** contains nested interactive elements, such as **Text Links, Button Icons, and Actions**, each with independent states. These nested components follow their respective interaction patterns

For example, a **text Link** behaves like a standard hyperlink with hover and focus states, while a **Menu Button Icon** follows button interaction states. Each nested component functions independently while maintaining a cohesive user experience within the Tile.

#### **Text Link**

The **Text Link** (typically used for the Tile title) provides navigational access to related records or additional information. It follows standard link states:

* **Default**: Displays as a standard hyperlink in the primary text color.
* **Hover**: Changes color to indicate interactivity when the user hovers over the link.
* **Active**: Changes color briefly when clicked, providing feedback that the action is in progress.
* **Focus**: Displays a focus outline to indicate keyboard navigation focus.
* **Visited**: Changes color if the link has been previously visited (depending on system/browser styling).
* **Disabled**: Appears in a muted color and is non-interactive if linking is unavailable.

#### **Button Icon (Menu Button Icon)**

The **Button Icon** (typically used for accessing additional actions in a tile) follows standard button states:

* **Default**: Displays as a clickable icon button with a neutral or lightly styled appearance.
* **Hover**: Changes background color or adds a subtle highlight to indicate interactivity.
* **Active**: Slightly changes color and applies a pressed effect when clicked.
* **Focus**: Displays a focus outline when navigated to via the keyboard.
* **Disabled**: Appears faded and is non-interactive when actions are unavailable.

### Loading

Skeleton loading states help maintain UI consistency while data is fetched. ipsum...

### Scrolling

Tiles within a container may scroll if content exceeds the max-height of the tile height. .

## Related Components
