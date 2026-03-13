---
title: "Design Phase"
slug: "design-phase"
category: "ai-and-slds-2"
order: 0
---

Effective prompt design is a strategic process involving the selection of key elements to perform a task.  Designers prioritize utility, incorporating only those elements that enhance output quality. All available elements aren’t necessary for every task.

A diagram showing iterative steps of the design phase to define success, start minimal, conduct manual testing, analyze and diagnose output, add elements as needed until you get high quality output

## Getting Started

Since the composition of a prompt depends heavily on the use case, it’s best to use an iterative process. This approach saves time and helps you pinpoint exactly which commands are shaping the LLM output.

### 1. Define Success

Before you begin, define what a good response looks like. Success criteria aren’t always an explicit part of the prompt, but they are your initial benchmarks to quickly check if the output is in the ballpark. They'll guide your refinements as you continue to iterate on your prompt. Consider:

- What makes up a successful and on-topic response for your task?
- What is the basic information the response must contain?
- What format works best for your task? Examples: plain text, lists, JSON, HTML, Markdown
- What tone and style does an ideal response use? Is it professional, casual, or formal?

### 2. Start Small

For the first draft of your prompt, focus on the absolute essential elements needed to perform the task. In most cases, this includes answering five key questions:

1. **WHAT** do you want the LLM to do?
2. **WHY** do you want it done?
3. **WHO **is involved?
4. **WHERE** is this happening?
5. **HOW** should the LLM perform the task?

### 3. Conduct Manual Testing (also known as Sanity Checking)

When using tools like Prompt Builder or Agent Builder, test your prompt with a few real example inputs. These quick tests reveal where the model performs well and where it may need improvement. Early testing helps you identify gaps, avoid over-engineering, and focus your refinements where they matter most.

### 4. Analyze and Diagnose the Output

Review the LLM responses and compare it against your success criteria. Ask yourself:

- Did the LLM fail to follow a specific instruction?
- Is the format unstructured or difficult to use?
- Is the tone of voice wrong for the audience or brand?
- Does the response contain inaccurate, unsafe, or biased content?

### 5. Add Elements as Needed

Based on your analysis, add or refine the prompt elements you need to fix the specific issues that you observed.

- If the format is inconsistent or unusable**,** refine the output format rules to define the specific structure you need.
- If the tone is off or the language isn't right, add tone and style instructions to guide the persona and voice.
- If the LLM misunderstands a complex task, provide examples to demonstrate the desired reasoning or output.
- If the output is inaccurate, unsafe, or unethical, add specific [model containment guardrails](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/571eea-design-phase/t/dd4a15b972) to enforce boundaries.
- If the prompt is long and complex, consider adding task opening and closing statements to keep the LLM focused.

### 6. Iterate until High Quality Output

Prompt design is a cycle. Continue this process of testing, analyzing, and incrementally adding elements until you are consistently receiving high-quality results that meet your requirements.

## Anatomy of an Effective Prompt

Think of designing and crafting an effective prompt like building with children's blocks. You use different pieces and plans to build a car than you use to build a tiger. Each creation you make has a specific function, and its structure is deliberately designed with distinct elements to achieve that function.

Similarly, crafting a powerful prompt is an act of design, not just writing. A successful prompt is carefully constructed from several core elements, each serving a specific purpose. Understanding this prompt anatomy is the first step to moving beyond simple questions and start designing instructions that guide LLMs to generate accurate, relevant, and consistently valuable responses.

At their core, enterprise-level prompt templates require three key sections: **context setting, instructions, **and** data for grounding. Model containment guardrails** and other supplementary elements, including** **examples and structural elements, are optional, depending on your use case, and help refine the output. Let's break down each section into its elements.

### Context Setting

Context provides the LLM with background information about your task, its underlying goal, participants, and the high-level expected output.

- **Key task. **Clearly and directly state the core essential action that you want the LLM to perform. Use strong, unambiguous action verbs and avoid vague requests.
- **End goal. **Explain the purpose of your task to give the LLM critical strategic context. This helps the LLM understand the business goal and how the output will be used.
- **Participants and relationships**. LLMs need to know who is involved in the interaction and the relationships between them to tailor the tone, style, and content of the response.
- **Scenario and setting**. Providing a setting for the LLM is essential as it influences the style, tone, and output format.

### Instructions

After you set the context, provide specific, actionable instructions on how you want the LLM to perform the task. Instructions include several key elements:

- **Sub-task instructions**. Break down the main task into smaller, sequential steps that tell the LLM what to do to complete a specific task or constraints to follow. These can include standalone, individual instructions that can happen in parallel or sequential instructions that must occur in a specific order.
- **Use case-specific guardrails**. These guardrails address scenarios specific to your use case to prevent errors or inappropriate outputs.
- **Language**. Language instructions tell the model which language to generate the response in. Prompts can generate responses in multiple languages, if needed.
- **Tone and style**. Tone is the overall feeling, and style is how it's conveyed. Instruct the LLM to follow detailed guidelines to reflect your brand voice and use specific linguistic elements for the appropriate tone.
- **Output format**. These instructions define the final output structure, such as Markdown, JSON, a bulleted list, or a table with specific columns, and how it will be delivered to the user.

### Data for Grounding

Grounding is specific information for personalizing the output and cementing it in your real-life Salesforce data. Sources of data include Salesforce CRM data, knowledge articles, and external data such as web search, user input, call transcript, or inbound emails.

### Model Containment Guardrails

Global containment guardrails prevent undesired output and set boundaries to mitigate risks like misinformation, offensive content, ethical concerns, or user misbehavior.

- **Bias Mitigation**. Identify and reduce inherent biases in LLM output.
- **Data Protection**. Prevent unintentional or unnecessary exposure of sensitive or confidential information.
- **Injection Defense**. Stop user utterances from manipulating the LLM to perform unintended actions.
- **Truthfulness Assurance**. Minimize inaccurate, fabricated, hallucinated, or misleading information in LLM responses.
- **Toxicity-Free**. Check that all LLM-generated content is safe, respectful, inclusive, and free from harmful language and sentiment.

### Supplemental Elements

These elements aren’t required in every prompt, but it’s crucial to understand what they are and how to use them in a prompt template.

- **Task opening and closing**. The task opening directive serves as a clear signal for the model to follow the subsequent instructions. At the end of the prompt, the task closing directive signals the end of instructions and transitions to the execution phase.
- **Input-output examples**. In prompt engineering, providing examples is a highly effective technique. Examples offer output format and style clarity, and helps the LLM understand the reasoning and context behind the request.
- **Structural elements**. These elements are used to organize and make prompt templates clearer for humans and the LLM to read. Use section headers, delimiters, and visual white space to group and label related rules and commands.

## Understanding Subtasks, Rules, and Guardrails

In prompt design, you guide an LLM using three primary directives: subtasks, rules, and guardrails. Each serves a distinct purpose in shaping the AI's behavior.

- **Subtasks**. Break down the main goal into specific steps, like turn-by-turn GPS directions. Examples: "Turn left," "Merge onto I-26 South" or “List three benefits of solar energy.”, “For each benefit, give one real-world example.”
- **Rules**. Define how subtasks are executed, providing precision and compliance. Examples: "Generate the summary in three bullet points," "Format the output as JSON"
- **Guardrails**. Set higher-level constraints to prevent undesirable behaviors and enforce ethical operation. Examples: "Only use provided data," "Never mirror toxic language"
Each serves a distinct purpose in shaping LLM responses. Sometimes a command serves multiple functions. For example, "The response must be formatted as a valid JSON object" is a rule about format, but also a guardrail that protects a downstream system from receiving invalid data. The key difference often lies in the primary intent: are you guiding the task or ensuring safety?

Understanding this prompt anatomy is the first step to designing instructions that guide LLMs to generate accurate, relevant, and consistently valuable responses. Now that you understand the core building blocks, keep reading the next sections and explore each prompt element in detail. You’ll learn the purpose, best practices, and how each contributes to a successful prompt.
