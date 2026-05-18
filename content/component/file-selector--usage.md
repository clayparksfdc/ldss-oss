---
title: "File Selector"
slug: "file-selector--usage"
category: "component"
parent: "file-selector"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-fileselector--base)

## Overview

* Used to upload files for tasks such as attaching documents to records or sharing media.
* Drag files onto the component or click the Upload Files button to browse your device to find and upload files.
* Provides immediate feedback on the upload status.

### Best Practices

* Place the file selector prominently on the page to make it easy to find.
* To guide users, add clean labels and instructions next to the file selector. 
* Use validation messages to communicate with users about file size limits or unsupported formats.
* Provide users with feedback during the upload process.

### When Not to Use

* Don't use the file selector for actions that aren't related to files.
* Don't place the file selector next to unrelated input fields.

## Types

| **Base File Selector**  A basic file upload opens a file browser or allows for drag and drop. **Use case** To upload limited file types in forms, such as a single document for HR onboarding.  | ![base file selector](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/17c92741039c42f92f1627?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c47d1770bd1dd422b42b27db0930c6e92f9ac77643e0bf4db2ddb661c6c88392) **base file selector** |
| --- | :---: |
|   |   |
| **Image File Selector**  An input field with a file selector that accepts a single PNG, JPG, or ZIP file. **Use case** As a dedicated drop zone for single image files.  | ![image file selector](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/da70581cfc1ad82796ab65?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1f4860ec22be68ab0b229604321091d445caa26498844269c434f922c07cc222) **image file selector** |

## Appearance

### Base File Selector

#### Anatomy

![Anatomy - Base File Selector](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/5793b78765e5fcecab32f6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2c782d246ade064736fc08b9c2b59cfe1c57eed7db3dd3e95b852a3540ad645b)

**Anatomy - Base File Selector**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3d446533224c97a12a344365488d471484688b6342357b0003612f7585e41111) | **Field Label -** Describes the purpose of the file selector.  |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=20ad19b8161037253dd3ae0fb6be02ad928c671b544bb9434db966ae78505384) | **Button:**  Opens the file browser. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3340f8f1afa911d9eaebf634d37bc16a5029f02858c2a335cb79eec768ec687c) | **Drop Zone**: A bordered area that invites users to drag and drop files. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bb5b609306f713e1ded83f9e587340d7571fac2b6a95f6e04b0e27f862c013dc) | **Supporting Text:** Display error messages. |

#### Size

The file selector component adapts to fit any container, so your users have a consistent experience, no matter their screen size or layout.

#### Layout

Use at least 16px margin between the file selector and adjacent components.

### Image File Selector

#### Anatomy

![Anatomy - Image File Selector2](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/3250b5631a2a71e809ca46?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=85738a22b9a4acd072ead45609308ddc81795f0148db4c5c91c26f4581cb47ee)

**Anatomy - Image File Selector2**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3d446533224c97a12a344365488d471484688b6342357b0003612f7585e41111) | **Field Label:** Describes the purpose of the file selector.  |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=20ad19b8161037253dd3ae0fb6be02ad928c671b544bb9434db966ae78505384) | **Button:** Button that invites users to browse and select files. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3340f8f1afa911d9eaebf634d37bc16a5029f02858c2a335cb79eec768ec687c) | **Drop Zone**: A bordered, rectangular area that invites users to drop files. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bb5b609306f713e1ded83f9e587340d7571fac2b6a95f6e04b0e27f862c013dc) | **Supporting Text:** Located below the drop zone and displays an error message or a list of files that have been uploaded. |

#### Size

The image file selector's width adjusts to fill the available space.

### UI Content

* **Field Labels**: Use short, descriptive phrases that clearly indicate the purpose, such as “Upload Document” or “Attach File”.
* **Button Text**: Use clear, actionable language like “Select File” or “Browse”. 
* **Instructions**: If needed, provide brief instructions for specific actions.
* **Supporting Text**: Keep error messages direct and helpful. Avoid technical jargon.

## Behaviors

### States

#### **Base & Image Drop Zone States**

* **Default:** Standard appearance when no files are uploaded.
* **Hover:** Buttons highlight to show interactivity.
* **Drag over:** The drop zone borders change color to signal that the file can be dropped.
* **Drag over with error:** The drop zone shows a visual indicator, such as an error icon, to signal that the file can’t be dropped.
* **Disabled:** The component is unavailable if file uploads aren’t allowed.
* **File uploaded:** Shows a confirmation message that the file has been successfully uploaded. 
* **Error:** If the file size or type is invalid, an error message appears below the component.

### Interactions

* **Triggers:** Clicking the button or dropping a file into the drop area activates the upload.
* **Drag:** Supports moving files into the drop zone.
* **Expanded or collapsed:** Optional behavior, users can switch file previews on and off.
* **Image File Selector:** Optional cropping control.
* **Integrated File Selector****:** Designed to be used in a form or workflow, so users can upload files directly as part of tasks like completing a form or submitting a request. This turns an entire container, such as a modal, composer, or page, into a file drop zone.

![Interaction - Integrated File Selector](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/db9d06aea5be76d2faeba8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042755Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6afdf69c0aa77ca651229567a7ab7f08678b8a7e47364cf7b83a32ab3ddca73d)

**Interaction - Integrated File Selector**

---

### Loading

During file upload, a spinner icon or progress bar indicates the status of the upload.

## Related Components
