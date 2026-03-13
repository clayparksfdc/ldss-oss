---
title: "Vibe Coding and SLDS"
slug: "vibe-coding-and-slds"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/75a154-vibe-coding-and-slds"
extractedAt: "2026-02-21T18:07:27.518Z"
---

## Overview

Let’s say that you’re building a house that complies with your local building codes. For this project, you gather the people and tools that you need.

- A construction manager to oversee the whole project and all details
- A blueprint to construct the house
- A comprehensive building code manual
For your house project, if you didn’t use the building code manual, your construction manager might try to construct something that looks right initially, but doesn't pass inspection.

It’s the same for you as a developer or designer. You want to build component code for the Salesforce UI: with all the tools in place, you get structurally sound components built using SLDS 2 best practices right from the start.

Here are the tools you need, broken down by role, tool, and function.


| **Role** | **Tool** | **Function** |
| --- | --- | --- |
| **Construction manager** | AI agent  Agentforce Vibes IDE  Agentforce Vibes Visual Studio (VS) Code extension | Oversees planning, tool-calling, and code generation. |
| **Construction blueprint** | A link to your design in Figma (a complete page or a single component) | Provides the visual and structural design specification. |
| **Building code manual** | Salesforce DX Model Context Protocol (MCP)  Figma MCP | Provide the precise, governed rules for Lightning Web Components (LWC) and SLDS 2 compliance. |

**Role**

**Tool**

**Function**

**Construction manager**

AI agent

- Agentforce Vibes IDE
- Agentforce Vibes Visual Studio (VS) Code extension
Oversees planning, tool-calling, and code generation.

**Construction blueprint**

A link to your design in Figma (a complete page or a single component)

Provides the visual and structural design specification.

**Building code manual**

- Salesforce DX Model Context Protocol (MCP)
- Figma MCP
Provide the precise, governed rules for Lightning Web Components (LWC) and SLDS 2 compliance.

You can write your component code the old-school way: from scratch in your favorite code editor. But that’s cumbersome because you must manually:


| *                       *  *           * ** ** ** | Check SLDS 2 documentation on styling hooks, component designs, and utility classes to write the correct CSS and HTML |
| --- | --- |
| *                       *  *           * ** ** ** | Consult the LWC documentation for help with writing your component code |
| *                       *  *           * ** ** ** | Use our code validation and completion tool, SLDS Linter |

Check SLDS 2 documentation on styling hooks, component designs, and utility classes to write the correct CSS and HTML

Consult the LWC documentation for help with writing your component code

Use our code validation and completion tool, SLDS Linter

Instead of all that manual work, you want to write correct code simply and easily. So you lean into the power of AI to get you there faster and more efficiently by following these steps:


| *                       *  *           * ** ** ** | Complete the [Prerequisites](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/75a154-vibe-coding-and-slds/b/568f95) |
| --- | --- |
| *                       *  *           * ** ** ** | Either use the [Agentforce Vibes in Your Salesforce Sandbox](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/75a154-vibe-coding-and-slds/b/62916b) or the [Agentforce Vibes in VS Code](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/75a154-vibe-coding-and-slds/b/094c33) topic to build your UI code to be compliant with SLDS 2 |

Complete the [Prerequisites](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/75a154-vibe-coding-and-slds/b/568f95)

Either use the [Agentforce Vibes in Your Salesforce Sandbox](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/75a154-vibe-coding-and-slds/b/62916b) or the [Agentforce Vibes in VS Code](https://www.lightningdesignsystem.com/2e1ef8501/v/0/p/75a154-vibe-coding-and-slds/b/094c33) topic to build your UI code to be compliant with SLDS 2

## Architecture

Agentforce Vibes is a one-stop-shop solution for your generative AI coding. By using Agentforce Vibes, you're tapping into SLDS expertise to produce proper, compliant Lightning Web Ccomponents (LWC) and SLDS 2 code. The Agentforce workflow creates the component files, properly using LWC components, utilities, and styling hooks in CSS.

ℹ️ **Note:** As of Spring ‘26, you can use Agentforce Vibes directly in a Salesforce sandbox, or in Visual Studio (VS) Code via the Salesforce Extension Pack.

If you choose to work in a sandbox, you work with the [Agentforce Vibes IDE](https://developer.salesforce.com/docs/platform/code-builder/guide/codebuilder-overview.html) (formerly Code Builder) and access it via Setup. It’s an entire platform that has these tools pre-installed:

- Salesforce DX MCP
- Salesforce CLI
- SLDS Linter
- The Agentforce Vibes extension
- Plus many other helpful tools
If you choose to work in VS Code, install the [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode) to work with the [Agentforce Vibes extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-einstein-gpt). It also comes with the same tools installed, including DX MCP.

The Salesforce DX MCP provides a secure, standardized way for the AI agent—Agentforce Vibes—to understand your specific Salesforce environment and perform actions on your behalf. It includes over 60 MCP tools for various Salesforce features, like DevOps, LWC development, and SLDS 2 best practices. These tools provide predictable, secure, and structured context to large language models (LLMs), ensuring efficient and accurate results.

We continue to build out the SLDS functionality of DX MCP. It currently includes:

- General SLDS design guidelines and best practices
- SLDS uplift styling hook metadata
- SLDS Linter rules. To write compliant code, Agentforce Vibes uses its SLDS expertise, informed by SLDS Linter guidelines.
For more information on Agentforce Vibes and MCPs, check out these resources:
