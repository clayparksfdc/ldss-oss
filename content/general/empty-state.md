---
title: "Empty State"
slug: "empty-state"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/09f001-empty-state"
extractedAt: "2026-02-21T21:48:59.158Z"
---

An empty state for the Leads card.

## Overview

Empty states appear when a container has no content. They transform a "dead end" into a helpful starting point by providing context, guidance, and engagement.

- **Purpose:** Explain **what** the space is for, **why** it’s empty, and **how** to fix it.
- **Tone:** Be concise and relevant. Use the state to motivate or onboard users without overwhelming them.
- **Design:** Empty states feature SVG illustrations designed specifically for the SLDS 2 default theme, Salesforce Cosmos, but work with any custom SLDS 2 theme.

## Usage

Empty states can reduce user confusion and frustration by clearly communicating why a screen is empty and suggesting how users can populate it. They transform a potential dead end into a helpful starting point.

### Best Practices

- Pick the illustration that most closely matches your empty state use case.
- Keep your empty state content concise and relevant.

### When Not to Use

- Don’t use empty state as a generalized illustration component.
- Don’t add unnecessary content to the empty state component.

## Appearance

### Anatomy

**Illustration:**The SVG (or placeholder) that relates to the use case.(*Optional*)



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Title**: A short message that introduces the scenario. (*Optional*)



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Description**: Text that explains the current scenario and, if possible, provides guidance in a short paragraph. (*Required*)



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Button***: Actions the user can take to resolve the Empty State. *(*Optional)*Illustration: The SVG (or placeholder) that relates to the use case. (Optional)

Title: A short message that introduces the scenario. (Optional)

Description: Text that explains the current scenario and, if possible, provides guidance in a short paragraph. (Required)

Button: Actions the user can take to resolve the Empty State. (Optional)

### Layout & Sizing

UUID: 887ebfed-63a8-400f-a504-d2a9d4659f9c
 -->

  



**Medium**Default component size. Primarily for large containers, such as screens, tables, or large cards.







  UUID: 0c8423f3-9ab1-4b76-b600-81b7e7240e5f
 -->

  



**Small**

Image and font-size are reduced.

Useful for small cards and panels.







  UUID: 24bd83d1-7a73-46f5-9b6d-a4cc9cf25529
 -->

  



**X-small**Font-size is reduced and image is not displayed. Useful for nested containers or small device sizes.MediumDefault component size. Primarily for large containers, such as screens, tables, or large cards.

Small

Image and font-size are reduced.

Useful for small cards and panels.

X-smallFont-size is reduced and image is not displayed. Useful for nested containers or small device sizes.

### Content

Empty state contains the following content:

- Illustration
- Title
- Description
- Button(s)

#### Illustration

Sometimes, an empty state doesn’t need an illustration. If your illustration doesn’t clarify the situation for the user, skip it.

Empty and initial state illustrations were created based on intent (purpose) , metaphor (image that abstractly communicates the intent), and use case.

Use this table to determine the most appropriate illustration based on your use case.

**Category (Set)**

**Name (Symbol)**

**Use Case**

**Illustration**

`error`

`unrecoverable`

We don’t know what went wrong and they have a catastrophic error. Solution is to restart/try again



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`error`

`recoverable`

Something went wrong and we have enough information to point them in the right direction.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`error`

`connectionissue`

Something broke user connection - to data source/internet. Just generally bucketed as “connection issue”



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`error`

`appconnection`

Something went wrong because of an integration issue/app connection issue



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`maintenance`

`planned`

Planned maintenance with defined start and ending times



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`maintenance`

`unplanned`

Unplanned maintenance with undefined return time



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`cart`

`noitems`

Cart is currently empty



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`noresults`

`search`

User Searches and Gets No Result, Suggestion to Reframe



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`noresults`

`filter`

User Filters information and the criteria is too strict, suggestion to change the criteria.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`noresults`

`unknown`

We have no idea why something didn’t work when they searched/filtered for something.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`success`

`selfassigned`

User cleared a list of tasks items that are self-assigned.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`success`

`assigned`

User cleared a list of items that were assigned by someone else.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`success`

`new`

There’s nothing yet, and we inform the user how to have things appear



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`accessissues`

`request`

You don't have access but can get it by asking an admin / No access to this area but we have a feature/suggestion for you to check out instead. / You don’t have access and probably never will.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`accessissues`

`deleted`

Someone deleted something and now you don’t have access to it.



  

  
    
      
        
      
      
        
      
      
    
    
  








  
    
    
    
  



`accessissues`

`limit`

You’ve hit a limit for something and have to wait for a time period to use it again. / You have hit a limit and you need to go buy more stuff before you can use it.Category (Set)

Name (Symbol)

Use Case

Illustration

error

unrecoverable

We don’t know what went wrong and they have a catastrophic error. Solution is to restart/try again

error

recoverable

Something went wrong and we have enough information to point them in the right direction.

error

connectionissue

Something broke user connection - to data source/internet. Just generally bucketed as “connection issue”

error

appconnection

Something went wrong because of an integration issue/app connection issue

maintenance

planned

Planned maintenance with defined start and ending times

maintenance

unplanned

Unplanned maintenance with undefined return time

cart

noitems

Cart is currently empty

noresults

search

User Searches and Gets No Result, Suggestion to Reframe

noresults

filter

User Filters information and the criteria is too strict, suggestion to change the criteria.

noresults

unknown

We have no idea why something didn’t work when they searched/filtered for something.

success

selfassigned

User cleared a list of tasks items that are self-assigned.

success

assigned

User cleared a list of items that were assigned by someone else.

success

new

There’s nothing yet, and we inform the user how to have things appear

accessissues

request

You don't have access but can get it by asking an admin / No access to this area but we have a feature/suggestion for you to check out instead. / You don’t have access and probably never will.

accessissues

deleted

Someone deleted something and now you don’t have access to it.

accessissues

limit

You’ve hit a limit for something and have to wait for a time period to use it again. / You have hit a limit and you need to go buy more stuff before you can use it.

#### Button

The button provides the most logical next step a user can take. It should be specific and answer the question: What should the user do next?

A call to action might:

- Let the user take the action immediately (Label: *Reconnect*)
- Launch a way to fill the empty state (Label: *Create a new opportunity*)
- Start a walkthrough that teaches a feature (Label: *Try it now*)
- Open a Trailhead module in a new tab (Label: *Take the Trailhead*)
- Link to a related Help topic in a new tab (Label: *Learn about opportunities*)
Some situations might not need a button — there may be no clear next step.

## Related Components

