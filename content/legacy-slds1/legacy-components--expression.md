---
title: Expression
---

SLDS 1 blueprint examples for **Expression**.

::: legacy-component-example title="Base"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-157" id="combobox-label-id-151">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-151" id="combobox-id-157-selected-value" aria-controls="listbox-id-145" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-145">All Conditions Are Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-145" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option657" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option658" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option659" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option660" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option661" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-158" id="combobox-label-id-152">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-152" id="combobox-id-158-selected-value" aria-controls="listbox-id-146" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-146">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-146" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option662" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option663" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option664" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option665" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-159" id="combobox-label-id-153">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-153" id="combobox-id-159-selected-value" aria-controls="listbox-id-147" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-147">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-147" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option666" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option667" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option668" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option669" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-54">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-54" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="Initial State"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-163" id="combobox-label-id-157">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-157" id="combobox-id-163-selected-value" aria-controls="listbox-id-151" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-151">All Conditions Are Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-151" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option683" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option684" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option685" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option686" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option687" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-164" id="combobox-label-id-158">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-158" id="combobox-id-164-selected-value" aria-controls="listbox-id-152" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-152">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-152" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option688" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option689" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option690" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option691" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-165" id="combobox-label-id-159">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-is-disabled" disabled="" aria-labelledby="combobox-label-id-159" id="combobox-id-165-selected-value" aria-controls="listbox-id-153" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-153">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-153" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option692" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option693" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option694" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option695" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-56">Value</label>
              <div class="slds-form-element__control">
                <input type="text" disabled="" id="text-input-id-56" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" disabled="" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="Resource Selected"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-169" id="combobox-label-id-163">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-163" id="combobox-id-169-selected-value" aria-controls="listbox-id-157" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-157">All Conditions Are Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-157" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option709" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option710" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option711" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option712" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option713" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-170" id="combobox-label-id-164">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-164" id="combobox-id-170-selected-value" aria-controls="listbox-id-158" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-158">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-158" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option714" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option715" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option716" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option717" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-171" id="combobox-label-id-165">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-165" id="combobox-id-171-selected-value" aria-controls="listbox-id-159" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-159">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-159" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option718" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option719" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option720" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option721" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-58">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-58" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="New Condition Added"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-177" id="combobox-label-id-171">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-171" id="combobox-id-177-selected-value" aria-controls="listbox-id-165" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-165">All Conditions Are Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-165" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option743" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option744" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option745" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option746" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option747" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-178" id="combobox-label-id-172">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-172" id="combobox-id-178-selected-value" aria-controls="listbox-id-166" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-166">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-166" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option748" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option749" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option750" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option751" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-179" id="combobox-label-id-173">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-173" id="combobox-id-179-selected-value" aria-controls="listbox-id-167" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-167">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-167" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option752" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option753" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option754" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option755" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-61">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-61" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span>AND</span>
          <span class="slds-assistive-text">Condition 2</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-180" id="combobox-label-id-174">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-174" id="combobox-id-180-selected-value" aria-controls="listbox-id-168" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-168">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-168" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option756" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option757" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option758" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option759" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-181" id="combobox-label-id-175">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-is-disabled" disabled="" aria-labelledby="combobox-label-id-175" id="combobox-id-181-selected-value" aria-controls="listbox-id-169" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-169">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-169" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option760" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option761" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option762" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option763" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-62">Value</label>
              <div class="slds-form-element__control">
                <input type="text" disabled="" id="text-input-id-62" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 2">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="Error State"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-187" id="combobox-label-id-181">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-181" id="combobox-id-187-selected-value" aria-controls="listbox-id-175" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-175">All Conditions Are Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-175" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option785" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option786" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option787" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option788" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option789" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-188" id="combobox-label-id-182">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-182" id="combobox-id-188-selected-value" aria-controls="listbox-id-176" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-176">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-176" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option790" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option791" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option792" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option793" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-189" id="combobox-label-id-183">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-183" id="combobox-id-189-selected-value" aria-controls="listbox-id-177" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-177">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-177" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option794" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option795" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option796" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option797" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-65">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-65" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span>AND</span>
          <span class="slds-assistive-text">Condition 2</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-190" id="combobox-label-id-184">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-184" id="combobox-id-190-selected-value" aria-controls="listbox-id-178" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-178">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-178" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option798" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option799" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option800" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option801" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-191" id="combobox-label-id-185">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-185" id="combobox-id-191-selected-value" aria-controls="listbox-id-179" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-179">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-179" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option802" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option803" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option804" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option805" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element slds-has-error">
              <label class="slds-form-element__label" for="text-input-id-66">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-66" aria-describedby="error-message-unique-id" class="slds-input" aria-invalid="true" />
              </div>
              <div class="slds-form-element__help" id="error-message-unique-id">Enter a value</div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 2">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="All or Any Conditions"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-197" id="combobox-label-id-191">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-191" id="combobox-id-197-selected-value" aria-controls="listbox-id-185" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-185">All Conditions Are Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-185" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option827" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option828" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option829" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option830" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option831" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-198" id="combobox-label-id-192">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-192" id="combobox-id-198-selected-value" aria-controls="listbox-id-186" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-186">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-186" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option832" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option833" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option834" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option835" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-199" id="combobox-label-id-193">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-193" id="combobox-id-199-selected-value" aria-controls="listbox-id-187" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-187">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-187" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option836" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option837" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option838" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option839" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-69">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-69" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span>AND</span>
          <span class="slds-assistive-text">Condition 2</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-200" id="combobox-label-id-194">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-194" id="combobox-id-200-selected-value" aria-controls="listbox-id-188" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-188">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-188" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option840" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option841" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option842" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option843" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-201" id="combobox-label-id-195">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-195" id="combobox-id-201-selected-value" aria-controls="listbox-id-189" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-189">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-189" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option844" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option845" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option846" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option847" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-70">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-70" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 2">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="All or Any Conditions"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-207" id="combobox-label-id-201">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-201" id="combobox-id-207-selected-value" aria-controls="listbox-id-195" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-195">Any Condition Is Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-195" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div id="option869" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option870" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option871" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option872" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option873" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-208" id="combobox-label-id-202">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-202" id="combobox-id-208-selected-value" aria-controls="listbox-id-196" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-196">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-196" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option874" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option875" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option876" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option877" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-209" id="combobox-label-id-203">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-203" id="combobox-id-209-selected-value" aria-controls="listbox-id-197" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-197">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-197" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option878" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option879" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option880" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option881" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-73">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-73" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span>OR</span>
          <span class="slds-assistive-text">Condition 2</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-210" id="combobox-label-id-204">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-204" id="combobox-id-210-selected-value" aria-controls="listbox-id-198" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-198">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-198" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option882" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option883" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option884" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option885" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-211" id="combobox-label-id-205">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-205" id="combobox-id-211-selected-value" aria-controls="listbox-id-199" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-199">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-199" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option886" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option887" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option888" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option889" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-74">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-74" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 2">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="Label Note"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-220" id="combobox-label-id-214">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-214" id="combobox-id-220-selected-value" aria-controls="listbox-id-208" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-208">All Conditions Are Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-208" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option924" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option925" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option926" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option927" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option928" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-221" id="combobox-label-id-215">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-215" id="combobox-id-221-selected-value" aria-controls="listbox-id-209" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-209">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-209" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option929" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option930" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option931" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option932" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-222" id="combobox-label-id-216">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-216" id="combobox-id-222-selected-value" aria-controls="listbox-id-210" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-210">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-210" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option933" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option934" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option935" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option936" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-78">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-78" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
    <li class="slds-expression__group">
      <fieldset>
        <legend class="slds-expression__legend slds-expression__legend_group">
          <span>AND</span>
          <span class="slds-assistive-text">Condition Group 1</span>
        </legend>
        <div class="slds-expression__options">
          <div class="slds-form-element">
            <label class="slds-form-element__label" for="combobox-id-223" id="combobox-label-id-217">Take Action When</label>
            <div class="slds-form-element__control">
              <div class="slds-combobox_container">
                <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                  <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                    <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-217" id="combobox-id-223-selected-value" aria-controls="listbox-id-211" aria-expanded="false"
                      aria-haspopup="listbox">
                      <span class="slds-truncate" id="combobox-value-id-211">Any Condition Is Met in This Group</span>
                    </div>
                    <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                      <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                      </svg>
                    </span>
                  </div>
                  <div id="listbox-id-211" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                    <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option937" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon"></span>
                          <span class="slds-media__body">
                            <span class="" title="All Conditions Are Met for This Group">All Conditions Are Met for This Group</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div aria-selected="true" aria-checked="true" id="option938" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="" title="Any Condition Is Met for This Group">Any Condition Is Met for This Group</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option939" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon"></span>
                          <span class="slds-media__body">
                            <span class="" title="Custom Logic Is Met for This Group">Custom Logic Is Met for This Group</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option940" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon"></span>
                          <span class="slds-media__body">
                            <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option941" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon"></span>
                          <span class="slds-media__body">
                            <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
        <ul>
          <li class="slds-expression__row slds-expression__row_group">
            <fieldset>
              <legend class="slds-expression__legend">
                <span class="slds-assistive-text">Condition 1 of Condition Group 1</span>
              </legend>
              <div class="slds-grid slds-gutters_xx-small">
                <div class="slds-col">
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="combobox-id-224" id="combobox-label-id-218">Resource</label>
                    <div class="slds-form-element__control">
                      <div class="slds-combobox_container">
                        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                            <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-218" id="combobox-id-224-selected-value" aria-controls="listbox-id-212" aria-expanded="false"
                              aria-haspopup="listbox">
                              <span class="slds-truncate" id="combobox-value-id-212">Resource 1</span>
                            </div>
                            <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                              </svg>
                            </span>
                          </div>
                          <div id="listbox-id-212" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                              <li role="presentation" class="slds-listbox__item">
                                <div aria-selected="true" aria-checked="true" id="option942" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon">
                                    <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                      </svg>
                                    </span>
                                  </span>
                                  <span class="slds-media__body">
                                    <span class="" title="Resource 1">Resource 1</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option943" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Resource 2">Resource 2</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option944" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Resource 3">Resource 3</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option945" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Resource 4">Resource 4</span>
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
                <div class="slds-col slds-grow-none">
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="combobox-id-225" id="combobox-label-id-219">Operator</label>
                    <div class="slds-form-element__control">
                      <div class="slds-combobox_container">
                        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                            <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-219" id="combobox-id-225-selected-value" aria-controls="listbox-id-213" aria-expanded="false" aria-haspopup="listbox">
                              <span class="slds-truncate" id="combobox-value-id-213">Select…</span>
                            </div>
                            <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                              </svg>
                            </span>
                          </div>
                          <div id="listbox-id-213" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option946" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Equals">Equals</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option947" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Does Not Equal">Does Not Equal</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option948" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Greater Than">Greater Than</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option949" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Less Than">Less Than</span>
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
                <div class="slds-col">
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="text-input-id-79">Value</label>
                    <div class="slds-form-element__control">
                      <input type="text" id="text-input-id-79" class="slds-input" />
                    </div>
                  </div>
                </div>
                <div class="slds-col slds-grow-none">
                  <div class="slds-form-element">
                    <span class="slds-form-element__label"> </span>
                    <div class="slds-form-element__control">
                      <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1 of Condition Group 1">
                        <svg class="slds-button__icon" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                        </svg>
                        <span class="slds-assistive-text">Delete Condition 1 of Condition Group 1</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </li>
          <li class="slds-expression__row slds-expression__row_group">
            <fieldset>
              <legend class="slds-expression__legend">
                <span>OR</span>
                <span class="slds-assistive-text">Condition 2 of Condition Group 1</span>
              </legend>
              <div class="slds-grid slds-gutters_xx-small">
                <div class="slds-col">
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="combobox-id-226" id="combobox-label-id-220">Resource</label>
                    <div class="slds-form-element__control">
                      <div class="slds-combobox_container">
                        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                            <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-220" id="combobox-id-226-selected-value" aria-controls="listbox-id-214" aria-expanded="false" aria-haspopup="listbox">
                              <span class="slds-truncate" id="combobox-value-id-214">Select…</span>
                            </div>
                            <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                              </svg>
                            </span>
                          </div>
                          <div id="listbox-id-214" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option950" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Resource 1">Resource 1</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option951" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Resource 2">Resource 2</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option952" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Resource 3">Resource 3</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option953" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Resource 4">Resource 4</span>
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
                <div class="slds-col slds-grow-none">
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="combobox-id-227" id="combobox-label-id-221">Operator</label>
                    <div class="slds-form-element__control">
                      <div class="slds-combobox_container">
                        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                            <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-is-disabled" disabled="" aria-labelledby="combobox-label-id-221" id="combobox-id-227-selected-value" aria-controls="listbox-id-215" aria-expanded="false"
                              aria-haspopup="listbox">
                              <span class="slds-truncate" id="combobox-value-id-215">Select…</span>
                            </div>
                            <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                              </svg>
                            </span>
                          </div>
                          <div id="listbox-id-215" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option954" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Equals">Equals</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option955" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Does Not Equal">Does Not Equal</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option956" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Greater Than">Greater Than</span>
                                  </span>
                                </div>
                              </li>
                              <li role="presentation" class="slds-listbox__item">
                                <div id="option957" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                                  <span class="slds-media__figure slds-listbox__option-icon"></span>
                                  <span class="slds-media__body">
                                    <span class="" title="Less Than">Less Than</span>
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
                <div class="slds-col">
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="text-input-id-80">Value</label>
                    <div class="slds-form-element__control">
                      <input type="text" disabled="" id="text-input-id-80" class="slds-input" />
                    </div>
                  </div>
                </div>
                <div class="slds-col slds-grow-none">
                  <div class="slds-form-element">
                    <span class="slds-form-element__label"> </span>
                    <div class="slds-form-element__control">
                      <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 2 of Condition Group 1">
                        <svg class="slds-button__icon" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                        </svg>
                        <span class="slds-assistive-text">Delete Condition 2 of Condition Group 1</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </li>
        </ul>
        <div class="slds-expression__buttons">
          <button class="slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
            </svg>Add Condition</button>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="Custom Logic"
<div class="slds-expression">
  <h2 class="slds-expression__title">Conditions</h2>
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-233" id="combobox-label-id-227">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-227" id="combobox-id-233-selected-value" aria-controls="listbox-id-221" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-221">Custom Logic Is Met</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-221" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div id="option979" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option980" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option981" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option982" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option983" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <div class="slds-expression__custom-logic">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="text-input-id-84">Custom Logic</label>
      <div class="slds-form-element__control">
        <input type="text" id="text-input-id-84" class="slds-input" value="1 AND 2" />
      </div>
    </div>
  </div>
  <ul>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span>1</span>
          <span class="slds-assistive-text">Condition 1</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-234" id="combobox-label-id-228">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-228" id="combobox-id-234-selected-value" aria-controls="listbox-id-222" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-222">Resource 1</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-222" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option984" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option985" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option986" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option987" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-235" id="combobox-label-id-229">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-229" id="combobox-id-235-selected-value" aria-controls="listbox-id-223" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-223">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-223" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option988" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option989" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option990" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option991" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-85">Value</label>
              <div class="slds-form-element__control">
                <input type="text" id="text-input-id-85" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 1">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
    <li class="slds-expression__row">
      <fieldset>
        <legend class="slds-expression__legend">
          <span>2</span>
          <span class="slds-assistive-text">Condition 2</span>
        </legend>
        <div class="slds-grid slds-gutters_xx-small">
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-236" id="combobox-label-id-230">Resource</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input" aria-labelledby="combobox-label-id-230" id="combobox-id-236-selected-value" aria-controls="listbox-id-224" aria-expanded="false" aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-224">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-224" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option992" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 1">Resource 1</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option993" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 2">Resource 2</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option994" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 3">Resource 3</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option995" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Resource 4">Resource 4</span>
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
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-237" id="combobox-label-id-231">Operator</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-is-disabled" disabled="" aria-labelledby="combobox-label-id-231" id="combobox-id-237-selected-value" aria-controls="listbox-id-225" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-225">Select…</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-225" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option996" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Equals">Equals</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option997" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Does Not Equal">Does Not Equal</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option998" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Greater Than">Greater Than</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option999" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Less Than">Less Than</span>
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
          <div class="slds-col">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="text-input-id-86">Value</label>
              <div class="slds-form-element__control">
                <input type="text" disabled="" id="text-input-id-86" class="slds-input" />
              </div>
            </div>
          </div>
          <div class="slds-col slds-grow-none">
            <div class="slds-form-element">
              <span class="slds-form-element__label"> </span>
              <div class="slds-form-element__control">
                <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Delete Condition 2">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Delete Condition 2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </li>
  </ul>
  <div class="slds-expression__buttons">
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Condition</button>
    <button class="slds-button slds-button_neutral">
      <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
      </svg>Add Group</button>
  </div>
</div>
:::

::: legacy-component-example title="Formula Logic"
<div class="slds-expression">
  <div class="slds-expression__options">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="combobox-id-243" id="combobox-label-id-235">Take Action When</label>
      <div class="slds-form-element__control">
        <div class="slds-combobox_container">
          <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
              <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-235" id="combobox-id-243-selected-value" aria-controls="listbox-id-227" aria-expanded="false" aria-haspopup="listbox">
                <span class="slds-truncate" id="combobox-value-id-227">Formula Evaluates to True</span>
              </div>
              <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
              </span>
            </div>
            <div id="listbox-id-227" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
              <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                <li role="presentation" class="slds-listbox__item">
                  <div id="option1017" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option1018" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option1019" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div id="option1020" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon"></span>
                    <span class="slds-media__body">
                      <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                    </span>
                  </div>
                </li>
                <li role="presentation" class="slds-listbox__item">
                  <div aria-selected="true" aria-checked="true" id="option1021" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                    <span class="slds-media__figure slds-listbox__option-icon">
                      <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                      </span>
                    </span>
                    <span class="slds-media__body">
                      <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
  <div class="slds-expression_formula__rte">
    <div class="slds-form-element">
      <span class="slds-form-element__label">Formula</span>
      <div class="slds-form-element__control">
        <div class="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
          <div role="toolbar" class="slds-rich-text-editor__toolbar slds-shrink-none">
            <div class="slds-rich-text-editor__col slds-rich-text-editor__col_grow">
              <div class="slds-form-element">
                <label class="slds-form-element__label slds-assistive-text" for="combobox-id-244">Insert a Resource</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox-group">
                    <div class="slds-combobox_object-switcher slds-combobox-addon_start">
                      <div class="slds-form-element">
                        <label class="slds-form-element__label slds-assistive-text" for="combobox-id-245" id="combobox-label-id-236">Filter resources by:</label>
                        <div class="slds-form-element__control">
                          <div class="slds-combobox_container slds-has-icon-only">
                            <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="example-unique-id-23">
                              <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right" role="none">
                                <span class="slds-icon_container slds-icon-utility-apex slds-input__icon slds-input__icon_left" title="apex">
                                  <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#apex"></use>
                                  </svg>
                                  <span class="slds-assistive-text">apex</span>
                                </span>
                                <input type="text" class="slds-input slds-combobox__input slds-combobox__input-value" id="combobox-id-245" aria-controls="objectswitcher-listbox-id-9" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox"
                                  placeholder=" " value="Apex" />
                                <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                                  <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                  </svg>
                                </span>
                              </div>
                              <div id="objectswitcher-listbox-id-9" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                                <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                                  <li role="presentation" class="slds-listbox__item">
                                    <div aria-checked="true" id="option1022" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                                    <div id="option1023" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
                                    <div id="option1024" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
                                    <div id="option1025" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
                      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="example-unique-id-23">
                        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                          <input type="text" class="slds-input slds-combobox__input" id="combobox-id-244" aria-autocomplete="list" aria-controls="example-unique-id-21" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Insert a resource"
                          />
                          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                            </svg>
                          </span>
                        </div>
                        <div id="example-unique-id-21" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option1026" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                              <div id="option1027" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
            </div>
            <div class="slds-rich-text-editor__col slds-rich-text-editor__col_grow">
              <div class="slds-form-element">
                <label class="slds-form-element__label slds-assistive-text" for="combobox-id-246">Insert a function</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox-group">
                    <div class="slds-combobox_object-switcher slds-combobox-addon_start">
                      <div class="slds-form-element">
                        <label class="slds-form-element__label slds-assistive-text" for="combobox-id-247" id="combobox-label-id-237">Filter functions by:</label>
                        <div class="slds-form-element__control">
                          <div class="slds-combobox_container slds-has-icon-only">
                            <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="example-unique-id-24">
                              <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right" role="none">
                                <span class="slds-icon_container slds-icon-utility-apex slds-input__icon slds-input__icon_left" title="apex">
                                  <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#apex"></use>
                                  </svg>
                                  <span class="slds-assistive-text">apex</span>
                                </span>
                                <input type="text" class="slds-input slds-combobox__input slds-combobox__input-value" id="combobox-id-247" aria-controls="objectswitcher-listbox-id-10" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox"
                                  placeholder=" " value="Apex" />
                                <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                                  <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                  </svg>
                                </span>
                              </div>
                              <div id="objectswitcher-listbox-id-10" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                                <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                                  <li role="presentation" class="slds-listbox__item">
                                    <div aria-checked="true" id="option1028" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                                    <div id="option1029" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
                                    <div id="option1030" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
                                    <div id="option1031" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
                      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="example-unique-id-24">
                        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                          <input type="text" class="slds-input slds-combobox__input" id="combobox-id-246" aria-autocomplete="list" aria-controls="example-unique-id-22" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Insert a function"
                          />
                          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                            </svg>
                          </span>
                        </div>
                        <div id="example-unique-id-22" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                            <li role="presentation" class="slds-listbox__item">
                              <div id="option1032" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                              <div id="option1033" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
            </div>
            <div class="slds-rich-text-editor__col slds-rich-text-editor__col_grow">
              <div class="slds-form-element">
                <label class="slds-form-element__label slds-assistive-text" for="example-unique-id-25">Insert operator</label>
                <div class="slds-form-element__control">
                  <input type="text" id="example-unique-id-25" placeholder="Insert operator" class="slds-input" />
                </div>
              </div>
            </div>
            <div class="slds-rich-text-editor__col">
              <button class="slds-button slds-button_icon slds-button_icon-container" title="Help">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#help"></use>
                </svg>
                <span class="slds-assistive-text">Help</span>
              </button>
            </div>
          </div>
          <div class="slds-rich-text-editor__textarea slds-grid">
            <div aria-label="Compose formula" contenteditable="true" class="slds-rich-text-area__content slds-text-color_weak slds-grow">Compose formula...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-m-top_small">
    <button class="slds-button slds-button_neutral">Check Syntax</button>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Requirement"
<div class="demo-only" style="max-width:320px;overflow:hidden">
  <div class="slds-filters">
    <h2 class="slds-text-heading_small">Conditions</h2>
    <div class="slds-m-vertical_small">
      <div class="slds-m-vertical_small">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="combobox-id-249" id="combobox-label-id-239">Take Action When</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-239" id="combobox-id-249-selected-value" aria-controls="listbox-id-229" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-229">All Conditions Are Met</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="listbox-id-229" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-selected="true" aria-checked="true" id="option1039" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1040" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1041" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1042" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1043" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
    </div>
    <ol class="slds-list_vertical slds-list_vertical-space">
      <li class="slds-item slds-hint-parent">
        <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
          <button class="slds-button_reset slds-grow slds-has-blur-focus">
            <span class="slds-assistive-text">Edit filter:</span>
            <span class="slds-show slds-text-body_small">Amount</span>
            <span class="slds-show">greater than &quot;1000&quot;</span>
          </button>
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove greater than &quot;1000&quot;">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
            </svg>
            <span class="slds-assistive-text">Remove filter: Amount greater than &quot;1000&quot;</span>
          </button>
        </div>
      </li>
    </ol>
    <div class="slds-m-top_small">
      <button class="slds-button slds-button_neutral">
        <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
        </svg>Add Condition</button>
      <button class="slds-button slds-button_neutral">
        <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
        </svg>Add Group</button>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="With an Expression Group"
<div class="demo-only" style="max-width:320px;overflow:hidden">
  <div class="slds-filters">
    <h2 class="slds-text-heading_small">Conditions</h2>
    <div class="slds-m-vertical_small">
      <div class="slds-m-vertical_small">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="combobox-id-252" id="combobox-label-id-242">Take Action When</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-242" id="combobox-id-252-selected-value" aria-controls="listbox-id-232" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-232">All Conditions Are Met</span>
                  </div>
                  <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                  </span>
                </div>
                <div id="listbox-id-232" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-selected="true" aria-checked="true" id="option1054" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                            <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1055" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1056" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1057" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option1058" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
    </div>
    <ol class="slds-list_vertical slds-list_vertical-space">
      <li class="slds-item slds-hint-parent">
        <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
          <button class="slds-button_reset slds-grow slds-has-blur-focus">
            <span class="slds-assistive-text">Edit filter:</span>
            <span class="slds-show slds-text-body_small">Amount</span>
            <span class="slds-show">greater than &quot;1000&quot;</span>
          </button>
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove greater than &quot;1000&quot;">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
            </svg>
            <span class="slds-assistive-text">Remove filter: Amount greater than &quot;1000&quot;</span>
          </button>
        </div>
      </li>
      <li class="slds-item slds-hint-parent">
        <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
          <button class="slds-button_reset slds-grow slds-has-blur-focus">
            <span class="slds-assistive-text">Edit filter:</span>
            <span class="slds-show">
              <span>
                <strong>AND </strong>
              </span>
              <span class="slds-text-body_small">Status</span>
            </span>
            <span class="slds-show">equals Red</span>
          </button>
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove equals Red">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
            </svg>
            <span class="slds-assistive-text">Remove filter: Status equals Red</span>
          </button>
        </div>
      </li>
      <li class="slds-item slds-hint-parent">
        <div class="slds-filters__group">
          <div class="slds-grid slds-grid_align-spread">
            <span>
              <strong>AND</strong>
            </span>
            <span class="slds-assistive-text">Condition Group 1</span>
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove Group">
              <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
              </svg>
              <span class="slds-assistive-text">Remove Group</span>
            </button>
          </div>
          <div class="slds-m-vertical_small">
            <div class="slds-form-element">
              <label class="slds-form-element__label" for="combobox-id-253" id="combobox-label-id-243">Take Action When</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-243" id="combobox-id-253-selected-value" aria-controls="listbox-id-233" aria-expanded="false"
                        aria-haspopup="listbox">
                        <span class="slds-truncate" id="combobox-value-id-233">Any Condition Is Met</span>
                      </div>
                      <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="listbox-id-233" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option1059" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="All Conditions Are Met">All Conditions Are Met</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div aria-selected="true" aria-checked="true" id="option1060" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon">
                              <span class="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                </svg>
                              </span>
                            </span>
                            <span class="slds-media__body">
                              <span class="" title="Any Condition Is Met">Any Condition Is Met</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option1061" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Custom Logic Is Met">Custom Logic Is Met</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option1062" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Always (No Criteria)">Always (No Criteria)</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option1063" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__figure slds-listbox__option-icon"></span>
                            <span class="slds-media__body">
                              <span class="" title="Formula Evaluates to True">Formula Evaluates to True</span>
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
          <ol>
            <li class="slds-item slds-hint-parent">
              <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
                <button class="slds-button_reset slds-grow slds-has-blur-focus">
                  <span class="slds-assistive-text">Edit filter:</span>
                  <span class="slds-show slds-text-body_small">Amount</span>
                  <span class="slds-show">greater than &quot;1000&quot;</span>
                </button>
                <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove greater than &quot;1000&quot;">
                  <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                  </svg>
                  <span class="slds-assistive-text">Remove filter: Amount greater than &quot;1000&quot;</span>
                </button>
              </div>
            </li>
          </ol>
          <div class="slds-m-top_small">
            <button class="slds-button slds-button_neutral">
              <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
              </svg>Add Condition</button>
          </div>
        </div>
      </li>
    </ol>
    <div class="slds-m-top_small">
      <button class="slds-button slds-button_neutral">
        <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
        </svg>Add Condition</button>
      <button class="slds-button slds-button_neutral">
        <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
        </svg>Add Group</button>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Filtering"
<div class="slds-filters">
  <ol class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Show Me</span>
          <span class="slds-show">All Products</span>
        </button>
      </div>
    </li>
  </ol>
  <h3 class="slds-text-body_small slds-m-vertical_x-small">Matching all these filters</h3>
  <ol class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Created Date</span>
          <span class="slds-show">equals THIS WEEK</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove equals THIS WEEK">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: Created Date equals THIS WEEK</span>
        </button>
      </div>
    </li>
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">List Price</span>
          <span class="slds-show">greater than &quot;500&quot;</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove greater than &quot;500&quot;">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: List Price greater than &quot;500&quot;</span>
        </button>
      </div>
    </li>
  </ol>
  <div class="slds-filters__footer slds-grid slds-shrink-none">
    <button class="slds-button_reset slds-text-link">Add Filter</button>
    <button class="slds-button_reset slds-text-link slds-col_bump-left">Remove All</button>
  </div>
</div>
:::

::: legacy-component-example title="Adding a new filter"
<div class="slds-filters">
  <ol class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Show Me</span>
          <span class="slds-show">All Products</span>
        </button>
      </div>
    </li>
  </ol>
  <h3 class="slds-text-body_small slds-m-vertical_x-small">Matching all these filters</h3>
  <ul class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Created Date</span>
          <span class="slds-show">equals THIS WEEK</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove equals THIS WEEK">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: Created Date equals THIS WEEK</span>
        </button>
      </div>
    </li>
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">List Price</span>
          <span class="slds-show">greater than &quot;500&quot;</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove greater than &quot;500&quot;">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: List Price greater than &quot;500&quot;</span>
        </button>
      </div>
    </li>
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center slds-is-new">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show">New Filter</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove New Filter">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: New Filter</span>
        </button>
      </div>
    </li>
  </ul>
  <div class="slds-filters__footer slds-grid slds-shrink-none">
    <button class="slds-button_reset slds-text-link">Add Filter</button>
    <button class="slds-button_reset slds-text-link slds-col_bump-left">Remove All</button>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Requirement"
<div class="slds-filters">
  <div class="slds-text-color_error slds-m-bottom_x-small" role="alert">Filters could not be applied. Please fix the validation errors below.</div>
  <ol class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Show Me</span>
          <span class="slds-show">All Products</span>
        </button>
      </div>
    </li>
  </ol>
  <h3 class="slds-text-body_small slds-m-vertical_x-small">Matching all these filters</h3>
  <ol class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Created Date</span>
          <span class="slds-show">equals THIS WEEK</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove equals THIS WEEK">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: Created Date equals THIS WEEK</span>
        </button>
      </div>
    </li>
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">List Price</span>
          <span class="slds-show">greater than &quot;500&quot;</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove greater than &quot;500&quot;">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: List Price greater than &quot;500&quot;</span>
        </button>
      </div>
    </li>
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center slds-has-error">
        <button class="slds-button_reset slds-grow slds-has-blur-focus" aria-describedby="error-filter-01">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Stage</span>
          <span class="slds-show">equals &quot;Red&quot;</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove equals &quot;Red&quot;">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: Stage equals &quot;Red&quot;</span>
        </button>
      </div>
      <p id="error-filter-01" class="slds-text-color_error slds-m-top_xx-small">Error Message</p>
    </li>
  </ol>
  <div class="slds-filters__footer slds-grid slds-shrink-none">
    <button class="slds-button_reset slds-text-link">Add Filter</button>
    <button class="slds-button_reset slds-text-link slds-col_bump-left">Remove All</button>
  </div>
</div>
:::

::: legacy-component-example title="With locked filters"
<div class="slds-filters">
  <ol class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Show Me</span>
          <span class="slds-show">All Products</span>
        </button>
      </div>
    </li>
  </ol>
  <h3 class="slds-text-body_small slds-m-vertical_x-small">Matching all these filters</h3>
  <ol class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Created Date</span>
          <span class="slds-show">equals THIS WEEK</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove equals THIS WEEK">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: Created Date equals THIS WEEK</span>
        </button>
      </div>
    </li>
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center">
        <button class="slds-button_reset slds-grow slds-has-blur-focus">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">List Price</span>
          <span class="slds-show">greater than &quot;500&quot;</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small" title="Remove greater than &quot;500&quot;">
          <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
          </svg>
          <span class="slds-assistive-text">Remove filter: List Price greater than &quot;500&quot;</span>
        </button>
      </div>
    </li>
  </ol>
  <h3 class="slds-text-body_small slds-m-vertical_x-small slds-grid">Locked Filters
    <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
    </svg>
  </h3>
  <ol class="slds-list_vertical slds-list_vertical-space">
    <li class="slds-item slds-hint-parent">
      <div class="slds-filters__item slds-grid slds-grid_vertical-align-center slds-is-locked">
        <button class="slds-button_reset slds-grow slds-has-blur-focus" disabled="">
          <span class="slds-assistive-text">Edit filter:</span>
          <span class="slds-show slds-text-body_small">Name</span>
          <span class="slds-show">equals &quot;ACME&quot;</span>
        </button>
      </div>
    </li>
  </ol>
  <div class="slds-filters__footer slds-grid slds-shrink-none">
    <button class="slds-button_reset slds-text-link">Add Filter</button>
    <button class="slds-button_reset slds-text-link slds-col_bump-left">Remove All</button>
  </div>
</div>
:::
