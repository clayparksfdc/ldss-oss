---
title: Select
---

SLDS 1 blueprint examples for **Select**.

::: legacy-component-example title="Base"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="select-01">Select Label</label>
  <div class="slds-form-element__control">
    <div class="slds-select_container">
      <select class="slds-select" id="select-01">
        <option value="">Select…</option>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-form-element slds-has-error">
  <label class="slds-form-element__label" for="select-01">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Select Label</label>
  <div class="slds-form-element__control">
    <div class="slds-select_container">
      <select aria-describedby="error-01" class="slds-select" id="select-01" required="">
        <option value="">Select…</option>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </div>
  </div>
  <div class="slds-form-element__help" id="error-01">Select an option.</div>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="select-01">Select Label</label>
  <div class="slds-form-element__control">
    <div class="slds-select_container">
      <select class="slds-select" disabled="" id="select-01">
        <option value="">Select…</option>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Required"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="select-01">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Select Label</label>
  <div class="slds-form-element__control">
    <div class="slds-select_container">
      <select class="slds-select" id="select-01" required="">
        <option value="">Select…</option>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Multiple Selection"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-9">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-9" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-10">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-10" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Multiple Selection Narrow"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="select-01">Select Label</label>
  <div class="slds-form-element__control">
    <select class="slds-select" id="select-01" multiple="">
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </select>
  </div>
</div>
:::
