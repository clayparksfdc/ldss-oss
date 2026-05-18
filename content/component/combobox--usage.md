---
title: "Combobox"
slug: "combobox--usage"
category: "component"
parent: "combobox"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-combobox--base)

## Overview

* Commonly used for selecting from a large list of options.
* Displays a dropdown listbox when users interact with the input field. 
* Comboboxes are divided into two types: picklists and lookups. With picklists, the user can only select from a list of options. Lookups, on the other hand, allow users to filter through the options by typing into the input field.

![overview](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/4fe4ea04b2059f5cc041c4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9bb27d9343f1af25c1e654655e07c1e4d70755624ec8b1f2883c1667ba5490c0)

**overview**

---

## Usage

Comboboxes are ideal when users choose from a large dataset. They make it easy to find and select the right option, without having to scroll through a long list.

### Best Practices

* Provide clear, concise labels for list items.
* Use meaningful placeholder text to guide user input.
* Make sure options are relevant and ordered logically.

### When Not to Use

* Avoid using a combobox for binary choices—use a toggle or checkbox instead.
* Avoid implementing a combobox where predefined options aren't applicable.

## Appearance

### Anatomy

![anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/0a92b5d1618d13a9d518b5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b92556684e9f58e237be2200511d8c0a0cd86c76ff26f688c2724621f64fd29d)

**anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0563c0ba919e51474a6686affba8f77de533a296c139a7c4cb699df570a1d81d) | **Field Label:** Describes the purpose of the combobox. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=860cc893e7c53a9470d849cc035aa8d48029f03c5129395447f5924d6804e79d) | **Dropdown Icon:** Icon to indicate that a menu opens when clicked. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e2b018d0cf8329521938a0dca49a2062ab19cf85a532604894cac93165078c9a) | **Input Field:** Area where users type or select their data.    |

### Customization Options

* Field label customization options:
    * Use `label-hidden` to hide the label but make it available to assistive technology.
    * Use `label-inline` to horizontally align the label and combobox.
    * Use `label-stacked` to place the label above the combobox.

### Size

* By default, the listbox width matches the input field width.
* Listbox height scrolls to the size of the list unless a max-height value is set.

### Layout

* Maintain consistent spacing with adjacent fields.
* Align the listbox edge with the input field for a clean UI.

### UI Content

* Use title capitalization. In most cases (relatively short lists), order items by likely use. If the default option is a prompt, follow with an ellipsis.
* Limit text in listbox items to avoid truncation.
* Use concise labels to make them easy to scan.

## Behaviors

### States

![states](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/fab2cf657786bdf4ce6fae?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=20a704be69f31c79325c091d462be17f6f89b77a2092675474b6e528fbd2aee9)

**states**

---

Combobox has the following states: 

1. **Default:** Input field displays optional placeholder text.
2. **Default with selected item(s)**: The input field displays the selected option(s).
    * Selected options in the listbox are shown with a checkmark.
3. **Active/Focus:** Focus indicator is shown on the input field, which displays the optional placeholder text or selected option(s). 
    * The listbox opens by default when the combobox is clicked or receives focus.
4. **Disabled**: Input is inactive and visually muted.


### Interactions

* Listbox dropdown expands on click or focus.
* Items highlight on hover/focus and select on click/enter.

![interaction-picklist](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/87f311a98135bb58f61dc6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5ffd16c500028b8a828771ac04c895bc89311e89974d645691a0cc2a8fe617d2)

**interaction-picklist**

---

### Loading

Shows a spinner when options are dynamically fetched.

![loading](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/4636d8fe7d1f8b6a629535?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=45b0a9f268675746657f8c2701bd6d24db608325348beb071c67d0752a4b4d9d)

**loading**

---

### Scrolling

Listbox scrolls independently if items exceed the viewport or max-height is used.

### Responsive

Adjust listbox placement and width based on screen size.

### Default Selection

Pre-fill input with default values for convenience.

### Validation

* Show inline error messages when input doesn’t meet criteria.
* Use supporting text for guidance on the input format.

## Related Components
