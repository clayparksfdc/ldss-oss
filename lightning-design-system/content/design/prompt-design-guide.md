---
title: "Prompt Design Guide"
slug: "prompt-design-guide"
category: "design"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/0364a5-prompt-design-guide"
extractedAt: "2026-02-21T18:08:15.563Z"
---

![](/assets/images/slds-uploads-hNFPDK2YyLZu8lHWDer-rA.png)

## Introduction

As tools like Agentforce and Einstein power more of your workflows, clear prompts are critical. They don’t just improve results—they make your AI more sustainable, too.

Use this Prompt Design Guide to write templates and instructions that are clear, reusable, and built for impact.

### What is a Prompt?

A prompt is a set of natural language instructions you give to a large language model (LLM) to complete a task. It's the primary way humans communicate with and direct AI. In tools like ChatGPT or Gemini, a prompt might just be the question or command you type in the input box. But in an enterprise setting, it often includes all the behind-the-scenes instructions, context, constraints and other details a designer creates to guide the AI's final behavior.

### What is a Prompt Template?

A prompt template is a structured, reusable set of instructions provided to an LLM for executing a single, well-defined task with high reliability. It’s designed for a single-turn AI interaction or one-off task, where multi-step reasoning is not required. A prompt template is like a detailed recipe or a high-quality chef's knife - a specialized tool used to perform one function, like summarizing notes or drafting an email, consistently every time.

### What is an Agent?

An agent is a goal-oriented, autonomous AI that uses LLMs and reasoning to handle a multi-step process or a back-and-forth dialogue to achieve a complex goal. The agent is like the chef who uses their knowledge and intelligence to select the right tools and recipes, including prompt templates, in the correct sequence to prepare an entire meal.

#### Key Differences at a Glance

Prompts are the common language used to communicate with AI. Whether you’re building a single-task prompt template or a complex, multi-step agent, prompt design is the foundational skill required to get powerful and reliable results from Salesforce AI.

### Scope

Rooted in conversation design, this guide offers principles and best practices for novice to intermediate Salesforce users to create accurate, enterprise-grade prompts using Salesforce tools like Prompt Builder and Agent Builder. It covers the overall prompt design process and the essential parts of a good prompt, including its core structure, elements, and key patterns.

#### Enterprise-Level vs Consumer-Level Prompting

You're probably familiar with consumer-level prompting using conversational AI chatbots like ChatGPT, Claude, or Gemini, but creating enterprise-level Salesforce prompts requires a slightly different mindset.

What They Share

Both enterprise-level and consumer-level prompting:

- Require clear instructions, context setting, and well-defined tasks and goals
- Benefit from including specific examples
- Rely on natural language processing capabilities
- Employ techniques, like few-shot learning and chain-of-thought reasoning
- Improve with user feedback and tuning
- Require understanding the strengths and limitations of underlying LLM models

How Salesforce Enterprise-Wide Prompts Are Different

While casual, consumer-level prompts often serve one-time needs for individual use cases in real-time, Salesforce enterprise-wide prompts are methodical and specialized prompts. They must produce consistent and reliable output for all possible inputs within a domain. Salesforce enterprise-wide prompts are:

- Built for business processes, including integration with established workflows, sales methodologies, and dynamic Salesforce data.
- Engineered for reliability and compatibility with Salesforce data structures and relationships.
- Enhanced with business intelligence and organizational knowledge.
- Designed for governance and scale.

### Target Audience

This guide empowers individuals within the Salesforce ecosystem who have prompt creation and editing permissions to design impactful, enterprise-grade AI interactions. It focuses on information for novice- to intermediate-level enterprise prompt design. Developers seeking more advanced technical tactics and implementation details should refer to Salesforce Help for additional resources.

Good prompt design benefits many different personas.

- **Salesforce Admins.** Streamline workflows and enhance user productivity.
- **Prompt Creators.** Become an expert in prompt design and build effective AI interactions.
- **Technical Writers.** Craft clear and effective prompts that guide LLMs to generate accurate and helpful content.
- **Product Managers.** Confirm AI initiatives are built on a foundation of effective prompting.
- **UX Designers.** Design intuitive and engaging AI-powered user experiences.
- **Engineers.** Leverage prompt design to build reliable AI applications.
- **Customer Engagement Specialists.** Enhance customer interactions with AI-powered tools.

Use this guide to design prompts across different industries, too, such as Sales, Finance, and Health Sciences.

### What’s Included

As organizations increasingly use AI to generate insights and automate tasks within the Salesforce ecosystem, a structured approach to prompt creation becomes essential. Without systematic design practices, teams face significant challenges:

- Inconsistent outputs
- Redundant effort
- Difficulty scaling
- Increased compliance and governance risks
- Barriers to knowledge transfer

This guide offers a framework of prompt elements—structured building blocks with specific functions—to address these common challenges in prompt design. It provides best practices, examples, and reusable prompt design patterns for these elements, along with methods for evaluating and refining prompts for enterprise-wide deployment.

A Note on Prompt Design Patterns

Prompt design patterns are blueprints and reusable phrases that incorporate proven strategies for crafting effective prompts at Salesforce. These patterns are intended to be inspirational starting points, not a rigid rule book. Language is incredibly flexible, so adapt these patterns to your unique tasks and test thoroughly.

### What Isn’t Included

This guide excludes prompts for code, mathematical, or visual generation prompts, and doesn't cover deep technical engineering of prompts, though it uses conversational design for agentic AI.

