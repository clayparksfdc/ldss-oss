---
title: Radio Group
---

SLDS 1 blueprint examples for **Radio Group**.

::: legacy-component-example title="Base"
<fieldset class="slds-form-element" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">Radio Group Label</legend>
  <div class="slds-form-element__control">
    <span class="slds-radio">
      <input type="radio" id="radio-61" value="radio-61" name="default" checked="" />
      <label class="slds-radio__label" for="radio-61">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="slds-radio">
      <input type="radio" id="radio-62" value="radio-62" name="default" />
      <label class="slds-radio__label" for="radio-62">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>
:::

::: legacy-component-example title="Disabled"
<fieldset class="slds-form-element" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">Radio Group Label</legend>
  <div class="slds-form-element__control">
    <span class="slds-radio">
      <input type="radio" id="radio-65" value="radio-65" name="disabled" disabled="" />
      <label class="slds-radio__label" for="radio-65">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="slds-radio">
      <input type="radio" id="radio-66" value="radio-66" name="disabled" disabled="" />
      <label class="slds-radio__label" for="radio-66">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>
:::

::: legacy-component-example title="Checked and Disabled"
<fieldset class="slds-form-element" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">Radio Group Label</legend>
  <div class="slds-form-element__control">
    <span class="slds-radio">
      <input type="radio" id="radio-69" value="radio-69" name="checked-and-disabled" disabled="" checked="" />
      <label class="slds-radio__label" for="radio-69">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="slds-radio">
      <input type="radio" id="radio-70" value="radio-70" name="checked-and-disabled" disabled="" />
      <label class="slds-radio__label" for="radio-70">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>
:::

::: legacy-component-example title="Required"
<fieldset class="slds-form-element" role="radiogroup" aria-required="true">
  <legend class="slds-form-element__legend slds-form-element__label">
    <abbr class="slds-required" title="required" aria-hidden="true">*</abbr> Radio Group Label</legend>
  <div class="slds-form-element__control">
    <span class="slds-radio">
      <input type="radio" id="radio-73" value="radio-73" name="required" checked="" />
      <label class="slds-radio__label" for="radio-73">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="slds-radio">
      <input type="radio" id="radio-74" value="radio-74" name="required" />
      <label class="slds-radio__label" for="radio-74">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>
:::

::: legacy-component-example title="Error"
<fieldset class="slds-form-element slds-has-error" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">
    <abbr class="slds-required" title="required" aria-hidden="true">*</abbr> Radio Group Label</legend>
  <div class="slds-form-element__control">
    <span class="slds-radio">
      <input type="radio" id="radio-77" value="radio-77" name="error" aria-describedby="error_01" checked="" />
      <label class="slds-radio__label" for="radio-77">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="slds-radio">
      <input type="radio" id="radio-78" value="radio-78" name="error" aria-describedby="error_01" />
      <label class="slds-radio__label" for="radio-78">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
  <div id="error_01" class="slds-form-element__help">This field is required</div>
</fieldset>
:::

::: legacy-component-example title="Required with Help Text Icon"
<fieldset class="slds-form-element" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">
    <abbr class="slds-required" title="required" aria-hidden="true">*</abbr> Radio Group Label</legend>
  <div class="slds-form-element__icon">
    <button class="slds-button slds-button_icon">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
      </svg>
      <span class="slds-assistive-text">Help</span>
    </button>
  </div>
  <div class="slds-form-element__control">
    <span class="slds-radio">
      <input type="radio" id="radio-81" value="radio-81" name="options" checked="" />
      <label class="slds-radio__label" for="radio-81">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="slds-radio">
      <input type="radio" id="radio-82" value="radio-82" name="options" />
      <label class="slds-radio__label" for="radio-82">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>
:::

::: legacy-component-example title="Required with Help Text Icon and Tooltip"
<fieldset class="slds-form-element" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">
    <abbr class="slds-required" title="required" aria-hidden="true">*</abbr> Radio Group Label</legend>
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
    <span class="slds-radio">
      <input type="radio" id="radio-85" value="radio-85" name="options" checked="" />
      <label class="slds-radio__label" for="radio-85">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="slds-radio">
      <input type="radio" id="radio-86" value="radio-86" name="options" />
      <label class="slds-radio__label" for="radio-86">
        <span class="slds-radio_faux"></span>
        <span class="slds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>
:::

::: legacy-component-example title="Right to Left"
<div dir="rtl">
  <fieldset class="slds-form-element" role="radiogroup">
    <legend class="slds-form-element__legend slds-form-element__label">Radio Group Label</legend>
    <div class="slds-form-element__control">
      <span class="slds-radio">
        <input type="radio" id="radio-89" value="radio-89" name="rtl" checked="" />
        <label class="slds-radio__label" for="radio-89">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Radio Label One</span>
        </label>
      </span>
      <span class="slds-radio">
        <input type="radio" id="radio-90" value="radio-90" name="rtl" />
        <label class="slds-radio__label" for="radio-90">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Radio Label Two</span>
        </label>
      </span>
    </div>
  </fieldset>
</div>
:::

::: legacy-component-example title="Right to Left Required with Help Text Icon"
<div dir="rtl">
  <fieldset class="slds-form-element" role="radiogroup">
    <legend class="slds-form-element__legend slds-form-element__label">
      <abbr class="slds-required" title="required" aria-hidden="true">*</abbr> Radio Group Label</legend>
    <div class="slds-form-element__icon">
      <button class="slds-button slds-button_icon">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
        </svg>
        <span class="slds-assistive-text">Help</span>
      </button>
    </div>
    <div class="slds-form-element__control">
      <span class="slds-radio">
        <input type="radio" id="radio-93" value="radio-93" name="rtl-required" checked="" />
        <label class="slds-radio__label" for="radio-93">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Radio Label One</span>
        </label>
      </span>
      <span class="slds-radio">
        <input type="radio" id="radio-94" value="radio-94" name="rtl-required" />
        <label class="slds-radio__label" for="radio-94">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Radio Label Two</span>
        </label>
      </span>
    </div>
  </fieldset>
</div>
:::
