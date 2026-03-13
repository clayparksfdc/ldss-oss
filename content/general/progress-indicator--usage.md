---
title: "Progress Indicator"
slug: "progress-indicator--usage"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/64d280-progress-indicator/b/65af2a"
extractedAt: "2026-02-21T21:51:22.481Z"
---

## Overview

- Guides users through multi-step processes by providing a clear representation of progress.
- Commonly used in wizards, onboarding flows, and step-by-step workflows.
- Indicates completed, current, and pending steps, supporting clear navigation and task tracking.

## Usage

Progress indicators make it simple to navigate multi-step processes. They provide context so users always know where they are in the flow and what to expect next.

### Best Practices

- Use for processes with three or more steps.
- Label steps with actionable language (for example "Verify Account" rather than "Step 3").
- Keep your process simple and easy to follow. If there are more than six steps, group them logically.

### When Not to Use

- For single-step actions or processes.
- When the steps don't follow a sequential order.
- In dynamic workflows with changing steps.

## Appearance

The progress indicator visually represents the steps in a process. It consists of a horizontal or vertical track with evenly spaced steps, each represented by a circle or icon. Steps can be complete, active, or incomplete, using different styles to indicate progress.

### Anatomy

**Completed Step:** Shows that the step was finished.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Current Step:** Highlights the active step.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Uncompleted Step:** Represents a step that hasn't started.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  



**Error:** Shows that an error has occurred in the step.





  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  



**Tooltip:**Displays the step label on hover.Completed Step: Shows that the step was finished.

Current Step: Highlights the active step.

Uncompleted Step: Represents a step that hasn't started.

Error: Shows that an error has occurred in the step.

Tooltip: Displays the step label on hover.

### Customization Options

#### Size

- Responsive: Adjusts to fit available horizontal or vertical space.
- Minimum Width: 320px for mobile layouts.

### UI Content

- Keep step labels concise, no more than 30 characters.

## Behaviors

### States

The Progress Indicator has the following states:

1.**Default:**Neutral appearance with a grey dot.
2.**Hover:** Displays the step label in a tooltip.
3. **Active:**Indicates the currently selected step.
4.**Focus:**The step is selected when it receives focus.

Default: Neutral appearance with a grey dot.

Hover: Displays the step label in a tooltip.

Active: Indicates the currently selected step.

Focus: The step is selected when it receives focus.

### Interactions

**Completed Step**Shows that the step was finished.





  UUID: 304e2a85-d4c6-4d4a-9c3a-2b03378ad769
 -->

  





**Current Step**Highlights the active step.





  UUID: 6a0a74fd-b152-40f8-a3b0-8d86254a40cc
 -->

  





**Uncompleted Step**Represents a step that hasn't started.





  UUID: 2a9881b5-0be1-4e5d-9aca-769a4724d702
 -->#### Completed Step

Shows that the step was finished.

#### Current Step

Highlights the active step.

#### Uncompleted Step

Represents a step that hasn't started.

### Validation

Display an error state if users fail to complete required fields before progressing.

**Error**Shows that an error has occurred in the step.





  UUID: 5a6ec990-30e6-4f5e-b4a8-6d7aa6f8c902
 -->#### Error

Shows that an error has occurred in the step.

## Related Components

