---
title: "Messaging UI"
description: "Implementing the right approach to your messaging UI styling can make the difference between simply enabling users to \"get the job done\" and providing an outstanding experience that reduces the time n"
category: "general"
slug: "messaging-ui--messaging-ui-styling"
status: "published"
lastModified: "2026-03-11"
---

## Introduction

| Implementing the right approach to your messaging UI styling can make the difference between simply enabling users to "get the job done" and providing an outstanding experience that reduces the time needed to do the job and increases user and company satisfaction.**When considering which transcript UI style to go within, keep in mind that as a platform, we support many channels, all of which have unique ways of handling things. <strong>One of Salesforce's value propositions is standardization across channels.****That means that if a user is able to interact with transcripts from multiple different channels (voice calls, social messages, support chats, emails, etc), <strong>there should be a level of consistency**. Simply utilizing the customer-facing UI for every individual channel creates inconsistent experiences, context switching and can hinder our users' ability to do their job efficiently. | <h3>Start using our Design Kits</h3> [ * ](https://www.figma.com/@salesforce) <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* [Open in Figma](https://www.figma.com/@salesforce) |
| --- | --- |


Implementing the right approach to your messaging UI styling can make the difference between simply enabling users to "get the job done" and providing an outstanding experience that reduces the time needed to do the job and increases user and company satisfaction.

When considering which transcript UI style to go within, keep in mind that as a platform, we support many channels, all of which have unique ways of handling things.

**One of Salesforce's value propositions is standardization across channels.**

That means that if a user is able to interact with transcripts from multiple different channels (voice calls, social messages, support chats, emails, etc), **there should be a level of consistency**. Simply utilizing the customer-facing UI for every individual channel creates inconsistent experiences, context switching and can hinder our users' ability to do their job efficiently.

### Start using our Design Kits

[Open in Figma](https://www.figma.com/@salesforce)

## Styling Options

### Threaded UI

In general, threaded/line-item style UI is ideal for longer-term conversations. The thread-centric design creates an opportunity to efficiently collaborate asynchronously.

For example: Slack and email use threading to group together a conversation around a particular subject.

As an enterprise platform, our customers have more complex jobs to be done around a conversation. This can involve additional participants being added to collaborate asynchronously, managers providing feedback on the way a conversation was handled, searching and filtering across all conversations to find trends, and more. Due to the nature of the Salesforce platform, utilizing a threaded UI for conversational messaging can provide a solid foundation for enabling these jobs.

| * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | * <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |
|   |   |


### Chat Bubble

Most short-term, casual, and social interactions are displayed using a chat bubble. That makes this pattern great for peer-to-peer applications.

Think of text messages and Social Media direct messages. While there are newer patterns in the industry around "replying to" a previous message within a chat bubble, it is not ideal for more elaborate collaboration. Often, the conversation flow is interrupted and a duplication of a previous message is displayed in order to provide context for the user when "replying to" another message. In short, a chat bubble is not ideal for conversations that might require collaboration.

Chat bubbles can be a great solution for a customer app, while a threaded UI is better suited to handle conversations on the Salesforce user side.

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* |
| --- | --- |


Utilizing a chat bubble for longer message entries and on wider displays can cause issues with scalability. Users' eyes will be straining to constantly alternate sides and make their way down the conversation.
