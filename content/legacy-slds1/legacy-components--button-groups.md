---
title: Button Groups
---

SLDS 1 blueprint examples for **Button Groups**.

::: legacy-component-example title="Base"
<div class="slds-button-group" role="group">
  <button class="slds-button slds-button_neutral">Refresh</button>
  <button class="slds-button slds-button_neutral">Edit</button>
  <button class="slds-button slds-button_neutral">Save</button>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-button-group" role="group">
  <button class="slds-button slds-button_neutral">Refresh</button>
  <button class="slds-button slds-button_neutral" disabled="">Edit</button>
  <button class="slds-button slds-button_neutral">Save</button>
</div>
:::

::: legacy-component-example title="With Overflow Menu"
<div class="slds-button-group" role="group">
  <button class="slds-button slds-button_neutral">Refresh</button>
  <button class="slds-button slds-button_neutral">Edit</button>
  <button class="slds-button slds-button_neutral">Save</button>
  <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
    <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="false" title="Show More">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
      </svg>
      <span class="slds-assistive-text">Show More</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="With Overflow Menu – Open"
<div class="demo-only" style="height:8.75rem">
  <div class="slds-button-group" role="group">
    <button class="slds-button slds-button_neutral">Refresh</button>
    <button class="slds-button slds-button_neutral">Edit</button>
    <button class="slds-button slds-button_neutral">Save</button>
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open slds-button_last">
      <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Show More</span>
      </button>
      <div class="slds-dropdown slds-dropdown_right slds-dropdown_actions">
        <ul class="slds-dropdown__list" role="menu">
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="0">
              <span title="Overflow Item One">Overflow Item One</span>
            </a>
          </li>
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="-1">
              <span title="Overflow Item Two">Overflow Item Two</span>
            </a>
          </li>
          <li class="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabindex="-1">
              <span title="Overflow Item Three">Overflow Item Three</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="With Overflow Menu – Disabled"
<div class="slds-button-group" role="group">
  <button class="slds-button slds-button_neutral">Refresh</button>
  <button class="slds-button slds-button_neutral">Edit</button>
  <button class="slds-button slds-button_neutral">Save</button>
  <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
    <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" disabled="" title="More Actions">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
      </svg>
      <span class="slds-assistive-text">More Actions</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Inverse"
<div class="demo-only" style="padding:0.5rem;background:#16325c">
  <div class="slds-button-group" role="group">
    <button class="slds-button slds-button_inverse">Refresh</button>
    <button class="slds-button slds-button_inverse">Edit</button>
    <button class="slds-button slds-button_inverse">Save</button>
  </div>
</div>
:::

::: legacy-component-example title="Inverse - Disabled"
<div class="demo-only" style="padding:0.5rem;background:#16325c">
  <div class="slds-button-group" role="group">
    <button class="slds-button slds-button_inverse">Refresh</button>
    <button class="slds-button slds-button_inverse" disabled="">Edit</button>
    <button class="slds-button slds-button_inverse">Save</button>
  </div>
</div>
:::

::: legacy-component-example title="Inverse - With Overflow Menu"
<div class="demo-only" style="padding:0.5rem;background:#16325c">
  <div class="slds-button-group" role="group">
    <button class="slds-button slds-button_inverse">Refresh</button>
    <button class="slds-button slds-button_inverse">Edit</button>
    <button class="slds-button slds-button_inverse">Save</button>
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
      <button class="slds-button slds-button_icon slds-button_icon-border-inverse" aria-haspopup="true" title="More Actions">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">More Actions</span>
      </button>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Inverse - With Disabled Overflow Menu"
<div class="demo-only" style="padding:0.5rem;background:#16325c">
  <div class="slds-button-group" role="group">
    <button class="slds-button slds-button_inverse">Refresh</button>
    <button class="slds-button slds-button_inverse">Edit</button>
    <button class="slds-button slds-button_inverse">Save</button>
    <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
      <button class="slds-button slds-button_icon slds-button_icon-border-inverse" aria-haspopup="true" disabled="" title="More Actions">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">More Actions</span>
      </button>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Button Icon Group"
<div class="slds-button-group" role="group">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Charts" aria-pressed="false">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
    </svg>
    <span class="slds-assistive-text">Charts</span>
  </button>
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Filter List" aria-pressed="false">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#filterList"></use>
    </svg>
    <span class="slds-assistive-text">Filter List</span>
  </button>
  <button class="slds-button slds-button_icon slds-button_icon-more" aria-haspopup="true" aria-expanded="false" title="More Actions">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
    </svg>
    <svg class="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">More Actions</span>
  </button>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-button-group" role="group">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Charts" aria-pressed="false">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
    </svg>
    <span class="slds-assistive-text">Charts</span>
  </button>
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" disabled="" title="Filter List" aria-pressed="false">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#filterList"></use>
    </svg>
    <span class="slds-assistive-text">Filter List</span>
  </button>
  <button class="slds-button slds-button_icon slds-button_icon-more" aria-haspopup="true" aria-expanded="false" title="More Actions">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
    </svg>
    <svg class="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">More Actions</span>
  </button>
</div>
:::

::: legacy-component-example title="Selected"
<div class="slds-button-group" role="group">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-is-selected" title="Charts" aria-pressed="true">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
    </svg>
    <span class="slds-assistive-text">Charts</span>
  </button>
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" title="Filter List" aria-pressed="false">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#filterList"></use>
    </svg>
    <span class="slds-assistive-text">Filter List</span>
  </button>
  <button class="slds-button slds-button_icon slds-button_icon-more" aria-haspopup="true" aria-expanded="false" title="More Actions">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
    </svg>
    <svg class="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">More Actions</span>
  </button>
</div>
:::

::: legacy-component-example title="With Overflow Menu"
<div class="slds-button-group" role="group">
  <button class="slds-button slds-button_brand">Save</button>
  <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
    <button class="slds-button slds-button_icon slds-button_icon-brand" aria-haspopup="true" title="More Actions">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
      </svg>
      <span class="slds-assistive-text">More Actions</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="With Style Encapsulation"
<div class="slds-button-group" role="group">
  <div>
    <button class="slds-button slds-button_neutral slds-button_first">First</button>
  </div>
  <div>
    <button class="slds-button slds-button_neutral slds-button_middle">Middle</button>
  </div>
  <div>
    <button class="slds-button slds-button_neutral slds-button_middle">Middle</button>
  </div>
  <div>
    <button class="slds-button slds-button_neutral slds-button_last">Last</button>
  </div>
</div>
:::

::: legacy-component-example title="First/Last"
<div class="slds-button-group" role="group">
  <div>
    <button class="slds-button slds-button_neutral slds-button_first">First</button>
  </div>
  <div>
    <button class="slds-button slds-button_neutral slds-button_last">Last</button>
  </div>
</div>
:::

::: legacy-component-example title="Button Icon Group"
<div class="slds-button-group" role="group">
  <div>
    <button class="slds-button slds-button_icon slds-button_first slds-button_icon-border-filled" title="Charts" aria-pressed="false">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
      </svg>
      <span class="slds-assistive-text">Charts</span>
    </button>
  </div>
  <div>
    <button class="slds-button slds-button_icon slds-button_middle slds-button_icon-border-filled" title="Filter List" aria-pressed="false">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#filterList"></use>
      </svg>
      <span class="slds-assistive-text">Filter List</span>
    </button>
  </div>
  <div>
    <button class="slds-button slds-button_icon slds-button_middle slds-button_icon-border-filled" title="Collaborate" aria-pressed="false">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#comments"></use>
      </svg>
      <span class="slds-assistive-text">Collaborate</span>
    </button>
  </div>
  <div>
    <button class="slds-button slds-button_icon slds-button_last slds-button_icon-more" aria-haspopup="true" aria-expanded="false" title="More Actions">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <svg class="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
      </svg>
      <span class="slds-assistive-text">More Actions</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="Button Icon Group – First/Last"
<div class="slds-button-group" role="group">
  <div>
    <button class="slds-button slds-button_icon slds-button_first slds-button_icon-border-filled" title="Charts" aria-pressed="false">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
      </svg>
      <span class="slds-assistive-text">Charts</span>
    </button>
  </div>
  <div>
    <button class="slds-button slds-button_icon slds-button_last slds-button_icon-more" aria-haspopup="true" aria-expanded="false" title="More Actions">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <svg class="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
      </svg>
      <span class="slds-assistive-text">More Actions</span>
    </button>
  </div>
</div>
:::

::: legacy-component-example title="List"
<ul class="slds-button-group-list">
  <li>
    <button class="slds-button slds-button_neutral">Refresh</button>
  </li>
  <li>
    <button class="slds-button slds-button_neutral">Edit</button>
  </li>
  <li>
    <button class="slds-button slds-button_neutral">Save</button>
  </li>
</ul>
:::

::: legacy-component-example title="Row"
<ul class="slds-button-group-row">
  <li class="slds-button-group-item">
    <button class="slds-button slds-button_neutral">Refresh</button>
  </li>
  <li class="slds-button-group-item">
    <button class="slds-button slds-button_neutral">Edit</button>
  </li>
  <li class="slds-button-group-item">
    <button class="slds-button slds-button_brand">Save</button>
  </li>
</ul>
:::

::: legacy-component-example title="Of Button Icons"
<ul class="slds-button-group-row">
  <li class="slds-button-group-item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_clicked">
      <button class="slds-button slds-button_icon slds-button_icon-more" aria-haspopup="true" aria-expanded="false" title="More Options">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
        </svg>
        <svg class="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">More options</span>
      </button>
    </div>
  </li>
  <li class="slds-button-group-item">
    <div class="slds-dropdown-trigger slds-dropdown-trigger_clicked">
      <button class="slds-button slds-button_icon slds-button_icon-more" aria-haspopup="true" aria-expanded="false" title="More Options">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#table"></use>
        </svg>
        <svg class="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">More options</span>
      </button>
    </div>
  </li>
  <li class="slds-button-group-item">
    <button class="slds-button slds-button_icon slds-button_icon-border-filled">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
      </svg>
      <span class="slds-assistive-text">Provide description of action</span>
    </button>
  </li>
  <li class="slds-button-group-item">
    <button class="slds-button slds-button_icon slds-button_icon-border-filled">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#refresh"></use>
      </svg>
      <span class="slds-assistive-text">Provide description of action</span>
    </button>
  </li>
  <li class="slds-button-group-item">
    <div class="slds-button-group" role="group">
      <button class="slds-button slds-button_icon slds-button_icon-border-filled">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
        </svg>
        <span class="slds-assistive-text">Provide description of action</span>
      </button>
      <button class="slds-button slds-button_icon slds-button_icon-border-filled">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#filter"></use>
        </svg>
        <span class="slds-assistive-text">Provide description of action</span>
      </button>
    </div>
  </li>
</ul>
:::
