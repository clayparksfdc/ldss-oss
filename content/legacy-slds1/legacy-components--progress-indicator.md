---
title: Progress Indicator
---

SLDS 1 blueprint examples for **Progress Indicator**.

::: legacy-component-example title="Base"
<div class="slds-progress">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-active">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 1 - Active</span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 2 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 3 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 4 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 5 </span>
      </div>
    </li>
  </ol>
  <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
    <span class="slds-progress-bar__value" style="width:0%">
      <span class="slds-assistive-text">Progress: 0%</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Requirements"
<div class="slds-progress">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-active">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 1 - Active</span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 2 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 3 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 4 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 5 </span>
      </div>
    </li>
  </ol>
  <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
    <span class="slds-progress-bar__value" style="width:0%">
      <span class="slds-assistive-text">Progress: 0%</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Requirements"
<div class="slds-progress">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-completed">
      <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Step 1 - Completed</span>
      </div>
    </li>
    <li class="slds-progress__item slds-is-completed">
      <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Step 2 - Completed</span>
      </div>
    </li>
    <li class="slds-progress__item slds-is-active">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 3 - Active</span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 4 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 5 </span>
      </div>
    </li>
  </ol>
  <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
    <span class="slds-progress-bar__value" style="width:50%">
      <span class="slds-assistive-text">Progress: 50%</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Requirements"
<div class="slds-progress">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-completed">
      <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Step 1 - Completed</span>
      </div>
    </li>
    <li class="slds-progress__item slds-is-completed">
      <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Step 2 - Completed</span>
      </div>
    </li>
    <li class="slds-progress__item slds-has-error">
      <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
        </svg>
        <span class="slds-assistive-text">Step 3 - Error</span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 4 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 5 </span>
      </div>
    </li>
  </ol>
  <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
    <span class="slds-progress-bar__value" style="width:50%">
      <span class="slds-assistive-text">Progress: 50%</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Accessibility Requirements"
<div style="padding:3.5rem 1rem 0">
  <div class="slds-progress">
    <ol class="slds-progress__list">
      <li class="slds-progress__item slds-is-completed">
        <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
          <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
          </svg>
          <span class="slds-assistive-text">Step 1 - Completed</span>
        </div>
      </li>
      <li class="slds-progress__item slds-is-completed">
        <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
          <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
          </svg>
          <span class="slds-assistive-text">Step 2 - Completed</span>
        </div>
      </li>
      <li class="slds-progress__item slds-is-active">
        <div class="slds-progress__marker" tabindex="0">
          <span class="slds-assistive-text">Step 3 - Active</span>
        </div>
      </li>
      <li class="slds-progress__item">
        <div class="slds-progress__marker" tabindex="0">
          <span class="slds-assistive-text">Step 4 </span>
        </div>
      </li>
      <li class="slds-progress__item">
        <div class="slds-progress__marker" tabindex="0">
          <span class="slds-assistive-text">Step 5 </span>
        </div>
      </li>
    </ol>
    <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
      <span class="slds-progress-bar__value" style="width:50%">
        <span class="slds-assistive-text">Progress: 50%</span>
      </span>
    </div>
  </div>
  <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom" role="tooltip" id="step-3-tooltip" style="position:absolute;top:1rem;left:calc(50% + 6px);transform:translateX(-50%)">
    <div class="slds-popover__body">Verify Email</div>
  </div>
</div>
:::

::: legacy-component-example title="In a Modal"
<div>
  <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="header43" class="slds-modal slds-fade-in-open slds-modal_large">
    <div class="slds-modal__container">
      <button class="slds-button slds-button_icon slds-modal__close">
        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Cancel and close</span>
      </button>
      <div class="slds-modal__header">
        <h1 id="header43" class="slds-text-heading_medium">Modal header</h1>
      </div>
      <div class="slds-modal__content slds-grow slds-p-around_medium" id="modal-content-id-1"></div>
      <div class="slds-modal__footer slds-grid slds-grid_align-spread">
        <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
        <div class="slds-progress slds-progress_shade">
          <ol class="slds-progress__list">
            <li class="slds-progress__item slds-is-completed">
              <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
                <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                </svg>
                <span class="slds-assistive-text">Step 1 - Completed</span>
              </div>
            </li>
            <li class="slds-progress__item slds-is-active">
              <div class="slds-progress__marker" tabindex="0">
                <span class="slds-assistive-text">Step 2 - Active</span>
              </div>
            </li>
            <li class="slds-progress__item">
              <div class="slds-progress__marker" tabindex="0">
                <span class="slds-assistive-text">Step 3 </span>
              </div>
            </li>
            <li class="slds-progress__item">
              <div class="slds-progress__marker" tabindex="0">
                <span class="slds-assistive-text">Step 4 </span>
              </div>
            </li>
            <li class="slds-progress__item">
              <div class="slds-progress__marker" tabindex="0">
                <span class="slds-assistive-text">Step 5 </span>
              </div>
            </li>
          </ol>
          <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
            <span class="slds-progress-bar__value" style="width:25%">
              <span class="slds-assistive-text">Progress: 25%</span>
            </span>
          </div>
        </div>
        <button class="slds-button slds-button_brand">Save</button>
      </div>
    </div>
  </section>
  <div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
</div>
:::

::: legacy-component-example title="On a Gray Background"
<div class="slds-progress slds-progress_shade">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-completed">
      <div class="slds-progress__marker slds-progress__marker_icon" tabindex="0">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Step 1 - Completed</span>
      </div>
    </li>
    <li class="slds-progress__item slds-is-active">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 2 - Active</span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 3 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 4 </span>
      </div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker" tabindex="0">
        <span class="slds-assistive-text">Step 5 </span>
      </div>
    </li>
  </ol>
  <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
    <span class="slds-progress-bar__value" style="width:25%">
      <span class="slds-assistive-text">Progress: 25%</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Implementation Note"
<div class="slds-progress slds-progress_vertical">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-completed">
      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon" title="Complete">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Complete</span>
      </span>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 1</div>
    </li>
    <li class="slds-progress__item slds-is-active">
      <div class="slds-progress__marker">
        <span class="slds-assistive-text">Active</span>
      </div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 2</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 3</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 4</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 5</div>
    </li>
  </ol>
  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" role="progressbar">
    <span class="slds-assistive-text">Progress: 25%</span>
  </div>
</div>
:::

::: legacy-component-example title="Green Success"
<div class="slds-progress slds-progress_vertical">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-completed">
      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Complete</span>
      </span>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 1</div>
    </li>
    <li class="slds-progress__item slds-is-active">
      <div class="slds-progress__marker">
        <span class="slds-assistive-text">Active</span>
      </div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 2</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 3</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 4</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 5</div>
    </li>
  </ol>
  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" role="progressbar">
    <span class="slds-assistive-text">Progress: 25%</span>
  </div>
</div>
:::

::: legacy-component-example title="Error in a Step"
<div class="slds-progress slds-progress_vertical">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-completed">
      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon" title="Complete">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Complete</span>
      </span>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 1</div>
    </li>
    <li class="slds-progress__item slds-has-error">
      <span class="slds-icon_container slds-icon-utility-error slds-progress__marker slds-progress__marker_icon" title="Error">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
        </svg>
        <span class="slds-assistive-text">Error</span>
      </span>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 2</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 3</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 4</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 5</div>
    </li>
  </ol>
  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" role="progressbar">
    <span class="slds-assistive-text">Progress: 25%</span>
  </div>
</div>
:::

::: legacy-component-example title="Multiline Step Titles"
<div class="slds-progress slds-progress_vertical">
  <ol class="slds-progress__list">
    <li class="slds-progress__item slds-is-completed">
      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon" title="Complete">
        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
        </svg>
        <span class="slds-assistive-text">Complete</span>
      </span>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 1</div>
    </li>
    <li class="slds-progress__item slds-is-active">
      <div class="slds-progress__marker">
        <span class="slds-assistive-text">Active</span>
      </div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 2</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent eget pellentesque lacus. Suspendisse euismod magna nec nulla ornare viverra. Sed pretium, eros ullamcorper
        scelerisque placerat, nunc velit volutpat libero, a semper lacus urna eget nibh. Maecenas eget tortor pulvinar, scelerisque nibh sed, fringilla erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Ut ultricies dui turpis, at posuere dolor convallis vitae.</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 4</div>
    </li>
    <li class="slds-progress__item">
      <div class="slds-progress__marker"></div>
      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 5</div>
    </li>
  </ol>
  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" role="progressbar">
    <span class="slds-assistive-text">Progress: 25%</span>
  </div>
</div>
:::
