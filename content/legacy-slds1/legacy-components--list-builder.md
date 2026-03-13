---
title: List Builder
---

SLDS 1 blueprint examples for **List Builder**.

::: legacy-component-example title="Base"
<div class="demo-only demo-only_viewport" style="height:640px">
  <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="id-of-modalheader-h1" class="slds-modal slds-fade-in-open slds-modal_large slds-list-builder">
    <div class="slds-modal__container">
      <button class="slds-button slds-button_icon slds-modal__close">
        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div class="slds-modal__header">
        <h1 id="id-of-modalheader-h1" class="slds-text-heading_medium">Add products</h1>
        <p class="slds-m-top_x-small">Pricebook: Salesforce Products</p>
      </div>
      <div class="slds-modal__content slds-grid slds-grow" id="modal-content-id-1">
        <div class="slds-grid slds-grid_vertical">
          <div class="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
            <div class="slds-form-element">
              <label class="slds-form-element__label slds-assistive-text" for="example-unique-id-180" id="combobox-label-id-21">Search</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <input type="text" class="slds-input slds-combobox__input" id="example-unique-id-180" aria-autocomplete="list" aria-controls="example-unique-id-181" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce"
                      />
                      <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="example-unique-id-181" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option81" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option A">Option A</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option82" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option B">Option B</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option83" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option C">Option C</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option84" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option D">Option D</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slds-text-title slds-m-top_x-small" aria-live="polite">0 Item(s) Selected</div>
          </div>
          <div class="slds-scrollable slds-grow">
            <div class="slds-scrollable_none">
              <table aria-multiselectable="true" class="slds-table slds-no-row-hover slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example product list">
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col" style="width:3.75rem"></th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Name">Name</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-69" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Code">Product Code</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Code column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-70" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="List Price">List Price</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="List Price column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-71" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Family">Product Family</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Family column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-72" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" tabindex="0">
                      <label class="slds-checkbox-button" for="example-unique-id-182">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-182" value="example-unique-id-182" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-183">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-183" value="example-unique-id-183" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-184">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-184" value="example-unique-id-184" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-185">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-185" value="example-unique-id-185" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-186">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-186" value="example-unique-id-186" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-187">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-187" value="example-unique-id-187" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-188">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-188" value="example-unique-id-188" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-189">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-189" value="example-unique-id-189" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-modal__footer">
        <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
        <button class="slds-button slds-button_brand">Next</button>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
</div>
:::

::: legacy-component-example title="Items Selected"
<div class="demo-only demo-only_viewport" style="height:640px">
  <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="id-of-modalheader-h1" class="slds-modal slds-fade-in-open slds-modal_large">
    <div class="slds-modal__container">
      <button class="slds-button slds-button_icon slds-modal__close">
        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div class="slds-modal__header">
        <h1 id="id-of-modalheader-h1" class="slds-text-heading_medium">Add products</h1>
        <p class="slds-m-top_x-small">Pricebook: Salesforce Products</p>
      </div>
      <div class="slds-modal__content slds-grid slds-nowrap" id="modal-content-id-1">
        <div class="slds-col slds-grid slds-grid_vertical slds-nowrap">
          <div class="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
            <div class="slds-form-element">
              <label class="slds-form-element__label slds-assistive-text" for="example-unique-id-200" id="combobox-label-id-23">Search</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <input type="text" class="slds-input slds-combobox__input" id="example-unique-id-200" aria-autocomplete="list" aria-controls="example-unique-id-201" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce"
                      />
                      <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="example-unique-id-201" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option89" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option A">Option A</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option90" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option B">Option B</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option91" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option C">Option C</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option92" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option D">Option D</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slds-pill_container slds-pill_container_bare">
              <ul class="slds-listbox slds-listbox_horizontal" aria-label="Selected Options:">
                <li class="slds-listbox-item">
                  <span class="slds-pill">
                    <span class="slds-pill__label" title="Analytics">Analytics</span>
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
            <div class="slds-text-title slds-m-top_x-small" aria-live="polite">1 Item(s) Selected</div>
          </div>
          <div class="slds-scrollable slds-grow">
            <div class="slds-scrollable_none">
              <table aria-multiselectable="true" class="slds-table slds-no-row-hover slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example product list">
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col" style="width:3.75rem"></th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Name">Name</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-77" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Code">Product Code</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Code column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-78" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="List Price">List Price</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="List Price column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-79" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Family">Product Family</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Family column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-80" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
                    <td class="slds-text-align_right" role="gridcell" tabindex="0">
                      <label class="slds-checkbox-button slds-checkbox-button_is-checked" for="example-unique-id-202">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-202" value="example-unique-id-202" tabindex="-1" checked="" />
                        <span class="slds-icon_container slds-icon-utility-check slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-203">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-203" value="example-unique-id-203" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-204">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-204" value="example-unique-id-204" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-205">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-205" value="example-unique-id-205" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-206">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-206" value="example-unique-id-206" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-207">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-207" value="example-unique-id-207" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-208">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-208" value="example-unique-id-208" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-209">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-209" value="example-unique-id-209" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-modal__footer">
        <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
        <button class="slds-button slds-button_brand">Next</button>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
</div>
:::

::: legacy-component-example title="Items Disabled"
<div class="demo-only demo-only_viewport" style="height:640px">
  <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="id-of-modalheader-h1" class="slds-modal slds-fade-in-open slds-modal_large">
    <div class="slds-modal__container">
      <button class="slds-button slds-button_icon slds-modal__close">
        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div class="slds-modal__header">
        <h1 id="id-of-modalheader-h1" class="slds-text-heading_medium">Add products</h1>
        <p class="slds-m-top_x-small">Pricebook: Salesforce Products</p>
      </div>
      <div class="slds-modal__content slds-grid slds-nowrap" id="modal-content-id-1">
        <div class="slds-col slds-grid slds-grid_vertical slds-nowrap">
          <div class="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
            <div class="slds-form-element">
              <label class="slds-form-element__label slds-assistive-text" for="example-unique-id-220" id="combobox-label-id-25">Search</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <input type="text" class="slds-input slds-combobox__input" id="example-unique-id-220" aria-autocomplete="list" aria-controls="example-unique-id-221" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce"
                      />
                      <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="example-unique-id-221" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option97" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option A">Option A</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option98" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option B">Option B</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option99" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option C">Option C</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option100" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option D">Option D</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slds-text-title slds-m-top_x-small" aria-live="polite">0 Item(s) Selected</div>
          </div>
          <div class="slds-scrollable slds-grow">
            <div class="slds-scrollable_none">
              <table aria-multiselectable="true" class="slds-table slds-no-row-hover slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example product list">
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col" style="width:3.75rem"></th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Name">Name</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-85" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Code">Product Code</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Code column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-86" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="List Price">List Price</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="List Price column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-87" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Family">Product Family</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Family column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-88" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" tabindex="0">
                      <label class="slds-checkbox-button slds-checkbox-button_is-disabled" for="example-unique-id-222">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-222" value="example-unique-id-222" disabled="" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-223">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-223" value="example-unique-id-223" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button slds-checkbox-button_is-disabled" for="example-unique-id-224">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-224" value="example-unique-id-224" disabled="" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-225">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-225" value="example-unique-id-225" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button slds-checkbox-button_is-disabled" for="example-unique-id-226">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-226" value="example-unique-id-226" disabled="" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-227">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-227" value="example-unique-id-227" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button slds-checkbox-button_is-disabled" for="example-unique-id-228">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-228" value="example-unique-id-228" disabled="" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-229">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-229" value="example-unique-id-229" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-modal__footer">
        <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
        <button class="slds-button slds-button_brand">Next</button>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
</div>
:::

::: legacy-component-example title="Items Default Selected"
<div class="demo-only demo-only_viewport" style="height:640px">
  <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="id-of-modalheader-h1" class="slds-modal slds-fade-in-open slds-modal_large">
    <div class="slds-modal__container">
      <button class="slds-button slds-button_icon slds-modal__close">
        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div class="slds-modal__header">
        <h1 id="id-of-modalheader-h1" class="slds-text-heading_medium">Add products</h1>
        <p class="slds-m-top_x-small">Pricebook: Salesforce Products</p>
      </div>
      <div class="slds-modal__content slds-grid slds-nowrap" id="modal-content-id-1">
        <div class="slds-col slds-grid slds-grid_vertical slds-nowrap">
          <div class="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
            <div class="slds-form-element">
              <label class="slds-form-element__label slds-assistive-text" for="example-unique-id-240" id="combobox-label-id-27">Search</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <input type="text" class="slds-input slds-combobox__input" id="example-unique-id-240" aria-autocomplete="list" aria-controls="example-unique-id-241" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce"
                      />
                      <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="example-unique-id-241" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option105" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option A">Option A</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option106" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option B">Option B</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option107" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option C">Option C</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option108" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option D">Option D</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slds-text-title slds-m-top_x-small" aria-live="polite">0 Item(s) Selected</div>
          </div>
          <div class="slds-scrollable slds-grow">
            <div class="slds-scrollable_none">
              <table aria-multiselectable="true" class="slds-table slds-no-row-hover slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example product list">
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col" style="width:3.75rem"></th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Name">Name</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-93" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Code">Product Code</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Code column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-94" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="List Price">List Price</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="List Price column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-95" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Family">Product Family</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Family column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-96" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" tabindex="0">
                      <label class="slds-checkbox-button" for="example-unique-id-242">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-242" value="example-unique-id-242" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button slds-checkbox-button_is-checked slds-checkbox-button_is-disabled" for="example-unique-id-243">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-243" value="example-unique-id-243" disabled="" tabindex="-1" checked="" />
                        <span class="slds-icon_container slds-icon-utility-check slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-244">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-244" value="example-unique-id-244" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button slds-checkbox-button_is-checked slds-checkbox-button_is-disabled" for="example-unique-id-245">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-245" value="example-unique-id-245" disabled="" tabindex="-1" checked="" />
                        <span class="slds-icon_container slds-icon-utility-check slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-246">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-246" value="example-unique-id-246" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button slds-checkbox-button_is-checked slds-checkbox-button_is-disabled" for="example-unique-id-247">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-247" value="example-unique-id-247" disabled="" tabindex="-1" checked="" />
                        <span class="slds-icon_container slds-icon-utility-check slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button" for="example-unique-id-248">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-248" value="example-unique-id-248" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                  <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
                    <td class="slds-text-align_right" role="gridcell">
                      <label class="slds-checkbox-button slds-checkbox-button_is-checked slds-checkbox-button_is-disabled" for="example-unique-id-249">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-249" value="example-unique-id-249" disabled="" tabindex="-1" checked="" />
                        <span class="slds-icon_container slds-icon-utility-check slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-modal__footer">
        <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
        <button class="slds-button slds-button_brand">Next</button>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
</div>
:::

::: legacy-component-example title="Two Column with Hidden Header"
<div class="demo-only demo-only_viewport" style="height:640px">
  <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="id-of-modalheader-h1" class="slds-modal slds-fade-in-open slds-modal_large">
    <div class="slds-modal__container">
      <button class="slds-button slds-button_icon slds-modal__close">
        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div class="slds-modal__header">
        <h1 id="id-of-modalheader-h1" class="slds-text-heading_medium">Add products</h1>
        <p class="slds-m-top_x-small">Pricebook: Salesforce Products</p>
      </div>
      <div class="slds-modal__content slds-grid slds-grow" id="modal-content-id-1">
        <div class="slds-grid slds-grid_vertical">
          <div class="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
            <div class="slds-form-element">
              <label class="slds-form-element__label slds-assistive-text" for="example-unique-id-253" id="combobox-label-id-29">Search</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <input type="text" class="slds-input slds-combobox__input" id="example-unique-id-253" aria-autocomplete="list" aria-controls="example-unique-id-254" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce"
                      />
                      <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="example-unique-id-254" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option113" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option A">Option A</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option114" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option B">Option B</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option115" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option C">Option C</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option116" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option D">Option D</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slds-pill_container slds-pill_container_bare">
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
            <div class="slds-text-title slds-m-top_x-small" aria-live="polite">2 Item(s) Selected</div>
          </div>
          <div class="slds-scrollable slds-grow">
            <div class="slds-scrollable_none">
              <table aria-multiselectable="true" class="slds-table slds-no-row-hover slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example product list">
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col" style="width:3.75rem"></th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Name">Name</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Code">Product Code</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Code column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-102" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="List Price">List Price</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="List Price column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-103" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                    <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
                      <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
                        <span class="slds-assistive-text">Sort by: </span>
                        <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                          <span class="slds-truncate" title="Product Family">Product Family</span>
                          <span class="slds-icon_container slds-icon-utility-arrowdown">
                            <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div class="slds-resizable">
                        <input type="range" aria-label="Product Family column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-104" max="1000" min="20" tabindex="-1" />
                        <span class="slds-resizable__handle">
                          <span class="slds-resizable__divider"></span>
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" tabindex="0">
                      <label class="slds-checkbox-button" for="example-unique-id-255">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-255" value="example-unique-id-255" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <th scope="row">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </th>
                    <td role="gridcell">
                      <div class="slds-truncate" title="ANTLY">ANTLY</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="5000.00">5000.00</div>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics Product">Analytics Product</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-modal__footer">
        <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
        <button class="slds-button slds-button_brand">Next</button>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
</div>
:::

::: legacy-component-example title="Filtered Results"
<div class="demo-only demo-only_viewport" style="height:640px">
  <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="id-of-modalheader-h1" class="slds-modal slds-fade-in-open slds-modal_large">
    <div class="slds-modal__container">
      <button class="slds-button slds-button_icon slds-modal__close">
        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div class="slds-modal__header">
        <h1 id="id-of-modalheader-h1" class="slds-text-heading_medium">Add products</h1>
        <p class="slds-m-top_x-small">Pricebook: Salesforce Products</p>
      </div>
      <div class="slds-modal__content slds-grid slds-nowrap" id="modal-content-id-1">
        <div class="slds-col slds-grid slds-grid_vertical slds-nowrap">
          <div class="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
            <div class="slds-form-element">
              <label class="slds-form-element__label slds-assistive-text" for="example-unique-id-266" id="combobox-label-id-31">Search</label>
              <div class="slds-form-element__control">
                <div class="slds-combobox_container">
                  <div class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                      <input type="text" class="slds-input slds-combobox__input" id="example-unique-id-266" aria-autocomplete="list" aria-controls="example-unique-id-267" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search Salesforce"
                      />
                      <span class="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                        <svg class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                        </svg>
                      </span>
                    </div>
                    <div id="example-unique-id-267" class="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox" aria-label="{{Placeholder for Dropdown Items}}" tabindex="0" aria-busy="false">
                      <ul class="slds-listbox slds-listbox_vertical" role="presentation">
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option121" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option A">Option A</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option122" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option B">Option B</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option123" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option C">Option C</span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" class="slds-listbox__item">
                          <div id="option124" class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                            <span class="slds-media__body">
                              <span class="" title="Option D">Option D</span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slds-text-title slds-m-top_x-small" aria-live="polite">0 Item(s) Selected</div>
          </div>
          <div class="slds-scrollable slds-grow">
            <div class="slds-scrollable_none">
              <table aria-multiselectable="true" class="slds-table slds-table_header-hidden slds-no-row-hover slds-table_bordered" role="grid" aria-label="Example single column product list">
                <thead class="slds-assistive-text">
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col" style="width:3.75rem"></th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Product Name">Product Name</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" style="width:3.75rem" tabindex="0">
                      <label class="slds-checkbox-button" for="example-unique-id-268">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-268" value="example-unique-id-268" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" style="width:3.75rem" tabindex="-1">
                      <label class="slds-checkbox-button" for="example-unique-id-269">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-269" value="example-unique-id-269" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" style="width:3.75rem" tabindex="-1">
                      <label class="slds-checkbox-button" for="example-unique-id-270">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-270" value="example-unique-id-270" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" style="width:3.75rem" tabindex="-1">
                      <label class="slds-checkbox-button" for="example-unique-id-271">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-271" value="example-unique-id-271" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" style="width:3.75rem" tabindex="-1">
                      <label class="slds-checkbox-button" for="example-unique-id-272">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-272" value="example-unique-id-272" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" style="width:3.75rem" tabindex="-1">
                      <label class="slds-checkbox-button" for="example-unique-id-273">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-273" value="example-unique-id-273" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" style="width:3.75rem" tabindex="-1">
                      <label class="slds-checkbox-button" for="example-unique-id-274">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-274" value="example-unique-id-274" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </td>
                  </tr>
                  <tr aria-selected="false" class="slds-hint-parent">
                    <td class="slds-text-align_right" role="gridcell" style="width:3.75rem" tabindex="-1">
                      <label class="slds-checkbox-button" for="example-unique-id-275">
                        <input type="checkbox" class="slds-assistive-text" id="example-unique-id-275" value="example-unique-id-275" tabindex="-1" />
                        <span class="slds-icon_container slds-icon-utility-add slds-current-color" title="Description of icon when needed">
                          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                          </svg>
                          <span class="slds-assistive-text">Add product</span>
                        </span>
                      </label>
                    </td>
                    <td role="gridcell">
                      <div class="slds-truncate" title="Analytics">Analytics</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-modal__footer">
        <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
        <button class="slds-button slds-button_brand">Next</button>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
</div>
:::
