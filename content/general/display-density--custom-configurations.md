---
title: "Display Density"
slug: "display-density--custom-configurations"
category: "general"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/805bbe-display-density/b/897aad"
extractedAt: "2026-02-21T21:38:18.449Z"
---

## Responsive Density

Density settings control global spacing, but different screen sizes require additional responsive adjustments.

1. Use SLDS's standard CSS media queries (30em, 48em, 64em, 80em).
2. Apply appropriate SLDS var styling hooks within each media query breakpoint.
3. Test thoroughly across device sizes in both density settings.
Here’s an example of cell padding for a responsive table.

### Custom Component Considerations

Keep these considerations in mind as you build custom components that you want to respond to density.

- **Analyze similar SLDS components:** See how they adapt and follow similar patterns.
- **Identify which elements need to adapt:** Not everything needs to respond to density changes.
- **Use appropriate styling hooks:** Select hooks that match the property's purpose.
- **Test in both density settings:** Verify that your component works well in comfy and compact.

### Test Your Custom Density Implementation

Make sure that your interfaces work well across display density settings.

- Test the same screens in both comfy and compact settings.
- Check the rendering in different screen regions and viewports.
- Verify that touch targets remain accessible in compact setting.
- Confirm that text remains readable and the hierarchy is maintained.
- Verify that localized content displays properly in both density settings.