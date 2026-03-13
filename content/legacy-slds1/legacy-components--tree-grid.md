---
title: Tree Grid
---

SLDS 1 blueprint examples for **Tree Grid**.

::: legacy-component-example title="Base"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree" role="treegrid" aria-label="Example default tree grid">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-182" value="checkbox-unique-id-182" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-182" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-131" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Employees">Employees</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Employees column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Employees column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Employees column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-132" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Phone Number">Phone Number</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Phone Number column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Phone Number column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Phone Number column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-133" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Owner">Account Owner</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Owner column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Owner column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Owner column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-134" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Billing City">Billing City</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Billing City column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Billing City column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Billing City column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-135" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0161" value="checkbox-0161" aria-labelledby="check-button-label-0161 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0161" id="check-button-label-0161">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 161</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,100">3,100</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Phoenix, AZ">Phoenix, AZ</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0162" value="checkbox-0162" aria-labelledby="check-button-label-0162 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0162" id="check-button-label-0162">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 162</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="10,000">10,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0163" value="checkbox-0163" aria-labelledby="check-button-label-0163 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0163" id="check-button-label-0163">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 163</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="6,000">6,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0164" value="checkbox-0164" aria-labelledby="check-button-label-0164 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0164" id="check-button-label-0164">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 164</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,234">1,234</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Paris, France">Paris, France</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Expanded"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree" role="treegrid" aria-label="Example expanded tree grid">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-193" value="checkbox-unique-id-193" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-193" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-141" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Employees">Employees</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Employees column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Employees column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Employees column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-142" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Phone Number">Phone Number</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Phone Number column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Phone Number column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Phone Number column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-143" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Owner">Account Owner</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Owner column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Owner column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Owner column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-144" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Billing City">Billing City</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Billing City column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Billing City column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Billing City column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-145" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0170" value="checkbox-0170" aria-labelledby="check-button-label-0170 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0170" id="check-button-label-0170">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 170</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,100">3,100</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Phoenix, AZ">Phoenix, AZ</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="1" aria-posinset="2" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0171" value="checkbox-0171" aria-labelledby="check-button-label-0171 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0171" id="check-button-label-0171">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 171</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="10,000">10,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-level="2" aria-posinset="1" aria-selected="false" aria-setsize="1" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0172" value="checkbox-0172" aria-labelledby="check-button-label-0172 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0172" id="check-button-label-0172">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 172</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation (Oakland)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation (Oakland)</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation (Oakland)">
          <a href="#" tabindex="-1">Acme Corporation (Oakland)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="745">745</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation (Oakland)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation (Oakland)</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0173" value="checkbox-0173" aria-labelledby="check-button-label-0173 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0173" id="check-button-label-0173">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 173</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="6,000">6,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0174" value="checkbox-0174" aria-labelledby="check-button-label-0174 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0174" id="check-button-label-0174">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 174</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,234">1,234</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Paris, France">Paris, France</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Selected row"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree" role="treegrid" aria-label="Example tree grid with selected row">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-205" value="checkbox-unique-id-205" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-205" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-151" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Employees">Employees</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Employees column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Employees column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Employees column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-152" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Phone Number">Phone Number</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Phone Number column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Phone Number column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Phone Number column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-153" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Owner">Account Owner</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Owner column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Owner column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Owner column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-154" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Billing City">Billing City</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Billing City column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Billing City column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Billing City column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-155" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0180" value="checkbox-0180" aria-labelledby="check-button-label-0180 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0180" id="check-button-label-0180">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 180</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,100">3,100</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Phoenix, AZ">Phoenix, AZ</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="1" aria-posinset="2" aria-selected="true" aria-setsize="4" class="slds-hint-parent slds-is-selected">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0181" value="checkbox-0181" aria-labelledby="check-button-label-0181 column-group-header" checked="" />
          <label class="slds-checkbox__label" for="checkbox-0181" id="check-button-label-0181">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 181</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="10,000">10,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-level="2" aria-posinset="1" aria-selected="false" aria-setsize="1" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0182" value="checkbox-0182" aria-labelledby="check-button-label-0182 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0182" id="check-button-label-0182">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 182</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation (Oakland)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation (Oakland)</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation (Oakland)">
          <a href="#" tabindex="-1">Acme Corporation (Oakland)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="745">745</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation (Oakland)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation (Oakland)</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0183" value="checkbox-0183" aria-labelledby="check-button-label-0183 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0183" id="check-button-label-0183">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 183</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="6,000">6,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0184" value="checkbox-0184" aria-labelledby="check-button-label-0184 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0184" id="check-button-label-0184">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 184</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,234">1,234</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Paris, France">Paris, France</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Deeply nested branches"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree" role="treegrid" aria-label="Example tree grid with deep nesting">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-226" value="checkbox-unique-id-226" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-226" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-161" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Employees">Employees</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Employees column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Employees column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Employees column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-162" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Phone Number">Phone Number</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Phone Number column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Phone Number column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Phone Number column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-163" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Owner">Account Owner</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Owner column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Owner column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Owner column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-164" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Billing City">Billing City</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Billing City column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Billing City column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Billing City column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-165" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0199" value="checkbox-0199" aria-labelledby="check-button-label-0199 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0199" id="check-button-label-0199">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 199</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,100">3,100</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Phoenix, AZ">Phoenix, AZ</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="1" aria-posinset="2" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0200" value="checkbox-0200" aria-labelledby="check-button-label-0200 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0200" id="check-button-label-0200">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 200</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="10,000">10,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="2" aria-posinset="1" aria-selected="false" aria-setsize="2" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0201" value="checkbox-0201" aria-labelledby="check-button-label-0201 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0201" id="check-button-label-0201">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 201</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Acme Corporation (Bay Area)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Acme Corporation (Bay Area)</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation (Bay Area)">
          <a href="#" tabindex="-1">Acme Corporation (Bay Area)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,000">3,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation (Bay Area)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation (Bay Area)</span>
        </button>
      </td>
    </tr>
    <tr aria-level="3" aria-posinset="1" aria-selected="false" aria-setsize="2" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0202" value="checkbox-0202" aria-labelledby="check-button-label-0202 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0202" id="check-button-label-0202">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 202</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation (Oakland)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation (Oakland)</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation (Oakland)">
          <a href="#" tabindex="-1">Acme Corporation (Oakland)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="745">745</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation (Oakland)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation (Oakland)</span>
        </button>
      </td>
    </tr>
    <tr aria-level="3" aria-posinset="2" aria-selected="false" aria-setsize="2" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0203" value="checkbox-0203" aria-labelledby="check-button-label-0203 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0203" id="check-button-label-0203">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 203</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation (San Francisco)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation (San Francisco)</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation (San Francisco)">
          <a href="#" tabindex="-1">Acme Corporation (San Francisco)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="578">578</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Los Angeles, CA">Los Angeles, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation (San Francisco)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation (San Francisco)</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="2" aria-posinset="2" aria-selected="false" aria-setsize="2" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0204" value="checkbox-0204" aria-labelledby="check-button-label-0204 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0204" id="check-button-label-0204">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 204</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Acme Corporation (East)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Acme Corporation (East)</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation (East)">
          <a href="#" tabindex="-1">Acme Corporation (East)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="430">430</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation (East)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation (East)</span>
        </button>
      </td>
    </tr>
    <tr aria-level="3" aria-posinset="1" aria-selected="false" aria-setsize="2" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0205" value="checkbox-0205" aria-labelledby="check-button-label-0205 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0205" id="check-button-label-0205">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 205</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation (NY)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation (NY)</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation (NY)">
          <a href="#" tabindex="-1">Acme Corporation (NY)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,210">1,210</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation (NY)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation (NY)</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="3" aria-posinset="2" aria-selected="false" aria-setsize="2" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0206" value="checkbox-0206" aria-labelledby="check-button-label-0206 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0206" id="check-button-label-0206">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 206</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Acme Corporation (VA)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Acme Corporation (VA)</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation (VA)">
          <a href="#" tabindex="-1">Acme Corporation (VA)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="410">410</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation (VA)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation (VA)</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="4" aria-posinset="1" aria-selected="false" aria-setsize="1" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0207" value="checkbox-0207" aria-labelledby="check-button-label-0207 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0207" id="check-button-label-0207">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 207</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Allied Technologies">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Allied Technologies</span>
        </button>
        <div class="slds-truncate" title="Allied Technologies">
          <a href="#" tabindex="-1">Allied Technologies</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="390">390</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Los Angeles, CA">Los Angeles, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Allied Technologies">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Allied Technologies</span>
        </button>
      </td>
    </tr>
    <tr aria-level="5" aria-posinset="1" aria-selected="false" aria-setsize="1" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0208" value="checkbox-0208" aria-labelledby="check-button-label-0208 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0208" id="check-button-label-0208">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 208</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Allied Technologies (UV)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Allied Technologies (UV)</span>
        </button>
        <div class="slds-truncate" title="Allied Technologies (UV)">
          <a href="#" tabindex="-1">Allied Technologies (UV)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="270">270</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Allied Technologies (UV)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Allied Technologies (UV)</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0209" value="checkbox-0209" aria-labelledby="check-button-label-0209 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0209" id="check-button-label-0209">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 209</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="6,000">6,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="2" aria-posinset="1" aria-selected="false" aria-setsize="1" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0210" value="checkbox-0210" aria-labelledby="check-button-label-0210 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0210" id="check-button-label-0210">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 210</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises (UCA)">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises (UCA)</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises (UCA)">
          <a href="#" tabindex="-1">Rohde Enterprises (UCA)</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="2,540">2,540</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises (UCA)">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises (UCA)</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="true" aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0211" value="checkbox-0211" aria-labelledby="check-button-label-0211 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0211" id="check-button-label-0211">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 211</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Collapse Tech Labs">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Tech Labs</span>
        </button>
        <div class="slds-truncate" title="Tech Labs">
          <a href="#" tabindex="-1">Tech Labs</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,856">1,856</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Tech Labs">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Tech Labs</span>
        </button>
      </td>
    </tr>
    <tr aria-level="2" aria-posinset="1" aria-selected="false" aria-setsize="1" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0212" value="checkbox-0212" aria-labelledby="check-button-label-0212 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0212" id="check-button-label-0212">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 212</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Opportunity Resources Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Opportunity Resources Inc</span>
        </button>
        <div class="slds-truncate" title="Opportunity Resources Inc">
          <a href="#" tabindex="-1">Opportunity Resources Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,934">1,934</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Los Angeles, CA">Los Angeles, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Opportunity Resources Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Opportunity Resources Inc</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Headless"
<table aria-multiselectable="true" class="slds-table slds-table_header-hidden slds-table_bordered slds-table_edit slds-tree slds-table_tree" role="treegrid" aria-label="Example headless tree grid">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" id="column-group-header" title="Choose a row to select">Choose a row to select</div>
      </th>
      <th class="" scope="col">
        <div class="slds-th__action">
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
          </div>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0217" value="checkbox-0217" aria-labelledby="check-button-label-0217 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0217" id="check-button-label-0217">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 217</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0218" value="checkbox-0218" aria-labelledby="check-button-label-0218 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0218" id="check-button-label-0218">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 218</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0219" value="checkbox-0219" aria-labelledby="check-button-label-0219 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0219" id="check-button-label-0219">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 219</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0220" value="checkbox-0220" aria-labelledby="check-button-label-0220 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0220" id="check-button-label-0220">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 220</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Headless with selected row"
<table aria-multiselectable="true" class="slds-table slds-table_header-hidden slds-table_bordered slds-table_edit slds-tree slds-table_tree" role="treegrid" aria-label="Example headless tree grid with selected row">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" id="column-group-header" title="Choose a row to select">Choose a row to select</div>
      </th>
      <th class="" scope="col">
        <div class="slds-th__action">
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
          </div>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0225" value="checkbox-0225" aria-labelledby="check-button-label-0225 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0225" id="check-button-label-0225">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 225</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="true" aria-setsize="4" class="slds-hint-parent slds-is-selected">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0226" value="checkbox-0226" aria-labelledby="check-button-label-0226 column-group-header" checked="" />
          <label class="slds-checkbox__label" for="checkbox-0226" id="check-button-label-0226">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 226</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0227" value="checkbox-0227" aria-labelledby="check-button-label-0227 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0227" id="check-button-label-0227">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 227</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0228" value="checkbox-0228" aria-labelledby="check-button-label-0228 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0228" id="check-button-label-0228">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 228</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Headless with no borders"
<table aria-multiselectable="true" class="slds-table slds-table_header-hidden slds-table_edit slds-tree slds-table_tree" role="treegrid" aria-label="Example headless border-less tree grid">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" id="column-group-header" title="Choose a row to select">Choose a row to select</div>
      </th>
      <th class="" scope="col">
        <div class="slds-th__action">
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
          </div>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0233" value="checkbox-0233" aria-labelledby="check-button-label-0233 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0233" id="check-button-label-0233">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 233</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0234" value="checkbox-0234" aria-labelledby="check-button-label-0234 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0234" id="check-button-label-0234">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 234</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0235" value="checkbox-0235" aria-labelledby="check-button-label-0235 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0235" id="check-button-label-0235">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 235</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0236" value="checkbox-0236" aria-labelledby="check-button-label-0236 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0236" id="check-button-label-0236">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 236</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Headless with no borders and a selected row"
<table aria-multiselectable="true" class="slds-table slds-table_header-hidden slds-table_edit slds-tree slds-table_tree" role="treegrid" aria-label="Example headless border-less tree grid with selected row">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" id="column-group-header" title="Choose a row to select">Choose a row to select</div>
      </th>
      <th class="" scope="col">
        <div class="slds-th__action">
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
          </div>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0241" value="checkbox-0241" aria-labelledby="check-button-label-0241 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0241" id="check-button-label-0241">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 241</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="true" aria-setsize="4" class="slds-hint-parent slds-is-selected">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0242" value="checkbox-0242" aria-labelledby="check-button-label-0242 column-group-header" checked="" />
          <label class="slds-checkbox__label" for="checkbox-0242" id="check-button-label-0242">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 242</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0243" value="checkbox-0243" aria-labelledby="check-button-label-0243 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0243" id="check-button-label-0243">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 243</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0244" value="checkbox-0244" aria-labelledby="check-button-label-0244 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0244" id="check-button-label-0244">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 244</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single select"
<table class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree" role="treegrid" aria-label="Example single select tree grid">
  <thead>
    <tr class="slds-line-height_reset">
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-171" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Employees">Employees</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Employees column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Employees column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Employees column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-172" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Phone Number">Phone Number</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Phone Number column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Phone Number column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Phone Number column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-173" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Owner">Account Owner</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Owner column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Owner column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Owner column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-174" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Billing City">Billing City</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Billing City column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Billing City column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Billing City column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-175" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,100">3,100</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Phoenix, AZ">Phoenix, AZ</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="10,000">10,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="6,000">6,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,234">1,234</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Paris, France">Paris, France</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single select with a selected row"
<table class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree" role="treegrid" aria-label="Example single select tree grid with selected row">
  <thead>
    <tr class="slds-line-height_reset">
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-181" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Employees">Employees</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Employees column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Employees column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Employees column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-182" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Phone Number">Phone Number</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Phone Number column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Phone Number column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Phone Number column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-183" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Owner">Account Owner</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Owner column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Owner column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Owner column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-184" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Billing City">Billing City</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Billing City column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Billing City column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Billing City column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-185" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,100">3,100</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Phoenix, AZ">Phoenix, AZ</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="true" aria-setsize="4" class="slds-hint-parent slds-is-selected">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="10,000">10,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="6,000">6,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,234">1,234</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Paris, France">Paris, France</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single select headless"
<table class="slds-table slds-table_header-hidden slds-table_bordered slds-table_edit slds-tree slds-table_tree" role="treegrid" aria-label="Example headless single select tree grid">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-th__action">
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
          </div>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single select headless with selected row"
<table class="slds-table slds-table_header-hidden slds-table_bordered slds-table_edit slds-tree slds-table_tree" role="treegrid" aria-label="Example single select tree grid with selected row">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-th__action">
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
          </div>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="true" aria-setsize="4" class="slds-hint-parent slds-is-selected">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single select headless with no borders"
<table class="slds-table slds-table_header-hidden slds-table_edit slds-tree slds-table_tree" role="treegrid" aria-label="Example headless border-less single select tree grid">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-th__action">
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
          </div>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single select headless with no borders and a selected row"
<table class="slds-table slds-table_header-hidden slds-table_edit slds-tree slds-table_tree" role="treegrid" aria-label="Example headless border-less single select tree grid with selected row">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-th__action">
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
          </div>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="true" aria-setsize="4" class="slds-hint-parent slds-is-selected">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-setsize="4" class="slds-hint-parent">
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Item Disabled"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree" role="treegrid" aria-label="Example tree grid with disabled item">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-278" value="checkbox-unique-id-278" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-278" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-191" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Employees">Employees</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Employees column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Employees column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Employees column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-192" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Phone Number">Phone Number</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Phone Number column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Phone Number column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Phone Number column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-193" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Owner">Account Owner</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Owner column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Owner column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Owner column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-194" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Billing City">Billing City</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Billing City column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Billing City column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Billing City column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-195" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-level="1" aria-posinset="1" aria-selected="false" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0249" value="checkbox-0249" aria-labelledby="check-button-label-0249 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0249" id="check-button-label-0249">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 249</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,100">3,100</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Phoenix, AZ">Phoenix, AZ</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0250" value="checkbox-0250" aria-labelledby="check-button-label-0250 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0250" id="check-button-label-0250">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 250</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="10,000">10,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0251" value="checkbox-0251" aria-labelledby="check-button-label-0251 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0251" id="check-button-label-0251">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 251</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="6,000">6,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
    <tr aria-level="1" aria-posinset="4" aria-selected="false" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0252" value="checkbox-0252" aria-labelledby="check-button-label-0252 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0252" id="check-button-label-0252">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 252</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabindex="-1" title="Expand Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Cheese Corp</span>
        </button>
        <div class="slds-truncate" title="Cheese Corp">
          <a href="#" tabindex="-1">Cheese Corp</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="1,234">1,234</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Paris, France">Paris, France</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Cheese Corp">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Cheese Corp</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Item Hovered"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree" role="treegrid" aria-label="Example tree grid with hovered item">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-287" value="checkbox-unique-id-287" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-287" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-201" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Employees">Employees</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Employees column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Employees column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Employees column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-202" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Phone Number">Phone Number</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Phone Number column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Phone Number column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Phone Number column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-203" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Owner">Account Owner</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Owner column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Owner column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Owner column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-204" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Billing City">Billing City</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Billing City column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Billing City column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Billing City column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-205" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-expanded="false" aria-level="1" aria-posinset="1" aria-setsize="4" class="slds-hint-parent" tabindex="0">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0256" value="checkbox-0256" aria-labelledby="check-button-label-0256 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0256" id="check-button-label-0256">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 256</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item slds-is-hovered" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rewis Inc</span>
        </button>
        <div class="slds-truncate" title="Rewis Inc">
          <a href="#" tabindex="-1">Rewis Inc</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="3,100">3,100</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="Jane Doe">
          <a href="#" tabindex="-1">Jane Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="Phoenix, AZ">Phoenix, AZ</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rewis Inc">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rewis Inc</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="2" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0257" value="checkbox-0257" aria-labelledby="check-button-label-0257 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0257" id="check-button-label-0257">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 257</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Acme Corporation</span>
        </button>
        <div class="slds-truncate" title="Acme Corporation">
          <a href="#" tabindex="-1">Acme Corporation</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="10,000">10,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="San Francisco, CA">San Francisco, CA</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme Corporation">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme Corporation</span>
        </button>
      </td>
    </tr>
    <tr aria-expanded="false" aria-level="1" aria-posinset="3" aria-setsize="4" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell" style="width:3.25rem">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-0258" value="checkbox-0258" aria-labelledby="check-button-label-0258 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-0258" id="check-button-label-0258">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 258</span>
          </label>
        </div>
      </td>
      <th class="slds-tree__item" data-label="Account Name" scope="row">
        <button class="slds-button slds-button_icon slds-button_icon-x-small slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
          </svg>
          <span class="slds-assistive-text">Expand Rohde Enterprises</span>
        </button>
        <div class="slds-truncate" title="Rohde Enterprises">
          <a href="#" tabindex="-1">Rohde Enterprises</a>
        </div>
      </th>
      <td data-label="Employees" role="gridcell">
        <div class="slds-truncate" title="6,000">6,000</div>
      </td>
      <td data-label="Phone Number" role="gridcell">
        <div class="slds-truncate" title="837-555-1212">837-555-1212</div>
      </td>
      <td data-label="Account Owner" role="gridcell">
        <div class="slds-truncate" title="John Doe">
          <a href="#" tabindex="-1">John Doe</a>
        </div>
      </td>
      <td data-label="Billing City" role="gridcell">
        <div class="slds-truncate" title="New York, NY">New York, NY</div>
      </td>
      <td role="gridcell" style="width:3.25rem">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Rohde Enterprises">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Rohde Enterprises</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::
