---
title: "Builder · Lightning Design System 2"
slug: "builder"
category: "pattern"
order: 0
---

## Introduction


| A builder is a tool that lets everyone from developers and admins to business users create and customize applications and business processes. Developers and admins use builders such as Lightning App Builder, Experience Builder, Bot Builder, and Flow Builder to create interfaces for business users. Users can also create experiences for teams or customers with tools such as Journey Builder and Engagement Studio.  There are four main types of builder:  **Logic builders** visualize business processes, flows, or sequences.  **Content builders **are used to design and configure web pages and other visual elements.  **Data builders **help users develop reports and presentations featuring tables, charts, and graphs.  **Code builders **are used to develop code views and database schemas. | ### Start using our Design Kits                          [           *         ](https://www.figma.com/@salesforce)                       *  *           * ** ** **  [Open in Figma](https://www.figma.com/@salesforce) |
| --- | --- |

A builder is a tool that lets everyone from developers and admins to business users create and customize applications and business processes. Developers and admins use builders such as Lightning App Builder, Experience Builder, Bot Builder, and Flow Builder to create interfaces for business users. Users can also create experiences for teams or customers with tools such as Journey Builder and Engagement Studio.

There are four main types of builder:

- **Logic builders** visualize business processes, flows, or sequences.
- **Content builders **are used to design and configure web pages and other visual elements.
- **Data builders **help users develop reports and presentations featuring tables, charts, and graphs.
- **Code builders **are used to develop code views and database schemas.

### Start using our Design Kits

[Open in Figma](https://www.figma.com/@salesforce)

## Usage

When should you think about using a builder? Start, as always, with the user. If users will be doing one or more of these things, there could be a builder in your future:

- Working with WYSIWYG (“what you see is what you get”) declarative elements that can be added with clicks and customized with forms
- Designing a business process on a blank canvas
- Creating and defining a series of logical actions that result in different outputs
- Defining the relationship of one element to another—for example, in a workflow or visual layout
- Saving and tracking multiple drafts or versions
If a builder isn’t a good fit, consider using another framework, such as a [directional modal](https://www.lightningdesignsystem.com/2e1ef8501/p/01c12a-modals/t/8195981cc0), [Channel Studios on Marketing Cloud](https://www.salesforce.com/products/marketing-cloud/overview/), or use an [expression](https://v1.lightningdesignsystem.com/components/expression/), [form element](https://www.lightningdesignsystem.com/2e1ef8501/p/96252b), or [filter](https://www.lightningdesignsystem.com/2e1ef8501/p/58ff5f).

## Workflow

### Where to Launch a Builder

Depending on your target user, a builder can be opened from Setup, an app, or a record page.

#### For Admins and Developers Customizing Salesforce

- In Setup, launch the builder in full-screen mode.
- Make sure that the builder, its list-view, and any detail pages can be accessed from the builder home page in Setup.
| *                       *  A builder home page in Setup; blue brand button opens the builder  *           * ** ** ** | *                       *  A builder record page in Setup; blue brand button opens the builder  *           * ** ** ** |
| --- | --- |
|  |  |

A builder home page in Setup; blue brand button opens the builder

A builder record page in Setup; blue brand button opens the builder

#### For Salesforce App and Console Users

- Launch a builder from a relevant record detail page or app page. For example, Journey Builder can be launched from any Journey record page.
| *                     Launch a builder from a standard file list; use title text (blue links) or create a row-level action           * ** ** ** | *                     Launch a builder from a standard record detail page; use an action button (blue button) in the top right of the header           * ** ** ** |
| --- | --- |
|  |  |

Launch a builder from a standard file list; use title text (blue links) or create a row-level action

Launch a builder from a standard record detail page; use an action button (blue button) in the top right of the header

Record view in a Salesforce Console app; blue brand button opens the builder

- In Salesforce Console, a builder should open in a new window or browser tab—**not** in a console tab or subtab.
- A utility bar that overlays the interface can persist over a builder. If the user navigates away from the builder by clicking the utility bar, an alert should warn that unsaved changes may be lost. See [Modal usage](https://www.lightningdesignsystem.com/2e1ef8501/p/16a791) for warning messages.
- Builder record metadata can be represented in a console tab or sub-tab.

### Record Information: Names, Versions, and Statuses

Before opening a builder, start on the **record list** page, which includes a clear summary of **file names**, **versions**, and **statuses**. Display this information in the builder, in the record list, record detail, and builder header.

#### Record List

Display file name, version, and status in the builder list.

Builder home layout

#### Record Detail

To orient users without making them return to the builder, provide a dedicated view of file name and version(s) for each record.

File overview layout

#### Builder Header

The builder header should include the builder name, file name, and save status.

Builder header layout

*For more information about the Builder header, see *[*Header Guidelines*](https://www.lightningdesignsystem.com/2e1ef8501/p/44f418)* and *[*Builder Header*](https://v1.lightningdesignsystem.com/components/builder-header/)*.*

### Settings and Help

The top right of the builder’s header bar is reserved for links to builder-level settings and help documentation.

Builder options at the top right of the header bar

### Saving Builder Records

When working in a builder, users tend to save changes often. Some builders also let users activate, run, or publish.

Saving is a server-side snapshot of an object and its state. Note that saving does not equal approval to push an object for activation or publication; these are two separate actions. If saving does activate/publish a file or execute a process, explicitly call this out.

#### When and how can I save my builder objects?

- Use a Save button to initiate a server-side save of the entire object.
- When a builder allows manual saving, users should be allowed to save even when their work contains errors. (See [Validation](https://www.lightningdesignsystem.com/2e1ef8501/p/312197) for more information on messaging.)
- When a save also triggers activation/publication, allow the file to be saved without push. Alert the user to any errors blocking activation/publication.

#### What about versioning?

- Builders may allow object versioning. If your builder does so, let users clone or copy objects with a Save As command.
- If a builder autosaves (and creates auto-versions for each save), batch any changes into a new version. Make it easy for users to view and revert to previous versions.

#### What happens when I save with multiple records open?

- Multiple records can be viewed simultaneously in new browser windows or tabs.
- An explicit save affects only the record currently in focus—*not* other open records.
- When a user attempts to closes a browser window with unsaved records, display a warning that they will lose all unsaved changes.

#### Indicating Status

Clearly communicate the status of save, activate, and other actions, without overwhelming users or drawing focus from the task at hand.

*For more information, see *[*Status Text*](https://www.lightningdesignsystem.com/2e1ef8501/p/44f418-header/t/df5ebf1f46)* in the Header Toolbar section.*

### Autosave

Consider these principles when using autosave:

- **Confidence.** Make clear what is and isn’t saved at all times. Can an autosave offer the trust of an explicit save button?
- **Simplicity.** How are previous versions presented? Reinstated? What’s a simple, easy, and on-pattern way for users to perform these actions?
- **Data.** Where do autosave versions live? Do they affect a user’s data limits? Are both users and Salesforce prepared to deal with the data implications?
- **Performance.** What effect will constant saving have on performance? Are the benefits of autosaving and versioning enough to outweigh any lag?

### Activating or Publishing

Most builders separate save functionality from publication/activation, allowing users to edit without affecting runtime or live business processes.

Place the Activate or Publish action at the right side of the builder toolbar, with other action buttons. If technical or other factors make that difficult, place it on the Builder Home or Record Overview page.

Activate action button

*For more information, see *[*Activate/Deactivate*](https://www.lightningdesignsystem.com/2e1ef8501/p/44f418-header/t/b0ad78ac2c)* in the Header Toolbar section.*

### Exiting a Builder

To exit a builder, users close the browser window or click the Back button in the header bar. The user will return to the page from which the builder was launched.

The Back button is located in the top left corner of the Builder header bar
