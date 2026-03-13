---
title: "Vibe Coding and SLDS"
description: "Turn a Figma UI design into component code with Agentforce Vibes."
category: "general"
slug: "vibe-coding-and-slds--overview"
status: "published"
lastModified: "2026-03-11"
---

Turn a Figma UI design into component code with Agentforce Vibes.

![](https://www.lightningdesignsystem.com/uploads/fEqRPJthdmPk9qjsqF9u8A.png)

## Overview

Let’s say that you’re building a house that complies with your local building codes. For this project, you gather the people and tools that you need.

- A construction manager to oversee the whole project and all details
- A blueprint to construct the house
- A comprehensive building code manual


For your house project, if you didn’t use the building code manual, your construction manager might try to construct something that looks right initially, but doesn't pass inspection.

It’s the same for you as a developer or designer. You want to build component code for the Salesforce UI: with all the tools in place, you get structurally sound components built using SLDS 2 best practices right from the start.

Here are the tools you need, broken down by role, tool, and function.

<table style="min-width: 75px;"><colgroup><col><col><col></colgroup><tbody><tr><td colspan="1" rowspan="1" colwidth="null">**Role**</td><td colspan="1" rowspan="1" colwidth="null">**Tool**</td><td colspan="1" rowspan="1" colwidth="null">**Function**</td></tr><tr><td colspan="1" rowspan="1" colwidth="null">**Construction manager**</td><td colspan="1" rowspan="1" colwidth="null">AI agent<ul><li>Agentforce Vibes IDE</li><li>Agentforce Vibes Visual Studio (VS) Code extension</li></ul></td><td colspan="1" rowspan="1" colwidth="null">Oversees planning, tool-calling, and code generation.</td></tr><tr><td colspan="1" rowspan="1" colwidth="null">**Construction blueprint**</td><td colspan="1" rowspan="1" colwidth="null">A link to your design in Figma (a complete page or a single component)</td><td colspan="1" rowspan="1" colwidth="null">Provides the visual and structural design specification.</td></tr><tr><td colspan="1" rowspan="1" colwidth="null">**Building code manual**</td><td colspan="1" rowspan="1" colwidth="null"><ul><li>Salesforce DX Model Context Protocol (MCP)</li><li>Figma MCP</li></ul></td><td colspan="1" rowspan="1" colwidth="null">Provide the precise, governed rules for Lightning Web Components (LWC) and SLDS 2 compliance.</td></tr></tbody></table>

You can write your component code the old-school way: from scratch in your favorite code editor. But that’s cumbersome because you must manually:

![](https://www.lightningdesignsystem.com/uploads/UZGKMbMuWLIyF3B6qSajYA.png)

Instead of all that manual work, you want to write correct code simply and easily. So you lean into the power of AI to get you there faster and more efficiently by following these steps:

![](https://www.lightningdesignsystem.com/uploads/UZGKMbMuWLIyF3B6qSajYA.png)

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

[Agentforce Vibes ExtensionSalesforce Developer Documentation](https://developer.salesforce.com/docs/platform/einstein-for-devs/overview)[SF DX MCP Server and Tools (Beta)Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp.htm)[DX MCP Tools for LWC (Beta)Lighting Web Components Developer Guide](https://developer.salesforce.com/docs/platform/lwc/guide/mcp-intro.html)[Guide to the Figma MCP](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)[Trailhead: Agentforce Vibes Extension](https://trailhead.salesforce.com/content/learn/modules/einstein-for-developers)[Salesforce Extensions for Visual Studio Code](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide)
