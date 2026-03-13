---
title: "Display Density"
description: "Density settings control global spacing, but different screen sizes require additional responsive adjustments."
category: "general"
slug: "custom-configurations"
status: "published"
lastModified: "2026-03-11"
---

## Responsive Density

Density settings control global spacing, but different screen sizes require additional responsive adjustments.

1. Use SLDS's standard CSS media queries (30em, 48em, 64em, 80em).
2. Apply appropriate SLDS var styling hooks within each media query breakpoint.
3. Test thoroughly across device sizes in both density settings.


Here’s an example of cell padding for a responsive table.

CSS<button aria-label="Copy code">*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>*</button>css /* Default (Mobile-first) padding */ .my-custom-table td, .my-custom-table th { padding: var(--slds-g-spacing-var-1); /* Smallest padding for narrow screens */ } /* Medium screens and up (768px+) */ @media (min-width: 48em) { .my-custom-table td, .my-custom-table th { /* Increase padding for tablets / small laptops */ padding: var(--slds-g-spacing-var-3); } } /* Large screens and up (1024px+) */ @media (min-width: 64em) { .my-custom-table td, .my-custom-table th { /* Use larger padding for standard desktops */ padding: var(--slds-g-spacing-var-4); } }

### Custom Component Considerations

Keep these considerations in mind as you build custom components that you want to respond to density.

- **Analyze similar SLDS components:** See how they adapt and follow similar patterns.
- **Identify which elements need to adapt:** Not everything needs to respond to density changes.
- **Use appropriate styling hooks:** Select hooks that match the property's purpose.
- **Test in both density settings:** Verify that your component works well in comfy and compact.


### 

### Test Your Custom Density Implementation

**Make sure that your interfaces work well across display density settings.**

- Test the same screens in both comfy and compact settings.
- Check the rendering in different screen regions and viewports.
- Verify that touch targets remain accessible in compact setting.
- Confirm that text remains readable and the hierarchy is maintained.
- Verify that localized content displays properly in both density settings.

