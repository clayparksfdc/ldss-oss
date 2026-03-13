---
title: "Vibe Coding and SLDS"
slug: "vs-code-vibes"
category: "develop"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/75a154-vibe-coding-and-slds/b/094c33"
extractedAt: "2026-02-21T18:07:57.538Z"
---

## Use Agentforce Vibes in VS Code

Complete the prerequisites. Then complete these steps to build your component code using the Agentforce Vibes extension in VS Code.

### Connect to Your Salesforce Sandbox

In a browser window, log in to your Salesforce sandbox.


| *                                * ** ** ** | Open a Lightning Experience page. |  |
| --- | --- | --- |
| *                                * ** ** ** | Click ⚙️ (Setup). |  |
| *                                * ** ** ** | To open Lightning App Builder, click **Edit Page**. |  |

Open a Lightning Experience page.

Click ⚙️ (Setup).

To open Lightning App Builder, click **Edit Page**.

Notice your list of custom components. Later on when Agentforce Vibes creates your component code, your new component will appear here.

### Connect Figma MCP and Salesforce DX MCP

You must tell VS Code where to find the MCP servers.


| *                                * ** ** ** | In Figma Desktop, obtain a personal access token from Figma. |  |
| --- | --- | --- |
| *                                * ** ** ** | In VS Code, add the following code to your settings.json file (Cmd+Shift+P → *Open User Settings (JSON)*). |  |
| *                                * ** ** ** | Replace `YOUR_PERSONAL_ACCESS_TOKEN` with your new Figma token. |  |

In Figma Desktop, obtain a personal access token from Figma.

In VS Code, add the following code to your settings.json file (Cmd+Shift+P → *Open User Settings (JSON)*).

Replace `YOUR_PERSONAL_ACCESS_TOKEN` with your new Figma token.

### Open Your DX Project and Create Figma Design Code

Next, follow these steps in VS Code.


| *                                * ** ** ** | Open your Salesforce DX project. |  |
| --- | --- | --- |
| *                                * ** ** ** | Click **Agentforce Vibes.**                          *                     The Agentforce Vibes Codey avatar.           * ** ** ** |  |
| *                                * ** ** ** | To allow Agentforce Vibes to auto-deploy metadata to your sandbox, click **Auto-Approve**.  **Note: **You can configure Agentforce Vibes to run approved terminal commands automatically. To do so, configure [Agentforce Vibes safe commands](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/safe-commands.html).                          *                     The deploy-metadata window with a check next to Auto-approve.           * ** ** ** |  |
| *                                * ** ** ** | Auth into your Salesforce sandbox. |  |
| *                                * ** ** ** | In Type your task here... type a prompt to build your design.                          *                     The Type your task here… window in the Agentforce Vibes VS Code extension.           * ** ** **  **Example: **Grab the currently selected checkbox toggle from Figma by using the Figma MCP server. Build it as a Lightning Web Component (LWC), and use Lightning base components if possible. Then deploy it to my org. Use the DX MCP server as necessary. |  |
| *                                * ** ** ** | Pay attention to the Agentforce Vibes chat window. As it build the files, you may need to click **Accept** or **Save** to accept the commands. |  |
| *                                * ** ** ** | When complete, you see a message similar to this one:  Implemented an SLDS 2-compliant checkbox toggle aligned with the provided Figma design link. The component includes required HTML, JavaScript, XML, and an optional CSS file leveraging SLDS 2 global styling hooks `(--slds-g)`. |  |
| *                                * ** ** ** | In your Salesforce org on the open Lightning App Builder page, then drag and drop your new component onto the page. |  |
|  |  |  |

Open your Salesforce DX project.

Click **Agentforce Vibes.**

The Agentforce Vibes Codey avatar.

To allow Agentforce Vibes to auto-deploy metadata to your sandbox, click **Auto-Approve**.

**Note: **You can configure Agentforce Vibes to run approved terminal commands automatically. To do so, configure [Agentforce Vibes safe commands](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/safe-commands.html).

The deploy-metadata window with a check next to Auto-approve.

Auth into your Salesforce sandbox.

In Type your task here... type a prompt to build your design.

The Type your task here… window in the Agentforce Vibes VS Code extension.

**Example: **Grab the currently selected checkbox toggle from Figma by using the Figma MCP server. Build it as a Lightning Web Component (LWC), and use Lightning base components if possible. Then deploy it to my org. Use the DX MCP server as necessary.

Pay attention to the Agentforce Vibes chat window. As it build the files, you may need to click **Accept** or **Save** to accept the commands.

When complete, you see a message similar to this one:

Implemented an SLDS 2-compliant checkbox toggle aligned with the provided Figma design link. The component includes required HTML, JavaScript, XML, and an optional CSS file leveraging SLDS 2 global styling hooks `(--slds-g)`.

In your Salesforce org on the open Lightning App Builder page, then drag and drop your new component onto the page.

Congratulations! You just built your SLDS 2-compliant component code with Agentforce Vibes.
