---
title: Files
---

SLDS 1 blueprint examples for **Files**.

::: legacy-component-example title="Base"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-has-title">
    <figure>
      <a href="#" class="slds-file__crop">
        <span class="slds-assistive-text">Preview:</span>
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
      </a>
      <figcaption class="slds-file__title slds-file__title_card">
        <div class="slds-media slds-media_small slds-media_center">
          <div class="slds-media__figure slds-line-height_reset">
            <span class="slds-icon_container" title="pdf">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
              </svg>
              <span class="slds-assistive-text">pdf</span>
            </span>
          </div>
          <div class="slds-media__body">
            <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</div>
:::

::: legacy-component-example title="File with no image"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-has-title">
    <figure>
      <a href="#" class="slds-file__crop">
        <span class="slds-assistive-text">Preview:</span>
        <span class="slds-file__icon slds-icon_container" title="image">
          <svg class="slds-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#image"></use>
          </svg>
          <span class="slds-assistive-text">Image Title</span>
        </span>
      </a>
      <figcaption class="slds-file__title slds-file__title_card">
        <div class="slds-media slds-media_small slds-media_center">
          <div class="slds-media__figure slds-line-height_reset">
            <span class="slds-icon_container" title="image">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#image"></use>
              </svg>
              <span class="slds-assistive-text">image</span>
            </span>
          </div>
          <div class="slds-media__body">
            <span class="slds-file__text slds-truncate" title="Image Title">Image Title</span>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</div>
:::

::: legacy-component-example title="File with no title"
<div style="width:20rem">
  <div class="slds-file slds-file_card">
    <figure>
      <a href="#" class="slds-file__crop">
        <span class="slds-assistive-text">Preview:</span>
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
      </a>
    </figure>
  </div>
</div>
:::

::: legacy-component-example title="File with actions"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-has-title">
    <figure>
      <a href="#" class="slds-file__crop">
        <span class="slds-assistive-text">Preview:</span>
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
      </a>
      <figcaption class="slds-file__title slds-file__title_card slds-file-has-actions">
        <div class="slds-media slds-media_small slds-media_center">
          <div class="slds-media__figure slds-line-height_reset">
            <span class="slds-icon_container" title="pdf">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
              </svg>
              <span class="slds-assistive-text">pdf</span>
            </span>
          </div>
          <div class="slds-media__body">
            <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
          </div>
        </div>
      </figcaption>
    </figure>
    <div class="slds-file__actions-menu">
      <div class="slds-button-group" role="group">
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small" title="Download">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#download"></use>
          </svg>
          <span class="slds-assistive-text">Download</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small" aria-haspopup="true" title="More Actions">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More Actions</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="File with no title + actions"
<div style="width:20rem">
  <div class="slds-file slds-file_card">
    <figure>
      <a href="#" class="slds-file__crop">
        <span class="slds-assistive-text">Preview:</span>
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
      </a>
    </figure>
    <div class="slds-file__title slds-file__title_scrim">
      <div class="slds-file__actions-menu">
        <div class="slds-button-group" role="group">
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-button_icon-inverse" title="Download">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#download"></use>
            </svg>
            <span class="slds-assistive-text">Download</span>
          </button>
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-button_icon-inverse" aria-haspopup="true" title="More Actions">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More Actions</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="File with external icon"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-has-title">
    <figure>
      <a href="#" class="slds-file__crop">
        <span class="slds-assistive-text">Preview:</span>
        <span class="slds-file__icon slds-icon_container" title="pdf">
          <svg class="slds-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
          </svg>
          <span class="slds-assistive-text">Proposal.pdf</span>
        </span>
      </a>
      <figcaption class="slds-file__title slds-file__title_card">
        <div class="slds-media slds-media_small slds-media_center">
          <div class="slds-media__figure slds-line-height_reset">
            <span class="slds-icon_container" title="pdf">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
              </svg>
              <span class="slds-assistive-text">pdf</span>
            </span>
          </div>
          <div class="slds-media__body">
            <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
          </div>
        </div>
      </figcaption>
    </figure>
    <div class="slds-file__external-icon">
      <span class="slds-file__icon slds-icon_container" title="salesforce1">
        <svg class="slds-icon slds-icon-text-default" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#salesforce1"></use>
        </svg>
        <span class="slds-assistive-text">Data provided by: salesforce1</span>
      </span>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="File in loading state with title"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-file_loading slds-has-title">
    <figure>
      <a href="#" class="slds-file__crop">
        <div role="status" class="slds-spinner slds-spinner_medium">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </a>
      <figcaption class="slds-file__title slds-file__title_card">
        <div class="slds-media slds-media_small slds-media_center">
          <div class="slds-media__figure slds-line-height_reset">
            <span class="slds-icon_container" title="image">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#image"></use>
              </svg>
              <span class="slds-assistive-text">image</span>
            </span>
          </div>
          <div class="slds-media__body">
            <span class="slds-file__text slds-truncate" title="Image Title">Image Title</span>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</div>
:::

::: legacy-component-example title="File in loading state without title"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-file_loading">
    <figure>
      <a href="#" class="slds-file__crop">
        <div role="status" class="slds-spinner slds-spinner_medium">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </a>
    </figure>
  </div>
</div>
:::

::: legacy-component-example title="&lt; 3 file attachments"
<ul class="slds-grid slds-grid_pull-padded">
  <li class="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
    <div class="slds-file slds-file_card slds-has-title">
      <figure>
        <a href="#" class="slds-file__crop">
          <span class="slds-assistive-text">Preview:</span>
          <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
        </a>
        <figcaption class="slds-file__title slds-file__title_card">
          <div class="slds-media slds-media_small slds-media_center">
            <div class="slds-media__figure slds-line-height_reset">
              <span class="slds-icon_container" title="pdf">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
                </svg>
                <span class="slds-assistive-text">pdf</span>
              </span>
            </div>
            <div class="slds-media__body">
              <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </li>
  <li class="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
    <div class="slds-file slds-file_card slds-has-title">
      <figure>
        <a href="#" class="slds-file__crop">
          <span class="slds-assistive-text">Preview:</span>
          <span class="slds-file__icon slds-icon_container" title="pdf">
            <svg class="slds-icon" aria-hidden="true">
              <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
            </svg>
            <span class="slds-assistive-text">Proposal.pdf</span>
          </span>
        </a>
        <figcaption class="slds-file__title slds-file__title_card">
          <div class="slds-media slds-media_small slds-media_center">
            <div class="slds-media__figure slds-line-height_reset">
              <span class="slds-icon_container" title="pdf">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
                </svg>
                <span class="slds-assistive-text">pdf</span>
              </span>
            </div>
            <div class="slds-media__body">
              <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title="&gt; 3 file attachments"
<ul class="slds-grid slds-grid_pull-padded">
  <li class="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
    <div class="slds-file slds-file_card slds-has-title">
      <figure>
        <a href="#" class="slds-file__crop">
          <span class="slds-assistive-text">Preview:</span>
          <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
        </a>
        <figcaption class="slds-file__title slds-file__title_card">
          <div class="slds-media slds-media_small slds-media_center">
            <div class="slds-media__figure slds-line-height_reset">
              <span class="slds-icon_container" title="pdf">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
                </svg>
                <span class="slds-assistive-text">pdf</span>
              </span>
            </div>
            <div class="slds-media__body">
              <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </li>
  <li class="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3  slds-medium-show">
    <div class="slds-file slds-file_card slds-has-title">
      <figure>
        <a href="#" class="slds-file__crop">
          <span class="slds-assistive-text">Preview:</span>
          <span class="slds-file__icon slds-icon_container" title="pdf">
            <svg class="slds-icon" aria-hidden="true">
              <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
            </svg>
            <span class="slds-assistive-text">Proposal.pdf</span>
          </span>
        </a>
        <figcaption class="slds-file__title slds-file__title_card">
          <div class="slds-media slds-media_small slds-media_center">
            <div class="slds-media__figure slds-line-height_reset">
              <span class="slds-icon_container" title="pdf">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
                </svg>
                <span class="slds-assistive-text">pdf</span>
              </span>
            </div>
            <div class="slds-media__body">
              <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </li>
  <li class="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
    <div class="slds-file slds-file_card">
      <figure>
        <a href="#" class="slds-file__crop">
          <div class="slds-file_overlay"></div>
          <span class="slds-assistive-text">Preview:</span>
          <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
        </a>
        <figcaption class="slds-file__title slds-file__title_overlay slds-align_absolute-center slds-text-heading_large">
          <div class="slds-media slds-media_small slds-media_center">
            <div class="slds-media__figure slds-line-height_reset"></div>
            <div class="slds-media__body">
              <span class="slds-file__text slds-truncate" title="+22">+22
                <span class="slds-assistive-text">more files</span>
              </span>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </li>
</ul>
:::

::: legacy-component-example title=".slds-file__crop_4-by-3"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-has-title">
    <figure>
      <a href="#" class="slds-file__crop slds-file__crop_4-by-3">
        <span class="slds-assistive-text">Preview:</span>
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
      </a>
      <figcaption class="slds-file__title slds-file__title_card">
        <div class="slds-media slds-media_small slds-media_center">
          <div class="slds-media__figure slds-line-height_reset">
            <span class="slds-icon_container" title="pdf">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
              </svg>
              <span class="slds-assistive-text">pdf</span>
            </span>
          </div>
          <div class="slds-media__body">
            <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</div>
:::

::: legacy-component-example title=".slds-file__crop_16-by-9"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-has-title">
    <figure>
      <a href="#" class="slds-file__crop slds-file__crop_16-by-9">
        <span class="slds-assistive-text">Preview:</span>
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
      </a>
      <figcaption class="slds-file__title slds-file__title_card">
        <div class="slds-media slds-media_small slds-media_center">
          <div class="slds-media__figure slds-line-height_reset">
            <span class="slds-icon_container" title="pdf">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
              </svg>
              <span class="slds-assistive-text">pdf</span>
            </span>
          </div>
          <div class="slds-media__body">
            <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</div>
:::

::: legacy-component-example title=".slds-file__crop_1-by-1"
<div style="width:20rem">
  <div class="slds-file slds-file_card slds-has-title">
    <figure>
      <a href="#" class="slds-file__crop slds-file__crop_1-by-1">
        <span class="slds-assistive-text">Preview:</span>
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" />
      </a>
      <figcaption class="slds-file__title slds-file__title_card">
        <div class="slds-media slds-media_small slds-media_center">
          <div class="slds-media__figure slds-line-height_reset">
            <span class="slds-icon_container" title="pdf">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"></use>
              </svg>
              <span class="slds-assistive-text">pdf</span>
            </span>
          </div>
          <div class="slds-media__body">
            <span class="slds-file__text slds-truncate" title="Proposal.pdf">Proposal.pdf</span>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</div>
:::
