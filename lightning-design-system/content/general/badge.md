---
title: "Badge"
slug: "badge"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/78871c-badge"
extractedAt: "2026-02-21T21:44:01.876Z"
---

## Overview

- Displays contextual information, like user roles, statuses, or categories.
- Compact, small colored background with text or an icon or both.
- Lightweight and unobtrusive, often used in dashboards or next to data fields for quick, concise communication.
- Provides at-a-glance information that doesn’t need extra interaction.
## Usage

Badges are simple UI components that help users quickly scan and identify key information, such as the priority or category of something, without being too distracting.

### Best Practices

- Display a small yet important piece of information (for example user roles, status indicators) in list views or in dashboards. Example: "Administrator" next to a user's name in a dashboard.
- Make sure badges have clear, easily understandable text and proper colors for accessibility.
- Use badges in a consistent way across your product to help users become familiar with their meaning.
### When Not to Use

- Don’t use badges for large amounts of text, such as long descriptions, or critical information that users must engage with directly.
- Don’t use multiple badges in one place, which can clutter the UI and overwhelm users.
## Types

Default Badge

Shows normal or non-urgent information. This is the most commonly used badge for general statuses that don't require immediate attention.





  UUID: 87e9b66c-b243-4fe2-8fe5-b4ae32d6e19f
 -->

  





Light Badge

Shows less prominent or subtle statuses. It's used when the information is helpful but not critical, allowing it to blend more into the UI while still being visible.





  UUID: 7f856a77-da8d-4b2b-8251-1546b561601a
 -->

  





Info BadgeUsed in dark-themed UI sections to make badges high-contrast and readable. The inverse badge is typically applied when the default badge would not be clearly visible.





  UUID: f9003d05-130f-4f37-8f10-e10d8e00b11d
 -->

  





Success Badge

Communicates positive statuses like "Completed" or "Approved." Green is universally associated with success and can be used to highlight successful actions or achievements.







  UUID: 8bf53b03-f978-4975-9bc9-0a8311eed267
 -->

  





Warning Badge

Highlights cautionary or advisory information such as “Pending” or “At Risk”. It draws attention to elements that need review but are not yet critical or destructive.





  UUID: 70d798dd-0873-47c9-9c2a-7bfd099436c8
 -->

  





Error Badge

Used for urgent or critical statuses such as "Failed" or "Error." The red badge immediately draws the user’s attention and indicates that some action or review is needed to resolve an issue.





  UUID: fc0a5bb4-436f-45af-ad8b-6fdea69052f4
 -->### Default Badge

Shows normal or non-urgent information. This is the most commonly used badge for general statuses that don't require immediate attention.

### Light Badge

Shows less prominent or subtle statuses. It's used when the information is helpful but not critical, allowing it to blend more into the UI while still being visible.

### Info Badge

Used in dark-themed UI sections to make badges high-contrast and readable. The inverse badge is typically applied when the default badge would not be clearly visible.

### Success Badge

Communicates positive statuses like "Completed" or "Approved." Green is universally associated with success and can be used to highlight successful actions or achievements.

### Warning Badge

Highlights cautionary or advisory information such as “Pending” or “At Risk”. It draws attention to elements that need review but are not yet critical or destructive.

### Error Badge

Used for urgent or critical statuses such as "Failed" or "Error." The red badge immediately draws the user’s attention and indicates that some action or review is needed to resolve an issue.

## Appearance

### Anatomy

Icon: Badges may or may not include a utility icon either before or after the text label.

**Preceding Icon**(*optional)*



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Text Label:** This is the core information inside the badge.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Background Color:** This varies by status or category (for example, blue for info, red for error).



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Trailing Icon** *(optional)*Preceding Icon (optional)

Text Label: This is the core information inside the badge.

Background Color: This varies by status or category (for example, blue for info, red for error).

Trailing Icon (optional)

### Customization Options

Badges can include only the icon and no text label. Use icon-only badges with caution, however. Badges don't receive focus, so there's no chance to explain their meaning with a tooltip or popover. It’s important that users can immediately recognize and understand the icon.

### Layout

Place badges near the information they describe, such as a record name, user role, or status field. You can also align them horizontally in lists if there’s enough space.

### UI Content

- Badge labels must be short and concise.
- Use title capitalization. No punctuation.
- Use 1-3 words to avoid truncation.
## Behaviors

### Interactions

Badges are static and non-interactive. They don't receive focus and can't be used as a trigger.

### Validation

Badges aren't typically used for form validation or error messaging but can display statuses like "Incomplete" or "Pending" as a supplementary label.

## Related Components

