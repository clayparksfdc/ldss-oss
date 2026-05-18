---
title: "Spinners"
slug: "spinners--usage"
category: "general"
url: "/component/spinners/b/225b69"
extractedAt: "2026-02-21T21:54:10.329Z"
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-spinner--base)

## Overview

Spinners provide feedback when a system action is in progress. They should be used sparingly and in situations where users need confirmation that an action is taking place.

* Spinners provide feedback that content is loading or an operation is in progress.
* Helps manage user expectations by signaling that the system is working.
* Should be used appropriately to avoid unnecessary distractions or confusion.

### Best Practices

* Use spinners only when an operation takes more than a second.
* Place the spinner near the relevant content or component.
* Ensure that spinners are accompanied by meaningful context or messages when necessary.
* Include a background overlay when placed on top of text or other content to ensure visibility.

### When Not to Use

* For extremely short operations (under a second), a spinner may not be visible long enough to be helpful.
* When an alternative visual cue, such as a progress bar or a stencil would provide better feedback.

## Types

| **Base (default)**  The default spinner uses the color Neutral 50.  | ![base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/9b7f96969d39df7e0f5ed0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042806Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9a78b2c681b828536504a5eb585ad9fd3ebeecd4584445d059500a2967d763f0) **base** |
| --- | :---: |
|   |   |
| **Brand**  Setting the variant type to ”Brand” matches the org’s brand color.  | ![brand](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/c4260ddd30411ba5ccdb4d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042806Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=50969e55e3db72b24dd3dae4006e56952a80c183fcb48199ad7496b59602a715) **brand** |
|   |   |
| **Inverse**  Use on dark backgrounds.    | ![inverse](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/887a0ee769eb81697c5983?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042806Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=97844d530ab068eb6eca28bfc4312c52c82b2a3d63c98c7f224bfbc56331bd99) **inverse** |
|   |   |

## Appearance

### Anatomy

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042806Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=702c4082a8dcd493ef6f9265645abe329fec69976905efe5af5a3090517eea95)  | **Spinner ball**: Six in total.  | ![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/d51298e4295564892418a5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042806Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d2b277aa11298230bf6d807db23e996d92c182c3dad3c1a94b4bd67c4359d398) **anatomy** |
| --- | --- | :---: |
|   |   |   |

### Customization Options:

* A white transparent background overlay may be added by using the `slds-spinner_container` class.

### Size

Spinners come in 5 sizes.

![sizes](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/dd337fc5ceda81b4efce5d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042806Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4c61249b958f18f16e68a52c707db1e916e3dbb69a0519262841a1f6edcb8dab)

**sizes**

---

## Behaviors

### Animation

* Spinners are animated


### Position

* Spinners should be centered in the viewport for full-page loading or the content container for localized operations.


### Loading

* Appears immediately when an action starts.
* Disappears when the process completes.
* Used when the loading time is non-determinate.

## Related Components
