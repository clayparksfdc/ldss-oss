---
title: "Display Density - Overview"
slug: "display-density--overview"
category: "foundation"
parent: "display-density"
order: 0
---

An artistic depiction of display density.

## About

Display density controls the spacing and layout of interface elements within a given screen area. Salesforce Lightning Design System 2 (SLDS 2) offers two density settings, comfy and compact. Comfy, the default setting, places the labels on top of the fields and adds more space between page elements. The compact setting increases visual density with labels on the same line as the fields and less space between lines.

Display density is a user preference setting. Because users select which display density setting to use, Salesforce interfaces are designed to work well in both. Here’s how you can design with display density in mind too.

Side-by-side comparison showing the same interface in comfy and compact

## Comfy

Comfy is the default density setting in Salesforce. The comfy setting offers a spacious view with increased vertical and horizontal spacing, and vertically stacked [form elements](/component/form-element).

### Comfy setting benefits:

- Better accommodation for localized content with longer text
- Enhanced visual separation for improved accessibility
- Reduced cognitive load and better scannability, particularly for new users

### Comfy setting considerations:

- Make sure that critical information remains prominent despite additional whitespace.
- Test with localized content to verify that the spacing accommodates longer text.
- Consider vertical scrolling requirements, as elements use more vertical space.

## Compact

Compact mode creates a denser view with reduced spacing between elements, more information visibility in the viewport, and horizontally stacked [form elements](/component/form-element).

### Compact setting benefits:

- Improved efficiency if working with large data sets
- Reduced scrolling for data-heavy screens
- More information is visible simultaneously

### Compact setting considerations:

- Verify that touch targets remain large enough for comfortable interaction.
- Make sure that text remains readable with the reduced spacing.
- Test how horizontal layouts behave in narrower viewports.

## User Control of Density

To personalize the look of Lightning Experience, a user clicks their profile image at the top of a Salesforce page, and then selects a display density. After a user changes their display density setting, the page automatically refreshes. Salesforce admins can also set org-wide defaults. As you design and develop, make sure that the interface adapts appropriately to both density settings.

## Density-Aware Styling Hooks

Use density-aware styling hooks if specific areas, components, spacing, and typographical elements require the ability to adapt or respond to a user’s density setting.

**Elements that typically benefit from density-aware styling hooks:**

- Data-dense components like tables, lists, and grids
- Form layouts and field arrangements
- Card and container padding
- Navigation and toolbar spacing

### Considerations

If you use density-aware styling hooks, make sure that you match the styling hooks with the appropriate properties.

- For top-bottom-left-right spacing: `--slds-g-spacing-var-[size]`
- For horizontal spacing:  `--slds-g-spacing-var-inline-[size]`
- For vertical spacing: `--slds-g-spacing-var-block-[size]`
- For font sizes: `--slds-g-font-scale-var-[size]`
- For font line height: ` --slds-g-font-lineheight-var-base`

For horizontal spacing:  `--slds-g-spacing-var-inline-[size]`

## SLDS Components with Built-in Density Support

SLDS includes several components with built-in density adaptation that automatically respond to density changes through variable styling hooks.

The following components include density-aware styling hooks, which enable automatic adjustments for different display densities.

- [Cards](/component/cards)
- [File selector](/component/file-selector)
- [Tabs](/component/tabs)

When using component blueprints, make sure that you use the standard SLDS markup patterns and CSS classes. The following component blueprints include density-aware styling hooks that can be configured:

- [Cards](/component/cards)
- [Feed](https://v1.lightningdesignsystem.com/components/feeds/)
- [File selector](/component/file-selector)
- [Page header](https://v1.lightningdesignsystem.com/components/page-headers/)
- [Path](https://v1.lightningdesignsystem.com/components/path/)
- [Split view](https://v1.lightningdesignsystem.com/components/split-view/)
- [Tabs](/component/tabs)

To reference component blueprints, see the [Salesforce Lightning Design System 1](https://v1.lightningdesignsystem.com/) website.
