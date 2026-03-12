---
title: "Tabs - Accessibility"
slug: "tabs--accessibility"
category: "component"
order: 0
---

## Interactions

### Mouse

- Users can click tabs or the overflow menu to switch content.

### Keyboard

- **Tab:** Navigates into and out of tab panels.
- **Shift+Tab:** Moves focus back to the selected tab when focus is on first element in a tab panel.
- **Arrow keys:**Move between tabs.
-**Enter/Space:** Activate the overflow menu.

### Other

**Screen Readers:** Tabs are announced using roles like `tablist`, `tab`, and `tabpanel`

**Magnifiers and High Contrast:** Clear focus indicators and labels ensure usability.

**Alternative Input Devices:** Voice commands should allow users to select tabs by their label, while sip-and-puff devices can navigate tabs through keyboard emulation.

## Design Considerations

- Use concise, clear labels.
- Place commonly used tabs to the left for logical task flow.

## Development Considerations

**Markup**

The following markup is crucial for Accessibility:

- Selected tab’s anchor has `aria-selected="true"`, all other tabs’ anchors have `aria-selected="false"`
- Selected tab’s anchor has `tabindex="0"`, all other tabs have `tabindex="-1"`
- Each tab’s anchor has an `aria-controls` attribute whose value is the id of the associated `<div role="tabpanel">`
- Each tab panel has an `aria-labelledby` attribute whose value is the id of its associated `<a role="tab">`
**JavaScript Needs**

The active tab has two markup requirements:

- The `.slds-active` class should be placed on the li with `.slds-tabs_{variant}__item.`
- The corresponding `.slds-tabs_{variant}__content` container receives `.slds-show`.
- In order to achieve the focus state styling, apply `.slds-has-focus` to the parent `li`.
- Inactive `.slds-tabs_{variant}__content` containers receive `.slds-hide`.
- When the user clicks a different tab, move the `.slds-active` class and toggle the `.slds-hide/.slds-show` classes.

**Error Handling**

Include accessible feedback for loading errors, such as toasts or alerts.

## Accessibility Labels

**ARIA Roles**:

Tabbed UIs have three parts with specific ARIA role requirements:

- The tab list, which should have `role="tablist"`
- The tabs in that list, which should each be an `<a role="tab">` anchor wrapped in a `<li role="presentation">` list item
- The tab panels, which display each tab’s content and should each have `role="tabpanel"`

The tabs in that list, which should each be an `<a role="tab">` anchor wrapped in a `<li role="presentation">` list item

If additional context is needed for a tab’s purpose, use `aria-describedby` with a description that screen readers can interpret.
