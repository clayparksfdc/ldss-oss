---
title: Checkbox
---

SLDS 1 blueprint examples for **Checkbox**.

::: legacy-component-example title="Base"
<div class="slds-form-element">
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-81" value="checkbox-unique-id-81" checked="" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-81">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Required"
<div class="slds-form-element">
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <abbr class="slds-required" title="required" aria-hidden="true">*</abbr>
      <input type="checkbox" name="options" id="checkbox-unique-id-83" value="checkbox-unique-id-83" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-83">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-form-element slds-has-error">
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <abbr class="slds-required" title="required" aria-hidden="true">*</abbr>
      <input type="checkbox" name="options" id="checkbox-unique-id-85" value="checkbox-unique-id-85" aria-describedby="error_01" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-85">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
  <div class="slds-form-element__help" id="error_01">This field is required</div>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-form-element">
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-87" value="checkbox-unique-id-87" disabled="" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-87">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-form-element">
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-89" value="checkbox-unique-id-89" disabled="" checked="" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-89">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Group"
<fieldset class="slds-form-element">
  <legend class="slds-form-element__legend slds-form-element__label">Checkbox Group Label</legend>
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-92" value="checkbox-unique-id-92" checked="" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-92">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-93" value="checkbox-unique-id-93" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-93">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="Group"
<fieldset class="slds-form-element slds-is-required">
  <legend class="slds-form-element__legend slds-form-element__label">
    <abbr class="slds-required" title="required" aria-hidden="true">*</abbr> Checkbox Group Label</legend>
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-96" value="checkbox-unique-id-96" checked="" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-96">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-97" value="checkbox-unique-id-97" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-97">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="Group"
<fieldset class="slds-form-element slds-is-required slds-has-error">
  <legend class="slds-form-element__legend slds-form-element__label">
    <abbr class="slds-required" title="required" aria-hidden="true">*</abbr> Checkbox Group Label</legend>
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-100" value="checkbox-unique-id-100" aria-describedby="error_01" checked="" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-100">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-101" value="checkbox-unique-id-101" aria-describedby="error_01" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-101">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
  <div id="error_01" class="slds-form-element__help">This field is required</div>
</fieldset>
:::

::: legacy-component-example title="Group"
<fieldset class="slds-form-element">
  <legend class="slds-form-element__legend slds-form-element__label">Checkbox Group Label</legend>
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-104" value="checkbox-unique-id-104" disabled="" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-104">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
    <div class="slds-checkbox">
      <input type="checkbox" name="options" id="checkbox-unique-id-105" value="checkbox-unique-id-105" disabled="" />
      <label class="slds-checkbox__label" for="checkbox-unique-id-105">
        <span class="slds-checkbox_faux"></span>
        <span class="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="RTL (right to left direction)"
<div dir="rtl">
  <div class="slds-form-element">
    <div class="slds-form-element__control">
      <div class="slds-checkbox">
        <input type="checkbox" name="options" id="checkbox-unique-id-107" value="checkbox-unique-id-107" checked="" />
        <label class="slds-checkbox__label" for="checkbox-unique-id-107">
          <span class="slds-checkbox_faux"></span>
          <span class="slds-form-element__label">Checkbox Label</span>
        </label>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Form Element"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="checkbox-unique-id-109">Form Element Label</label>
  <div class="slds-form-element__control">
    <span class="slds-checkbox slds-checkbox_standalone">
      <input type="checkbox" id="checkbox-unique-id-109" name="label" value="option" />
      <span class="slds-checkbox_faux"></span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Checked"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="checkbox-unique-id-111">Form Element Label</label>
  <div class="slds-form-element__control">
    <span class="slds-checkbox slds-checkbox_standalone">
      <input type="checkbox" id="checkbox-unique-id-111" name="label" value="option" checked="" />
      <span class="slds-checkbox_faux"></span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="checkbox-unique-id-113">Form Element Label</label>
  <div class="slds-form-element__control">
    <span class="slds-checkbox slds-checkbox_standalone">
      <input type="checkbox" id="checkbox-unique-id-113" name="label" value="option" disabled="" />
      <span class="slds-checkbox_faux"></span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Checked and Disabled"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="checkbox-unique-id-115">Form Element Label</label>
  <div class="slds-form-element__control">
    <span class="slds-checkbox slds-checkbox_standalone">
      <input type="checkbox" id="checkbox-unique-id-115" name="label" value="option" disabled="" checked="" />
      <span class="slds-checkbox_faux"></span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-form-element slds-has-error">
  <label class="slds-form-element__label" for="checkbox-unique-id-117">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Form Element Label</label>
  <div class="slds-form-element__control">
    <span class="slds-checkbox slds-checkbox_standalone">
      <input type="checkbox" id="checkbox-unique-id-117" name="label" value="option" required="" aria-describedby="error-unique-id-37" />
      <span class="slds-checkbox_faux"></span>
    </span>
  </div>
  <div class="slds-form-element__help" id="error-unique-id-37">This field is required</div>
</div>
:::

::: legacy-component-example title="Required"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="checkbox-unique-id-119">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Form Element Label</label>
  <div class="slds-form-element__control">
    <span class="slds-checkbox slds-checkbox_standalone">
      <input type="checkbox" id="checkbox-unique-id-119" name="label" value="option" required="" />
      <span class="slds-checkbox_faux"></span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Unchecked"
<div class="slds-form-element slds-form-element_readonly">
  <span class="slds-form-element__label">Form Element Label</span>
  <div class="slds-form-element__control">
    <span class="slds-icon_container slds-icon-utility-steps slds-current-color" title="False">
      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#steps"></use>
      </svg>
      <span class="slds-assistive-text">False</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Checked"
<div class="slds-form-element slds-form-element_readonly">
  <span class="slds-form-element__label">Form Element Label</span>
  <div class="slds-form-element__control">
    <span class="slds-icon_container slds-icon-utility-check slds-current-color" title="True">
      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
      </svg>
      <span class="slds-assistive-text">True</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="With help text"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="checkbox-unique-id-121">Form Element Label</label>
  <div class="slds-form-element__icon">
    <button class="slds-button slds-button_icon">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
      </svg>
      <span class="slds-assistive-text">Help</span>
    </button>
  </div>
  <div class="slds-form-element__control">
    <span class="slds-checkbox slds-checkbox_standalone">
      <input type="checkbox" id="checkbox-unique-id-121" name="label" value="option" />
      <span class="slds-checkbox_faux"></span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Required with help text"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="checkbox-unique-id-123">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Form Element Label</label>
  <div class="slds-form-element__icon">
    <button class="slds-button slds-button_icon">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
      </svg>
      <span class="slds-assistive-text">Help</span>
    </button>
  </div>
  <div class="slds-form-element__control">
    <span class="slds-checkbox slds-checkbox_standalone">
      <input type="checkbox" id="checkbox-unique-id-123" name="label" value="option" required="" />
      <span class="slds-checkbox_faux"></span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Required with help text with tooltip"
<div style="padding-top:3rem">
  <div class="slds-form-element">
    <label class="slds-form-element__label" for="checkbox-unique-id-125">
      <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Form Element Label</label>
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
      <span class="slds-checkbox slds-checkbox_standalone">
        <input type="checkbox" id="checkbox-unique-id-125" name="label" value="option" required="" />
        <span class="slds-checkbox_faux"></span>
      </span>
    </div>
  </div>
</div>
:::
