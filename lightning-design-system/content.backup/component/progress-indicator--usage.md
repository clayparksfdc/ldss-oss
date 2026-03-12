---
title: "Progress Indicator"
description: "Guides users through multi-step processes by providing a clear representation of progress."
category: "component"
slug: "progress-indicator--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- Guides users through multi-step processes by providing a clear representation of progress.
- Commonly used in wizards, onboarding flows, and step-by-step workflows.
- Indicates completed, current, and pending steps, supporting clear navigation and task tracking.


Guides users through multi-step processes by providing a clear representation of progress.

Commonly used in wizards, onboarding flows, and step-by-step workflows.

Indicates completed, current, and pending steps, supporting clear navigation and task tracking.

## Usage

Progress indicators make it simple to navigate multi-step processes. They provide context so users always know where they are in the flow and what to expect next.

### Best Practices

- Use for processes with three or more steps.
- Label steps with actionable language (for example "Verify Account" rather than "Step 3").
- Keep your process simple and easy to follow. If there are more than six steps, group them logically.


Use for processes with three or more steps.

Label steps with actionable language (for example "Verify Account" rather than "Step 3").

Keep your process simple and easy to follow. If there are more than six steps, group them logically.

### When Not to Use

- For single-step actions or processes.
- When the steps don't follow a sequential order.
- In dynamic workflows with changing steps.


For single-step actions or processes.

When the steps don't follow a sequential order.

In dynamic workflows with changing steps.

## Appearance

The progress indicator visually represents the steps in a process. It consists of a horizontal or vertical track with evenly spaced steps, each represented by a circle or icon. Steps can be complete, active, or incomplete, using different styles to indicate progress.

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Completed Step:** Shows that the step was finished. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Current Step:** Highlights the active step. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Uncompleted Step:** Represents a step that hasn't started. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Error:** Shows that an error has occurred in the step. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Tooltip: **Displays the step label on hover. |


**Completed Step:** Shows that the step was finished.

**Current Step:** Highlights the active step.

**Uncompleted Step:** Represents a step that hasn't started.

**Error:** Shows that an error has occurred in the step.

**Tooltip: **Displays the step label on hover.

### Customization Options

#### Size

- Responsive: Adjusts to fit available horizontal or vertical space.
- Minimum Width: 320px for mobile layouts.


Responsive: Adjusts to fit available horizontal or vertical space.

Minimum Width: 320px for mobile layouts.

### UI Content

- Keep step labels concise, no more than 30 characters.


Keep step labels concise, no more than 30 characters.

## Behaviors

### States

The Progress Indicator has the following states:

1. **Default: **Neutral appearance with a grey dot.
2. **Hover:** Displays the step label in a tooltip.
3. **Active: **Indicates the currently selected step.
4. **Focus: **The step is selected when it receives focus.


**Default: **Neutral appearance with a grey dot.

**Hover:** Displays the step label in a tooltip.

**Active: **Indicates the currently selected step.

**Focus: **The step is selected when it receives focus.

### Interactions

| <h4>**Completed Step**</h4>Shows that the step was finished. |   |
| --- | --- |
|   |   |
| <h4>**Current Step**</h4>Highlights the active step. |   |
|   |   |
| <h4>**Uncompleted Step**</h4>Represents a step that hasn't started. |   |


#### Completed Step

Shows that the step was finished.

#### Current Step

Highlights the active step.

#### Uncompleted Step

Represents a step that hasn't started.

### Validation

Display an error state if users fail to complete required fields before progressing.

| <h4>**Error**</h4>Shows that an error has occurred in the step. |   |
| --- | --- |


#### Error

Shows that an error has occurred in the step.

## Related Components
