---
title: Checkbox Button Group
---

SLDS 1 blueprint examples for **Checkbox Button Group**.

::: legacy-component-example title="Base"
<fieldset class="slds-form-element">
  <legend class="slds-form-element__legend slds-form-element__label">Scheduled Day(s)</legend>
  <div class="slds-form-element__control">
    <div class="slds-checkbox_button-group">
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" id="unique-id-monday-13" value="unique-id-monday-13" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-monday-13">
          <span class="slds-checkbox_faux">Mon</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" id="unique-id-tuesday-13" value="unique-id-tuesday-13" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-tuesday-13">
          <span class="slds-checkbox_faux">Tue</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" id="unique-id-wednesday-13" value="unique-id-wednesday-13" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-wednesday-13">
          <span class="slds-checkbox_faux">Wed</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" id="unique-id-thursday-13" value="unique-id-thursday-13" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-thursday-13">
          <span class="slds-checkbox_faux">Thu</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" id="unique-id-friday-13" value="unique-id-friday-13" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-friday-13">
          <span class="slds-checkbox_faux">Fri</span>
        </label>
      </span>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="Has Error"
<fieldset class="slds-form-element slds-has-error">
  <legend class="slds-form-element__legend slds-form-element__label">Scheduled Day(s)</legend>
  <div class="slds-form-element__control">
    <div class="slds-checkbox_button-group">
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" aria-describedby="error_01" id="unique-id-monday-15" value="unique-id-monday-15" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-monday-15">
          <span class="slds-checkbox_faux">Mon</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" aria-describedby="error_01" id="unique-id-tuesday-15" value="unique-id-tuesday-15" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-tuesday-15">
          <span class="slds-checkbox_faux">Tue</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" aria-describedby="error_01" id="unique-id-wednesday-15" value="unique-id-wednesday-15" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-wednesday-15">
          <span class="slds-checkbox_faux">Wed</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" aria-describedby="error_01" id="unique-id-thursday-15" value="unique-id-thursday-15" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-thursday-15">
          <span class="slds-checkbox_faux">Thu</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" aria-describedby="error_01" id="unique-id-friday-15" value="unique-id-friday-15" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-friday-15">
          <span class="slds-checkbox_faux">Fri</span>
        </label>
      </span>
    </div>
    <div id="error_01" class="slds-form-element__help">This field is required</div>
  </div>
</fieldset>
:::

::: legacy-component-example title="Disabled"
<fieldset class="slds-form-element">
  <legend class="slds-form-element__legend slds-form-element__label">Scheduled Day(s)</legend>
  <div class="slds-form-element__control">
    <div class="slds-checkbox_button-group">
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" disabled="" id="unique-id-monday-17" value="unique-id-monday-17" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-monday-17">
          <span class="slds-checkbox_faux">Mon</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" disabled="" id="unique-id-tuesday-17" value="unique-id-tuesday-17" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-tuesday-17">
          <span class="slds-checkbox_faux">Tue</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" disabled="" id="unique-id-wednesday-17" value="unique-id-wednesday-17" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-wednesday-17">
          <span class="slds-checkbox_faux">Wed</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" disabled="" id="unique-id-thursday-17" value="unique-id-thursday-17" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-thursday-17">
          <span class="slds-checkbox_faux">Thu</span>
        </label>
      </span>
      <span class="slds-button slds-checkbox_button">
        <input type="checkbox" disabled="" id="unique-id-friday-17" value="unique-id-friday-17" name="checkbox" />
        <label class="slds-checkbox_button__label" for="unique-id-friday-17">
          <span class="slds-checkbox_faux">Fri</span>
        </label>
      </span>
    </div>
  </div>
</fieldset>
:::
