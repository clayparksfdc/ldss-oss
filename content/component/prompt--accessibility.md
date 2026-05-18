---
title: "Prompt · Lightning Design System 2 - Accessibility"
slug: "prompt--accessibility"
category: "component"
parent: "prompt"
order: 0
---

## **Interactions**

### Mouse

* Users can interact with buttons or close the prompt by clicking on the confirmation button.
* Clicking outside the modal does not close the prompt to avoid accidental actions.

### Keyboard

* **Tab Key**: Moves focus between interactive elements within the modal in sequential order.
* **Shift + Tab**: Moves focus backward through interactive elements.
* **Enter**: Activates the currently focused button or link.
* **Escape**: Closes the modal.
* **Focus Trap**: When open, focus is trapped within the modal to prevent interaction with elements outside it.

![Prompt - Tab Order](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/d63205b135767d59a93807?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042808Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d80ccde59c49b1a7a5f9067d2642002330d538968bc335baaa49f09c5aec841f)

**Prompt - Tab Order**

---

### Other

* **Screen Readers:** Labels and roles are announced for each part (header, body, footer).
* **Braille Displays:** Content is structured for proper navigation and focus.

## **Design Considerations**

* Ensure prompts are visually distinguishable with clear text and high-contrast buttons.
* Maintain focus states on interactive elements.
* Use appropriate icons or visual cues in warning prompts.

## **Development Considerations**

* Define `aria-labelledby` and `aria-describedby` for header and body content.
* Implement focus management: initial focus on the primary button and return focus to the triggering element after closing.

## **Content Considerations**

* Provide clear and concise labels for buttons.
* Avoid ambiguous language; e.g., "Delete Record" instead of "Submit."
