---
title: "FAQs"
slug: "faqs--general"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/313db3-faqs/b/19c8a3"
extractedAt: "2026-02-21T16:54:26.038Z"
---

## General FAQs

Learn about SLDS 2 key features, availability, transition process, and implementation guidelines.

### Where can I reference content for SLDS 1?

The Salesforce Lightning Design System 1 (SLDS 1) website has migrated to make space for SLDS 2. You can find all SLDS 1 content at https://v1.lightningdesignsystem.com/.

### What is SLDS 2?

The Salesforce Lightning Design System 2 (SLDS 2) is the latest design system for Salesforce products built on the Lightning platform, it's an evolution of SLDS 1. The design system is a free offering created for developers, designers, administrators, and partners to design and build usable and accessible experiences. It includes reusable UI components, guidelines, and tools. Reference our help article for detailed information on availability.

SLDS 2 includes a comprehensive set of design guidelines, components, and resources that help you create consistent, accessible, and user-friendly Salesforce applications. SLDS 2 includes CSS frameworks and components that adhere to Salesforce’s visual and user experience standards.

The main goals of SLDS 2 are:

- Provide a refreshed UI while maintaining a unified and consistent look and feel across all Salesforce applications and agentic experiences.
- Improve accessibility and responsiveness, ensuring Salesforce applications are usable across devices and accessible to all users.
- Streamline the design-to-development handoff by offering reusable, ready-made components in both Figma kits and code.

### What are key differences between SLDS 1 and SLDS 2?

- SLDS 2 provides a [UI refresh](https://www.salesforce.com/blog/new-ui-design-insights/#h-what-is-the-new-ui-design) on the Lightning visual style with our new Salesforce Cosmos theme. Access the new theme or create a custom SLDS 2 from [Themes & Branding in Setup](https://help.salesforce.com/s/articleView?id=release-notes.rn_general_slds_themes_beta.htm&release=254&type=5). Discover the details on updates to our [Visual Design Principles](https://www.lightningdesignsystem.com/2e1ef8501/p/207fb6).
- SLDS 2 supports the SLDS 2 themes such as Cosmos in [Lightning Base Components](https://help.salesforce.com/s/articleView?id=release-notes.rn_lc_slds2_support.htm&release=254&type=5), while SLDS 1 will continue to support the Lightning themes.
- SLDS 2 only uses a [styling hook](https://www.lightningdesignsystem.com/2e1ef8501/p/319e5f)-based architecture while SLDS 1 is based in a mixture of design tokens and styling hooks.

### Who uses SLDS 2?

SLDS 2 is designed for developers, designers, and anyone building applications on the Salesforce Platform. Whether creating internal applications, customer-facing interfaces, or partner products, SLDS 2 offers tools and guidelines to ensure consistency with Salesforce’s UI and UX standards.

### Why transition to SLDS 2?

SLDS 2 paves the way for future innovation, including dark mode, advanced styling, and agentic capabilities. Moving to SLDS 2 ensures companies can future-proof their orgs and unlock new UX capabilities when they become available. Discover details on the transition process to SLDS 2 in our transition guide.

### What is Salesforce Cosmos and how is it different from SLDS 2?

Salesforce Cosmos is the new default theme for SLDS 2, providing a refresh of the visual styles that appear in the UI. Released in Winter ’25 and formerly known as Enhanced Lightning User Interface (UI), the Salesforce Cosmos theme delivers a modern design that improves navigation, page load speed, and approachability.

SLDS 2 is the latest design system for Salesforce products built on the Lightning Platform.

To put it more simply, Salesforce Cosmos is the new default visual design (the visual style that end users see), while SLDS 2 is the foundation on which Cosmos was built (the building blocks used to make the theme).

### When will Salesforce Cosmos and SLDS 2 be available?

SLDS 2 is GA as of the Winter '26 release. SLDS 2 feature availability, including Salesforce Cosmos, varies by product and edition. Some SLDS 2 features are generally available, but some features are still works in progress.Salesforce Cosmos is the first theme available in SLDS 2. It began its gradual release to new orgs in Winter ’25 and will be available to existing orgs as the standard SLDS 2 theme in Winter ’26. Find detailed availability information in this help article.

### Is the change to SLDS 2 and Cosmos mandatory?

No, moving to SLDS 2 and Salesforce Cosmos isn't mandatory. Customers can opt into (or out of) Salesforce Cosmos and SLDS 2 at their discretion.

### How is the transition to SLDS 2 different than the Classic to Lightning migration?

The transition from Classic to Lightning was a platform change that required migration to the Lightning Component framework. Moving to SLDS 2 and Salesforce Cosmos is less complex because they operate on the Lightning Component framework and the CSS modifications don't impact system functionality.

### Does Salesforce Cosmos and SLDS 2 work with an ISV's managed packages?

Yes, an ISV can update their UI and components to support SLDS 2. If the new Cosmos theme is activated and there are visual inconsistencies in the UI, it’s likely that the ISV needs to complete the transition and update UI components.

### What are styling hooks, and why are they important?

Styling Hooks in SLDS 2 are CSS variables that define essential design properties like colors, spacing, fonts, and borders. They ensure consistent styling across applications and make it easy to apply theming changes without manually updating each component. They also help keep designs aligned with Salesforce’s branding.

### How does SLDS 2 ensure accessibility?

SLDS 2 adheres to the Web Content Accessibility Guidelines (WCAG 2.1), ensuring compatibility with screen readers and other assistive technologies. Accessible design features include:

- ARIA roles and labels on components.
- Keyboard-friendly navigation and focus management.
- High contrast ratios and clear visual indicators.

### Is SLDS 2 responsive?

Yes, SLDS 2 is fully responsive, allowing for layouts and components that adapt across devices and screen sizes. SLDS 2 includes a grid system, breakpoints, and utility classes to help create layouts that work on mobile, tablet, and desktop.

### Can I customize SLDS 2 components?

Yes, while SLDS 2 encourages consistency through use of Lightning Base Components, customization is supported through styling hooks. This approach allows designers and developers to align components with specific branding needs while benefiting from easy to maintain components and automatically consume component updates.

### Does SLDS 2 support themes and branding?

Yes, SLDS 2 supports theming by allowing designers and developers to adjust color, typography, and other styling hooks to fit brand-specific requirements. SLDS 2 theming ensures that branding changes apply globally.

### How often is SLDS 2 updated?

SLDS 2 is updated regularly, typically three times a year in alignment with Salesforce’s release cycle. These updates can include new components, accessibility improvements, and design updates to reflect changes in Salesforce’s design guidelines.

### Can I use SLDS 2 outside of Salesforce applications?

Yes, SLDS 2 can be used outside of Salesforce applications to bring a consistent Salesforce look to other platforms. Many organizations use SLDS 2 to create applications with a Salesforce-branded experience. However, it’s recommended to follow Salesforce’s guidelines when using SLDS 2 externally.

### What is the difference between SLDS 2 and Lightning Web Components (LWC)?

SLDS 2 is a design system offering guidelines, CSS, and reusable out-of-the-box base components, while Lightning Web Components (LWC) is a framework for building dynamic UI components in Salesforce

### How does SLDS 2 compare to other design systems like Material Design or Carbon?

While SLDS 2 shares similarities with design systems like Material Design and IBM’s Carbon, it’s tailored for the Salesforce ecosystem. SLDS 2 emphasizes Salesforce-specific UI patterns, navigation, and accessibility features. This ensures Salesforce apps have a familiar, cohesive look across various tools and interfaces.

### Where can I learn more and stay updated on SLDS 2?

Keep the learning going with the latest information:

TrailheadLearn best practices on working with SLDS 2 and Salesforce UX principles.Design Trailblazer CommunityDiscover valuable insights, design discussions, and questions about SLDS 2.Salesforce Developer ForumsConnect with other developers, ask questions, and find SLDS 2-specific discussions.

