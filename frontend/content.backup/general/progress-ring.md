---
title: "Progress Ring"
slug: "progress-ring"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/050982-progress-ring"
extractedAt: "2026-02-21T21:51:47.638Z"
---

## Overview

- The progress ring visually displays progress in a circular form, showing the percentage of completion.
- The base type shows how far along you are in the process, while the active step type shows where you are right now.
- When the progress ring's direction is set to fill, the color flows clockwise in the ring.
- When the progress ring’s direction is set to drain, the color flows counterclockwise. Instead of progress, the drain direction can show the depletion of a value or a countdown, for example.

The progress ring visually displays progress in a circular form, showing the percentage of completion.

The base type shows how far along you are in the process, while the active step type shows where you are right now.

When the progress ring's direction is set to fill, the color flows clockwise in the ring.

When the progress ring’s direction is set to drain, the color flows counterclockwise. Instead of progress, the drain direction can show the depletion of a value or a countdown, for example.

The progress ring is ideal for showing progress when there's a clear start and end point. By filling the ring with a color, the progress ring shows a value from 0 (start) to 100 (completed). The progress ring has variants for several use cases.

## Usage

### Best Practices

- Use a progress ring for tasks with a defined completion percentage, such as file uploads or process stages.

Use a progress ring for tasks with a defined completion percentage, such as file uploads or process stages.

### When Not to Use

- Don’t use it for tasks where progress is indeterminate.
- Don’t use it in place of a custom data visualization component.
- Don’t use it for tasks that need a lot of detail or explanation in text.
- Don’t use it to track processes where progress updates aren’t necessary.

Don’t use it for tasks where progress is indeterminate.

Don’t use it in place of a custom data visualization component.

Don’t use it for tasks that need a lot of detail or explanation in text.

Don’t use it to track processes where progress updates aren’t necessary.

## Types

Base (default)

This progress ring represents overall progress towards completion, measured as a percentage from 0 - 100%.  

**Use Case**

Processes where users want to see progress as a percentage, such as file uploads or task completion rates.





  UUID: d1e755ee-0b6e-4375-8cee-8e6a19fe699f
 -->

  

*Base progress ring showing 50% completion.*





Base Autocomplete

The `base-autocomplete` variant uses the default green fill color and adds a success icon to denote completion when the value is 100. The success icon is only used with the base autocomplete variant.

**Use Case: **Processes where you want to reinforce a sense of accomplishment or show that an operation was successful. For example, after completing an onboarding process, the autocomplete progress ring can provide users with visual confirmation.





  UUID: ddcf2b0b-f34f-4718-960d-b1a7e75f839e
 -->

  

*Completion icon (checkmark).*





Active Step

The brand blue ring highlights the specific step the user is currently completing. 

**Use Case: **Processes like onboarding, forms with multiple steps, or approval processes where it’s critical to show the user’s current step.





  UUID: e434e1ef-b594-4b28-b14d-4a5d65714a25
 -->

  

*Active step progress ring.*### Base (default)

This progress ring represents overall progress towards completion, measured as a percentage from 0 - 100%.

Use Case

Processes where users want to see progress as a percentage, such as file uploads or task completion rates.

Base progress ring showing 50% completion.

### Base Autocomplete

The base-autocomplete variant uses the default green fill color and adds a success icon to denote completion when the value is 100. The success icon is only used with the base autocomplete variant.

Use Case: Processes where you want to reinforce a sense of accomplishment or show that an operation was successful. For example, after completing an onboarding process, the autocomplete progress ring can provide users with visual confirmation.

Completion icon (checkmark).

### Active Step

The brand blue ring highlights the specific step the user is currently completing.

Use Case: Processes like onboarding, forms with multiple steps, or approval processes where it’s critical to show the user’s current step.

Active step progress ring.

## Appearance

### Anatomy

**Ring Track**: The component’s unfilled visual track.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Indicator**: Displays the progress point of filling or draining along the ring track.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Icon**: Icons appear inside the ring to indicate that warnings or errors have occurred in the process.Ring Track: The component’s unfilled visual track.

Indicator: Displays the progress point of filling or draining along the ring track.

Icon: Icons appear inside the ring to indicate that warnings or errors have occurred in the process.

### Size

Progress rings have two sizes: medium (default) and large

## Behaviors

### States

0%

25%

50%

75%

100%

Complete

**Base and Autocomplete**

(Success icon only used with autocomplete variant)





  UUID: f83c8b17-b600-4169-b27b-01739a902be9
 -->

  





  UUID: bd6adec9-f3e1-4d09-ab25-29845dc9981b
 -->

  





  UUID: 64922279-558d-4d50-aec7-c36732b264da
 -->

  





  UUID: 35c3cdd1-ae1c-4327-9f08-e4772fc05338
 -->

  





  UUID: 71b5308e-8bed-4b6c-8e42-9869c4d85506
 -->

  





  UUID: 284e4c83-b7ab-4412-ae96-661b8e3b0e18
 -->

  

**Warning**

*(Base state)*





  UUID: 31926da2-5cd1-44ab-bcde-3965557c0b5a
 -->

  





  UUID: e6c53e9a-7e4e-45fb-a924-af4fbeec60d1
 -->

  





  UUID: 81975df6-cc35-40cb-bb89-2ac4b5aa6cff
 -->

  





  UUID: f81d8a19-c1a4-4bca-a9ee-55d8f6ea30b4
 -->

  





  UUID: aae0894c-3279-4d66-a834-e9a55320884b
 -->

  

N/A

**Error **

*(Base state)*





  UUID: 025eb4e6-81b0-47c9-9d5b-070fbeea432f
 -->

  





  UUID: 65bc1238-bff8-40e3-933e-574c10e98531
 -->

  





  UUID: f75fcb23-a45a-421d-981d-aa2e1da87bc3
 -->

  





  UUID: 5870c3cd-e617-48d5-ae54-452c0caa9647
 -->

  





  UUID: 6f14ef3f-4c46-473c-b5cb-b224b1b7fa79
 -->

  

N/A0%

25%

50%

75%

100%

Complete

Base and Autocomplete

(Success icon only used with autocomplete variant)

Warning

(Base state)

N/A

Error

(Base state)

N/A

Empty: 0% state

Filled / Drained: 25%–75%

- The fill value indicates a color flow in the clockwise direction.
- The drain value indicates a color flow in the counterclockwise direction.

The fill value indicates a color flow in the clockwise direction.

The drain value indicates a color flow in the counterclockwise direction.

Complete: Used with the base-autocomplete variant to show 100% completion

Warning: Alerts users to potential issues, risks, or situations that require attention. Users can take preventive or corrective actions before proceeding.

Error/Expired: Indicates that a user action, system process, or content load has failed due to invalid input, system issues, or restricted access.

### Interactions

Progress rings are non-interactive—they provide visual feedback only.

## Related Components

