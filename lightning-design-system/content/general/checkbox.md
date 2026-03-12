---
title: "Checkbox"
slug: "checkbox"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/980561-checkbox"
extractedAt: "2026-02-21T21:46:05.132Z"
---

## Overview

- Enables you to select and deselect individual items within a group of options or turn settings on and off.
- Commonly used in forms, settings, and filter options.
- Displays as a small box, with a checkmark appearing when selected.
## Usage

### Best Practices

- To select multiple options, use checkboxes instead of radio buttons or switches.
- If you have a long list of options, consider using a multi-select dropdown or group your options to make them easier to scan.
- Always provide clear, concise labels for each checkbox to help users understand each option.
- Align checkboxes vertically with proper spacing to avoid confusion.
### When Not to Use

- Don’t use checkboxes if only one of several options can be selected—use radio buttons instead.
- Unlike checkbox toggles, checkboxes don't retain their selection until saved or applied through a confirmation action like submitting a form.
- Avoid overwhelming users with too many checkboxes. Instead, group related options or use categories where possible.
## Appearance

### Anatomy

**Box:**Show selection state.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  

**Label:**Text description that defines the option. 

Checkboxes can be used without a label in datatables to select the row.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  

**Required Indicator:** *(optional) *Shows that users must select an option.Box: Show selection state.

Label: Text description that defines the option.

Checkboxes can be used without a label in datatables to select the row.

Required Indicator: (optional) Shows that users must select an option.

### Size

Checkboxes are adaptive and have a mobile variant with increased size for touch devices.

### Layout

Arrange checkboxes vertically, with enough padding between each option to prevent selection errors. The lightning-checkbox-group base component has default spacing built-in.

For languages that read right-to-left, the labels can be positioned to the left of the checkbox.

### UI Content

- Use short, actionable text for checkbox labels. This makes them easier to scan and understand. Use a label of 1 to 3 words if it makes the choice clear.
- If more explanation is needed, describe what happens from the user’s perspective (for example "Show notifications" instead of “Enable notifications”).
- Use a similar style for each item in a list.
- Start with a verb that describes what the option does instead of using “enable” or “activate”.
- Use sentence capitalization in the labels for these UI elements. No end punctuation.
- In some cases, a checkbox is used to validate a user's understanding of or acceptance of specific terms and conditions. In these cases, the checkbox label is a short sentence or even a paragraph.
## Behaviors

### States

1. **Unselected**: The checkbox’s default state
2. **Selected:** A user's current selection within a range of options
3. **Intermediate:**Indicates a partial selection, such as when a parent checkbox controls multiple child checkboxes and some of them are selected.

Unselected: The checkbox’s default state

Selected: A user's current selection within a range of options

Intermediate: Indicates a partial selection, such as when a parent checkbox controls multiple child checkboxes and some of them are selected.

1.**Error:**Indicates an error, usually a required selection is missed.
2.**Read Only:**Shows the state of selection but can't be interacted with.
3.**Disabled:** Disabled items don't receive focus.
4. **Focus:**Displays a focus outline for keyboard users.

Error: Indicates an error, usually a required selection is missed.

Read Only: Shows the state of selection but can't be interacted with.

Disabled: Disabled items don't receive focus.

Focus: Displays a focus outline for keyboard users.

### Interactions

### Validation

Error is the only type of validation available for checkboxes. Errors typically appear when the user attempts to save or submit the form. Here are some common situations where a checkbox displays an error state.

1.**Required Selection**: If a checkbox selection is mandatory and the user tries to continue without selecting it, an error message appears to remind them to complete this required step.
2. **Invalid Combination**: If certain checkboxes can't be selected together (for example, selecting incompatible options), an error message can help to guide the user toward valid choices.

Required Selection: If a checkbox selection is mandatory and the user tries to continue without selecting it, an error message appears to remind them to complete this required step.

Invalid Combination: If certain checkboxes can't be selected together (for example, selecting incompatible options), an error message can help to guide the user toward valid choices.

Error states are visually indicated with a red border around the checkbox and an error message below it, helping users quickly identify and correct the issue.

## Related Components

