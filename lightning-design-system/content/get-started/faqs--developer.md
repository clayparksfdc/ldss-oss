---
title: "FAQs - Developer"
slug: "faqs--developer"
category: "get-started"
parent: "faqs"
order: 0
---

## Developer FAQs

Explore essential questions for developers to integrate and optimize SLDS 2 in your projects. Find both foundational knowledge and best practices to use SLDS 2 efficiently on Salesforce and external applications.

### Why should developers use SLDS 2?

Using SLDS 2:

- Reduces development time by providing pre-designed, standardized components.
- Ensures design consistency with Salesforce applications.
- Offers tools to create responsive, accessible, and visually cohesive experiences.
- Follows best practices that align with Salesforce’s UI and UX standards.

### What components and tools does SLDS 2 include for developers?

SLDS 2 provides a wide range of components and tools, including:

- [Lightning Base Components](/develop/developers):  Reusable, out-of-the-box elements such as buttons, icons, forms, and tabs. Compose new components using the base components to create your own custom UI and apps that look like Salesforce and follow SLDS 2 guidelines. The base components get the latest SLDS component blueprint updates automatically.
- [Component Blueprints:](/develop/developers) Create your own custom components that follow our design guidelines.
- [Utility classes](/develop/utility-classes): Ready-to-use CSS classes such as layout helpers, color classes, spacing, and and styling for responsive designs.
- [Developer Tools:](/tools/developer-tools) Increase productivity by using tools that help developers seamlessly transition to SLDS 2, improve code quality, and ensure code adheres to best practices.

### How can developers customize SLDS 2 components?

While SLDS 2 encourages standard component use to maintain consistency, designers can customize some aspects, such as colors, spacing, and fonts, through SLDS 2 styling hooks. The LWC framework and component blueprints can be leveraged to build custom components that developers will have to maintain on their own. Customizations should adhere to SLDS 2 principles to avoid compatibility issues.

### What are some best practices for implementing SLDS 2 with Lightning Web Components (LWC)?

- Use SLDS 2 Styling Hooks: Styling hooks allow you to customize SLDS 2 styles in Lightning Web Components without modifying core SLDS 2 files.
- Apply SLDS 2 Utility Classes: Add SLDS 2 utility classes for spacing, alignment, and text formatting directly in your component code instead of using custom CSS. This makes your component styling easier to maintain.
- Avoid Inline Styles: Inline styles can override SLDS 2 utility classes and make theme updates harder to manage.

You can find detailed guidance in the [LWC Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc)
