---
title: Buttons
---

SLDS 1 blueprint examples for **Buttons**.

::: legacy-component-example title="Example 1"
<button class="slds-button">Button</button>
<button class="slds-button slds-button_neutral">Neutral Button</button>
<button class="slds-button slds-button_brand">Brand Button</button>
<button class="slds-button slds-button_outline-brand">Outline Brand Button</button>
<button class="slds-button slds-button_destructive">Destructive Button</button>
<button class="slds-button slds-button_text-destructive">Text Destructive Button</button>
<button class="slds-button slds-button_success">Success Button</button>
:::

::: legacy-component-example title="Accessibility"
<a class="slds-button" href="#">Base Link</a>
<a class="slds-button slds-button_neutral" href="#">Neutral Link</a>
<a class="slds-button slds-button_brand" href="#">Brand Link</a>
<a class="slds-button slds-button_outline-brand" href="#">Outline Brand Link</a>
<a class="slds-button slds-button_destructive" href="#">Destructive Link</a>
<a class="slds-button slds-button_text-destructive" href="#">Text Destructive Link</a>
<a class="slds-button slds-button_success" href="#">Success Link</a>
:::

::: legacy-component-example title="Base"
<button class="slds-button">Button</button>
:::

::: legacy-component-example title="Neutral"
<button class="slds-button slds-button_neutral">Neutral Button</button>
:::

::: legacy-component-example title="Brand"
<button class="slds-button slds-button_brand">Brand Button</button>
:::

::: legacy-component-example title="Outline Brand"
<button class="slds-button slds-button_outline-brand">Outline Brand Button</button>
:::

::: legacy-component-example title="Inverse"
<div style="background-color:#16325c;padding:0.5rem">
  <button class="slds-button slds-button_inverse">Inverse Button</button>
</div>
:::

::: legacy-component-example title="Destructive"
<button class="slds-button slds-button_destructive">Destructive Button</button>
:::

::: legacy-component-example title="Text Destructive"
<button class="slds-button slds-button_text-destructive">Text Destructive Button</button>
:::

::: legacy-component-example title="Success"
<button class="slds-button slds-button_success">Success Button</button>
:::

::: legacy-component-example title="Disabled"
<button class="slds-button" disabled="">Button</button>
<button class="slds-button slds-button_neutral" disabled="">Neutral Button</button>
<button class="slds-button slds-button_brand" disabled="">Brand Button</button>
<button class="slds-button slds-button_outline-brand" disabled="">Outline Brand Button</button>
<button class="slds-button slds-button_destructive" disabled="">Destructive Button</button>
<button class="slds-button slds-button_text-destructive" disabled="">Text Destructive Button</button>
<button class="slds-button slds-button_success" disabled="">Success Button</button>
:::

::: legacy-component-example title="Left Icon"
<button class="slds-button slds-button_neutral">
  <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#download"></use>
  </svg>Button Neutral</button>
:::

::: legacy-component-example title="Right Icon"
<button class="slds-button slds-button_neutral">Button Neutral
  <svg class="slds-button__icon slds-button__icon_right" aria-hidden="true">
    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#download"></use>
  </svg>
</button>
:::

::: legacy-component-example title="Not Selected"
<button class="slds-button slds-button_neutral slds-button_stateful slds-not-selected" aria-live="assertive" aria-pressed="false">
  <span class="slds-text-not-selected">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
    </svg>Follow</span>
  <span class="slds-text-selected">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
    </svg>Following</span>
  <span class="slds-text-selected-focus">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>Unfollow</span>
</button>
:::

::: legacy-component-example title="Selected and Focused"
<button class="slds-button slds-button_neutral slds-button_stateful slds-is-selected-clicked" aria-live="assertive" aria-pressed="true">
  <span class="slds-text-not-selected">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
    </svg>Follow</span>
  <span class="slds-text-selected">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
    </svg>Following</span>
  <span class="slds-text-selected-focus">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>Unfollow</span>
</button>
:::

::: legacy-component-example title="Selected with Hover State"
<button class="slds-button slds-button_neutral slds-button_stateful slds-is-selected" aria-live="assertive" aria-pressed="true">
  <span class="slds-text-not-selected">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
    </svg>Follow</span>
  <span class="slds-text-selected">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
    </svg>Following</span>
  <span class="slds-text-selected-focus">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>Unfollow</span>
</button>
:::

::: legacy-component-example title="Not Pressed"
<button class="slds-button slds-button_neutral slds-button_dual-stateful" aria-live="assertive" aria-pressed="false">
  <span class="slds-text-not-pressed">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
    </svg>Follow</span>
  <span class="slds-text-pressed">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
    </svg>Following</span>
</button>
:::

::: legacy-component-example title="Pressed"
<button class="slds-button slds-button_neutral slds-button_dual-stateful slds-is-pressed" aria-live="assertive" aria-pressed="true">
  <span class="slds-text-not-pressed">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
    </svg>Follow</span>
  <span class="slds-text-pressed">
    <svg class="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
    </svg>Following</span>
</button>
:::

::: legacy-component-example title="Stretch"
<button class="slds-button slds-button_neutral slds-button_stretch">Stretched Neutral Button</button>
:::

::: legacy-component-example title="Full Width"
<button class="slds-button slds-button_neutral slds-button_full-width">Full Width Neutral Button</button>
:::
