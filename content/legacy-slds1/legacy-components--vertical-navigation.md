---
title: Vertical Navigation
---

SLDS 1 blueprint examples for **Vertical Navigation**.

::: legacy-component-example title="List"
<div class="demo-only" style="width:320px">
  <nav class="slds-nav-vertical" aria-label="Sub page">
    <div class="slds-nav-vertical__section">
      <h2 id="entity-header" class="slds-nav-vertical__title">Reports</h2>
      <ul aria-describedby="entity-header">
        <li class="slds-nav-vertical__item slds-is-active">
          <a href="#" class="slds-nav-vertical__action" aria-current="true">Recent</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Private Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Public Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="folder-header" class="slds-nav-vertical__title">Folders</h2>
      <ul aria-describedby="folder-header">
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Shared with Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
:::

::: legacy-component-example title="Collapsed"
<div class="demo-only" style="width:320px">
  <nav class="slds-nav-vertical" aria-label="Sub page">
    <div class="slds-nav-vertical__section">
      <h2 id="entity-header" class="slds-nav-vertical__title">Reports</h2>
      <ul aria-describedby="entity-header">
        <li class="slds-nav-vertical__item slds-is-active">
          <a href="#" class="slds-nav-vertical__action" aria-current="true">Recent</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Private Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Public Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="folder-header" class="slds-nav-vertical__title">Folders</h2>
      <ul aria-describedby="folder-header">
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Shared with Me</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__overflow">
      <button class="slds-button slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow" aria-controls="search-results" aria-expanded="false">
        <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
        </svg>
        <span class="slds-nav-vertical__action-text">Show More
          <span class="slds-assistive-text">Folders</span>
        </span>
      </button>
      <div id="search-results" class="slds-hide">
        <ul aria-describedby="folder-header">
          <li class="slds-nav-vertical__item">
            <a href="#" class="slds-nav-vertical__action">Overflow Item One</a>
          </li>
          <li class="slds-nav-vertical__item">
            <a href="#" class="slds-nav-vertical__action">Overflow Item Two</a>
          </li>
          <li class="slds-nav-vertical__item">
            <a href="#" class="slds-nav-vertical__action">Overflow Item Three</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
:::

::: legacy-component-example title="Expanded"
<div class="demo-only" style="width:320px">
  <nav class="slds-nav-vertical" aria-label="Sub page">
    <div class="slds-nav-vertical__section">
      <h2 id="entity-header" class="slds-nav-vertical__title">Reports</h2>
      <ul aria-describedby="entity-header">
        <li class="slds-nav-vertical__item slds-is-active">
          <a href="#" class="slds-nav-vertical__action" aria-current="true">Recent</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Private Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Public Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="folder-header" class="slds-nav-vertical__title">Folders</h2>
      <ul aria-describedby="folder-header">
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Shared with Me</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__overflow">
      <button class="slds-button slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow" aria-controls="search-results" aria-expanded="true">
        <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
        </svg>
        <span class="slds-nav-vertical__action-text">Show Less
          <span class="slds-assistive-text">Folders</span>
        </span>
      </button>
      <div id="search-results" class="slds-show">
        <ul aria-describedby="folder-header">
          <li class="slds-nav-vertical__item">
            <a href="#" class="slds-nav-vertical__action">Overflow Item One</a>
          </li>
          <li class="slds-nav-vertical__item">
            <a href="#" class="slds-nav-vertical__action">Overflow Item Two</a>
          </li>
          <li class="slds-nav-vertical__item">
            <a href="#" class="slds-nav-vertical__action">Overflow Item Three</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
:::

::: legacy-component-example title="Compact"
<div class="demo-only" style="width:320px">
  <nav class="slds-nav-vertical slds-nav-vertical_compact" aria-label="Sub page">
    <div class="slds-nav-vertical__section">
      <h2 id="entity-header" class="slds-nav-vertical__title">Reports</h2>
      <ul aria-describedby="entity-header">
        <li class="slds-nav-vertical__item slds-is-active">
          <a href="#" class="slds-nav-vertical__action" aria-current="true">Recent</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Private Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Public Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="folder-header" class="slds-nav-vertical__title">Folders</h2>
      <ul aria-describedby="folder-header">
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Shared with Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
:::

::: legacy-component-example title="Items with Icons"
<div class="demo-only" style="width:320px">
  <nav class="slds-nav-vertical" aria-label="Sub page">
    <div class="slds-nav-vertical__section">
      <h2 id="entity-header" class="slds-nav-vertical__title">Reports</h2>
      <ul aria-describedby="entity-header">
        <li class="slds-nav-vertical__item slds-is-active">
          <a href="#" class="slds-nav-vertical__action" aria-current="true">Recent</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Private Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Public Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="folder-header" class="slds-nav-vertical__title">Folders</h2>
      <ul aria-describedby="folder-header">
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">
            <span class="slds-icon_container slds-icon-utility-open_folder slds-line-height_reset" title="Folder">
              <svg class="slds-icon slds-icon-text-default slds-icon_x-small slds-m-right_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#open_folder"></use>
              </svg>
              <span class="slds-assistive-text">Folder</span>
            </span>Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">
            <span class="slds-icon_container slds-icon-utility-open_folder slds-line-height_reset" title="Folder">
              <svg class="slds-icon slds-icon-text-default slds-icon_x-small slds-m-right_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#open_folder"></use>
              </svg>
              <span class="slds-assistive-text">Folder</span>
            </span>Shared with Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
:::

::: legacy-component-example title="Items with Notifications"
<div class="demo-only" style="width:320px">
  <nav class="slds-nav-vertical" aria-label="Sub page">
    <div class="slds-nav-vertical__section">
      <h2 id="entity-header" class="slds-nav-vertical__title">Reports</h2>
      <ul aria-describedby="entity-header">
        <li class="slds-nav-vertical__item slds-is-active">
          <a href="#" class="slds-nav-vertical__action" aria-current="true">Recent
            <span class="slds-badge slds-col_bump-left">
              <span class="slds-assistive-text">:</span>3
              <span class="slds-assistive-text">New Items</span>
            </span>
          </a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Private Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Public Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="folder-header" class="slds-nav-vertical__title">Folders</h2>
      <ul aria-describedby="folder-header">
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Shared with Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
:::

::: legacy-component-example title="Shaded Background"
<div class="demo-only" style="width:320px;background-color:#FAFAFB">
  <nav class="slds-nav-vertical slds-nav-vertical_shade" aria-label="Sub page">
    <div class="slds-nav-vertical__section">
      <h2 id="entity-header" class="slds-nav-vertical__title">Reports</h2>
      <ul aria-describedby="entity-header">
        <li class="slds-nav-vertical__item slds-is-active">
          <a href="#" class="slds-nav-vertical__action" aria-current="true">Recent</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Private Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Public Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="folder-header" class="slds-nav-vertical__title">Folders</h2>
      <ul aria-describedby="folder-header">
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Shared with Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
:::

::: legacy-component-example title="Quickfind"
<div class="demo-only" style="width:320px">
  <nav class="slds-nav-vertical" aria-label="Sub page">
    <div class="slds-form-element slds-p-horizontal_large">
      <label class="slds-form-element__label slds-assistive-text" for="input-id-01">Filter navigation items</label>
      <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
        <span class="slds-icon_container slds-icon-utility-search">
          <svg class="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
          </svg>
        </span>
        <input type="search" id="input-id-01" placeholder="Quick Find" class="slds-input" />
      </div>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="entity-header" class="slds-nav-vertical__title">Reports</h2>
      <ul aria-describedby="entity-header">
        <li class="slds-nav-vertical__item slds-is-active">
          <a href="#" class="slds-nav-vertical__action" aria-current="true">Recent</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Private Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Public Reports</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">All Reports</a>
        </li>
      </ul>
    </div>
    <div class="slds-nav-vertical__section">
      <h2 id="folder-header" class="slds-nav-vertical__title">Folders</h2>
      <ul aria-describedby="folder-header">
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Created by Me</a>
        </li>
        <li class="slds-nav-vertical__item">
          <a href="#" class="slds-nav-vertical__action">Shared with Me</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
:::

::: legacy-component-example title="Radio Group"
<div class="slds-nav-vertical__section">
  <div>
    <fieldset class="slds-nav-vertical">
      <legend class="slds-nav-vertical__title">Reports</legend>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-01-recent" value="unique-id-01-recent" name="unique-id-example" checked="" />
        <label class="slds-nav-vertical__action" for="unique-id-01-recent">
          <span class="slds-nav-vertical_radio-faux">Recent</span>
        </label>
      </span>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-01-created-by-me" value="unique-id-01-created-by-me" name="unique-id-example" />
        <label class="slds-nav-vertical__action" for="unique-id-01-created-by-me">
          <span class="slds-nav-vertical_radio-faux">Created by Me</span>
        </label>
      </span>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-01-private-reports" value="unique-id-01-private-reports" name="unique-id-example" />
        <label class="slds-nav-vertical__action" for="unique-id-01-private-reports">
          <span class="slds-nav-vertical_radio-faux">Private Reports</span>
        </label>
      </span>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-01-public-reports" value="unique-id-01-public-reports" name="unique-id-example" />
        <label class="slds-nav-vertical__action" for="unique-id-01-public-reports">
          <span class="slds-nav-vertical_radio-faux">Public Reports</span>
        </label>
      </span>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-01-all-reports" value="unique-id-01-all-reports" name="unique-id-example" />
        <label class="slds-nav-vertical__action" for="unique-id-01-all-reports">
          <span class="slds-nav-vertical_radio-faux">All Reports</span>
        </label>
      </span>
    </fieldset>
  </div>
</div>
:::

::: legacy-component-example title="Compact"
<div class="slds-nav-vertical__section">
  <div>
    <fieldset class="slds-nav-vertical slds-nav-vertical_compact">
      <legend class="slds-nav-vertical__title">Reports</legend>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-02-recent" value="unique-id-02-recent" name="unique-id-compact" checked="" />
        <label class="slds-nav-vertical__action" for="unique-id-02-recent">
          <span class="slds-nav-vertical_radio-faux">Recent</span>
        </label>
      </span>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-02-created-by-me" value="unique-id-02-created-by-me" name="unique-id-compact" />
        <label class="slds-nav-vertical__action" for="unique-id-02-created-by-me">
          <span class="slds-nav-vertical_radio-faux">Created by Me</span>
        </label>
      </span>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-02-private-reports" value="unique-id-02-private-reports" name="unique-id-compact" />
        <label class="slds-nav-vertical__action" for="unique-id-02-private-reports">
          <span class="slds-nav-vertical_radio-faux">Private Reports</span>
        </label>
      </span>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-02-public-reports" value="unique-id-02-public-reports" name="unique-id-compact" />
        <label class="slds-nav-vertical__action" for="unique-id-02-public-reports">
          <span class="slds-nav-vertical_radio-faux">Public Reports</span>
        </label>
      </span>
      <span class="slds-nav-vertical__item">
        <input type="radio" id="unique-id-02-all-reports" value="unique-id-02-all-reports" name="unique-id-compact" />
        <label class="slds-nav-vertical__action" for="unique-id-02-all-reports">
          <span class="slds-nav-vertical_radio-faux">All Reports</span>
        </label>
      </span>
    </fieldset>
  </div>
</div>
:::

::: legacy-component-example title="Shaded Background"
<div class="demo-only" style="background-color:#FAFAFB">
  <div class="slds-nav-vertical__section">
    <div>
      <fieldset class="slds-nav-vertical slds-nav-vertical_shade">
        <legend class="slds-nav-vertical__title">Reports</legend>
        <span class="slds-nav-vertical__item">
          <input type="radio" id="unique-id-03-recent" value="unique-id-03-recent" name="unique-id-shade" checked="" />
          <label class="slds-nav-vertical__action" for="unique-id-03-recent">
            <span class="slds-nav-vertical_radio-faux">Recent</span>
          </label>
        </span>
        <span class="slds-nav-vertical__item">
          <input type="radio" id="unique-id-03-created-by-me" value="unique-id-03-created-by-me" name="unique-id-shade" />
          <label class="slds-nav-vertical__action" for="unique-id-03-created-by-me">
            <span class="slds-nav-vertical_radio-faux">Created by Me</span>
          </label>
        </span>
        <span class="slds-nav-vertical__item">
          <input type="radio" id="unique-id-03-private-reports" value="unique-id-03-private-reports" name="unique-id-shade" />
          <label class="slds-nav-vertical__action" for="unique-id-03-private-reports">
            <span class="slds-nav-vertical_radio-faux">Private Reports</span>
          </label>
        </span>
        <span class="slds-nav-vertical__item">
          <input type="radio" id="unique-id-03-public-reports" value="unique-id-03-public-reports" name="unique-id-shade" />
          <label class="slds-nav-vertical__action" for="unique-id-03-public-reports">
            <span class="slds-nav-vertical_radio-faux">Public Reports</span>
          </label>
        </span>
        <span class="slds-nav-vertical__item">
          <input type="radio" id="unique-id-03-all-reports" value="unique-id-03-all-reports" name="unique-id-shade" />
          <label class="slds-nav-vertical__action" for="unique-id-03-all-reports">
            <span class="slds-nav-vertical_radio-faux">All Reports</span>
          </label>
        </span>
      </fieldset>
    </div>
  </div>
</div>
:::
