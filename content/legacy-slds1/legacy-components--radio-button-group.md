---
title: Radio Button Group
---

SLDS 1 blueprint examples for **Radio Button Group**.

::: legacy-component-example title="Default"
<fieldset class="slds-form-element" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">Radio Group Label</legend>
  <div class="slds-form-element__control">
    <div class="slds-radio_button-group">
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-99" id="example-unique-id-101" value="monday" />
        <label class="slds-radio_button__label" for="example-unique-id-101">
          <span class="slds-radio_faux">Mon</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-99" id="example-unique-id-102" value="tuesday" />
        <label class="slds-radio_button__label" for="example-unique-id-102">
          <span class="slds-radio_faux">Tue</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-99" id="example-unique-id-103" value="wednesday" />
        <label class="slds-radio_button__label" for="example-unique-id-103">
          <span class="slds-radio_faux">Wed</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-99" id="example-unique-id-104" value="thursday" />
        <label class="slds-radio_button__label" for="example-unique-id-104">
          <span class="slds-radio_faux">Thu</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-99" id="example-unique-id-105" value="friday" />
        <label class="slds-radio_button__label" for="example-unique-id-105">
          <span class="slds-radio_faux">Fri</span>
        </label>
      </span>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="Disabled"
<fieldset class="slds-form-element" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">Radio Group Label</legend>
  <div class="slds-form-element__control">
    <div class="slds-radio_button-group">
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-113" id="example-unique-id-115" value="monday" disabled="" />
        <label class="slds-radio_button__label" for="example-unique-id-115">
          <span class="slds-radio_faux">Mon</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-113" id="example-unique-id-116" value="tuesday" disabled="" />
        <label class="slds-radio_button__label" for="example-unique-id-116">
          <span class="slds-radio_faux">Tue</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-113" id="example-unique-id-117" value="wednesday" disabled="" />
        <label class="slds-radio_button__label" for="example-unique-id-117">
          <span class="slds-radio_faux">Wed</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-113" id="example-unique-id-118" value="thursday" disabled="" />
        <label class="slds-radio_button__label" for="example-unique-id-118">
          <span class="slds-radio_faux">Thu</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-113" id="example-unique-id-119" value="friday" disabled="" />
        <label class="slds-radio_button__label" for="example-unique-id-119">
          <span class="slds-radio_faux">Fri</span>
        </label>
      </span>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="Required"
<fieldset class="slds-form-element" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">
    <abbr class="slds-required" title="required" aria-hidden="true">*</abbr>Radio Group Label</legend>
  <div class="slds-form-element__control">
    <div class="slds-radio_button-group">
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-127" id="example-unique-id-129" value="monday" />
        <label class="slds-radio_button__label" for="example-unique-id-129">
          <span class="slds-radio_faux">Mon</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-127" id="example-unique-id-130" value="tuesday" />
        <label class="slds-radio_button__label" for="example-unique-id-130">
          <span class="slds-radio_faux">Tue</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-127" id="example-unique-id-131" value="wednesday" />
        <label class="slds-radio_button__label" for="example-unique-id-131">
          <span class="slds-radio_faux">Wed</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-127" id="example-unique-id-132" value="thursday" />
        <label class="slds-radio_button__label" for="example-unique-id-132">
          <span class="slds-radio_faux">Thu</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-127" id="example-unique-id-133" value="friday" />
        <label class="slds-radio_button__label" for="example-unique-id-133">
          <span class="slds-radio_faux">Fri</span>
        </label>
      </span>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="Has Error"
<fieldset class="slds-form-element slds-has-error" role="radiogroup">
  <legend class="slds-form-element__legend slds-form-element__label">
    <abbr class="slds-required" title="required" aria-hidden="true">*</abbr>Radio Group Label</legend>
  <div class="slds-form-element__control">
    <div class="slds-radio_button-group">
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-141" id="example-unique-id-143" value="monday" aria-describedby="error-unique-id-142" />
        <label class="slds-radio_button__label" for="example-unique-id-143">
          <span class="slds-radio_faux">Mon</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-141" id="example-unique-id-144" value="tuesday" aria-describedby="error-unique-id-142" />
        <label class="slds-radio_button__label" for="example-unique-id-144">
          <span class="slds-radio_faux">Tue</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-141" id="example-unique-id-145" value="wednesday" aria-describedby="error-unique-id-142" />
        <label class="slds-radio_button__label" for="example-unique-id-145">
          <span class="slds-radio_faux">Wed</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-141" id="example-unique-id-146" value="thursday" aria-describedby="error-unique-id-142" />
        <label class="slds-radio_button__label" for="example-unique-id-146">
          <span class="slds-radio_faux">Thu</span>
        </label>
      </span>
      <span class="slds-button slds-radio_button">
        <input type="radio" name="example-unique-name-141" id="example-unique-id-147" value="friday" aria-describedby="error-unique-id-142" />
        <label class="slds-radio_button__label" for="example-unique-id-147">
          <span class="slds-radio_faux">Fri</span>
        </label>
      </span>
    </div>
    <div id="error-unique-id-142" class="slds-form-element__help">This field is required</div>
  </div>
</fieldset>
:::
