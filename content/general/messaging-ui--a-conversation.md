---
title: "Messaging UI"
description: "Let's consider the actions and experiences of a particular conversation—a collection of conversation entries, or even an empty conversation."
category: "general"
slug: "messaging-ui--a-conversation"
status: "published"
lastModified: "2026-03-11"
---

![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/wiEMzHsULCWSBEtjmH8kpQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e34069dd214d6bd792d8544ab1ab19038e926f50db0bfcd22d2708f833a9a010)

## Introduction

| Let's consider the actions and experiences of a particular conversation—a **collection of conversation entries**, or even an empty conversation. | **Start using our Design Kits**  [![Link to the SLDS Figma library](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/qoRoFciQaoFyTZPaXQCl7A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6ba6d1dd030ea3029c52a6fbcfebf0b30453147f634a45f02a7f9bcd9193c4e9)](https://www.figma.com/@salesforce) [Open in Figma](https://www.figma.com/@salesforce) |
| :--- | :---: |

![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/_N9d17oojiFBEHEH1PgeWA.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=09773b265e8bee98af90ca8891c81b3ddf59707236c43461a1e452870e6e9584)

## Empty States

When a conversation is opened with no previous dialogue, what should the user see? A message (req), call to action (opt), or illustration (opt)—or should we prompt the next best action? (i.e. FB messenger asking you to "wave")

**Possible Variations of Empty States:**

* First use
* User cleared
* Errors
* No results/data

| Rule | Image | Caption | Description |
| :--- | :--- | :--- | :--- |
| Do | ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/WnunaBPwYnfflCM39Hmv2w.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3e9e564f51697a95cd9e18bd5cd5af8eb54b24dfc58fb5c0b504600b2efa2f21) |   | Empty State: DO show the user pertinent information or help. Is there a wait time to be connected with someone? Are there any options for them to choose from to be connected to the right place? |
| Don't | ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/MLiXIgETrE0jNltDgzUAjw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=872483ec49ecb200864021f77619eac5cfe73cbd079acede23256d14d8287b8d) |   | Empty State: DO NOT simply have a blank screen. At the very least something like a system message or text stating that this is the beginning of a conversation should be present. |

### Real-time Actions

The actions that happen in a conversation may differ if it is actively happening or historical. There are several actions a participant might be able to take, especially in a business setting. Many times these actions will be initiated by the publisher, though they can be launched from other places as well.

**Examples:**

* Ability to transfer
* Flag supervisor for help
* Swarm around an issue with outside participants
* Reactions (emojis, likes, star/favorite)
* Screenshare

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/5ShVSJPTPH_M8NpJMo-UBQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f9ebfb8f0d37f1497ea44718860cb8f2c29f545517d635653b065533260bb660)*Flagging for help from the publisher* | ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/wP68ocsQlSgVVrNniYxJxQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5630f6927e70e80c2e2102d75e6c990092529a4214734598f4f294828b28069b)*Initiating a transfer from the publisher* |
| :---: | :---: |
|   |   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/dYKELJzPEUWD8vO3lf3MLQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042828Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2868d7ba32d1358ccb29e7a40589a446bf6695b5db97bec420a05cab70a7d34f)*Actions being taken on a messaging entry* |   |
|   |   |

### System Messages

These are notifications about events that happen during the conversation. Example: Someone has joined, left, shared file, transfer, etc.

* Often includes timestamp and description of the event or action (see [action indicator](https://www.lightningdesignsystem.com/2e1ef8501/p/9649ad-message-entries/t/f7677a4fc5))
* Can be used to indicate a user interaction, such as selecting an option from a list picker
* Participants joining or leaving

### Message Entries

These are the individual messages sent back and forth. (Details in [Message Entries](https://www.lightningdesignsystem.com/2e1ef8501/p/9649ad).)

### Summary or Highlights

A real-time conversation might include highlights of why a customer is reaching out. Or a conversation that has already ended might include a summary of the full interaction.

### Post Conversation Actions

Similar to individual message entries, there may be different actions available to a full conversation history. Some might pose ethical concerns. Examples:

* Share conversation
* Save to library
* Export (could include a transcript, maybe audio or video files.
* Reactions (emojis, likes, star/favorite)
