---
title: "File Selector"
slug: "file-selector--accessibility"
category: "guideline"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/77d584-file-selector/b/74d5d4"
extractedAt: "2026-02-21T21:49:31.753Z"
---

## Interactions

### Mouse

- Users can interact with the File Selector component using a mouse by clicking the Button to open the file dialog. After selecting files, users can click the “Remove” icon to delete a selected file.
- The cursor will change to indicate clickable areas, such as a pointer cursor when hovering over interactive elements.
### Keyboard

The component supports keyboard interactions, allowing users to navigate through the File Selector using standard keyboard commands.

**Action**

**Key Command**

Focus on the component

Tab

Open file dialog

Enter/Space

Navigate through files

Arrow Keys

Submit the selection

EnterAction

Key Command

Focus on the component

Tab

Open file dialog

Enter/Space

Navigate through files

Arrow Keys

Submit the selection

Enter

When the component is loaded, the initial focus should be set on the Button, making it easy for keyboard users to begin interaction.

### Other

- Users relying on assistive devices, such as screen readers or speech recognition software, will navigate the component through verbal commands or keyboard shortcuts.
- Screen readers should announce the File Selector’s purpose and current state (e.g., how many files have been selected).
- Magnifiers and braille displays provide tactile feedback and visual enhancements to aid in interaction.
## Design Considerations

- All interactive elements are clearly labeled and distinguishable.
- Visual focus indicators are present to show users where they are within the component.
- Sufficient color contrast is maintained to ensure readability for users with visual impairments.
- Alternative text is provided for any icons or images used within the File Selector.
## Development Considerations

- Implementing ARIA attributes to enhance component descriptions for assistive technologies.
- Ensuring keyboard navigability throughout the component without getting trapped in any interactive elements.
- Testing the component with various assistive technologies to ensure compatibility and functionality.
## Content Considerations

- Clear and concise instructions regarding file upload processes.
- Error messages must be descriptive and provide guidance on how to resolve issues (such as file size limits).
- Any labels or instructional text must be legible and easy to understand.
## Accessibility Labels

The File Selector component should include appropriate accessibility labels for interactive elements such as buttons and inputs.

## Internationalization

Ensure that the File Selector component can accommodate various languages and regional settings, including proper translations of labels and error messages.

