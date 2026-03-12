---
title: "Tree"
slug: "tree--usage"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/950b57-tree/b/887cfc"
extractedAt: "2026-02-21T21:56:22.179Z"
---

## Overview

The Tree component is ideal for presenting hierarchical data, such as file directories or organizational structures. It simplifies navigation and makes complex data sets more accessible.

- Used to display structured data where items can contain multiple levels of hierarchy.
- Commonly found in features like folder navigation or managing data relationships.
- Provides interactive controls for expanding and collapsing nested items to improve navigation and reduce visual clutter.
### Best Practices

- Use the Tree component to display hierarchical data.
- Label each node meaningfully to ensure context for users.
- Keep the structure shallow if possible; deeply nested hierarchies can overwhelm users.
### When Not to Use

- Avoid using the Tree component for flat lists without hierarchy.
- Do not use it for datasets that are too large to navigate meaningfully.
- Avoid overloading each node with too much content or functionality.
## Appearance

### Anatomy

**Group Header:**Use to group related items within the tree.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Chevron Button Icon**: Allows users to show or hide child nodes.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Left Icon (optional):**Provides more context about each node



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Label:**Name of the tree node.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Linked Label:** Link to the associated object or website.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Right Icon (optional):** Provides more context about each node



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  

**Metatext:** Text provided to aid with identification or disambiguation.Group Header: Use to group related items within the tree.

Chevron Button Icon: Allows users to show or hide child nodes.

Left Icon (optional): Provides more context about each node

Label: Name of the tree node.

Linked Label: Link to the associated object or website.

Right Icon (optional): Provides more context about each node

Metatext: Text provided to aid with identification or disambiguation.

### Customization Options:

- Icons may be included on either the left or right side of the labels.
- Labels may be hyperlinked.
- A tree may be filtered by appending the tree to an input using [this blueprint](https://www.lightningdesignsystem.com/components/trees/#Filterable-Tree).
### UI Content

- Node labels should be concise to avoid truncation.
- Limit the depth of the hierarchy to ensure readability.
## Behaviors

### States

1. **Default**: Nodes are displayed in their standard state.
2. **Hover**: Node changes background color to indicate interactivity.
3. **Active**: The currently selected node is highlighted to show the user's location.
4. **Disabled**: Node is visible but not interactive.
5. **Focus**: Node label is underlined as a visual cue for keyboard navigation. Selection follows focus.

Default: Nodes are displayed in their standard state.

Hover: Node changes background color to indicate interactivity.

Active: The currently selected node is highlighted to show the user's location.

Disabled: Node is visible but not interactive.

Focus: Node label is underlined as a visual cue for keyboard navigation. Selection follows focus.

### Interactions

- Nodes are selected by either clicking on the label or pressing enter/space while focused.
- Parent nodes can be expanded or collapsed by either clicking on the chevron icon or left/right while focused.
- Selection follows focus.
### Loading

Use spinners or stencils during lazy loading.

### Default selection

You may pre-select a node to guide users, such as highlighting the current folder in a directory.

## Related Components

