---
title: "Prompt Elements"
slug: "prompt-elements"
category: "ai-and-slds-2"
order: 0
---

Each element serves a specific purpose in guiding the AI, such as defining its role and task, providing background context, giving specific task instructions, or describing the desired structure of the response.

## Context Setting

Before you give the LLM your detailed instructions, first set the stage so the LLM can effectively step into the situation. The context provides the LLM with background information about your task and its high-level output, the underlying goal, the participants involved and their relationships, communication channel, and scenario. Setting the context:

- Helps the LLM understand the nuances of your request
- Powers more accurate and specific responses
- Reduces the risk of the LLM making incorrect assumptions
- Allows the LLM to leverage Salesforce-specific information effectively

Consider this formula when thinking about how the participants, situation and end goal or outcome for a task all combine.

**Role or Persona** + **Situation + Key Task + End Goal**

*As a ________ when I’m ___________ I want to __________ so I can __________.*

**Scenario 1:**Send an email

As a**Sales Development Representative, **when I’m**reaching out to a new prospect**, I want to **create a personalized introduction email** so I can **get a response and initiate a conversation**.

**Scenario 2:**Summarize

As a**Sales Manager, **when I’m**preparing for a client meeting**, I want to **summarize their recent interactions**so I can **have an informed discussion and build a stronger relationship.**

### Key Task

Start your prompt with one clear main task. This keeps the LLM focused, avoids off-topic answers, and improves accuracy. Defining the task up front helps because it:

- **Focuses the output**.One key task acts as a filter, guiding the LLM to generate responses that directly address your objective and reducing the likelihood of irrelevant or tangential information.
-**Improves accuracy**. When the LLM understands the specific job it needs to do, it’s able to better leverage its knowledge and any provided grounding data to produce more accurate and targeted results.
- **Streamlines processing**. A singular focus helps the LLM process the subsequent instructions and data more efficiently, as it has a clear understanding of the ultimate aim.

**Provides a foundation for instructions**. The key task serves as the bedrock for the detailed instructions in the next section.

#### Best Practices and Examples

Best Practices
Examples

Avoid overwhelming the LLM with unnecessary information at this stage; focus solely on the primary task.

State exactly what you want the LLM to do, using clear action verbs. Name the main goal, then give details later in the Instructions section. Briefly note the output format to focus the LLM (e.g., “Generate a bulleted list of…” or “Create a short summary of…”). Keep this step simple—avoid extra details until later.

#### Patterns

**Key Task**

These patterns set up the task and explain its purpose, helping the LLM work quickly and clearly. They pair a direct action with a reason for doing it. When describing your task, you can include elements like:

**Sub-Element**

**Function**

**Pattern Examples**

Core Action

Use a strong action verb for the task that defines the LLM's operation.

Your task is to [action verb] ...

Your objective is to [action verb]...

[imperative action verb]...

You’re tasked with [action verb]...

Output Description

Describe the expected output object and potentially reference the format.

Help the LLM organize the generated content correctly from the start.

...[output]...

...[output] in [format]...

...[format] [output]

Data Description

Include a description or location of the data or object that will be used to produce the output.

Point the LLM to the specific information, documents, or knowledge sources it must use or focus on before beginning the task.

...from [data]...

...with the provided [data] below

Task Constraints

Highlight critical constraints upfront so the LLM considers them before its generation process.

...using only [constraints]

...looking at just [constraints]

...considering only [constraints]

...limited to [constraints]

...without any [excluded content]

**High-Level Output Description**

These patterns use short noun phrases to describe the deliverable the LLM should produce. Defining the output tells the LLM the shape, content, and length of what to create

**Patterns**

**Examples**

`[article]` + `[adjective]` + `[noun]`

`[article]` + `[noun]`

`[adjective]`  + `[noun]`

a concise summary

an email

a detailed analysis

a bulleted list

sentiment classification

a draft of `[noun phrase]`

a draft of a sales proposal

a draft of a warm introduction email

`[noun phrase]` of `[content or topic]`

a list of action items

a numbered list of the top 3 opportunities

a concise summary of next steps

the classification of the condition

`[noun phrase]` of `[data description]`

a summary of a call transcript

a translation of the following text

a detailed analysis of the case below

`[noun phrase]` in `[format]`

`[noun phrase]` formatted in `[format]`

a summary in Markdown

a list of action items formatted in HTML

**Task with Unstructured Data**

For unstructured input like a call or presentation transcript, tell the LLM up front which information or topics to focus on. Being specific early helps it stay on target and produce relevant output. Give detailed handling instructions for those topics later in the prompt.

**Patterns**

**Examples**

Your task is to summarize `[A]`, `[B]`, and `[C]` in `[Data]`.

Your task is to summarize the overall impressions, key strengths, and growth opportunities mentioned in a presentation.

Your task is to extract information about `[A]`, `[B]`, and `[C]` from `[Data]`.

Your task is to extract information about customer impressions, call summary, and next steps from a call transcript.

### Goal or Outcome

This element explains why the task matters or how the output will be used. Sharing this context helps the LLM make better choices and go beyond simply following instructions. The goal shapes how the LLM approaches the work and adds value to the result.

- **Enhanced relevance** to help the LLM prioritize information and tailor its output towards the goal.
- **Improved quality** by including more meaningful details and responses that are framed in a way that directly contributes to the goal.
- **Strategic alignment** with broader objectives and meaningful business outcomes within Salesforce.
- **Deeper understanding** for making intelligent inferences and generating insightful responses, even when faced with ambiguity.
- **Focus on user value** that guides the LLM to generate outputs that are ultimately more valuable.

**More efficient AI use** as users get precise answers on the first try, minimizing the need for follow-up questions and reducing energy and water use.

#### Best Practices and Examples

Best Practices
Examples

An effective goal or outcome statement is concise and clearly conveys the essential purpose.

Focus on the impact you want the LLM's output to have. Consider:

What business problem are you trying to solve or what opportunity are you trying to leverage with this prompt?

What is the desired impact of the output, such as efficiency, productivity, customer engagement, etc.?

How will the output fit into existing Salesforce workflows? Will it update records, trigger automations, or inform user actions?

Use the [Five Whys](https://en.wikipedia.org/wiki/Five_whys) technique to dig beneath your surface level task and uncover the fundamental motivation. It’s a simple yet powerful way to understand the end goal of a task and how it affects the end user. Start with the key task and repeatedly ask why up to five times to drill down to the core goal and desired outcome.

**Task: Summarize a client's account for a meeting**/Why Question—Answer (So that...)

Why do you want to summarize a client's accounts?

*...you can quickly review their financial status.*

Why do you want to review their financial status?

*...you can identify trends or issues for discussion.*

Why do you want to identify trends and issues?

*...you can tailor recommendations to their situation.*

Why do you want to tailor recommendations?

.*..you can show you understand their business and offer relevant insights.*

Why do you want to show you understand their business?

*...you can build a stronger relationship with them.*

#### Patterns

**Goal Description**

To effectively describe the end goal, use purpose clauses or infinitive phrases.

**Pattern**

**Examples**

so that `[audience]` can `[goal or outcome]`

so `[audience]` can `[goal or outcome]`

…so that the support agent can quickly understand the issue

…so the manager has a comprehensive overview before the meeting

to `[infinitive verb phrase] `

…to identify key customer pain points

…to generate a follow-up plan

in order to `[goal or outcome]` 

…in order to prepare for the client meeting

…in order to encourage a response

for a `[goal or outcome]`

for the purpose of `[goal or outcome]`

…for a new marketing campaign

…for the purpose of escalating the case appropriately

…for the purpose of keeping attendees up to date

The output will be used to `[goal or outcome]`

The output will be used to populate the opportunity record.

The output will be used to determine the next stage.

### Participants and Relationships

LLMs work better when they know who is involved and how participants are connected. Clearly defining the participants and their relationships helps the LLM deliver context-aware responses, especially in enterprise settings, because it:

- **Establishes contextual understanding.** The LLM needs to know who it's interacting with or generating content for, such as speaking to a customer vs. an internal team member.
- **Enables role-based behavior.** By defining the LLM's own role, you guide its tone, style, and the type of information it provides.
- **Improves relevance and personalization.** Understanding participant details and company affiliations enables the LLM to generate more relevant and personalized content.
- **Provides a foundation for complex interactions.** For scenarios with several participants or intricate relationships, clearly defining these dynamics helps the LLM to navigate the complexity effectively.

Participants include the AI agent, human actors, and systems. They can all be the initiators of the output or the audience receiving and using the output.

AI agent information to include:

- Name, role, title, company
- Scope of knowledge or area of expertise
- Supported team or functions

You are a Digital Agent with expertise in international business procedures and cultural nuances. Your name, company name, and other information are provided in the AGENT_INFORMATION. And your Seller's information is provided in the SELLER_INFORMATION section.

Consider if the LLM is acting as the *sender* of the message or working as an *agent* on behalf of a sender. Clearly defining the LLM's role promotes transparency, builds trust, and helps maintain ethical AI communication practices.

- If the LLM is assisting a sales executive, it *always* introduces itself as a virtual assistant to establish its role. **Example:** `I'm a virtual assistant for [Seller Name]`.
- If the LLM is acting independently as an automated sales representative, its introduction is different. **Example:** `I'm [AI Name], an automated AI from [Company Name]`.

Human actor information to include:

- Name, role, title
- Job description
- Third-party involvement
- Company information

You are a Sales Executive and your name is `{!$Input:Sender.Name}` from an organization called `{!$Input:Sender.CompanyName}`. Your customer is `{!$Input:Recipient.Name}`, who has the title or role of `{!$Input:Recipient.Title}`, from the company called `{!$Input:Recipient.Account.Name}`.

Define how participants interact with each other, such as between a sender and recipient or an LLM assisting a human. A relationship is potentially between:

- A human and another human
- A human and the LLM

You are a Digital Agent assisting a Sales Executive in reaching out to potential customers. The customer has previously connected with your Sales team through `{!$Input:Recipient.LeadSource}`.

#### Best Practices and Examples

Best Practices
Examples

**Skip when unnecessary.** Straightforward tasks, like extracting text verbatim, may not need a role.

**Match role to task.** Avoid mismatches, like using a sales executive to write product descriptions.

**Scale role detail.** Simple tasks need minimal definition; complex tasks benefit from richer personas.

**Start simple.** Use clear titles like *financial advisor*, *data analyst*, or *customer service agent*.

**Personalize.** Pull details from CRM data with Salesforce merge syntax {!object.field}.

**Add context.** For complex tasks, use multiple sentences to set grounding details or tone.

**Clarify niche roles.** For specialized titles, briefly explain their scope and typical responsibilities.

**Stay consistent.** Use the same participant names and terms throughout the prompt.

#### Patterns

##### LLM Role Definition

**Core Role**

At Salesforce, core role definitions typically use these types of phrases:

**Pattern**

**Examples**

**Your role is ____**

Your role is sales manager

**You are a _____**

You are a sales manager.

You are an AI agent

You’re a helpful assistant

**As a _____**

As a service advisor

Avoid phrases that tell the LLM to **imagine or act**that it has a particular role because it invites the LLM to approach the task from a perspective of creativity or role-playing, which encourages hallucination.

Contractions often produce more casual, conversational responses.

**Role sub-elements**

Role definitions often include these additional sub-elements to enhance the LLM’s focus on a specific role or mindset.

**Sub-Element**

**Function**

**Pattern Examples**

**Scope**

Narrow expertise or area of focus when specialized knowledge is needed.

Provide boundaries for the agent’s expertise and the sources it relies on.

You have expertise in `[scope of knowledge]`

...with knowledge of `[scope of knowledge]`

...responsible for `[area of focus]`

...working in `[area of focus]`

**Job**

Describe key responsibilities or job functions briefly.

...to `[brief job description]`

...and your job is to `[brief job description]`

...focused on `[responsibilities]`

**Details**

Employ for prompt templates with recipients, like emails, and ground in data like name, title, and company.

...at a company called `[companyName]`...

...with an organization, `[companyName]`...

...and your name is `[name]`...

...working in `[industry]`...

You represent `[companyName]`...

**Relational Stance**

Utilize when the LLM is acting as an assistant to a human actor with a particular role or title.

...who assists a `[human role or title]`…

...assisting a `[human role or title]`...

...helping a `[human role or title]`...

You’re an assistant to a `[human role or title]`...

**Tone** 

Establish behavioral cues for tone and personality that align with the role.

...and communicates in a `[style]` manner

You are a `[behavioral trait]` `[role or title]`

You prioritize `[style]` and `[style]` communication.

##### Audience

The audience phrase specifies characteristics of the person or group of people who reads and uses the LLM output. Designating a system as the audience shifts the focus from human readability and natural language nuances to machine-parsability, precision, and strict adherence to formats.

For your audience, consider if it’s based on:

- **Role**. Examples: Sales Manager, Account Executive, Marketing Operations Specialist
- **Expertise or knowledge**. Examples: Non-technical user, novice user of our CRM, subject-matter expert in Financial Services Cloud
- **Relationship.** Examples: prospective client, long-term strategic partner, recently onboarded customer, high-value lead
- **Seniority and authority.** Examples: C-level executive, VP of Sales, team supervisor, individual contributor, key decision-makers
- **Context familiarity.** Examples: someone unfamiliar with the Project X initiative, user new to the company, representative who has not previously handled this case

- **Departmental or team.** Examples: Sales department, Customer Service team, regional sales managers, Tier 2 support agents
- **Functional groups.** Examples: All active Salesforce users, our field service technicians, system administrators
- **Organizational or general groups.** Examples: All company employees, external partners and resellers, our customer advisory board
- **Systems or applications**. Examples: Salesforce Flow, external inventory management API, our nightly ETL process, REST API endpoint

Within the context setting, the audience is usually specified using prepositional phrases.

**Patterns**

**Examples**

…to `[actor]`

…to `[adjective]` `[actor]` 

…to `[actor]` `[grounding data]`

…to new customers

…to the sales team

…to your prospect, {!$Input:Lead.FullName}

…shared with `[actor]` 

…shared with `[adjective]` `[actor]` 

…shared with your prospect

…shared with a sales manager

…shared with an existing customer

…for `[actor]` 

…for `[adjective]` `[actor]` 

…for a technical manager

…for the customer service team

…for our automated email marketing platform

…for internal review

…to be `[past participle]` by `[actor]`

…to be consumed by our analytics dashboard

…to be read by service representatives

…to be sent to a user new to the company

…for `[system]` expecting `[format]`

…for `[system]` that expects `[format]`

…for a flow expecting JSON input

…for the external API that expects a string

### Scenario and Setting

Scenarios and settings include details about the environment, the overall circumstances, and importantly, the physical or digital channel where the output will be delivered and used. Providing these details influences the style, tone, and format of the LLM output. It establishes the real-world context of the interaction and helps the LLM speak the right language for the situation, including:

**Style and Tone**

While scenarios and key tasks are often intertwined, the scenario itself is often omitted or unclearly stated. Specifying both the task and the scenario significantly influences the output style.

For example, a response intended for a technical expert is different from one designed for a layperson. Similarly, a formal business letter differs significantly from a casual email to a friend. The scenario provides the LLM with cues about the intended audience and the desired communication style.

**Accuracy**

LLMs are trained on vast amounts of data, which contain conflicting information or multiple interpretations of the same concept. A scenario helps disambiguate the request by providing a specific frame of reference. This allows the LLM to select the most appropriate information and avoid generating generic or misleading responses.

**Avoiding Assumptions**

Without a scenario, the LLM has to make assumptions about the context. These assumptions tend to be incorrect, leading to outputs that are off-target or even nonsensical.

**Token Efficiency**

By leveraging the LLM's pre-training and providing a scenario, the model infers the appropriate response style, minimizing prompt length and token usage. For example, in an email task, the LLM's inherent understanding of email structure reduces the need for explicit instructions.

#### Best Practices and Examples

Best Practices
Examples

For the scenario or setting, consider:

What is the general context surrounding the task? 

What events or circumstances have led to the need for this prompt?

Where in the user's workflow does this prompt come into play? 

What are the steps before and after the LLM interaction?

Will the output be delivered via email, a specific Salesforce field, a chat interface, a printed document, a presentation slide, etc.? 

Are there any tone expectations for this channel?

Are there any technical limitations of the delivery channel that influence format or length?

Specific scenario and setting types include:

**Interaction type.** Chat-based, voice, SMS, face-to-face

**Physical channel.** Phone, email, web chat, video call

**Situation or history.** Examples: while the user is cooking, a technician working in the field, or a sales executive working on a deal.

**Entry point.** Examples: autonomous, a user starts the call, or a user clicks a button

**Time constraints. Examples: urgency, deadlines, or limited timeframes for data or actions**

Explicitly define the medium or platform where the LLM's generated output will be displayed, consumed, or utilized. 

Knowing the output channel dictates appropriate length, formatting, and structural elements, such as greetings, sign-offs, character limits.

Different channels imply different tones that need to be used. An internal Slack message has a different expected tone than a formal customer communication or a system log entry.

If the output is for a system, it needs to be precise and machine-readable. If it’s for a human, it needs to be clear and understandable within that channel's conventions.

#### Patterns

##### Output Channel

The key task often serves as the first and most direct place to indicate the output channel, device type, or system. Use these patterns to add further essential details about that channel, reinforce it for clarity in complex prompts, or define the channel when the key task is more general.

**Types**

**Pattern Examples**

**Channel**

[output] will be used in [channel]

[output] in [channel] 

**Device Type**

[output] is intended for display on [device]

[output] will be used on [device].

**System**

The [output] will populate the [field name] field in a [object] record

**Triggering Event or Situation**

If the task is triggered by certain conditions, tell the LLM about the specific event, user action, system status, or business condition that has led to the task. This helps with:

- **Relevance and prioritization**. LLM understands why this task is being performed now, allowing it to prioritize certain information or actions.
- **Problem framing**. For problem-solving or advisory tasks, clearly defining the trigger helps frame the problem the LLM needs to address.
- **Contextual awareness**. It provides a snapshot of the immediate circumstances, preventing generic or out-of-context responses.

**Types**

**Pattern Examples**

**Condition or Context**

This task is needed because [condition]

Current business context:

**Preceding Event**

Triggering event: [preceding event]

Your task is to [action] because [preceding event].

[preceding event], so you need to [action].

You’re tasked with [action] after [preceding event].

**Time Context**

Specify any time-related elements of the scenario, such as urgency, deadlines, or the relevant timeframe for data or actions.

- **Urgency and detail level.** A highly urgent request requires a quicker, more concise response, while a task with a longer deadline allow for more detailed analysis.
- **Data relevance.** If the task involves data, specifying the relevant time period is crucial.
- **Timeliness.** Helps the LLM understand if the information it provides needs to be cutting-edge or if historical context is more important.

**Example Pattern Variations**:

**Types**

**Pattern Examples**

**Time Frame**

...for `[time frame]`

**Real-Time**

This is a real-time response to a user query.

**Date-Bound**

...which must be no later than `[date]`...

...which can be earlier than `[date]`...

You want to craft a compelling warm outreach introduction **email** to your prospect…

You are a Sales Manager working on a deal **in Sales Cloud** for Customer name: `{!$Input:OpportunityId.Account.Name}`.

You are a CRM assistant to a sales executive and your goal is to generate an **email**within 100 words that shares an attached quote proposal with an existing customer and encourages them to accept and sign this quote proposal.

The output will be used in a **wrap up form** for call center agents.

**Your customer**`**{!$Input:Recipient.Name}**`** didn't respond to your previous email.**
...
Create a follow-up email conveying that you are checking in to follow up on your previous email and see if the prospect has any questions or concerns about `{!$Input:Product2.Name}` that you can help address.

You should get customers interested in a sample of our products and special offers **from this month**.
