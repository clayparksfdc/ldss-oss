---
title: Panels
---

SLDS 1 blueprint examples for **Panels**.

::: legacy-component-example title="Base"
<div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open">
  <div class="slds-panel__header">
    <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
    <div class="slds-panel__header-actions">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div class="slds-panel__body">A panel body accepts any layout or component</div>
</div>
:::

::: legacy-component-example title="Header"
<div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open">
  <div class="slds-panel__header">
    <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
    <div class="slds-panel__header-actions">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div class="slds-panel__body"></div>
</div>
:::

::: legacy-component-example title="Centered Text"
<div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open">
  <div class="slds-panel__header slds-panel__header_align-center">
    <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
    <div class="slds-panel__header-actions">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div class="slds-panel__body"></div>
</div>
:::

::: legacy-component-example title="Accessibility Requirement"
<div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open">
  <div class="slds-panel__header">
    <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
    <div class="slds-panel__header-actions">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button class="slds-button slds-button_icon slds-button_icon-small slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Show More</span>
        </button>
        <div class="slds-dropdown slds-dropdown_right slds-dropdown_actions">
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
      <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div class="slds-panel__body">A panel body accepts any layout or component</div>
</div>
:::

::: legacy-component-example title="Left side"
<div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open">
  <div class="slds-panel__header">
    <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
    <div class="slds-panel__header-actions">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div class="slds-panel__body">A panel body accepts any layout or component</div>
</div>
:::

::: legacy-component-example title="Right side"
<div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-right slds-is-open">
  <div class="slds-panel__header">
    <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
    <div class="slds-panel__header-actions">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div class="slds-panel__body">A panel body accepts any layout or component</div>
</div>
:::

::: legacy-component-example title="Left side"
<div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open">
  <div class="slds-panel__header">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__back" title="Collapse Panel Header">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronleft"></use>
      </svg>
      <span class="slds-assistive-text">Collapse Panel Header</span>
    </button>
    <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
    <div class="slds-panel__header-actions">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div class="slds-panel__body">A panel body accepts any layout or component</div>
</div>
:::

::: legacy-component-example title="Right side"
<div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-right slds-is-open">
  <div class="slds-panel__header">
    <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__back" title="Collapse Panel Header">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronleft"></use>
      </svg>
      <span class="slds-assistive-text">Collapse Panel Header</span>
    </button>
    <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
    <div class="slds-panel__header-actions">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Collapse Panel Header</span>
      </button>
    </div>
  </div>
  <div class="slds-panel__body">A panel body accepts any layout or component</div>
</div>
:::

::: legacy-component-example title="Open as a drawer"
<header class="demo-only-element slds-theme_default slds-border_bottom slds-p-around_small" style="z-index:1">
  <button class="slds-button slds-button_icon slds-is-selected slds-button_icon-border-filled slds-button_icon-border" title="Toggle panel" aria-expanded="true" aria-controls="example-unique-id-8" aria-pressed="true">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#toggle_panel_left"></use>
    </svg>
    <span class="slds-assistive-text">Provide description of action</span>
  </button>
</header>
<div class="demo-only-element" style="background-color:#fafaf9;position:relative;height:600px;overflow:hidden;display:flex;flex-direction:">
  <div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-panel_drawer slds-is-open" id="example-unique-id-8">
    <div class="slds-panel__header">
      <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">Panel Header</h2>
      <div class="slds-panel__header-actions">
        <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Panel Header</span>
        </button>
      </div>
    </div>
    <div class="slds-panel__body">A panel body accepts any layout or component</div>
  </div>
  <div class="demo-only-content slds-col slds-p-around_medium">This section is demo-only content representing a custom layout in conjunction with the panel. It is not a part of the blueprint.</div>
</div>
:::

::: legacy-component-example title="Accessibility Requirement"
<header class="demo-only-element slds-theme_default slds-border_bottom slds-p-around_small slds-text-align_right" style="z-index:1">
  <button class="slds-button slds-button_icon slds-is-selected slds-button_icon-border-filled slds-button_icon-border" title="Toggle filter panel" aria-expanded="true" aria-controls="example-unique-id-10" aria-pressed="true">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#filterList"></use>
    </svg>
    <span class="slds-assistive-text">Provide description of action</span>
  </button>
</header>
<div class="demo-only-element" style="background-color:#fafaf9;position:relative;height:600px;overflow:hidden;display:flex;flex-direction:row-reverse">
  <div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-right slds-panel_drawer slds-is-open" id="example-unique-id-10">
    <div class="slds-panel__header">
      <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Filter">Filter</h2>
      <div class="slds-panel__header-actions">
        <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Filter">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Collapse Filter</span>
        </button>
      </div>
    </div>
    <div class="slds-panel__body">
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
    </div>
  </div>
  <div class="demo-only-content slds-col slds-p-around_medium">This section is demo-only content representing a custom layout in conjunction with the panel. It is not a part of the blueprint.</div>
</div>
:::
