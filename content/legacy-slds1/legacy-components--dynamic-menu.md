---
title: Dynamic Menu
---

SLDS 1 blueprint examples for **Dynamic Menu**.

::: legacy-component-example title="Example 1"
<div class="demo-only" style="height:13rem;position:relative;margin-left:1rem">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Show Favorites">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
    </svg>
    <span class="slds-assistive-text">Show Favorites</span>
  </button>
  <section aria-describedby="dialog-body-id-15" aria-label="My Favourites" class="slds-popover slds-nubbin_top-left slds-dynamic-menu" role="dialog" style="position:absolute;left:-0.5rem;top:48px">
    <div class="slds-popover__body slds-p-horizontal_none" id="dialog-body-id-15">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-p-vertical_x-small slds-p-horizontal_small">
            <h3 class="slds-dynamic-menu__header slds-m-bottom_x-small" role="presentation">My Favorites</h3>
            <p>You can favorite any page!</p>
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
:::

::: legacy-component-example title="With 1 item"
<div class="demo-only" style="height:14rem;position:relative;margin-left:1rem">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Show Favorites">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
    </svg>
    <span class="slds-assistive-text">Show Favorites</span>
  </button>
  <section aria-describedby="dialog-body-id-17" aria-label="My Favourites" class="slds-popover slds-nubbin_top-left slds-dynamic-menu" role="dialog" style="position:absolute;left:-0.5rem;top:48px">
    <div class="slds-popover__body slds-p-horizontal_none" id="dialog-body-id-17">
      <div class="slds-media">
        <div class="slds-media__body">
          <div id="example-unique-id-17" class="slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="My Favorites">
              <li role="presentation" class="slds-listbox__item">
                <div id="option51" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                  <h3 class="slds-listbox__option-header" role="presentation">My Favorites</h3>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option52" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" tabindex="0">
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
:::

::: legacy-component-example title="With fewer than 10 items"
<div class="demo-only" style="height:28rem;position:relative;margin-left:1rem">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Show Favorites">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
    </svg>
    <span class="slds-assistive-text">Show Favorites</span>
  </button>
  <section aria-describedby="dialog-body-id-19" aria-label="My Favourites" class="slds-popover slds-nubbin_top-left slds-dynamic-menu" role="dialog" style="position:absolute;left:-0.5rem;top:48px">
    <div class="slds-popover__body slds-p-horizontal_none" id="dialog-body-id-19">
      <div class="slds-media">
        <div class="slds-media__body">
          <div id="example-unique-id-19" class="slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
            <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="My Favorites">
              <li role="presentation" class="slds-listbox__item">
                <div id="option59" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                  <h3 class="slds-listbox__option-header" role="presentation">My Favorites</h3>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div id="option60" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" tabindex="0">
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
                <div id="option61" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option62" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                <div id="option63" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
              <li role="presentation" class="slds-listbox__item">
                <div id="option64" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                  <span class="slds-media__figure slds-listbox__option-icon">
                    <span class="slds-icon_container slds-icon-standard-account">
                      <svg class="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                      </svg>
                    </span>
                  </span>
                  <span class="slds-media__body">
                    <span class="slds-listbox__option-text slds-listbox__option-text_entity">GenePoint</span>
                    <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Mountain View, CA</span>
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
:::

::: legacy-component-example title="With greater than 10 items"
<div class="demo-only" style="height:38rem;position:relative;margin-left:1rem">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Show Favorites">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
    </svg>
    <span class="slds-assistive-text">Show Favorites</span>
  </button>
  <section aria-describedby="dialog-body-id-21" aria-label="My Favourites" class="slds-popover slds-nubbin_top-left slds-dynamic-menu" role="dialog" style="position:absolute;left:-0.5rem;top:48px">
    <div class="slds-popover__body slds-p-horizontal_none" id="dialog-body-id-21">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-form-element">
            <label class="slds-form-element__label slds-assistive-text" for="example-unique-id-23" id="combobox-label-id-5">Search</label>
            <div class="slds-form-element__control">
              <div class="slds-combobox_container">
                <div class="slds-combobox slds-is-open">
                  <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right slds-m-around_small" role="none">
                    <input type="text" class="slds-input slds-combobox__input" id="example-unique-id-23" aria-autocomplete="list" aria-controls="example-unique-id-24" aria-expanded="true" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Favorites"
                    />
                    <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                      <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                      </svg>
                    </span>
                  </div>
                  <div id="example-unique-id-24" class="slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                    <ul class="slds-listbox slds-listbox_vertical" role="group" aria-label="My Favorites">
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option73" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                          <h3 class="slds-listbox__option-header" role="presentation">My Favorites</h3>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option74" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" tabindex="0">
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
                        <div id="option75" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                        <div id="option76" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                        <div id="option77" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
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
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option78" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-standard-account">
                              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">GenePoint</span>
                            <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Mountain View, CA</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option79" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-standard-account">
                              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">Grand Hotels &amp; Resorts Ltd</span>
                            <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Chicago, IL</span>
                          </span>
                        </div>
                      </li>
                      <li role="presentation" class="slds-listbox__item">
                        <div id="option80" class="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option">
                          <span class="slds-media__figure slds-listbox__option-icon">
                            <span class="slds-icon_container slds-icon-standard-account">
                              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                              </svg>
                            </span>
                          </span>
                          <span class="slds-media__body">
                            <span class="slds-listbox__option-text slds-listbox__option-text_entity">Pyramid Construction Inc.</span>
                            <span class="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • Paris</span>
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
:::
