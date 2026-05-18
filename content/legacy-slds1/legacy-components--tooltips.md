---
title: Tooltips
---

SLDS 1 blueprint examples for **Tooltips**.

::: legacy-component-example title="Base"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button" aria-describedby="help" aria-disabled="true">Help Text</button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style="position:absolute;top:-4px;left:35px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::

::: legacy-component-example title="As an icon link"
<div style="padding-left:2rem;padding-top:6.75rem;position:relative">
  <a href="#" aria-describedby="help">
    <span class="slds-icon_container slds-icon-utility-info">
      <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
      </svg>
      <span class="slds-assistive-text">Click here to learn more</span>
    </span>
  </a>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style="position:absolute;top:-4px;left:15px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      <div class="slds-m-top_x-small" aria-hidden="true">Click
        <span class="slds-icon_container slds-icon-utility-info" title="Help">
          <svg class="slds-icon slds-icon slds-icon_xx-small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
          </svg>
          <span class="slds-assistive-text">Help</span>
        </span> to learn more.</div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="As a Button Icon"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button slds-button_icon slds-button slds-button_icon" aria-describedby="help" aria-disabled="true" title="Help">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
    </svg>
    <span class="slds-assistive-text">Help</span>
  </button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style="position:absolute;top:-4px;left:15px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::

::: legacy-component-example title="As a Button"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button slds-button_neutral" aria-describedby="help" aria-disabled="true">Button</button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style="position:absolute;top:-4px;left:45px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::

::: legacy-component-example title="Example 5"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button" aria-describedby="help" aria-disabled="true">Help Text</button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left slds-slide-from-bottom-to-top" role="tooltip" id="help" style="position:absolute;top:-4px;left:35px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::

::: legacy-component-example title="Example 6"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button" aria-describedby="help" aria-disabled="true">Help Text</button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left slds-slide-from-top-to-bottom" role="tooltip" id="help" style="position:absolute;top:-4px;left:35px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::

::: legacy-component-example title="Example 7"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button" aria-describedby="help" aria-disabled="true">Help Text</button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left slds-slide-from-right-to-left" role="tooltip" id="help" style="position:absolute;top:-4px;left:35px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::

::: legacy-component-example title="Example 8"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button" aria-describedby="help" aria-disabled="true">Help Text</button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left slds-slide-from-left-to-right" role="tooltip" id="help" style="position:absolute;top:-4px;left:35px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::

::: legacy-component-example title="Example 9"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button" aria-describedby="help" aria-disabled="true">Help Text</button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left slds-rise-from-ground" role="tooltip" id="help" style="position:absolute;top:-4px;left:35px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::

::: legacy-component-example title="Example 10"
<div style="padding-left:2rem;padding-top:5rem;position:relative">
  <button class="slds-button" aria-describedby="help" aria-disabled="true">Help Text</button>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left slds-fall-into-ground" role="tooltip" id="help" style="position:absolute;top:-4px;left:35px">
    <div class="slds-popover__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
  </div>
</div>
:::
