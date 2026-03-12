---
title: "Components"
slug: "components"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/755aff-components"
extractedAt: "2026-02-21T21:43:09.365Z"
---

SLDS 2 includes a curated collection of reusable components that guide and inform users’ interactions within our products and apps. These components are designed to make it easy to create a consistent and efficient user interface across an ecosystem of applications.

## Component Types

Depending on your workflow and unique purpose, SLDS enables you to build Salesforce-aligned applications across various contexts and requirements using our component types.

### Lightning Base Components

Pre-built, customizable components provided by Salesforce within the Lightning Platform.

- **Pre-Built, Accessible UI Elements**: Ready-to-use building blocks that ensure accessibility and standards, simplifying development and maintaining consistency.
- **Seamless Integration**: Automatic updates and lower maintenance costs, optimized to work seamlessly with Salesforce data and logic.
- **Customizable and Flexible**: Customize the appearance and behavior of components using component attributes and styling hooks.
- **Consistent Design and Behavior**: A unified user experience across various products like Sales Cloud, Service Cloud, and Experience Cloud.
- **Responsive and Mobile-Friendly**: Designed to work across devices and provide a responsive experience on desktop, tablet, and mobile.

Pre-Built, Accessible UI Elements: Ready-to-use building blocks that ensure accessibility and standards, simplifying development and maintaining consistency.

Seamless Integration: Automatic updates and lower maintenance costs, optimized to work seamlessly with Salesforce data and logic.

Customizable and Flexible: Customize the appearance and behavior of components using component attributes and styling hooks.

Consistent Design and Behavior: A unified user experience across various products like Sales Cloud, Service Cloud, and Experience Cloud.

Responsive and Mobile-Friendly: Designed to work across devices and provide a responsive experience on desktop, tablet, and mobile.

Components | Lightning Base Components

### Component Blueprints

Component blueprints are framework-agnostic—they don't rely on the Lightning Components framework and don't include logic. They're intended for use where the base components aren't supported.

- **Code Framework Agnostic**: Accessible HTML and CSS used to create components.
- **Foundation**: Templates that developers use to extend or build custom components that align with SLDS styling and behavior.
- **Design Consistency**: Developers ensure their custom components match Salesforce’s look and feel.
- **Non-Salesforce Environments**: Blueprints can be used in external applications or environments where Salesforce’s Lightning Component  framework isn't available.

Code Framework Agnostic: Accessible HTML and CSS used to create components.

Foundation: Templates that developers use to extend or build custom components that align with SLDS styling and behavior.

Design Consistency: Developers ensure their custom components match Salesforce’s look and feel.

Non-Salesforce Environments: Blueprints can be used in external applications or environments where Salesforce’s Lightning Component  framework isn't available.

⚠️ Blueprint components are style-only HTML and CSS scaffolding and come with significant limitations. Use them only when no suitable base component is available. They don’t include behavior, logic, or interactivity and require manual implementation to become functional.

Components | Component Blueprints

## Programming Models

The Lightning Component framework supports two programming models—Lightning Web Components and Aura Components.

Lightning Web Components (LWC) is a framework for creating modern user interfaces on the web, mobile apps, and digital experiences on the Salesforce Platform. With LWC, developers can use W3C web standards to create custom elements with JavaScript and HTML, applying foundational concepts like HTML templates and shadow DOM. Lightning web components work seamlessly with Salesforce data when running on the Salesforce Platform. LWC is backward-compatible with Aura components—they can coexist and interoperate on a page.

Aura components are still supported, but it's best to use Lightning web components for new projects. LWC are more modern, efficient, and follow current web standards.

Many Lightning base components are available as LWC components and Aura components. New base components are usually only available for LWC.

