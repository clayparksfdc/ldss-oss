---
title: "Toast"
slug: "toast"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/216f79-toast"
extractedAt: "2026-02-21T21:55:51.181Z"
---

## Overview

Toasts provide immediate feedback to a user without disrupting their current task. The toast content is meant to be short and contextual, and provide the user with the information they need to know without getting in their way.

- Toasts inform users about the success or failure of actions, warnings, or other transient messages.
- Toasts let users know about important system events without getting in the way of their work.
- Toasts appear automatically or in response to user interaction.
- Toasts vanish after a specific time period or when the user closes them.

## Usage

### Best Practices

- Use concise language to communicate the message clearly.
- To reinforce the purpose of the message, choose the right toast type: success, warning, error, or info.
- Show one toast at a time to avoid overwhelming users.

### When Not to Use

- For persistent notifications, use other components like scoped notifications, alerts, or inline text.
- For messages that require immediate user action, consider a modal instead.
- Don't use toasts for situations where feedback isn't critical or can be delivered inline.

## Types

Success

Communicates the successful completion of an action.

**Use case:** After a user successfully saves, submits, or completes an action.





  UUID: ad9337ca-a713-40e8-877c-cd078e71700d
 -->

  





Error

Indicates an error or failure.

**Use case:** When an action fails because the user makes a mistake or there's a system failure.





  UUID: fce22f2b-7601-4fa5-a503-31ebf9a2b1d8
 -->

  







Warning

Alerts users to a potential issue or gives a cautionary message.

**Use case:** When actions could result in unexpected outcomes.





  UUID: a71b3594-4e09-4374-b304-f5f52724325e
 -->

  







Info

Provides non-critical information to the user.

**Use case:**To communicate updates or general information.









  UUID: dd040c9a-60d8-4e64-8de8-de07f88787f9
 -->### Success

Communicates the successful completion of an action.

Use case: After a user successfully saves, submits, or completes an action.

### Error

Indicates an error or failure.

Use case: When an action fails because the user makes a mistake or there's a system failure.

### Warning

Alerts users to a potential issue or gives a cautionary message.

Use case: When actions could result in unexpected outcomes.

### Info

Provides non-critical information to the user.

Use case: To communicate updates or general information.

## Appearance

### Anatomy

**Icon:** Represents the type of message (success, error, warning, info).



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Message Text:** Provides the main context of the toast message.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Detail Text:** Detailed message or instructions related to the toast message. *(optional)*



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Text Link:** Enables users to navigate to resources and help docs.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  



**Button Icon:** Enables users to close the toast manually.Icon: Represents the type of message (success, error, warning, info).

Message Text: Provides the main context of the toast message.

Detail Text: Detailed message or instructions related to the toast message. (optional)

Text Link: Enables users to navigate to resources and help docs.

Button Icon: Enables users to close the toast manually.

### Customization Options

- Customize message text to align with the message context and toast type.
- Use text links to provide users with additional information.
- To provide links in toasts on small screens and mobile environments, include links in the toast's message text instead of the detail text.
- Choose to dismiss automatically after a set time, or require manual dismissal. See [dismissal behaviors](https://zeroheight.com/2e1ef8501/v/0/p/216f79-toast/t/25faf512c3).

### Size

Toasts are responsive and adjust to fit content length while adhering to min and max limits.

### Layout

Toasts are positioned near the top of the screen and centered to ensure they are easily noticeable and visually balanced.

### UI Content

- Keep messages concise, ideally under 100 characters.
- Use plain, accessible language.
- Avoid jargon or overly technical terms.

## Behaviors

### Interactions

### Toast Dismissal

The mode attribute sets the component's dismissal. There are two modes that determine duration:

- **Sticky Toast**

Remains on the screen until the user closes it.
- Use this option for important alerts or information that requires immediate action.
- Includes a close button to dismiss the toast.
- **Dismissible Toast**

Automatically disappears in a few seconds.
- The amount of time it remains open depends on whether the toast contains a link.

No link: 4.8 seconds
- With link: 9.6 seconds
- Use this option for non-critical or informational messages that don't need a response.
- Includes a close button, which enables the user to dismiss it before the timer expires.

Sticky Toast

- Remains on the screen until the user closes it.
- Use this option for important alerts or information that requires immediate action.
- Includes a close button to dismiss the toast.
Dismissible Toast

- Automatically disappears in a few seconds.
- The amount of time it remains open depends on whether the toast contains a link.

No link: 4.8 seconds
- With link: 9.6 seconds
- Use this option for non-critical or informational messages that don't need a response.
- Includes a close button, which enables the user to dismiss it before the timer expires.

Automatically disappears in a few seconds.

The amount of time it remains open depends on whether the toast contains a link.

- No link: 4.8 seconds
- With link: 9.6 seconds
Use this option for non-critical or informational messages that don't need a response.

Includes a close button, which enables the user to dismiss it before the timer expires.

The dismissal mode can also depend on the variant and whether the toast has a link.

**Variant**

**Has link?**

**Default Mode**

`info`

✅

`sticky`

`info`

❌

`sticky`

`success`

✅

`sticky`

`success`

❌

`dismissible`

`warning`

✅

`sticky`

`warning`

❌

`sticky`

`error`

✅

`sticky`

`error`

❌

`sticky`Variant

Has link?

Default Mode

info

✅

sticky

info

❌

sticky

success

✅

sticky

success

❌

dismissible

warning

✅

sticky

warning

❌

sticky

error

✅

sticky

error

❌

sticky

### Responsive

- Scales fluidly for different screen sizes.
- Text is easy to read and see, regardless of screen size.

## Related Components

