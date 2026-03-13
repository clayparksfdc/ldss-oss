---
title: "Textarea"
slug: "textarea"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/11f590-textarea"
extractedAt: "2026-02-21T21:54:29.680Z"
---

## Overview

When users need space for detailed input, like comments or descriptions, use textarea fields. Textarea fields are built for multi-line text input and are perfect for detailed entries or notes. They allow for flexibility in content length, and they can include a character limit if needed.

- The textarea component enables users to enter longer responses or comments.
- Resizable field with a label and optional character counter.
- Can be customized with validation and character limits.

## Usage

### Best Practices

- Use for free-form feedback, messages, or informational input.
- Use descriptive, concise field labels so users know what content is expected.
- Add supportive text to guide users when the textarea has a character count limit.
- Use where there's space for users to expand the field to make it easier to see and use.

### When Not to Use

- Don’t use for single-line text inputs—use a text input component instead.
- Avoid using textarea for precise structured input such as a phone number.
- Don’t use if the field size must remain fixed without the option to resize.

## Types

Base

The default textarea, ideal for most long text inputs.







  UUID: 0b594a4e-99e2-460b-a86c-3d033f2e8741
 -->

  

*Base textarea component type*### Base

The default textarea, ideal for most long text inputs.

Base textarea component type

## Appearance

### Anatomy

**Field label:**Describes the purpose of the text area.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Input Field:** The main area where users type and edit their text.



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Placeholder Text:**Optional text for a hint or example to guide the user to enter appropriate input. 



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Grabber**: Enables users to resize the height of the text area.Field label: Describes the purpose of the text area.

Input Field: The main area where users type and edit their text.

Placeholder Text: Optional text for a hint or example to guide the user to enter appropriate input.

Grabber: Enables users to resize the height of the text area.

### Customization Options

- Hide the field label if necessary, but replace it with an aria-label for accessibility.
- To give users a hint, add placeholder text to the field.
- Set a maximum or minimum number of characters that users can enter.
- To prevent editing the text, set the field to read-only.

### Size

- Textareas are responsive—the width adjusts automatically to fit various screens.
- Users can adjust the height by dragging the corner grabber up and down.

### Layout

- Use textarea components with the [form element](https://zeroheight.com/2e1ef8501/p/96252b) component to ensure sufficient spacing between multiple input fields.
Use textarea components with the form element component to ensure sufficient spacing between multiple input fields.

### UI Content

#### Field Labels

Labels tell users what information is needed in each field.

##### Best Practices:

- Use clear, descriptive names that make sense on their own. For example, use “Email Address” instead of just “Email.”
- Aim for concise labels—one or two words if possible.
- Use title case. Capitalize the main words, for example, “First Name,” “Phone Number.”
- Give every field a label to help screen readers identify fields correctly. If hiding labels visually, use aria-label to make the labels accessible.

#### Placeholder Content

Placeholder text provides a hint or example to guide the user on what type of input is expected.

##### Best Practices:

- Use text that shows users the expected input, for example, "Write a brief comment..." for a comment field.
- Placeholder text can't replace the label. When the user starts typing, the placeholder text disappears, which can cause confusion.
- Use placeholder text to guide, not instruct. Complex instructions belong in support text or tooltips.
- Make sure placeholder text has sufficient color contrast for readability, at least 4.5:1 for WCAG compliance.

#### Error Messages

Error messages, in the form of supporting text, alert users to an issue with their input and guide them on how to correct it.

##### Best Practices:

- Error messages clearly explain what’s wrong and how to fix it.
- Use a neutral, helpful tone—avoid blaming language.
- When possible, show error messages as soon as the user enters invalid data rather than waiting until form submission.
- Use `aria-live="assertive"` so screen readers can read error messages aloud as soon as they appear.
- Associate support text and error messages with the textarea field using `aria-describedby` so screen reader users know which field the error relates to.
Use aria-live="assertive" so screen readers can read error messages aloud as soon as they appear.

Associate support text and error messages with the textarea field using aria-describedby so screen reader users know which field the error relates to.

## Behaviors

### States

1. **Default:**The initial state before user interaction. Include placeholder content to guide users if needed, but not to replace the field label.
2.**Active/Focus:**When the input is activated, the focus indicator appears and placeholder text disappears.
3.**Disabled:**Color changes to light gray to show it’s not usable and the field doesn't receive focus.
4.**Required:**Displays a red asterisk before the label to indicate the input is required to proceed.
5.**Error:**Shows an error message when input data fails validation criteria. It’s recommended to add an error icon to your error message.

Default: The initial state before user interaction. Include placeholder content to guide users if needed, but not to replace the field label.

Active/Focus: When the input is activated, the focus indicator appears and placeholder text disappears.

Disabled: Color changes to light gray to show it’s not usable and the field doesn't receive focus.

Required: Displays a red asterisk before the label to indicate the input is required to proceed.

Error: Shows an error message when input data fails validation criteria. It’s recommended to add an error icon to your error message.

Hover vs. Focus: When you hover your mouse over an interactive element, it triggers a hover state. This is a visual clue that you're hovering over the element. Similarly, when you use a keyboard or voice to select an element, it triggers a focused state. This is a visual clue that the element is selected.

### Interactions

Click: Focuses the input field and activates typing mode.

Tab: Navigates to the input field.

Resizing: Allows users to resize the input box.

### Scrolling

When the component's height is fixed, a scrollbar appears. Users can scroll to view any text that's been hidden.

### Default Selection

No pre-selected content is typically used in the textarea component, except for placeholder text, which guides user input.

### Validation

Validation in textarea is in two categories:

1.**Required field:** Users must provide input to the field before submitting a form.
2. **Character limits:**Users must enter content that meets a minimum or maximum number of characters, or is between minimum and maximum character limits.
Required field: Users must provide input to the field before submitting a form.

Character limits: Users must enter content that meets a minimum or maximum number of characters, or is between minimum and maximum character limits.

#### Validation Feedback

- Error messages tell users exactly what’s wrong and how to fix it.

## Related Components

