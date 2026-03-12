---
title: "Agentic Patterns"
description: "Agentic experiences are systems and interfaces that empower users to accomplish their goals with the help of autonomous AI agents. Use these patterns to create agentic experiences in Salesforce produc"
category: "pattern"
slug: "agentic-patterns"
status: "published"
lastModified: "2026-03-11"
---

![ ](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/950665cb017a9b1369a664?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6K7NON45%2F20260221%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260221T180436Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=fa89a719c2b8a454e71dc47ac58833082ba514e9747f7d41151478687ae00544)

Agentic experiences are systems and interfaces that empower users to accomplish their goals with the help of autonomous AI agents. Use these patterns to create agentic experiences in Salesforce products.

## AI-Enabled Cards

Use AI-enabled cards for evergreen AI content within a page. Cards summarize and recommend actions after users generate content, regenerate content, and sometimes automatically generate. AI cards are compact and scannable, while still allowing users to expand AI insights if needed.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*An empty agentic card*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoDo show an empty state until a user generates content.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*An agentic card with a data table and multiple actions*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*Don’tDon't display complex data on a single card.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Show an empty state until a user generates content.</td><td colspan="1" rowspan="1" colwidth="424">Don't display complex data on a single card.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Always show generated content sources.</td><td colspan="1" rowspan="1" colwidth="424">Avoid cluttering dashboards with too many AI-driven cards.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Allow for human feedback.</td><td colspan="1" rowspan="1" colwidth="424"> </td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Stack cards if more than one is needed.</td><td colspan="1" rowspan="1" colwidth="424"> </td></tr></tbody></table>

## Assistant Panels

Assistant panels are optional conversational AI dialogs that users can open to get help and close when the help is no longer needed. Assistant panels facilitate a back-and-forth conversation with predictive and proactive interactions. Users can toggle the visibility of an assistant when needed. Additionally, assistant panels can resize, float, and be pinned above content. When closed, an assistant panel isn't visible but retains its content history and previous state. The prompt composer is docked at the bottom of the assistant panel.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoDo allow panels in builders to pop out and float in order to provide optimal workspace.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*Don’tDon’t update data without human consent from the assistant panel.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Provide prompt recommendations based on context and actions.</td><td colspan="1" rowspan="1" colwidth="424">Don’t update data without human consent from the assistant panel.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Dock panels within modal dialogs.</td><td colspan="1" rowspan="1" colwidth="424">Don’t automatically open or close the panel without explicit action by the user.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Allow panels in builders to pop out and float in order to provide optimal workspace.</td><td colspan="1" rowspan="1" colwidth="424"> </td></tr></tbody></table>

## Canvases

Use plain language to ask AI for a custom view of your information. Canvases are fully interactive and customizable areas of content generated by AI. They're also multimodal, personalized, and dynamic. Central to the canvas is a bottom-centered prompt composer.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoDo display individual cards for each insight requested by the user*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoUse multiple input methods besides text, such as voice.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Display individual cards for each insight requested by the user</td><td colspan="1" rowspan="1" colwidth="424">Don’t replace existing UI elements with AI-generated components without user control</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Provide actionable insights in each generated component</td><td colspan="1" rowspan="1" colwidth="424">Don’t use text as the only allowed input method</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Use signifiers to indicate the generated components can be moved and resized</td><td colspan="1" rowspan="1" colwidth="424"> </td></tr></tbody></table>

## Disambiguation

Disambiguation provides details and further grounding to AI, which turns vague prompts into data-specific requests.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoProvide radio button groups with data-grounding options.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*Don’tDon’t make disambiguation a multi-step process.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Provide radio button groups with data-grounding options.</td><td colspan="1" rowspan="1" colwidth="424">Don’t display checkboxes or text inputs to support disambiguation.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Display an action to submit the disambiguation form.</td><td colspan="1" rowspan="1" colwidth="424">Don’t make disambiguation a multistep process.</td></tr></tbody></table>

## Feeds

Actions and prompts appear chronologically in structured feeds. AI and human responses are clearly identified using avatars. The feed history is saved with an option to clear it. Additionally, structured data is presented in cards.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoDo display feedback on each action.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*Don’tDon't fill the feed with long text and unnecessary AI responses.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Display timestamps and authorship labels for actions.</td><td colspan="1" rowspan="1" colwidth="424">Don’t create dead ends in conversations.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Display feedback on each action.</td><td colspan="1" rowspan="1" colwidth="424">Don't fill the feed with long text and unnecessary AI responses.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Allow users to refine actions.</td><td colspan="1" rowspan="1" colwidth="424"> </td></tr></tbody></table>

## Forms

### AI-Enabled Form Fields

AI can automatically generate form content and provide predictive input suggestions without disrupting manual input. Make sure that users retain control over autofill values in AI-assisted forms.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoDo indicate AI-enabled fields with a single sparkle icon.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoAlways provide modification controls. Don’t restrict inputs to only generated data without enabling manual overrides.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Indicate AI-enabled fields with a single sparkle icon next to the field label.</td><td colspan="1" rowspan="1" colwidth="424">Don’t enable AI-generated fields if it takes more steps to generate input than manually making a selection.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Allow manual overrides on AI-generated entries.</td><td colspan="1" rowspan="1" colwidth="424">Don’t restrict inputs to only generated data without enabling manual overrides.</td></tr></tbody></table>

### Form Dirty State Management

When form fields have unsaved changes, they're in a dirty state. Fields in a dirty state from AI-generated changes are visually and programmatically marked as pending until confirmed. Additionally, AI-generated changes are visually distinct from human-created changes.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoDo display change indicators for pending AI actions.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*Don’tAvoid silent AI modifications to critical business records.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Display color-coded change indicators for pending AI actions.</td><td colspan="1" rowspan="1" colwidth="424">Don't apply AI-generated changes without proper user validation.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Provide undo and confirmation options for AI-suggested modifications.</td><td colspan="1" rowspan="1" colwidth="424">Avoid silent AI modifications to critical business records.</td></tr></tbody></table>

## Human Feedback

Let users share feedback on AI responses. Simple thumbs-up and thumbs-down options are quick. Users can also add detailed feedback in a long-form text input to provide more precise training data.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoDo place the feedback interaction in a tertiary position so the action content is prioritized.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*Don’tDon’t provide a single feedback option. Always show both thumbs up and down.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Place the feedback interaction in a tertiary position so the action content is prioritized.</td><td colspan="1" rowspan="1" colwidth="424">Don’t require long-form text input.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Display confirmation after feedback is sent.</td><td colspan="1" rowspan="1" colwidth="424">Don’t provide a single feedback option. Always show both thumbs up and down.</td></tr></tbody></table>

## Prompt Composer

The prompt composer must include text input. Other input types such as voice and other media are optional. Multimodal prompt composers allow for text, voice, and other media types. Prompt composers are always displayed at the bottom center of their parent container.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoWhile AI is working, change the send button to a stop button.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*Don’tDon't add prompt input controls outside of the prompt composer.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Include a send button within the composer.</td><td colspan="1" rowspan="1" colwidth="424">Don't add prompt input controls outside the prompt composer.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">While AI is working, change the send button to a stop button.</td><td colspan="1" rowspan="1" colwidth="424">Don't move the prompt composer's expected placement.</td></tr></tbody></table>

## Onboarding & Discovery

To effectively onboard new users to an AI experience, show a welcome panel and disclaimer upon their first interaction. Use progressive disclosure to gradually introduce new AI features. Provide first-time users with guided walkthroughs and adaptive tooltips to enhance their understanding. These techniques can ease their transition into using the AI experience.

*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*DoInclude example actions for common tasks to help the user get started.*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*Don’tDon’t expect first-time users to be experts using AI.

<table style="width: 848px;"><colgroup><col style="width: 424px;"><col style="width: 424px;"></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="424">**Do's**</td><td colspan="1" rowspan="1" colwidth="424">**Don'ts**</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Include example actions for common tasks to help the user get started.</td><td colspan="1" rowspan="1" colwidth="424">Don’t expect first-time users to be experts using AI.</td></tr><tr><td colspan="1" rowspan="1" colwidth="424">Guide users with product-led onboarding.</td><td colspan="1" rowspan="1" colwidth="424">Don’t introduce new features without designing a discovery.</td></tr></tbody></table>
