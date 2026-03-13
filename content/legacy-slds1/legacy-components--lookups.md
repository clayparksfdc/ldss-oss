---
title: Lookups
---

SLDS 1 blueprint examples for **Lookups**.

::: legacy-component-example title="Base"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-1" id="combobox-label-id-33">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input" id="combobox-id-1" aria-autocomplete="list" aria-controls="listbox-id-1" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-1" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option229" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <div id="option230" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <div id="option231" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Focused"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-2" id="combobox-label-id-35">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-2" aria-autocomplete="list" aria-controls="listbox-id-2" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
          />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-2" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option235" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <div id="option236" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <div id="option237" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Open - Item Focused"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-3" id="combobox-label-id-37">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-3" aria-activedescendant="option1" aria-autocomplete="list" aria-controls="listbox-id-3" aria-expanded="true" aria-haspopup="listbox" autoComplete="off"
            role="combobox" placeholder="Search..." />
          <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
            <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
            </svg>
          </span>
        </div>
        <div id="listbox-id-3" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div aria-selected="true" id="option241" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta slds-has-focus" role="option" tabindex="0">
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
              <div id="option242" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <div id="option243" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Displaying options based on user input"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-4" id="combobox-label-id-39">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox_container">
      <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
          <input type="text" class="slds-input slds-combobox__input slds-has-focus slds-combobox__input-value" id="combobox-id-4" aria-activedescendant="option1" aria-autocomplete="list" aria-controls="listbox-id-4" aria-expanded="true" aria-haspopup="listbox"
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
              <div id="option247" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <div id="option248" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <div id="option249" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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

::: legacy-component-example title="Option Selected"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-5" id="combobox-label-id-41">Relate To</label>
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
          <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-41" id="combobox-id-5-selected-value" aria-controls="listbox-id-5" aria-expanded="false" aria-haspopup="listbox">
            <span class="slds-truncate" id="combobox-value-id-20">Salesforce.com, Inc.</span>
          </div>
          <button class="slds-button slds-button_icon slds-input__icon slds-input__icon_right" title="Remove selected option">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span class="slds-assistive-text">Remove selected option</span>
          </button>
        </div>
        <div id="listbox-id-5" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
          <ul class="slds-listbox slds-listbox_vertical" role="presentation">
            <li role="presentation" class="slds-listbox__item">
              <div id="option252" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <div id="option253" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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

::: legacy-component-example title="Grouped"
<div class="demo-only" style="height:640px">
  <section role="dialog" tabindex="-1" aria-modal="true" class="slds-modal slds-fade-in-open slds-modal_large">
    <div class="slds-modal__container">
      <button class="slds-button slds-button_icon slds-modal__close">
        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div class="slds-modal__header">
        <h1 class="slds-text-heading_medium">Account name</h1>
      </div>
      <div class="slds-modal__content" id="modal-content-id-1">
        <div class="slds-lookup" data-select="multi" data-scope="single" data-typeahead="true">
          <div class="slds-form-element slds-p-top_medium slds-p-horizontal_medium slds-m-bottom_small">
            <label class="slds-form-element__label" for="lookup">Accounts</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
              <svg class="slds-icon slds-input__icon slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
              <input type="text" id="lookup" class="slds-input" role="combobox" aria-activedescendant="" aria-autocomplete="list" aria-controls="lookup-grouped-table-id-1" aria-haspopup="listbox" aria-expanded="true" />
            </div>
          </div>
          <table class="slds-table slds-table_bordered slds-table_cell-buffer slds-no-row-hover" role="listbox" id="lookup-grouped-table-id-1" aria-label="Example table for advanced modal lookup">
            <thead>
              <tr>
                <th colSpan="4" scope="col">
                  <div class="slds-float_right">
                    <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small" title="Filter List">
                      <svg class="slds-button__icon" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#filterList"></use>
                      </svg>
                      <span class="slds-assistive-text">Filter List</span>
                    </button>
                    <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small" title="Sort">
                      <svg class="slds-button__icon" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#sort"></use>
                      </svg>
                      <span class="slds-assistive-text">Sort</span>
                    </button>
                  </div>5 Results, sorted by relevancy</th>
              </tr>
              <tr>
                <th scope="col">
                  <div class="slds-truncate" title="Account Name">Account Name</div>
                </th>
                <th scope="col">
                  <div class="slds-truncate" title="Location">Location</div>
                </th>
                <th scope="col">
                  <div class="slds-truncate" title="Secondary Column">Secondary Column</div>
                </th>
                <th scope="col">
                  <div class="slds-truncate" title="Tertiary Column">Tertiary Column</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <a id="s01" href="#" role="option">
                    <div class="slds-truncate" title="Acme Landscape">
                      <svg class="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>Acme Landscape</div>
                  </a>
                </th>
                <td>
                  <div class="slds-truncate" title="Seattle, WA">Seattle, WA</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Secondary Field">Secondary Field</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Tertiary Field">Tertiary Field</div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <a id="s02" href="#" role="option">
                    <div class="slds-truncate" title="ACME Construction">
                      <svg class="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>ACME Construction</div>
                  </a>
                </th>
                <td>
                  <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Secondary Field">Secondary Field</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Tertiary Field">Tertiary Field</div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <a id="s03" href="#" role="option">
                    <div class="slds-truncate" title="Action Sports">
                      <svg class="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>Action Sports</div>
                  </a>
                </th>
                <td>
                  <div class="slds-truncate" title="Madison, WI">Madison, WI</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Secondary Field">Secondary Field</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Tertiary Field">Tertiary Field</div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <a id="s04" href="#" role="option">
                    <div class="slds-truncate" title="Moderno Bistro">
                      <svg class="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>Moderno Bistro</div>
                  </a>
                </th>
                <td>
                  <div class="slds-truncate" title="Acton, OH">Acton, OH</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Secondary Field">Secondary Field</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Tertiary Field">Tertiary Field</div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <a id="s05" href="#" role="option">
                    <div class="slds-truncate" title="Cozy Kitchen">
                      <svg class="slds-icon slds-icon-standard-account slds-icon_small slds-m-right_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>Cozy Kitchen</div>
                  </a>
                </th>
                <td>
                  <div class="slds-truncate" title="Acton, CA">Acton, CA</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Secondary Field">Secondary Field</div>
                </td>
                <td>
                  <div class="slds-truncate" title="Tertiary Field">Tertiary Field</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="slds-modal__footer slds-modal__footer_directional">
        <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
        <button class="slds-button slds-button_neutral">New Account</button>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
</div>
:::

::: legacy-component-example title="Multi Entity"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-1">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-1" id="combobox-label-id-43">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-1">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-43" id="combobox-id-1-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-22">Filter by: Accounts</span>
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
                      <div id="option266" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option267" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                      <div id="option268" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option269" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option270" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option271" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option272" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option273" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
            <input type="text" class="slds-input slds-combobox__input" id="combobox-id-1" aria-autocomplete="list" aria-controls="listbox-id-1" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right" title="Description of icon when needed">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon when needed</span>
            </span>
          </div>
          <div id="listbox-id-1" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option274" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option275" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option276" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option277" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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

::: legacy-component-example title="Focused"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-1">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-2" id="combobox-label-id-45">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-1">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-45" id="combobox-id-2-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-24">Filter by: Accounts</span>
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
                      <div id="option290" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option291" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                      <div id="option292" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option293" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option294" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option295" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option296" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option297" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
        <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" id="primary-combobox-id-1">
          <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-1" aria-autocomplete="list" aria-controls="listbox-id-1" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
            />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right" title="Description of icon when needed">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon when needed</span>
            </span>
          </div>
          <div id="listbox-id-1" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option298" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option299" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option300" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option301" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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

::: legacy-component-example title="Open - Item Focused"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-2">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-3" id="combobox-label-id-47">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-2">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-47" id="combobox-id-3-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-26">Filter by: Accounts</span>
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
                      <div id="option314" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option315" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                      <div id="option316" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option317" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option318" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option319" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option320" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option321" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
            <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-2" aria-activedescendant="option1" aria-autocomplete="list" aria-controls="listbox-id-2" aria-expanded="true" aria-haspopup="listbox" autoComplete="off"
              role="combobox" placeholder="Search..." />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right" title="Description of icon when needed">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon when needed</span>
            </span>
          </div>
          <div id="listbox-id-2" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div aria-selected="true" id="option322" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta slds-has-focus" role="option" tabindex="0">
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
                <div id="option323" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option324" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option325" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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

::: legacy-component-example title="Option(s) Selected"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-3">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group slds-has-selection">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-4" id="combobox-label-id-49">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-3">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-49" id="combobox-id-4-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-28">Filter by: Accounts</span>
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
                      <div id="option338" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option339" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                      <div id="option340" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option341" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option342" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option343" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option344" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option345" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
            <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-3" aria-autocomplete="list" aria-controls="listbox-id-3" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
            />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right" title="Description of icon when needed">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon when needed</span>
            </span>
          </div>
          <div id="listbox-id-3" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option346" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option347" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option348" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option349" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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

::: legacy-component-example title="Focused - Option(s) Selected"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="combobox-id-4">Relate To</label>
  <div class="slds-form-element__control">
    <div class="slds-combobox-group slds-has-selection">
      <div class="slds-combobox_object-switcher slds-combobox-addon_start">
        <div class="slds-form-element">
          <label class="slds-form-element__label slds-assistive-text" for="combobox-id-5" id="combobox-label-id-51">Filter Search</label>
          <div class="slds-form-element__control">
            <div class="slds-combobox_container">
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-combobox-id-4">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                  <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-51" id="combobox-id-5-selected-value" aria-controls="objectswitcher-listbox-id-1" aria-expanded="false"
                    aria-haspopup="listbox">
                    <span class="slds-truncate" id="combobox-value-id-30">Filter by: Accounts</span>
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
                      <div id="option362" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div aria-checked="true" id="option363" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                      <div id="option364" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Reports">Reports</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option365" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Contacts">Contacts</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option366" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Files">Files</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option367" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Groups">Groups</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option368" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon"></span>
                        <span class="slds-media__body">
                          <span class="" title="Leads">Leads</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option369" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
            <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-4" aria-autocomplete="list" aria-controls="listbox-id-4" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..."
            />
            <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right" title="Description of icon when needed">
              <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon when needed</span>
            </span>
          </div>
          <div id="listbox-id-4" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" class="slds-listbox__item">
                <div id="option370" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option371" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option372" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option373" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
