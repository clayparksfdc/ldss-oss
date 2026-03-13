---
title: "Prompting Techniques"
slug: "combined-engineering"
category: "general"
order: 0
---

## Combining Prompt Engineering Techniques

Most effective Salesforce prompt templates integrate multiple techniques to achieve optimal results. Combining techniques allows you to:

- Address different aspects of complex business scenarios
- Compensate for limitations of individual techniques
- Provide more comprehensive guidance to the LLM
- Create advanced templates that work across variable inputs
- Balance between specificity and flexibility

### Example: Few-Shot + Chain-of-Thought

Few-shot CoT gives the model multiple examples of how to think aloud before reaching conclusions. This helps with complex reasoning tasks where simply seeing multiple input-output pairs isn't enough. The model benefits from seeing the problem-solving thought process repeated across different scenarios. The few-shot examples establish the pattern, while the CoT instructions establish thorough analysis.

Analyze the following sales opportunity to determine win probability:

**Example 1:**

**Opportunity:** Northeast Healthcare expansion**Details:** Existing customer, 3-month sales cycle, champion identified, technical review completed

**Analysis:** This opportunity shows several positive indicators. The customer is already familiar with our products, reducing adoption concerns. The sales cycle is within normal range, suggesting standard decision processes. Having an identified champion provides internal advocacy. Technical review completion indicates we've passed a major hurdle.

**Win Probability: **75%

**Example 2:**

[Second example with a lower win probability]

**Now analyze this opportunity:****Opportunity:** Western Financial Services

**Details:** New prospect, 6-month sales cycle so far, multiple competitors being evaluated, budget confirmed, no clear champion

Please think through this step-by-step, considering all relevant factors before determining the final win probability.

### Designing Combinations

Crafting effective prompts often involves combining multiple techniques. A successful strategy is to select techniques that are complementary, addressing different aspects of the task. For instance, you use one technique to define the output format and structure, another to guide the model's reasoning approach, and a third for domain specialization.

The order of application is also crucial. Logically, context-setting techniques should come first to frame the entire request. These are followed by reasoning techniques that guide the process, and finally, output formatting techniques that shape the resulting text.

While complex combinations can be effective, they require careful consideration of trade-offs. More techniques lead to longer prompts, higher token usage, and potential for contradictory instructions, demanding extensive testing. To test your combined techniques effectively:

- Isolate variables by changing one technique at a time.
- Compare the new results against single-technique baselines.
- Evaluate whether each added technique provides a meaningful improvement to the output.