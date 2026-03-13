---
title: "Checkbox Toggle"
slug: "checkbox-toggle"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/00c862-checkbox-toggle"
extractedAt: "2026-02-21T21:46:46.516Z"
---

## Overview

- Checkbox toggle enables you to switch settings between two binary states, such as enabling or disabling features.
- It’s commonly used for user preferences, feature settings, or workflows.
- It's easy to use. You get instant feedback, so you know right away if a feature is on or off.

Checkbox toggle enables you to switch settings between two binary states, such as enabling or disabling features.

It’s commonly used for user preferences, feature settings, or workflows.

It's easy to use. You get instant feedback, so you know right away if a feature is on or off.

## Usage

The checkbox toggle is ideally suited for selecting one of two mutually exclusive states, such as activating or deactivating a feature. It’s commonly used in setting up Salesforce products, allowing users to consider their preferences or actions, such as enabling notifications or adjusting workflow automation settings.

### Best Practices

- Always label the toggle so the user understands the action they’re taking.
- Use toggles for settings that take effect immediately.
- When a toggle is activated, give users immediate feedback to show if the action was successful.
- Make the component accessible for keyboard navigation and screen readers.

Always label the toggle so the user understands the action they’re taking.

Use toggles for settings that take effect immediately.

When a toggle is activated, give users immediate feedback to show if the action was successful.

Make the component accessible for keyboard navigation and screen readers.

### When Not to Use

- For actions involving more than two options, use other methods instead of a toggle switch.
- Avoid using toggles for actions that require confirmation or have significant consequences.
- Don’t use toggles to make a selection that is better suited for radio buttons, checkboxes, or picklists.
- Don’t use toggles for irreversible actions (for example, deleting records).

For actions involving more than two options, use other methods instead of a toggle switch.

Avoid using toggles for actions that require confirmation or have significant consequences.

Don’t use toggles to make a selection that is better suited for radio buttons, checkboxes, or picklists.

Don’t use toggles for irreversible actions (for example, deleting records).

Here are two examples of a checkbox toggle. One is toggled to the active position, and the other is toggled to inactive.

## Types

Base Toggle

The default toggle used for binary options.









  UUID: fd30bd66-d0ae-43f9-a76c-160628014af5
 -->

  

*A Checkbox toggle that is enabled with a state label.*### Base Toggle

The default toggle used for binary options.

A Checkbox toggle that is enabled with a state label.

## Appearance

The checkbox toggle aligns with the Salesforce Lightning Design System. It's easy to use, and you'll understand what it does right away.

### Anatomy

A checkbox toggle is made up of two primary sections (Handle and Track) with various elements that support usability and accessibility:

**Handle: **The circular switch that moves to indicate the current state.





  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  



**Track: **The background line that the handle moves along.





  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  



**Check: **The icon indicates the active state.





  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  



**Field Label: **A text label indicating the purpose of the toggle.





  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  



**State Label: **Label identifying the switch state. *(optional)*





  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  



**Required: **An asterisk (*) signifies a required selection when the conditions apply.Handle: The circular switch that moves to indicate the current state.

Track: The background line that the handle moves along.

Check: The icon indicates the active state.

Field Label: A text label indicating the purpose of the toggle.

State Label: Label identifying the switch state. (optional)

Required: An asterisk (*) signifies a required selection when the conditions apply.

### Customization Options

#### State Labels

State labels are optional and help users understand whether the toggle is active or inactive, as a complement to the handle position. Unlike field labels, state labels aren't a requirement for accessibility standards. The state label is meant to reflect binary pairs like On/Off, Active/Inactive, or Enabled/Disabled.

### Size

Desktop48x24px for desktop browsers.







  UUID: c19e9875-ce2d-4d8c-9d09-1ed81120f585
 -->

  





MobileOn mobile devices, checkbox toggles feature larger label text for touch interactions. This change automatically applies in Salesforce native mobile apps without requiring code modifications, as it activates with the secondary touch style sheet.









  UUID: cdb421d7-ddfc-4c75-ab70-ab487eca6d37
 -->#### Desktop

48x24px for desktop browsers.

#### Mobile

On mobile devices, checkbox toggles feature larger label text for touch interactions. This change automatically applies in Salesforce native mobile apps without requiring code modifications, as it activates with the secondary touch style sheet.

### Layout

Make sure there’s sufficient space around the toggle to prevent accidental activation. In mobile views, toggles don’t change in size—only the label size increases.

### Position

Place toggles where a user expects binary actions, such as in settings menus or at the end of rows in a list.

### UI Content

#### Field Labels

- Use clear, descriptive names that stand on their own. For example, use "Enable Notifications" instead of "Notifications," because the first example clearly describes what the button does when you click it.
- Aim for concise labels—one or two words if possible.
- Use title case. Capitalize the main words, for example “First Name” and “Phone Number”.

Use clear, descriptive names that stand on their own. For example, use "Enable Notifications" instead of "Notifications," because the first example clearly describes what the button does when you click it.

Aim for concise labels—one or two words if possible.

Use title case. Capitalize the main words, for example “First Name” and “Phone Number”.

## Behaviors

### States

1. **Default: **The toggle is in an active state or “on”.
2. **Hover:** When you hover over it, the toggle slightly changes its appearance to show that it’s interactive.
3. **Inactive: **Represents the inactive state or “off”.
4. **Disabled + Inactive:** The toggle appears darker gray and inactive when it’s unavailable for interaction.
5. **Disabled + Active: **The toggle appears darker gray and active when it's not available for interaction.
6. **Focus: **When the toggle is focused using keyboard navigation, it's highlighted. Focus is applied to both inactive and active states.

Default: The toggle is in an active state or “on”.

Hover: When you hover over it, the toggle slightly changes its appearance to show that it’s interactive.

Inactive: Represents the inactive state or “off”.

Disabled + Inactive: The toggle appears darker gray and inactive when it’s unavailable for interaction.

Disabled + Active: The toggle appears darker gray and active when it's not available for interaction.

Focus: When the toggle is focused using keyboard navigation, it's highlighted. Focus is applied to both inactive and active states.

### Interactions

- **Click:** The toggle switches between the active and inactive states.
- **Touch:** On mobile, the toggle responds to touch gestures.
- **Keyboard**: Users can toggle between active and inactive states using Enter or the spacebar.

Click: The toggle switches between the active and inactive states.

Touch: On mobile, the toggle responds to touch gestures.

Keyboard: Users can toggle between active and inactive states using Enter or the spacebar.

### Loading

If the action associated with the toggle takes time to complete, a spinner or loading animation is displayed after activating the toggle.

## Related Components

