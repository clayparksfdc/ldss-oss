---
title: Slider
---

SLDS 1 blueprint examples for **Slider**.

::: legacy-component-example title="Base"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-2">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-2" class="slds-slider__range" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Disabled"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-3">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-3" class="slds-slider__range" disabled="" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Value: 0"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-3">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-3" class="slds-slider__range" value="0" />
      <span class="slds-slider__value" aria-hidden="true">0</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Value: 25"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-3">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-3" class="slds-slider__range" value="25" />
      <span class="slds-slider__value" aria-hidden="true">25</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Value: 50"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-3">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-3" class="slds-slider__range" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Value: 75"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-3">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-3" class="slds-slider__range" value="75" />
      <span class="slds-slider__value" aria-hidden="true">75</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Value: 100"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-3">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-3" class="slds-slider__range" value="100" />
      <span class="slds-slider__value" aria-hidden="true">100</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Min/Max Range"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-4">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 400</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-4" class="slds-slider__range" min="0" max="400" value="200" />
      <span class="slds-slider__value" aria-hidden="true">200</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Min/Max Range with Steps"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-4">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 400</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider">
      <input type="range" id="slider-id-4" class="slds-slider__range" min="0" max="400" step="100" value="200" />
      <span class="slds-slider__value" aria-hidden="true">200</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Width: x-small"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-4">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider slds-size_x-small">
      <input type="range" id="slider-id-4" class="slds-slider__range" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Width: small"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-4">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider slds-size_small">
      <input type="range" id="slider-id-4" class="slds-slider__range" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Width: medium"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-4">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider slds-size_medium">
      <input type="range" id="slider-id-4" class="slds-slider__range" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Width: large"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-4">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider slds-size_large">
      <input type="range" id="slider-id-4" class="slds-slider__range" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-form-element slds-has-error">
  <label class="slds-form-element__label" for="slider-id-4">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider slds-size_large">
      <input type="range" aria-describedby="error-message-id-1" id="slider-id-4" class="slds-slider__range" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
    <div id="error-message-id-1" class="slds-form-element__help">There is a problem with this field</div>
  </div>
</div>
:::

::: legacy-component-example title="Vertical"
<div class="slds-form-element">
  <label class="slds-form-element__label" for="slider-id-4">
    <span class="slds-slider-label">
      <span class="slds-slider-label__label">Slider Label</span>
      <span class="slds-slider-label__range">0 - 100</span>
    </span>
  </label>
  <div class="slds-form-element__control">
    <div class="slds-slider slds-slider_vertical">
      <input type="range" id="slider-id-4" class="slds-slider__range" value="50" />
      <span class="slds-slider__value" aria-hidden="true">50</span>
    </div>
  </div>
</div>
:::
