---
title: "Notifications"
description: "Salesforce notifications can extend beyond the app to channels like email and SMS. These out-of-app communications reinforce user connection and make pertinent, actionable information more accessible."
category: "general"
slug: "notifications--delivery-channels"
status: "published"
lastModified: "2026-03-11"
---

## Out-of-App Notifications

Salesforce notifications can extend beyond the app to channels like email and SMS. These out-of-app communications reinforce user connection and make pertinent, actionable information more accessible.

### Guidelines for Out-of-App Channels

The priority of an in-app notification determines its corresponding out-of-app communication strategy.

- **Urgent notifications** should be accompanied by immediate email and SMS messages, when available.
- **Standard notifications** are typically accompanied by emails. To minimize notification fatigue, these emails can be consolidated into daily or weekly digests.
- **Discreet notifications** aren’t accompanied by any out-of-app communication.


**Urgent notifications** should be accompanied by immediate email and SMS messages, when available.

**Standard notifications** are typically accompanied by emails. To minimize notification fatigue, these emails can be consolidated into daily or weekly digests.

**Discreet notifications** aren’t accompanied by any out-of-app communication.

### Email Digest Best Practices

Email digests are a great way to handle non-urgent notifications.

- **Urgent Notifications:** Emails must be sent immediately. They should never be delayed or included in a digest.
- **Standard and Discreet Notifications:** Consolidate unread standard notifications into a digest. To keep digests relevant, read notifications should be excluded.


**Urgent Notifications:** Emails must be sent immediately. They should never be delayed or included in a digest.

**Standard and Discreet Notifications:** Consolidate unread standard notifications into a digest. To keep digests relevant, read notifications should be excluded.

## Native Mobile Push Notifications

On mobile devices, push notification behavior is governed by the device's operating system. Apple's Push Notification Service, for example, handles delivery for iOS devices, while Android uses services like Google Cloud Messaging.

This means that if the Salesforce app is open, notifications can appear within the app. If the app is closed, the device's OS delivers the notification directly to its native notification center.
