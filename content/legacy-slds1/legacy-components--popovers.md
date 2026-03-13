---
title: Popovers
---

SLDS 1 blueprint examples for **Popovers**.

::: legacy-component-example title="Base"
<section aria-describedby="dialog-body-id-110" aria-label="Dialog Title" class="slds-popover slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-110">
    <div class="slds-media">
      <div class="slds-media__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="With Header"
<section aria-describedby="dialog-body-id-112" aria-labelledby="dialog-heading-id-117" class="slds-popover slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-112">
    <div class="slds-media">
      <div class="slds-media__body">
        <header class="slds-popover__header">
          <h2 class="slds-text-heading_small" id="dialog-heading-id-117">Header title</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="With Footer"
<section aria-describedby="dialog-body-id-114" aria-label="Dialog Title" class="slds-popover slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-114">
    <div class="slds-media">
      <div class="slds-media__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-left">Learn More</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="With Badge"
<section aria-describedby="dialog-body-id-116" aria-labelledby="dialog-heading-id-121" class="slds-popover slds-nubbin_left slds-popover_large" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-116">
    <div class="slds-popover__meta">
      <span class="slds-badge">Admin Notice</span>
    </div>
    <div class="slds-media">
      <div class="slds-media__body">
        <header class="slds-popover__header">
          <h2 class="slds-text-heading_small" id="dialog-heading-id-121">Header title</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Scrolling region with max-height"
<section aria-describedby="dialog-body-id-118" aria-labelledby="dialog-heading-id-123" class="slds-popover slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body slds-popover__body_small" id="dialog-body-id-118" tabindex="0" role="region">
    <div class="slds-media">
      <div class="slds-media__body">
        <header class="slds-popover__header">
          <h2 class="slds-text-heading_small" id="dialog-heading-id-123">Header title</h2>
        </header>
        <div class="slds-text-longform">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <p>Footer Item</p>
  </footer>
</section>
:::

::: legacy-component-example title="Small"
<section aria-describedby="dialog-body-id-120" aria-labelledby="dialog-heading-id-125" class="slds-popover slds-nubbin_left slds-popover_small" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-120">
    <div class="slds-media">
      <div class="slds-media__body">
        <header class="slds-popover__header">
          <h2 class="slds-text-heading_small" id="dialog-heading-id-125">Header title</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Medium"
<section aria-describedby="dialog-body-id-122" aria-labelledby="dialog-heading-id-127" class="slds-popover slds-nubbin_left slds-popover_medium" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-122">
    <div class="slds-media">
      <div class="slds-media__body">
        <header class="slds-popover__header">
          <h2 class="slds-text-heading_small" id="dialog-heading-id-127">Header title</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Large"
<section aria-describedby="dialog-body-id-124" aria-labelledby="dialog-heading-id-129" class="slds-popover slds-nubbin_left slds-popover_large" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-124">
    <div class="slds-media">
      <div class="slds-media__body">
        <header class="slds-popover__header">
          <h2 class="slds-text-heading_small" id="dialog-heading-id-129">Header title</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Full Width"
<section aria-describedby="dialog-body-id-126" aria-labelledby="dialog-heading-id-131" class="slds-popover slds-nubbin_left slds-popover_full-width" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-126">
    <div class="slds-media">
      <div class="slds-media__body">
        <header class="slds-popover__header">
          <h2 class="slds-text-heading_small" id="dialog-heading-id-131">Header title</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Example 10"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 11"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_left-top" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 12"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_left-bottom" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 13"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_right" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 14"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_right-top" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 15"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_right-bottom" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 16"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_top" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 17"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_top-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 18"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_top-right" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 19"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_bottom" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 20"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_bottom-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Example 21"
<section aria-label="Dialog title" aria-describedby="popover-body-id" class="slds-popover slds-nubbin_bottom-right" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div id="popover-body-id" class="slds-popover__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</section>
:::

::: legacy-component-example title="Error"
<section aria-describedby="dialog-body-id-128" aria-labelledby="dialog-heading-id-1" class="slds-popover slds-popover_error slds-nubbin_bottom-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header">
    <div class="slds-media slds-media_center slds-has-flexi-truncate ">
      <div class="slds-media__figure">
        <span class="slds-icon_container slds-icon-utility-error">
          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
          </svg>
        </span>
      </div>
      <div class="slds-media__body">
        <h2 class="slds-truncate slds-text-heading_medium" id="dialog-heading-id-1" title="We hit a snag.">We hit a snag.</h2>
      </div>
    </div>
  </header>
  <div class="slds-popover__body" id="dialog-body-id-128">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      <a href="#" title="Learn More">Learn More</a>
    </p>
  </div>
</section>
:::

::: legacy-component-example title="With Footer"
<section aria-describedby="dialog-body-id-130" aria-labelledby="dialog-heading-id-1" class="slds-popover slds-popover_error slds-nubbin_bottom-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header">
    <div class="slds-media slds-media_center slds-has-flexi-truncate ">
      <div class="slds-media__figure">
        <span class="slds-icon_container slds-icon-utility-error">
          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
          </svg>
        </span>
      </div>
      <div class="slds-media__body">
        <h2 class="slds-truncate slds-text-heading_medium" id="dialog-heading-id-1" title="We hit a snag.">We hit a snag.</h2>
      </div>
    </div>
  </header>
  <div class="slds-popover__body" id="dialog-body-id-130">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      <a href="#" title="Learn More">Learn More</a>
    </p>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center slds-grid_align-end">
      <button class="slds-button slds-button_neutral">Learn More</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="With Bullet List"
<section aria-describedby="dialog-body-id-132" aria-labelledby="dialog-heading-id-1" class="slds-popover slds-popover_error slds-nubbin_bottom-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header">
    <div class="slds-media slds-media_center slds-has-flexi-truncate ">
      <div class="slds-media__figure">
        <span class="slds-icon_container slds-icon-utility-error">
          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
          </svg>
        </span>
      </div>
      <div class="slds-media__body">
        <h2 class="slds-truncate slds-text-heading_medium" id="dialog-heading-id-1" title="We hit a snag.">We hit a snag.</h2>
      </div>
    </div>
  </header>
  <div class="slds-popover__body" id="dialog-body-id-132">
    <ul class="slds-list_dotted">
      <li>Details about error #1</li>
      <li>Details about error #2</li>
      <li>Details about error #3</li>
    </ul>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center slds-grid_align-end">
      <button class="slds-button slds-button_neutral">Learn More</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Warning"
<section aria-describedby="dialog-body-id-134" aria-labelledby="dialog-heading-id-2" class="slds-popover slds-popover_warning slds-nubbin_bottom-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header">
    <div class="slds-media slds-media_center slds-has-flexi-truncate ">
      <div class="slds-media__figure">
        <span class="slds-icon_container slds-icon-utility-warning">
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
          </svg>
        </span>
      </div>
      <div class="slds-media__body">
        <h2 class="slds-truncate slds-text-heading_medium" id="dialog-heading-id-2" title="Just a heads up…">Just a heads up…</h2>
      </div>
    </div>
  </header>
  <div class="slds-popover__body slds-popover_warning__body" id="dialog-body-id-134">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      <a href="#" title="Learn More">Learn More</a>
    </p>
  </div>
</section>
:::

::: legacy-component-example title="With Footer"
<section aria-describedby="dialog-body-id-136" aria-labelledby="dialog-heading-id-2" class="slds-popover slds-popover_warning slds-nubbin_bottom-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header">
    <div class="slds-media slds-media_center slds-has-flexi-truncate ">
      <div class="slds-media__figure">
        <span class="slds-icon_container slds-icon-utility-warning">
          <svg class="slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
          </svg>
        </span>
      </div>
      <div class="slds-media__body">
        <h2 class="slds-truncate slds-text-heading_medium" id="dialog-heading-id-2" title="Just a heads up…">Just a heads up…</h2>
      </div>
    </div>
  </header>
  <div class="slds-popover__body slds-popover_warning__body" id="dialog-body-id-136">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      <a href="#" title="Learn More">Learn More</a>
    </p>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center slds-grid_align-end">
      <button class="slds-button slds-button_neutral">Learn More</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Walkthrough"
<section aria-describedby="dialog-body-id-138" aria-labelledby="dialog-heading-id-3" class="slds-popover slds-popover_dark slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header slds-p-vertical_medium">
    <h2 id="dialog-heading-id-3" class="slds-text-heading_medium">Walkthrough title</h2>
  </header>
  <div class="slds-popover__body" id="dialog-body-id-138">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <span class="slds-text-title">Step 2 of 4</span>
      <button class="slds-button slds-button_brand slds-col_bump-left">Next</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Micro Setup"
<section aria-describedby="dialog-body-id-140" aria-labelledby="dialog-heading-id-3" class="slds-popover slds-popover_dark slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header slds-p-vertical_medium">
    <h2 id="dialog-heading-id-3" class="slds-text-heading_medium">Walkthrough title</h2>
  </header>
  <div class="slds-popover__body" id="dialog-body-id-140">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <span class="slds-text-title">Step 2 of 4</span>
      <button class="slds-button slds-button_success slds-col_bump-left">Setup Email</button>
      <button class="slds-button slds-button_brand slds-col_bump-left">Next</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Micro Setup - Alternate"
<section aria-describedby="dialog-body-id-142" aria-labelledby="dialog-heading-id-3" class="slds-popover slds-popover_dark slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header slds-p-vertical_medium">
    <h2 id="dialog-heading-id-3" class="slds-text-heading_medium">Walkthrough title</h2>
  </header>
  <div class="slds-popover__body" id="dialog-body-id-142">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <span class="slds-text-title">Step 2 of 4</span>
      <button class="slds-button slds-button_inverse slds-col_bump-left">Skip</button>
      <button class="slds-button slds-button_success slds-col_bump-left">Setup Email</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Micro Setup - In Page"
<section aria-describedby="dialog-body-id-144" aria-labelledby="dialog-heading-id-3" class="slds-popover slds-popover_dark slds-nubbin_bottom" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header slds-p-vertical_medium">
    <h2 id="dialog-heading-id-3" class="slds-text-heading_medium">Walkthrough title</h2>
  </header>
  <div class="slds-popover__body" id="dialog-body-id-144">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <span class="slds-text-title">Step 2 of 4</span>
      <button class="slds-button slds-button_inverse slds-col_bump-left">Skip</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Micro Setup - Inline Form"
<section aria-describedby="dialog-body-id-146" aria-labelledby="dialog-heading-id-3" class="slds-popover slds-popover_dark slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <header class="slds-popover__header slds-p-vertical_medium">
    <h2 id="dialog-heading-id-3" class="slds-text-heading_medium">Walkthrough title</h2>
  </header>
  <div class="slds-popover__body" id="dialog-body-id-146">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="slds-form-element slds-p-top_small">
      <label class="slds-form-element__label slds-assistive-text" for="email-text-input-01">Email Address</label>
      <div class="slds-form-element__control">
        <input type="text" id="email-text-input-01" class="slds-input" placeholder="Email Address" />
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <span class="slds-text-title">Step 2 of 4</span>
      <button class="slds-button slds-button_inverse slds-col_bump-left">Skip</button>
      <button class="slds-button slds-button_brand slds-col_bump-left">Next</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Action"
<section aria-describedby="dialog-body-id-148" aria-label="Dialog Title" class="slds-popover slds-popover_dark slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-148">
    <div class="slds-media">
      <div class="slds-media__figure">
        <span class="slds-icon_container" title="description of icon when needed">
          <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#touch_action"></use>
          </svg>
          <span class="slds-assistive-text">Description of icon</span>
        </span>
      </div>
      <div class="slds-media__body">
        <p class="slds-text-heading_small">Text that describes the action</p>
        <p class="slds-m-top_medium slds-text-title">Step 3 of 4</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Action - With Heading"
<section aria-describedby="dialog-body-id-150" aria-labelledby="dialog-heading-id-3" class="slds-popover slds-popover_dark slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-150">
    <div class="slds-media">
      <div class="slds-media__figure">
        <span class="slds-icon_container" title="description of icon when needed">
          <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#touch_action"></use>
          </svg>
          <span class="slds-assistive-text">Description of icon</span>
        </span>
      </div>
      <div class="slds-media__body">
        <h2 id="dialog-heading-id-3" class="slds-text-heading_small">Action title</h2>
        <p>Text that describes the action</p>
        <p class="slds-m-top_medium slds-text-title">Step 3 of 4</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Action - With Link"
<section aria-describedby="dialog-body-id-152" aria-labelledby="dialog-heading-id-3" class="slds-popover slds-popover_dark slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-152">
    <div class="slds-media">
      <div class="slds-media__figure">
        <span class="slds-icon_container" title="description of icon when needed">
          <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#touch_action"></use>
          </svg>
          <span class="slds-assistive-text">Description of icon</span>
        </span>
      </div>
      <div class="slds-media__body">
        <h2 id="dialog-heading-id-3" class="slds-text-heading_small">Action title</h2>
        <p>Text that describes the action</p>
        <a href="#">Take Action</a>
        <p class="slds-m-top_medium slds-text-title">Step 3 of 4</p>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Feature"
<section aria-describedby="dialog-body-id-154" aria-label="Dialog Title" class="slds-popover slds-popover_dark slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-154">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__body">
            <p class="slds-text-heading_small">Shelly, it seems you frequent this record. Try favoriting it for easy access.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="With icon and text"
<section aria-describedby="dialog-body-id-156" aria-label="Dialog Title" class="slds-popover slds-popover_dark  slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-156">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container" title="description of icon when needed">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div class="slds-media__body">
            <p class="slds-text-heading_small">Shelly, it seems you frequent this record. Try favoriting it for easy access.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="With icon, header, and text"
<section aria-describedby="dialog-body-id-158" aria-labelledby="dialog-heading-id-4" class="slds-popover slds-popover_dark  slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-158">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container" title="description of icon when needed">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#description"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-4" class="slds-text-heading_small">Feature title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="With icon, header, text and link"
<section aria-describedby="dialog-body-id-160" aria-labelledby="dialog-heading-id-4" class="slds-popover slds-popover_dark  slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-160">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container" title="description of icon when needed">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#smiley_and_people"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-4" class="slds-text-heading_small">Feature title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <a href="#">Learn More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="With icon, header, text and footer"
<section aria-describedby="dialog-body-id-162" aria-labelledby="dialog-heading-id-4" class="slds-popover slds-popover_dark  slds-nubbin_left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-162">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container" title="description of icon when needed">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
              </svg>
              <span class="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-4" class="slds-text-heading_small">Feature title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-left">Learn More</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Record Preview Panel"
<section aria-labelledby="panel-heading-id" class="slds-popover slds-popover_panel slds-nubbin_left-top" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__header">
    <header class="slds-media slds-media_center slds-m-bottom_small">
      <span class="slds-icon_container slds-icon-standard-account slds-media__figure">
        <svg class="slds-icon slds-icon_small" aria-hidden="true">
          <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
        </svg>
      </span>
      <div class="slds-media__body">
        <h2 class="slds-text-heading_medium slds-hyphenate" id="panel-heading-id">
          <a href="#">Tesla Motors</a>
        </h2>
      </div>
    </header>
    <footer class="slds-grid slds-wrap slds-grid_pull-padded">
      <div class="slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small">
        <dl>
          <dt>
            <p class="slds-popover_panel__label slds-truncate" title="Billing Address">Billing Address</p>
          </dt>
          <dd>
            <p class="slds-truncate" title="3500 Deer Creek Rd.">3500 Deer Creek Rd.</p>
            <p class="slds-truncate" title="Palo Alto, CA 94304">Palo Alto, CA 94304</p>
          </dd>
        </dl>
      </div>
      <div class="slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small">
        <dl>
          <dt>
            <p class="slds-popover_panel__label slds-truncate" title="Phone">Phone</p>
          </dt>
          <dd>
            <a href="#">212-345-3485</a>
          </dd>
        </dl>
      </div>
      <div class="slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small">
        <dl>
          <dt>
            <p class="slds-popover_panel__label slds-truncate" title="Website">Website</p>
          </dt>
          <dd>
            <a href="#">teslamotors.com</a>
          </dd>
        </dl>
      </div>
      <div class="slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small">
        <dl>
          <dt>
            <p class="slds-popover_panel__label slds-truncate" title="Account Owner">Account Owner</p>
          </dt>
          <dd>
            <a href="#">Jeff Maguire</a>
          </dd>
        </dl>
      </div>
    </footer>
  </div>
  <div class="slds-popover__body">
    <dl class="slds-popover__body-list">
      <dt class="slds-m-bottom_small">
        <div class="slds-media slds-media_center">
          <div class="slds-media__figure">
            <span class="slds-icon_container slds-icon-standard-opportunity">
              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
              </svg>
              <span class="slds-assistive-text">Opportunities</span>
            </span>
          </div>
          <div class="slds-media__body">
            <p class="slds-text-heading_small slds-hyphenate">Opportunities (2+)</p>
          </div>
        </div>
      </dt>
      <dd class="slds-m-top_x-small">
        <p class="slds-truncate" title="Tesla - Mule ESB">
          <a href="#">Tesla - Mule ESB</a>
        </p>
        <dl class="slds-list_horizontal slds-wrap slds-text-body_small">
          <dt class="slds-item_label slds-text-color_weak slds-truncate" title="Value">Value</dt>
          <dd class="slds-item_detail slds-text-color_weak slds-truncate" title="$500,000">$500,000</dd>
          <dt class="slds-item_label slds-text-color_weak slds-truncate" title="Close Date">Close Date</dt>
          <dd class="slds-item_detail slds-text-color_weak slds-truncate" title="Dec 15, 2015">Dec 15, 2015</dd>
        </dl>
      </dd>
      <dd class="slds-m-top_x-small">
        <p class="slds-truncate" title="Tesla - Anypoint Studios">
          <a href="#">Tesla - Anypoint Studios</a>
        </p>
        <dl class="slds-list_horizontal slds-wrap slds-text-body_small">
          <dt class="slds-item_label slds-text-color_weak slds-truncate" title="Value">Value</dt>
          <dd class="slds-item_detail slds-text-color_weak slds-truncate" title="$60,000">$60,000</dd>
          <dt class="slds-item_label slds-text-color_weak slds-truncate" title="Close Date">Close Date</dt>
          <dd class="slds-item_detail slds-text-color_weak slds-truncate" title="Jan 15, 2016">Jan 15, 2016</dd>
        </dl>
      </dd>
      <dd class="slds-m-top_x-small slds-text-align_right">
        <a href="#" title="View all Opportunities">View All</a>
      </dd>
    </dl>
    <dl class="slds-popover__body-list">
      <dt class="slds-m-bottom_small">
        <div class="slds-media slds-media_center">
          <div class="slds-media__figure">
            <span class="slds-icon_container slds-icon-standard-case">
              <svg class="slds-icon slds-icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#case"></use>
              </svg>
              <span class="slds-assistive-text">Cases</span>
            </span>
          </div>
          <div class="slds-media__body">
            <p class="slds-text-heading_small slds-hyphenate">Cases (1)</p>
          </div>
        </div>
      </dt>
      <dd class="slds-m-top_x-small">
        <p class="slds-truncate" title="Tesla - Anypoint Studios">
          <a href="#">Tesla - Anypoint Studios</a>
        </p>
        <dl class="slds-list_horizontal slds-wrap slds-text-body_small">
          <dt class="slds-item_label slds-text-color_weak slds-truncate" title="Value">Value</dt>
          <dd class="slds-item_detail slds-text-color_weak slds-truncate" title="$60,000">$60,000</dd>
          <dt class="slds-item_label slds-text-color_weak slds-truncate" title="Close Date">Close Date</dt>
          <dd class="slds-item_detail slds-text-color_weak slds-truncate" title="Jan 15, 2016">Jan 15, 2016</dd>
        </dl>
      </dd>
      <dd class="slds-m-top_x-small slds-text-align_right">
        <a href="#" title="View all Opportunities">View All</a>
      </dd>
    </dl>
  </div>
</section>
:::

::: legacy-component-example title="Prompt"
<section aria-describedby="dialog-body-id-164" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-164">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
:::

::: legacy-component-example title="Positioned top left"
<section aria-describedby="dialog-body-id-166" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt slds-popover_prompt_top-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-166">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-right">Dismiss</button>
      <span class="slds-popover_prompt__action-link">
        <a href="#" class="slds-button">Learn More</a>
      </span>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Positioned top center"
<section aria-describedby="dialog-body-id-168" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt slds-popover_prompt_top" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-168">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-right">Dismiss</button>
      <span class="slds-popover_prompt__action-link">
        <a href="#" class="slds-button">Learn More</a>
      </span>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Positioned top right"
<section aria-describedby="dialog-body-id-170" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt slds-popover_prompt_top-right" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-170">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-right">Dismiss</button>
      <span class="slds-popover_prompt__action-link">
        <a href="#" class="slds-button">Learn More</a>
      </span>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Positioned bottom right"
<section aria-describedby="dialog-body-id-172" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt slds-popover_prompt_bottom-right" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-172">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-right">Dismiss</button>
      <span class="slds-popover_prompt__action-link">
        <a href="#" class="slds-button">Learn More</a>
      </span>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Positioned bottom center"
<section aria-describedby="dialog-body-id-174" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt slds-popover_prompt_bottom" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-174">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-right">Dismiss</button>
      <span class="slds-popover_prompt__action-link">
        <a href="#" class="slds-button">Learn More</a>
      </span>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="Positioned bottom left"
<section aria-describedby="dialog-body-id-176" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt slds-popover_prompt_bottom-left" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-176">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-right">Dismiss</button>
      <span class="slds-popover_prompt__action-link">
        <a href="#" class="slds-button">Learn More</a>
      </span>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="With brand color and footer"
<section aria-describedby="dialog-body-id-178" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt slds-popover_prompt_top slds-popover_brand" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-178">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default slds-popover__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="slds-popover__footer">
    <div class="slds-grid slds-grid_vertical-align-center">
      <button class="slds-button slds-button_neutral slds-col_bump-right">Dismiss</button>
      <span class="slds-popover_prompt__action-link">
        <a href="#" class="slds-button">Learn More</a>
      </span>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </footer>
</section>
:::

::: legacy-component-example title="With brand color - no footer"
<section aria-describedby="dialog-body-id-180" aria-labelledby="dialog-heading-id-5" class="slds-popover slds-popover_prompt slds-popover_prompt_top slds-popover_brand slds-popover_brand-bottom" role="dialog">
  <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close" title="Close dialog">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close dialog</span>
  </button>
  <div class="slds-popover__body" id="dialog-body-id-180">
    <div class="slds-media">
      <div class="slds-media__body">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container">
              <svg class="slds-icon slds-icon_small slds-icon-text-default slds-popover__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#prompt"></use>
              </svg>
              <span class="slds-assistive-text"></span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 id="dialog-heading-id-5" class="slds-popover_prompt__heading">Prompt title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
:::
