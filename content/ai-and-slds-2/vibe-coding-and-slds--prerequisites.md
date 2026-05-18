---
title: "Vibe Coding and SLDS"
slug: "vibe-coding-and-slds--prerequisites"
category: "ai-and-slds-2"
parent: "vibe-coding-and-slds"
order: 0
---

## Prerequisites

Before you work with Agentforce Vibes to create your component code, complete these prerequisites.

### Set Up the Figma Desktop App

You need the Figma Desktop app, version 2.103.7 or higher.

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tJqPenuiP21QeQy7DJFn1A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T043133Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f91870e02055c1210b224df9e359c3c2387825a006a133a1ef597e3049dc9110) | Open your project in the Figma Desktop app. |
| :--- | --- |
| ![Step 2](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/zhluUfvoFnSzOjrt9RSpEw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T043133Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6e5c4a40f292b791c2cce9019129120cfc8584454a41e138a63899cbe6b9f6ae) | Open your design file and enter **Dev Mode (Shift + D)**. |
| ![Step 3](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Jehp-bs8JS2MxuTTM15wxg.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T043133Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6b4ddd4768b090b6dd4f39fa4c7ec113bd54fb806353d83b1e616670213a453c) | To enable the Figma MCP server, click **Set up Figma MCP**. |
| ![Step 4](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Wo8tpCtWL_BrgPHaNQCv1A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T043133Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=866ec7ed74538afdd2e95774cd0419f36982d4fb5ce4dbfcd8dad2bca7ef5fb1) | Make sure the Server status is set to Local server. |
|   |   |

### Grab your Figma Design

Complete these instructions in the Figma Desktop app in Dev Mode.

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/7OIALEMGCAs2GPrpdcYk-A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T043133Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d0c5d18efe41c5628882c9965f7af50f11bcb8b9482f86428b3d07e78b09b04b) | If it's not open already, open your design. |
| :--- | :--- |
|   | ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/psYU4u1ggWE6t-k6w1AO1Q.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T043133Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d271303257b791f19a3a4b3410c3edfb433a9e7bc98a9ed4e2d461108ace66e0)*An example of a Figma design opened with Dev Mode enabled.*  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/HzMW7-iXLKXkO3XOV0YmHA.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T043133Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e157b4ee804784e93cfda2dc0ebbea3e8fad6371be9a55d63238a09b1904a1d9)  | Highlight the component or components or entire design that you want to build.  |
| ![Step 3](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Jehp-bs8JS2MxuTTM15wxg.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T043133Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6b4ddd4768b090b6dd4f39fa4c7ec113bd54fb806353d83b1e616670213a453c)  | To copy the Dev Mode link, click Cmd + L (on Mac) or Ctrl + L (on Windows)link. You need this link later on. |

### Set Up Your Salesforce DX Project

Set up your Salesforce DX project. If you need help setting up a Salesforce DX project, Dev Hub, and scratch orgs, read [Select and Enable a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm?ef_id=CjwKCAiAuIDJBhBoEiwAxhgyFp-6YdJyuxpB4SI-xGXBPItjtE9IXKLyu8RRS57e9ylrRHgt3kVfhRoCbXcQAvD_BwE:G:s&gclsrc=aw.ds&%7D&pmaxid=&d=701ed00000hxSdrAAE&nc=&nc=701ed00000hxMWoAAM&utm_content=7013y000002ExpYAAS&gad_source=1&gad_campaignid=22912626379&gbraid=0AAAAAD4PnrPvXdE8uyqt47HuhW2TsgOoF&gclid=CjwKCAiAuIDJBhBoEiwAxhgyFp-6YdJyuxpB4SI-xGXBPItjtE9IXKLyu8RRS57e9ylrRHgt3kVfhRoCbXcQAvD_BwE).

### Set Up VS Code and the Figma MCP Server

If you’re working in VS Code, install the [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode) which includes Agentforce Vibes.
