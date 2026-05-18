---
title: Picklist
---

SLDS 1 blueprint examples for **Picklist**.

::: legacy-component-example title="Default"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-1" id="combobox-label-id-27">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-size_small">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-27" id="combobox-id-1-selected-value" aria-controls="listbox-id-1" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-27">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option70" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option A">Option A</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option71" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option B">Option B</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option72" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option ABCDE FGHIJ KLMNO PQRST UVWXYZ">Option ABCDE FGHIJ KLMNO PQRST UVWXYZ</span>
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

::: legacy-component-example title="Focused"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-2" id="combobox-label-id-29">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-size_small">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-29" id="combobox-id-2-selected-value" aria-controls="listbox-id-2" aria-expanded="true" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-29">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-2" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option76" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option A">Option A</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option77" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option B">Option B</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option78" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option ABCDE FGHIJ KLMNO PQRST UVWXYZ">Option ABCDE FGHIJ KLMNO PQRST UVWXYZ</span>
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

::: legacy-component-example title="Open - Item Focused"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-3" id="combobox-label-id-31">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-size_small">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-31" id="combobox-id-3-selected-value" aria-controls="listbox-id-3" aria-expanded="true" aria-haspopup="listbox" aria-activedescendant="option1">
            <span class="slds-truncate" id="combobox-value-id-31">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-3" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-selected="true" id="option82" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-has-focus" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option A">Option A</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option83" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option B">Option B</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option84" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option ABCDE FGHIJ KLMNO PQRST UVWXYZ">Option ABCDE FGHIJ KLMNO PQRST UVWXYZ</span>
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

::: legacy-component-example title="Open - Option Selected"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-4" id="combobox-label-id-33">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-size_small">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus slds-combobox__input-value" aria-labelledby="combobox-label-id-33" id="combobox-id-4-selected-value" aria-controls="listbox-id-4" aria-expanded="true"
            aria-haspopup="listbox" aria-activedescendant="option1">
            <span class="slds-truncate" id="combobox-value-id-33">Option A</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-4" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option88" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Option A">Option A</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option89" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option B">Option B</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option90" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option ABCDE FGHIJ KLMNO PQRST UVWXYZ">Option ABCDE FGHIJ KLMNO PQRST UVWXYZ</span>
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

::: legacy-component-example title="Open - Options Selected"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-5" id="combobox-label-id-35">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-size_small">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus slds-combobox__input-value" aria-labelledby="combobox-label-id-35" id="combobox-id-5-selected-value" aria-controls="listbox-id-5" aria-expanded="true"
            aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-35">2 Options Selected</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-5" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option94" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Option A">Option A</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option95" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Option B">Option B</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option96" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option ABCDE FGHIJ KLMNO PQRST UVWXYZ">Option ABCDE FGHIJ KLMNO PQRST UVWXYZ</span>
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

::: legacy-component-example title="Closed - Option Selected"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-6" id="combobox-label-id-37">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-size_small">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-37" id="combobox-id-6-selected-value" aria-controls="listbox-id-6" aria-expanded="false" aria-haspopup="listbox"
            aria-activedescendant="option1">
            <span class="slds-truncate" id="combobox-value-id-37">Option A</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-6" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option100" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Option A">Option A</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option101" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option B">Option B</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option102" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option ABCDE FGHIJ KLMNO PQRST UVWXYZ">Option ABCDE FGHIJ KLMNO PQRST UVWXYZ</span>
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

::: legacy-component-example title="Closed - Options Selected"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-7" id="combobox-label-id-39">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-size_small">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-39" id="combobox-id-7-selected-value" aria-controls="listbox-id-7" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-39">2 Options Selected</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-7" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option106" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Option A">Option A</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option107" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Option B">Option B</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option108" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option ABCDE FGHIJ KLMNO PQRST UVWXYZ">Option ABCDE FGHIJ KLMNO PQRST UVWXYZ</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slds-listbox_selection-group">
      <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:">
        <li class="slds-listbox-item">
          <span class="slds-pill">
            <span class="slds-pill__label" title="Option A">Option A</span>
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
            <span class="slds-pill__label" title="Option B">Option B</span>
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
  </div>
</div>
:::

::: legacy-component-example title="Group heading label"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-8" id="combobox-label-id-41">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-size_small">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-41" id="combobox-id-8-selected-value" aria-controls="listbox-id-8" aria-expanded="true" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-41">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-8" class="slds-dropdown slds-dropdown_fluid" role="listbox" tabindex="0">
          <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="Group One">
            <li role="presentation" class="slds-listbox__item">
              <div id="option0" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                <h3 class="slds-listbox__option-header" role="presentation">Recently Viewed</h3>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option1" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option A">Option A</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option2" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Option B">Option B</span>
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
