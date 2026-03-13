---
title: "Vibe Coding and SLDS"
slug: "vibe-coding-and-slds--workflow"
category: "ai-and-slds-2"
parent: "vibe-coding-and-slds"
order: 0
---

Turn a Figma UI design into component code with Agentforce Vibes.

## Agentforce Vibes—Figma Workflow

When you ask Agentforce Vibes to build component code from a Figma design, there’s a lot going on behind the scenes. The workflow is a multi-step process enabled by MCP. Remember that construction analogy we mentioned in the Overview?

- **Construction manager. **Agentforce Vibes IDE or VS Code extension, the LLM-powered AI agent completing the task.
- **Construction blueprint. **A link to your precise design in Figma.
- **Building code manual. **Salesforce DX MCP and Figma MCP, universal translators providing structured content to the AI.

Notice that Figma and Salesforce DX MCPs are your building code manuals—think of them as the universal translators between your construction blueprint—your design tool, Figma, and your construction manager—your AI agent, Agentforce Vibes.

Here’s how the four-step workflow between Agentforce Vibes and Figma that uses MCPs works.

![Agentforce Vibes Receives the PromptWhen you create a prompt in Agentforce Vibes with your Figma link, it kicks off this process.Prompt analysis. Agentforce Vibes analyzes your natural language instruction and the embedded link.Intent recognition. Agentforce Vibes recognizes this goal: "Generate Salesforce LWC and SLDS 2-compliant code that builds the specified design.Tool calling. The agent determines that it needs external design data from Figma MCP to complete the task.](https://www.lightningdesignsystem.com/uploads/7OIALEMGCAs2GPrpdcYk-A.png)

![Figma MCP Engages with Agentforce VibesNext, with Figma MCP running locally, these processes happen.ℹ️ Note: To use Figma MCP, you must run Figma Dev Mode and set a local server. These are paid services. For more info on Figma products and pricing, read the Figma documentation.Figma MCP tool request. Agentforce Vibes initiates a request to your local Figma MCP Server.Design data retrieval. The Figma MCP server uses the node-id embedded in your Figma link to execute internal Figma tools. The MCP retrieves the raw, structural design data.Structure. Auto-layout properties, grouping, and layer hierarchy. These structural items are crucial for translating to flexbox or grid CSS.Styling. SLDS 2 design tokens, variables, specific hex codes, typography settings, and spacing values.Component mapping. (Crucial, if configured). The MCP server checks if the Figma component is mapped via Code Connect to a corresponding LWC base component. For example, a Figma button maps to the lightning-button component.](https://www.lightningdesignsystem.com/uploads/XXLK3Hvrzz6sgurKwaDLvw.png)

![Agentforce Vibes Synthesizes CodeThe raw design data from Figma is bundled and sent back to Agentforce Vibes. Next, that design data is converted to component code.Context consolidation. Agentforce Vibes now holds three crucial sets of context.Instruction. Your natural language prompt.Salesforce context. Your local org's metadata, schema, and existing project files. Agentforce Vibes accesses these via its Salesforce DX integration.Design context. The precise structural and styling data from Figma MCP.Code plan. Agentforce Vibes generates a detailed plan to fulfill the request. This plan includes choosing the correct SLDS 2 utility classes and LWC base components, such as lightning-card or lightning-input.Code synthesis. The agent writes the final, full component code structure, including HTML, JavaScript, CSS, and XML files. Because it had the raw design data, the resulting code is highly accurate, minimizing the need for manual tweaking.](https://www.lightningdesignsystem.com/uploads/Jehp-bs8JS2MxuTTM15wxg.png)

![Agentforce Vibes Delivers Component CodeAgentforce Vibes generates the code directly into your active Salesforce DX project folder in your Salesforce sandbox or in VS Code. You review the generated code, make any final adjustments, and proceed with testing and deployment.](https://www.lightningdesignsystem.com/uploads/v13q6lZt0Ky75SEQuTQxOw.png)
