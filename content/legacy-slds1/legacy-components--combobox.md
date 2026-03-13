---
title: Combobox
---

SLDS 1 blueprint examples for **Combobox**.

::: legacy-component-example title="Example 1"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-2" id="combobox-label-id-131">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-131" id="combobox-id-2-selected-value" aria-controls="listbox-id-4" aria-expanded="true" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-94">Select an Option…</span>
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
              <div id="option724" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option725" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option726" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option727" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option728" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option729" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option730" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option731" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Base Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-59" id="combobox-label-id-133">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-133" id="combobox-id-59-selected-value" aria-controls="listbox-id-29" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-96">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-29" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option740" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option741" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option742" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option743" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option744" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option745" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option746" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option747" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Accessibility Note"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-2" id="combobox-label-id-135">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-135" id="combobox-id-2-selected-value" aria-controls="listbox-id-4" aria-expanded="true" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-98">Select an Option…</span>
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
              <div id="option756" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option757" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option758" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option759" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option760" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option761" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option762" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option763" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Loading more options"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-9" id="combobox-label-id-137">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus slds-combobox__input-value" aria-labelledby="combobox-label-id-137" id="combobox-id-9-selected-value" aria-controls="listbox-id-222" aria-expanded="true"
            aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-100">Accounts</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-222" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="true">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option767" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option768" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option769" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="option" class="slds-listbox__item">
              <div class="slds-align_absolute-center slds-p-top_medium">
                <div role="status" class="slds-spinner slds-spinner_x-small slds-spinner_inline">
                  <span class="slds-assistive-text">Loading</span>
                  <div class="slds-spinner__dot-a"></div>
                  <div class="slds-spinner__dot-b"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Grouped options"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-10" id="combobox-label-id-139">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-139" id="combobox-id-10-selected-value" aria-controls="listbox-id-3" aria-expanded="true" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-102">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-3" class="slds-dropdown slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Options}}" tabindex="0">
          <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="Group One">
            <li role="presentation" class="slds-listbox__item">
              <div id="option0" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                <h3 class="slds-listbox__option-header" role="presentation">Group One</h3>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option1" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Burlington Textiles Corp of America">Burlington Textiles Corp of America</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option2" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Dickenson plc">Dickenson plc</span>
                </span>
              </div>
            </li>
          </ul>
          <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="Group Two">
            <li role="presentation" class="slds-listbox__item">
              <div id="option3" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                <h3 class="slds-listbox__option-header" role="presentation">Group Two</h3>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option4" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Dickenson plc">Dickenson plc</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option5" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Edge Communications">Edge Communications</span>
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

::: legacy-component-example title="Styling choices for options"
<div id="listbox-id-2" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
  <ul class="slds-listbox slds-listbox_vertical" role="presentation">
    <li role="presentation" class="slds-listbox__item">
      <div id="option774" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
        <span class="slds-media__figure slds-listbox__option-icon"></span>
        <span class="slds-media__body">
          <span class="" title="Edge Communications">Edge Communications</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div id="option775" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
        <span class="slds-media__figure slds-listbox__option-icon">
          <span class="slds-icon_container slds-icon-utility-anchor slds-current-color">
            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#anchor"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="" title="Alexandria Textiles Corp of America">Alexandria Textiles Corp of America</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div id="option776" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-listbox__option_has-meta" role="option">
        <span class="slds-media__figure slds-listbox__option-icon"></span>
        <span class="slds-media__body">
          <span class="" title="Express Logistics and Transport">Express Logistics and Transport</span>
          <span class="slds-listbox__option-meta">Durham, NC</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div id="option777" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-listbox__option_has-meta" role="option">
        <span class="slds-media__figure slds-listbox__option-icon">
          <span class="slds-icon_container slds-icon-utility-anchor slds-current-color">
            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#anchor"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="" title="Alexandria Textiles Corp of America">Alexandria Textiles Corp of America</span>
          <span class="slds-listbox__option-meta">Alexandria, VA</span>
        </span>
      </div>
    </li>
  </ul>
</div>
:::

::: legacy-component-example title="Disabled listbox items"
<div id="listbox-id-7" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
  <ul class="slds-listbox slds-listbox_vertical" role="presentation">
    <li role="presentation" class="slds-listbox__item">
      <div aria-disabled="true" id="option781" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
        <span class="slds-media__figure slds-listbox__option-icon"></span>
        <span class="slds-media__body">
          <span class="" title="Edge Communications">Edge Communications</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div aria-disabled="true" id="option782" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
        <span class="slds-media__figure slds-listbox__option-icon">
          <span class="slds-icon_container slds-icon-utility-anchor slds-current-color">
            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#anchor"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="" title="Alexandria Textiles Corp of America">Alexandria Textiles Corp of America</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div id="option783" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-listbox__option_has-meta" role="option">
        <span class="slds-media__figure slds-listbox__option-icon"></span>
        <span class="slds-media__body">
          <span class="" title="Express Logistics and Transport">Express Logistics and Transport</span>
          <span class="slds-listbox__option-meta">Durham, NC</span>
        </span>
      </div>
    </li>
  </ul>
</div>
:::

::: legacy-component-example title="Disabled listbox items"
<div id="listbox-id-8" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
  <ul class="slds-listbox slds-listbox_vertical" role="presentation">
    <li role="presentation" class="slds-listbox__item">
      <div aria-disabled="true" id="option787" class="slds-media slds-listbox__option slds-listbox__option_entity slds-media_center" role="option">
        <span class="slds-media__figure slds-listbox__option-icon slds-listbox__option-icon-disabled">
          <span class="slds-icon_container slds-icon-standard-account slds-icon_disabled">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div aria-disabled="true" id="option788" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
        <span class="slds-media__figure slds-listbox__option-icon slds-listbox__option-icon-disabled">
          <span class="slds-icon_container slds-icon-standard-account slds-icon_disabled">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Express Logistics and Transport</span>
          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity slds-listbox__option-meta-disabled">Account • Durham, NC</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div id="option789" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
        <span class="slds-media__figure slds-listbox__option-icon">
          <span class="slds-icon_container slds-icon-standard-account">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Alexandria Textiles Corp of America</span>
          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Alexandria, VA</span>
        </span>
        <span class="slds-icon_container slds-icon-utility-chevronright slds-align-middle" title="Has further options">
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Has further options</span>
        </span>
      </div>
    </li>
  </ul>
</div>
:::

::: legacy-component-example title="Expanding the Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-2" id="combobox-label-id-141">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-141" id="combobox-id-2-selected-value" aria-controls="listbox-id-4" aria-expanded="true" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-104">Select an Option…</span>
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
              <div id="option798" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option799" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option800" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option801" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option802" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option803" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option804" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option805" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Expanding the Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-1" id="combobox-label-id-143">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-143" id="combobox-id-1-selected-value" aria-controls="listbox-id-4" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-106">Select an Option…</span>
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
              <div aria-selected="true" id="option814" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-has-focus" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option815" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option816" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option817" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option818" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option819" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option820" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option821" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Accessibility Requirement"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-3" id="combobox-label-id-145">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus" aria-labelledby="combobox-label-id-145" id="combobox-id-3-selected-value" aria-controls="listbox-id-4" aria-expanded="true" aria-haspopup="listbox" aria-activedescendant="option1">
            <span class="slds-truncate" id="combobox-value-id-108">Select an Option…</span>
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
              <div aria-selected="true" id="option830" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-has-focus" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option831" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option832" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option833" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option834" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option835" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option836" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option837" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Selecting an option"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-5" id="combobox-label-id-147">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-147" id="combobox-id-5-selected-value" aria-controls="listbox-id-5" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-110">Accounts</span>
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
              <div aria-selected="true" aria-checked="true" id="option846" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option847" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option848" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option849" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option850" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option851" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option852" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option853" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Single selection"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-4" id="combobox-label-id-149">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus slds-combobox__input-value" aria-labelledby="combobox-label-id-149" id="combobox-id-4-selected-value" aria-controls="listbox-id-6" aria-expanded="true"
            aria-haspopup="listbox" aria-activedescendant="option1">
            <span class="slds-truncate" id="combobox-value-id-112">Accounts</span>
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
              <div aria-selected="true" aria-checked="true" id="option862" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option863" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option864" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option865" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option866" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option867" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option868" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option869" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Multiple selections"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-6" id="combobox-label-id-151">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus slds-combobox__input-value" aria-labelledby="combobox-label-id-151" id="combobox-id-6-selected-value" aria-controls="listbox-id-7" aria-expanded="true"
            aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-114">2 Options Selected</span>
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
              <div aria-checked="true" id="option878" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option879" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option880" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option881" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option882" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option883" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option884" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option885" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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

::: legacy-component-example title="Multiple selections"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-7" id="combobox-label-id-153">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-153" id="combobox-id-7-selected-value" aria-controls="listbox-id-8" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-116">2 Options Selected</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-8" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option894" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Accounts">Accounts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div aria-checked="true" id="option895" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="" title="Reports">Reports</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option896" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Contacts">Contacts</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option897" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Files">Files</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option898" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option899" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Leads">Leads</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option900" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Notes">Notes</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option901" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Groups">Groups</span>
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
            <span class="slds-pill__label" title="Accounts">Accounts</span>
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
            <span class="slds-pill__label" title="Reports">Reports</span>
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

::: legacy-component-example title="Accessibility Difference"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-11" id="combobox-label-id-155">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input" id="combobox-id-11" aria-autocomplete="list" aria-controls="listbox-id-9" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-9" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option905" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Burlington Textiles Corp of America">Burlington Textiles Corp of America</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option906" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Dickenson plc">Dickenson plc</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option907" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Edge Communications">Edge Communications</span>
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

::: legacy-component-example title="Displaying options"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-12" id="combobox-label-id-157">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-12" aria-autocomplete="list" aria-controls="listbox-id-10" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
          />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-10" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option911" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Burlington Textiles Corp of America">Burlington Textiles Corp of America</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option912" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Dickenson plc">Dickenson plc</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option913" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Edge Communications">Edge Communications</span>
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

::: legacy-component-example title="Accessibility Requirement"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-13" id="combobox-label-id-159">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus slds-combobox__input-value" id="combobox-id-13" aria-autocomplete="list" aria-controls="listbox-id-11" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox"
            placeholder="Search..." value="opp" />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-11" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option917" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="All Opportunities">
                    <span>All
                      <mark>Opp</mark>ortunities</span>
                  </span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option918" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="My Opportunities">
                    <span>My
                      <mark>Opp</mark>ortunities</span>
                  </span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option919" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Opportunity Pipeline">
                    <span>
                      <mark>Opp</mark>ortunity Pipeline</span>
                  </span>
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

::: legacy-component-example title="Drill In for Autocomplete"
<div id="listbox-id-3" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
  <ul class="slds-listbox slds-listbox_vertical" role="presentation">
    <li role="presentation" class="slds-listbox__item">
      <div id="option923" class="slds-media slds-listbox__option slds-listbox__option_entity slds-media_center" role="option">
        <span class="slds-media__figure slds-listbox__option-icon">
          <span class="slds-icon_container slds-icon-standard-account">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div id="option924" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
        <span class="slds-media__figure slds-listbox__option-icon">
          <span class="slds-icon_container slds-icon-standard-account">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Express Logistics and Transport</span>
          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Durham, NC</span>
        </span>
      </div>
    </li>
    <li role="presentation" class="slds-listbox__item">
      <div id="option925" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
        <span class="slds-media__figure slds-listbox__option-icon">
          <span class="slds-icon_container slds-icon-standard-account">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
            </svg>
          </span>
        </span>
        <span class="slds-media__body">
          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Alexandria Textiles Corp of America</span>
          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Alexandria, VA</span>
        </span>
        <span class="slds-icon_container slds-icon-utility-chevronright slds-align-middle" title="Has further options">
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Has further options</span>
        </span>
      </div>
    </li>
  </ul>
</div>
:::

::: legacy-component-example title="Keyboard interaction"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-15" id="combobox-label-id-161">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-15" aria-activedescendant="option1" aria-autocomplete="list" aria-controls="listbox-id-12" aria-expanded="true" aria-haspopup="listbox" autoComplete="off"
            role="combobox" placeholder="Search..." />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-12" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-selected="true" id="option929" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-has-focus" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Burlington Textiles Corp of America">Burlington Textiles Corp of America</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option930" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Dickenson plc">Dickenson plc</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option931" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                <span class="slds-media__figure slds-listbox__option-icon"></span>
                <span class="slds-media__body">
                  <span class="" title="Edge Communications">Edge Communications</span>
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

::: legacy-component-example title="Selecting an option"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-17" id="combobox-label-id-163">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-has-selection">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-163" id="combobox-id-17-selected-value" aria-controls="listbox-id-20" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-118">GenePoint</span>
          </div>
          <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Clear the text input">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clear"></use>
            </svg>
            <span class="slds-assistive-text">Clear the text input</span>
          </button>
        </div>
        <div id="listbox-id-20" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option935" class="slds-media slds-listbox__option slds-listbox__option_entity slds-media_center" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option936" class="slds-media slds-listbox__option slds-listbox__option_entity slds-media_center" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option937" class="slds-media slds-listbox__option slds-listbox__option_entity slds-media_center" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
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

::: legacy-component-example title="Multiple selection"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-19" id="combobox-label-id-165">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-has-selection">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input" id="combobox-id-19" aria-autocomplete="list" aria-controls="listbox-id-13" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-13" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option941" class="slds-media slds-listbox__option slds-listbox__option_entity slds-media_center" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option942" class="slds-media slds-listbox__option slds-listbox__option_entity slds-media_center" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option943" class="slds-media slds-listbox__option slds-listbox__option_entity slds-media_center" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
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
            <span class="slds-pill__label" title="Burlington Textiles Corp of America">Burlington Textiles Corp of America</span>
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
            <span class="slds-pill__label" title="Dickenson plc">Dickenson plc</span>
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

::: legacy-component-example title="Entity Autocomplete Combobox (Lookup)"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-21" id="combobox-label-id-167">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input" id="combobox-id-21" aria-autocomplete="list" aria-controls="listbox-id-14" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-14" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option946" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option947" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
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

::: legacy-component-example title="Displaying options"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="listbox-id-1" id="combobox-label-id-169">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="listbox-id-1" aria-autocomplete="list" aria-controls="listbox-id-15" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
          />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-15" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Menu Items}}">
            <li role="presentation" class="slds-listbox__item">
              <div id="option950" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option951" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
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

::: legacy-component-example title="Displaying options based on user input"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-14" id="combobox-label-id-171">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus slds-combobox__input-value" id="combobox-id-14" aria-activedescendant="option0" aria-autocomplete="list" aria-controls="listbox-id-16" aria-expanded="true" aria-haspopup="listbox"
            autoComplete="off" role="combobox" placeholder="Search..." value="salesforce" />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-16" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-selected="true" id="option0" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_term slds-has-focus" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-utility-search" title="Search for term: ">
                    <svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                    <span class="slds-assistive-text">Search for term: </span>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">salesforce</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option955" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                    <span>
                      <mark>Salesforce</mark>.com</span>
                  </span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco, CA</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option956" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                    <span>
                      <mark>Salesforce</mark>.org</span>
                  </span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • New York, NY</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option957" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                    <span>
                      <mark>Salesforce</mark>HQ</span>
                  </span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco, CA</span>
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

::: legacy-component-example title="Keyboard interaction"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-16" id="combobox-label-id-173">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-16" aria-activedescendant="option1" aria-autocomplete="list" aria-controls="listbox-id-17" aria-expanded="true" aria-haspopup="listbox" autoComplete="off"
            role="combobox" placeholder="Search..." />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-17" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-selected="true" id="option960" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta slds-has-focus" role="option" tabindex="0">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option961" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
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

::: legacy-component-example title="Accessibility Requirement"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-18" id="combobox-label-id-175">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-has-selection">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right" role="none">
          <span class="slds-icon_container slds-icon-standard-account slds-combobox__input-entity-icon" title="Account">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
            </svg>
            <span class="slds-assistive-text">Account</span>
          </span>
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-175" id="combobox-id-18-selected-value" aria-controls="listbox-id-18" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-120">Salesforce.com, Inc.</span>
          </div>
          <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Remove selected option">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove selected option</span>
          </button>
        </div>
        <div id="listbox-id-18" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option964" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option965" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
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

::: legacy-component-example title="Multiple selection"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-20" id="combobox-label-id-177">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container slds-has-selection">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input" id="combobox-id-20" aria-autocomplete="list" aria-controls="listbox-id-19" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-19" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option968" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div id="option969" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                <span class="slds-media__figure slds-listbox__option-icon">
                  <span class="slds-icon_container slds-icon-standard-account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                    </svg>
                  </span>
                </span>
                <span class="slds-media__body">
                  <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                  <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Salesforce Inc.">Salesforce Inc.</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Dickenson plc">Dickenson plc</span>
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

::: legacy-component-example title="Accessibility Requirement"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-23">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-24" id="combobox-label-id-179">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-1">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-179" id="combobox-id-24-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-122">Filter by: Accounts</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option982" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option983" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Accounts">Accounts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option984" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option985" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option986" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option987" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option988" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option989" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Notes">Notes</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-combobox-id-1">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input" id="combobox-id-23" aria-autocomplete="list" aria-controls="listbox-id-2" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id-2" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option990" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option991" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option992" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Austin, TX</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option993" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Express Logistics and Transport</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Portland, OR</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="User input (Typeahead)"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-27">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-28" id="combobox-label-id-181">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-2">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-181" id="combobox-id-28-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-124">Filter by: Accounts</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1005" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1006" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Accounts">Accounts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1007" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1008" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1009" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1010" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1011" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1012" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Notes">Notes</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" id="primary-combobox-id-2">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input slds-has-focus slds-combobox__input-value" id="combobox-id-27" aria-activedescendant="option0" aria-autocomplete="list" aria-controls="listbox-id-4" aria-expanded="true" aria-haspopup="listbox"
              autoComplete="off" role="combobox" placeholder="Search..." value="salesforce" />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id-4" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div aria-selected="true" id="option0" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_term slds-has-focus" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-utility-search" title="Search for term: ">
                      <svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                      </svg>
                      <span class="slds-assistive-text">Search for term: </span>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">salesforce</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1013" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                      <span>
                        <mark>Salesforce</mark>.com</span>
                    </span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco, CA</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1014" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                      <span>
                        <mark>Salesforce</mark>.org</span>
                    </span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • New York, NY</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1015" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                      <span>
                        <mark>Salesforce</mark>HQ</span>
                    </span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco, CA</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="User input (Typeahead) - Loading"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-29">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-30" id="combobox-label-id-183">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-2">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-183" id="combobox-id-30-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-126">Filter by: Accounts</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1027" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1028" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Accounts">Accounts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1029" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1030" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1031" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1032" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1033" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1034" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Notes">Notes</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" id="primary-combobox-id-2">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_group-right" role="none">
            <input type="text" class="slds-input slds-combobox__input slds-has-focus slds-combobox__input-value" id="combobox-id-29" aria-activedescendant="option0" aria-autocomplete="list" aria-controls="listbox-id-5" aria-expanded="true" aria-haspopup="listbox"
              autoComplete="off" role="combobox" placeholder="Search..." value="salesforce" />
            <div class="slds-input__icon-group slds-input__icon-group_right">
              <div role="status" class="slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner">
                <span class="slds-assistive-text">Loading</span>
                <div class="slds-spinner__dot-a"></div>
                <div class="slds-spinner__dot-b"></div>
              </div>
              <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Remove selected option">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                </svg>
                <span class="slds-assistive-text">Remove selected option</span>
              </button>
            </div>
          </div>
          <div id="listbox-id-5" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div aria-selected="true" id="option0" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_term slds-has-focus" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-utility-search" title="Search for term: ">
                      <svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                      </svg>
                      <span class="slds-assistive-text">Search for term: </span>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">salesforce</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1035" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                      <span>
                        <mark>Salesforce</mark>.com</span>
                    </span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco, CA</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1036" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                      <span>
                        <mark>Salesforce</mark>.org</span>
                    </span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • New York, NY</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1037" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">
                      <span>
                        <mark>Salesforce</mark>HQ</span>
                    </span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco, CA</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Selecting options"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-31">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group slds-has-selection">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-32" id="combobox-label-id-185">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-3">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-185" id="combobox-id-32-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-128">Filter by: Accounts</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1050" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1051" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Accounts">Accounts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1052" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1053" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1054" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1055" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1056" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1057" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Notes">Notes</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-combobox-id-3">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-31" aria-autocomplete="list" aria-controls="listbox-id-6" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
            />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id-6" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option1058" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1059" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1060" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Austin, TX</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1061" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Express Logistics and Transport</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Portland, OR</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-listbox_selection-group">
      <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:">
        <li class="slds-listbox-item">
          <span class="slds-pill">
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Salesforce Inc.">Salesforce Inc.</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Dickenson plc">Dickenson plc</span>
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

::: legacy-component-example title="User input with selection(s) made"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-33">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group slds-has-selection">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-34" id="combobox-label-id-187">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-4">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-187" id="combobox-id-34-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-130">Filter by: Accounts</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1074" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1075" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Accounts">Accounts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1076" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1077" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1078" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1079" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1080" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1081" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Notes">Notes</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" id="primary-combobox-id-4">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-33" aria-autocomplete="list" aria-controls="please-provide-listbox-id-here" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox"
              placeholder="Search..." />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id31" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option1082" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1083" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1084" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Austin, TX</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1085" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Express Logistics and Transport</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Portland, OR</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-listbox_selection-group">
      <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:">
        <li class="slds-listbox-item">
          <span class="slds-pill">
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Salesforce Inc.">Salesforce Inc.</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Dickenson plc">Dickenson plc</span>
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

::: legacy-component-example title="Collapsed"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-35">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group slds-has-selection">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-36" id="combobox-label-id-189">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-5">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-189" id="combobox-id-36-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-132">Filter by: Accounts</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1098" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1099" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Accounts">Accounts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1100" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1101" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1102" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1103" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1104" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1105" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Notes">Notes</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-combobox-id-5">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input" id="combobox-id-35" aria-autocomplete="list" aria-controls="please-provide-listbox-id-here" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
            />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id33" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option1106" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1107" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1108" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Austin, TX</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1109" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Express Logistics and Transport</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Portland, OR</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-listbox_selection-group">
      <span class="slds-listbox-toggle" aria-hidden="true">
        <button class="slds-button" tabindex="-1">+6 more</button>
      </span>
      <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:">
        <li class="slds-listbox-item">
          <span class="slds-pill">
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Salesforce Inc.">Salesforce Inc.</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Dickenson plc">Dickenson plc</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Edge Communications">Edge Communications</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Express Logistics and Transport">Express Logistics and Transport</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="GenePoint">GenePoint</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Grand Hotels &amp; Resorts Ltd">Grand Hotels &amp; Resorts Ltd</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Pyramid Construction Inc.">Pyramid Construction Inc.</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="United Oil &amp; Gas Corp.">United Oil &amp; Gas Corp.</span>
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

::: legacy-component-example title="Expanded"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-37">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group slds-has-selection">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-38" id="combobox-label-id-191">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-6">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-191" id="combobox-id-38-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-134">Filter by: Accounts</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1122" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1123" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Accounts">Accounts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1124" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1125" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1126" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1127" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1128" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1129" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Notes">Notes</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-combobox-id-6">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-37" aria-autocomplete="list" aria-controls="please-provide-listbox-id-here" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox"
              placeholder="Search..." />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id35" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option1130" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1131" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1132" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Edge Communications</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Austin, TX</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1133" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Express Logistics and Transport</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Portland, OR</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-listbox_selection-group slds-is-expanded">
      <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:">
        <li class="slds-listbox-item">
          <span class="slds-pill">
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Salesforce Inc.">Salesforce Inc.</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Dickenson plc">Dickenson plc</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Edge Communications">Edge Communications</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Express Logistics and Transport">Express Logistics and Transport</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="GenePoint">GenePoint</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Grand Hotels &amp; Resorts Ltd">Grand Hotels &amp; Resorts Ltd</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="Pyramid Construction Inc.">Pyramid Construction Inc.</span>
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
            <span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container" title="Account">
              <svg class="slds-icon" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-pill__label" title="United Oil &amp; Gas Corp.">United Oil &amp; Gas Corp.</span>
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

::: legacy-component-example title="Text variant"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-39">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-40" id="combobox-label-id-193">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" aria-controls="primary-combobox-id-7">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-has-focus slds-combobox__input-value" aria-labelledby="combobox-label-id-193" id="combobox-id-40-selected-value" aria-controls="objectswitcher-listbox-id-1"
                    aria-expanded="true" aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-136">Filter by: Accounts</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-1" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1144" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1145" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Accounts">Accounts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1146" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1147" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1148" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1149" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1150" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1151" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Notes">Notes</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-combobox-id-7">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input" id="combobox-id-39" aria-autocomplete="list" aria-controls="please-provide-listbox-id-here" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
            />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id37" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option1152" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1153" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Icon variant"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-41">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-42" id="combobox-label-id-195">Filter By:</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container slds-has-icon-only">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-9">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right" role="none">
                  <span class="slds-icon_container slds-icon-utility-apex slds-input__icon slds-input__icon_left" title="apex">
                    <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#apex"></use>
                    </svg>
                    <span class="slds-assistive-text">apex</span>
                  </span>
                  <input type="text" class="slds-input slds-combobox__input slds-combobox__input-value" id="combobox-id-42" aria-controls="objectswitcher-listbox-id-2" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder=" "
                    value="Apex" />
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-2" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1160" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-apex slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#apex"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Apex">Apex</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1161" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-signpost slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#signpost"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Decisions">Decisions</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1162" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-rules slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#rules"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Rules">Rules</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1163" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-snippet slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#snippet"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Snippets">Snippets</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-combobox-id-9">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input" id="combobox-id-41" aria-autocomplete="list" aria-controls="please-provide-listbox-id-here" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
            />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id39" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option1164" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1165" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Icon variant"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-43">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-44" id="combobox-label-id-197">Filter Search by:</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container slds-has-icon-only">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" aria-controls="primary-combobox-id-8">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right" role="none">
                  <span class="slds-icon_container slds-icon-utility-apex slds-input__icon slds-input__icon_left" title="apex">
                    <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#apex"></use>
                    </svg>
                    <span class="slds-assistive-text">apex</span>
                  </span>
                  <input type="text" class="slds-input slds-combobox__input slds-has-focus slds-combobox__input-value" id="combobox-id-44" aria-controls="objectswitcher-listbox-id-2" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox"
                    placeholder=" " value="Apex" />
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="objectswitcher-listbox-id-2" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option1172" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-apex slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#apex"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Apex">Apex</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1173" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-signpost slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#signpost"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Decisions">Decisions</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1174" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-rules slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#rules"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Rules">Rules</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1175" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-snippet slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#snippet"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="Snippets">Snippets</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-combobox_container slds-combobox-addon_end">
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-combobox-id-8">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input" id="combobox-id-43" aria-autocomplete="list" aria-controls="please-provide-listbox-id-here" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
            />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </span>
          </div>
          <div id="listbox-id41" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option1176" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Burlington Textiles Corp of America</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Burlington, NC</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option1177" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">Dickenson plc</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Lawrence, KS</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Implementation Details"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-61" id="combobox-label-id-199">Languages</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-199" id="combobox-id-61-selected-value" aria-controls="popover-id-5" aria-expanded="false" aria-haspopup="dialog">
            <span class="slds-truncate" id="combobox-value-id-138">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <section aria-describedby="dialog-body-id-26" aria-label="Language Options" class="slds-popover slds-popover_full-width slds-popover_hide" id="popover-id-5" role="dialog">
          <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-26" tabindex="0" role="region">
            <div class="slds-media">
              <div class="slds-media__body">
                <div>Any content can go here in this Dialog</div>
              </div>
            </div>
          </div>
          <footer class="slds-popover__footer slds-popover__footer_form">
            <button class="slds-button"></button>
            <button class="slds-button"></button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Note"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-45" id="combobox-label-id-201">Languages</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-201" id="combobox-id-45-selected-value" aria-controls="popover-unique-id-01" aria-expanded="true" aria-haspopup="dialog">
            <span class="slds-truncate" id="combobox-value-id-140">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <section aria-describedby="dialog-body-id-28" aria-label="Language Options" class="slds-popover slds-popover_full-width" id="popover-unique-id-01" role="dialog">
          <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-28" tabindex="0" role="region">
            <div class="slds-media">
              <div class="slds-media__body">
                <div>Any content can go here in this Dialog</div>
              </div>
            </div>
          </div>
          <footer class="slds-popover__footer slds-popover__footer_form">
            <button class="slds-button slds-button_neutral">Cancel</button>
            <button class="slds-button slds-button_brand">Done</button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Dueling Picklist vs. Multi Select Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-46" id="combobox-label-id-203">Languages</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-203" id="combobox-id-46-selected-value" aria-controls="popover-unique-id-02" aria-expanded="true" aria-haspopup="dialog">
            <span class="slds-truncate" id="combobox-value-id-142">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <section aria-describedby="dialog-body-id-30" aria-label="Language Options" class="slds-popover slds-popover_full-width" id="popover-unique-id-02" role="dialog">
          <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-30" tabindex="0" role="region">
            <div class="slds-media">
              <div class="slds-media__body">
                <fieldset class="slds-form-element">
                  <legend class="slds-form-element__legend slds-form-element__label">Select up to 2</legend>
                  <div class="slds-form-element__control">
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-77" value="checkbox-unique-id-77" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-77">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-78" value="checkbox-unique-id-78" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-78">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">German</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-79" value="checkbox-unique-id-79" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-79">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Tobagonian Creole English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-80" value="checkbox-unique-id-80" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-80">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Spanish</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <footer class="slds-popover__footer slds-popover__footer_form">
            <button class="slds-button slds-button_neutral">Cancel</button>
            <button class="slds-button slds-button_brand">Done</button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Dueling Picklist vs. Multi Select Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-47" id="combobox-label-id-205">Languages</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-205" id="combobox-id-47-selected-value" aria-controls="popover-unique-id-03" aria-expanded="true" aria-haspopup="dialog">
            <span class="slds-truncate" id="combobox-value-id-144">Select an Option…</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <section aria-describedby="dialog-body-id-32" aria-label="Language Options" class="slds-popover slds-popover_full-width" id="popover-unique-id-03" role="dialog">
          <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-32" tabindex="0" role="region">
            <div class="slds-media">
              <div class="slds-media__body">
                <fieldset class="slds-form-element">
                  <legend class="slds-form-element__legend slds-form-element__label">Select up to 2</legend>
                  <div class="slds-form-element__control">
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-85" value="checkbox-unique-id-85" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-85">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-86" value="checkbox-unique-id-86" checked="" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-86">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">German</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-87" value="checkbox-unique-id-87" checked="" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-87">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Tobagonian Creole English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-88" value="checkbox-unique-id-88" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-88">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Spanish</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <footer class="slds-popover__footer slds-popover__footer_form">
            <button class="slds-button slds-button_neutral">Cancel</button>
            <button class="slds-button slds-button_brand">Done</button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Dueling Picklist vs. Multi Select Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-49" id="combobox-label-id-207">Languages</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-207" id="combobox-id-49-selected-value" aria-controls="popover-unique-id-05" aria-expanded="false" aria-haspopup="dialog">
            <span class="slds-truncate" id="combobox-value-id-146">German</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <section aria-describedby="dialog-body-id-34" aria-label="Language Options" class="slds-popover slds-popover_full-width slds-popover_hide" id="popover-unique-id-05" role="dialog">
          <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-34" tabindex="0" role="region">
            <div class="slds-media">
              <div class="slds-media__body">
                <fieldset class="slds-form-element">
                  <legend class="slds-form-element__legend slds-form-element__label">Select up to 2</legend>
                  <div class="slds-form-element__control">
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-93" value="checkbox-unique-id-93" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-93">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-94" value="checkbox-unique-id-94" checked="" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-94">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">German</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-95" value="checkbox-unique-id-95" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-95">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Tobagonian Creole English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-96" value="checkbox-unique-id-96" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-96">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Spanish</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <footer class="slds-popover__footer slds-popover__footer_form">
            <button class="slds-button slds-button_neutral">Cancel</button>
            <button class="slds-button slds-button_brand">Done</button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Dueling Picklist vs. Multi Select Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-48" id="combobox-label-id-209">Languages</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-209" id="combobox-id-48-selected-value" aria-controls="popover-unique-id-04" aria-expanded="true" aria-haspopup="dialog">
            <span class="slds-truncate" id="combobox-value-id-148">German</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <section aria-describedby="dialog-body-id-36" aria-label="Language Options" class="slds-popover slds-popover_full-width" id="popover-unique-id-04" role="dialog">
          <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-36" tabindex="0" role="region">
            <div class="slds-media">
              <div class="slds-media__body">
                <fieldset class="slds-form-element">
                  <legend class="slds-form-element__legend slds-form-element__label">Select up to 2</legend>
                  <div class="slds-form-element__control">
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-101" value="checkbox-unique-id-101" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-101">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-102" value="checkbox-unique-id-102" checked="" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-102">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">German</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-103" value="checkbox-unique-id-103" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-103">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Tobagonian Creole English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-104" value="checkbox-unique-id-104" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-104">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Spanish</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <footer class="slds-popover__footer slds-popover__footer_form">
            <button class="slds-button slds-button_neutral">Cancel</button>
            <button class="slds-button slds-button_brand">Done</button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Dueling Picklist vs. Multi Select Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-51" id="combobox-label-id-211">Languages</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-211" id="combobox-id-51-selected-value" aria-controls="popover-unique-id-07" aria-expanded="false" aria-haspopup="dialog">
            <span class="slds-truncate" id="combobox-value-id-150">2 options selected</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <section aria-describedby="dialog-body-id-38" aria-label="Language Options" class="slds-popover slds-popover_full-width slds-popover_hide" id="popover-unique-id-07" role="dialog">
          <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-38" tabindex="0" role="region">
            <div class="slds-media">
              <div class="slds-media__body">
                <fieldset class="slds-form-element">
                  <legend class="slds-form-element__legend slds-form-element__label">Select up to 2</legend>
                  <div class="slds-form-element__control">
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-109" value="checkbox-unique-id-109" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-109">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-110" value="checkbox-unique-id-110" checked="" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-110">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">German</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-111" value="checkbox-unique-id-111" checked="" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-111">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Tobagonian Creole English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-112" value="checkbox-unique-id-112" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-112">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Spanish</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <footer class="slds-popover__footer slds-popover__footer_form">
            <button class="slds-button slds-button_neutral">Cancel</button>
            <button class="slds-button slds-button_brand">Done</button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Dueling Picklist vs. Multi Select Combobox"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-50" id="combobox-label-id-213">Languages</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-213" id="combobox-id-50-selected-value" aria-controls="popover-unique-id-06" aria-expanded="true" aria-haspopup="dialog">
            <span class="slds-truncate" id="combobox-value-id-152">2 options selected</span>
          </div>
          <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
          </span>
        </div>
        <section aria-describedby="dialog-body-id-40" aria-label="Language Options" class="slds-popover slds-popover_full-width" id="popover-unique-id-06" role="dialog">
          <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-40" tabindex="0" role="region">
            <div class="slds-media">
              <div class="slds-media__body">
                <fieldset class="slds-form-element">
                  <legend class="slds-form-element__legend slds-form-element__label">Select up to 2</legend>
                  <div class="slds-form-element__control">
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-117" value="checkbox-unique-id-117" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-117">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-118" value="checkbox-unique-id-118" checked="" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-118">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">German</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-119" value="checkbox-unique-id-119" checked="" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-119">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Tobagonian Creole English</span>
                      </label>
                    </div>
                    <div class="slds-checkbox">
                      <input type="checkbox" name="options" id="checkbox-unique-id-120" value="checkbox-unique-id-120" />
                      <label class="slds-checkbox__label" for="checkbox-unique-id-120">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">Spanish</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <footer class="slds-popover__footer slds-popover__footer_form">
            <button class="slds-button slds-button_neutral">Cancel</button>
            <button class="slds-button slds-button_brand">Done</button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
:::
