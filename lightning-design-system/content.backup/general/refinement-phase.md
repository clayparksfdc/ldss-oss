---
title: "Refinement Phase"
description: "If testing or implementation reveals problems, refine your prompts to improve LLM output. Common reasons an LLM may not follow instructions include:"
category: "general"
slug: "refinement-phase"
status: "published"
lastModified: "2026-03-11"
---

If testing or implementation reveals problems, refine your prompts to improve LLM output. Common reasons an LLM may not follow instructions include:

- **Complex wording**: Instructions are too long or unclear.
- **Conflicting asks:** Prompts contain contradictory directions.
- **Excess length**: Main task is buried in too much text.
- **Missing context:** Not enough background for the task.
- **Model limits:** Gaps in training or capabilities.
- **Training bias:** Patterns in training data affect behavior.


## Prompt Tuning

Prompt tuning means making small, step-by-step changes to improve your prompt until the output meets your goals. It involves reviewing the model’s responses and refining the context, rules, guardrails, examples, or other elements to get the result you want.

Tuning improves quality, accuracy, and consistency, and helps you see clear progress over time, especially if the first prompt doesn’t work well. Make one change at a time so you can tell exactly what caused the improvement or problem. Multiple changes at once make it hard to know what worked.

### Best Practices

#### 1. Analyze your prompt anatomy

Break down the prompt structure. Examine individual elements of the prompt, including role, task description, context, instructions, formatting, and grounding data. For each element, look at the language use, cohesion, syntax, and potential variable conditions.

- **Identify potential ambiguities**. Read through each rule and guardrail and ask yourself: Could this be interpreted in multiple ways? Is the language precise? Are there any implicit assumptions being made?
- **Look for contradictions.** Are there any rules or details that conflict with each other, even subtly?
- **Assess the level of detail.** Is there enough detail in each element, or is it too vague? Conversely, is it overly verbose and potentially confusing the model?


Pinpoint outputs that miss the mark for requirements or expected quality. Identify what specifically makes them bad outputs.

- **Map errors to prompt elements.** For each instance of an ignored instruction, hallucination, or other issue, try to pinpoint which part of the prompt is contributing to the problem.
- **Identify patterns.** Are certain types of instructions consistently ignored? Are hallucinations occurring around specific data points?
- **Document specific examples.** Keep a detailed log of the problematic outputs and the corresponding prompt used to generate them. This will be crucial for tracking your progress.


#### 2. Understand the system prompt

Explore implemented system-level features, such as model containment policies and prompt wrappers. Determine what to include in global versus local instructions, avoiding conflicts and duplication.

#### 3. Tune the prompt

Refine instructions to enhance the clarity and effectiveness of the elements within your prompt.

#### 4. Conduct ablation testing

Start with a minimal baseline and add elements or instructions incrementally as needed. Remove anything that doesn’t enhance output quality.

#### 5. Capture evidence

Document versions and refinements to track improvements in output quality, using a methodical approach.

### Prompt Tuning vs. Fine-Tuning

In a nutshell, prompt tuning is about optimizing how you talk to an LLM, while fine-tuning is about changing how the LLM itself talks and involves modifying how the LLM generates responses.

While both aim to optimize LLM performance, they do so through fundamentally different approaches.

<table style="min-width: 557px;"><colgroup><col style="width: 168px;"><col style="width: 364px;"><col></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="168">**</td><td colspan="1" rowspan="1" colwidth="364"><strong>Prompt Tuning**</td><td colspan="1" rowspan="1" colwidth="null">**Fine-Tuning**</td></tr><tr><td colspan="1" rowspan="1" colwidth="168">Definition </td><td colspan="1" rowspan="1" colwidth="364"><ul><li>Prompt tuning focuses on crafting optimal input prompts to guide the LLM towards desired outputs.</li><li>It involves manipulating the wording, structure, and context of the prompt itself. </li><li>This method leverages the existing knowledge and capabilities of the pre-trained LLM.</li></ul></td><td colspan="1" rowspan="1" colwidth="null"><ul><li>Fine-tuning involves training an existing pre-trained LLM on a specific dataset to specialize its performance for a particular task or domain. </li><li>This process adjusts the model's internal parameters, or weights, to better align with the characteristics of the training data. </li></ul> </td></tr><tr><td colspan="1" rowspan="1" colwidth="168">Key Characteristics</td><td colspan="1" rowspan="1" colwidth="364"><ul><li>Doesn't alter the LLM's underlying model weights. </li><li>Relatively quick and cost-effective. </li><li>Highly flexible and adaptable to various tasks. </li><li>Relies on the user's ability to design effective prompts.</li></ul></td><td colspan="1" rowspan="1" colwidth="null"><ul><li>Modifies the LLM's model weights. </li><li>Resource-intensive and time-consuming. </li><li>Creates a specialized model that excels in a specific domain. </li><li>Requires a labeled dataset for training. </li></ul></td></tr><tr><td colspan="1" rowspan="1" colwidth="168">Use Cases</td><td colspan="1" rowspan="1" colwidth="364"><ul><li>Content generation, question answering, summarization, and other general-purpose tasks. </li><li>Situations where rapid deployment and flexibility are essential.</li></ul> </td><td colspan="1" rowspan="1" colwidth="null"><ul><li>Highly specialized tasks requiring high accuracy, such as medical diagnosis, legal document analysis, or customer support for a specific product. </li><li>Situations where the LLM's general knowledge is insufficient.</li></ul></td></tr></tbody></table>

### Instruction Tuning

Instruction tuning is the process of refining the wording of the instructions within your prompt to better guide the LLM towards your desired output.

#### Step 1: Clearly identify your goal, and the acceptance criteria.

Acceptance criteria are the checkpoints you use to decide if the LLM’s output meets your requirements. They act as your benchmark but are not part of the prompt itself.

Start with your success criteria from the design phase, then adapt them to your use case. Common dimensions for acceptance criteria include:

<table style="min-width: 287px;"><colgroup><col style="width: 262px;"><col></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="262">**Criteria**</td><td colspan="1" rowspan="1" colwidth="null">**Description**</td></tr><tr><td colspan="1" rowspan="1" colwidth="262">**Factual Accuracy**</td><td colspan="1" rowspan="1" colwidth="null"><ul><li>The output must contain only verifiable information, with no hallucinations or fabricated details.</li><li>All numerical data must be accurate and consistent with provided sources.</li></ul></td></tr><tr><td colspan="1" rowspan="1" colwidth="262">**Adherence to Format**</td><td colspan="1" rowspan="1" colwidth="null"><ul><li>If a specific format is requested, such as JSON, a table, or list, the output must precisely match that format.</li><li>All elements within the format must be correctly structured and labeled.</li></ul></td></tr><tr><td colspan="1" rowspan="1" colwidth="262">**Tone and Style Consistency**</td><td colspan="1" rowspan="1" colwidth="null"><ul><li>The output must maintain the specified tone.</li><li>The language and style must align with the defined brand voice or communication guidelines.</li></ul></td></tr><tr><td colspan="1" rowspan="1" colwidth="262">**Completeness and Relevance**</td><td colspan="1" rowspan="1" colwidth="null"><ul><li>The output must address all aspects of the prompt's request.</li><li>All information provided must be directly relevant to the prompt's context and goal.</li></ul></td></tr><tr><td colspan="1" rowspan="1" colwidth="262">**Ethical Compliance**</td><td colspan="1" rowspan="1" colwidth="null"><ul><li>The output must not contain any toxic, biased, or harmful content.</li><li>The output must respect all data privacy and security regulations.</li></ul></td></tr></tbody></table>

#### Step 2: Run an initial test as sanity check against the acceptance criteria

Execute your prompt and carefully analyze the LLM's response. Identify the parts of the output that deviate from your intended goal. [See common prompt issues that cause LLMs to fail to follow instructions](https://www.lightningdesignsystem.com/2e1ef8501/p/2082c6).

#### Step 3: Pinpoint the misalignment

Analyze the discrepancies between the LLM's output and your intended goal. Narrow down the specific parts of the output that don’t align with your success criteria. Identify the prompt instructions related to those parts.

#### Step 4: Review the culprit instruction

For the prompt instructions you suspect caused the misalignment, carefully examine each one. Look for:

- Ambiguous wording
- Conflicting instructions
- Missing context
- Overly complex sentences
- Lengthy or redundant instructions
- Inefficient sentence structure


#### Step 5: Revise and refine

Rewrite problematic instructions to be more precise and unambiguous.

- Use clearer language and provide more explicit guidance.
- Break down complex instructions into simpler steps.
- Add context or examples to clarify your intent.
- Shorten lengthy instructions.
- Adjust your core task if the output seems stuck in familiar patterns from the training data.


#### Step 6: Re-test and iterate

Run the revised prompt and compare the new output to your acceptance criteria. Repeat steps 3-5 until the LLM's output consistently aligns with your criteria and goal. This is an iterative process, so be prepared to make multiple adjustments.

#### Step 7: Document findings

Record the changes you made and the results you achieved. This documentation will help you refine future prompts and build a library of effective techniques.

### Parameter Adjustment

In prompt design, parameter adjustment means changing settings that affect the LLM’s output without changing how the model is trained. These parameters include:

#### Temperature

The temperature setting, represented as a numerical value between 0 and 1, directly influences the degree of randomness and variability in the model's responses. The choice of temperature setting involves a trade-off between creativity and control.

Higher temperature settings encourage more creative and diverse outputs.

- The model becomes more adventurous, willing to explore unconventional connections and generate unexpected responses.
- Useful for tasks like brainstorming, generating ideas, or creating fictional narratives.
- Increases the likelihood of irrelevance, incoherence, or hallucinations.


Lower temperature settings result in more focused and deterministic results.

- The model adheres more closely to the provided instructions and prioritizes accuracy and predictability over novelty.
- Good for scenarios where precision and reliable outputs are important.
- Tends to result in more formulaic output that is less engaging.


A temperature between 0.2–0.5 for GPT models tends to work best. It leaves room for LLM to be creative, but avoids hallucination.

#### Max tokens

This parameter limits the length of the generated response. LLMs process text in units called tokens, which are parts of words or entire words. Tokens are the basic building blocks that LLMs use to understand and generate text.

When you write a prompt, the LLM breaks it down into these blocks, such as individual words, parts of words, or even punctuation marks. This is called tokenization. Roughly, one token is equivalent to 3/4 of an English word. Explore more about [Token Definition](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them#h_051eb08805) from OpenAI, [Tokens and tokenization](https://www.ibm.com/docs/en/watsonx/saas?topic=solutions-tokens) from IBM.

The LLM then processes these tokens to understand the meaning of the prompt. In response to the prompt, it puts together new sequences of tokens as the output. LLM costs are typically based on the number of tokens being processed.

- **Setting a maximum output length limits the number of output tokens an LLM is able to generate. This prevents overly long or cut-off responses, which helps manage costs and reduce environmental impact.**
- Setting a limit for predictable length responses. It also encourages the LLM to be more focused and concise in its responses.
- **Generating fewer tokens takes less time, so it also helps latency issues.**
- However, if you set it too low, it can cut off LLM responses prematurely and miss important information. Experiment to find the optimal value.


ℹ️ **Tips**: Match your prompt's output length instructions to your Max Tokens setting. It's crucial to choose a limit that is appropriate for the specific task and desired length of the output to avoid unexpected cut-offs. For example, when generating emails, verify the output limit is sufficient to avoid incomplete messages.

#### Top-p

This is a sampling technique used by LLMs to generate text, also called nucleus sampling. It complements the temperature setting by further **controlling the range of possible word choices**. It sets a probability threshold and considers only the tokens that fall within that cumulative probability mass.

A higher top_p value (0.9 or 1.0) leads to more diverse and potentially creative output, as the model can choose from a larger set of tokens. Expands the pool of possible word choices. The model considers a wider range of words, including less likely ones, leading to more diverse and creative outputs. However, it also increases the risk of generating nonsensical or irrelevant text.

A lower top_p value (0.1 or 0.2) results in more focused and predictable outputs, as the model is restricted to a smaller set of likely tokens. Restricts the model to the most confident responses. It prioritizes the words with the highest probabilities, resulting in focused and predictable output.

The combination of temperature and top-p provides fine-grained control over the text generation process. By adjusting these parameters, you can strike a balance between determinism and diversity, tailoring the model's output to your specific needs. However, it’s generally recommended to adjust either temperature or Top P, but not both.

#### Frequency penalty

Discourages repetitive output by penalizing tokens based on how frequently they’ve already appeared in the output.

#### Presence penalty

Encourages the model to introduce new topics by penalizing tokens simply for having appeared at least once in the output.

#### How parameters relate to prompt tuning

Parameter adjustments are often considered an extension of prompt tuning. They’re part of the process of optimizing the LLM behavior for specific conversational contexts. It’s about the setting of the request to the LLM, and not the changing of the LLM itself.

Conversation designers often adjust just the temperature and token limit settings when tuning prompt output. Other parameter settings are typically handled by engineers.

## LLM Considerations

Whether you're writing prompts for yourself or creating templates for Salesforce, the useful outputs come from LLMs. These models predict text based on patterns in their training data, making them valuable for tasks like summarizing details and spotting opportunities. While LLMs are powerful, they don’t think or understand like humans. As prompt designers, our job is to guide them effectively, ensuring they produce relevant and actionable results.

### Overview of Supported LLMs

Currently, Agentforce AI Agents use OpenAI GPT-4o, and in some cases, Azure OpenAI GPT-4o. If you’re using Agentforce, you can’t select a different LLM. However, for embedded features, like Prompt Builder, Salesforce does support other LLMs from multiple providers out of the box. Bring your own LLM (BYOLLM) if you need fine-tuned models for specific domains.

[Large Language Model (LLMs) SupportUnderstand supported large language models (LLMs) from multiple providers for embedded features, such as Prompt Builder. Identify the Salesforce-managed models that are available out of the box. Learn how you can bring your own model (BYOLLM) by using Einstein Studio.](https://help.salesforce.com/s/articleView?id=ai.generative_ai_large_language_model_support.htm&type=5)

If you’re curious about details for other LLMs, [Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) has an extensive leaderboard that compares key metrics of over 30 different LLMs.

#### Model Compatibility for Prompt Design Patterns

The specific patterns in this guide have all been tested with at least one industry-vetted model.

- OpenAI GPT 3.5 Turbo, Temperature: 0.5
- OpenAI GPT-4 Omni, Temperatures: 0, 0.2, 0.5
- OpenAI GPT-4 Omni Mini, Temperature: 0.5
- Anthropic models


Thoroughly test these patterns with other models and parameter settings for optimal performance in your specific Salesforce environment. Treat these examples as inspiration.

### LLM Selection Strategy

Just like you choose different apps for different tasks, LLMs have varied skills. Some excel at writing engaging content, others at extracting key information from Salesforce records or customer chats. Some are faster, while others are slower. The key is selecting the model that best fits your specific task.

#### 1. Consider Your Task

##### Task Complexity and Nuance

What task is the LLM performing, such as text generation, summarization, translation? Does the task require deep reasoning or creativity? Do you need a model fine-tuned for a specific industry, like, legal, healthcare?

Advanced models can handle more tasks and follow complex instructions. Larger models with more parameters and diverse training sets often have stronger reasoning capabilities but are more expensive and slower.

**High:** For tasks requiring sophisticated reasoning, creative content generation, understanding subtle nuances, and with intricate multi-step instructions, the more powerful models are generally better. Consider models are designed for high-level understanding and generation, like **GPT 4 Omni** and **Claude 3.5 Sonnet**

**Medium:** Tasks like extracting specific data points, summarizing moderately complex text, or generating creative content with fewer constraints can often be handled effectively by mid-tier models. Consider **GPT 4 Omni Mini** or **Claude 3 Haiku** depending on specific demands.

**Low:** For straightforward tasks like answering simple questions based on provided context, basic text formatting, or generating short, factual content, the lighter models can be efficient. Consider **GPT-3.5 Turbo**, **Claude 3 Haiku**, **Gemini 2.0 Flash**, and **Gemini 2.0 Flash Lite**.

##### Output Quality and Style

How sophisticated does the output need to be for the user? Model responses are often hard to measure in numbers, but [Hugging Face](https://huggingface.co/) has many evaluation metrics and tools to evaluate both LLMs and datasets. It allows users to calculate metrics like accuracy, precision, recall, and perplexity.

Another tool for developers is the LMSYS Chatbot Arena. It scores popular models based on a lot of human preference data. Anyone can join!

Do you need highly polished, human-like text with nuanced language and varied style? **GPT 4 Omni** and **Claude 3.7 Sonnet** are generally known for their high-quality and stylistic capabilities.

For some applications, simpler and more direct language is preferable. Lite and mini versions are often sufficient and potentially faster.

##### Context Window and Information Recall

How much input and output can the model handle at one time? The context window is the amount of information a model can process in one prompt. It includes system messages, prompts, and responses.

If your prompt needs to reference a significant amount of context, like a long customer service transcript or a detailed product description, a larger context window is crucial. Models with larger context windows remember more of the conversation or input.

- **GPT 4 Omni** and **Claude 3.5 Sonnet** have substantial context windows.
- **Gemini 2.0 Flash** is also a candidate with a very large context window of 1 million tokens - that’s around 750,000 words. To put this in perspective, the word count for Tolstoy’s War and Peace is approximately 587,287 words**.**


For quick, single-turn interactions, a large context window is less critical. Consider **GPT-3.5 Turbo**

##### Speed and Latency

How long does it take the model to complete a task? This includes measures of latency, or the time to generate the first token, and throughput, or tokens per second. Legacy models often take a lot longer to complete tasks than newer models.

How important is speed to you? Does your use case need immediate multi turn-taking conversation?

If your application requires quick responses, models with lower latency are preferred. Lite and flash versions are often optimized for speed. Consider **GPT 4 Omni Mini**, **Claude 3 Haiku**, **Gemini 2.0 Flash**, and **Gemini 2.0 Flash Lite** are generally designed for faster responses.

For tasks that run in the background and don't require immediate responses, latency tends to be less of a concern, so prioritize quality.

##### Cost Efficiency

How much does it cost Salesforce and your customer to serve the model? Different models have different pricing structures, often based on the number of tokens used both in input and output. More powerful models generally have higher costs per token.

If you know your cost estimates per model usage, factor that into your decision. Consider if cost is more important than perfect accuracy for your use case.

If your prompts are executed frequently, the cost per token becomes a significant factor. Lighter models generally have lower costs per token. **GPT 4 Omni Mini**, **GPT 3.5 Turbo**, **Claude 3 Haiku**, **Gemini 2.0 Flash**, and **Gemini 2.0 Flash Lite** are likely to be more cost-effective than the top-tier models.

**Sustainability**

Choosing a more efficient model is one of the most impactful levers for driving AI sustainability. To foster industry-wide transparency, Salesforce has been instrumental in developing the [AI Energy Score](https://www.salesforce.com/news/stories/ai-energy-score/), a standardized framework to measure the energy efficiency of AI models. As this and similar metrics become more widespread, they will provide a clearer path for choosing a sustainable model. In the meantime, while direct sustainability metrics are not yet consistently available for all models, we can use latency and cost efficiency as strong proxy indicators. Models with lower latency and a lower cost-per-token are typically more computationally efficient, which directly correlates with a reduced energy footprint. Therefore, for the majority of tasks that do not require maximum reasoning power, consciously selecting a lighter, faster model is a tangible step towards sustainability. Instead of defaulting to the most powerful option, evaluate if highly capable yet efficient alternatives such as **Gemini 2.0 Flash Lite** can meet your requirements.

#### 2. Start with a hypothesis

After considering the previous factors, go ahead and make an initial selection of the model that seems most suitable. If it doesn’t give you the desired responses, try a different one.

#### 3. Experiment and iterate

The best way to determine the optimal model is to test your prompt with different LLMs.

- Compare output quality: Does the output meet your requirements in terms of accuracy, style, and completeness?
- Measure performance: Note the response times for different models.
- Calculate the estimated cost


If the results aren’t what you hoped for, select a different model and experiment more. Repeat until you get desired outputs reliably.

#### 4. Review Salesforce documentation

Salesforce provides specific guidance and limitations for each supported LLM. See [Large Language Models](https://help.salesforce.com/s/articleView?id=ai.generative_ai_large_language_model_support.htm&type=5) in Salesforce Help. Also, use [Salesforce LLM Benchmark for CRM](https://www.salesforceairesearch.com/crm-benchmark), or other resources to select the best model for your use case.

## Summary

Focus on how each model's strengths align with the user experience and the quality of the generated content. Don't get bogged down in the deep technical details of the model architectures. Consider:

- Will this model produce the kind of response I envision for the user?
- Will the response be timely enough for the intended interaction?
- Can the model handle the complexity of my instructions and the provided context effectively?
- Is it cost-effective for my company and customers based on the expected frequency of calls?


By systematically considering these factors and, most importantly, testing your prompts with different models, you’re able to make informed decisions and select the best LLM for each of your prompts.
