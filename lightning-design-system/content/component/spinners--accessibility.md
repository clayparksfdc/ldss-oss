---
title: "Spinners - Accessibility"
slug: "spinners--accessibility"
category: "component"
parent: "spinners"
order: 0
---

## Interactions

### Mouse

- Spinners do not require direct interaction via mouse.
- Users should not be required to click or hover over a spinner for it to function.

### Keyboard

- Spinners are not focusable by default.
- When an operation is in progress, ensure that the spinner does not trap focus and that focus remains on actionable elements.
- If the spinner is part of a blocking operation, provide focus management (e.g., shifting focus back to the action that triggered loading).

### Other

- **Screen Readers:** Spinners should include accessible text (e.g., “Loading…”). This can be implemented using aria-live="assertive" to announce changes.
- **Magnifiers:** Ensure spinners remain visible on reflow.

## Design Considerations

- Ensure spinners maintain a minimum contrast ratio of 3:1 against the background.
- If possible, supplement spinners with textual or alternative progress indicators for clarity.
- Position spinners near the element being updated for contextual clarity.

## Development Considerations

- Use ARIA attributes where relevant:

Set `aria-live="polite"` or `aria-live="assertive"` so screen readers notify users of the loading state.
- Apply `role="status"` when applicable.
- When the loading state ends, remove the spinner from the DOM or hide it with `aria-hidden="true"`.
- If a spinner is blocking interaction, make sure focus is managed appropriately, returning to a relevant action once loading is complete.
- Honor the prefers-reduced-motion setting to disable animations when needed.

- Set `aria-live="polite"` or `aria-live="assertive"` so screen readers notify users of the loading state.
- Apply `role="status"` when applicable.

## Content Considerations

- Loading messages should be clear and concise. Use simple terms like “Loading records…” instead of vague phrasing.
- Avoid redundant labels. If the spinner is already associated with a loading message, do not add duplicate screen reader text.
- Ensure translated messages maintain clarity in different languages.
