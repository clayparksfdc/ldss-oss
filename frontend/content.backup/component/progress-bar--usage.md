---
title: "Progress Bar"
description: "The Progress Bar is a visual indicator that shows the ongoing progress of a task, indicating that a user’s request is being processed."
category: "component"
slug: "progress-bar--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- The Progress Bar is a visual indicator that shows the ongoing progress of a task, indicating that a user’s request is being processed.
- Displays progress from 0% to 100%, giving users feedback on the status of long-running processes or time remaining on a task.
- Useful to provide users with real-time feedback for linear, predictable operations like file uploads or downloads.


The Progress Bar is a visual indicator that shows the ongoing progress of a task, indicating that a user’s request is being processed.

Displays progress from 0% to 100%, giving users feedback on the status of long-running processes or time remaining on a task.

Useful to provide users with real-time feedback for linear, predictable operations like file uploads or downloads.

## Usage

### Best Practices

- Use the Progress Bar to show task completion especially when a process is time-consuming.
- If possible, display the percentage of completion so users have a clear understanding of how much is left.
- Avoid cluttering the Progress Bar with too many labels or indicators. Use concise text and clear visuals.


Use the Progress Bar to show task completion especially when a process is time-consuming.

If possible, display the percentage of completion so users have a clear understanding of how much is left.

Avoid cluttering the Progress Bar with too many labels or indicators. Use concise text and clear visuals.

### When Not to Use

- Avoid using a Progress Bar for tasks that are completed in less than a few seconds. Instead, use a spinner or loading indicator.
- Don’t use the Progress Bar if your process requires user input or decisions at each step. Use a [Progress Indicator](https://zeroheight.com/2e1ef8501/p/64d280-progress-indicator) instead.


Avoid using a Progress Bar for tasks that are completed in less than a few seconds. Instead, use a spinner or loading indicator.

Don’t use the Progress Bar if your process requires user input or decisions at each step. Use a [Progress Indicator](https://zeroheight.com/2e1ef8501/p/64d280-progress-indicator) instead.

## Types

| <h3>Base</h3>**A horizontal bar that fills from left to right to indicate progress. <strong>Use case****I**deal for general progress tracking like file uploads or loading data. |   |
| --- | --- |
|   |   |
| <h3>Vertical</h3>**A vertical bar that fills from bottom to top to indicate progress. <strong>Use case**Best for side panels, dashboards, or where vertical space is more readily available than horizontal. |   |


### Base

A horizontal bar that fills from left to right to indicate progress.

**Use case**

**I**deal for general progress tracking like file uploads or loading data.

### Vertical

A vertical bar that fills from bottom to top to indicate progress.

**Use case**

Best for side panels, dashboards, or where vertical space is more readily available than horizontal.

## Appearance

### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Bar Label**: (optional) Title describes the purpose of the process. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Progress Label**(optional)**: **Text to show additional information about the process such as percentages or numeric values. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Bar Value**: The colored segment indicating the progress. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Track**: The background container showing the full length of the progress bar. |


**Bar Label**: (optional) Title describes the purpose of the process.

**Progress Label**(optional)**: **Text to show additional information about the process such as percentages or numeric values.

**Bar Value**: The colored segment indicating the progress.

**Track**: The background container showing the full length of the progress bar.

### Customization Options

#### Bar Label

The Bar label can be added to describe the purpose of the progress bar.

#### Progress Label

A progress label can be added to the progress bar to provide the user with additional details about the loading process. Percentages and numbers need to use a variable to align with the loading position of the Bar Value.

### Size

The Progress Bar is responsive and adjusts to the width of its parent container. Additionally, it offers four thickness sizes: extra small, small, medium, and large. Each type of Progress Bar can use these sizes.

#### Radius

Each size also supports the radius modifier, allowing for rounded variants.

### UI Content

#### Bar Label

- Use clear, descriptive names that make sense on their own. For example, use “Download Progress” instead of just “Progress.”
- Aim for concise labels—one or two words if possible.
- Use Title Case. Capitalize the main words.


Use clear, descriptive names that make sense on their own. For example, use “Download Progress” instead of just “Progress.”

Aim for concise labels—one or two words if possible.

Use Title Case. Capitalize the main words.

#### Progress Label

- Progress Label can be a general phrase like, “Download Initializing” or can provide values of the process being completed “24/68 files”.
- Use short, descriptive labels (e.g., "5.6 of 10MB") or percentages ("50% complete").


Progress Label can be a general phrase like, “Download Initializing” or can provide values of the process being completed “24/68 files”.

Use short, descriptive labels (e.g., "5.6 of 10MB") or percentages ("50% complete").

## Behaviors

### States

1. **Default: **When the bar percentage is not filled (0%).
2. **Active: **The ongoing progression of a task, visually represented by the bar gradually filling from 0% to 100%.
3. **Complete: **The finished bar value is at 100% when the process is completed. Alternatively, a success Progress Bar can be used to show the completed process.


**Default: **When the bar percentage is not filled (0%).

**Active: **The ongoing progression of a task, visually represented by the bar gradually filling from 0% to 100%.

**Complete: **The finished bar value is at 100% when the process is completed. Alternatively, a success Progress Bar can be used to show the completed process.

### Validation

#### Error Messaging

- The Progress Bar does not have a built-in error state or indeterminate state. Use one of the following to notify users when a process fails to complete:<ul><li>Inline Text</li><li>Toast</li><li>Scoped Notification</li></ul>
- Inline Text
- Toast
- Scoped Notification
- Best practices for error messaging:<ul><li>Ensure clarity and conciseness in error messages.</li><li>Provide guidance on how users can resolve the issue.</li><li>Position error messages near the relevant component for better visibility.</li></ul>
- Ensure clarity and conciseness in error messages.
- Provide guidance on how users can resolve the issue.
- Position error messages near the relevant component for better visibility.


The Progress Bar does not have a built-in error state or indeterminate state. Use one of the following to notify users when a process fails to complete:

- Inline Text
- Toast
- Scoped Notification


Inline Text

Toast

Scoped Notification

Best practices for error messaging:

- Ensure clarity and conciseness in error messages.
- Provide guidance on how users can resolve the issue.
- Position error messages near the relevant component for better visibility.


Ensure clarity and conciseness in error messages.

Provide guidance on how users can resolve the issue.

Position error messages near the relevant component for better visibility.

| <h4>**Success**</h4>A success variant can be added to a progress bar to signify when the process was completed. |   |
| --- | --- |
|   |   |


#### Success

A success variant can be added to a progress bar to signify when the process was completed.

## Related Components
