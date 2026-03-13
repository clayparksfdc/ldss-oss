---
title: "Prompt"
slug: "prompt--usage"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/925906-prompt/b/59e6cd"
extractedAt: "2026-02-21T21:52:04.602Z"
---

## Overview

- Prompt is a modal dialog ideal for urgent tasks requiring user focus or decision-making.
- Ensures users make deliberate choices or provide necessary data before resuming other actions on the page.
- Prompts appear when the system needs to communicate a message to the user; it doesn’t show up as a result of user action.

## Usage

### Best Practices

- Use for critical actions such as errors or system alerts, or confirming an action.
- Keep content concise and relevant to the user’s immediate task.
- Provide clear actions, such as "OK" or "Cancel."
- Prompts should appear rarely and generally should not be a part of a typical user flow.

### When Not to Use

- Avoid using Prompt for non-critical interactions; consider [Scoped Notifications](https://zeroheight.com/2e1ef8501/v/0/p/54feb0-patterns/t/bf04654299) or [Toast](https://zeroheight.com/2e1ef8501/p/216f79) instead.
- Do not overuse; too many prompts can lead to "prompt fatigue."
- Avoid complex content within a prompt; keep it focused on a single task.

## Types

Alert

Customizable header with a single action button.





  UUID: 9b462246-0092-45fd-abca-5ccf010849bf
 -->

  





Confirm

Headerless with two action buttons.





  UUID: 00416f87-8b4f-4433-8db5-69b59c43c6b0
 -->

  





Prompt

Customizable header with two action buttons.





  UUID: 8d046f13-b2ab-42f1-a865-c7ef86a5b36e
 -->### Alert

Customizable header with a single action button.

### Confirm

Headerless with two action buttons.

### Prompt

Customizable header with two action buttons.

## Appearance

### Anatomy

**Title**



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Header**



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Body**



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Footer**



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Outline button**





  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Brand button**Title

Header

Body

Footer

Outline button

Brand button

### Types

DefaultNotifies the user of neutral information about the task being completed.





  UUID: 265ad41f-cbe6-46b5-b0b5-d8a979686c5f
 -->

  





ShadeNotifies the user of neutral information about the task being completed.





  UUID: d0fa7401-6d9e-44bc-bb4c-b22e677a5efa
 -->

  





InfoCommunicates neutral information about the system.





  UUID: 149320bf-7350-4b52-99ee-c01e8e19a2a2
 -->

  





OfflineNotifies the user they are not connected to the internet.





  UUID: fe3b8230-c1ba-4e7f-a811-7170bdd7a211
 -->

  





InverseNotifies the user of neutral information about a specific feature.





  UUID: 717aceb5-7830-4247-8b10-9052afce4391
 -->

  





Alt-inverseNotifies the user of neutral information about a specific feature.





  UUID: 1e69ff21-0dc9-4334-bcb5-9358ccf93f20
 -->

  





SuccessCommunicates the successful completion of an action.





  UUID: 7882c2a2-4fbc-4fc8-9d04-94fa4264e447
 -->

  





WarningWarns the user about important system information that deserves caution.





  UUID: 91845a51-1fa6-402c-841c-90ac803661bd
 -->

  





ErrorAlerts the user about an error in the system that needs immediate attention.





  UUID: 064bdec2-3477-48c1-8163-0499f5e6f298
 -->#### Default

Notifies the user of neutral information about the task being completed.

#### Shade

Notifies the user of neutral information about the task being completed.

#### Info

Communicates neutral information about the system.

#### Offline

Notifies the user they are not connected to the internet.

#### Inverse

Notifies the user of neutral information about a specific feature.

#### Alt-inverse

Notifies the user of neutral information about a specific feature.

#### Success

Communicates the successful completion of an action.

#### Warning

Warns the user about important system information that deserves caution.

#### Error

Alerts the user about an error in the system that needs immediate attention.

### Size

Responsive design with adaptable dimensions. Supports minimum and maximum width constraints to ensure readability on all devices.

### UI Content

- Title - Clear and concise (max. 50 characters).
- Body - Use short paragraphs or bulleted lists for readability.

## Behaviors

### Interactions

Close Prompt via footer buttons, or Escape key.

### Position

Prompts are centered in the viewport.

### Default Selection

Primary action (e.g., "Confirm") is highlighted and focusable by default.

### Validation

- Inline error messages guide users if required input is missing.
- Example: "Please provide a reason for this action."

## Related Components

