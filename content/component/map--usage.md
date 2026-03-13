---
title: "Map"
slug: "map--usage"
category: "component"
parent: "map"
order: 0
---

```storybook
url: https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-map--base&globals=theme%3Alight
title: Map - Base
height: 400px
```

## Overview

The map component helps users visualize geographical data, enhancing workflows that involve spatial decision-making. It supports dynamic location markers, layers, and integration with Salesforce records.

- Displays maps with customizable markers to represent specific locations.
- Integrates seamlessly with Salesforce records such as Accounts and Service Cases.
- Supports dynamic updates for location data and responsive behavior for various screen sizes.

## Usage

- Represent locations for field service schedules.
- Visualize customer distribution by region.
- Display routes for sales visits or deliveries.

### Best Practices

- Use meaningful and recognizable marker icons for quick identification.
- Optimize performance by limiting the number of markers loaded at once.
- Always show a message to let users know when something is loading or if there's an error.

### When Not to Use

- Avoid using the map component if location data is unavailable or irrelevant.

## Types


| Base  Base Map with a single marker. |  |
| --- | --- |
|  |  |
| Side List  Map displaying multiple locations in a side panel. |  |
|  |  |
| Bottom List  Map displaying multiple locations in a bottom panel. |  |

## Appearance

The map component visually represents geographic locations using an interactive map interface. It typically includes a map container with zoom controls, a dropped pin to mark a location, and an optional floating info card displaying details like an address or coordinates. Users can pan, zoom, and select locations, ensuring seamless integration with Salesforce records and geolocation features. The design maintains SLDS styling, ensuring consistency with other Lightning components.

### Anatomy


| *                                *  | **Map:**One or more locations, using geocoding data and mapping imagery from Google Maps. |
| --- | --- |
| *                                *  | **Map details:**Provides details about a selected location, including its name, address, and optional directions. |
| *                                *  | **Location list:**Title, description, and an icon. These items are relevant to the marker but not specifically related to location. |
| *                                *  | **Title text:**Title of the relevant locations on the associated map. |
| *                                *  | **Map row (active):**Title, description, and an icon. These items are relevant to the marker but not specifically related to location. |
| *                                *  | **Map row (default):**Title, description, and an icon. These items are relevant to the marker but not specifically related to location. |

### Customization Options

-**Markers:** Customize icons, colors, and labels.
- **Controls:** Enable or disable zoom and navigation tools based on user needs.

### Size

- **Minimum Size:** 200x200 pixels for usability.
- **Fluid Layout:** Adjusts dynamically within any container.
- **Responsiveness:** Remains usable on screens as small as 320px wide.

On touchscreen devices, maps have larger header text and other minor adjustments. The changes occur automatically in Salesforce native mobile applications for users on the Salesforce Platform. For users on touchscreen devices who aren't on the Salesforce Platform, these changes occur automatically after the secondary touch stylesheet is loaded.

- On touchscreen devices, maps have larger header text and other minor adjustments. The changes occur automatically in Salesforce native mobile applications for users on the Salesforce Platform. For users on touchscreen devices who aren't on the Salesforce Platform, these changes occur automatically after the secondary touch stylesheet is loaded.

### UI Content

- **Marker Labels:** Use short, descriptive labels for easy identification.
- **Text Constraints:** Limit info window text to 50–100 characters for readability.

## Behaviors

### Interactions

The map component has these interactions available.

- **Drag:** Moves the map canvas for navigation.
- **Zoom:** Allows in-depth or broad views using controls or gestures.
- **Select:** Shows location of items selected from the list. When you select a location title in the list, its map marker is activated.

### Default Selection

By default, the list of locations is hidden when you pass in a single marker and displayed when you pass in multiple markers.
