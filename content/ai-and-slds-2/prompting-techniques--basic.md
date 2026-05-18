---
title: "Prompting Techniques · Lightning Design System 2 - Basic"
slug: "prompting-techniques--basic"
category: "ai-and-slds-2"
parent: "prompting-techniques"
order: 0
---

## **Basic Techniques**

These are foundational methods for guiding a Large Language Model (LLM) to perform tasks.

### **Zero-Shot Prompting**

Zero-shot prompting asks the LLM to complete a task without providing any examples first. You’re relying purely on the model's built-in knowledge and how well it understands your instructions. Because there’s no guidance in the form of examples, the results can be hit-or-miss. Sometimes they’re surprisingly accurate and other times a bit off in format or focus.

### **One-Shot Prompting**

One-shot prompting gives the LLM a single, perfect example of the response you expect. This one example acts as a clear guide to show exactly how the input and ideal output look. It helps the model get the hang of what you're expecting in terms of structure and style. Sometimes, showing is better than telling.

### Few-Shot Learning

Think of few-shot learning as giving the LLM a mini-training session embedded in your prompt. You provide it with a small handful of diverse examples, or input-output pairs, to show it exactly what you're looking for. These examples act like a cheat sheet for the patterns you want the LLM to follow. It helps the LLM nail the structure, format, and even the kind of content you need.
