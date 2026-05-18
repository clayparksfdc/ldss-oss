---
title: Progress Ring
---

SLDS 1 blueprint examples for **Progress Ring**.

::: legacy-component-example title="Base"
<div class="slds-progress-ring">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-52" cx="0" cy="0" r="1"></circle>
    </svg>
  </div>
  <div class="slds-progress-ring__content"></div>
</div>
:::

::: legacy-component-example title="Partially Drained"
<div class="slds-progress-ring">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="88" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <path class="slds-progress-ring__path" id="slds-progress-ring-path-55" d="M 1 0 A 1 1 0 1 1 0.73 -0.68 L 0 0"></path>
    </svg>
  </div>
  <div class="slds-progress-ring__content"></div>
  <div class="slds-progress-ring__progress-head">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-56" cx="0.511" cy="-0.476" r="0.2"></circle>
    </svg>
  </div>
</div>
:::

::: legacy-component-example title="Partially Drained with Warning Icon"
<div class="slds-progress-ring slds-progress-ring_warning">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <path class="slds-progress-ring__path" id="slds-progress-ring-path-59" d="M 1 0 A 1 1 0 0 1 0.31 0.95 L 0 0"></path>
    </svg>
  </div>
  <div class="slds-progress-ring__content">
    <span class="slds-icon_container slds-icon-utility-warning" title="Warning">
      <svg class="slds-icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
      </svg>
      <span class="slds-assistive-text">Warning</span>
    </span>
  </div>
  <div class="slds-progress-ring__progress-head">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-60" cx="0.217" cy="0.6649999999999999" r="0.2"></circle>
    </svg>
  </div>
</div>
:::

::: legacy-component-example title="Partially Filled"
<div class="slds-progress-ring">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <path class="slds-progress-ring__path" id="slds-progress-ring-path-63" d="M 1 0 A 1 1 0 0 0 -0.81 -0.59 L 0 0"></path>
    </svg>
  </div>
  <div class="slds-progress-ring__content"></div>
  <div class="slds-progress-ring__progress-head">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-64" cx="-0.567" cy="-0.413" r="0.2"></circle>
    </svg>
  </div>
</div>
:::

::: legacy-component-example title="Partially Filled with Warning Icon"
<div class="slds-progress-ring slds-progress-ring_warning">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <path class="slds-progress-ring__path" id="slds-progress-ring-path-67" d="M 1 0 A 1 1 0 1 0 0.00 1.00 L 0 0"></path>
    </svg>
  </div>
  <div class="slds-progress-ring__content">
    <span class="slds-icon_container slds-icon-utility-warning" title="Warning">
      <svg class="slds-icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
      </svg>
      <span class="slds-assistive-text">Warning</span>
    </span>
  </div>
  <div class="slds-progress-ring__progress-head">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-68" cx="0" cy="0.7" r="0.2"></circle>
    </svg>
  </div>
</div>
:::

::: legacy-component-example title="With Expired Icon"
<div class="slds-progress-ring slds-progress-ring_expired">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <path class="slds-progress-ring__path" id="slds-progress-ring-path-70" d="M 1 0 A 1 1 0 0 1 1.00 0.00 L 0 0"></path>
    </svg>
  </div>
  <div class="slds-progress-ring__content">
    <span class="slds-icon_container slds-icon-utility-error" title="Expired">
      <svg class="slds-icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
      </svg>
      <span class="slds-assistive-text">Expired</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Complete"
<div class="slds-progress-ring slds-progress-ring_complete">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-72" cx="0" cy="0" r="1"></circle>
    </svg>
  </div>
  <div class="slds-progress-ring__content">
    <span class="slds-icon_container slds-icon-utility-check" title="Complete">
      <svg class="slds-icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
      </svg>
      <span class="slds-assistive-text">Complete</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Large Size"
<div class="slds-progress-ring slds-progress-ring_large">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-74" cx="0" cy="0" r="1"></circle>
    </svg>
  </div>
  <div class="slds-progress-ring__content"></div>
</div>
:::

::: legacy-component-example title="Active Step"
<div class="slds-progress-ring slds-progress-ring_active-step">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-76" cx="0" cy="0" r="1"></circle>
    </svg>
  </div>
  <div class="slds-progress-ring__content"></div>
</div>
:::

::: legacy-component-example title="Theme - Warning"
<div class="slds-progress-ring slds-progress-ring_warning">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-78" cx="0" cy="0" r="1"></circle>
    </svg>
  </div>
  <div class="slds-progress-ring__content"></div>
</div>
:::

::: legacy-component-example title="Theme - Expired"
<div class="slds-progress-ring slds-progress-ring_expired">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-80" cx="0" cy="0" r="1"></circle>
    </svg>
  </div>
  <div class="slds-progress-ring__content"></div>
</div>
:::

::: legacy-component-example title="Theme - Complete"
<div class="slds-progress-ring slds-progress-ring_complete">
  <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
    <svg viewBox="-1 -1 2 2">
      <circle class="slds-progress-ring__path" id="slds-progress-ring-path-82" cx="0" cy="0" r="1"></circle>
    </svg>
  </div>
  <div class="slds-progress-ring__content"></div>
</div>
:::
