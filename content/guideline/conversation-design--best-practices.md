---
title: "Conversation Design"
slug: "conversation-design--best-practices"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/33c7b6-conversation-design-/b/47cfa8"
extractedAt: "2026-02-21T21:36:40.650Z"
---

Think about best practices when designing a conversational experience that will be natural and helpful for users.

## Bot Introduction

Be transparent

The first thing a bot should do is warmly introduce itself to the user and let them know that it's a bot. Starting the conversation with this disclosure establishes trust with the user and sets the proper expectations from the beginning.

Note that informing the user that they're speaking with a bot is a requirement outlined in the Salesforce Acceptable Use and External-Facing Services Policy.

### Be helpful

State what your bot can help with, and use menus and guiding questions to direct the user.

### Name your bot

Giving your bot a name is a great way to personalize it, but as far as possible avoid using human names such as Erika or Ada to make it clear that the bot is non-human. The exception to this is if a human name is required for consistency of branding, voice and tone, or personality - in this instance the human name should be accompanied by further clarification.

To optimize for scalability, bot names should be general, and not restricted to any one channel. It's preferable to avoid the word "chat" in the name to minimize channel-specificity. Using the word "bot" in the name is acceptable because it can refer to any channel: a voicebot, a Slackbot, an SMS-bot, or a chatbot.

Bot names and introductions should avoid any terms that sound too much like a human job/position. It's also advisable to avoid references that may seem human in your bot loading language, for example Agent Offline or Live Chat.

### Bot Avatar

Use a product logo or robot graphic for the bot avatar to keep things transparent–not a picture of a person.

### Greetings

New Users

Image Description

Returning Users

If your customer wants to start the conversation over (to perform another task), the welcome should be skipped and the dialog picked to start over should make sense on its own.

Image Description

## Main Menu

Always separate the Main Menu options from the Greetings in the Welcome dialog. This ensures that any users returning to the main menu from elsewhere in a bot conversation don't hear the Welcome greetings repeated.

## Acknowledgments

- Close the loop. If the bot asks a customer to do something in the chat and they respond, acknowledge that their input was received.
- Switch up acknowledgments to avoid being overly repetitive.
- Give the user a path to move forward if the bot can no longer help. Provide a means for creating a case, contacting a human, or engaging through another channel.
Image Description

## Apologies

The bot copy should be goal-oriented, so apologizing will distract. It also takes on culpability that we legally should not. Instead of apologizing, use terms such as: “unfortunately”, “so”, “well”, “it seems”, “it turns out”.

Image Description

### Bot Response Delays

The bot should leave a long enough pause between messages to allow the user time to read and process what it has said. Slowing down the bot responses makes the conversational turn-taking more natural and gives more cadence to the conversation.

A poor bot experience sends 4-5 messages at once with no time in between. The user then has to scroll up to read and catch up. A good bot experience uses a bot response delay and ellipses to give the user time to read each utterance.

The Einstein Bot Builder incorporates this feature in the bot Overview page, with the default bot response delay set to 1.2 seconds. We recommend extending this if your bot conveys several large chunks of information.

### Menu Options

If you’re asking the customer to do something–such as perform an action or select a menu option–ideally start it with a verb. This encourages the customer to take that action. (Nouns can however be used for topic menus, such as in Knowledge Search.)

- We recommend presenting no more than 4 actions/menu options at once. This is best practice in terms of cognitive load and what is likely to fit on a phone screen.
- If you have many actions that need to be grouped, you can ask a question to guide the customer before delivering actions. For example, you may have two different experiences for users who are chatting with a bot about health-related reasons and non-health related reasons. Instead of the bot asking “OK, what would you like to learn about?” and showing all the menu items at once, the bot can ask “Before we get started, may I ask, are you chatting with me for a health-related reason?” and then show menu items based on their answer.
- Aim to use unique verbs for different menu options to optimize recognition.

### Conversation Repair

It's inevitable that your bot will occasionally encounter difficulties, such as misunderstanding a user's intent, or not understanding their utterance at all. The key is to design for these types of situations and teach your bot how to move forward by building error handling into your dialogs.

- Ask follow-up questions, expand on what users say, give bots options for rephrasing.
- Ensure each message flows into the next. If your bot utilizes NLP, this can be especially tough because the conversation can jump anywhere. Try different combinations to make sure your conversational flow makes sense.
- Your conversation repair messages should be designed to handle the most common failures and provide a graceful next action.
- Test your bot and make sure that it is conversationally prepared to handle most situations.