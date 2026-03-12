---
title: "Messaging UI"
slug: "messaging-ui--a-conversation"
category: "pattern"
parent: "messaging-ui"
order: 0
---

## Introduction


| Let's consider the actions and experiences of a particular conversation—a **collection of conversation entries**, or even an empty conversation. | Start using our Design Kits                          [           *         ](https://www.figma.com/@salesforce)                       *  *           *   [Open in Figma](https://www.figma.com/@salesforce) |
| --- | --- |

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


| *                     Flagging for help from the publisher           *  | *                     Initiating a transfer from the publisher           *  |
| --- | --- |
|  |  |
| *                     Actions being taken on a messaging entry           *  |  |
|  |  |

### System Messages

These are notifications about events that happen during the conversation. Example: Someone has joined, left, shared file, transfer, etc.

- Often includes timestamp and description of the event or action (see [action indicator](/pattern/messaging-ui--a-conversation))
- Can be used to indicate a user interaction, such as selecting an option from a list picker
- Participants joining or leaving

### Message Entries

These are the individual messages sent back and forth. (Details in [Message Entries](/pattern/messaging-ui--message-entries).)

### Summary or Highlights

A real-time conversation might include highlights of why a customer is reaching out. Or a conversation that has already ended might include a summary of the full interaction.

### Post Conversation Actions

Similar to individual message entries, there may be different actions available to a full conversation history. Some might pose ethical concerns. Examples:

- Share conversation
- Save to library
- Export (could include a transcript, maybe audio or video files.
- Reactions (emojis, likes, star/favorite)
