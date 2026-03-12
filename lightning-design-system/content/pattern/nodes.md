---
title: "Nodes"
slug: "nodes"
category: "pattern"
order: 0
---

## Introduction


| Nodes are the building blocks of a workflow. Each one represents an action. | Start using our Design Kits                          [           *         ](https://www.figma.com/@salesforce)                       *  *           *   [Open in Figma](https://www.figma.com/community/file/1415890669347272207) |
| --- | --- |

## Usage

- Use paired shapes and colors to represent each possible action and process step.
- Don't use multiple colors and shapes to represent the same state.
- Keep node shapes and colors consistent across actions. Standardize type color, size, and spacing.
- Each node must have a name label. A node may also include a text description and link. These labels can be up to 132 pixels across.
- Nodes may also include an icon inside the node. Use icons to differentiate related functions such as Start and End.

Workflow nodes

## Node Deletion

The trashcan icon denotes removing an element, while the “x” icon denotes closing or dismissing it. Use the trashcan icon to allow removal of a workflow node when the user hovers over it.

Use a 44x44 pixel touch target for mobile web.


| *                       *  Node in hover  *           *  | *                       *  Focus  *           *  | *                       *  Delete  *           *  |
| --- | --- | --- |

## Node Error Behavior

The ban icon denotes an error. Use the ban icon in the upper left corner of the node.

When errors are identified and appear in the [Error Popover](/component/popover), highlight the affected node with an outline. Allow the user to navigate between elements to address an error.

Use a 44x44 pixel touch target for mobile web.


| *                       *  Node in hover  *           *  | *                       *  Focus  *           *  | *                       *  Delete  *           *  |
| --- | --- | --- |
