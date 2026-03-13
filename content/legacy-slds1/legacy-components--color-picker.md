---
title: Color Picker
---

SLDS 1 blueprint examples for **Color Picker**.

::: legacy-component-example title="Base"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-33" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-hide" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-33">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-tabs_default">
            <ul class="slds-tabs_default__nav" role="tablist">
              <li class="slds-tabs_default__item slds-is-active" title="Default" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="color-picker-default" id="color-picker-default__item">Default</a>
              </li>
              <li class="slds-tabs_default__item" title="Custom" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="color-picker-custom" id="color-picker-custom__item">Custom</a>
              </li>
            </ul>
            <div id="color-picker-default" class="slds-tabs_default__content slds-show" role="tabpanel" aria-labelledby="color-picker-default__item">
              <ul class="slds-color-picker__swatches" role="listbox" aria-label="Preset colors">
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
                    <span class="slds-swatch" style="background:#e3abec">
                      <span class="slds-assistive-text">#e3abec</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#c2dbf7">
                      <span class="slds-assistive-text">#c2dbf7</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9fd6ff">
                      <span class="slds-assistive-text">#9fd6ff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9de7da">
                      <span class="slds-assistive-text">#9de7da</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9df0c0">
                      <span class="slds-assistive-text">#9df0c0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fff099">
                      <span class="slds-assistive-text">#fff099</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fed49a">
                      <span class="slds-assistive-text">#fed49a</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#d073e0">
                      <span class="slds-assistive-text">#d073e0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#86baf3">
                      <span class="slds-assistive-text">#86baf3</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#44d8be">
                      <span class="slds-assistive-text">#44d8be</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3be282">
                      <span class="slds-assistive-text">#3be282</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffe654">
                      <span class="slds-assistive-text">#ffe654</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffb758">
                      <span class="slds-assistive-text">#ffb758</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#bd35bd">
                      <span class="slds-assistive-text">#bd35bd</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5779c1">
                      <span class="slds-assistive-text">#5779c1</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#00aea9">
                      <span class="slds-assistive-text">#00aea9</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3cba4c">
                      <span class="slds-assistive-text">#3cba4c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f5bc25">
                      <span class="slds-assistive-text">#f5bc25</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f99221">
                      <span class="slds-assistive-text">#f99221</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#580d8c">
                      <span class="slds-assistive-text">#580d8c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#001970">
                      <span class="slds-assistive-text">#001970</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0a2399">
                      <span class="slds-assistive-text">#0a2399</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b7477">
                      <span class="slds-assistive-text">#0b7477</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b6b50">
                      <span class="slds-assistive-text">#0b6b50</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b67e11">
                      <span class="slds-assistive-text">#b67e11</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b85d0d">
                      <span class="slds-assistive-text">#b85d0d</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div id="color-picker-custom" class="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="color-picker-custom__item">
              <div class="slds-color-picker__custom">
                <p id="color-picker-instructions" class="slds-assistive-text">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>
                <div class="slds-color-picker__custom-range" style="background:hsl(220, 100%, 50%)">
                  <button class="slds-color-picker__range-indicator" style="bottom:45%;left:46%" aria-live="assertive" aria-atomic="true" aria-describedby="color-picker-instructions">
                    <span class="slds-assistive-text">hex #5679C0</span>
                  </button>
                </div>
                <div class="slds-color-picker__hue-and-preview">
                  <label class="slds-assistive-text" for="color-picker-input-range-27">Select Hue</label>
                  <input type="range" class="slds-color-picker__hue-slider" min="0" max="360" id="color-picker-input-range-27" value="208" />
                  <span class="slds-swatch" style="background:#5679C0">
                    <span class="slds-assistive-text" aria-hidden="true">#5679C0</span>
                  </span>
                </div>
                <div class="slds-color-picker__custom-inputs">
                  <div class="slds-form-element slds-color-picker__input-custom-hex">
                    <label class="slds-form-element__label" for="color-picker-input-hex-27">Hex</label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-hex-27" class="slds-input" value="#5679C0" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-r-27">
                      <abbr title="Red">R</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-r-27" class="slds-input" value="86" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-g-27">
                      <abbr title="Green">G</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-g-27" class="slds-input" value="121" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-b-27">
                      <abbr title="blue">B</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-b-27" class="slds-input" value="192" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Summary Error"
<div class="slds-color-picker">
  <div class="slds-form-element slds-has-error slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" aria-describedby="color-picker-summary-error" class="slds-input" aria-invalid="true" value="#5679C0" />
      </div>
      <p class="slds-form-error" id="color-picker-summary-error">Please ensure value is correct</p>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-35" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-hide" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-35">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-tabs_default">
            <ul class="slds-tabs_default__nav" role="tablist">
              <li class="slds-tabs_default__item slds-is-active" title="Default" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="color-picker-default" id="color-picker-default__item">Default</a>
              </li>
              <li class="slds-tabs_default__item" title="Custom" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="color-picker-custom" id="color-picker-custom__item">Custom</a>
              </li>
            </ul>
            <div id="color-picker-default" class="slds-tabs_default__content slds-show" role="tabpanel" aria-labelledby="color-picker-default__item">
              <ul class="slds-color-picker__swatches" role="listbox" aria-label="Preset colors">
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
                    <span class="slds-swatch" style="background:#e3abec">
                      <span class="slds-assistive-text">#e3abec</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#c2dbf7">
                      <span class="slds-assistive-text">#c2dbf7</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9fd6ff">
                      <span class="slds-assistive-text">#9fd6ff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9de7da">
                      <span class="slds-assistive-text">#9de7da</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9df0c0">
                      <span class="slds-assistive-text">#9df0c0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fff099">
                      <span class="slds-assistive-text">#fff099</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fed49a">
                      <span class="slds-assistive-text">#fed49a</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#d073e0">
                      <span class="slds-assistive-text">#d073e0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#86baf3">
                      <span class="slds-assistive-text">#86baf3</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#44d8be">
                      <span class="slds-assistive-text">#44d8be</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3be282">
                      <span class="slds-assistive-text">#3be282</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffe654">
                      <span class="slds-assistive-text">#ffe654</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffb758">
                      <span class="slds-assistive-text">#ffb758</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#bd35bd">
                      <span class="slds-assistive-text">#bd35bd</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5779c1">
                      <span class="slds-assistive-text">#5779c1</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#00aea9">
                      <span class="slds-assistive-text">#00aea9</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3cba4c">
                      <span class="slds-assistive-text">#3cba4c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f5bc25">
                      <span class="slds-assistive-text">#f5bc25</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f99221">
                      <span class="slds-assistive-text">#f99221</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#580d8c">
                      <span class="slds-assistive-text">#580d8c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#001970">
                      <span class="slds-assistive-text">#001970</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0a2399">
                      <span class="slds-assistive-text">#0a2399</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b7477">
                      <span class="slds-assistive-text">#0b7477</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b6b50">
                      <span class="slds-assistive-text">#0b6b50</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b67e11">
                      <span class="slds-assistive-text">#b67e11</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b85d0d">
                      <span class="slds-assistive-text">#b85d0d</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div id="color-picker-custom" class="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="color-picker-custom__item">
              <div class="slds-color-picker__custom">
                <p id="color-picker-instructions" class="slds-assistive-text">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>
                <div class="slds-color-picker__custom-range" style="background:hsl(220, 100%, 50%)">
                  <button class="slds-color-picker__range-indicator" style="bottom:45%;left:46%" aria-live="assertive" aria-atomic="true" aria-describedby="color-picker-instructions">
                    <span class="slds-assistive-text">hex #5679C0</span>
                  </button>
                </div>
                <div class="slds-color-picker__hue-and-preview">
                  <label class="slds-assistive-text" for="color-picker-input-range-29">Select Hue</label>
                  <input type="range" class="slds-color-picker__hue-slider" min="0" max="360" id="color-picker-input-range-29" value="208" />
                  <span class="slds-swatch" style="background:#5679C0">
                    <span class="slds-assistive-text" aria-hidden="true">#5679C0</span>
                  </span>
                </div>
                <div class="slds-color-picker__custom-inputs">
                  <div class="slds-form-element slds-color-picker__input-custom-hex">
                    <label class="slds-form-element__label" for="color-picker-input-hex-29">Hex</label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-hex-29" class="slds-input" value="#5679C0" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-r-29">
                      <abbr title="Red">R</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-r-29" class="slds-input" value="86" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-g-29">
                      <abbr title="Green">G</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-g-29" class="slds-input" value="121" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-b-29">
                      <abbr title="blue">B</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-b-29" class="slds-input" value="192" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Open, default tab selected"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-37" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-show" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-37">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-tabs_default">
            <ul class="slds-tabs_default__nav" role="tablist">
              <li class="slds-tabs_default__item slds-is-active" title="Default" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="color-picker-default" id="color-picker-default__item">Default</a>
              </li>
              <li class="slds-tabs_default__item" title="Custom" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="color-picker-custom" id="color-picker-custom__item">Custom</a>
              </li>
            </ul>
            <div id="color-picker-default" class="slds-tabs_default__content slds-show" role="tabpanel" aria-labelledby="color-picker-default__item">
              <ul class="slds-color-picker__swatches" role="listbox" aria-label="Preset colors">
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
                    <span class="slds-swatch" style="background:#e3abec">
                      <span class="slds-assistive-text">#e3abec</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#c2dbf7">
                      <span class="slds-assistive-text">#c2dbf7</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9fd6ff">
                      <span class="slds-assistive-text">#9fd6ff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9de7da">
                      <span class="slds-assistive-text">#9de7da</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9df0c0">
                      <span class="slds-assistive-text">#9df0c0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fff099">
                      <span class="slds-assistive-text">#fff099</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fed49a">
                      <span class="slds-assistive-text">#fed49a</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#d073e0">
                      <span class="slds-assistive-text">#d073e0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#86baf3">
                      <span class="slds-assistive-text">#86baf3</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#44d8be">
                      <span class="slds-assistive-text">#44d8be</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3be282">
                      <span class="slds-assistive-text">#3be282</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffe654">
                      <span class="slds-assistive-text">#ffe654</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffb758">
                      <span class="slds-assistive-text">#ffb758</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#bd35bd">
                      <span class="slds-assistive-text">#bd35bd</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5779c1">
                      <span class="slds-assistive-text">#5779c1</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#00aea9">
                      <span class="slds-assistive-text">#00aea9</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3cba4c">
                      <span class="slds-assistive-text">#3cba4c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f5bc25">
                      <span class="slds-assistive-text">#f5bc25</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f99221">
                      <span class="slds-assistive-text">#f99221</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#580d8c">
                      <span class="slds-assistive-text">#580d8c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#001970">
                      <span class="slds-assistive-text">#001970</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0a2399">
                      <span class="slds-assistive-text">#0a2399</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b7477">
                      <span class="slds-assistive-text">#0b7477</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b6b50">
                      <span class="slds-assistive-text">#0b6b50</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b67e11">
                      <span class="slds-assistive-text">#b67e11</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b85d0d">
                      <span class="slds-assistive-text">#b85d0d</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div id="color-picker-custom" class="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="color-picker-custom__item">
              <div class="slds-color-picker__custom">
                <p id="color-picker-instructions" class="slds-assistive-text">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>
                <div class="slds-color-picker__custom-range" style="background:hsl(220, 100%, 50%)">
                  <button class="slds-color-picker__range-indicator" style="bottom:45%;left:46%" aria-live="assertive" aria-atomic="true" aria-describedby="color-picker-instructions">
                    <span class="slds-assistive-text">hex #5679C0</span>
                  </button>
                </div>
                <div class="slds-color-picker__hue-and-preview">
                  <label class="slds-assistive-text" for="color-picker-input-range-31">Select Hue</label>
                  <input type="range" class="slds-color-picker__hue-slider" min="0" max="360" id="color-picker-input-range-31" value="208" />
                  <span class="slds-swatch" style="background:#5679C0">
                    <span class="slds-assistive-text" aria-hidden="true">#5679C0</span>
                  </span>
                </div>
                <div class="slds-color-picker__custom-inputs">
                  <div class="slds-form-element slds-color-picker__input-custom-hex">
                    <label class="slds-form-element__label" for="color-picker-input-hex-31">Hex</label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-hex-31" class="slds-input" value="#5679C0" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-r-31">
                      <abbr title="Red">R</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-r-31" class="slds-input" value="86" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-g-31">
                      <abbr title="Green">G</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-g-31" class="slds-input" value="121" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-b-31">
                      <abbr title="blue">B</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-b-31" class="slds-input" value="192" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Open, custom tab selected"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-39" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-show" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-39">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-tabs_default">
            <ul class="slds-tabs_default__nav" role="tablist">
              <li class="slds-tabs_default__item" title="Default" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="color-picker-default" id="color-picker-default__item">Default</a>
              </li>
              <li class="slds-tabs_default__item slds-is-active" title="Custom" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="color-picker-custom" id="color-picker-custom__item">Custom</a>
              </li>
            </ul>
            <div id="color-picker-default" class="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="color-picker-default__item">
              <ul class="slds-color-picker__swatches" role="listbox" aria-label="Preset colors">
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
                    <span class="slds-swatch" style="background:#e3abec">
                      <span class="slds-assistive-text">#e3abec</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#c2dbf7">
                      <span class="slds-assistive-text">#c2dbf7</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9fd6ff">
                      <span class="slds-assistive-text">#9fd6ff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9de7da">
                      <span class="slds-assistive-text">#9de7da</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9df0c0">
                      <span class="slds-assistive-text">#9df0c0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fff099">
                      <span class="slds-assistive-text">#fff099</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fed49a">
                      <span class="slds-assistive-text">#fed49a</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#d073e0">
                      <span class="slds-assistive-text">#d073e0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#86baf3">
                      <span class="slds-assistive-text">#86baf3</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#44d8be">
                      <span class="slds-assistive-text">#44d8be</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3be282">
                      <span class="slds-assistive-text">#3be282</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffe654">
                      <span class="slds-assistive-text">#ffe654</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffb758">
                      <span class="slds-assistive-text">#ffb758</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#bd35bd">
                      <span class="slds-assistive-text">#bd35bd</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5779c1">
                      <span class="slds-assistive-text">#5779c1</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#00aea9">
                      <span class="slds-assistive-text">#00aea9</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3cba4c">
                      <span class="slds-assistive-text">#3cba4c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f5bc25">
                      <span class="slds-assistive-text">#f5bc25</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f99221">
                      <span class="slds-assistive-text">#f99221</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#580d8c">
                      <span class="slds-assistive-text">#580d8c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#001970">
                      <span class="slds-assistive-text">#001970</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0a2399">
                      <span class="slds-assistive-text">#0a2399</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b7477">
                      <span class="slds-assistive-text">#0b7477</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b6b50">
                      <span class="slds-assistive-text">#0b6b50</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b67e11">
                      <span class="slds-assistive-text">#b67e11</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b85d0d">
                      <span class="slds-assistive-text">#b85d0d</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div id="color-picker-custom" class="slds-tabs_default__content slds-show" role="tabpanel" aria-labelledby="color-picker-custom__item">
              <div class="slds-color-picker__custom">
                <p id="color-picker-instructions" class="slds-assistive-text">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>
                <div class="slds-color-picker__custom-range" style="background:hsl(220, 100%, 50%)">
                  <button class="slds-color-picker__range-indicator" style="bottom:45%;left:46%" aria-live="assertive" aria-atomic="true" aria-describedby="color-picker-instructions">
                    <span class="slds-assistive-text">hex #5679C0</span>
                  </button>
                </div>
                <div class="slds-color-picker__hue-and-preview">
                  <label class="slds-assistive-text" for="color-picker-input-range-33">Select Hue</label>
                  <input type="range" class="slds-color-picker__hue-slider" min="0" max="360" id="color-picker-input-range-33" value="208" />
                  <span class="slds-swatch" style="background:#5679C0">
                    <span class="slds-assistive-text" aria-hidden="true">#5679C0</span>
                  </span>
                </div>
                <div class="slds-color-picker__custom-inputs">
                  <div class="slds-form-element slds-color-picker__input-custom-hex">
                    <label class="slds-form-element__label" for="color-picker-input-hex-33">Hex</label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-hex-33" class="slds-input" value="#5679C0" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-r-33">
                      <abbr title="Red">R</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-r-33" class="slds-input" value="86" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-g-33">
                      <abbr title="Green">G</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-g-33" class="slds-input" value="121" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-b-33">
                      <abbr title="blue">B</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-b-33" class="slds-input" value="192" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Open, custom tab selected, error state"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-41" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-show" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-41">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-tabs_default">
            <ul class="slds-tabs_default__nav" role="tablist">
              <li class="slds-tabs_default__item" title="Default" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="color-picker-default" id="color-picker-default__item">Default</a>
              </li>
              <li class="slds-tabs_default__item slds-is-active" title="Custom" role="presentation">
                <a class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="color-picker-custom" id="color-picker-custom__item">Custom</a>
              </li>
            </ul>
            <div id="color-picker-default" class="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="color-picker-default__item">
              <ul class="slds-color-picker__swatches" role="listbox" aria-label="Preset colors">
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
                    <span class="slds-swatch" style="background:#e3abec">
                      <span class="slds-assistive-text">#e3abec</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#c2dbf7">
                      <span class="slds-assistive-text">#c2dbf7</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9fd6ff">
                      <span class="slds-assistive-text">#9fd6ff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9de7da">
                      <span class="slds-assistive-text">#9de7da</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#9df0c0">
                      <span class="slds-assistive-text">#9df0c0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fff099">
                      <span class="slds-assistive-text">#fff099</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#fed49a">
                      <span class="slds-assistive-text">#fed49a</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#d073e0">
                      <span class="slds-assistive-text">#d073e0</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#86baf3">
                      <span class="slds-assistive-text">#86baf3</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#44d8be">
                      <span class="slds-assistive-text">#44d8be</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3be282">
                      <span class="slds-assistive-text">#3be282</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffe654">
                      <span class="slds-assistive-text">#ffe654</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#ffb758">
                      <span class="slds-assistive-text">#ffb758</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#bd35bd">
                      <span class="slds-assistive-text">#bd35bd</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5779c1">
                      <span class="slds-assistive-text">#5779c1</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#5ebbff">
                      <span class="slds-assistive-text">#5ebbff</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#00aea9">
                      <span class="slds-assistive-text">#00aea9</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#3cba4c">
                      <span class="slds-assistive-text">#3cba4c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f5bc25">
                      <span class="slds-assistive-text">#f5bc25</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#f99221">
                      <span class="slds-assistive-text">#f99221</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#580d8c">
                      <span class="slds-assistive-text">#580d8c</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#001970">
                      <span class="slds-assistive-text">#001970</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0a2399">
                      <span class="slds-assistive-text">#0a2399</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b7477">
                      <span class="slds-assistive-text">#0b7477</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#0b6b50">
                      <span class="slds-assistive-text">#0b6b50</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b67e11">
                      <span class="slds-assistive-text">#b67e11</span>
                    </span>
                  </a>
                </li>
                <li class="slds-color-picker__swatch" role="presentation">
                  <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                    <span class="slds-swatch" style="background:#b85d0d">
                      <span class="slds-assistive-text">#b85d0d</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div id="color-picker-custom" class="slds-tabs_default__content slds-show" role="tabpanel" aria-labelledby="color-picker-custom__item">
              <div class="slds-color-picker__custom">
                <p id="color-picker-instructions" class="slds-assistive-text">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>
                <div class="slds-color-picker__custom-range" style="background:hsl(220, 100%, 50%)">
                  <button class="slds-color-picker__range-indicator" style="bottom:45%;left:46%" aria-live="assertive" aria-atomic="true" aria-describedby="color-picker-instructions">
                    <span class="slds-assistive-text">hex #5679C0</span>
                  </button>
                </div>
                <div class="slds-color-picker__hue-and-preview">
                  <label class="slds-assistive-text" for="color-picker-input-range-35">Select Hue</label>
                  <input type="range" class="slds-color-picker__hue-slider" min="0" max="360" id="color-picker-input-range-35" value="208" />
                  <span class="slds-swatch" style="background:#5679C0">
                    <span class="slds-assistive-text" aria-hidden="true">#5679C0</span>
                  </span>
                </div>
                <div class="slds-color-picker__custom-inputs">
                  <div class="slds-form-element slds-has-error slds-color-picker__input-custom-hex">
                    <label class="slds-form-element__label" for="color-picker-input-hex-35">Hex</label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-hex-35" aria-describedby="color-picker-custom-error" class="slds-input" aria-invalid="true" value="#5679C0" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-r-35">
                      <abbr title="Red">R</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-r-35" class="slds-input" value="86" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-g-35">
                      <abbr title="Green">G</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-g-35" class="slds-input" value="121" />
                    </div>
                  </div>
                  <div class="slds-form-element">
                    <label class="slds-form-element__label" for="color-picker-input-b-35">
                      <abbr title="blue">B</abbr>
                    </label>
                    <div class="slds-form-element__control">
                      <input type="text" id="color-picker-input-b-35" class="slds-input" value="192" />
                    </div>
                  </div>
                </div>
                <p class="slds-form-error" id="color-picker-custom-error">Please ensure value is correct</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Custom Only"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-43" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-hide" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-43">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-color-picker__custom">
            <p id="color-picker-instructions" class="slds-assistive-text">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>
            <div class="slds-color-picker__custom-range" style="background:hsl(220, 100%, 50%)">
              <button class="slds-color-picker__range-indicator" style="bottom:45%;left:46%" aria-live="assertive" aria-atomic="true" aria-describedby="color-picker-instructions">
                <span class="slds-assistive-text">hex #5679C0</span>
              </button>
            </div>
            <div class="slds-color-picker__hue-and-preview">
              <label class="slds-assistive-text" for="color-picker-input-range-37">Select Hue</label>
              <input type="range" class="slds-color-picker__hue-slider" min="0" max="360" id="color-picker-input-range-37" value="208" />
              <span class="slds-swatch" style="background:#5679C0">
                <span class="slds-assistive-text" aria-hidden="true">#5679C0</span>
              </span>
            </div>
            <div class="slds-color-picker__custom-inputs">
              <div class="slds-form-element slds-color-picker__input-custom-hex">
                <label class="slds-form-element__label" for="color-picker-input-hex-37">Hex</label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-hex-37" class="slds-input" value="#5679C0" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-r-37">
                  <abbr title="Red">R</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-r-37" class="slds-input" value="86" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-g-37">
                  <abbr title="Green">G</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-g-37" class="slds-input" value="121" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-b-37">
                  <abbr title="blue">B</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-b-37" class="slds-input" value="192" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Open"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-45" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-show" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-45">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-color-picker__custom">
            <p id="color-picker-instructions" class="slds-assistive-text">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>
            <div class="slds-color-picker__custom-range" style="background:hsl(220, 100%, 50%)">
              <button class="slds-color-picker__range-indicator" style="bottom:45%;left:46%" aria-live="assertive" aria-atomic="true" aria-describedby="color-picker-instructions">
                <span class="slds-assistive-text">hex #5679C0</span>
              </button>
            </div>
            <div class="slds-color-picker__hue-and-preview">
              <label class="slds-assistive-text" for="color-picker-input-range-39">Select Hue</label>
              <input type="range" class="slds-color-picker__hue-slider" min="0" max="360" id="color-picker-input-range-39" value="208" />
              <span class="slds-swatch" style="background:#5679C0">
                <span class="slds-assistive-text" aria-hidden="true">#5679C0</span>
              </span>
            </div>
            <div class="slds-color-picker__custom-inputs">
              <div class="slds-form-element slds-color-picker__input-custom-hex">
                <label class="slds-form-element__label" for="color-picker-input-hex-39">Hex</label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-hex-39" class="slds-input" value="#5679C0" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-r-39">
                  <abbr title="Red">R</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-r-39" class="slds-input" value="86" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-g-39">
                  <abbr title="Green">G</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-g-39" class="slds-input" value="121" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-b-39">
                  <abbr title="blue">B</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-b-39" class="slds-input" value="192" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Open with Error"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-47" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-show" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-47">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-color-picker__custom">
            <p id="color-picker-instructions" class="slds-assistive-text">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>
            <div class="slds-color-picker__custom-range" style="background:hsl(220, 100%, 50%)">
              <button class="slds-color-picker__range-indicator" style="bottom:45%;left:46%" aria-live="assertive" aria-atomic="true" aria-describedby="color-picker-instructions">
                <span class="slds-assistive-text">hex #5679C0</span>
              </button>
            </div>
            <div class="slds-color-picker__hue-and-preview">
              <label class="slds-assistive-text" for="color-picker-input-range-41">Select Hue</label>
              <input type="range" class="slds-color-picker__hue-slider" min="0" max="360" id="color-picker-input-range-41" value="208" />
              <span class="slds-swatch" style="background:#5679C0">
                <span class="slds-assistive-text" aria-hidden="true">#5679C0</span>
              </span>
            </div>
            <div class="slds-color-picker__custom-inputs">
              <div class="slds-form-element slds-has-error slds-color-picker__input-custom-hex">
                <label class="slds-form-element__label" for="color-picker-input-hex-41">Hex</label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-hex-41" aria-describedby="color-picker-custom-error" class="slds-input" aria-invalid="true" value="#5679C0" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-r-41">
                  <abbr title="Red">R</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-r-41" class="slds-input" value="86" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-g-41">
                  <abbr title="Green">G</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-g-41" class="slds-input" value="121" />
                </div>
              </div>
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="color-picker-input-b-41">
                  <abbr title="blue">B</abbr>
                </label>
                <div class="slds-form-element__control">
                  <input type="text" id="color-picker-input-b-41" class="slds-input" value="192" />
                </div>
              </div>
            </div>
            <p class="slds-form-error" id="color-picker-custom-error">Please ensure value is correct</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Predefined Only"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-49" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-hide" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-49">
      <div class="slds-media">
        <div class="slds-media__body">
          <ul class="slds-color-picker__swatches" role="listbox" aria-label="Preset colors">
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
                <span class="slds-swatch" style="background:#e3abec">
                  <span class="slds-assistive-text">#e3abec</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#c2dbf7">
                  <span class="slds-assistive-text">#c2dbf7</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#9fd6ff">
                  <span class="slds-assistive-text">#9fd6ff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#9de7da">
                  <span class="slds-assistive-text">#9de7da</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#9df0c0">
                  <span class="slds-assistive-text">#9df0c0</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#fff099">
                  <span class="slds-assistive-text">#fff099</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#fed49a">
                  <span class="slds-assistive-text">#fed49a</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#d073e0">
                  <span class="slds-assistive-text">#d073e0</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#86baf3">
                  <span class="slds-assistive-text">#86baf3</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#5ebbff">
                  <span class="slds-assistive-text">#5ebbff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#44d8be">
                  <span class="slds-assistive-text">#44d8be</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#3be282">
                  <span class="slds-assistive-text">#3be282</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#ffe654">
                  <span class="slds-assistive-text">#ffe654</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#ffb758">
                  <span class="slds-assistive-text">#ffb758</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#bd35bd">
                  <span class="slds-assistive-text">#bd35bd</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#5779c1">
                  <span class="slds-assistive-text">#5779c1</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#5ebbff">
                  <span class="slds-assistive-text">#5ebbff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#00aea9">
                  <span class="slds-assistive-text">#00aea9</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#3cba4c">
                  <span class="slds-assistive-text">#3cba4c</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#f5bc25">
                  <span class="slds-assistive-text">#f5bc25</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#f99221">
                  <span class="slds-assistive-text">#f99221</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#580d8c">
                  <span class="slds-assistive-text">#580d8c</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#001970">
                  <span class="slds-assistive-text">#001970</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#0a2399">
                  <span class="slds-assistive-text">#0a2399</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#0b7477">
                  <span class="slds-assistive-text">#0b7477</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#0b6b50">
                  <span class="slds-assistive-text">#0b6b50</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#b67e11">
                  <span class="slds-assistive-text">#b67e11</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#b85d0d">
                  <span class="slds-assistive-text">#b85d0d</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Open"
<div class="slds-color-picker">
  <div class="slds-form-element slds-color-picker__summary">
    <label class="slds-form-element__label slds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <div class="slds-form-element__control">
      <button class="slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more" title="Choose Color">
        <span class="slds-swatch" style="background:hsl(220, 46%, 55%)">
          <span class="slds-assistive-text">hsl(220, 46%, 55%)</span>
        </span>
        <svg class="slds-button__icon slds-button__icon_small slds-m-left_xx-small" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
        </svg>
        <span class="slds-assistive-text">Choose a color. Current color: #5679C0</span>
      </button>
      <div class="slds-color-picker__summary-input">
        <input type="text" id="color-picker-summary-input" class="slds-input" value="#5679C0" />
      </div>
    </div>
  </div>
  <section aria-describedby="dialog-body-id-51" aria-label="Choose a color" class="slds-popover slds-color-picker__selector slds-show" role="dialog">
    <div class="slds-popover__body" id="dialog-body-id-51">
      <div class="slds-media">
        <div class="slds-media__body">
          <ul class="slds-color-picker__swatches" role="listbox" aria-label="Preset colors">
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
                <span class="slds-swatch" style="background:#e3abec">
                  <span class="slds-assistive-text">#e3abec</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#c2dbf7">
                  <span class="slds-assistive-text">#c2dbf7</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#9fd6ff">
                  <span class="slds-assistive-text">#9fd6ff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#9de7da">
                  <span class="slds-assistive-text">#9de7da</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#9df0c0">
                  <span class="slds-assistive-text">#9df0c0</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#fff099">
                  <span class="slds-assistive-text">#fff099</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#fed49a">
                  <span class="slds-assistive-text">#fed49a</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#d073e0">
                  <span class="slds-assistive-text">#d073e0</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#86baf3">
                  <span class="slds-assistive-text">#86baf3</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#5ebbff">
                  <span class="slds-assistive-text">#5ebbff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#44d8be">
                  <span class="slds-assistive-text">#44d8be</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#3be282">
                  <span class="slds-assistive-text">#3be282</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#ffe654">
                  <span class="slds-assistive-text">#ffe654</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#ffb758">
                  <span class="slds-assistive-text">#ffb758</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#bd35bd">
                  <span class="slds-assistive-text">#bd35bd</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#5779c1">
                  <span class="slds-assistive-text">#5779c1</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#5ebbff">
                  <span class="slds-assistive-text">#5ebbff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#00aea9">
                  <span class="slds-assistive-text">#00aea9</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#3cba4c">
                  <span class="slds-assistive-text">#3cba4c</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#f5bc25">
                  <span class="slds-assistive-text">#f5bc25</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#f99221">
                  <span class="slds-assistive-text">#f99221</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#580d8c">
                  <span class="slds-assistive-text">#580d8c</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#001970">
                  <span class="slds-assistive-text">#001970</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#0a2399">
                  <span class="slds-assistive-text">#0a2399</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#0b7477">
                  <span class="slds-assistive-text">#0b7477</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#0b6b50">
                  <span class="slds-assistive-text">#0b6b50</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#b67e11">
                  <span class="slds-assistive-text">#b67e11</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
                <span class="slds-swatch" style="background:#b85d0d">
                  <span class="slds-assistive-text">#b85d0d</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="slds-popover__footer">
      <div class="slds-color-picker__selector-footer">
        <button class="slds-button slds-button_neutral">Cancel</button>
        <button class="slds-button slds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>
:::

::: legacy-component-example title="Accessibility Note"
<div class="slds-dropdown-trigger slds-dropdown-trigger_click">
  <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="false" title="Show More">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
    </svg>
    <span class="slds-assistive-text">Show More</span>
  </button>
  <div class="slds-dropdown slds-dropdown_left">
    <div class="slds-color-picker slds-color-picker_swatches-only">
      <div class="slds-color-picker__selector">
        <ul class="slds-color-picker__swatches" role="menu" aria-label="Preset colors">
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="0">
              <span class="slds-swatch" style="background:#e3abec">
                <span class="slds-assistive-text">#e3abec</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#c2dbf7">
                <span class="slds-assistive-text">#c2dbf7</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#9fd6ff">
                <span class="slds-assistive-text">#9fd6ff</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#9de7da">
                <span class="slds-assistive-text">#9de7da</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#9df0c0">
                <span class="slds-assistive-text">#9df0c0</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#fff099">
                <span class="slds-assistive-text">#fff099</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#fed49a">
                <span class="slds-assistive-text">#fed49a</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#d073e0">
                <span class="slds-assistive-text">#d073e0</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#86baf3">
                <span class="slds-assistive-text">#86baf3</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#5ebbff">
                <span class="slds-assistive-text">#5ebbff</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#44d8be">
                <span class="slds-assistive-text">#44d8be</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#3be282">
                <span class="slds-assistive-text">#3be282</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#ffe654">
                <span class="slds-assistive-text">#ffe654</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#ffb758">
                <span class="slds-assistive-text">#ffb758</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#bd35bd">
                <span class="slds-assistive-text">#bd35bd</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#5779c1">
                <span class="slds-assistive-text">#5779c1</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#5ebbff">
                <span class="slds-assistive-text">#5ebbff</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#00aea9">
                <span class="slds-assistive-text">#00aea9</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#3cba4c">
                <span class="slds-assistive-text">#3cba4c</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#f5bc25">
                <span class="slds-assistive-text">#f5bc25</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#f99221">
                <span class="slds-assistive-text">#f99221</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#580d8c">
                <span class="slds-assistive-text">#580d8c</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#001970">
                <span class="slds-assistive-text">#001970</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#0a2399">
                <span class="slds-assistive-text">#0a2399</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#0b7477">
                <span class="slds-assistive-text">#0b7477</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#0b6b50">
                <span class="slds-assistive-text">#0b6b50</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#b67e11">
                <span class="slds-assistive-text">#b67e11</span>
              </span>
            </a>
          </li>
          <li class="slds-color-picker__swatch" role="presentation">
            <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
              <span class="slds-swatch" style="background:#b85d0d">
                <span class="slds-assistive-text">#b85d0d</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Open"
<div style="height:12rem">
  <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
    <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" aria-expanded="true" title="Show More">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
      </svg>
      <span class="slds-assistive-text">Show More</span>
    </button>
    <div class="slds-dropdown slds-dropdown_left">
      <div class="slds-color-picker slds-color-picker_swatches-only">
        <div class="slds-color-picker__selector">
          <ul class="slds-color-picker__swatches" role="menu" aria-label="Preset colors">
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="0">
                <span class="slds-swatch" style="background:#e3abec">
                  <span class="slds-assistive-text">#e3abec</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#c2dbf7">
                  <span class="slds-assistive-text">#c2dbf7</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#9fd6ff">
                  <span class="slds-assistive-text">#9fd6ff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#9de7da">
                  <span class="slds-assistive-text">#9de7da</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#9df0c0">
                  <span class="slds-assistive-text">#9df0c0</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#fff099">
                  <span class="slds-assistive-text">#fff099</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#fed49a">
                  <span class="slds-assistive-text">#fed49a</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#d073e0">
                  <span class="slds-assistive-text">#d073e0</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#86baf3">
                  <span class="slds-assistive-text">#86baf3</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#5ebbff">
                  <span class="slds-assistive-text">#5ebbff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#44d8be">
                  <span class="slds-assistive-text">#44d8be</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#3be282">
                  <span class="slds-assistive-text">#3be282</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#ffe654">
                  <span class="slds-assistive-text">#ffe654</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#ffb758">
                  <span class="slds-assistive-text">#ffb758</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#bd35bd">
                  <span class="slds-assistive-text">#bd35bd</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#5779c1">
                  <span class="slds-assistive-text">#5779c1</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#5ebbff">
                  <span class="slds-assistive-text">#5ebbff</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#00aea9">
                  <span class="slds-assistive-text">#00aea9</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#3cba4c">
                  <span class="slds-assistive-text">#3cba4c</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#f5bc25">
                  <span class="slds-assistive-text">#f5bc25</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#f99221">
                  <span class="slds-assistive-text">#f99221</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#580d8c">
                  <span class="slds-assistive-text">#580d8c</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#001970">
                  <span class="slds-assistive-text">#001970</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#0a2399">
                  <span class="slds-assistive-text">#0a2399</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#0b7477">
                  <span class="slds-assistive-text">#0b7477</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#0b6b50">
                  <span class="slds-assistive-text">#0b6b50</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#b67e11">
                  <span class="slds-assistive-text">#b67e11</span>
                </span>
              </a>
            </li>
            <li class="slds-color-picker__swatch" role="presentation">
              <a class="slds-color-picker__swatch-trigger" href="#" role="menuitem" tabindex="-1">
                <span class="slds-swatch" style="background:#b85d0d">
                  <span class="slds-assistive-text">#b85d0d</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::
