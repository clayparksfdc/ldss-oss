---
title: "Avatar"
slug: "avatar"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/94085e-avatar"
extractedAt: "2026-02-21T21:43:47.438Z"
---

## Overview

- Avatars represent people, companies, or entities using an icon, image, or initials within a container.
- Avatars are common across Salesforce applications, used in user profiles, contact lists, messaging interfaces, and other places where an image or icon is needed. They give users a visual cue to easily identify individuals or groups.

## Usage

### Best Practices

- Select the right avatar size to help maintain visual hierarchy and usability in your interface. Use a size that's appropriate to the context, so the avatars don't overwhelm your layout or appear too small.
- Identify how best to represent an individual, company, or entity as an avatar.

### When Not to Use

- Don't use avatars if they don’t add meaningful information, such as in lists with limited space or where textual identification alone is sufficient.
- Too many avatars in data-heavy components such as data tables or reports can distract from important information and make it harder to read.
- Don't use avatars to represent non-personal, non-entity content, as this can confuse users.

## Types

Avatar types vary by use case and application. Typically, they fall into one of two categories: representing a person or entity. Within these categories, fallback variants are available as icons or initials.

Profile

A profile avatar is often used as a default avatar until a user replaces it.







  UUID: c44a52fc-0cc4-40b5-bb60-8a61a0e155e8
 -->

  

*Profile avatar*





Group Avatar

A group avatar is ideal for team or group settings, like collaborative spaces, where multiple people are represented together.







  UUID: 087400e7-b784-42cc-889d-d4ac0a246bc9
 -->

  

*Group avatar*





User Image

The user image avatar is an illustration of an individual that replaces the default profile image provided by Salesforce.









  UUID: cf7d1e2f-e949-4f1c-a01a-d09528e3b0cc
 -->

  

*Basic avatar*





Fallback User Icon

When a user image path is invalid, the fallback user icon becomes the default.





  UUID: f08cb8b0-7e15-4cbd-9435-086c4f1ae488
 -->

  

*Fallback user icon*





Fallback Entity Icon

When an image path for an entity is invalid, the fallback entity icon becomes the default.





  UUID: 73b52120-7f80-40bd-b1f3-cb3706dc0d8f
 -->

  

*Custom icon avatar for entity*





Fallback User Initials

If an image is unavailable, up to two letters can be used instead. For individuals, when the record name contains two words such as first and last name, use the first capitalized letter of each.





  UUID: c89019c9-15ca-4b64-a411-8b64d0142051
 -->

  

*Fallback user initials*





Fallback Entity Initials

If an image is unavailable, up to two letters can be used instead. For entities, when the record name is a single word, use the first two letters of that word using one capital and one lowercase letter.





  UUID: 074b09d9-8291-4c9f-b489-d135f1091fe4
 -->

  

*Fallback entity initials*





Custom Icon

The user image avatar is an image of an individual that replaces the default profile image provided by Salesforce.





  UUID: e7628a9d-76c4-4eb0-848c-19938bcb0677
 -->

  

*Custom icon avatar *### Profile

A profile avatar is often used as a default avatar until a user replaces it.

Profile avatar

### Group Avatar

A group avatar is ideal for team or group settings, like collaborative spaces, where multiple people are represented together.

Group avatar

### User Image

The user image avatar is an illustration of an individual that replaces the default profile image provided by Salesforce.

Basic avatar

### Fallback User Icon

When a user image path is invalid, the fallback user icon becomes the default.

Fallback user icon

### Fallback Entity Icon

When an image path for an entity is invalid, the fallback entity icon becomes the default.

Custom icon avatar for entity

### Fallback User Initials

If an image is unavailable, up to two letters can be used instead. For individuals, when the record name contains two words such as first and last name, use the first capitalized letter of each.

Fallback user initials

### Fallback Entity Initials

If an image is unavailable, up to two letters can be used instead. For entities, when the record name is a single word, use the first two letters of that word using one capital and one lowercase letter.

Fallback entity initials

### Custom Icon

The user image avatar is an image of an individual that replaces the default profile image provided by Salesforce.

Custom icon avatar

## Appearance

An avatar’s anatomy consists of a container containing an icon, a set of initials, or an image.

### Anatomy

**Container**



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Icon**



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Initials**



  

  
    
      
        
      
      
      
    
    
  








  
    
    
    
  

**Image**Container

Icon

Initials

Image

### Customization Options

Although SLDS provides several categories of icons, avatars can only use object icons from the standard and custom categories. Background colors on the Icon variant can be customized using Salesforce’s color palettes.

### Size

Avatars are available in four sizes.

**Extra Small**20x20 pixels

**Small**24x24 pixels

**Medium**32x32 pixels

**Large**48x48 pixelsExtra Small20x20 pixels

Small24x24 pixels

Medium32x32 pixels

Large48x48 pixels

## Behaviors

### Interactions

Interactive avatars are wrapped in a button container so they highlight when you hover over them. By default, clicking an avatar opens a popover with more details about the individual or entity. Sometimes, a text link is added to the avatar to help users identify related records, such as an owner, account, or other key elements in Salesforce.

Avatars can also be used as an image link, allowing users to navigate to other product areas.

### Position

Avatars representing a logged-in user are found in the upper right corner of the global header in Salesforce. Other common areas are contact cards, simple data tables, and messaging-type components where users can communicate.

Ensure sufficient space around the avatar to avoid crowding and help it stand out, typically with a margin of 4-8 pixels. For extra-small linked avatars (20px by 20px), ensure the clickable area is at least 24px to improve accessibility and usability.

## Related Components

