---
title: Counter
---

SLDS 1 blueprint examples for **Counter**.

::: legacy-component-example title="Base"
<div class="slds-form-element">
  <label class="slds-form-element__label slds-m-right_none" for="default1">Counter Label</label>
  <div class="slds-form-element__control">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_decrement" title="Decrement counter">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#ban"></use>
      </svg>
      <span class="slds-assistive-text">Decrement counter</span>
    </button>
    <input type="number" id="default1" placeholder="1" class="slds-input slds-input_counter" />
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_increment" title="Increment counter">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#new"></use>
      </svg>
      <span class="slds-assistive-text">Increment counter</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Required"
<div class="slds-form-element">
  <label class="slds-form-element__label slds-m-right_none" for="state-required">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Counter Label</label>
  <div class="slds-form-element__control">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_decrement" title="Decrement counter">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#ban"></use>
      </svg>
      <span class="slds-assistive-text">Decrement counter</span>
    </button>
    <input type="number" id="state-required" placeholder="1" required="" class="slds-input slds-input_counter" />
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_increment" title="Increment counter">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#new"></use>
      </svg>
      <span class="slds-assistive-text">Increment counter</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-form-element slds-has-error">
  <label class="slds-form-element__label slds-m-right_none" for="state-error">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Counter Label</label>
  <div class="slds-form-element__control">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_decrement" title="Decrement counter">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#ban"></use>
      </svg>
      <span class="slds-assistive-text">Decrement counter</span>
    </button>
    <input type="number" id="state-error" placeholder="1" required="" aria-describedby="state-error-1" class="slds-input slds-input_counter" aria-invalid="true" />
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_increment" title="Increment counter">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#new"></use>
      </svg>
      <span class="slds-assistive-text">Increment counter</span>
    </button>
  </div>
  <div class="slds-form-element__help" id="state-error-1">This field is required</div>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-form-element">
  <label class="slds-form-element__label slds-m-right_none" for="state-disabled">Counter Label</label>
  <div class="slds-form-element__control">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_decrement" title="Decrement counter" disabled="">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#ban"></use>
      </svg>
      <span class="slds-assistive-text">Decrement counter</span>
    </button>
    <input type="number" id="state-disabled" placeholder="1" disabled="" class="slds-input slds-input_counter" />
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_increment" title="Increment counter" disabled="">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#new"></use>
      </svg>
      <span class="slds-assistive-text">Increment counter</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Read-only"
<div class="slds-form-element">
  <label class="slds-form-element__label slds-m-right_none" for="state-read-only">Counter Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="state-read-only" placeholder="1" readonly="" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="Centered"
<div class="slds-form-element slds-text-align_center">
  <label class="slds-form-element__label slds-m-right_none" for="example-centered">Counter Label</label>
  <div class="slds-form-element__control">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_decrement" title="Decrement counter">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#ban"></use>
      </svg>
      <span class="slds-assistive-text">Decrement counter</span>
    </button>
    <input type="number" id="example-centered" placeholder="1" class="slds-input slds-input_counter" />
    <button class="slds-button slds-button_icon slds-button_icon-small slds-input__button_increment" title="Increment counter">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#new"></use>
      </svg>
      <span class="slds-assistive-text">Increment counter</span>
    </button>
  </div>
</div>
:::
