---
title: "Messaging UI"
description: "Let's consider the actions and experiences of a particular conversation—a collection of conversation entries, or even an empty conversation."
category: "general"
slug: "messaging-ui--a-conversation"
status: "published"
lastModified: "2026-03-11"
---

## Introduction

| Let's consider the actions and experiences of a particular conversation—a **collection of conversation entries**, or even an empty conversation. | <h3>Start using our Design Kits</h3> [ * ](https://www.figma.com/@salesforce) <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* [Open in Figma](https://www.figma.com/@salesforce) |
| --- | --- |


### Start using our Design Kits

## Empty States

When a conversation is opened with no previous dialogue, what should the user see? A message (req), call to action (opt), or illustration (opt)—or should we prompt the next best action? (i.e. FB messenger asking you to "wave")

**Possible Variations of Empty States:**

- First use
- User cleared
- Errors
- No results/data


### Real-time Actions

The actions that happen in a conversation may differ if it is actively happening or historical. There are several actions a participant might be able to take, especially in a business setting. Many times these actions will be initiated by the publisher, though they can be launched from other places as well.

**Examples:**

- Ability to transfer
- Flag supervisor for help
- Swarm around an issue with outside participants
- Reactions (emojis, likes, star/favorite)
- Screenshare


| * Flagging for help from the publisher <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | * Initiating a transfer from the publisher <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |
|   |   |
| * Actions being taken on a messaging entry <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |   |
|   |   |


### System Messages

These are notifications about events that happen during the conversation. Example: Someone has joined, left, shared file, transfer, etc.

- Often includes timestamp and description of the event or action (see [action indicator](https://www.lightningdesignsystem.com/2e1ef8501/p/9649ad-message-entries/t/f7677a4fc5))
- Can be used to indicate a user interaction, such as selecting an option from a list picker
- Participants joining or leaving


### Message Entries

These are the individual messages sent back and forth. (Details in [Message Entries](https://www.lightningdesignsystem.com/2e1ef8501/p/9649ad).)

### Summary or Highlights

A real-time conversation might include highlights of why a customer is reaching out. Or a conversation that has already ended might include a summary of the full interaction.

### Post Conversation Actions

Similar to individual message entries, there may be different actions available to a full conversation history. Some might pose ethical concerns. Examples:

- Share conversation
- Save to library
- Export (could include a transcript, maybe audio or video files.
- Reactions (emojis, likes, star/favorite)

