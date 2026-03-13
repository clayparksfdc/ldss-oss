---
title: Expandable Section
---

SLDS 1 blueprint examples for **Expandable Section**.

::: legacy-component-example title="Base"
<div class="slds-section slds-is-open">
  <h3 class="slds-section__title">
    <button aria-controls="expando-unique-id" aria-expanded="true" class="slds-button slds-section__title-action">
      <svg class="slds-section__title-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
      </svg>
      <span class="slds-truncate" title="Section Title">Section Title</span>
    </button>
  </h3>
  <div class="slds-section__content" id="expando-unique-id">
    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
  </div>
</div>
:::

::: legacy-component-example title="Non-collapsible"
<div class="slds-section slds-is-open">
  <h3 class="slds-section__title slds-theme_shade">
    <span class="slds-truncate slds-p-horizontal_small" title="Section Title">Section Title</span>
  </h3>
  <div class="slds-section__content">
    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
  </div>
</div>
:::

::: legacy-component-example title="Closed"
<div class="slds-section">
  <h3 class="slds-section__title">
    <button aria-controls="expando-unique-id" aria-expanded="false" class="slds-button slds-section__title-action">
      <svg class="slds-section__title-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
      </svg>
      <span class="slds-truncate" title="Section Title">Section Title</span>
    </button>
  </h3>
  <div hidden="" class="slds-section__content" id="expando-unique-id">
    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
  </div>
</div>
:::
