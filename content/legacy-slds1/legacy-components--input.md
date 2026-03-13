---
title: Input
---

SLDS 1 blueprint examples for **Input**.

::: legacy-component-example title="Required"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-47">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Input Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="text-input-id-47" placeholder="Placeholder text…" required="" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-49">Input Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="text-input-id-49" placeholder="Placeholder text…" disabled="" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-form-element slds-has-error">
  <label class="slds-form-element__label" for="text-input-id-52">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Input Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="text-input-id-52" placeholder="Placeholder text…" required="" aria-describedby="error-message-id-53" class="slds-input" aria-invalid="true" />
  </div>
  <div class="slds-form-element__help" id="error-message-id-53">Enter a value.</div>
</div>
:::

::: legacy-component-example title="Error with icon"
<div class="slds-form-element slds-has-error">
  <label class="slds-form-element__label" for="text-input-id-56">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Input Label</label>
  <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
    <svg class="slds-input__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
    </svg>
    <input type="text" id="text-input-id-56" required="" placeholder="Placeholder text…" aria-describedby="error-message-id-57" class="slds-input" aria-invalid="true" />
  </div>
  <div class="slds-form-element__help" id="error-message-id-57">Enter a value.</div>
</div>
:::

::: legacy-component-example title="Read Only"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-59">Input Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="text-input-id-59" readonly="" placeholder="" class="slds-input" value="Read Only" />
  </div>
</div>
:::

::: legacy-component-example title="Icon on the left"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-61">Input Label</label>
  <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
    <svg class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
    </svg>
    <input type="text" id="text-input-id-61" placeholder="Placeholder text…" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="Icon on the right"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-63">Input Label</label>
  <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
    <svg class="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
    </svg>
    <input type="text" id="text-input-id-63" placeholder="Placeholder text…" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="Icon and clear button"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-65">Input Label</label>
  <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left-right">
    <svg class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
    </svg>
    <input type="text" id="text-input-id-65" placeholder="Placeholder text…" class="slds-input" />
    <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Clear">
      <svg class="slds-button__icon slds-icon-text-light" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clear"></use>
      </svg>
      <span class="slds-assistive-text">Clear</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Icon and clear button, with loading spinner"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-67">Input Label</label>
  <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left-right slds-input-has-icon_group-right">
    <svg class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
    </svg>
    <input type="text" id="text-input-id-67" placeholder="Placeholder text…" class="slds-input" />
    <div class="slds-input__icon-group slds-input__icon-group_right">
      <div role="status" class="slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
      <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Clear">
        <svg class="slds-button__icon slds-icon-text-light" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clear"></use>
        </svg>
        <span class="slds-assistive-text">Clear</span>
      </button>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Fixed Text"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-69" id="fixed-text-label">Input Label</label>
  <div class="slds-form-element__control slds-input-has-fixed-addon">
    <span class="slds-form-element__addon" id="fixed-text-addon-pre">$</span>
    <input type="text" id="text-input-id-69" placeholder="Placeholder text…" aria-labelledby="fixed-text-label fixed-text-addon-pre fixed-text-addon-post" class="slds-input" />
    <span class="slds-form-element__addon" id="fixed-text-addon-post">euro</span>
  </div>
</div>
:::

::: legacy-component-example title="Inline Help"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-72" id="inline-text-label">Input Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="text-input-id-72" placeholder="Placeholder text…" aria-describedby="error-message-id-73" class="slds-input" aria-invalid="true" />
  </div>
  <div class="slds-form-element__help" id="error-message-id-73">ex: (415)111-2222</div>
</div>
:::

::: legacy-component-example title="Field Level Help"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-75">Input Label</label>
  <div class="slds-form-element__icon">
    <button class="slds-button slds-button_icon" aria-describedby="help">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
      </svg>
      <span class="slds-assistive-text">Help</span>
    </button>
    <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style="position:absolute;top:-45px;left:-15px;width:170px">
      <div class="slds-popover__body">Some helpful information.</div>
    </div>
  </div>
  <div class="slds-form-element__control">
    <input type="text" id="text-input-id-75" placeholder="Placeholder text…" class="slds-input" />
  </div>
</div>
:::
