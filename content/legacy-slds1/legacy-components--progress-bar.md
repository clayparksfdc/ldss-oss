---
title: Progress Bar
---

SLDS 1 blueprint examples for **Progress Bar**.

::: legacy-component-example title="Base"
<div class="slds-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:25%">
    <span class="slds-assistive-text">Progress: 25%</span>
  </span>
</div>
:::

::: legacy-component-example title="0% complete"
<div class="slds-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:0%">
    <span class="slds-assistive-text">Progress: 0%</span>
  </span>
</div>
:::

::: legacy-component-example title="25% complete"
<div class="slds-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:25%">
    <span class="slds-assistive-text">Progress: 25%</span>
  </span>
</div>
:::

::: legacy-component-example title="50% complete"
<div class="slds-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:50%">
    <span class="slds-assistive-text">Progress: 50%</span>
  </span>
</div>
:::

::: legacy-component-example title="75% complete"
<div class="slds-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:75%">
    <span class="slds-assistive-text">Progress: 75%</span>
  </span>
</div>
:::

::: legacy-component-example title="100% complete"
<div class="slds-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:100%">
    <span class="slds-assistive-text">Progress: 100%</span>
  </span>
</div>
:::

::: legacy-component-example title="Success Color"
<div class="slds-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value slds-progress-bar__value_success" style="width:100%">
    <span class="slds-assistive-text">Progress: 100%</span>
  </span>
</div>
:::

::: legacy-component-example title="Descriptive Progress Bar"
<div>
  <div class="slds-grid slds-grid_align-spread slds-p-bottom_x-small" id="progress-bar-label-id-6">
    <span>Einstein Setup Assistant</span>
    <span aria-hidden="true">
      <strong>25% Complete</strong>
    </span>
  </div>
  <div class="slds-progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" aria-labelledby="progress-bar-label-id-6" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
    <span class="slds-progress-bar__value" style="width:25%">
      <span class="slds-assistive-text" id="progress-bar-label-id-6">Progress: 25%</span>
    </span>
  </div>
</div>
:::

::: legacy-component-example title="Vertical"
<div class="slds-progress-bar slds-progress-bar_vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="height:25%">
    <span class="slds-assistive-text">Progress: 25%</span>
  </span>
</div>
:::

::: legacy-component-example title="0% complete"
<div class="slds-progress-bar slds-progress-bar_vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="height:0%">
    <span class="slds-assistive-text">Progress: 0%</span>
  </span>
</div>
:::

::: legacy-component-example title="25% complete"
<div class="slds-progress-bar slds-progress-bar_vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="height:25%">
    <span class="slds-assistive-text">Progress: 25%</span>
  </span>
</div>
:::

::: legacy-component-example title="50% complete"
<div class="slds-progress-bar slds-progress-bar_vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="height:50%">
    <span class="slds-assistive-text">Progress: 50%</span>
  </span>
</div>
:::

::: legacy-component-example title="75% complete"
<div class="slds-progress-bar slds-progress-bar_vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="height:75%">
    <span class="slds-assistive-text">Progress: 75%</span>
  </span>
</div>
:::

::: legacy-component-example title="100% complete"
<div class="slds-progress-bar slds-progress-bar_vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="height:100%">
    <span class="slds-assistive-text">Progress: 100%</span>
  </span>
</div>
:::

::: legacy-component-example title="Radius"
<div class="slds-progress-bar slds-progress-bar_circular" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:75%">
    <span class="slds-assistive-text">Progress: 75%</span>
  </span>
</div>
:::

::: legacy-component-example title="Example 16"
<div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:75%">
    <span class="slds-assistive-text">Progress: 75%</span>
  </span>
</div>
:::

::: legacy-component-example title="Example 17"
<div class="slds-progress-bar slds-progress-bar_small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:75%">
    <span class="slds-assistive-text">Progress: 75%</span>
  </span>
</div>
:::

::: legacy-component-example title="Example 18"
<div class="slds-progress-bar slds-progress-bar_medium" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:75%">
    <span class="slds-assistive-text">Progress: 75%</span>
  </span>
</div>
:::

::: legacy-component-example title="Example 19"
<div class="slds-progress-bar slds-progress-bar_large" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
  <span class="slds-progress-bar__value" style="width:75%">
    <span class="slds-assistive-text">Progress: 75%</span>
  </span>
</div>
:::
