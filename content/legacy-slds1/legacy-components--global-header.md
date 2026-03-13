---
title: Global Header
---

SLDS 1 blueprint examples for **Global Header**.

::: legacy-component-example title="Base"
<header class="slds-global-header_container">
  <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Navigation</a>
  <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Main Content</a>
  <div class="slds-global-header slds-grid slds-grid_align-spread">
    <div class="slds-global-header__item">
      <div class="slds-global-header__logo">
        <span class="slds-assistive-text">Salesforce</span>
      </div>
    </div>
    <div class="slds-global-header__item slds-global-header__item_search">
      <div class="slds-form-element">
        <label class="slds-form-element__label slds-assistive-text" for="combobox-id-2">Search Salesforce</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox-group">
            <div class="slds-combobox_object-switcher slds-combobox-addon_start">
              <div class="slds-form-element">
                <label class="slds-form-element__label slds-assistive-text" for="objectswitcher-combobox-id-2" id="combobox-label-id-15">Filter Search</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox_container">
                    <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-search-combobox-id-1">
                      <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                        <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-15" id="objectswitcher-combobox-id-2-selected-value" aria-controls="objectswitcher-listbox-id-2"
                          aria-expanded="false" aria-haspopup="listbox">
                          <span class="slds-truncate" id="combobox-value-id-15">Accounts</span>
                        </div>
                        <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                          <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                          </svg>
                        </span>
                      </div>
                      <div id="objectswitcher-listbox-id-2" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                        <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option194" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                              <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div aria-checked="true" id="option195" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                            <div id="option196" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Reports">Reports</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option197" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Contacts">Contacts</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option198" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Files">Files</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option199" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Groups">Groups</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option200" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Leads">Leads</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option201" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-search-combobox-id-1">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element" role="none">
                  <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                  </span>
                  <input type="text" class="slds-input slds-combobox__input" id="combobox-id-2" aria-autocomplete="list" aria-controls="search-listbox-id-1" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce"
                  />
                </div>
                <div id="search-listbox-id-1" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="Recent Items">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option202" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Recent Items</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option203" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-opportunity">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce - 1,000 Licenses</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Opportunity • Propecting</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option204" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-contact">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Art Vandelay</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Contact • avandelay@vandelay.com</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option205" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-account">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Vandelay Industries</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option206" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-event">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce UK 2016 Events</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Event • $20,000</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option207" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-lead">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#lead"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">H.E. Pennypacker</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Lead • Nursing</span>
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
    <div class="slds-global-header__item">
      <ul class="slds-global-actions">
        <li class="slds-global-actions__item">
          <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-button-group">
              <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
                </svg>
                <span class="slds-assistive-text">Toggle Favorite</span>
              </button>
              <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
                <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
                <span class="slds-assistive-text">View Favorites</span>
              </button>
            </div>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
              </svg>
              <span class="slds-assistive-text">Global Actions</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
              </svg>
              <span class="slds-assistive-text">Help and Training</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
              </svg>
              <span class="slds-assistive-text">Setup</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
              </svg>
              <span class="slds-assistive-text">no new notifications</span>
            </button>
            <span aria-hidden="true" class="slds-notification-badge">0</span>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
              <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</header>
:::

::: legacy-component-example title="Logo"
<div class="slds-global-header__item">
  <div class="slds-global-header__logo">
    <span class="slds-assistive-text">Salesforce</span>
  </div>
</div>
:::

::: legacy-component-example title="Default"
<header class="slds-global-header_container">
  <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Navigation</a>
  <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Main Content</a>
  <div class="slds-global-header slds-grid slds-grid_align-spread">
    <div class="slds-global-header__item">
      <div class="slds-global-header__logo">
        <span class="slds-assistive-text">Salesforce</span>
      </div>
    </div>
    <div class="slds-global-header__item slds-global-header__item_search">
      <div class="slds-form-element">
        <label class="slds-form-element__label slds-assistive-text" for="combobox-id-3">Search Salesforce</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox-group">
            <div class="slds-combobox_object-switcher slds-combobox-addon_start">
              <div class="slds-form-element">
                <label class="slds-form-element__label slds-assistive-text" for="objectswitcher-combobox-id-3" id="combobox-label-id-17">Filter Search</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox_container">
                    <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-search-combobox-id-2">
                      <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                        <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-17" id="objectswitcher-combobox-id-3-selected-value" aria-controls="objectswitcher-listbox-id-3"
                          aria-expanded="false" aria-haspopup="listbox">
                          <span class="slds-truncate" id="combobox-value-id-17">Accounts</span>
                        </div>
                        <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                          <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                          </svg>
                        </span>
                      </div>
                      <div id="objectswitcher-listbox-id-3" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                        <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option222" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                              <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div aria-checked="true" id="option223" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                            <div id="option224" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Reports">Reports</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option225" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Contacts">Contacts</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option226" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Files">Files</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option227" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Groups">Groups</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option228" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Leads">Leads</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option229" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" id="primary-search-combobox-id-2">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element" role="none">
                  <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                  </span>
                  <input type="text" class="slds-input slds-combobox__input" id="combobox-id-3" aria-autocomplete="list" aria-controls="search-listbox-id-2" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce"
                  />
                </div>
                <div id="search-listbox-id-2" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="Recent Items">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option230" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Recent Items</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option231" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-opportunity">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce - 1,000 Licenses</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Opportunity • Propecting</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option232" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-contact">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Art Vandelay</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Contact • avandelay@vandelay.com</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option233" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-account">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Vandelay Industries</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option234" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-event">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce UK 2016 Events</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Event • $20,000</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option235" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-lead">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#lead"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">H.E. Pennypacker</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Lead • Nursing</span>
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
    <div class="slds-global-header__item">
      <ul class="slds-global-actions">
        <li class="slds-global-actions__item">
          <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-button-group">
              <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
                </svg>
                <span class="slds-assistive-text">Toggle Favorite</span>
              </button>
              <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
                <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
                <span class="slds-assistive-text">View Favorites</span>
              </button>
            </div>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
              </svg>
              <span class="slds-assistive-text">Global Actions</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
              </svg>
              <span class="slds-assistive-text">Help and Training</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
              </svg>
              <span class="slds-assistive-text">Setup</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
              </svg>
              <span class="slds-assistive-text">no new notifications</span>
            </button>
            <span aria-hidden="true" class="slds-notification-badge">0</span>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
              <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</header>
:::

::: legacy-component-example title="Focused and expanded"
<header class="slds-global-header_container">
  <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Navigation</a>
  <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Main Content</a>
  <div class="slds-global-header slds-grid slds-grid_align-spread">
    <div class="slds-global-header__item">
      <div class="slds-global-header__logo">
        <span class="slds-assistive-text">Salesforce</span>
      </div>
    </div>
    <div class="slds-global-header__item slds-global-header__item_search">
      <div class="slds-form-element">
        <label class="slds-form-element__label slds-assistive-text" for="combobox-id-4">Search Salesforce</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox-group">
            <div class="slds-combobox_object-switcher slds-combobox-addon_start">
              <div class="slds-form-element">
                <label class="slds-form-element__label slds-assistive-text" for="objectswitcher-combobox-id-4" id="combobox-label-id-19">Filter Search</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox_container">
                    <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-search-combobox-id-3">
                      <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                        <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-19" id="objectswitcher-combobox-id-4-selected-value" aria-controls="objectswitcher-listbox-id-4"
                          aria-expanded="false" aria-haspopup="listbox">
                          <span class="slds-truncate" id="combobox-value-id-19">Accounts</span>
                        </div>
                        <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                          <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                          </svg>
                        </span>
                      </div>
                      <div id="objectswitcher-listbox-id-4" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                        <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option250" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                              <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div aria-checked="true" id="option251" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                            <div id="option252" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Reports">Reports</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option253" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Contacts">Contacts</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option254" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Files">Files</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option255" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Groups">Groups</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option256" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Leads">Leads</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option257" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" id="primary-search-combobox-id-3">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element" role="none">
                  <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                  </span>
                  <input type="text" class="slds-input slds-combobox__input slds-has-focus" id="combobox-id-4" aria-autocomplete="list" aria-controls="search-listbox-id-3" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox"
                    placeholder="Search Salesforce" />
                </div>
                <div id="search-listbox-id-3" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                  <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="Recent Items">
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option258" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                        <h3 class="slds-listbox__option-header" role="presentation">Recent Items</h3>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option259" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-opportunity">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce - 1,000 Licenses</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Opportunity • Propecting</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option260" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-contact">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Art Vandelay</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Contact • avandelay@vandelay.com</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option261" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-account">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Vandelay Industries</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option262" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-event">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce UK 2016 Events</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Event • $20,000</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option263" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                        <span class="slds-media__figure slds-listbox__option-icon">
                          <span class="slds-icon_container slds-icon-standard-lead">
                            <svg class="slds-icon slds-icon_small" aria-hidden="true">
                              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#lead"></use>
                            </svg>
                          </span>
                        </span>
                        <span class="slds-media__body">
                          <span class="slds-listbox__option-text slds-listbox__option-text_entity">H.E. Pennypacker</span>
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Lead • Nursing</span>
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
    <div class="slds-global-header__item">
      <ul class="slds-global-actions">
        <li class="slds-global-actions__item">
          <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-button-group">
              <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
                </svg>
                <span class="slds-assistive-text">Toggle Favorite</span>
              </button>
              <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
                <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
                <span class="slds-assistive-text">View Favorites</span>
              </button>
            </div>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
              </svg>
              <span class="slds-assistive-text">Global Actions</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
              </svg>
              <span class="slds-assistive-text">Help and Training</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
              </svg>
              <span class="slds-assistive-text">Setup</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
              </svg>
              <span class="slds-assistive-text">no new notifications</span>
            </button>
            <span aria-hidden="true" class="slds-notification-badge">0</span>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
              <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</header>
:::

::: legacy-component-example title="Active and typing"
<header class="slds-global-header_container">
  <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Navigation</a>
  <a href="#" class="slds-assistive-text slds-assistive-text_focus">Skip to Main Content</a>
  <div class="slds-global-header slds-grid slds-grid_align-spread">
    <div class="slds-global-header__item">
      <div class="slds-global-header__logo">
        <span class="slds-assistive-text">Salesforce</span>
      </div>
    </div>
    <div class="slds-global-header__item slds-global-header__item_search">
      <div class="slds-form-element">
        <label class="slds-form-element__label slds-assistive-text" for="combobox-id-5">Search Salesforce</label>
        <div class="slds-form-element__control">
          <div class="slds-combobox-group">
            <div class="slds-combobox_object-switcher slds-combobox-addon_start">
              <div class="slds-form-element">
                <label class="slds-form-element__label slds-assistive-text" for="objectswitcher-combobox-id-5" id="combobox-label-id-21">Filter Search</label>
                <div class="slds-form-element__control">
                  <div class="slds-combobox_container">
                    <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-search-combobox-id-4">
                      <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                        <div role="combobox" tabindex="0" class="slds-input_faux slds-combobox__input slds-combobox__input-value" aria-labelledby="combobox-label-id-21" id="objectswitcher-combobox-id-5-selected-value" aria-controls="objectswitcher-listbox-id-5"
                          aria-expanded="false" aria-haspopup="listbox">
                          <span class="slds-truncate" id="combobox-value-id-21">Accounts</span>
                        </div>
                        <span class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                          <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                          </svg>
                        </span>
                      </div>
                      <div id="objectswitcher-listbox-id-5" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                        <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="{{Placeholder for Dropdown Options}}">
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option275" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                              <h3 class="slds-listbox__option-header" role="presentation">Suggested for you</h3>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div aria-checked="true" id="option276" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option">
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
                            <div id="option277" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Reports">Reports</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option278" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Contacts">Contacts</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option279" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Files">Files</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option280" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Groups">Groups</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option281" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                              <span class="slds-media__figure slds-listbox__option-icon"></span>
                              <span class="slds-media__body">
                                <span class="" title="Leads">Leads</span>
                              </span>
                            </div>
                          </li>
                          <li role="presentation" class="slds-listbox__item">
                            <div id="option282" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
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
              <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" id="primary-search-combobox-id-4">
                <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element" role="none">
                  <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
                    <svg class="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                  </span>
                  <input type="text" class="slds-input slds-combobox__input slds-has-focus slds-combobox__input-value" id="combobox-id-5" aria-activedescendant="option0" aria-autocomplete="list" aria-controls="search-listbox-id-4" aria-expanded="true"
                    aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce" value="salesforce" />
                </div>
                <div id="search-listbox-id-4" class="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
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
                      <div id="option283" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option284" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
                        </span>
                      </div>
                    </li>
                    <li role="presentation" class="slds-listbox__item">
                      <div id="option285" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                          <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
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
    <div class="slds-global-header__item">
      <ul class="slds-global-actions">
        <li class="slds-global-actions__item">
          <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
            <div class="slds-button-group">
              <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
                <svg class="slds-button__icon" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
                </svg>
                <span class="slds-assistive-text">Toggle Favorite</span>
              </button>
              <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
                <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                </svg>
                <span class="slds-assistive-text">View Favorites</span>
              </button>
            </div>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
              </svg>
              <span class="slds-assistive-text">Global Actions</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
              </svg>
              <span class="slds-assistive-text">Help and Training</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
              </svg>
              <span class="slds-assistive-text">Setup</span>
            </button>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
              <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
              </svg>
              <span class="slds-assistive-text">no new notifications</span>
            </button>
            <span aria-hidden="true" class="slds-notification-badge">0</span>
          </div>
        </li>
        <li class="slds-global-actions__item">
          <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
              <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</header>
:::

::: legacy-component-example title="Not pressed"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
      <div class="slds-button-group">
        <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
          </svg>
          <span class="slds-assistive-text">Toggle Favorite</span>
        </button>
        <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">View Favorites</span>
        </button>
      </div>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="Accessibility Requirement"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
      <div class="slds-button-group">
        <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small slds-is-selected" aria-pressed="true" title="Toggle Favorites">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
          </svg>
          <span class="slds-assistive-text">Toggle Favorite</span>
        </button>
        <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">View Favorites</span>
        </button>
      </div>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="Disabled"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
      <div class="slds-button-group">
        <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small slds-is-disabled" disabled="" aria-pressed="false" title="Toggle Favorites">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
          </svg>
          <span class="slds-assistive-text">Toggle Favorite</span>
        </button>
        <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">View Favorites</span>
        </button>
      </div>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="Favorites popover"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
      <div class="slds-button-group">
        <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
          </svg>
          <span class="slds-assistive-text">Toggle Favorite</span>
        </button>
        <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">View Favorites</span>
        </button>
      </div>
      <section aria-describedby="dialog-body-id-8" aria-label="My Favorites" class="slds-popover slds-nubbin_top slds-dynamic-menu" role="dialog" style="position:absolute;left:-8rem;top:36px">
        <div class="slds-popover__body slds-p-horizontal_none" id="dialog-body-id-8">
          <div class="slds-media">
            <div class="slds-media__body">
              <div id="example-unique-id-5" class="slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="My Favorites">
                  <li role="presentation" class="slds-listbox__item">
                    <div id="option288" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                      <h3 class="slds-listbox__option-header" role="presentation">My Favorites</h3>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div id="option289" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" tabindex="0">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer class="slds-popover__footer">
          <ul>
            <li>
              <button class="slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1">
                <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                </svg>Favorite this page</button>
            </li>
            <li>
              <button class="slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1">
                <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>Edit Favorites</button>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
        </svg>
        <span class="slds-assistive-text">Global Actions</span>
      </button>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
        </svg>
        <span class="slds-assistive-text">Help and Training</span>
      </button>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
        </svg>
        <span class="slds-assistive-text">Setup</span>
      </button>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
        </svg>
        <span class="slds-assistive-text">no new notifications</span>
      </button>
      <span aria-hidden="true" class="slds-notification-badge"></span>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
        <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
          <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
        </span>
      </button>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="Task"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
        </svg>
        <span class="slds-assistive-text">Global Actions</span>
      </button>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="Task menu"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
      <div class="slds-button-group">
        <button class="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
          </svg>
          <span class="slds-assistive-text">Toggle Favorite</span>
        </button>
        <button class="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">View Favorites</span>
        </button>
      </div>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
        </svg>
        <span class="slds-assistive-text">Global Actions</span>
      </button>
      <div class="slds-dropdown slds-dropdown_right slds-nubbin_top-right" style="right:-1rem">
        <ul class="slds-dropdown__list" role="menu">
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="0">
              <span title="New Event">
                <span class="slds-icon_container slds-icon-standard-event slds-m-right_x-small" title="Description of icon when needed">
                  <svg class="slds-icon slds-icon_small" aria-hidden="true">
                    <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
                  </svg>
                  <span class="slds-assistive-text">Description of icon when needed</span>
                </span>New Event</span>
            </a>
          </li>
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="0">
              <span title="New Note">
                <span class="slds-icon_container slds-icon-standard-note slds-m-right_x-small" title="Description of icon when needed">
                  <svg class="slds-icon slds-icon_small" aria-hidden="true">
                    <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#note"></use>
                  </svg>
                  <span class="slds-assistive-text">Description of icon when needed</span>
                </span>New Note</span>
            </a>
          </li>
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="0">
              <span title="New Email">
                <span class="slds-icon_container slds-icon-standard-email slds-m-right_x-small" title="Description of icon when needed">
                  <svg class="slds-icon slds-icon_small" aria-hidden="true">
                    <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#email"></use>
                  </svg>
                  <span class="slds-assistive-text">Description of icon when needed</span>
                </span>New Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
        </svg>
        <span class="slds-assistive-text">Help and Training</span>
      </button>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
        </svg>
        <span class="slds-assistive-text">Setup</span>
      </button>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
        </svg>
        <span class="slds-assistive-text">no new notifications</span>
      </button>
      <span aria-hidden="true" class="slds-notification-badge"></span>
    </div>
  </li>
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
        <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
          <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
        </span>
      </button>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="Help"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
        </svg>
        <span class="slds-assistive-text">Help and Training</span>
      </button>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="Setup"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
        </svg>
        <span class="slds-assistive-text">Setup</span>
      </button>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="No notifications"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
        </svg>
        <span class="slds-assistive-text">no new notifications</span>
      </button>
      <span aria-hidden="true" class="slds-notification-badge"></span>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="Accessibility Note"
<ul class="slds-global-actions">
  <li class="slds-global-actions__item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action slds-incoming-notification" title="1 new notifications" aria-live="assertive"
        aria-atomic="true">
        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
        </svg>
        <span class="slds-assistive-text">1 new notifications</span>
      </button>
      <span aria-hidden="true" class="slds-notification-badge slds-incoming-notification slds-show-notification">1</span>
    </div>
  </li>
</ul>
:::
