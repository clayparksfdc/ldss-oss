---
title: "Text and Color Contrast"
slug: "text-and-color-contrast"
category: "foundation"
url: "https://www.lightningdesignsystem.com/2e1ef8501/p/99d436-text-and-color-contrast"
extractedAt: "2026-02-21T22:00:08.494Z"
---

Color plays a critical role in web design, but it must be used thoughtfully to ensure an inclusive experience for all users. People with visual impairments, color vision deficiencies, or other disabilities may interact with your content differently than you might expect. By following accessibility best practices for color usage, you can make your applications usable and understandable for everyone.

## Text and Color Best Practices

### Never Rely on Color Alone

Color should not be the sole means of conveying information, prompting an action, or providing feedback. Ensure that:

- Text labels or icons accompany color-coded indicators.
- Shapes, patterns, or labels are used to differentiate elements, in addition to color.
Example:

- In addition to using a red border to indicate an error, include a clear error message, such as “This field is required.”

### Maintain Adequate Contrast

Ensure that text and important visual elements have sufficient contrast against their background. This helps all users, including those with low vision or color vision deficiencies, read and understand your content.

#### Contrast Ratio Guidelines:

- For regular text and icons: **Minimum contrast ratio of 4.5:1**
- For large text (18pt or 14pt bold):**Minimum contrast ratio of 3:1**
- For links**:** When placing links within blocks of text, use both color and **underline** to differentiate the interactive link from its surrounding non-interactive text to meet contrast requirements.
Use tools like color contrast analyzers to verify compliance with these standards.

Example:

- A light gray text (#999999) on a white background (#FFFFFF) fails contrast requirements, while dark gray text (#333333) on white background (#FFFFFF) passes.

### Consider Color Vision Deficiency (CVD)

People with CVD may have difficulty distinguishing between certain colors, like red and green. Design with this in mind by:

- Avoiding problematic color combinations (e.g., red and green, blue and purple).
- Using patterns, textures, or labels to supplement color differentiation.
Example:

- Use striped backgrounds or icons to distinguish categories in charts or graphs, rather than relying solely on color.

### Use Styling Hooks

Using styling hooks allows your component to take any user-provided or selected themes, including high contrast mode or color blind themes.

### Examples

#### Form Validation

Incorrect: Highlighting errors with a red border alone.

Correct: Use a red border with an error icon and a clear message, such as "Please enter your email address."

#### Data Visualization

Incorrect: Differentiating chart categories only by color.

Correct: Combine color with patterns, shapes, or labels to distinguish data points.

