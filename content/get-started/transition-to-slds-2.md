---
title: "Transition to SLDS 2"
slug: "transition-to-slds-2"
category: "get-started"
order: 0
---

A step-by-step guide to get your Salesforce org up and running with the latest Lightning Design System, SLDS 2.

## Overview

Salesforce Lightning Design System 2 (SLDS 2), is a complete design framework that helps you create consistent, accessible, and scalable user interfaces across its applications and platforms. SLDS 2 provides you with tools, components, and guidelines to make apps that match Salesforce's design principles and visual language. Use this guide to learn what steps Salesforce admins, developers, and designers must take to transition orgs from SLDS 1 to SLDS 2.

⚠️ Note: This document doesn't pertain to the Classic to Lightning transition. It focuses instead on a Salesforce org's transition from the original Salesforce Lightning Design System (SLDS 1) to SLDS 2.

## Quick Start

### Transitioning to SLDS 2: 5-Step Process Overview

Follow these steps to successfully transition your Salesforce org from SLDS 1 to SLDS 2. Click each step for detailed instructions.

- **Setup & Assessment:** Create test environments and evaluate your org's readiness
- **Code Analysis:** Identify required changes in your code. Install and run SLDS Linter, then interpret the findings
- **Component Updates:** Implement necessary code modifications. Update tokens to styling hooks, replace hardcoded values
- **Testing:** Ensure functionality and visual consistency
- **Rollout:** Deploy changes and support end users. Create your communication strategy and go-live plan

The goal of this process is to modernize your Salesforce User Interface (UI) to create a delightful user experience. Following this process keeps things running smoothly for your users every step of the way. We've packed this guide with practical tips, real examples, and lessons learned from early SLDS 2-adopters who have made this transition already.

Ready to get started? Let's dive in!

## Who is this Guide for?

This guide is for Salesforce customers and ISV partners transitioning their existing Salesforce implementations to SLDS 2. Whether your organization has a handful of custom components or complex managed packages, this transition requires coordination across three key roles:

- **Administrators** lead the transition, handle change management, and ensure organizational readiness
- **Designers** maintain visual consistency and validate the user experience
- **Developers** implement code changes and validate code modifications

This guide provides detailed task lists and implementation guidance for each role throughout the process.

### SLDS 2 Transition Tasks by Role

Follow the key responsibilities for your role.

#### Admins

- Create and configure sandbox environments for testing
- Enable SLDS 2 in test environments
- Review your most-used pages and apps to identify areas needing attention
- Plan and coordinate the rollout with your development and design teams
- Manage end user communications

#### Designers

- Validate the visual consistency across your UI
- Use Salesforce's Figma kits to update design specifications (if needed)
- Support visual testing and quality assurance of custom components

#### Developers

- Set up development environments with SLDS 2
- Set up SLDS Linter in the development environment
- Run an initial code assessment report using SLDS Linter
- Update components based on SLDS Linter report
- Perform normal development code change testing (functionality, QA, performance)

## Why Transition Your Org to SLDS 2?

Transitioning your Salesforce org to SLDS 2 delivers a modern UI refresh that will delight your users.

SLDS 2 has been shown to make your UI easier to scan and complete tasks in. Moving to SLDS 2 ensures you can future-proof and take advantage of next-generation UX capabilities, including dark mode, advanced styling, and agentic capabilities. Moving to SLDS 2 improves code maintainability by using styling hooks, which are more flexible than the design tokens used in SLDS 1.

ℹ️ Frequently Asked Question: How much time will the SLDS 2 transition process take for my team?

The required effort to transition from SLDS 1 to SLDS 2 depends entirely on your organization's Salesforce implementation. For an implementation using only base components and styling hooks for customization, the SLDS 2 transition process requires very little effort. For heavily-customized implementations that were built using SLDS 2 anti-patterns, the transition process will require more engineering effort.

## Phase 1 of 5: Setup & Assessment

### Getting Started

The best way to start your SLDS 2 journey is simple — just turn it on in your sandbox. You might be surprised how many of your components work right out of the box. If you're already using Lightning base components and following Lightning Design System patterns, most of your UI will transition smoothly to the new design with no modifications needed.

### Initial Setup

#### Check That Your Salesforce Product and Edition is Eligible for SLDS 2

As of the Spring '25 release, SLDS 2 is available in new and existing orgs. However, not all Salesforce products and editions will be eligible to transition to SLDS 2 at the same time. Reference our help article for detailed information on availability.

- Minimum Salesforce version: Winter '25
- Supported browsers: Latest versions of Chrome, Firefox, Safari, and Edge

#### Set up a Test Environment

Create a dedicated sandbox or scratch org for SLDS 2 testing.

ℹ️ Note: Depending on your org's Salesforce product and edition, SLDS 2 and the Salesforce Cosmos theme may already be enabled. If it isn't, follow these instructions.

- Log into your org and open Setup.
- For Starter orgs, click Open Advanced Setup. For all other orgs, skip this step.
- In the Quick Find box, search for and select Themes and Branding.
- From the Salesforce Cosmos theme dropdown list, select Activate. Or create your own SLDS 2 theme.
- You may need to refresh the page to see the UI change take effect.

### Assessment Guide

After turning on SLDS 2, the next step to transitioning your org to SLDS 2 is to assess your code's unique characteristics and what they mean for your SLDS 2 transition. This assessment can help you plan your transition and be prepared for what's ahead.

This table shows some common features that may need special attention, as well as actions to take:

Codebase ElementsImpactRecommended ActionCustom Lightning Web Components and custom Aura ComponentsRequires manual validation.Run SLDS Linter and update your components as needed.Managed Package componentsTransition of the managed package components to SLDS 2 is dependent on the package vendor.During Phase 4, visually inspect any managed package component in your UI to test for unexpected visual behavior. If there is unexpected visual behavior, reach out to the package vendor.Visualforce pagesVisualforce pages that include the apex:slds component can display with SLDS 2 styling when SLDS 2 themes are active in the org.From Setup, in the Quick Find box, enter User Interface and select the User Interface settings page. To show SLDS 2 styling in your Visualforce pages, check Use SLDS 2 for pages that include <apex:slds> when an SLDS 2 theme is active.Lightning Out (Beta) implementationsNot currently supported by SLDS 2.No immediate action is possible. Optional: Document which of your components run via Lightning Out and tag them for future migration to SLDS 2.Salesforce Classic UINot currently supported by SLDS 2.No immediate action is possible. Optional: Plan your migration from Salesforce Classic to Lightning Experience.

### Tips & Best Practices

#### Quick Wins

- Start with high-traffic pages
- Focus on custom components first
- Document everything you find
- Take screenshots for before/after comparison

#### Common Pitfalls

- Don't enable in production without testing
- Don't skip visual inspection of managed packages
- Don't forget to check accessibility
- Don't assume all components need updates

## Phase 2 of 5: Code Analysis

### Getting Started

Now that you've enabled SLDS 2 and done your initial assessment, it's time to analyze your code to identify what needs updating. Don't worry — we've created tools to make this process as straightforward as possible. Use SLDS Linter to scan your code and tell you exactly what needs to change, why it needs to change, and how to update it.

### Understanding What to Look For

Before diving into the technical analysis, here are the main types of changes you might need to make:

- **Styling Updates:** Replacing old styling patterns with new ones (like updating design tokens to styling hooks)
- **Component Changes:** Adjusting custom components to work with the new design system
- **Deprecated Code:** Removing or updating deprecated patterns
- **Visual Fixes:** Addressing any visual inconsistencies

⚠️ Note: There's a lot to learn about uplifting your code to styling hooks. Read our Transition Your Code to Styling Hooks guide for all the details.

### Code Analysis: Role-Specific Steps

#### Administrators: Work with Your Development Team

- Share your assessment findings from the Setup and Assessment step
- Help prioritize which components to update first
- Plan any end-user testing cycles for updated components

#### Designers: Support Code Analysis

- Review SLDS Linter reports with developers
- Help prioritize which components to update first
- Document design requirements for components being updated

#### Developers: Install and Run Developer Tools to Analyze Your Codebase

Proceed to the next section for instructions on how to run SLDS Linter. This tool tells you how well your codebase adheres to SLDS 2 guidelines.

### Install and Run SLDS Linter to Analyze Your Codebase

#### Install SLDS Linter

- If it isn't installed already, install Visual Studio Code v.1.26 or later.
- Open your project in VS Code.
- In a VS Code terminal, enter `npx @salesforce-ux/slds-linter@latest lint` to run the installer.
- To install the SLDS Linter package, type `y`.

#### Run SLDS Linter

Use SLDS Linter to audit your code and identify components that must be updated to conform to SLDS 2 standards. For complete instructions on running SLDS Linter and interpreting its recommendations, read the SLDS Linter developer guide.

### Tips & Best Practices

#### Quick Wins

- Use SLDS Linter's auto-complete to check your code as you write it
- Focus on high-priority pages and components first
- Document your process

#### Common Pitfalls to Avoid

- Don't try to fix everything at once
- Don't skip creating a backup
- Don't forget to test each change

## Phase 3 of 5: Component Updates

### Getting Started

Now that you've analyzed your code with SLDS Linter, it's time to implement the necessary changes. Don't feel overwhelmed — you can tackle these updates incrementally. Many changes are straightforward styling updates, and we'll guide you through the more complex modifications.

### Component Updates: Role-Specific Steps

#### Administrators: Coordinate with Your Development Team

- Testing plans
- User communication
- Monitor progress and gather feedback
- Plan end-user training if needed

#### Designers: Support Component Updates

- Review visual changes
- Ensure design consistency
- Validate accessibility
- Document design decisions

#### Developers: Update Components

Proceed to the next section for instructions for updating your components.

### Update Your Components

#### Implement SLDS Linter Recommendations

Use SLDS Linter to review and accept recommendations.

ℹ️ Note: For more detailed instructions on using SLDS Linter, read the SLDS Linter developer guide.

Use the Figma kits to support any new designs or customizations.

ℹ️ Note: Many fixes require human action, as SLDS Linter often provides multiple recommendation options for each of its suggestions. For specific before-and-after code examples, see Transition Your Code to Styling Hooks documentation.

⚠️ A Note on UI Automation Testing: If you have UI testing code, you may need to update this code to work with SLDS 2. This is especially true if the tests check visual properties like colors, spacing, or layout. Consider running your automation suite in your test environment to identify affected tests. Tests that use stable selectors, like IDs, rather than visual properties are less likely to need updates.

## Phase 4 of 5: Testing

### Getting Started

Now that you've updated your components, it's time to ensure everything works as expected. Testing SLDS 2 updates involves both standard development testing and specific visual validation. The goal is to verify that your components not only function correctly, but also look and behave consistently with the new design system.

### What to Test

Your testing should cover these areas:

#### Functional Validation

- Test user interactions, such as clicks and hovers, and verify they work as expected
- Confirm that data and display are handled properly

#### Visual Regression Testing

- Verify layout and responsive behavior
- Check spacing, padding, and alignment
- Validate color contrast for accessibility
- Review typography and text formatting
- Test across different viewport sizes

Testing across different customer environments, if applicable: If you're a managed package provider, you may have components that are built to work with SLDS 1 and SLDS 2 to support customers with varying SLDS 2 adoption statuses. In that case, perform visual testing of your updated code for both SLDS 1 and SLDS 2 environments.

ℹ️ What parts of your code should you prioritize testing first? Return to the org assessment guide that you completed, and start with the code that you believe is likely to require manual changes. Visually inspect any codebase elements previously identified as needing special attention to see if these parts of your user interface look as expected.

## Phase 5 of 5: Rollout

### Getting Started

You've successfully updated and tested your components with SLDS 2! Now your code is ready to deploy to your users. Follow these steps:

- Re-run SLDS Linter on your updated code to double-check that errors are resolved.
- If you haven't completed one yet, perform a visual regression test of your design.
- Optional: Create and send out communications to your customers, such as release notes and blog posts, to announce the UI change.
- Optional: Provide post-release feedback to Salesforce's UX Foundations team.

### Announcing Your SLDS 2 Rollout

Change management communication can greatly improve the success of your transition to SLDS 2. Here's a template you can personalize and send to notify impacted users before activating the new design theme in your organization:

Coming Soon: A Salesforce visual design refresh!We're excited to announce that on [Date], the user interface design of our Salesforce application will be updated to a new visual design theme, Salesforce Cosmos. The new Salesforce Cosmos theme is built on the Salesforce Lightning Design System 2 (SLDS 2), the latest design system for Salesforce products that will future-proof the foundational design of our application.

While adapting to change can be challenging, you can continue to confidently navigate Salesforce as these styling improvements don't affect Salesforce functionality. With the refreshed design, you'll benefit from these intuitive enhancements:

A modern, simplified visual design with increased spacing that conveys calmness and clarityIntentional use of colors and contrast to easily identify important informationCircular motifs and more legible fonts that let you take action with confidenceBuilt-in accessibility for a range of diverse usersCompatibility with features such as dark mode (beta)If you have any questions about the Salesforce design refresh, feel free to reach out to [Contact].

## Conclusion

Congratulations! Cue the confetti! You've successfully completed your transition to SLDS 2, bringing a modern, accessible, and future-ready design system to your Salesforce organization.

## Resources Mentioned in this Guide

### SLDS 2 Overview

- [Salesforce Lightning Design System 2](/get-started/get-started)
- Salesforce Help: Salesforce Cosmos and SLDS 2 Theme Availability

### Tools and Guidelines for Developers

- SLDS 2 Website: SLDS 2 Development Best Practices
- [SLDS 2 Website: Styling Hooks](/develop/global-styling-hooks)
- Developer Documentation: SLDS Linter Developer Guide

### Tools and Guidelines for Designers

- Figma Kit: Style Guide - SLDS Web Components v2
- Figma Kit: Components for Web | Lightning Design System v2
- [SLDS 2 Website: Components](/components/accordion)

### Community & Support

- Trailblazer Community: SLDS 2 Trailblazer Group
- Trailblazer Community: Salesforce Developer Forums

### Classic to Lightning Transition

- Salesforce Help: Transition from Classic to Lightning UI
