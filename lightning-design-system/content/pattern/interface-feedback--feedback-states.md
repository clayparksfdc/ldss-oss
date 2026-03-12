---
title: "Interface Feedback"
slug: "interface-feedback--feedback-states"
category: "pattern"
parent: "interface-feedback"
order: 0
---

## Feedback States

Feedback states are generated in response to direct user action. The tone and pronunciation of the feedback should mirror the urgency and consequence of that action. There are six key feedback states, each with specific scenarios and components.

### State Icons

Icons can be used within feedback components to visually communicate the nature of a message.


|  | **Icon** | **Icon Name** | **Use When** |
| --- | --- | --- | --- |
| 1 | *                                *  | Error | Something is wrong |
| 2 | *                                *  | Info | More information is available |
| 3 | *                                *  | Offline | User is in offline mode |
| 4 | *                                *  | Success | An action has been completed |
| 5 | *                                *  | Warning | There may be a problem |
| 6 | *                                *  | User | A user-related message is shown |
| 7 | *                                *  | Wrench | A maintenance-related message is shown |

An error state can appear when a form has issues, an action fails, content can't load, or a system issue occurs.

### Form Field Errors

When a user submits a form with one or more invalid fields, use a combination of field-level [**inline text**](/pattern/interface-feedback--feedback-states) and a[ **popover**](https://v1.lightningdesignsystem.com/guidelines/messaging/components/popovers/). The inline text displays a field-specific error, such as "Phone number cannot contain letters".The popover provides a high-level summary, like "Review the following fields: Phone Number".


| *                     A icon variant of error inline text and a form field error           *  | *                     An example of various error message types           *  |
| --- | --- |

#### Accessibility

For a single error, set focus on the invalid field. For multiple errors, display a summary message at the top of the page, set focus there, and provide a list of links that jump to each invalid field. This summary should be persistent and easily reachable.

### Incomplete Action Errors


| In the rare instance that a user submits an action but a system issue prevents it from completing, display an **error**[**toast**](/components/toast)**.** | *                     A red error toast           *  |
| --- | --- |

### Card Content Errors


| When data inside a component like a card can’t be loaded, display field-level [**inline text**](/pattern/interface-feedback--feedback-states)to explain the issue. | *                     An inline text error           *  |
| --- | --- |

### System Errors

- **During a Session:** When a system error affects the user's current session, display an **error**[**alert**](/pattern/interface-feedback--feedback-states).
- **At Random:** If a system error occurs randomly, display a [**prompt**](/component/prompt) to notify the user.


| *                     A system error alert           *  | *                     A system error alert with prompt           *  |
| --- | --- |

### Inaccessible Content

When a page's content is inaccessible, such as not found or insufficient privileges, display an [**Illustration with inline text.**](/component/empty-state)

An informational state appears when an item has an atypical status, an action has additional details, or a system status has changed.

### Status Information


| For a status change to a piece of content, display [**inline text**](/pattern/interface-feedback--feedback-states)** with an icon.** | *                     Icon variant inline text           *  |
| --- | --- |

### Additional Information


| After a successful action that has additional details, display an **informational**[**toast**](/components/toast)**.** | *                     An informational toast           *  |
| --- | --- |

### Admin-Related Status


| When an admin-related status applies to the user's session, display an** informational **[**alert.**](/pattern/interface-feedback--feedback-states) | *                     An alert displayed during an active session           *  |
| --- | --- |

### System-Related Information


| To communicate important but non-disruptive system information, display an **informational**[**toast**](/component/toast)or [**alert.**](/pattern/interface-feedback--feedback-states) | *                     A prompt that doesn't interrupt user workflow           *  |
| --- | --- |

A success state confirms that an action was completed as expected. The component used depends on how the action was triggered.

### Manual Action


| When an action is completed after direct user input, (like submitting a form, display a success [**toast**](/components/toast). However, don't use a toast if the action navigates the user directly to the newly created item. | *                     An example of interface feedback: A green success toast.           *  |
| --- | --- |

### Automatic Action


| When an action is completed automatically, like auto-saving a note, use [**inline text**](/pattern/interface-feedback--feedback-states). This is less obtrusive and ideal for high-frequency validation. | *                     An example of inline text           *  |
| --- | --- |

A warning state communicates potential issues, nudges a user, or confirms a destructive action.

### Form


| When the system detects a potential issue in a form as it loads, such as duplicates, display[**inline text**](/pattern/interface-feedback--feedback-states)** with an icon.** | *                     An example of icon variant inline text           *  |
| --- | --- |

### Outdated


| To nudge a user to engage with an outdated item in a list, display a[**popover**](https://v1.lightningdesignsystem.com/guidelines/messaging/components/popovers/) next to the item. | *                     A warning popover coming out of a warning icon           *  |
| --- | --- |

### Incomplete Action


| When a user cannot complete an action due to external factors (like permissions), display a **warning**[**toast**](/components/toast)**.** | *                     A warning toast           *  |
| --- | --- |

### System Related


| When a system issue is impacting the current session, display a **warning**[**alert**](/pattern/interface-feedback--feedback-states)**.** | *                     A warning alert           *  |
| --- | --- |


| When a user attempts a destructive or high-impact action, display a [**modal**](/component/modals) to confirm their intent. | *                     A confirmation modal           *  |
| --- | --- |

#### Accessibility Note

This confirmation modal ensures that the experience meets WCAG 2.0 accessibility requirements.

## Empty States

An empty state is triggered when a component or page has no content to display.

### Empty Component


| When a single component has no items to show, display [**inline text.**](/pattern/interface-feedback--feedback-states) | *                     An empty component with inline text           *  |
| --- | --- |

### Empty Page


| When an entire page has no data or is inaccessible, display an [**illustration with inline text**](/foundations/illustrations)**. **  See [Empty State](/component/empty-state) for more details. | *                     An empty page displaying an illustration with inline text           *  |
| --- | --- |


| An offline state appears when a connectivity issue is detected. Display an **offline**[**alert**](/component/alert)or [**toast**](/component/toast) that persists until the connection is re-established. | *                     An alert letting the user know they are offline           *  |
| --- | --- |

## Transient

A transient state appears when the system is processing an action like saving or loading.

### General Actions


| Display[**inline text**](/pattern/interface-feedback--feedback-states) that automatically disappears once processing is complete. | *                     An example of inline text           *  |
| --- | --- |

### File Uploads


| Display a [**modal**](/component/modals) with a [**progress bar**](/component/progress-bar) that disappears upon completion. | *                     A modal with a progress bar           *  |
| --- | --- |
