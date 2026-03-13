---
title: Menus
---

SLDS 1 blueprint examples for **Menus**.

::: legacy-component-example title="Base"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Menu Item One">Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Two">Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Three">Menu Item Three</span>
        </a>
      </li>
      <li class="slds-has-divider_top-space" role="separator"></li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Four">Menu Item Four</span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Note"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left slds-dropdown_small">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li role="presentation">
        <ul role="group" aria-labelledby="menu-group-id-9">
          <li class="slds-dropdown__header" title="Menu Sub Heading" role="presentation" id="menu-group-id-9">
            <span>Menu Sub Heading</span>
          </li>
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="0">
              <span title="Menu Item One">Menu Item One</span>
            </a>
          </li>
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="-1">
              <span title="Menu Item Two">Menu Item Two</span>
            </a>
          </li>
        </ul>
      </li>
      <li role="presentation">
        <ul role="group" aria-labelledby="menu-group-id-10">
          <li class="slds-dropdown__header" title="Menu Sub Heading" role="presentation" id="menu-group-id-10">
            <span>Menu Sub Heading</span>
          </li>
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="-1">
              <span title="Menu Item One">Menu Item One</span>
            </a>
          </li>
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="-1">
              <span title="Menu Item Two">Menu Item Two</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Icon on the Left"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left slds-dropdown_small">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Menu Item One">
            <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
            </svg>Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Two">
            <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
            </svg>Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Three">
            <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
            </svg>Menu Item Three</span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Icon on the Right"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left slds-dropdown_small">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Table View">Table View</span>
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#table"></use>
          </svg>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Kanban Board">Kanban Board</span>
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#kanban"></use>
          </svg>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="List View">List View</span>
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#side_list"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Note"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left slds-dropdown_small">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item slds-is-selected" role="presentation">
        <a aria-checked="true" href="#" role="menuitemcheckbox" tabindex="0">
          <span title="Table View">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Table View</span>
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#table"></use>
          </svg>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Kanban Board">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Kanban Board</span>
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#kanban"></use>
          </svg>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="List View">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>List View</span>
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#side_list"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Revealing Icons for Selected Items"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left slds-dropdown_small">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item slds-is-selected" role="presentation">
        <a aria-checked="true" href="#" role="menuitemcheckbox" tabindex="0">
          <span title="Menu Item One">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Two">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Three">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Three</span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="With Status Notifications"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left">
    <ul class="slds-dropdown__list" role="menu">
      <li class="slds-dropdown__item" role="presentation">
        <a class="slds-has-success" href="#" role="menuitem" tabindex="-1">
          <span title="Success Item">
            <span class="slds-m-horizontal_xx-small">
              <span class="slds-icon_container slds-icon-utility-success" title="success">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                </svg>
                <span class="slds-assistive-text">success</span>
              </span>
            </span>
            <span>Success Item</span>
          </span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Overflow Tab Item">
            <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
            </svg>
            <span>Overflow Tab Item</span>
          </span>
        </a>
      </li>
    </ul>
    <ul class="slds-dropdown__list" role="menu">
      <li class="slds-dropdown__item" role="presentation">
        <a class="slds-has-warning" href="#" role="menuitem" tabindex="-1">
          <span title="Warning item">
            <span class="slds-m-horizontal_xx-small">
              <span class="slds-icon_container slds-icon-utility-warning slds-current-color" title="warning">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
                </svg>
                <span class="slds-assistive-text">warning</span>
              </span>
            </span>
            <span>Warning Item</span>
          </span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Overflow Tab Item">
            <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
            </svg>
            <span>Overflow Tab Item</span>
          </span>
        </a>
      </li>
    </ul>
    <ul class="slds-dropdown__list" role="menu">
      <li class="slds-dropdown__item" role="presentation">
        <a class="slds-has-error" href="#" role="menuitem" tabindex="-1">
          <span title="Error Item">
            <span class="slds-m-horizontal_xx-small">
              <span class="slds-icon_container slds-icon-utility-error" title="error">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
                </svg>
                <span class="slds-assistive-text">error</span>
              </span>
            </span>
            <span>Error Item</span>
          </span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Overflow Tab Item">
            <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
            </svg>
            <span>Overflow Tab Item</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="With Overflow Scrolling"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left slds-dropdown_length-5">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Menu Item One">Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Two">Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Three">Menu Item Three</span>
        </a>
      </li>
      <li class="slds-has-divider_top-space" role="separator"></li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Four">Menu Item Four</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Five">Menu Item Five</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Six">Menu Item Six</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Seven">Menu Item Seven</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Eight">Menu Item Eight</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Nine">Menu Item Nine</span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Scrolling for Menu Items with Icons"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left slds-dropdown_length-with-icon-5">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item slds-is-selected" role="presentation">
        <a aria-checked="true" href="#" role="menuitemcheckbox" tabindex="0">
          <span title="Menu Item One">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Two">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Three">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Three</span>
        </a>
      </li>
      <li class="slds-has-divider_top-space" role="separator"></li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Four">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Four</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Five">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Five</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Six">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Six</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Seven">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Seven</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Eight">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Eight</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a aria-checked="false" href="#" role="menuitemcheckbox" tabindex="-1">
          <span title="Menu Item Nine">
            <svg class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
            </svg>Menu Item Nine</span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Submenu to Right"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Menu Item One">Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Two">Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item slds-has-submenu" role="presentation">
        <a role="menuitem" href="#" aria-haspopup="true" aria-expanded="true" tabindex="-1">
          <span class="slds-truncate" title="Menu Item Three">Menu Item Three</span>
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
        </a>
        <div class="slds-dropdown slds-dropdown_submenu slds-dropdown_submenu-right">
          <ul class="slds-dropdown__list" role="menu" aria-label="Menu Item Three">
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="0">
                <span title="Submenu Item One">Submenu Item One</span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="-1">
                <span title="Submenu Item Two">Submenu Item Two</span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="-1">
                <span title="Submenu Item Three">Submenu Item Three</span>
              </a>
            </li>
            <li class="slds-has-divider_top-space" role="separator"></li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="-1">
                <span title="Submenu Item Four">Submenu Item Four</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Submenu to Left"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Menu Item One">Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Two">Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item slds-has-submenu" role="presentation">
        <a role="menuitem" href="#" aria-haspopup="true" aria-expanded="true" tabindex="-1">
          <span class="slds-truncate" title="Menu Item Three">Menu Item Three</span>
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
        </a>
        <div class="slds-dropdown slds-dropdown_submenu slds-dropdown_submenu-left">
          <ul class="slds-dropdown__list" role="menu" aria-label="Menu Item Three">
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="0">
                <span title="Submenu Item One">Submenu Item One</span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="-1">
                <span title="Submenu Item Two">Submenu Item Two</span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="-1">
                <span title="Submenu Item Three">Submenu Item Three</span>
              </a>
            </li>
            <li class="slds-has-divider_top-space" role="separator"></li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="#" role="menuitem" tabindex="-1">
                <span title="Submenu Item Four">Submenu Item Four</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Overflow Menu with Actions"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left slds-dropdown_actions">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Action One">Action One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Action Two">Action Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Action Three">Action Three</span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Positioned Right"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_right">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Menu Item One">Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Two">Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Three">Menu Item Three</span>
        </a>
      </li>
      <li class="slds-has-divider_top-space" role="separator"></li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Four">Menu Item Four</span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::

::: legacy-component-example title="Positioned Bottom"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_bottom">
    <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="0">
          <span title="Menu Item One">Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Two">Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Three">Menu Item Three</span>
        </a>
      </li>
      <li class="slds-has-divider_top-space" role="separator"></li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="#" role="menuitem" tabindex="-1">
          <span title="Menu Item Four">Menu Item Four</span>
        </a>
      </li>
    </ul>
  </div>
</div>
:::
