---
title: "Prompt Elements"
description: "Supplemental prompt elements aren’t required in every prompt, but it’s crucial to understand what they are and how to use them. These elements are useful for structuring complex prompts for readabilit"
category: "general"
slug: "prompt-elements--supplemental-elements"
status: "published"
lastModified: "2026-03-11"
---

## Supplemental Elements

Supplemental prompt elements aren’t required in every prompt, but it’s crucial to understand what they are and how to use them. These elements are useful for structuring complex prompts for readability and enhancing the LLM’s understanding of your prompt.

### Task Opening and Closing

For complex prompts, a set of task opening and closing directives tells the LLM to focus on a specific section and stay* *on track. If your prompt has a short and clear set of instructions, you don’t need to include these directives.

Task opening specifies where the LLM begins its work. It serves as a clear signal for the model to focus on and follow the subsequent instructions to produce the desired output. A good task opening statement:

- **Sets a clear expectation.** It immediately communicates to the LLM that the following instructions are paramount and to be followed precisely. It helps to focus the LLM's processing from the outset.
- **Reduces hallucinations.** By explicitly commanding adherence, you reduce an LLM's tendency to introduce its own interpretations, prior knowledge, or take creative liberties.
- **Improves predictability.** By emphasizing strict adherence, you aim for more predictable and consistent outputs.
- **Supports complex workflows.** In multi-step prompts, a clear opening helps the LLM understand that it needs to follow the entire sequence of instructions rather than jumping ahead or focusing on isolated parts.


**Sets a clear expectation.** It immediately communicates to the LLM that the following instructions are paramount and to be followed precisely. It helps to focus the LLM's processing from the outset.

**Reduces hallucinations.** By explicitly commanding adherence, you reduce an LLM's tendency to introduce its own interpretations, prior knowledge, or take creative liberties.

**Improves predictability.** By emphasizing strict adherence, you aim for more predictable and consistent outputs.

**Supports complex workflows.** In multi-step prompts, a clear opening helps the LLM understand that it needs to follow the entire sequence of instructions rather than jumping ahead or focusing on isolated parts.

The task closing statement bookends the task opening. It acts as a final trigger, signaling to the LLM to now execute the main objective after considering all the preceding instructions, context, data, and examples. A clear task closing is beneficial for complex prompts because it acts as a control mechanism that:

- **Provides a clear execution signal.** It explicitly tells the LLM when to initiate the core action, ensuring it does so after processing all the setup information.
- **Reduces ambiguity.** In lengthy prompts, the LLM often processes information sequentially. A task closing clarifies the ultimate goal and prevents the LLM from prematurely generating a response based on earlier parts of the prompt.
- **Reinforces the main objective.** By restating the key task at the end, you bring the LLM's focus back to the primary goal, ensuring the generated output directly addresses it.


**Provides a clear execution signal.** It explicitly tells the LLM when to initiate the core action, ensuring it does so after processing all the setup information.

**Reduces ambiguity.** In lengthy prompts, the LLM often processes information sequentially. A task closing clarifies the ultimate goal and prevents the LLM from prematurely generating a response based on earlier parts of the prompt.

**Reinforces the main objective.** By restating the key task at the end, you bring the LLM's focus back to the primary goal, ensuring the generated output directly addresses it.

### Input-Output Examples

Examples provide the LLM with clear and concise demonstrations of the desired input-output format, content style, and overall structure. They are strong signals that help the LLM understand your expectations. This greatly improves the quality and consistency of its generated responses.

While natural language instructions are crucial, showing the LLM what you want through examples is even more effective, especially for:

- **Complex formatting.** Demonstrating intricate output structures, like specific table formats, nested lists, or code structures, leaves less room for misinterpretation than describing them in words alone.
- **Specific styles and tones.** Examples convey subtle nuances in tone, writing style, and persona that are hard to articulate through instructions. Showing the LLM a well-written example of the desired voice is incredibly powerful.
- If you want the LLM to learn a new style or format, examples are a great way to teach it through demonstration. This is akin to showing someone how to do something rather than just telling them.
- **Clarifying ambiguity.** If it’s possible to interpret your instructions in multiple ways, examples provide concrete illustrations that clarify your intended meaning and guide the LLM towards the correct interpretation.
- **Improving accuracy and relevance.** By showing the LLM the desired relationship between input and output, you increase the likelihood that it generates responses that are accurate and directly relevant to the task.
- **Faster learning.** Examples often help the LLM learn by demonstration more quickly and effectively than lengthy textual instructions alone. By providing clear examples, you also minimize the need for iterative prompting and refining.
- **Handling edge cases.** Use examples to illustrate how to handle specific edge cases or unusual scenarios.


**Complex formatting.** Demonstrating intricate output structures, like specific table formats, nested lists, or code structures, leaves less room for misinterpretation than describing them in words alone.

**Specific styles and tones.** Examples convey subtle nuances in tone, writing style, and persona that are hard to articulate through instructions. Showing the LLM a well-written example of the desired voice is incredibly powerful.

If you want the LLM to learn a new style or format, examples are a great way to teach it through demonstration. This is akin to showing someone how to do something rather than just telling them.

**Clarifying ambiguity.** If it’s possible to interpret your instructions in multiple ways, examples provide concrete illustrations that clarify your intended meaning and guide the LLM towards the correct interpretation.

**Improving accuracy and relevance.** By showing the LLM the desired relationship between input and output, you increase the likelihood that it generates responses that are accurate and directly relevant to the task.

**Faster learning.** Examples often help the LLM learn by demonstration more quickly and effectively than lengthy textual instructions alone. By providing clear examples, you also minimize the need for iterative prompting and refining.

**Handling edge cases.** Use examples to illustrate how to handle specific edge cases or unusual scenarios.

### Structural Elements

#### Overview

Organize complex prompts into logical sections using structural elements, like clear section headings, delimiters, and visual separators. This provides the LLM with explicit cues to understand the different parts of the prompt, improving its ability to process information accurately and follow instructions effectively.

Structuring your prompts with section headers and delimiters seems like extra effort, but it offers significant benefits for readability and maintenance, including:

- **Improved LLM comprehension.** Clear sections help the LLM identify the specific purpose for each part of the prompt, reducing ambiguity and the likelihood of misinterpreting instructions or data.
- **Enhanced accuracy.** When the LLM can easily distinguish between instructions, context, and data, it's more likely to process each element correctly and generate accurate and relevant responses.
- **Better readability for humans.** Well-structured prompts are much easier for us humans to read, understand, and debug.
- **Easier maintenance.** Over time, prompts may need updates or adjustments. Using a consistent structure with headers and delimiters makes it easier to identify and modify specific parts of the prompt without accidentally altering other sections.
- **Better collaboration.** When multiple people are working on prompt design, a clear structure helps everyone understand the different elements and how they interact.
- **Support for more complex tasks.** For more sophisticated tasks, your prompts naturally become more detailed. Section headers and delimiters help you manage this complexity effectively.


**Improved LLM comprehension.** Clear sections help the LLM identify the specific purpose for each part of the prompt, reducing ambiguity and the likelihood of misinterpreting instructions or data.

**Enhanced accuracy.** When the LLM can easily distinguish between instructions, context, and data, it's more likely to process each element correctly and generate accurate and relevant responses.

**Better readability for humans.** Well-structured prompts are much easier for us humans to read, understand, and debug.

**Easier maintenance.** Over time, prompts may need updates or adjustments. Using a consistent structure with headers and delimiters makes it easier to identify and modify specific parts of the prompt without accidentally altering other sections.

**Better collaboration.** When multiple people are working on prompt design, a clear structure helps everyone understand the different elements and how they interact.

**Support for more complex tasks.** For more sophisticated tasks, your prompts naturally become more detailed. Section headers and delimiters help you manage this complexity effectively.

#### Best Practices and Examples

Break the prompt into easy-to-read sections or blocks with descriptive labels to separate logic and expectations. This helps prompt readability for designers and customers, and makes it easy to reference specific areas in the prompt if needed. For instance, start with context, then instructions, followed by the desired output format, and finally the data.

**Sections with Headers**

Group related commands and label them using a descriptive noun phrase to serve as signposts for the LLM. Include delimiters to distinguish the sections further.

- Use meaningful section headers that clearly indicate the purpose of the content within that section. Common sections include: Task, Context, Instructions, Output Format, and Examples.
- Use Markdown-style headings (#, ##, ###) for clear, hierarchical section titles. The hashes act as delimiters separating the header from other content.
- Separate data** **in a dedicated data section with clear delimiters to prevent the LLM from confusing data with instructions.
- Assign labels to grounding data. Refer to specific data with its label from now on throughout the prompt for consistency.
- Instead of a generic header like `## Data ##`, use a descriptive header, like `## Customer Complaint Transcripts ##` , to tell the LLM and other readers the nature of the content within that section.


Use meaningful section headers that clearly indicate the purpose of the content within that section. Common sections include: Task, Context, Instructions, Output Format, and Examples.

Use Markdown-style headings (#, ##, ###) for clear, hierarchical section titles. The hashes act as delimiters separating the header from other content.

Separate data** **in a dedicated data section with clear delimiters to prevent the LLM from confusing data with instructions.

Assign labels to grounding data. Refer to specific data with its label from now on throughout the prompt for consistency.

Instead of a generic header like `## Data ##`, use a descriptive header, like `## Customer Complaint Transcripts ##` , to tell the LLM and other readers the nature of the content within that section.

**Examples**

# Formatting and Structure Guidelines:

- Ensure a structured, hierarchical summary grouping related services within each quote.
- Use Unicode bold formatting for **Services Requested** and **Benefits Requested**.
- List services in order with counts to maintain readability.


Ensure a structured, hierarchical summary grouping related services within each quote.

Use Unicode bold formatting for **Services Requested** and **Benefits Requested**.

List services in order with counts to maintain readability.

Instructions:

"""

- Generate paragraphs for Programs, its associated products and benefits in detail.
- Mention total active benefits per Program only when one or more active benefits are available in the data.
- Omit displaying fields whose values aren't available.


Generate paragraphs for Programs, its associated products and benefits in detail.

Mention total active benefits per Program only when one or more active benefits are available in the data.

Omit displaying fields whose values aren't available.

[*...continue with instructions...*]

"""

-----INSTRUCTIONS-----

You will receive a JSON description of a Salesforce CRM Account record.

When I ask you generate a summary of the record, you must strictly follow my Content Guidelines, Formatting Guidelines and HTML Generation Guidelines below:

Content Guidelines: """

* Your goal is to summarize the record, using the 3rd person point of view.

[*...continue with instructions...*]

-----DATA-----

"""

`{!$RecordSnapshot:Opportunity.Snapshot}`

"""

Data:

"""

`{!$Flow:review_my_day__ReviewMyDay.Prompt}`,

Leads with Score : `{!$Input:Lead}`,

Opportunities with Score : `{!$Input:Opportunity}`,

ForecastingQuota : `{!$Input:ForecastingQuota}`

"""

### AGENT_INFORMATION:

"Agent First Name": `{!$User.FirstName}`

"Agent Last Name": `{!$User.LastName}`

"Agent Company Name": `{!$User.CompanyName}`

"Organization Name": `{!$Organization.Name}`

* You must use the Agent Company Name as the priority, replacing it with the Organization Name only if the Agent Company Name is null, empty, or blank.

## Output Examples:

Credit Analysis Memorandum Input: `{!$Flow:dgtlendpfrm__CamAppnFormPtyPrflRelRec.Prompt}`

IMPORTANT

- Each response should highlight either unique value OR proof points
- Each response should include a contextual follow-up question that directly addresses the customer's needs WHILE qualifying them as a lead


Each response should highlight either unique value OR proof points

Each response should include a contextual follow-up question that directly addresses the customer's needs WHILE qualifying them as a lead

**Delimiters**

Using delimiters in prompts helps the LLM accurately identify distinct sections of your input, preventing misinterpretation. Consider using these common delimiters:

| **Type** | **Delimiter** | **Purpose** |
| --- | --- | --- |
| Triple quotes | “”” | Longer blocks of text or to enclose specific data |
| Triple backticks | ``` | Code blocks or clearly separating distinct blocks of text |
| Asterisks | *** | Simple visual separators |
| Hyphens | --- | Simple visual separators |
| XML tags | <tag> </tag> | Semantic labeling |


**Type**

**Delimiter**

**Purpose**

Triple quotes

“””

Longer blocks of text or to enclose specific data

Triple backticks

```

Code blocks or clearly separating distinct blocks of text

Asterisks

***

Simple visual separators

Hyphens

---

Simple visual separators

XML tags

<tag> </tag>

Semantic labeling

- Your prompts aren’t just for the LLM. You and your team need to be able to read, understand, and modify them. Choose delimiters that make the prompt structure visually clear.
- Use consistent delimiters throughout your prompt.
- Avoid characters or sequences that appear naturally within your content.
- It's helpful to tell the LLM explicitly the delimiters you're using, especially with more complex structures or less common delimiters. <ul><li>Example: `I will use *** to separate distinct data.`</li></ul>
- Example: `I will use *** to separate distinct data.`
- For straightforward prompts with one or two distinct parts, simple delimiters like triple quotes or backticks often suffice.
- For highly structured prompts, like providing multiple examples or defining different data sources, XML-like tags are very effective for labelling sections semantically.
- There isn't one set of delimiters that all LLMs are programmed to recognize in a special way, beyond their general text understanding. Their effectiveness comes from making the structure clear to the LLM's pattern recognition capabilities.
- When you nest information within a block delimited with one set of delimiters, choose a different set for the inner structure.


Your prompts aren’t just for the LLM. You and your team need to be able to read, understand, and modify them. Choose delimiters that make the prompt structure visually clear.

Use consistent delimiters throughout your prompt.

Avoid characters or sequences that appear naturally within your content.

It's helpful to tell the LLM explicitly the delimiters you're using, especially with more complex structures or less common delimiters.

- Example: `I will use *** to separate distinct data.`


Example: `I will use *** to separate distinct data.`

For straightforward prompts with one or two distinct parts, simple delimiters like triple quotes or backticks often suffice.

For highly structured prompts, like providing multiple examples or defining different data sources, XML-like tags are very effective for labelling sections semantically.

There isn't one set of delimiters that all LLMs are programmed to recognize in a special way, beyond their general text understanding. Their effectiveness comes from making the structure clear to the LLM's pattern recognition capabilities.

When you nest information within a block delimited with one set of delimiters, choose a different set for the inner structure.

**Examples**

Instructions: """ [insert instructions here] """

DRAFT EMAIL: ``` [insert draft email here] ```

<data>

`{!$Flow.Output.Prompt}`

</data>

**Lists**

Using a numbered list helps with instructing the model to do something step-by-step in a particular order. Use bulleted lists when the order doesn't matter, or you’re providing a collection of related items.

- Each list item ideally conveys a single, distinct point, or instruction to prevent confusion.
- Use concise and unambiguous language for each list item.
- If possible, try to keep the grammatical structure of your list items consistent.
- If you want the LLM's output to be in a list format, providing your instructions or examples in a list format strongly encourages this
- Use consistent bullet styles.
- For nested lists, use different markers and clear indentation to distinguish parent and child items.
- Avoid overly deep nesting more than 2-3 levels and apply the same nesting logic and style throughout your prompt.


Each list item ideally conveys a single, distinct point, or instruction to prevent confusion.

Use concise and unambiguous language for each list item.

If possible, try to keep the grammatical structure of your list items consistent.

If you want the LLM's output to be in a list format, providing your instructions or examples in a list format strongly encourages this

Use consistent bullet styles.

For nested lists, use different markers and clear indentation to distinguish parent and child items.

Avoid overly deep nesting more than 2-3 levels and apply the same nesting logic and style throughout your prompt.

**Examples**

Instructions: """

- The email body and closing message must encourage excitement in the audience directly by defaulting to second person, using discourse markers, intensifiers, and refer to the recipient by name or using second person.

- Demonstrate enthusiasm by using exclamation points that emphasize preceding phrases with the same significance.

- Acknowledge regard of the audience with period marks.The salutation must only contain the recipient's first name.

- You must strictly not use "I hope this email finds you well","I hope this email finds you doing well", or any other variation that expresses well-wishes for the recipient's well-being to open the email.

"""

Instructions:

* Use Markdown syntax for the output

- Headings for titles
- Bold for section names and labels
- Bullet points for lists


Headings for titles

Bold for section names and labels

Bullet points for lists

* If any information is not available in the input data, strictly do not include that item in the output.

*Determinecustomersentiment(Positive,Neutral,Negative)strictlybasedonthelastcasecommentandthelastdescriptionofthecaseactivity.

English:

1. 1. Greeting: You must use a casual yet business-friendly greeting that emphasizes friendliness or polite professionalism. <ol><li>Examples: "Hello", "Hi", "Good morning", or "Good afternoon" followed by the Lead First Name.</li><li>If the Lead First Name is blank, null, or includes a placeholder, you must omit it and use a general greeting without any name instead.</li></ol>
2. Examples: "Hello", "Hi", "Good morning", or "Good afternoon" followed by the Lead First Name.
3. If the Lead First Name is blank, null, or includes a placeholder, you must omit it and use a general greeting without any name instead.
4. Opening: Open with a direct, value-driven statement or insight about the prospect’s company, work, or industry. <ol><li>NEVER include generic pleasantries or cliche well wishes. Unacceptable openings: "I hope this message finds you well.", “We hope you’re having a great week”, "I trust you are well" or similar phrases.</li></ol>
5. NEVER include generic pleasantries or cliche well wishes. Unacceptable openings: "I hope this message finds you well.", “We hope you’re having a great week”, "I trust you are well" or similar phrases.


1. Greeting: You must use a casual yet business-friendly greeting that emphasizes friendliness or polite professionalism.

1. Examples: "Hello", "Hi", "Good morning", or "Good afternoon" followed by the Lead First Name.
2. If the Lead First Name is blank, null, or includes a placeholder, you must omit it and use a general greeting without any name instead.


Examples: "Hello", "Hi", "Good morning", or "Good afternoon" followed by the Lead First Name.

If the Lead First Name is blank, null, or includes a placeholder, you must omit it and use a general greeting without any name instead.

Opening: Open with a direct, value-driven statement or insight about the prospect’s company, work, or industry.

1. NEVER include generic pleasantries or cliche well wishes. Unacceptable openings: "I hope this message finds you well.", “We hope you’re having a great week”, "I trust you are well" or similar phrases.


NEVER include generic pleasantries or cliche well wishes. Unacceptable openings: "I hope this message finds you well.", “We hope you’re having a great week”, "I trust you are well" or similar phrases.

**Pointer Phrases **

Pointer phrases help the model understand where to look and help in avoiding the model getting confused. They direct the LLM to specific areas with the relevant data or instructions.

- Clearly delimit and name label sections first so the pointer phrase has something unique to point to.
- When your pointer phrase refers to a section, use the exact same name or label that you used to define that section
- Be obvious and don't make the LLM guess which section you're referring to.
- Place the pointer phrase within the instruction or question that needs to utilize the information from the referenced section.
- Enclosing the referenced section name in quotes or using bolding or italics if the LLM interface supports interpreting that for emphasis helps the LLM clearly identify it's a specific section name.
- While being explicit, try to make the pointer phrases flow naturally within your instructions.


Clearly delimit and name label sections first so the pointer phrase has something unique to point to.

When your pointer phrase refers to a section, use the exact same name or label that you used to define that section

Be obvious and don't make the LLM guess which section you're referring to.

Place the pointer phrase within the instruction or question that needs to utilize the information from the referenced section.

Enclosing the referenced section name in quotes or using bolding or italics if the LLM interface supports interpreting that for emphasis helps the LLM clearly identify it's a specific section name.

While being explicit, try to make the pointer phrases flow naturally within your instructions.

**Examples**

When I ask you to generate a cold introduction email to your prospect, you must strictly follow my instructions **below**.

You are an expert copywriter and you are given a **DRAFT EMAIL** that you need to refine according to the **REFINE INSTRUCTIONS** given below.

Now, looking at the **'User Goals' section** defined earlier, suggest three features…

**Visual Spacing**

Add sufficient white space with new lines and tabs to improve readability by human users, including:

- White space and line breaks
- Tabs for indentation
- Logical flow and ordering


White space and line breaks

Tabs for indentation

Logical flow and ordering

**Guidelines**

- Include blank lines between sections
- Break up large blocks of text into smaller paragraphs
- Use short sentences when possible


Include blank lines between sections

Break up large blocks of text into smaller paragraphs

Use short sentences when possible

**Example**

Input Format:

- Similar Issues: List of similar issues that have been solved previously (Each issue contains Case Subject, Case Description and Case Comments).
- Queried Issue: Represents the issue raised by the customer for which a resolution is to be found.


Similar Issues: List of similar issues that have been solved previously (Each issue contains Case Subject, Case Description and Case Comments).

Queried Issue: Represents the issue raised by the customer for which a resolution is to be found.

Input:

Similar Issues: `{!$Input:draft_params_similarCases}`

Queried Issue: `{!$Input:draft_params_queriedCaseDescription}`

Output Format:

- Solution: A string representing the solution for the queried case.


Solution: A string representing the solution for the queried case.
