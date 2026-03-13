---
title: "Messaging UI"
description: "This section covers the parts that can make up publishers from simple text input fields to enterprise-level dynamic publishers."
category: "general"
slug: "messaging-ui--conversation-publishers"
status: "published"
lastModified: "2026-03-11"
---

This section covers the parts that can make up publishers from simple text input fields to enterprise-level dynamic publishers.

## Introduction

| In text-based messaging applications, a publisher is where users input message entries. This can include the text itself, or other more rich content, such as attachments and more. Sometimes publishers are also referred to as composers. | <h3>Start using our Design Kits</h3> [ * ](https://www.figma.com/@salesforce) <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* [Open in Figma](https://www.figma.com/@salesforce) |
| --- | --- |


### Start using our Design Kits

## Conversation Publisher Anatomy

### Considerations for Content Input

For the purposes of this guideline, we are focusing on only text-based conversation UIs. The majority of the content will be input in a text area, so there are some things to consider:

Is there a limit to the number of characters a user can send at one time? If so, this should be indicated with some sort of error messaging and/or character counter as the threshold is approached. Another thing to consider is that some channels will automatically break up content into separate conversation entries if a character limit has been reached. For example, the SMS character limit is 160. When you send an SMS Message over that limit **the message will be concatenated and split into chunks**.

If you can, try to make sure that the limitation of characters will be high enough that the majority of your users will not be impacted with it; and prefer the automatic splitting of the content into chunks vs. the character counter solution.

**ℹ️ Note:** In addition to typing with a keyboard, text may sometimes be input by voice-to-text features.

### Primary Actions

What are the primary message type actions available to users of your publisher? Examples include send, reply, reply all, forward, or an option to leave the conversation. If there is more than 1 option, consider how would they be selected. For instance, it could be buttons side by side or a button with a dropdown.

### Secondary Actions

Secondary actions might be dynamic actions, which are available is based on the channel. For instance, SMS does not allow for text formatting, but a native in-app conversation app might. Other secondary actions might include attaching files, hyperlinking, inserting knowledge articles, transferring, etc.

Depending on the expected interaction when using secondary actions, consider the consistency of the user's experience. For instance, should clicking on attachments open a modal with a file picker? Would adding pre-saved "quick text" entries work the same? Or would it utilize a popover?

### Ability to Select Which Channel to Send or Reply From

In the enterprise world, channel switching is sometimes necessary. When a user reaches out via a real-time web chat and asks for proof of their purchase, an agent might want to send it via email, so that the user can access it at any time. Rather than opening a new tab and sending the email, the agent may want to stay within the publisher and simply change the channel that the message is sent from.

### Ability to select TO and FROM

For example, sending TO Jane Smith's personal WhatsApp FROM the UK support WhatsApp instead of sending TO Jane Smith's work WhatsApp FROM Global support WhatsApp. Although this guideline does not cover the intricacies of email patterns, this sort of selection is popular when a user has multiple accounts they can send to or from.

Simple Publisher: Contains an area to text message and a primary action button (optional: can use enter key as well)

Multi-channel Dynamic Publisher: 1) Channel Switcher 2) Send TO 3) Send FROM 4) Text Entry 5) Dynamic Actions [vary based on channel] 6) Primary Action [send, reply, reply all, etc]

| * Multi-channel Dynamic Mobile Publisher <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | * Examples of Simple Mobile Publishers <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |

