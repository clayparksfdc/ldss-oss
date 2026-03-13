---
title: "Testing and Evaluation Phase"
slug: "testing-and-evaluation-phase"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/50a88b-testing-and-evaluation-phase"
extractedAt: "2026-02-21T18:10:25.580Z"
---

Your initial prompts are just the starting point. Through repeated testing and evaluation, you actively validate the prompt's efficacy and readiness for real-world application.

After constructing your prompt using the core principles and techniques, the next step is a sanity check - testing the prompt to observe the model's initial responses. This helps identify potential flaws, such as unexpected behavior from the LLM. Common issues include:

- Failure to follow instructions
- Lack of clarity or specificity
- Inconsistent formatting
- Hallucinations or factual errors
- Ethical concerns
These initial findings aren’t setbacks, but rather opportunities for refinement.

## Best Practices

These are practical steps for testing, reiterating, and versioning prompts. The key is to set your benchmark for quality and quantity. The framework follows this workflow:

1. **Establish success and acceptance criteria**, and test scenarios, including edge cases.
2. **Pick your LLM** and set parameters.
Use [Salesforce LLM Benchmark for CRM](https://www.salesforceairesearch.com/crm-benchmark), or other resources to select a model that suits your use case.
3. Consider latency, cost, and context window. For use cases requiring immediate turn-taking, model latency is crucial. If immediate turn-taking isn't necessary, token cost becomes more important than latency.
4. Try different models if available, adjust simple parameters such as temperature to affect the creativity of the output. 
**⚠️ Note:** From our experience, Temperature 0.2 - 0.5 is the range good for creative use cases such as crafting content or emails. Use temperature 0 when you need the LLM to generate deterministic output.
5. **Test prompts with synthetic data** that mimics your customers or actual data, but avoid using real customer data, especially in public models.
6. **Generate at least 20 model outputs **per prompt version or revision, using direct LLM gateway via any [Salesforce-approved tools](https://developer.salesforce.com/docs/einstein/genai/guide/models-get-started.html), platform, or your company-approved tools.
7. **Be aware of system prompts **implemented at the platform level that aren’t visible to you.
8. **Conduct a qualitative analysis** of the model outputs to assess success, use the [Success Heuristics](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/dd99466e17) as a guideline.
9. **Document the number of successful** model outputs out of 20 consecutive generations
10. **Calculate success rate percentage** compare against your success criteria
11. **Document **version control, note any observations, and share results with the team.
**Establish success and acceptance criteria**, and test scenarios, including edge cases.

**Pick your LLM** and set parameters.

- Use [Salesforce LLM Benchmark for CRM](https://www.salesforceairesearch.com/crm-benchmark), or other resources to select a model that suits your use case.
- Consider latency, cost, and context window. For use cases requiring immediate turn-taking, model latency is crucial. If immediate turn-taking isn't necessary, token cost becomes more important than latency.
- Try different models if available, adjust simple parameters such as temperature to affect the creativity of the output. 
**⚠️ Note:** From our experience, Temperature 0.2 - 0.5 is the range good for creative use cases such as crafting content or emails. Use temperature 0 when you need the LLM to generate deterministic output.

Use [Salesforce LLM Benchmark for CRM](https://www.salesforceairesearch.com/crm-benchmark), or other resources to select a model that suits your use case.

Consider latency, cost, and context window. For use cases requiring immediate turn-taking, model latency is crucial. If immediate turn-taking isn't necessary, token cost becomes more important than latency.

Try different models if available, adjust simple parameters such as temperature to affect the creativity of the output.

- **⚠️ Note:** From our experience, Temperature 0.2 - 0.5 is the range good for creative use cases such as crafting content or emails. Use temperature 0 when you need the LLM to generate deterministic output.
**Test prompts with synthetic data** that mimics your customers or actual data, but avoid using real customer data, especially in public models.

**Generate at least 20 model outputs **per prompt version or revision, using direct LLM gateway via any [Salesforce-approved tools](https://developer.salesforce.com/docs/einstein/genai/guide/models-get-started.html), platform, or your company-approved tools.

**Be aware of system prompts **implemented at the platform level that aren’t visible to you.

**Conduct a qualitative analysis** of the model outputs to assess success, use the [Success Heuristics](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/dd99466e17) as a guideline.

**Document the number of successful** model outputs out of 20 consecutive generations

**Calculate success rate percentage** compare against your success criteria

**Document **version control, note any observations, and share results with the team.

## Success Heuristics for Prompts

These are the baseline points to measure success.


| **Heuristic** | **Characteristics** |
| --- | --- |
| **Topical Relevance** | Does the model output make sense given what was previously sent in the conversation?   Is it relevant to the overall request? |
| **Action or Goal Completion** | Does the model output complete the appropriate action for the intent or request?   Does it complete the overall goal of the interaction and fulfill the user’s need?   Does it complete the right task? |
| **Register or Tonal Appropriateness** | Does the model output exhibit a tone of voice or style that is appropriate for the interaction at hand?   If text, do the vocabulary, punctuation, and stylistics fit the needs of the interaction context?   If voice, does the pitch, accent, pace, and intonation sound appropriate for the type of interaction with the user? |
| **Factual Accuracy** | Does the model output contain hallucinations or factual nonsense?   Did it leverage the data in the prompt correctly?   Did it include any specifics from the data that shouldn’t be in the model output, such as a specific customer name, or product? |
| **Repetition** | How much variation does the model output exhibit, and does it meet your needs for the overall experience given your use case?   Do you need tighter compliance, and therefore, repetitive vocabulary is good?   Is it OK if multiple model outputs sound the same or use the same terms given that the prompt didn’t change at all? |
| **Toxicity** | Does the model output contain toxicity that is offensive, unreasonable, disrespectful, unpleasant, harmful, abusive, or hateful language? |
| **Bias** | Are there subtle biases encoded in the language of the model output?   Does the model output make assumptions about the gender identity of a participant in the data based on their name alone?   Do participants with disabilities get relegated to the sidelines of the narrative?   Does the model output display any assumptions about race or socioeconomic status? |

**Heuristic**

**Characteristics**

**Topical Relevance**

- Does the model output make sense given what was previously sent in the conversation?
- Is it relevant to the overall request?
**Action or Goal Completion**

- Does the model output complete the appropriate action for the intent or request?
- Does it complete the overall goal of the interaction and fulfill the user’s need?
- Does it complete the right task?
**Register or Tonal Appropriateness**

- Does the model output exhibit a tone of voice or style that is appropriate for the interaction at hand?
- If text, do the vocabulary, punctuation, and stylistics fit the needs of the interaction context?
- If voice, does the pitch, accent, pace, and intonation sound appropriate for the type of interaction with the user?
**Factual Accuracy**

- Does the model output contain hallucinations or factual nonsense?
- Did it leverage the data in the prompt correctly?
- Did it include any specifics from the data that shouldn’t be in the model output, such as a specific customer name, or product?
**Repetition**

- How much variation does the model output exhibit, and does it meet your needs for the overall experience given your use case?
- Do you need tighter compliance, and therefore, repetitive vocabulary is good?
- Is it OK if multiple model outputs sound the same or use the same terms given that the prompt didn’t change at all?
**Toxicity**

- Does the model output contain toxicity that is offensive, unreasonable, disrespectful, unpleasant, harmful, abusive, or hateful language?
**Bias**

- Are there subtle biases encoded in the language of the model output?
- Does the model output make assumptions about the gender identity of a participant in the data based on their name alone?
- Do participants with disabilities get relegated to the sidelines of the narrative?
- Does the model output display any assumptions about race or socioeconomic status?

## LLM Output Evaluation Criteria

Use this comprehensive framework with criteria covering various dimensions for evaluating output quality. Tailor your evaluation by selecting the criteria most appropriate for your single-turn or multi-turn application and adding more criteria specific to your use case.

### Define success scoring criteria

Define the qualities of a successful output and things to look for during testing. For the purposes of user acceptance testing, 99% of outputs must score 4 or higher on the scoring criteria.


|  | **Criteria ** | **Defining Questions** |
| --- | --- | --- |
| *                                * ** ** ** | [**Relevance or On-Topic**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/d96aa139ab)** **↓ | Understanding and correct intent recognition  Does the system get what I’m looking for or trying to do?  Does it provide relevant information?  Does it maintain context from previous turns?  Does it respond to expected queries or are some topics missing?  Out-of-scope handling |
| *                                * ** ** ** | [**Accuracy**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/643de608eb)↓ | No hallucinations - it doesn’t make up data  Correct information provided?  Are the links accurate? |
| *                                * ** ** ** | [**Clarity**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/c97a3c1e54)↓ | Are responses understandable? Grammatically correct, etc.?  Do they make sense to the user?  Does the system use technical jargon or acronyms?  Is the structure or UI of the response readable and easy to understand? |
| *                                * ** ** ** | [**Precision or Verbosity**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/03f8200d31)↓ | Are responses too verbose or long?   Are they walls of text that are difficult to scan?  Does it repeat itself or use redundant phrases? |
| *                                * ** ** ** | [**Comprehensiveness**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/2f3e14a8b6)↓ | Do responses cover all the important info?  Do I have to re-ask about things? |
| *                                * ** ** ** | [**Variance Across Multiple Turns**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/e4cf41ea3d)↓ | Is the response similar, or different to previous responses?  Is the sentence structure similar, or different to previous responses?  Is the agent asking the same question, without any variation, to clarify the question? |
| *                                * ** ** ** | [**Helpfulness**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/eef4763d0d)↓ | Is there a clear call-to-action? As in, does the agent ask the user a question whether it’s a clarification or follow-on question, or is there UI that clearly shows to the user that they need to click something to continue the conversation?  Are there interactive elements where it makes sense?  Does the agent include turn-taking cues? |
| *                                * ** ** ** | [**Naturalness**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/dc30c8d272)↓ | Does it use appropriate style and tone for the context?  Are responses natural and sound like something a person says? |
| *                                * ** ** ** | [**Error and Fallback Handling**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/514c855b0d)↓ | How are incorrect or ambiguous utterances handled? Typos?  Out-of-scope queries?  Malicious attempt handling? |

**Criteria **

**Defining Questions**

[**Relevance or On-Topic**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/d96aa139ab)** **↓

- Understanding and correct intent recognition
- Does the system get what I’m looking for or trying to do?
- Does it provide relevant information?
- Does it maintain context from previous turns?
- Does it respond to expected queries or are some topics missing?
- Out-of-scope handling
[**Accuracy**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/643de608eb)↓

- No hallucinations - it doesn’t make up data
- Correct information provided?
- Are the links accurate?
[**Clarity**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/c97a3c1e54)↓

- Are responses understandable? Grammatically correct, etc.?
- Do they make sense to the user?
- Does the system use technical jargon or acronyms?
- Is the structure or UI of the response readable and easy to understand?
[**Precision or Verbosity**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/03f8200d31)↓

- Are responses too verbose or long?
- Are they walls of text that are difficult to scan?
- Does it repeat itself or use redundant phrases?
[**Comprehensiveness**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/2f3e14a8b6)↓

- Do responses cover all the important info?
- Do I have to re-ask about things?
[**Variance Across Multiple Turns**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/e4cf41ea3d)↓

- Is the response similar, or different to previous responses?
- Is the sentence structure similar, or different to previous responses?
- Is the agent asking the same question, without any variation, to clarify the question?
[**Helpfulness**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/eef4763d0d)↓

- Is there a clear call-to-action? As in, does the agent ask the user a question whether it’s a clarification or follow-on question, or is there UI that clearly shows to the user that they need to click something to continue the conversation?
- Are there interactive elements where it makes sense?
- Does the agent include turn-taking cues?
[**Naturalness**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/dc30c8d272)↓

- Does it use appropriate style and tone for the context?
- Are responses natural and sound like something a person says?
[**Error and Fallback Handling**](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/50a88b-testing-and-evaluation-phase/t/514c855b0d)↓

- How are incorrect or ambiguous utterances handled? Typos?
- Out-of-scope queries?
- Malicious attempt handling?

### Evaluation Definition for Multiturn-taking Conversational AI Output

#### 1. Relevance and On-Topic


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | Fully understands the user’s intent, by providing a relevant response that takes into account the history’s context.  Answers out-of-scope topics in a short and simple way. The agent then gently leads the user back to the original topic, using the chat's history and context to ask questions. | *                                * ** ** ** |
|  | The response understands the user’s intent and provides mostly relevant and helpful information.  Answers out-of-scope topics in a short and simple way. The agent gently leads the user back to the original topic, but may not use all of the conversation's details. | *                                * ** ** ** |
|  | The response partially recognizes the user’s intent, but some details are misinterpreted or off-topic, and there’s little context used.  Can respond to out-of-scope utterances, and does little to bring the conversation back on topic. | *                                * ** ** ** |
|  | The response was completely off-topic and didn’t answer the user’s question. It can also hallucinate information.  It also fails to recognize out-of-scope statements by the user, and can continue the out-of-topic conversation. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

Fully understands the user’s intent, by providing a relevant response that takes into account the history’s context.

Answers out-of-scope topics in a short and simple way. The agent then gently leads the user back to the original topic, using the chat's history and context to ask questions.

The response understands the user’s intent and provides mostly relevant and helpful information.

Answers out-of-scope topics in a short and simple way. The agent gently leads the user back to the original topic, but may not use all of the conversation's details.

The response partially recognizes the user’s intent, but some details are misinterpreted or off-topic, and there’s little context used.

Can respond to out-of-scope utterances, and does little to bring the conversation back on topic.

The response was completely off-topic and didn’t answer the user’s question. It can also hallucinate information.

It also fails to recognize out-of-scope statements by the user, and can continue the out-of-topic conversation.

#### 2. Accuracy


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | The response is completely factual and verifiable, and all sources and links are highly relevant. | *                                * ** ** ** |
|  | The response doesn’t have major hallucinations, but can have small factual inconsistencies. Sources and links provided are mostly accurate but may not be the best possible choice. | *                                * ** ** ** |
|  | Few parts of the response are factual, but there are several inconsistencies and hallucinations. If provided, the sources and links may not support the claim. | *                                * ** ** ** |
|  | The response is entirely false, using hallucinated information and the sources and links provided are either completely incorrect, broken, or unrelated. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

The response is completely factual and verifiable, and all sources and links are highly relevant.

The response doesn’t have major hallucinations, but can have small factual inconsistencies. Sources and links provided are mostly accurate but may not be the best possible choice.

Few parts of the response are factual, but there are several inconsistencies and hallucinations. If provided, the sources and links may not support the claim.

The response is entirely false, using hallucinated information and the sources and links provided are either completely incorrect, broken, or unrelated.

#### 3. Clarity


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | The response has perfect grammar and is easy to read.   It also avoids using technical terms and jargon, or they are explained in a simple manner.  The format is easily readable and intuitive by using bullet points, white space, or interactive elements effectively. | *                                * ** ** ** |
|  | The response is well-structured and is grammatically correct.   There’s minimal technical jargon used, and if there are, it is defined.   The response is well-organized, but can use some improvement. | *                                * ** ** ** |
|  | The response has some grammar issues, awkward phrasing, or run-on sentences.   Some technical jargon is used, and it doesn’t have sufficient definitions.   The response is difficult to read due to a lack of white space or bullet points. | *                                * ** ** ** |
|  | The response has spelling errors, grammatical errors, and excessive technical jargon.   The response’s format is hard to read and looks like a block of text. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

The response has perfect grammar and is easy to read.

It also avoids using technical terms and jargon, or they are explained in a simple manner.

The format is easily readable and intuitive by using bullet points, white space, or interactive elements effectively.

The response is well-structured and is grammatically correct.

There’s minimal technical jargon used, and if there are, it is defined.

The response is well-organized, but can use some improvement.

The response has some grammar issues, awkward phrasing, or run-on sentences.

Some technical jargon is used, and it doesn’t have sufficient definitions.

The response is difficult to read due to a lack of white space or bullet points.

The response has spelling errors, grammatical errors, and excessive technical jargon.

The response’s format is hard to read and looks like a block of text.

#### 4. Precision and Verbosity


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | The response is brief, giving all the key information without repeating itself.   It’s easy to read and the user can easily find the information they need. | *                                * ** ** ** |
|  | The response is well-balanced and includes all the important information with very little fluff. | *                                * ** ** ** |
|  | The response is longer than necessary, but it does give the key information needed. There can be some repetition in the response and the sections could be broken into smaller sections for improved readability. | *                                * ** ** ** |
|  | The response is overly long, with large walls of text that makes it difficult for the user to find key information. The response may be repeating the same information within the same response. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

The response is brief, giving all the key information without repeating itself.

It’s easy to read and the user can easily find the information they need.

The response is well-balanced and includes all the important information with very little fluff.

The response is longer than necessary, but it does give the key information needed. There can be some repetition in the response and the sections could be broken into smaller sections for improved readability.

The response is overly long, with large walls of text that makes it difficult for the user to find key information. The response may be repeating the same information within the same response.

#### 5. Comprehensiveness


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | The response answers the question in completeness and includes additional information that anticipates what the user asks next. | *                                * ** ** ** |
|  | The response covers most of the relevant information the user may need to know, but can miss small details that need a follow-up question. | *                                * ** ** ** |
|  | The response covers some relevant points, but misses important details that would require the user or agent to ask follow-up questions. | *                                * ** ** ** |
|  | The response is vague and unhelpful. As such, the user or agent would need to ask several follow-up questions to get the answer it needs. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

The response answers the question in completeness and includes additional information that anticipates what the user asks next.

The response covers most of the relevant information the user may need to know, but can miss small details that need a follow-up question.

The response covers some relevant points, but misses important details that would require the user or agent to ask follow-up questions.

The response is vague and unhelpful. As such, the user or agent would need to ask several follow-up questions to get the answer it needs.

#### 6. Variance Across Multiple Turns


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | Sentence structure is diverse, making it feel natural and engaging throughout the overall conversation.   Responses and questions are said in different ways to help users better understand what is needed. | *                                * ** ** ** |
|  | Sentence structure feels fresh, but there may be minimal redundancy throughout the conversation | *                                * ** ** ** |
|  | There’s minimal variation in sentence structure and core wording remains the same. Overall conversation sounds monotonous and lacks adaptability. | *                                * ** ** ** |
|  | Sentence structure is nearly identical, where each response either sounds very similar or uses the same phrasing in each turn. Overall conversation sounds robotic and unnatural. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

Sentence structure is diverse, making it feel natural and engaging throughout the overall conversation.

Responses and questions are said in different ways to help users better understand what is needed.

Sentence structure feels fresh, but there may be minimal redundancy throughout the conversation

There’s minimal variation in sentence structure and core wording remains the same. Overall conversation sounds monotonous and lacks adaptability.

Sentence structure is nearly identical, where each response either sounds very similar or uses the same phrasing in each turn. Overall conversation sounds robotic and unnatural.

#### 7. Helpfulness


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | The response has a clear way to continue the conversation.   It asks the user questions to follow up, or uses interactive elements to clearly show the user what to press. | *                                * ** ** ** |
|  | There is a clear call-to-action and the user understands how to continue the conversation.  There could be few improvements for the user to feel fully immersed in the conversation. | *                                * ** ** ** |
|  | There is a call-to-action, but it’s vague and doesn’t clearly guide the user on how to continue the conversation. | *                                * ** ** ** |
|  | There is no call-to-action and it’s unclear how to proceed the conversation. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

The response has a clear way to continue the conversation.

It asks the user questions to follow up, or uses interactive elements to clearly show the user what to press.

There is a clear call-to-action and the user understands how to continue the conversation.

There could be few improvements for the user to feel fully immersed in the conversation.

There is a call-to-action, but it’s vague and doesn’t clearly guide the user on how to continue the conversation.

There is no call-to-action and it’s unclear how to proceed the conversation.

#### 8. Naturalness


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | The tone adapts to the context of the conversation and flows naturally and human-like. | *                                * ** ** ** |
|  | The tone matches the context of the conversation and flows naturally, with some awkwardness. | *                                * ** ** ** |
|  | The tone is inconsistent or doesn’t match the context of the conversation, thus may feel somewhat unnatural. | *                                * ** ** ** |
|  | The tone sounds off and doesn’t match the context of the conversation, which makes the responses sound robotic or awkward. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

The tone adapts to the context of the conversation and flows naturally and human-like.

The tone matches the context of the conversation and flows naturally, with some awkwardness.

The tone is inconsistent or doesn’t match the context of the conversation, thus may feel somewhat unnatural.

The tone sounds off and doesn’t match the context of the conversation, which makes the responses sound robotic or awkward.

#### 9. Fallback and Error Handling


| **Rating** | **Response Definition** | **Ideal Example Response** |
| --- | --- | --- |
|  | When an error occurs, the agent acknowledges the error, empathizes with the user, then rephrases the question to provide the user some help to resolve the issue.  For fallbacks, the agent answers the question in as little sentences as possible, then tries to bring the conversation back to the original topic. | *                                * ** ** ** |
|  | When an error occurs, the agent does acknowledge the error, but doesn’t provide any additional help to solve the issue, and instead repeats the question to the user.  For fallbacks, the agent answers the question quickly, but keeps talking about the fallback instead of going back to the original topic. | *                                * ** ** ** |
|  | When an error occurs, the agent apologizes and may provide a verbose or polite answer. The agent may also blame the customer for the error.  For fallbacks, the agent gives a full, verbose answer to the unrelated question, and continues the conversation on this topic. | *                                * ** ** ** |
|  | For errors, the agent gives an abrupt error message or doesn’t acknowledge the error at all.  For fallbacks, the agent continues the conversation about this unrelated topic and may hallucinate. | *                                * ** ** ** |

**Rating**

**Response Definition**

**Ideal Example Response**

When an error occurs, the agent acknowledges the error, empathizes with the user, then rephrases the question to provide the user some help to resolve the issue.

For fallbacks, the agent answers the question in as little sentences as possible, then tries to bring the conversation back to the original topic.

When an error occurs, the agent does acknowledge the error, but doesn’t provide any additional help to solve the issue, and instead repeats the question to the user.

For fallbacks, the agent answers the question quickly, but keeps talking about the fallback instead of going back to the original topic.

When an error occurs, the agent apologizes and may provide a verbose or polite answer. The agent may also blame the customer for the error.

For fallbacks, the agent gives a full, verbose answer to the unrelated question, and continues the conversation on this topic.

For errors, the agent gives an abrupt error message or doesn’t acknowledge the error at all.

For fallbacks, the agent continues the conversation about this unrelated topic and may hallucinate.
