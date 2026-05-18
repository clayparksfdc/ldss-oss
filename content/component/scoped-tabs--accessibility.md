---
title: "Scoped Tabs - Accessibility"
slug: "scoped-tabs--accessibility"
category: "component"
parent: "scoped-tabs"
order: 0
---

## Interactions

### Mouse

Users can interact with Scoped Tabs using mouse clicks to switch between tabs, close tabs (if closable), and access the overflow dropdown for hidden tabs. Ensure clickable areas are large enough for easy interaction.

### Keyboard

Scoped Tabs support the following keyboard interactions:

* **Tab:** Navigate into and out of tab panels. 
* **Shift+Tab**: Moves focus back to the selected tab when focus is on first element in a tab panel.
* **Arrow keys:** Move between tabs.
* **Enter/Space:** Activate the overflow menu.

![Scoped Tabs - Tab Order](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/5d2f212a42c4b6d213de60?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042743Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fb2f40aeb6cb70a026dd7898a45866b513e8de5b5b7a5a4f9eb9ed4217c47795)

**Scoped Tabs - Tab Order**

---

### Other

**Screen Readers:** Tabs are announced using roles like `tablist`, `tab`, and `tabpanel` .

**Magnifiers and High Contrast:** Clear focus indicators and labels ensure usability.

**Alternative Input Devices:** Voice commands should allow users to select tabs by their label, while sip-and-puff devices can navigate tabs through keyboard emulation.

## Design Considerations

* Use clear and concise labels for tabs.
* Avoid using color as the only visual indicator.
* Ensure sufficient contrast between text and background.
* Validate that tab focus states are visually distinct.

## Development Considerations

* Implement proper ARIA roles (`tablist`, `tab`, `tabpanel`).
* Add accessible labels for tabs and content areas.
* Ensure keyboard navigation works seamlessly.
* Verify that dynamically added or removed tabs maintain accessibility standards.

## Content Considerations

* Use short and descriptive labels for clarity.
* Avoid jargon or abbreviations that might confuse users.
