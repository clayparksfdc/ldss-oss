---
title: "Visibility - Examples"
slug: "visibility--examples"
category: "develop"
parent: "visibility"
order: 0
---

Visibility utility classes help manage the display of elements across your application. These classes control whether an element is visible or hidden, making it easier to handle responsive designs and conditional content.

ℹ️ Specify the visibility of elements by showing and hiding. It's best practice to swap the hide and show classes rather than use them concurrently, as this causes issues.

## Examples

### Assistive Text

Use the `slds-assistive-text` class to enable a screen reader to read text that is hidden. This class typically is paired with icons and other UI elements that show an image instead of text.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-visibility--assistive-text
title: Utilities With Code Visibility - Assistive Text
height: 400px
```

### Collapsed / Expanded

The `slds-is-collapsed` class hides the elements contained inside an element by controlling the height and overflow properties. Use the `slds-is-expanded` class to show the elements contained inside an element, in their normal expanded state.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-visibility--collapsed-expanded
title: Utilities With Code Visibility - Collapsed Expanded
height: 400px
```

### Hidden / Visible

Hide an element while keeping its space on the page for when it’s visible again. To hide, use the `slds-hidden` class. To make it visible again, use the `slds-visible` class.

Don't use `slds-hidden` and any of the `slds-visible` utility classes together at the same time on the same element—it makes your element stay hidden.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-visibility--hidden-visible
title: Utilities With Code Visibility - Hidden Visible
height: 400px
```

### Hide / Show

Hide any element from view with the `slds-hide` class. This class also hides the element from screen readers. Show hidden content by using JavaScript to swap `slds-hide` with `slds-show`.

The `slds-show` class sets the `display` property to `block`. To display your hidden element as `inline` or `inline-block`, use the `slds-show_inline` or `slds-show_inline-block` classes, respectively.

Don't use `slds-hide` and any of the `slds-show-*` utility classes together at the same time on the same element—it makes your element stay hidden.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-visibility--hide-show
title: Utilities With Code Visibility - Hide Show
height: 400px
```

### Transition Hide / Show

To gradually hide and show an element, use the `slds-transition-hide` and `slds-transition-show` classes. They toggle the element's opacity and also reserve its space. To control the timing of the transition, add a`transition` property to control the opacity change.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-visibility--transition-hide-show
title: Utilities With Code Visibility - Transition Hide Show
height: 400px
```

### Responsive

Responsive visibility classes hide content on specific breakpoints. `slds-show_[*breakpoint*]` renders `display: none` if the view port width is smaller than the breakpoint, and does nothing if it's larger or equal. `slds-hide_[*breakpoint*]` does the opposite by rendering `display: none` if the viewport width is larger than or equal to the breakpoint, and does nothing if it's smaller.


| **Class Name** | **Less than 320px** | **X-Small (>= 320px)** | **Small (>= 480px)** | **Medium (>= 768px)** | **Large (>= 1024px)** | **X-Large (>= 1280px)** |
| --- | --- | --- | --- | --- | --- | --- |
| `.slds-hide_x-small` | Show | Hide | Hide | Hide | Hide | Hide |
| `.slds-show_x-small` | Hide | Show | Show | Show | Show | Show |
| `.slds-hide_small` | Show | Show | Hide | Hide | Hide | Hide |
| `.slds-show_small` | Hide | Hide | Show | Show | Show | Show |
| `.slds-hide_medium` | Show | Show | Show | Hide | Hide | Hide |
| `.slds-show_medium` | Hide | Hide | Hide | Show | Show | Show |
| `.slds-hide_large` | Show | Show | Show | Show | Hide | Hide |
| `.slds-show_large` | Hide | Hide | Hide | Hide | Show | Show |
| `.slds-hide_x-large` | Show | Show | Show | Show | Show | Hide |
| `.slds-show_x-large` | Hide | Hide | Hide | Hide | Hide | Show |

**X-Small (>= 320px)**

**Small (>= 480px)**

**Medium (>= 768px)**

**Large (>= 1024px)**

**X-Large (>= 1280px)**

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-visibility--responsive
title: Utilities With Code Visibility - Responsive
height: 400px
```
