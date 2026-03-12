---
title: "Menu - Accessibility"
slug: "menu--accessibility"
category: "component"
order: 0
---

## Interactions

### Mouse

- Users can click the menu trigger to open the menu.
- Clicking outside the menu closes it.
- Clicking a menu item selects it and performs the corresponding action.

### Keyboard

- **Enter:**

when focused on the menu button: opens the menu and focuses on the first item
- when focused on a menu item: activates that item and closes the menu
- **Space:**

when focused on the menu button: opens the menu and focuses on the first item
- **Up:**

when focused on a menu item: moves to the previous item (should wrap first to last)
- **Down:**

when focused on the menu button: opens the menu and focuses on the first item
- when focused on a menu item: moves to the next item (should wrap last to first)
- **Right:**

when focused on an item with a submenu: opens the submenu and focuses on the first item
- **Left:**

when focused on an item within a submenu: closes the submenu and focuses on the parent item that contains the submenu
- **Escape:**

closes the menu or submenu and focuses on the parent button or item
- **Tab** and **Shift + Tab:**

navigate away from the menu and closes it
- **Recommended:**

type a character: focus moves to the next item that starts with the character

- when focused on the menu button: opens the menu and focuses on the first item
- when focused on a menu item: activates that item and closes the menu

- when focused on the menu button: opens the menu and focuses on the first item

**Up:**

- when focused on a menu item: moves to the previous item (should wrap first to last)

- when focused on the menu button: opens the menu and focuses on the first item
- when focused on a menu item: moves to the next item (should wrap last to first)

- when focused on an item with a submenu: opens the submenu and focuses on the first item

- when focused on an item within a submenu: closes the submenu and focuses on the parent item that contains the submenu

- closes the menu or submenu and focuses on the parent button or item

- navigate away from the menu and closes it

- type a character: focus moves to the next item that starts with the character

### Other

- Screen readers should announce the menu and available options.
- Assistive technologies should detect focus changes and menu state.
- Menus should support alternative input devices such as speech recognition.

## Design Considerations

- Indicate selection using visual and non-visual cues (e.g., icons and ARIA attributes).
- Avoid using hover alone for triggering menus, as it may not be accessible on touch devices.

## Development Considerations

- Ensure menu triggers have accessible labels (`aria-label` or `aria-labelledby`).
- Use `aria-haspopup="true"` on the menu trigger.
- Optional: `aria-expanded="true|false"` depending on if the menu is expanded or not
- Use `role="menu"` to the menu container.
- Use `role="menuitem"` for each menu item.
- Use `tabindex=-1` to make `menuitem` focusable on click
- If the item is a separator, `role="separator"` should be applied
- If the item is disabled, use `aria-disabled="true"`
- Implement focus management to ensure usability with assistive devices.
- Ensure menus are dismissible via keyboard (`esc`) and clicking outside.

## Content Considerations

- Use clear, descriptive labels for menu items.
- Avoid ambiguous labels like "Click here" or "More."
- Include text alternatives for icons used in menu items.
- Ensure menu labels and items are translatable without breaking layout.
- Avoid hardcoded text; use dynamic content for multilingual support.
