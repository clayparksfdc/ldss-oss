---
title: "Notifications - Delivery Channels"
slug: "notifications--delivery-channels"
category: "pattern"
parent: "notifications"
order: 0
---

## **Out-of-App Notifications**

Salesforce notifications can extend beyond the app to channels like email and SMS. These out-of-app communications reinforce user connection and make pertinent, actionable information more accessible.

### Guidelines for Out-of-App Channels

The priority of an in-app notification determines its corresponding out-of-app communication strategy.

* **Urgent notifications** should be accompanied by immediate email and SMS messages, when available.
* **Standard notifications** are typically accompanied by emails. To minimize notification fatigue, these emails can be consolidated into daily or weekly digests.
* **Discreet notifications** aren’t accompanied by any out-of-app communication.

### Email Digest Best Practices

Email digests are a great way to handle non-urgent notifications.

* **Urgent Notifications:** Emails must be sent immediately. They should never be delayed or included in a digest.
* **Standard and Discreet Notifications:** Consolidate unread standard notifications into a digest. To keep digests relevant, read notifications should be excluded.

| Rule | Image | Caption | Description |
| :--- | :--- | :--- | :--- |
| Do | ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/3kA2MIIlS8IRFMQ6WumW8w.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042845Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b37c162f7006fe1e000fd69c263ba5ab8370b87f5e66956ac5e5a9339a09797d) |   | Do accompany every urgent notification with an immediate email. |
| Don't | ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/IVtkdH8l9pTZLa0ERbaewQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042845Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ce40520c82330fd2279172eca80bb99a48cd9d81e90d93c571ef1456bca0faff) |   | Don't delay email associated with urgent notifications, or wait to include them in email digests.
 |
| Do | ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/ekJ3ZtKCPtTUWJC4SvPZLg.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042845Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1a6f34d9236666d89d9baf20281041aa871c844d451fd30f6e2db575d8b1c440) |   | Do consolidate unread non-urgent notifications in an email digest.
 |
| Don't | ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/e8lM_1sjTHGzOfYG4WZFsQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042845Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=61202f28fd7a982acd5627a61368fc5d314d1d297a5bc731623bde42c3861449) |   | Don't include read notifications in an email digest.
 |

## Native Mobile Push Notifications

On mobile devices, push notification behavior is governed by the device's operating system. Apple's Push Notification Service, for example, handles delivery for iOS devices, while Android uses services like Google Cloud Messaging.

This means that if the Salesforce app is open, notifications can appear within the app. If the app is closed, the device's OS delivers the notification directly to its native notification center.
