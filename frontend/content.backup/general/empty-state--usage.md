---
title: "Empty State"
description: "An empty state for the Leads card."
category: "general"
slug: "empty-state--usage"
status: "published"
lastModified: "2026-03-11"
---

*An empty state for the Leads card.*

## Overview

Empty states appear when a container has no content. They transform a "dead end" into a helpful starting point by providing context, guidance, and engagement.

- **Purpose:** Explain **what** the space is for, **why** it’s empty, and **how** to fix it.
- **Tone:** Be concise and relevant. Use the state to motivate or onboard users without overwhelming them.
- **Design:** Empty states feature SVG illustrations designed specifically for the SLDS 2 default theme, Salesforce Cosmos, but work with any custom SLDS 2 theme.


**Purpose:** Explain **what** the space is for, **why** it’s empty, and **how** to fix it.

**Tone:** Be concise and relevant. Use the state to motivate or onboard users without overwhelming them.

**Design:** Empty states feature SVG illustrations designed specifically for the SLDS 2 default theme, Salesforce Cosmos, but work with any custom SLDS 2 theme.

## Usage

Empty states can reduce user confusion and frustration by clearly communicating *why* a screen is empty and suggesting *how* users can populate it. They transform a potential dead end into a helpful starting point.

### Best Practices

- Pick the illustration that most closely matches your empty state use case.
- Keep your empty state content concise and relevant.


Pick the illustration that most closely matches your empty state use case.

Keep your empty state content concise and relevant.

### When Not to Use

- Don’t use empty state as a generalized illustration component.
- Don’t add unnecessary content to the empty state component.


Don’t use empty state as a generalized illustration component.

Don’t add unnecessary content to the empty state component.

## Appearance

### Anatomy

| <img alt="" src="/uploads/Bi5Gh1oUfx83F66yhAYtuQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Illustration: **The SVG (or placeholder) that relates to the use case.** **(*Optional*) |
| --- | --- |
| <img alt="" src="/uploads/6TrujATk_F15RTvUcpAsDQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Title**: A short message that introduces the scenario. (*Optional*) |
| <img alt="" src="/uploads/Ox8SUMfxl0TuYFQFIwS7qQ.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Description**: Text that explains the current scenario and, if possible, provides guidance in a short paragraph. (*Required*) |
| <img alt="" src="/uploads/43C0hbDSst2MbiPklUvifw.png"> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> | **Button***: Actions the user can take to resolve the Empty State. *(*Optional)* |


**Illustration: **The SVG (or placeholder) that relates to the use case.** **(*Optional*)

**Title**: A short message that introduces the scenario. (*Optional*)

**Description**: Text that explains the current scenario and, if possible, provides guidance in a short paragraph. (*Required*)

**Button***: Actions the user can take to resolve the Empty State. *(*Optional)*

### Layout & Sizing

|   | **Medium** Default component size. Primarily for large containers, such as screens, tables, or large cards. |
| --- | --- |
|   | **Small**Image and font-size are reduced.Useful for small cards and panels. |
|   | **X-small** Font-size is reduced and image is not displayed. Useful for nested containers or small device sizes. |


**Medium** Default component size. Primarily for large containers, such as screens, tables, or large cards.

**Small**

Image and font-size are reduced.

Useful for small cards and panels.

**X-small** Font-size is reduced and image is not displayed. Useful for nested containers or small device sizes.

### Content

Empty state contains the following content:

- Illustration
- Title
- Description
- Button(s)


Illustration

Title

Description

Button(s)

#### Illustration

Sometimes, an empty state doesn’t need an illustration. If your illustration doesn’t clarify the situation for the user, skip it.

Empty and initial state illustrations were created based on **intent **(purpose) , **metaphor **(image that abstractly communicates the intent)**, and use case**.

Use this table to determine the most appropriate illustration based on your use case.

| **Category (Set)** | **Name (Symbol)** | **Use Case** | **Illustration** |
| --- | --- | --- | --- |
| `error` | `unrecoverable` | We don’t know what went wrong and they have a catastrophic error. Solution is to restart/try again | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `error` | `recoverable` | Something went wrong and we have enough information to point them in the right direction. | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `error` | `connectionissue` | Something broke user connection - to data source/internet. Just generally bucketed as “connection issue” | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `error` | `appconnection` | Something went wrong because of an integration issue/app connection issue | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `maintenance` | `planned` | Planned maintenance with defined start and ending times | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `maintenance` | `unplanned` | Unplanned maintenance with undefined return time | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `cart` | `noitems` | Cart is currently empty | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `noresults` | `search` | User Searches and Gets No Result, Suggestion to Reframe | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `noresults` | `filter` | User Filters information and the criteria is too strict, suggestion to change the criteria. | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `noresults` | `unknown` | We have no idea why something didn’t work when they searched/filtered for something. | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `success` | `selfassigned` | User cleared a list of tasks items that are self-assigned. | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `success` | `assigned` | User cleared a list of items that were assigned by someone else. | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `success` | `new` | There’s nothing yet, and we inform the user how to have things appear | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `accessissues` | `request` | You don't have access but can get it by asking an admin / No access to this area but we have a feature/suggestion for you to check out instead. / You don’t have access and probably never will. | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `accessissues` | `deleted` | Someone deleted something and now you don’t have access to it. | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |
| `accessissues` | `limit` | You’ve hit a limit for something and have to wait for a time period to use it again. / You have hit a limit and you need to go buy more stuff before you can use it. | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> |


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

You’ve hit a limit for something and have to wait for a time period to use it again. / You have hit a limit and you need to go buy more stuff before you can use it.

#### Button

The button provides the most logical next step a user can take. It should be specific and answer the question: *What should the user do next?*

A call to action might:

- Let the user take the action immediately (Label: *Reconnect*)
- Launch a way to fill the empty state (Label: *Create a new opportunity*)
- Start a walkthrough that teaches a feature (Label: *Try it now*)
- Open a Trailhead module in a new tab (Label: *Take the Trailhead*)
- Link to a related Help topic in a new tab (Label: *Learn about opportunities*)


Let the user take the action immediately (Label: *Reconnect*)

Launch a way to fill the empty state (Label: *Create a new opportunity*)

Start a walkthrough that teaches a feature (Label: *Try it now*)

Open a Trailhead module in a new tab (Label: *Take the Trailhead*)

Link to a related Help topic in a new tab (Label: *Learn about opportunities*)

Some situations might not need a button — there may be no clear next step.

## Related Components
