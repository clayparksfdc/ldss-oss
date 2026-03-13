---
title: Alert
---

SLDS 1 blueprint examples for **Alert**.

::: legacy-component-example title="Base"
<div class="slds-notify slds-notify_alert" role="alert">
  <span class="slds-assistive-text">info</span>
  <span class="slds-icon_container slds-icon-utility-user slds-m-right_x-small" title="Description of icon when needed">
    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
    </svg>
  </span>
  <h2>Logged in as John Smith (johnsmith@acme.com).
    <a href="#">Log out</a>
  </h2>
  <div class="slds-notify__close">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-button_icon-inverse" title="Close">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Close</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Warning"
<div class="slds-notify slds-notify_alert slds-alert_warning" role="alert">
  <span class="slds-assistive-text">warning</span>
  <span class="slds-icon_container slds-icon-utility-warning slds-m-right_x-small" title="Description of icon when needed">
    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
    </svg>
  </span>
  <h2>Your browser is outdated. Your Salesforce experience may be degraded.
    <a href="#">More Information</a>
  </h2>
  <div class="slds-notify__close">
    <button class="slds-button slds-button_icon slds-button_icon-small" title="Close">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Close</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-notify slds-notify_alert slds-alert_error" role="alert">
  <span class="slds-assistive-text">error</span>
  <span class="slds-icon_container slds-icon-utility-error slds-m-right_x-small" title="Description of icon when needed">
    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
    </svg>
  </span>
  <h2>Your browser is currently not supported. Your Salesforce may be degraded.
    <a href="#">More Information</a>
  </h2>
  <div class="slds-notify__close">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-button_icon-inverse" title="Close">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Close</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Offline"
<div class="slds-notify slds-notify_alert slds-alert_offline" role="alert">
  <span class="slds-assistive-text">offline</span>
  <span class="slds-icon_container slds-icon-utility-offline slds-m-right_x-small" title="Description of icon when needed">
    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#offline"></use>
    </svg>
  </span>
  <h2>You are in offline mode.
    <a href="#">More Information</a>
  </h2>
  <div class="slds-notify__close">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-button_icon-inverse" title="Close">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Close</span>
    </button>
  </div>
</div>
:::
