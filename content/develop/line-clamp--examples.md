---
title: "Line Clamp - Examples"
slug: "line-clamp--examples"
category: "develop"
parent: "line-clamp"
order: 0
---

Line clamp utility classes control how many lines a block of text displays before it's truncated. The remaining content is replaced with an ellipsis  (`...`) so readers know there's more to see. These utilities make sure text fits within the design constraints while maintaining readability and preserving the layout's balance.

SLDS supports the following line clamp limits.


| **Class** | **Truncation** |
| --- | --- |
| `slds-line-clamp` | Truncates after 3 lines of content — from a default value of 3 for the `line-clamp` token. |
| `slds-line-clamp_x-small` | Truncates after 2 lines of content. |
| `slds-line-clamp_small` | Truncates after 3 lines of content. |
| `slds-line-clamp_medium` | Truncates after 5 lines of content. |
| `slds-line-clamp_large` | Truncates after 7 lines of content. |

**🛑 IE11 Not Supported:**The use of the `line-clamp` css property is not supported in IE11.

**🛑 Not Supported on Container Elements**

Apply this class directly to a text element only.

If you apply this class to elements that contain HTML elements, it doesn't work as expected. This use case is not supported.

## Examples

### Default

The `slds-line-clamp` class truncates text after three lines. You can change the number of lines by reassigning a value to the `line-clamp` token.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-line-clamp--line-clamp-default
title: Utilities With Code Line Clamp - Line Clamp Default
height: 400px
```

### X-Small

The `slds-line-clamp_x-small` class truncates text after two lines.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-line-clamp--line-clamp-x-small
title: Utilities With Code Line Clamp - Line Clamp X Small
height: 400px
```

### Small

The `slds-line-clamp_small` class truncates text after three lines.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-line-clamp--line-clamp-small
title: Utilities With Code Line Clamp - Line Clamp Small
height: 400px
```

### Medium

The `slds-line-clamp_medium` class truncates text after five lines.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-line-clamp--line-clamp-medium
title: Utilities With Code Line Clamp - Line Clamp Medium
height: 400px
```

### Large

The `slds-line-clamp_large` class truncates text after seven lines.

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-line-clamp--line-clamp-large
title: Utilities With Code Line Clamp - Line Clamp Large
height: 400px
```

### Block Level Children

```storybook
url: https://slds2-metadata-stories-54d63ecb6c29.herokuapp.com/iframe.html?id=utilities-with-code-line-clamp--block-level-children
title: Utilities With Code Line Clamp - Block Level Children
height: 400px
```
