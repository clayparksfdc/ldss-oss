---
title: File Selector
---

SLDS 1 blueprint examples for **File Selector**.

::: legacy-component-example title="Base"
<div class="slds-form-element" role="group" aria-labelledby="file-selector-primary-label-105">
  <span class="slds-form-element__label" id="file-selector-primary-label-105">Attachment</span>
  <div class="slds-form-element__control">
    <div class="slds-file-selector slds-file-selector_files">
      <div class="slds-file-selector__dropzone">
        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-107" />
        <label class="slds-file-selector__body" for="file-upload-input-107" id="file-selector-secondary-label106">
          <span class="slds-file-selector__button slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>Upload Files</span>
          <span class="slds-file-selector__text slds-medium-show">or Drop Files</span>
        </label>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-form-element slds-has-error" role="group" aria-labelledby="file-selector-primary-label-113">
  <span class="slds-form-element__label" id="file-selector-primary-label-113">Attachment</span>
  <div class="slds-form-element__control">
    <div class="slds-file-selector slds-file-selector_files">
      <div class="slds-file-selector__dropzone">
        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-115" aria-describedby="error-116" />
        <label class="slds-file-selector__body" for="file-upload-input-115" id="file-selector-secondary-label114">
          <span class="slds-file-selector__button slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>Upload Files</span>
          <span class="slds-file-selector__text slds-medium-show">or Drop Files</span>
        </label>
      </div>
    </div>
  </div>
  <div class="slds-form-element__help" id="error-116">File type not supported</div>
</div>
:::

::: legacy-component-example title="Dragover"
<div class="slds-form-element" role="group" aria-labelledby="file-selector-primary-label-121">
  <span class="slds-form-element__label" id="file-selector-primary-label-121">Attachment</span>
  <div class="slds-form-element__control">
    <div class="slds-file-selector slds-file-selector_files">
      <div class="slds-file-selector__dropzone slds-has-drag-over">
        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-123" />
        <label class="slds-file-selector__body" for="file-upload-input-123" id="file-selector-secondary-label122">
          <span class="slds-file-selector__button slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>Upload Files</span>
          <span class="slds-file-selector__text slds-medium-show">or Drop Files</span>
        </label>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Dragover with error"
<div class="slds-form-element slds-has-error" role="group" aria-labelledby="file-selector-primary-label-129">
  <span class="slds-form-element__label" id="file-selector-primary-label-129">Attachment</span>
  <div class="slds-form-element__control">
    <div class="slds-file-selector slds-file-selector_files">
      <div class="slds-file-selector__dropzone">
        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-131" disabled="" aria-describedby="error-132" />
        <label class="slds-file-selector__body" for="file-upload-input-131" id="file-selector-secondary-label130">
          <span class="slds-file-selector__button slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>Upload Files</span>
          <span class="slds-file-selector__text slds-medium-show">or Drop Files</span>
        </label>
      </div>
    </div>
  </div>
  <div class="slds-form-element__help" id="error-132">File type not supported</div>
</div>
:::

::: legacy-component-example title="Image"
<div class="slds-form-element" role="group" aria-labelledby="file-selector-primary-label-137">
  <span class="slds-form-element__label" id="file-selector-primary-label-137">Attachment</span>
  <div class="slds-form-element__control">
    <div class="slds-file-selector slds-file-selector_images">
      <div class="slds-file-selector__dropzone">
        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-139" />
        <label class="slds-file-selector__body" for="file-upload-input-139" id="file-selector-secondary-label138">
          <span class="slds-file-selector__button slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>Upload Image</span>
          <span class="slds-file-selector__text slds-medium-show">or Drop Image</span>
        </label>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Error"
<div class="slds-form-element slds-has-error" role="group" aria-labelledby="file-selector-primary-label-145">
  <span class="slds-form-element__label" id="file-selector-primary-label-145">Attachment</span>
  <div class="slds-form-element__control">
    <div class="slds-file-selector slds-file-selector_images">
      <div class="slds-file-selector__dropzone">
        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-147" aria-describedby="error-148" />
        <label class="slds-file-selector__body" for="file-upload-input-147" id="file-selector-secondary-label146">
          <span class="slds-file-selector__button slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>Upload Image</span>
          <span class="slds-file-selector__text slds-medium-show">or Drop Image</span>
        </label>
      </div>
    </div>
  </div>
  <div class="slds-form-element__help" id="error-148">File type not supported</div>
</div>
:::

::: legacy-component-example title="Dragover"
<div class="slds-form-element" role="group" aria-labelledby="file-selector-primary-label-153">
  <span class="slds-form-element__label" id="file-selector-primary-label-153">Attachment</span>
  <div class="slds-form-element__control">
    <div class="slds-file-selector slds-file-selector_images">
      <div class="slds-file-selector__dropzone slds-has-drag-over">
        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-155" />
        <label class="slds-file-selector__body" for="file-upload-input-155" id="file-selector-secondary-label154">
          <span class="slds-file-selector__button slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>Upload Image</span>
          <span class="slds-file-selector__text slds-medium-show">or Drop Image</span>
        </label>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Dragover with error"
<div class="slds-form-element slds-has-error" role="group" aria-labelledby="file-selector-primary-label-161">
  <span class="slds-form-element__label" id="file-selector-primary-label-161">Attachment</span>
  <div class="slds-form-element__control">
    <div class="slds-file-selector slds-file-selector_images">
      <div class="slds-file-selector__dropzone">
        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-163" disabled="" aria-describedby="error-164" />
        <label class="slds-file-selector__body" for="file-upload-input-163" id="file-selector-secondary-label162">
          <span class="slds-file-selector__button slds-button slds-button_neutral">
            <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>Upload Image</span>
          <span class="slds-file-selector__text slds-medium-show">or Drop Image</span>
        </label>
      </div>
    </div>
  </div>
  <div class="slds-form-element__help" id="error-164">File type not supported</div>
</div>
:::

::: legacy-component-example title="Integrated"
<div class="slds-file-selector slds-file-selector_integrated slds-file-selector_integrated">
  <div class="slds-file-selector__dropzone slds-file-selector__dropzone_integrated" aria-hidden="true">
    <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-01" tabindex="-1" />
    <label class="slds-file-selector__body slds-file-selector__body_integrated" for="file-upload-input-01">
      <svg class="slds-file-selector__body-icon slds-icon slds-icon-text-default" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
      </svg>
      <span class="slds-file-selector__text slds-file-selector__text_integrated slds-text-heading_medium slds-text-align_center">Drop Files</span>
    </label>
  </div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
:::

::: legacy-component-example title="Drag"
<div class="slds-file-selector slds-file-selector_integrated slds-file-selector_integrated">
  <div class="slds-file-selector__dropzone slds-file-selector__dropzone_integrated slds-has-drag" aria-hidden="true">
    <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-01" tabindex="-1" />
    <label class="slds-file-selector__body slds-file-selector__body_integrated" for="file-upload-input-01">
      <svg class="slds-file-selector__body-icon slds-icon slds-icon-text-default" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
      </svg>
      <span class="slds-file-selector__text slds-file-selector__text_integrated slds-text-heading_medium slds-text-align_center">Drop Files</span>
    </label>
  </div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
:::

::: legacy-component-example title="Dragover"
<div class="slds-file-selector slds-file-selector_integrated slds-file-selector_integrated">
  <div class="slds-file-selector__dropzone slds-file-selector__dropzone_integrated slds-has-drag slds-has-drag-over" aria-hidden="true">
    <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-01" tabindex="-1" />
    <label class="slds-file-selector__body slds-file-selector__body_integrated" for="file-upload-input-01">
      <svg class="slds-file-selector__body-icon slds-icon slds-icon-text-default" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
      </svg>
      <span class="slds-file-selector__text slds-file-selector__text_integrated slds-text-heading_medium slds-text-align_center">Drop Files</span>
    </label>
  </div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
:::

::: legacy-component-example title="Dragover with error"
<div class="slds-file-selector slds-file-selector_integrated slds-file-selector_integrated">
  <div class="slds-file-selector__dropzone slds-file-selector__dropzone_integrated slds-has-drag" aria-hidden="true">
    <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-01" disabled="" tabindex="-1" />
    <label class="slds-file-selector__body slds-file-selector__body_integrated" for="file-upload-input-01">
      <svg class="slds-file-selector__body-icon slds-icon slds-icon-text-default" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
      </svg>
      <span class="slds-file-selector__text slds-file-selector__text_integrated slds-text-heading_medium slds-text-align_center">Too many files selected. Attach up to 1 file.</span>
    </label>
  </div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
:::
