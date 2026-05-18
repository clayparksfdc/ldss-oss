---
title: Pills
---

SLDS 1 blueprint examples for **Pills**.

::: legacy-component-example title="Base"
<span class="slds-pill slds-pill_link">
  <a href="#" class="slds-pill__action" title="Full pill label verbiage mirrored here">
    <span class="slds-pill__label">Pill Label</span>
  </a>
  <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Remove</span>
  </button>
</span>
:::

::: legacy-component-example title="With Icon"
<span class="slds-pill slds-pill_link">
  <span class="slds-pill__icon_container">
    <span class="slds-icon_container slds-icon-standard-account" title="Account">
      <svg class="slds-icon" aria-hidden="true">
        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
      </svg>
      <span class="slds-assistive-text">Account</span>
    </span>
  </span>
  <a href="#" class="slds-pill__action" title="Full pill label verbiage mirrored here">
    <span class="slds-pill__label">Pill Label</span>
  </a>
  <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Remove</span>
  </button>
</span>
:::

::: legacy-component-example title="With Avatar"
<span class="slds-pill slds-pill_link">
  <span class="slds-pill__icon_container">
    <span class="slds-avatar slds-avatar_circle" title="User avatar">
      <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
    </span>
  </span>
  <a href="#" class="slds-pill__action" title="Full pill label verbiage mirrored here">
    <span class="slds-pill__label">Pill Label</span>
  </a>
  <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Remove</span>
  </button>
</span>
:::

::: legacy-component-example title="Pill with Container"
<div class="slds-pill_container">
  <span class="slds-pill slds-pill_link">
    <a href="#" class="slds-pill__action" title="Full pill label verbiage mirrored here">
      <span class="slds-pill__label">Pill Label</span>
    </a>
    <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Remove</span>
    </button>
  </span>
  <span class="slds-pill slds-pill_link">
    <a href="#" class="slds-pill__action" title="Full pill label verbiage mirrored here">
      <span class="slds-pill__label">Pill Label</span>
    </a>
    <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Remove</span>
    </button>
  </span>
  <span class="slds-pill slds-pill_link">
    <a href="#" class="slds-pill__action" title="Full pill label verbiage mirrored here">
      <span class="slds-pill__label">Pill Label</span>
    </a>
    <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Remove</span>
    </button>
  </span>
</div>
:::

::: legacy-component-example title="Error"
<span class="slds-pill slds-pill_link slds-has-error">
  <span class="slds-pill__icon_container">
    <span class="slds-icon_container" title="Error">
      <svg class="slds-icon slds-icon-text-error" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
      </svg>
      <span class="slds-assistive-text">Warning</span>
    </span>
  </span>
  <a href="#" class="slds-pill__action" title="Full pill label verbiage mirrored here">
    <span class="slds-pill__label">Pill Label</span>
  </a>
  <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Remove</span>
  </button>
</span>
:::

::: legacy-component-example title="Truncated"
<div class="slds-pill_container">
  <span class="slds-pill slds-pill_link">
    <a href="#" class="slds-pill__action" title="Pill label that is longer than the area that contains it">
      <span class="slds-pill__label">Pill label that is longer than the area that contains it</span>
    </a>
    <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Remove</span>
    </button>
  </span>
</div>
:::

::: legacy-component-example title="Truncated"
<span class="slds-pill" aria-selected="true">
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style="position:absolute;top:-45px;left:-2px">
    <div class="slds-popover__body">Pill label that is longer than the area that contains it</div>
  </div>
  <span class="slds-pill__label" title="Pill label that is longer than the area that contains it">Pill label that is longer than the area that contains it</span>
  <span class="slds-icon_container slds-pill__remove" title="Remove">
    <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Remove</span>
    </button>
  </span>
</span>
:::

::: legacy-component-example title="Listbox Of Pill Options"
<div class="slds-pill_container">
  <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:" aria-describedby="listbox-pill-default">
    <li class="slds-listbox-item">
      <span class="slds-pill">
        <span class="slds-pill__label" title="Full pill label verbiage mirrored here">Pill Label</span>
        <span class="slds-icon_container slds-pill__remove" title="Remove">
          <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove</span>
          </button>
        </span>
      </span>
    </li>
    <li class="slds-listbox-item">
      <span class="slds-pill">
        <span class="slds-pill__label" title="Full pill label verbiage mirrored here">Pill Label</span>
        <span class="slds-icon_container slds-pill__remove" title="Remove">
          <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove</span>
          </button>
        </span>
      </span>
    </li>
  </ul>
</div>
:::

::: legacy-component-example title="With Icon"
<div class="slds-pill_container">
  <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:" aria-describedby="listbox-pill-with-icon">
    <li class="slds-listbox-item">
      <span class="slds-pill">
        <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
          <svg class="slds-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
          </svg>
          <span class="slds-assistive-text">Account</span>
        </span>
        <span class="slds-pill__label" title="Full pill label verbiage mirrored here">Pill Label</span>
        <span class="slds-icon_container slds-pill__remove" title="Remove">
          <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove</span>
          </button>
        </span>
      </span>
    </li>
    <li class="slds-listbox-item">
      <span class="slds-pill">
        <span class="slds-icon_container slds-icon-standard-case slds-pill__icon_container" title="Case">
          <svg class="slds-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#case"></use>
          </svg>
          <span class="slds-assistive-text">Case</span>
        </span>
        <span class="slds-pill__label" title="Full pill label verbiage mirrored here">Pill Label</span>
        <span class="slds-icon_container slds-pill__remove" title="Remove">
          <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove</span>
          </button>
        </span>
      </span>
    </li>
  </ul>
</div>
:::

::: legacy-component-example title="With Avatar"
<div class="slds-pill_container">
  <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:" aria-describedby="listbox-pill-with-avatar">
    <li class="slds-listbox-item">
      <span class="slds-pill">
        <span class="slds-avatar slds-avatar_x-small slds-pill__icon_container">
          <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
        </span>
        <span class="slds-pill__label" title="Full pill label verbiage mirrored here">Pill Label</span>
        <span class="slds-icon_container slds-pill__remove" title="Remove">
          <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove</span>
          </button>
        </span>
      </span>
    </li>
    <li class="slds-listbox-item">
      <span class="slds-pill">
        <span class="slds-avatar slds-avatar_x-small slds-pill__icon_container">
          <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
        </span>
        <span class="slds-pill__label" title="Full pill label verbiage mirrored here">Pill Label</span>
        <span class="slds-icon_container slds-pill__remove" title="Remove">
          <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove</span>
          </button>
        </span>
      </span>
    </li>
  </ul>
</div>
:::

::: legacy-component-example title="Bare"
<div class="slds-pill_container">
  <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:" aria-describedby="listbox-pills-bare">
    <li class="slds-listbox-item">
      <span class="slds-pill slds-pill_bare">
        <span class="slds-pill__label" title="Full pill label verbiage mirrored here">Pill Label</span>
        <span class="slds-icon_container slds-pill__remove" title="Remove">
          <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove</span>
          </button>
        </span>
      </span>
    </li>
    <li class="slds-listbox-item">
      <span class="slds-pill slds-pill_bare">
        <span class="slds-pill__label" title="Full pill label verbiage mirrored here">Pill Label</span>
        <span class="slds-icon_container slds-pill__remove" title="Remove">
          <button class="slds-button slds-button_icon slds-button_icon slds-pill__remove" title="Remove">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove</span>
          </button>
        </span>
      </span>
    </li>
  </ul>
</div>
:::
