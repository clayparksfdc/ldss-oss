---
title: "Popover"
description: "Popovers are non-modal dialogs that give the user contextual information and actions on canvas elements, and message users about errors and warnings."
category: "component"
slug: "popover"
status: "published"
lastModified: "2026-03-11"
---

## Introduction

| Popovers are non-modal dialogs that give the user contextual information and actions on canvas elements, and message users about errors and warnings. | <h3>Start using our Design Kits</h3> [ * ](https://www.figma.com/@salesforce) <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> * <i color="var(--colors-ui-element-text-secondary, #605f60)" size="6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>**<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" vector-effect="non-scaling-stroke"></svg>* [Open in Figma](https://www.figma.com/community/file/1415890669347272207) |
| --- | --- |


Popovers are non-modal dialogs that give the user contextual information and actions on canvas elements, and message users about errors and warnings.

### Start using our Design Kits

[Open in Figma](https://www.figma.com/community/file/1415890669347272207)

## Usage

Clicking a popover’s trigger element or node opens the popover, and either highlights relevant information or provides actions against the trigger element.

All popover messages must be:

- Dynamically generated (based on builder file contents, with no static messages)
- Actionable (the user can take action against the element)


Dynamically generated (based on builder file contents, with no static messages)

Actionable (the user can take action against the element)

## Error Popover Variant

Any error that prevents a builder from being saved should appear in a toolbar popover.

Error messages include header text on a red background; footers are optional.

Error popover

## Warning Popover Variant

Any issue that prevents a builder from being activated or published, or prevents runtime, should appear in a toolbar popover.

Warning popovers include header text on a gold background; footers are optional.

Warning popover

## Panel Information Variant

This popover variant provides contextual editing for the name and description of a component in a panel header.

Popover for editing the information in a panel

## Click to Create Variant

This popover variant lets users build workflows by selecting nodes, connectors, and other workflow elements from its menu. The “add” icon rotates 45° to look like a “close” icon when the popover is open, in addition to other animation changes.

Click to Create popover

### List Menu

The list menu layout presents options visually.

Click to Create list menu

### Visual Menu

The tile menu layout lets users select from a limited number of options.

Click to Create visual picker

### Drill-in

For longer, nested option menus, add a drill-in and a search input. A back button lets users navigate branches of the original menu.

Click to Create drill-in

### Test Mode Variant

In manual workflow testing, users evaluate paths for logic and flow. At each decision point, a popover offers options (for example, an audience group or an event). To present two options, use two buttons side by side. For three to four options, stack the option buttons. For five or more options, add a scroll bar.

Test mode popovers
