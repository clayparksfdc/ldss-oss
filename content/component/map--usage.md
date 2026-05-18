---
title: "Map"
slug: "map--usage"
category: "component"
parent: "map"
order: 0
---

[Base](https://sds-site-docs-1fea39e7763a.herokuapp.com/iframe.html?id=components-map--base)

## Overview

The map component helps users visualize geographical data, enhancing workflows that involve spatial decision-making. It supports dynamic location markers, layers, and integration with Salesforce records.

* Displays maps with customizable markers to represent specific locations.
* Integrates seamlessly with Salesforce records such as Accounts and Service Cases.
* Supports dynamic updates for location data and responsive behavior for various screen sizes.


## Usage

* Represent locations for field service schedules.
* Visualize customer distribution by region.
* Display routes for sales visits or deliveries.

### Best Practices

* Use meaningful and recognizable marker icons for quick identification.
* Optimize performance by limiting the number of markers loaded at once.
* Always show a message to let users know when something is loading or if there's an error.

### When Not to Use

* Avoid using the map component if location data is unavailable or irrelevant.

## Types

| **Base**  Base Map with a single marker.  | ![Base](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/51132df44cb8171f5fdaf1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1d553e97ac861f348c5336c6093b3649f531efa31d1e9a08ee2be0ac51ab18a9) **Base** |
| --- | :---: |
|   |   |
| **Side List**  Map displaying multiple locations in a side panel. | ![Side List](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/7a9dc5bafe43b6b57e7465?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5f16583e111cdbcbfcb0e00dfc024f0e213651304305167ce1df89bf995d121f) **Side List** |
|   |   |
| **Bottom List**  Map displaying multiple locations in a bottom panel.   | ![Bottom List](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/539d8cc3fecf70972770bc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=db7382aa1113b365925867d033c021be1d4bcc6182ba13c03d8dfaa02ccd3c05) **Bottom List** |

## Appearance

The map component visually represents geographic locations using an interactive map interface. It typically includes a map container with zoom controls, a dropped pin to mark a location, and an optional floating info card displaying details like an address or coordinates. Users can pan, zoom, and select locations, ensuring seamless integration with Salesforce records and geolocation features. The design maintains SLDS styling, ensuring consistency with other Lightning components.

### Anatomy

![Anatomy](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/3185c1054734ebdd3c706e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f3199b21e8ebeb6b2e717465294eac70bfcdeb3d71421e3ef53c4767344b8d57)

**Anatomy**

---

| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Bi5Gh1oUfx83F66yhAYtuQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2a5bff644470617f0cf8d00196b7574556a546e8470334bcdbe2639e4843195c)  | **Map:** One or more locations, using geocoding data and mapping imagery from Google Maps. |
| :--- | :--- |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/6TrujATk_F15RTvUcpAsDQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=01accd733f51ae8d0422cb8922a789e62bd804d00a80b335af3beede5d9b3ed1)  | **Map details:** Provides details about a selected location, including its name, address, and optional directions.  |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/Ox8SUMfxl0TuYFQFIwS7qQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3d43c020c1772171326c1a6e9139723d869279910faa3d99aa0b3f7d421eff07)  | **Location list:** Title, description, and an icon. These items are relevant to the marker but not specifically related to location.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/43C0hbDSst2MbiPklUvifw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a26652574073323e98720b59bdaf3c6f0fe92bd05cb0492f24b1e98453f3d77d)  | **Title text:** Title of the relevant locations on the associated map.   |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/tOaHla90mJKSsdRXjVKVWQ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1386937af2c565f9d775453a2a69e85385d1e4a25666ce1576d6638a312d4563)  | **Map row (active):** Title, description, and an icon. These items are relevant to the marker but not specifically related to location. |
| ![](https://zeroheight-user-uploads.s3.eu-west-1.amazonaws.com/images/4r547Ot70gSMLe054YON3A.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6SJI2PWU%2F20260518%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260518T042734Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ec1e5401b1b6e7c606e1dff167847edc7a8474537bd42433651cf668783b788b)  | **Map row (default):** Title, description, and an icon. These items are relevant to the marker but not specifically related to location.  |

### Customization Options

* **Markers:** Customize icons, colors, and labels.
* **Controls:** Enable or disable zoom and navigation tools based on user needs.

### Size

* **Minimum Size:** 200x200 pixels for usability.
* **Fluid Layout:** Adjusts dynamically within any container.
* **Responsiveness:** Remains usable on screens as small as 320px wide.
    * On touchscreen devices, maps have larger header text and other minor adjustments. The changes occur automatically in Salesforce native mobile applications for users on the Salesforce Platform. For users on touchscreen devices who aren't on the Salesforce Platform, these changes occur automatically after the secondary touch stylesheet is loaded.

### UI Content

* **Marker Labels:** Use short, descriptive labels for easy identification.
* **Text Constraints:** Limit info window text to 50–100 characters for readability.

## Behaviors

### Interactions

The map component has these interactions available.

* **Drag:** Moves the map canvas for navigation.
* **Zoom:** Allows in-depth or broad views using controls or gestures.
* **Select:** Shows location of items selected from the list. When you select a location title in the list, its map marker is activated.

### Default Selection

By default, the list of locations is hidden when you pass in a single marker and displayed when you pass in multiple markers.
