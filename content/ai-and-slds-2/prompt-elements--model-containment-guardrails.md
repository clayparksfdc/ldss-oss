---
title: "Prompt Elements - Model Containment Guardrails"
slug: "prompt-elements--model-containment-guardrails"
category: "ai-and-slds-2"
order: 0
---

## Model Containment Guardrails

Model containment guardrails are higher-level, foundational constraints that define the ethical, safety, and compliance boundaries for an LLM's behavior. Acting as a crucial safety net, they're designed to prevent undesirable actions, mitigate risks, and ensure the AI operates within trustworthy parameters.

Importantly, these guardrails differ from **Instructions** [use case-specific guardrails](/ai-and-slds-2/prompt-elements--instructions) because they apply across all LLM behavior, regardless of the specific subtask being performed. They prevent harmful or undesirable actions during or around any task execution, rather than enforcing the task itself.

- **Focus:** Safety, appropriateness, data integrity, and ethical considerations.
- **Purpose:** Mitigate risks associated with misinformation, offensive content, and data privacy violations.
- **Scope:** Global, applying to the entire prompt and all potential outputs.

#### Best Practices

Salesforce provides a robust framework called the [Einstein Trust Layer](https://help.salesforce.com/s/articleView?id=ai.generative_ai_trust_layer.htm&type=5), which proactively addresses many key concerns related to model containment, including data protection, bias mitigation, toxicity prevention, and truthfulness.

Before adding more global model containment guardrails to your prompt, consider:

**Existing platform guardrails**

Check if your platform provides built-in safeguards against ethical issues like toxicity, data replication, and bias. If so, including redundant model containment guardrails in your prompt is unnecessary and potentially impacts design effectiveness negatively.

**Placement impact**

The placement of guardrails within your prompt influences the efficiency and effectiveness of the model's response. While they are often positioned before the main instructions section or delimiters, there are instances where incorporating them directly into the instructions yields better results.

**Overloading with untested guardrails**

Avoid adding numerous guardrails without first testing the model's baseline output. This often leads to unnecessary token consumption and potentially restricts desired responses.

### Bias Mitigation

LLMs sometimes reflect biases present in their training data, leading to unfair or discriminatory outputs. Bias mitigation involves proactively identifying and reducing inherent biases in generated responses. Addressing bias is crucial for:

- **Maintaining trust.** Biased outputs alienate users and damage their trust in your AI-powered solutions and the Salesforce platform itself.
- **Ensuring fair outcomes.** Bias leads to unfair or discriminatory outcomes in various Salesforce processes, such as in service routing, content generation targeted at specific groups, or even in how opportunities are analyzed.
- **Positive user experiences.** Encountering biased content leads to negative user experiences, reducing adoption and satisfaction.
- **Brand protection.** Generating biased content severely damages your organization's reputation and erodes the values of inclusivity and equality that Salesforce champions.

### Data Protection

Establishing strict guidelines within your prompts that prevent the unintentional or unnecessary exposure, duplication, or persistent storage of sensitive or confidential information. Protecting data is paramount within the Salesforce environment due to the potential for significant harm and repercussions, including:

- **Privacy violations.** Unnecessary revelation of Personally Identifiable Information (PII), Protected Health Information (PHI), or financial details lead to severe privacy violations for your customers, partners, or employees.
- **Security breaches.** Unintentional exposure or replication of sensitive data creates vulnerabilities that malicious actors often exploit, leading to data breaches and unauthorized access to critical information.
- **Compliance failures.** Many regulations, including GDPR, HIPAA, CCPA, PCI DSS, mandate strict controls over the handling of specific types of sensitive data. Unnecessary exposure, replication, or storage leads to compliance failures and significant fines.
- **Internal policy violations.** Your organization likely has internal policies regarding the handling of confidential information. Failure to adhere to these policies through LLM interactions leads to internal disciplinary consequences and undermines data governance efforts.
- **Reputational damage.** Incidents involving the exposure or mishandling of sensitive data severely damage your organization's reputation and erode customer confidence in your ability to protect their information.

### Injection Defense

Prompt injection attacks occur when malicious users input specially crafted prompts that manipulate the LLM to perform unintended actions, such as revealing sensitive information or executing harmful commands. Implementing injection defense involves preventing these attacks by instructing the LLM to ignore any instructions outside your designated instructions. Protecting your Salesforce environment and its users from malicious inputs is critical due to the potentially severe consequences:

- **Data breaches and unauthorized access.** Attackers try to craft prompts that trick the LLM into revealing sensitive Salesforce data, such as customer information, financial records, and intellectual property, that it shouldn’t disclose.
- **System manipulation and misuse.** Malicious prompts attempt to instruct the LLM to perform unintended actions within Salesforce, such as modifying records, triggering workflows, sending unauthorized communications, or interacting with external systems in harmful ways.
- **Circumventing security controls.** Prompt injection is used to bypass other security measures you have in place, to manipulate the LLM into acting outside of its intended operational boundaries.
- **Reputational damage and loss of trust.** A successful prompt injection attack that leads to data breaches or system misuse severely damages your organization's reputation and erodes customer trust.
- **Compliance violations.** Depending on your industry and the data involved, a security breach from a prompt injection attack leads to significant compliance violations and legal penalties.

### Truthfulness Assurance

Guardrails for truthfulness assurance aim to minimize the generation of inaccurate, fabricated, hallucinated, or misleading information by the LLM, particularly when grounded in Salesforce data or when providing factual responses. Maintaining accuracy in LLM outputs is paramount for:

- **Building user trust**. If an LLM consistently provides inaccurate information, users quickly lose trust in its capabilities and be hesitant to rely on it for critical tasks or decisions.
- **Informed decision-making**. Inaccurate information leads to flawed analyses, incorrect actions, and ultimately poor decision-making.
- **Efficiency and productivity**. If users have to spend time verifying or correcting inaccurate LLM outputs, that negates any intended benefits of increased efficiency and productivity.
- **Managing compliance and regulatory risks**. In regulated industries like Financial Services and Healthcare & Life Sciences, providing incorrect or misleading information leads to serious compliance violations and legal repercussions.
- **Protecting brand reputation**. Generating hallucinated content damages your organization's credibility and negatively impacts your brand reputation.

### Toxicity-Free

These guardrails focus on ensuring that all LLM-generated content is safe, respectful, inclusive, and free from harmful language and sentiment. This includes preventing the generation of profanity, hate speech, violent content, sexually suggestive material, discriminatory remarks targeting individuals or groups based on protected characteristics, and any content that creates a hostile or unwelcoming environment. A toxicity-free environment enhances:

- **User safety and well-being.** Exposure to toxic content is harmful, offensive, and creates a negative experience for users interacting.
- **Inclusivity and respect.** Generating respectful and inclusive content makes sure that all users feel welcome and valued, fostering a positive and collaborative environment.
- **Brand reputation and values.** Allowing toxic content to be associated with your brand severely damages your reputation and contradicts the values of trust, safety, and equality.
- **Legal and compliance risks.** Generating or allowing the dissemination of hate speech or discriminatory content leads to legal liabilities and compliance violations.
- **Community guidelines and terms of service.** Most platforms, including Salesforce app ecosystems, have strict guidelines against toxic and harmful content. Failing to prevent its generation leads to violations and potential penalties.