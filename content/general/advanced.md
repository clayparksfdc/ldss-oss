---
title: "Prompting Techniques"
slug: "advanced"
category: "general"
order: 0
---

## Advanced Techniques

These methods leverage more sophisticated strategies, often involving external information or iterative model interactions, to achieve complex goals.

### Retrieval-Augmented Generation (RAG)

Retrieval-Augmented Generation (RAG) is like giving the LLM a librarian on-call. It's an advanced technique that lets the LLM pull information from external sources, like databases, documents, or knowledge hubs. This knowledge can make its answers way more accurate and relevant to the context. Instead of just relying on what it already knows from its training, the LLM grabs the latest or most specific information it needs to complete the task.

- Cuts down on hallucinations or inaccurate information
- Always up-to-date
- Pulls relevant details and context
- Knows the specifics for targeted responses
- Avoids retraining, an environmentally impactful process

### Generated Knowledge Prompting

Generated knowledge prompting is a technique where you encourage the LLM to first come up with relevant knowledge or information *before* it tackles the task. It's like prompting it to think about what it needs to know to solve the problem, even if you didn't give it that information directly. The goal here is to help the LLM reason better and give more accurate answers by having it explicitly retrieve helpful information from its training data first.

- More accurate and fact-based answers
- Better reasoning and problem-solving
- Relevant background for understanding nuances of the task
- Can work even with less detailed prompts
- Good for open-ended questions

### Prompt Chaining

Prompt Chaining is an advanced technique where you take a complex task and break it down into a sequence of smaller, more focused sub-tasks. Then, you create a chain of prompts where the answer from one prompt becomes the starting point for the next one. It's like leading the LLM step-by-step, using its specific strengths at each stage to achieve a bigger, more intricate goal.

- Tackles the really tough tasks
- Gives you more control
- Makes things organized
- Efficiently uses different strengths for specific parts of a task
- Lets you add external tools or APIs

#### Examples


| **Prompt Chain** | **Prompt** | **Instructions** | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| **Generating a Sales Proposal** | Prompt 1   Identify Customer Needs | Analyze the following customer interaction and identify their key needs and pain points. | [Interaction Data] | [Needs and Pain Points] |
| Prompt 2   Generate Solution Overview | Based on the identified needs and pain points, generate a brief overview of how our Salesforce solution can address them. | [Needs and Pain Points]   (from Prompt 1) | [Solution Overview] |  |
| Prompt 3  Create Detailed Proposal | Using the solution overview, create a detailed sales proposal, including specific features, benefits, and pricing. | [Solution Overview]   (from Prompt 2) | [Sales Proposal] |  |
| **Automating Case Classification and Routing** | Prompt 1   Extract Case Details | Extract the relevant information from the following customer case description. Include the product, issue type, and severity level. | [Case Description] | [Extracted Details] |
| Prompt 2   Classify Case | Based on the extracted case details, classify the case into one of the following categories. | [Extracted Details]   (from Prompt 1) | [Case Category] |  |
| Prompt 3   Determine Routing Rule | Based on the case category, determine the appropriate routing rule. | [Case Category]   (from Prompt 2) | [Routing Rule] |  |

**Prompt Chain**

**Prompt**

**Instructions**

**Input**

**Output**

**Generating a Sales Proposal**

Prompt 1

Identify Customer Needs

Analyze the following customer interaction and identify their key needs and pain points.

[Interaction Data]

[Needs and Pain Points]

Prompt 2

Generate Solution Overview

Based on the identified needs and pain points, generate a brief overview of how our Salesforce solution can address them.

[Needs and Pain Points]

(from Prompt 1)

[Solution Overview]

Prompt 3

Create Detailed Proposal

Using the solution overview, create a detailed sales proposal, including specific features, benefits, and pricing.

[Solution Overview]

(from Prompt 2)

[Sales Proposal]

**Automating Case Classification and Routing**

Prompt 1

Extract Case Details

Extract the relevant information from the following customer case description. Include the product, issue type, and severity level.

[Case Description]

[Extracted Details]

Prompt 2

Classify Case

Based on the extracted case details, classify the case into one of the following categories.

[Extracted Details]

(from Prompt 1)

[Case Category]

Prompt 3

Determine Routing Rule

Based on the case category, determine the appropriate routing rule.

[Case Category]

(from Prompt 2)

[Routing Rule]

### Meta-Prompting

Meta-prompting is an advanced technique where you prompt the LLM to actually generate or refine *other* prompts. Think of it as using the LLM as your personal prompt engineer. Instead of carefully crafting the perfect prompt, you instruct the LLM to do that work for you. You tell the LLM to analyze a task, figure out what's needed, and then create an optimized prompt for that task. The prompt that the LLM creates is usually then used in a separate step.

- Adapts to tricky tasks
- Leads to better prompts
- Helps with different situations

#### Examples


| **Prompt Title** | **Meta-Prompt** | **Generated Prompt** |
| --- | --- | --- |
| Case Classification | Generate a prompt to classify customer support cases based on their description. The 3 case categories are Reporting Issues, Login Issues, and Other. The prompt should include clear instructions and examples of case descriptions with their corresponding categories. It should be optimized for accuracy and avoid any ambiguity. | Classify the following customer support case description into one of the following categories: Reporting Issues, Login Issues, Other.  Example 1:   Case Description: “I am having trouble logging into Service Cloud."   Category: Login Issues  Example 2:   Case Description: “My reports are not displaying the correct data."   Category: Reporting Issues  Case Description:  [Case Description]   Category: |
| Opportunity Summarization | Generate a concise prompt template to summarize opportunity records within 100 words. Key fields: Account Name, Close Date, Amount. Target audience: sales manager. Include the value and urgency or timeline. | As a sales analyst, generate a summary of the following opportunity record for a sales manager.   Your summary must be under 100 words. Focus on the key fields:   - Account Name  - Close Date  - Amount  The summary should state the deal's value and comment on its urgency or timeline.   Opportunity Record:   [Opportunity Record Data] |

**Prompt Title**

**Meta-Prompt**

**Generated Prompt**

Case Classification

Generate a prompt to classify customer support cases based on their description. The 3 case categories are Reporting Issues, Login Issues, and Other. The prompt should include clear instructions and examples of case descriptions with their corresponding categories. It should be optimized for accuracy and avoid any ambiguity.

Classify the following customer support case description into one of the following categories: Reporting Issues, Login Issues, Other.

Example 1:

Case Description: “I am having trouble logging into Service Cloud."

Category: Login Issues

Example 2:

Case Description: “My reports are not displaying the correct data."

Category: Reporting Issues

Case Description:  [Case Description]

Category:

Opportunity Summarization

Generate a concise prompt template to summarize opportunity records within 100 words. Key fields: Account Name, Close Date, Amount. Target audience: sales manager. Include the value and urgency or timeline.

As a sales analyst, generate a summary of the following opportunity record for a sales manager.

Your summary must be under 100 words. Focus on the key fields:

- Account Name
- Close Date
- Amount
The summary should state the deal's value and comment on its urgency or timeline.

Opportunity Record:

[Opportunity Record Data]

### Tree of Thoughts (ToT)

Tree of thoughts (ToT) is an advanced reasoning technique that takes the idea of chain-of-thought and expands it. Instead of just one linear sequence of thought, ToT encourages the LLM to explore multiple potential reasoning paths at the same time. It creates a tree-like structure where different possibilities are considered, evaluated for their promise, and then either pursued further or discarded. Think of it like how a support agent considers various troubleshooting steps before landing on the best solution.

- Solves tricky problems
- Better at exploring ideas
- More flexible problem-solving
- Handles ambiguity more effectively

### ReAct

Reasoning and Acting (ReAct) takes things a step further by allowing the LLM to generate reasoning steps and to take actual actions in the real world. It's like giving the LLM both a brain to think and hands to interact with external tools or systems.

The key here is that reasoning and acting happen together. This means the LLM can think about what it needs to do, take an action to gather information, see the result, and then adjust its thinking and future actions based on what it learned. This leads to much more effective problem-solving and task completion.

- Truly interactive
- Grounded in actions in reality
- Adapts as it goes
- More effective problem-solving