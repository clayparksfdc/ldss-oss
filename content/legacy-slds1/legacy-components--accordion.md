---
title: Accordion
---

SLDS 1 blueprint examples for **Accordion**.

::: legacy-component-example title="Default"
<ul class="slds-accordion">
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section slds-is-open">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-45" aria-expanded="true" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
      </div>
      <div class="slds-accordion__content" id="referenceId-45">Accordion details - A</div>
    </section>
  </li>
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-46" aria-expanded="false" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
      </div>
      <div hidden="" class="slds-accordion__content" id="referenceId-46">Accordion details - B</div>
    </section>
  </li>
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-47" aria-expanded="false" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
      </div>
      <div hidden="" class="slds-accordion__content" id="referenceId-47">Accordion details - C</div>
    </section>
  </li>
</ul>
:::

::: legacy-component-example title="With Action Overflow Menu"
<ul class="slds-accordion">
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section slds-is-open">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-24" aria-expanded="true" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
        <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="Show More">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">Show More</span>
          </button>
          <div class="slds-dropdown slds-dropdown_actions slds-dropdown_right">
            <ul class="slds-dropdown__list" role="menu">
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="0">
                  <span title="Action One">Action One</span>
                </a>
              </li>
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="-1">
                  <span title="Action Two">Action Two</span>
                </a>
              </li>
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="-1">
                  <span title="Action Three">Action Three</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="slds-accordion__content" id="referenceId-24">Accordion details - A</div>
    </section>
  </li>
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-25" aria-expanded="false" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
        <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="Show More">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">Show More</span>
          </button>
          <div class="slds-dropdown slds-dropdown_actions slds-dropdown_right">
            <ul class="slds-dropdown__list" role="menu">
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="0">
                  <span title="Action One">Action One</span>
                </a>
              </li>
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="-1">
                  <span title="Action Two">Action Two</span>
                </a>
              </li>
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="-1">
                  <span title="Action Three">Action Three</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div hidden="" class="slds-accordion__content" id="referenceId-25">Accordion details - B</div>
    </section>
  </li>
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-26" aria-expanded="false" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
        <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="Show More">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">Show More</span>
          </button>
          <div class="slds-dropdown slds-dropdown_actions slds-dropdown_right">
            <ul class="slds-dropdown__list" role="menu">
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="0">
                  <span title="Action One">Action One</span>
                </a>
              </li>
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="-1">
                  <span title="Action Two">Action Two</span>
                </a>
              </li>
              <li class="slds-dropdown__item" role="presentation">
                <a href="#" role="menuitem" tabindex="-1">
                  <span title="Action Three">Action Three</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div hidden="" class="slds-accordion__content" id="referenceId-26">Accordion details - C</div>
    </section>
  </li>
</ul>
:::

::: legacy-component-example title="In a Card"
<div class="slds-card">
  <ul class="slds-accordion">
    <li class="slds-accordion__list-item">
      <section class="slds-accordion__section slds-is-open">
        <div class="slds-accordion__summary">
          <h2 class="slds-accordion__summary-heading">
            <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-21" aria-expanded="true" title="Accordion summary">
              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
              </svg>
              <span class="slds-accordion__summary-content">Accordion summary</span>
            </button>
          </h2>
        </div>
        <div class="slds-accordion__content" id="referenceId-21">Accordion details - A</div>
      </section>
    </li>
    <li class="slds-accordion__list-item">
      <section class="slds-accordion__section">
        <div class="slds-accordion__summary">
          <h2 class="slds-accordion__summary-heading">
            <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-22" aria-expanded="false" title="Accordion summary">
              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
              </svg>
              <span class="slds-accordion__summary-content">Accordion summary</span>
            </button>
          </h2>
        </div>
        <div hidden="" class="slds-accordion__content" id="referenceId-22">Accordion details - B</div>
      </section>
    </li>
    <li class="slds-accordion__list-item">
      <section class="slds-accordion__section">
        <div class="slds-accordion__summary">
          <h2 class="slds-accordion__summary-heading">
            <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-23" aria-expanded="false" title="Accordion summary">
              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
              </svg>
              <span class="slds-accordion__summary-content">Accordion summary</span>
            </button>
          </h2>
        </div>
        <div hidden="" class="slds-accordion__content" id="referenceId-23">Accordion details - C</div>
      </section>
    </li>
  </ul>
</div>
:::

::: legacy-component-example title="Nested"
<ul class="slds-accordion">
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section slds-is-open">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-16" aria-expanded="true" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
      </div>
      <div class="slds-accordion__content" id="referenceId-16">
        <ul class="slds-accordion">
          <li class="slds-accordion__list-item">
            <section class="slds-accordion__section slds-is-open">
              <div class="slds-accordion__summary">
                <h2 class="slds-accordion__summary-heading">
                  <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-17" aria-expanded="true" title="Nested accordion summary">
                    <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                    </svg>
                    <span class="slds-accordion__summary-content">Nested accordion summary</span>
                  </button>
                </h2>
              </div>
              <div class="slds-accordion__content" id="referenceId-17">Accordion details - A</div>
            </section>
          </li>
          <li class="slds-accordion__list-item">
            <section class="slds-accordion__section">
              <div class="slds-accordion__summary">
                <h2 class="slds-accordion__summary-heading">
                  <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-18" aria-expanded="false" title="Nested accordion summary">
                    <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                    </svg>
                    <span class="slds-accordion__summary-content">Nested accordion summary</span>
                  </button>
                </h2>
              </div>
              <div hidden="" class="slds-accordion__content" id="referenceId-18">Accordion details - B</div>
            </section>
          </li>
        </ul>
      </div>
    </section>
  </li>
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-19" aria-expanded="false" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
      </div>
      <div hidden="" class="slds-accordion__content" id="referenceId-19">Accordion details - B</div>
    </section>
  </li>
  <li class="slds-accordion__list-item">
    <section class="slds-accordion__section">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-20" aria-expanded="false" title="Accordion summary">
            <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-accordion__summary-content">Accordion summary</span>
          </button>
        </h2>
      </div>
      <div hidden="" class="slds-accordion__content" id="referenceId-20">Accordion details - C</div>
    </section>
  </li>
</ul>
:::

::: legacy-component-example title="Heading with Truncation"
<article class="slds-card">
  <ul class="slds-accordion">
    <li class="slds-accordion__list-item">
      <section class="slds-accordion__section slds-is-open">
        <div class="slds-accordion__summary">
          <h2 class="slds-accordion__summary-heading">
            <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-13" aria-expanded="true" title="Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary">
              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
              </svg>
              <span class="slds-accordion__summary-content">Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary</span>
            </button>
          </h2>
        </div>
        <div class="slds-accordion__content" id="referenceId-13">Accordion details - A</div>
      </section>
    </li>
    <li class="slds-accordion__list-item">
      <section class="slds-accordion__section">
        <div class="slds-accordion__summary">
          <h2 class="slds-accordion__summary-heading">
            <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-14" aria-expanded="false" title="Accordion summary">
              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
              </svg>
              <span class="slds-accordion__summary-content">Accordion summary</span>
            </button>
          </h2>
        </div>
        <div hidden="" class="slds-accordion__content" id="referenceId-14">Accordion details - B</div>
      </section>
    </li>
    <li class="slds-accordion__list-item">
      <section class="slds-accordion__section">
        <div class="slds-accordion__summary">
          <h2 class="slds-accordion__summary-heading">
            <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-15" aria-expanded="false" title="Accordion summary">
              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
              </svg>
              <span class="slds-accordion__summary-content">Accordion summary</span>
            </button>
          </h2>
        </div>
        <div hidden="" class="slds-accordion__content" id="referenceId-15">Accordion details - C</div>
      </section>
    </li>
  </ul>
</article>
:::
