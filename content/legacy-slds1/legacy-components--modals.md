---
title: Modals
---

SLDS 1 blueprint examples for **Modals**.

::: legacy-component-example title="Base"
<section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal slds-fade-in-open">
  <div class="slds-modal__container">
    <button class="slds-button slds-button_icon slds-modal__close">
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div class="slds-modal__header">
      <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate" tabindex="-1">Modal header</h1>
    </div>
    <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
    </div>
    <div class="slds-modal__footer">
      <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
:::

::: legacy-component-example title="Taglines"
<section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal slds-fade-in-open">
  <div class="slds-modal__container">
    <button class="slds-button slds-button_icon slds-modal__close">
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div class="slds-modal__header">
      <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate" tabindex="-1">Modal header</h1>
      <p class="slds-m-top_x-small">Here’s a tagline if you need it. It is allowed to extend across mulitple lines, so I’m making up content to show that to you. It is allowed to
        <a href="#">contain links or be a link</a>.</p>
    </div>
    <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
    </div>
    <div class="slds-modal__footer">
      <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
:::

::: legacy-component-example title="Headless"
<section role="dialog" tabindex="-1" aria-modal="true" aria-label="Meaningful description of the modal content" class="slds-modal slds-fade-in-open">
  <div class="slds-modal__container">
    <button class="slds-button slds-button_icon slds-modal__close">
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div class="slds-modal__content slds-p-around_medium slds-modal__content_headless" id="modal-content-id-1">
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
    </div>
    <div class="slds-modal__footer">
      <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
:::

::: legacy-component-example title="Footless"
<section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal slds-fade-in-open">
  <div class="slds-modal__container">
    <button class="slds-button slds-button_icon slds-modal__close">
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div class="slds-modal__header">
      <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate" tabindex="-1">Modal header</h1>
    </div>
    <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
:::

::: legacy-component-example title="Directional"
<section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal slds-fade-in-open">
  <div class="slds-modal__container">
    <button class="slds-button slds-button_icon slds-modal__close">
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div class="slds-modal__header">
      <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate" tabindex="-1">Modal header</h1>
    </div>
    <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
    </div>
    <div class="slds-modal__footer slds-modal__footer_directional">
      <button class="slds-button slds-button_neutral">Skip This Step</button>
      <button class="slds-button slds-button_brand">Save &amp; Next</button>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
:::

::: legacy-component-example title="Small"
<section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal slds-fade-in-open slds-modal_small">
  <div class="slds-modal__container">
    <button class="slds-button slds-button_icon slds-modal__close">
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div class="slds-modal__header">
      <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate" tabindex="-1">Modal header</h1>
    </div>
    <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      <br/>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      <br/>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
    </div>
    <div class="slds-modal__footer">
      <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
:::

::: legacy-component-example title="Medium"
<section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal slds-fade-in-open slds-modal_medium">
  <div class="slds-modal__container">
    <button class="slds-button slds-button_icon slds-modal__close">
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div class="slds-modal__header">
      <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate" tabindex="-1">Modal header</h1>
    </div>
    <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      <br/>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      <br/>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
    </div>
    <div class="slds-modal__footer">
      <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
:::

::: legacy-component-example title="Large"
<section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal slds-fade-in-open slds-modal_large">
  <div class="slds-modal__container">
    <button class="slds-button slds-button_icon slds-modal__close">
      <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
      <span class="slds-assistive-text">Cancel and close</span>
    </button>
    <div class="slds-modal__header">
      <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate" tabindex="-1">Modal header</h1>
    </div>
    <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      <br/>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      <br/>
      <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
        aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
      <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
        ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
    </div>
    <div class="slds-modal__footer">
      <button class="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
      <button class="slds-button slds-button_brand">Save</button>
    </div>
  </div>
</section>
<div class="slds-backdrop slds-backdrop_open" role="presentation"></div>
:::
