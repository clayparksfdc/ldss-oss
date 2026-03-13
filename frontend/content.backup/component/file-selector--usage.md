---
title: "File Selector"
description: "Used to upload files for tasks such as attaching documents to records or sharing media."
category: "component"
slug: "file-selector--usage"
status: "published"
lastModified: "2026-03-11"
---

## Overview

- Used to upload files for tasks such as attaching documents to records or sharing media.
- Drag files onto the component or click the Upload Files button to browse your device to find and upload files.
- Provides immediate feedback on the upload status.


Used to upload files for tasks such as attaching documents to records or sharing media.

Drag files onto the component or click the Upload Files button to browse your device to find and upload files.

Provides immediate feedback on the upload status.

### Best Practices

- Place the file selector prominently on the page to make it easy to find.
- To guide users, add clean labels and instructions next to the file selector.
- Use validation messages to communicate with users about file size limits or unsupported formats.
- Provide users with feedback during the upload process.


Place the file selector prominently on the page to make it easy to find.

To guide users, add clean labels and instructions next to the file selector.

Use validation messages to communicate with users about file size limits or unsupported formats.

Provide users with feedback during the upload process.

### When Not to Use

- Don't use the file selector for actions that aren't related to files.
- Don't place the file selector next to unrelated input fields.


Don't use the file selector for actions that aren't related to files.

Don't place the file selector next to unrelated input fields.

## Types

| <h3>Base File Selector</h3>**A basic file upload opens a file browser or allows for drag and drop. <strong>Use case**To upload limited file types in forms, such as a single document for HR onboarding. |   |
| --- | --- |
|   |   |
| <h3>Image File Selector</h3>**An input field with a file selector that accepts a single PNG, JPG, or ZIP file. <strong>Use case**As a dedicated drop zone for single image files. |   |


### Base File Selector

A basic file upload opens a file browser or allows for drag and drop.

**<strong>Use case**

To upload limited file types in forms, such as a single document for HR onboarding.

### Image File Selector

An input field with a file selector that accepts a single PNG, JPG, or ZIP file.

**<strong>Use case**

As a dedicated drop zone for single image files.

## Appearance

### Base File Selector

#### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Field Label - **Describes the purpose of the file selector. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Button:** Opens the file browser. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Drop Zone**: A bordered area that invites users to drag and drop files. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Supporting Text:** Display error messages. |


**Field Label - **Describes the purpose of the file selector.

**Button:** Opens the file browser.

**Drop Zone**: A bordered area that invites users to drag and drop files.

**Supporting Text:** Display error messages.

#### Size

The file selector component adapts to fit any container, so your users have a consistent experience, no matter their screen size or layout.

#### Layout

Use at least 16px margin between the file selector and adjacent components.

### Image File Selector

#### Anatomy

| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Field Label: **Describes the purpose of the file selector. |
| --- | --- |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Button:** Button that invites users to browse and select files. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Drop Zone**: A bordered, rectangular area that invites users to drop files. |
| * <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* | **Supporting Text:** Located below the drop zone and displays an error message or a list of files that have been uploaded. |


**Field Label: **Describes the purpose of the file selector.

**Button:** Button that invites users to browse and select files.

**Drop Zone**: A bordered, rectangular area that invites users to drop files.

**Supporting Text:** Located below the drop zone and displays an error message or a list of files that have been uploaded.

#### Size

The image file selector's width adjusts to fill the available space.

### UI Content

- **Field Labels**: Use short, descriptive phrases that clearly indicate the purpose, such as “Upload Document” or “Attach File”.
- **Button Text**: Use clear, actionable language like “Select File” or “Browse”.
- **Instructions**: If needed, provide brief instructions for specific actions.
- **Supporting Text**: Keep error messages direct and helpful. Avoid technical jargon.


**Field Labels**: Use short, descriptive phrases that clearly indicate the purpose, such as “Upload Document” or “Attach File”.

**Button Text**: Use clear, actionable language like “Select File” or “Browse”.

**Instructions**: If needed, provide brief instructions for specific actions.

**Supporting Text**: Keep error messages direct and helpful. Avoid technical jargon.

## Behaviors

### States

#### Base & Image Drop Zone States

- **Default:** Standard appearance when no files are uploaded.
- **Hover:** Buttons highlight to show interactivity.
- **Drag over: **The drop zone borders change color to signal that the file can be dropped.
- **Drag over with error:** The drop zone shows a visual indicator, such as an error icon, to signal that the file can’t be dropped.
- **Disabled:** The component is unavailable if file uploads aren’t allowed.
- **File uploaded: **Shows a confirmation message that the file has been successfully uploaded.
- **Error: **If the file size or type is invalid, an error message appears below the component.


**Default:** Standard appearance when no files are uploaded.

**Hover:** Buttons highlight to show interactivity.

**Drag over: **The drop zone borders change color to signal that the file can be dropped.

**Drag over with error:** The drop zone shows a visual indicator, such as an error icon, to signal that the file can’t be dropped.

**Disabled:** The component is unavailable if file uploads aren’t allowed.

**File uploaded: **Shows a confirmation message that the file has been successfully uploaded.

**Error: **If the file size or type is invalid, an error message appears below the component.

### Interactions

- **Triggers: **Clicking the button or dropping a file into the drop area activates the upload.
- **Drag: **Supports moving files into the drop zone.
- **Expanded or collapsed:** Optional behavior, users can switch file previews on and off.
- **Image File Selector: **Optional cropping control.
- **Integrated File Selector: **Designed to be used in a form or workflow, so users can upload files directly as part of tasks like completing a form or submitting a request. This turns an entire container, such as a modal, composer, or page, into a file drop zone.


**Triggers: **Clicking the button or dropping a file into the drop area activates the upload.

**Drag: **Supports moving files into the drop zone.

**Expanded or collapsed:** Optional behavior, users can switch file previews on and off.

**Image File Selector: **Optional cropping control.

**Integrated File Selector: **Designed to be used in a form or workflow, so users can upload files directly as part of tasks like completing a form or submitting a request. This turns an entire container, such as a modal, composer, or page, into a file drop zone.

### Loading

During file upload, a spinner icon or progress bar indicates the status of the upload.

## Related Components
