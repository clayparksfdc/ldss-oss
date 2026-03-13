---
title: "Messaging UI"
slug: "messaging-ui--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/48e48d-messaging-ui/b/39ed89"
extractedAt: "2026-02-21T21:58:59.195Z"
---

Key Takeaways:

- All images (including avatars) should have alt text.
- Consider how keyboard users will be able to navigate the messaging UI
- When utilizing a highlight, use <mark> tag to differentiate highlighted text from regular text

All images (including avatars) should have alt text.

Consider how keyboard users will be able to navigate the messaging UI

When utilizing a highlight, use  tag to differentiate highlighted text from regular text

## Entering text Content

When typing a message, consider the impact keyboard commands might play for publishing.

For example: Enter vs. Ctrl+Enter for line break vs. submit, which one is used in which context? Can users toggle that interaction (like in LinkedIn messages) with something such as a checkbox?

## Screen Reader Experience

There should be a clearly documented keyboard spec of how one might navigate the different parts of a conversation using a keyboard. For example: Command/Ctrl+Enter is a common way to send a message without pressing send button

What should be proactively announced to the screen reader? When a new message comes in or when there is a new system message? Should it announce the name of the sender or just the message? It can be overwhelming when too much is announced. For example: asking which option a user wants to choose and then reading all of the options out.

If the user is active on the tab with the conversation, read it out immediately. If the user is in another tab, perhaps play a sound and read out the message or system message upon returning to the active conversation tab.

## ARIA Assertive vs. Polite—Assertive Will Interrupt Other Things Being Spoken

If a structured content message is sent out including a question with a list of options, should ALL items be read out at once? Ideally, it should let the user know what is there and let them slowly explore the details rather than saying all of the content all at once.

For instance: "A carousel with 3 options was sent". As opposed to reading out each card in the carousel automatically without pause.

You will want to establish a point of view around when to use ARIA assertive vs. polite in real-time messaging as it will impact the user experience for those using screen readers.

## Context Matters—Where is the User Currently?

If a user is in a tab with Jane Smith and actively having a conversation with her, it makes sense that their screen reader would read out the message she sent since I am actively in the tab. However, if the Salesforce user is in another tab a ping might be more ideal.

## Use of Sounds

It would be nice to allow users to configure settings for sounds. If new messages play a sound, it could get very confusing if notifications from other tabs are also making sounds.

