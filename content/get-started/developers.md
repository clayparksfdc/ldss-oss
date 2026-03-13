---
title: "Developers"
slug: "developers"
category: "get-started"
order: 0
---

SLDS 2 is your comprehensive framework for building consistent, scalable interfaces across Salesforce products. This system includes reusable components, styling hooks, and standardized guidelines to ensure seamless collaboration between designers and developers. The design system is built to help you focus on functionality and efficiency while maintaining design integrity across all platforms. By using this system, you’ll speed up development, reduce redundant work, and ensure your code aligns with the latest design standards.

To get started, explore the component library to integrate pre-built, tested UI elements into your projects. Review the documentation for implementation details, styling hooks for consistent styling, and code snippets for easy integration. Check out tools that can improve developer productivity and code quality.

## How to Use SLDS

SLDS gives you a great deal of control over the look and feel of your components with three supported customization layers. With each layer of customization, you have more control over a component’s individual elements, but the implementation becomes much more complex and granular. Always use the first layer of customization that works with your use case, and only use the next layer if your use case requires a more complex solution. 

**1. Use Lightning Base Components**
With [Lightning Base Components](/develop/developers), you can customize and style each Lightning Base Component with their built-in HTML attributes. Using these components is the best way to ensure accessibility and SLDS best practices. 

**2. Use SLDS Styling Hooks**
If you can’t meet your use-case by customizing the blueprint with SLDS classes, then you can use the foundational layer of customization in SLDS, [Styling Hooks](/develop/global-styling-hooks). Styling hooks are variables that provide CSS properties such as colors, typography, spacing, sizing, and more. If you decide to customize styling hooks for your org, closely follow the [Global Styling Hook Guidance](/develop/global-styling-hooks) to make sure your customizations adhere to accessibility standards and SLDS best practices.

**ℹ️ NOTE:** The newest global styling hooks are only available in Lightning Experience, and are not supported for Experience Cloud sites.

:::card-grid{columns=3}
::card{title="Components" description="Build UIs with Lightning components." href="/components/components"}
::card{title="Styling hooks" description="Use our web-standard CSS variables to style your apps." href="/develop/global-styling-hooks"}
::card{title="Developer Tools" description="Explore our custom tools to help enhance your Lightning development process." href="/tools/developer-tools"}
::card{title="Hit the Trail" description="Take the SLDS 2 for Developers module." href="https://trailhead.salesforce.com/content/learn/modules/salesforce-lightning-design-system-2-for-developers"}
:::
