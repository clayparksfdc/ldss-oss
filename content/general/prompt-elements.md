---
title: "Prompt Elements"
slug: "prompt-elements"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/59dd9a-prompt-elements"
extractedAt: "2026-02-21T18:08:28.610Z"
---

Each element serves a specific purpose in guiding the AI, such as defining its role and task, providing background context, giving specific task instructions, or describing the desired structure of the response.

## Context Setting

Before you give the LLM your detailed instructions, first set the stage so the LLM can effectively step into the situation. The context provides the LLM with background information about your task and its high-level output, the underlying goal, the participants involved and their relationships, communication channel, and scenario. Setting the context:

- Helps the LLM understand the nuances of your request
- Powers more accurate and specific responses
- Reduces the risk of the LLM making incorrect assumptions
- Allows the LLM to leverage Salesforce-specific information effectively

Consider this formula when thinking about how the participants, situation and end goal or outcome for a task all combine.

### Key Task

Start your prompt with one clear main task. This keeps the LLM focused, avoids off-topic answers, and improves accuracy. Defining the task up front helps because it:

- **Focuses the output**.One key task acts as a filter, guiding the LLM to generate responses that directly address your objective and reducing the likelihood of irrelevant or tangential information.
-**Improves accuracy**. When the LLM understands the specific job it needs to do, it’s able to better leverage its knowledge and any provided grounding data to produce more accurate and targeted results.
- **Streamlines processing**. A singular focus helps the LLM process the subsequent instructions and data more efficiently, as it has a clear understanding of the ultimate aim.

Provides a foundation for instructions. The key task serves as the bedrock for the detailed instructions in the next section.

#### Best Practices and Examples

Best PracticesExamplesAvoid overwhelming the LLM with unnecessary information at this stage; focus solely on the primary task.State exactly what you want the LLM to do, using clear action verbs. Name the main goal, then give details later in the Instructions section. Briefly note the output format to focus the LLM (e.g., “Generate a bulleted list of…” or “Create a short summary of…”). Keep this step simple—avoid extra details until later.

#### Patterns

Key Task

These patterns set up the task and explain its purpose, helping the LLM work quickly and clearly. They pair a direct action with a reason for doing it. When describing your task, you can include elements like:

High-Level Output Description

These patterns use short noun phrases to describe the deliverable the LLM should produce. Defining the output tells the LLM the shape, content, and length of what to create

Task with Unstructured Data

For unstructured input like a call or presentation transcript, tell the LLM up front which information or topics to focus on. Being specific early helps it stay on target and produce relevant output. Give detailed handling instructions for those topics later in the prompt.

PatternsExamplesYour task is to summarize [A], [B], and [C] in [Data].Your task is to summarize the overall impressions, key strengths, and growth opportunities mentioned in a presentation.Your task is to extract information about [A], [B], and [C] from [Data].Your task is to extract information about customer impressions, call summary, and next steps from a call transcript.

### Goal or Outcome

This element explains why the task matters or how the output will be used. Sharing this context helps the LLM make better choices and go beyond simply following instructions. The goal shapes how the LLM approaches the work and adds value to the result.

- **Enhanced relevance** to help the LLM prioritize information and tailor its output towards the goal.
- **Improved quality** by including more meaningful details and responses that are framed in a way that directly contributes to the goal.
- **Strategic alignment** with broader objectives and meaningful business outcomes within Salesforce.
- **Deeper understanding** for making intelligent inferences and generating insightful responses, even when faced with ambiguity.
- **Focus on user value** that guides the LLM to generate outputs that are ultimately more valuable.

More efficient AI use as users get precise answers on the first try, minimizing the need for follow-up questions and reducing energy and water use.

#### Best Practices and Examples

#### Patterns

Goal Description

To effectively describe the end goal, use purpose clauses or infinitive phrases.

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

Consider if the LLM is acting as the sender of the message or working as an agent on behalf of a sender. Clearly defining the LLM's role promotes transparency, builds trust, and helps maintain ethical AI communication practices.

- If the LLM is assisting a sales executive, it *always* introduces itself as a virtual assistant to establish its role. **Example:** `I'm a virtual assistant for [Seller Name]`.
- If the LLM is acting independently as an automated sales representative, its introduction is different. **Example:** `I'm [AI Name], an automated AI from [Company Name]`.

Human actor information to include:

- Name, role, title
- Job description
- Third-party involvement
- Company information

You are a Sales Executive and your name is {!$Input:Sender.Name} from an organization called {!$Input:Sender.CompanyName}. Your customer is {!$Input:Recipient.Name}, who has the title or role of {!$Input:Recipient.Title}, from the company called {!$Input:Recipient.Account.Name}.

Define how participants interact with each other, such as between a sender and recipient or an LLM assisting a human. A relationship is potentially between:

- A human and another human
- A human and the LLM

You are a Digital Agent assisting a Sales Executive in reaching out to potential customers. The customer has previously connected with your Sales team through {!$Input:Recipient.LeadSource}.

#### Best Practices and Examples

#### Patterns

##### LLM Role Definition

Core Role

At Salesforce, core role definitions typically use these types of phrases:

PatternExamplesYour role is ____Your role is sales managerYou are a _____You are a sales manager.You are an AI agentYou’re a helpful assistantAs a _____As a service advisor

Avoid phrases that tell the LLM to imagine or act that it has a particular role because it invites the LLM to approach the task from a perspective of creativity or role-playing, which encourages hallucination.

Contractions often produce more casual, conversational responses.

Role sub-elementsRole definitions often include these additional sub-elements to enhance the LLM’s focus on a specific role or mindset.

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

### Scenario and Setting

Scenarios and settings include details about the environment, the overall circumstances, and importantly, the physical or digital channel where the output will be delivered and used. Providing these details influences the style, tone, and format of the LLM output. It establishes the real-world context of the interaction and helps the LLM speak the right language for the situation, including:

Style and Tone

While scenarios and key tasks are often intertwined, the scenario itself is often omitted or unclearly stated. Specifying both the task and the scenario significantly influences the output style.

For example, a response intended for a technical expert is different from one designed for a layperson. Similarly, a formal business letter differs significantly from a casual email to a friend. The scenario provides the LLM with cues about the intended audience and the desired communication style.

Accuracy

LLMs are trained on vast amounts of data, which contain conflicting information or multiple interpretations of the same concept. A scenario helps disambiguate the request by providing a specific frame of reference. This allows the LLM to select the most appropriate information and avoid generating generic or misleading responses.

Avoiding Assumptions

Without a scenario, the LLM has to make assumptions about the context. These assumptions tend to be incorrect, leading to outputs that are off-target or even nonsensical.

Token Efficiency

By leveraging the LLM's pre-training and providing a scenario, the model infers the appropriate response style, minimizing prompt length and token usage. For example, in an email task, the LLM's inherent understanding of email structure reduces the need for explicit instructions.

#### Best Practices and Examples

#### Patterns

##### Output Channel

The key task often serves as the first and most direct place to indicate the output channel, device type, or system. Use these patterns to add further essential details about that channel, reinforce it for clarity in complex prompts, or define the channel when the key task is more general.

TypesPattern ExamplesChannel[output] will be used in [channel][output] in [channel] Device Type[output] is intended for display on [device][output] will be used on [device].SystemThe [output] will populate the [field name] field in a [object] record

Triggering Event or Situation

If the task is triggered by certain conditions, tell the LLM about the specific event, user action, system status, or business condition that has led to the task. This helps with:

- **Relevance and prioritization**. LLM understands why this task is being performed now, allowing it to prioritize certain information or actions.
- **Problem framing**. For problem-solving or advisory tasks, clearly defining the trigger helps frame the problem the LLM needs to address.
- **Contextual awareness**. It provides a snapshot of the immediate circumstances, preventing generic or out-of-context responses.

TypesPattern ExamplesCondition or ContextThis task is needed because [condition]Current business context:Preceding EventTriggering event: [preceding event]Your task is to [action] because [preceding event].[preceding event], so you need to [action].You’re tasked with [action] after [preceding event].

Time Context

Specify any time-related elements of the scenario, such as urgency, deadlines, or the relevant timeframe for data or actions.

- **Urgency and detail level.** A highly urgent request requires a quicker, more concise response, while a task with a longer deadline allow for more detailed analysis.
- **Data relevance.** If the task involves data, specifying the relevant time period is crucial.
- **Timeliness.** Helps the LLM understand if the information it provides needs to be cutting-edge or if historical context is more important.

Example Pattern Variations:

TypesPattern ExamplesTime Frame...for [time frame]Real-TimeThis is a real-time response to a user query.Date-Bound...which must be no later than [date]......which can be earlier than [date]...

You want to craft a compelling warm outreach introduction email to your prospect…

You are a Sales Manager working on a deal in Sales Cloud for Customer name: {!$Input:OpportunityId.Account.Name}.

You are a CRM assistant to a sales executive and your goal is to generate an email within 100 words that shares an attached quote proposal with an existing customer and encourages them to accept and sign this quote proposal.

The output will be used in a wrap up form for call center agents.

Your customer {!$Input:Recipient.Name} didn't respond to your previous email....Create a follow-up email conveying that you are checking in to follow up on your previous email and see if the prospect has any questions or concerns about {!$Input:Product2.Name} that you can help address.

You should get customers interested in a sample of our products and special offers from this month.

