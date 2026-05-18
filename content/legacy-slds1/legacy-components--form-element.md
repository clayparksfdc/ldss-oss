---
title: Form Element
---

SLDS 1 blueprint examples for **Form Element**.

::: legacy-component-example title="Base"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="form-element-01">Form Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="form-element-01" placeholder="Placeholder text…" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="View Mode/Static"
<div class="slds-form-element slds-form-element_readonly">
  <span class="slds-form-element__label">Status</span>
  <div class="slds-form-element__control">
    <div class="slds-form-element__static">In Progress</div>
  </div>
</div>
:::

::: legacy-component-example title="Inline Edit"
<div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-hint-parent">
  <span class="slds-form-element__label">Status</span>
  <div class="slds-form-element__control">
    <div class="slds-form-element__static">In Progress</div>
    <button class="slds-button slds-button_icon" title="Edit: Status">
      <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
      </svg>
      <span class="slds-assistive-text">Edit: Status</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Help Text Icon"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="form-element-help-01">Status</label>
  <div class="slds-form-element__icon">
    <button class="slds-button slds-button_icon">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
      </svg>
      <span class="slds-assistive-text">Help</span>
    </button>
  </div>
  <div class="slds-form-element__control">
    <input type="text" id="form-element-help-01" placeholder="Placeholder text…" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="Showing tooltip"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="tooltip-showing-form-element-help-01">Status</label>
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
    <input type="text" id="tooltip-showing-form-element-help-01" placeholder="Placeholder text…" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="Required"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="form-element-03">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Form Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="form-element-03" placeholder="Placeholder text…" required="" class="slds-input" />
  </div>
</div>
:::

::: legacy-component-example title="Accessibility requirement"
<div class="slds-form-element slds-has-error">
  <label class="slds-form-element__label" for="form-element-05">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Form Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="form-element-05" placeholder="Placeholder text…" required="" aria-describedby="form-error-01" class="slds-input" aria-invalid="true" />
  </div>
  <div class="slds-form-element__help" id="form-error-01">Enter a value.</div>
</div>
:::

::: legacy-component-example title="Stacked"
<div class="slds-form">
  <div class="slds-form-element slds-form-element_stacked">
    <label class="slds-form-element__label" for="stacked-input-id-01">Text Input</label>
    <div class="slds-form-element__control">
      <input type="text" id="stacked-input-id-01" placeholder="Placeholder text…" class="slds-input" />
    </div>
  </div>
  <div class="slds-form-element slds-form-element_stacked">
    <label class="slds-form-element__label" for="stacked-input-id-02">Textarea Input</label>
    <div class="slds-form-element__control">
      <textarea id="stacked-input-id-02" placeholder="Placeholder text…" class="slds-textarea"></textarea>
    </div>
  </div>
  <fieldset class="slds-form-element slds-form-element_stacked">
    <legend class="slds-form-element__legend slds-form-element__label">Checkbox Group Label</legend>
    <div class="slds-form-element__control">
      <div class="slds-checkbox">
        <input type="checkbox" name="default" id="checkbox-unique-id-33" value="checkbox-unique-id-33" />
        <label class="slds-checkbox__label" for="checkbox-unique-id-33">
          <span class="slds-checkbox_faux"></span>
          <span class="slds-form-element__label">All opportunities owned by you</span>
        </label>
      </div>
      <div class="slds-checkbox">
        <input type="checkbox" name="default" id="checkbox-unique-id-34" value="checkbox-unique-id-34" />
        <label class="slds-checkbox__label" for="checkbox-unique-id-34">
          <span class="slds-checkbox_faux"></span>
          <span class="slds-form-element__label">All contacts in the account owned by you</span>
        </label>
      </div>
    </div>
  </fieldset>
  <fieldset class="slds-form-element slds-form-element_stacked">
    <legend class="slds-form-element__legend slds-form-element__label">Radio Group Label</legend>
    <div class="slds-form-element__control">
      <span class="slds-radio">
        <input type="radio" id="radio-15" value="radio-15" name="options" />
        <label class="slds-radio__label" for="radio-15">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Lead generation</span>
        </label>
      </span>
      <span class="slds-radio">
        <input type="radio" id="radio-16" value="radio-16" name="options" />
        <label class="slds-radio__label" for="radio-16">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Education leads</span>
        </label>
      </span>
    </div>
  </fieldset>
</div>
:::

::: legacy-component-example title="Horizontal"
<div class="slds-form">
  <div class="slds-form-element slds-form-element_horizontal">
    <label class="slds-form-element__label" for="horizontal-input-id-01">Text Input</label>
    <div class="slds-form-element__control">
      <input type="text" id="horizontal-input-id-01" placeholder="Placeholder text…" class="slds-input" />
    </div>
  </div>
  <div class="slds-form-element slds-form-element_horizontal">
    <label class="slds-form-element__label" for="horizontal-input-id-02">Textarea Input</label>
    <div class="slds-form-element__control">
      <textarea id="horizontal-input-id-02" placeholder="Placeholder text…" class="slds-textarea"></textarea>
    </div>
  </div>
  <fieldset class="slds-form-element slds-form-element_horizontal">
    <legend class="slds-form-element__legend slds-form-element__label">Checkbox Group Label</legend>
    <div class="slds-form-element__control">
      <div class="slds-checkbox">
        <input type="checkbox" name="default" id="checkbox-unique-id-37" value="checkbox-unique-id-37" />
        <label class="slds-checkbox__label" for="checkbox-unique-id-37">
          <span class="slds-checkbox_faux"></span>
          <span class="slds-form-element__label">All opportunities owned by you</span>
        </label>
      </div>
      <div class="slds-checkbox">
        <input type="checkbox" name="default" id="checkbox-unique-id-38" value="checkbox-unique-id-38" />
        <label class="slds-checkbox__label" for="checkbox-unique-id-38">
          <span class="slds-checkbox_faux"></span>
          <span class="slds-form-element__label">All contacts in the account owned by you</span>
        </label>
      </div>
    </div>
  </fieldset>
  <fieldset class="slds-form-element slds-form-element_horizontal">
    <legend class="slds-form-element__legend slds-form-element__label">Radio Group Label</legend>
    <div class="slds-form-element__control">
      <span class="slds-radio">
        <input type="radio" id="radio-19" value="radio-19" name="options" />
        <label class="slds-radio__label" for="radio-19">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Lead generation</span>
        </label>
      </span>
      <span class="slds-radio">
        <input type="radio" id="radio-20" value="radio-20" name="options" />
        <label class="slds-radio__label" for="radio-20">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Education leads</span>
        </label>
      </span>
    </div>
  </fieldset>
</div>
:::

::: legacy-component-example title="Single Column Support"
<div class="slds-form-element slds-form-element_horizontal slds-is-editing slds-form-element_1-col">
  <label class="slds-form-element__label" for="single-form-element-id-01">Description</label>
  <div class="slds-form-element__control">
    <textarea id="single-form-element-id-01" placeholder="Placeholder text…" class="slds-textarea">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</textarea>
  </div>
</div>
:::

::: legacy-component-example title="Single Column Support"
<div class="slds-form" role="list">
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="single-form-element-id-02">Label</label>
        <div class="slds-form-element__control">
          <input type="text" id="single-form-element-id-02" placeholder="Placeholder text…" class="slds-input" />
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="single-form-element-id-03">Label</label>
        <div class="slds-form-element__control">
          <input type="text" id="single-form-element-id-03" placeholder="Placeholder text…" class="slds-input" />
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing slds-form-element_1-col">
        <label class="slds-form-element__label" for="single-form-element-id-04">Description</label>
        <div class="slds-form-element__control">
          <textarea id="single-form-element-id-04" placeholder="Placeholder text…" class="slds-textarea">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</textarea>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Error state"
<div class="slds-form" role="list">
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="horizontal-form-element-id-01">Assigned To</label>
        <div class="slds-form-element__control">
          <input type="text" id="horizontal-form-element-id-01" readonly="" class="slds-input" value="Jack Rogers" />
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="horizontal-combobox-id-01" id="combobox-label-id-21">Team Name</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox_container">
            <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
              <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                <input type="text" class="slds-input slds-combobox__input slds-combobox__input-value" id="horizontal-combobox-id-01" aria-autocomplete="list" aria-controls="horizontal-listbox-id-01" aria-expanded="false" aria-haspopup="listbox" autoComplete="off"
                  role="combobox" placeholder="Search..." value="Salesforce Lightning Design System" />
                <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Clear the text input">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clear"></use>
                  </svg>
                  <span class="slds-assistive-text">Clear the text input</span>
                </button>
              </div>
              <div id="horizontal-listbox-id-01" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                <ul class="slds-listbox slds-listbox_vertical" role="presentation"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-has-error slds-is-editing">
        <label class="slds-form-element__label" for="horizontal-form-element-id-02">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Account Name</label>
        <div class="slds-form-element__control">
          <input type="text" id="horizontal-form-element-id-02" class="slds-input" value="" />
        </div>
        <div class="slds-form-element__help" id="horizontal-form-element-error-id-01">Complete this field</div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-form-element_address slds-has-error slds-is-required slds-is-editing slds-form-element_horizontal">
        <legend class="slds-form-element__legend slds-form-element__label">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Date and Time</legend>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_3-of-6">
              <div class="slds-form-element slds-has-error slds-is-editing">
                <label class="slds-form-element__label" for="horizontal-form-element-id-03">Date</label>
                <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
                  <input type="text" id="horizontal-form-element-id-03" class="slds-input" />
                  <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Select a date">
                    <svg class="slds-button__icon" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use>
                    </svg>
                    <span class="slds-assistive-text">Select a date</span>
                  </button>
                </div>
                <div class="slds-form-element__help" id="horizontal-form-element-error-id-04">Complete this field</div>
              </div>
            </div>
            <div class="slds-size_3-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-combobox-id-03" id="combobox-label-id-22">Time</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox_container">
                    <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                      <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                        <input type="text" class="slds-input slds-combobox__input" id="horizontal-combobox-id-03" aria-autocomplete="list" aria-controls="stacked-listbox-id-03" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox"
                          placeholder="Select a time…" />
                        <span class="slds-icon_container slds-icon-utility-clock slds-input__icon slds-input__icon_right">
                          <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default slds-icon-text-error" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clock"></use>
                          </svg>
                        </span>
                      </div>
                      <div id="stacked-listbox-id-03" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                        <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option25" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="7:00am">7:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option26" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="8:00am">8:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option27" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="9:00am">9:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option28" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="10:00am">10:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option29" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="11:00am">11:00am</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option30" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="12:00pm">12:00pm</span>
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
        </div>
      </fieldset>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing slds-form-element_1-col">
        <label class="slds-form-element__label" for="horizontal-form-element-id-14">Description</label>
        <div class="slds-form-element__control">
          <textarea id="horizontal-form-element-id-14" placeholder="Placeholder text…" class="slds-textarea">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</textarea>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-form-element_address slds-is-required slds-is-editing slds-form-element_horizontal">
        <legend class="slds-form-element__legend slds-form-element__label">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Billing Address</legend>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_1-of-1">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-04">Billing Street</label>
                <div class="slds-form-element__control">
                  <textarea id="horizontal-form-element-id-04" required="" placeholder="Placeholder text…" class="slds-textarea">525 S. Lexington Ave</textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_3-of-6">
              <div class="slds-form-element slds-has-error">
                <label class="slds-form-element__label" for="horizontal-form-element-id-05">Billing City</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-05" required="" class="slds-input" />
                </div>
                <div class="slds-form-element__help" id="horizontal-form-element-error-id-02">Complete this field</div>
              </div>
            </div>
            <div class="slds-size_3-of-6">
              <div class="slds-form-element slds-has-error">
                <label class="slds-form-element__label" for="horizontal-form-element-id-06">Billing State/Province</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-06" required="" class="slds-input" />
                </div>
                <div class="slds-form-element__help" id="horizontal-form-element-error-id-03">Complete this field</div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_3-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-07">Billing Zip/Postal Code</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-07" required="" class="slds-input" value="27215" />
                </div>
              </div>
            </div>
            <div class="slds-size_3-of-6">
              <div class="slds-form-element slds-has-error">
                <label class="slds-form-element__label" for="horizontal-form-element-id-08">Billing Country</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-08" required="" class="slds-input" />
                </div>
                <div class="slds-form-element__help" id="horizontal-form-element-error-id-04">Complete this field</div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-form-element_address slds-is-editing slds-form-element_horizontal">
        <legend class="slds-form-element__legend slds-form-element__label">Shipping Address</legend>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_1-of-1">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-09">Shipping Street</label>
                <div class="slds-form-element__control">
                  <textarea id="horizontal-form-element-id-09" placeholder="Placeholder text…" class="slds-textarea">312 Constitution Place</textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-10">Shipping City</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-10" class="slds-input" value="Austin" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-11">Shipping State/Province</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-11" class="slds-input" value="TX" />
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-12">Shipping Zip/Postal Code</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-12" class="slds-input" value="78767" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-13">Shipping Country</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-13" class="slds-input" value="USA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Fields"
<fieldset class="slds-form-element slds-form-element_compound">
  <legend class="slds-form-element__legend slds-form-element__label">Location</legend>
  <div class="slds-form-element__control">
    <div class="slds-form-element__row">
      <div class="slds-size_1-of-2">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="input-01">Latitude</label>
          <div class="slds-form-element__control">
            <input type="text" id="input-01" class="slds-input" />
          </div>
        </div>
      </div>
      <div class="slds-size_1-of-2">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="input-02">Longitude</label>
          <div class="slds-form-element__control">
            <input type="text" id="input-02" class="slds-input" />
          </div>
        </div>
      </div>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="Address"
<fieldset class="slds-form-element slds-form-element_compound slds-form-element_address">
  <legend class="slds-form-element__legend slds-form-element__label">Billing Address</legend>
  <div class="slds-form-element__control">
    <div class="slds-form-element__row">
      <div class="slds-size_1-of-1">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="form-element-id-01">Billing Street</label>
          <div class="slds-form-element__control">
            <textarea id="form-element-id-01" required="" placeholder="Placeholder text…" class="slds-textarea">525 S. Lexington Ave</textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-form-element__row">
      <div class="slds-size_4-of-6">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="form-element-id-02">Billing City</label>
          <div class="slds-form-element__control">
            <input type="text" id="form-element-id-02" required="" class="slds-input" value="Burlington" />
          </div>
        </div>
      </div>
      <div class="slds-size_2-of-6">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="form-element-id-03">Billing State/Province</label>
          <div class="slds-form-element__control">
            <input type="text" id="form-element-id-03" required="" class="slds-input" value="NC" />
          </div>
        </div>
      </div>
    </div>
    <div class="slds-form-element__row">
      <div class="slds-size_4-of-6">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="form-element-id-04">Billing Zip/Postal Code</label>
          <div class="slds-form-element__control">
            <input type="text" id="form-element-id-04" required="" class="slds-input" value="27215" />
          </div>
        </div>
      </div>
      <div class="slds-size_2-of-6">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="form-element-id-05">Billing Country</label>
          <div class="slds-form-element__control">
            <input type="text" id="form-element-id-05" required="" class="slds-input" value="USA" />
          </div>
        </div>
      </div>
    </div>
  </div>
</fieldset>
:::

::: legacy-component-example title="View Mode"
<div class="slds-form" role="list">
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Assigned To</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <span class="slds-avatar slds-avatar_x-small slds-avatar_circle slds-m-right_xx-small">
              <img alt="Jack Rogers" src="/assets/images/avatar1.jpg" title="Jack Rogers" />
            </span>
            <a href="#">Jack Rogers</a>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Assigned To">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Assigned To</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">Team Name</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <a href="#">Salesforce Lightning Design System</a>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Team Name">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Team Name</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">Security Assessment Required?</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <span class="slds-icon_container slds-icon-utility-steps slds-current-color" title="False">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#steps"></use>
              </svg>
              <span class="slds-assistive-text">False</span>
            </span>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Security Assessment Required?">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Security Assessment Required?</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">Status</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static"></div>
          <button class="slds-button slds-button_icon" title="Edit: Status">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Status</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">Personalization Settings</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">Disable end user personalization</div>
          <button class="slds-button slds-button_icon" title="Edit: Personalization Settings">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Personalization Settings</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem"></div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">SLA Serial Number</span>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">5367</div>
          <button class="slds-button slds-button_icon" title="Edit: SLA Serial Number">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: SLA Serial Number</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">SLA Expiration Date</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">1/1/2018</div>
          <button class="slds-button slds-button_icon" title="Edit: SLA Expiration Date">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: SLA Expiration Date</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">Location</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">10.283, 54.293</div>
          <button class="slds-button slds-button_icon" title="Edit: Location">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Location</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">Selected Languages</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">Arabic, Chinese, English, German</div>
          <button class="slds-button slds-button_icon" title="Edit: Selected Languages">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Selected Languages</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Billing Address</span>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <a href="#">525 S. Lexington Ave
              <br/>Burlington, NC 27215
              <br/>USA
              <br/>
            </a>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Billing Address">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Billing Address</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
        <span class="slds-form-element__label">Shipping Address</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <a href="#">312 Constitution Place
              <br/>Austin, TX 78767
              <br/>USA
              <br/>
            </a>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Shipping Address">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Shipping Address</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent slds-form-element_1-col">
        <span class="slds-form-element__label">Description</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static slds-text-longform">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
            <br/>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Description">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Description</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="View Mode"
<div class="slds-form" role="list">
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Assigned To</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <span class="slds-avatar slds-avatar_x-small slds-avatar_circle slds-m-right_xx-small">
              <img alt="Jack Rogers" src="/assets/images/avatar1.jpg" title="Jack Rogers" />
            </span>
            <a href="#">Jack Rogers</a>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Assigned To">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Assigned To</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">Team Name</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <a href="#">Salesforce Lightning Design System</a>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Team Name">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Team Name</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">Security Assessment Required?</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <span class="slds-icon_container slds-icon-utility-steps slds-current-color" title="False">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#steps"></use>
              </svg>
              <span class="slds-assistive-text">False</span>
            </span>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Security Assessment Required?">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Security Assessment Required?</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">Status</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static"></div>
          <button class="slds-button slds-button_icon" title="Edit: Status">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Status</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">Personalization Settings</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">Disable end user personalization</div>
          <button class="slds-button slds-button_icon" title="Edit: Personalization Settings">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Personalization Settings</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem"></div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">SLA Serial Number</span>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">5367</div>
          <button class="slds-button slds-button_icon" title="Edit: SLA Serial Number">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: SLA Serial Number</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">SLA Expiration Date</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">1/1/2018</div>
          <button class="slds-button slds-button_icon" title="Edit: SLA Expiration Date">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: SLA Expiration Date</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent slds-form-element_1-col">
        <span class="slds-form-element__label">Description</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static slds-text-longform">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
            <br/>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Description">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Description</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">Location</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">10.283, 54.293</div>
          <button class="slds-button slds-button_icon" title="Edit: Location">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Location</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">Selected Languages</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">Arabic, Chinese, English, German</div>
          <button class="slds-button slds-button_icon" title="Edit: Selected Languages">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Selected Languages</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Billing Address</span>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <a href="#">525 S. Lexington Ave
              <br/>Burlington, NC 27215
              <br/>USA
              <br/>
            </a>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Billing Address">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Billing Address</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_horizontal slds-hint-parent">
        <span class="slds-form-element__label">Shipping Address</span>
        <div class="slds-form-element__control">
          <div class="slds-form-element__static">
            <a href="#">312 Constitution Place
              <br/>Austin, TX 78767
              <br/>USA
              <br/>
            </a>
          </div>
          <button class="slds-button slds-button_icon" title="Edit: Shipping Address">
            <svg class="slds-button__icon slds-button__icon_hint" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
            </svg>
            <span class="slds-assistive-text">Edit: Shipping Address</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Edit Mode"
<div class="slds-form" role="list">
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing">
        <label class="slds-form-element__label" for="stacked-form-element-id-01">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Assigned To</label>
        <div class="slds-form-element__control">
          <input type="text" id="stacked-form-element-id-01" readonly="" required="" class="slds-input" value="Jack Rogers" />
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing">
        <label class="slds-form-element__label" for="stacked-combobox-id-01" id="combobox-label-id-25">Team Name</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox_container">
            <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
              <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                <input type="text" class="slds-input slds-combobox__input slds-combobox__input-value" id="stacked-combobox-id-01" aria-autocomplete="list" aria-controls="stacked-listbox-id-01" aria-expanded="false" aria-haspopup="listbox" autoComplete="off"
                  role="combobox" placeholder="Search..." value="Salesforce Lightning Design System" />
                <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Clear the text input">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clear"></use>
                  </svg>
                  <span class="slds-assistive-text">Clear the text input</span>
                </button>
              </div>
              <div id="stacked-listbox-id-01" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                <ul class="slds-listbox slds-listbox_vertical" role="presentation"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing">
        <label class="slds-form-element__label" for="checkbox-unique-id-42">Security Assessment Required?</label>
        <div class="slds-form-element__control">
          <span class="slds-checkbox slds-checkbox_standalone">
            <input type="checkbox" id="checkbox-unique-id-42" name="label" value="option" />
            <span class="slds-checkbox_faux"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing">
        <label class="slds-form-element__label" for="stacked-combobox-id-02" id="combobox-label-id-26">Status</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox_container">
            <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
              <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                <input type="text" class="slds-input slds-combobox__input" id="stacked-combobox-id-02" aria-controls="stacked-listbox-id-02" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Select an Option…"
                />
                <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                  <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                  </svg>
                </span>
              </div>
              <div id="stacked-listbox-id-02" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                <ul class="slds-listbox slds-listbox_vertical" role="presentation"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-is-editing slds-form-element_stacked">
        <legend class="slds-form-element__legend slds-form-element__label">App Personalization Settings</legend>
        <div class="slds-form-element__control">
          <div class="slds-checkbox">
            <input type="checkbox" name="default" id="checkbox-unique-id-43" value="checkbox-unique-id-43" checked="" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-43">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label">Disable end user personalization</span>
            </label>
          </div>
          <div class="slds-checkbox">
            <input type="checkbox" name="default" id="checkbox-unique-id-44" value="checkbox-unique-id-44" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-44">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label">Don&#x27;t automatically create temporary tabs</span>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="slds-form__item" role="listitem"></div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing">
        <label class="slds-form-element__label" for="stacked-form-element-id-02">SLA Serial Number</label>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <input type="text" id="stacked-form-element-id-02" class="slds-input" value="5367" />
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <label class="slds-form-element__label" for="stacked-form-element-id-03">Date</label>
        <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
          <input type="text" id="stacked-form-element-id-03" class="slds-input" value="1/1/2018" />
          <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Select a date">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use>
            </svg>
            <span class="slds-assistive-text">Select a date</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-is-editing slds-form-element_stacked">
        <legend class="slds-form-element__legend slds-form-element__label">Location</legend>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_1-of-2">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-location-longitude-01">Longitude</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-location-longitude-01" class="slds-input" value="10.283" />
                </div>
              </div>
            </div>
            <div class="slds-size_1-of-2">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-location-latitude-01">Latitude</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-location-latitude-01" class="slds-input" value="54.293" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing" role="group" aria-labelledby="picklist-group-label">
        <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
        <div class="slds-form-element__control">
          <div class="slds-dueling-list">
            <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
            <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
            <div class="slds-dueling-list__column slds-dueling-list__column_responsive">
              <span class="slds-form-element__label" id="label-15">First Category</span>
              <div class="slds-dueling-list__options">
                <ul aria-describedby="option-drag-label" aria-labelledby="label-15" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
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
            <div class="slds-dueling-list__column slds-dueling-list__column_responsive">
              <span class="slds-form-element__label" id="label-16">Second Category</span>
              <div class="slds-dueling-list__options">
                <ul aria-describedby="option-drag-label" aria-labelledby="label-16" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
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
            <div class="slds-dueling-list__column">
              <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
                </svg>
                <span class="slds-assistive-text">Move Selection Up</span>
              </button>
              <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
                <span class="slds-assistive-text">Move Selection Down</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-form-element_address slds-is-required slds-is-editing slds-form-element_stacked">
        <legend class="slds-form-element__legend slds-form-element__label">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Billing Address</legend>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_1-of-1">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-04">Billing Street</label>
                <div class="slds-form-element__control">
                  <textarea id="stacked-form-element-id-04" required="" placeholder="Placeholder text…" class="slds-textarea">525 S. Lexington Ave</textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-05">Billing City</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-form-element-id-05" required="" class="slds-input" value="Burlington" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-06">Billing State/Province</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-form-element-id-06" required="" class="slds-input" value="NC" />
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-07">Billing Zip/Postal Code</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-form-element-id-07" required="" class="slds-input" value="27215" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-08">Billing Country</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-form-element-id-08" required="" class="slds-input" value="USA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-form-element_address slds-is-editing slds-form-element_stacked">
        <legend class="slds-form-element__legend slds-form-element__label">Shipping Address</legend>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_1-of-1">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-09">Shipping Street</label>
                <div class="slds-form-element__control">
                  <textarea id="stacked-form-element-id-09" placeholder="Placeholder text…" class="slds-textarea">312 Constitution Place</textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-10">Shipping City</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-form-element-id-10" class="slds-input" value="Austin" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-11">Shipping State/Province</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-form-element-id-11" class="slds-input" value="TX" />
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-12">Shipping Zip/Postal Code</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-form-element-id-12" class="slds-input" value="78767" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="stacked-form-element-id-13">Shipping Country</label>
                <div class="slds-form-element__control">
                  <input type="text" id="stacked-form-element-id-13" class="slds-input" value="USA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing slds-form-element_1-col">
        <label class="slds-form-element__label" for="stacked-form-element-id-14">Description</label>
        <div class="slds-form-element__control">
          <textarea id="stacked-form-element-id-14" placeholder="Placeholder text…" class="slds-textarea">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</textarea>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Edit Mode"
<div class="slds-form" role="list">
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="horizontal-form-element-id-01">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Assigned To</label>
        <div class="slds-form-element__control">
          <input type="text" id="horizontal-form-element-id-01" readonly="" required="" class="slds-input" value="Jack Rogers" />
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="horizontal-combobox-id-01" id="combobox-label-id-29">Team Name</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox_container">
            <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
              <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                <input type="text" class="slds-input slds-combobox__input slds-combobox__input-value" id="horizontal-combobox-id-01" aria-autocomplete="list" aria-controls="horizontal-listbox-id-01" aria-expanded="false" aria-haspopup="listbox" autoComplete="off"
                  role="combobox" placeholder="Search..." value="Salesforce Lightning Design System" />
                <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Clear the text input">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clear"></use>
                  </svg>
                  <span class="slds-assistive-text">Clear the text input</span>
                </button>
              </div>
              <div id="horizontal-listbox-id-01" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                <ul class="slds-listbox slds-listbox_vertical" role="presentation"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="checkbox-unique-id-48">Security Assessment Required?</label>
        <div class="slds-form-element__control">
          <span class="slds-checkbox slds-checkbox_standalone">
            <input type="checkbox" id="checkbox-unique-id-48" name="label" value="option" />
            <span class="slds-checkbox_faux"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="horizontal-combobox-id-02" id="combobox-label-id-30">Status</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox_container">
            <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
              <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                <input type="text" class="slds-input slds-combobox__input" id="horizontal-combobox-id-02" aria-controls="horizontal-listbox-id-02" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Select an Option…"
                />
                <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                  <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                  </svg>
                </span>
              </div>
              <div id="horizontal-listbox-id-02" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                <ul class="slds-listbox slds-listbox_vertical" role="presentation"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-is-editing slds-form-element_horizontal">
        <legend class="slds-form-element__legend slds-form-element__label">App Personalization Settings</legend>
        <div class="slds-form-element__control">
          <div class="slds-checkbox">
            <input type="checkbox" name="default" id="checkbox-unique-id-49" value="checkbox-unique-id-49" checked="" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-49">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label">Disable end user personalization</span>
            </label>
          </div>
          <div class="slds-checkbox">
            <input type="checkbox" name="default" id="checkbox-unique-id-50" value="checkbox-unique-id-50" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-50">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label">Don&#x27;t automatically create temporary tabs</span>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="slds-form__item" role="listitem"></div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
        <label class="slds-form-element__label" for="horizontal-form-element-id-02">SLA Serial Number</label>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <input type="text" id="horizontal-form-element-id-02" class="slds-input" value="5367" />
        </div>
      </div>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <label class="slds-form-element__label" for="horizontal-form-element-id-03">Date</label>
        <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
          <input type="text" id="horizontal-form-element-id-03" class="slds-input" value="1/1/2018" />
          <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Select a date">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use>
            </svg>
            <span class="slds-assistive-text">Select a date</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_horizontal slds-is-editing slds-form-element_1-col">
        <label class="slds-form-element__label" for="horizontal-form-element-id-14">Description</label>
        <div class="slds-form-element__control">
          <textarea id="horizontal-form-element-id-14" placeholder="Placeholder text…" class="slds-textarea">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</textarea>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-is-editing slds-form-element_horizontal">
        <legend class="slds-form-element__legend slds-form-element__label">Location</legend>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_1-of-2">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-location-longitude-01">Longitude</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-location-longitude-01" class="slds-input" value="10.283" />
                </div>
              </div>
            </div>
            <div class="slds-size_1-of-2">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-location-latitude-01">Latitude</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-location-latitude-01" class="slds-input" value="54.293" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="slds-form__item" role="listitem">
      <div class="slds-form-element slds-form-element_stacked slds-is-editing" role="group" aria-labelledby="picklist-group-label">
        <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
        <div class="slds-form-element__control">
          <div class="slds-dueling-list">
            <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
            <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
            <div class="slds-dueling-list__column slds-dueling-list__column_responsive">
              <span class="slds-form-element__label" id="label-19">First Category</span>
              <div class="slds-dueling-list__options">
                <ul aria-describedby="option-drag-label" aria-labelledby="label-19" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
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
            <div class="slds-dueling-list__column slds-dueling-list__column_responsive">
              <span class="slds-form-element__label" id="label-20">Second Category</span>
              <div class="slds-dueling-list__options">
                <ul aria-describedby="option-drag-label" aria-labelledby="label-20" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
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
            <div class="slds-dueling-list__column">
              <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
                </svg>
                <span class="slds-assistive-text">Move Selection Up</span>
              </button>
              <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
                <span class="slds-assistive-text">Move Selection Down</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-form__row">
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-form-element_address slds-is-required slds-is-editing slds-form-element_stacked">
        <legend class="slds-form-element__legend slds-form-element__label">
          <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Billing Address</legend>
        <div class="slds-form-element__icon">
          <button class="slds-button slds-button_icon">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_1-of-1">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-04">Billing Street</label>
                <div class="slds-form-element__control">
                  <textarea id="horizontal-form-element-id-04" required="" placeholder="Placeholder text…" class="slds-textarea">525 S. Lexington Ave</textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-05">Billing City</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-05" required="" class="slds-input" value="Burlington" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-06">Billing State/Province</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-06" required="" class="slds-input" value="NC" />
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-07">Billing Zip/Postal Code</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-07" required="" class="slds-input" value="27215" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-08">Billing Country</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-08" required="" class="slds-input" value="USA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="slds-form__item" role="listitem">
      <fieldset class="slds-form-element slds-form-element_compound slds-form-element_address slds-is-editing slds-form-element_stacked">
        <legend class="slds-form-element__legend slds-form-element__label">Shipping Address</legend>
        <div class="slds-form-element__control">
          <div class="slds-form-element__row">
            <div class="slds-size_1-of-1">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-09">Shipping Street</label>
                <div class="slds-form-element__control">
                  <textarea id="horizontal-form-element-id-09" placeholder="Placeholder text…" class="slds-textarea">312 Constitution Place</textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-10">Shipping City</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-10" class="slds-input" value="Austin" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-11">Shipping State/Province</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-11" class="slds-input" value="TX" />
                </div>
              </div>
            </div>
          </div>
          <div class="slds-form-element__row">
            <div class="slds-size_4-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-12">Shipping Zip/Postal Code</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-12" class="slds-input" value="78767" />
                </div>
              </div>
            </div>
            <div class="slds-size_2-of-6">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="horizontal-form-element-id-13">Shipping Country</label>
                <div class="slds-form-element__control">
                  <input type="text" id="horizontal-form-element-id-13" class="slds-input" value="USA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</div>
:::
