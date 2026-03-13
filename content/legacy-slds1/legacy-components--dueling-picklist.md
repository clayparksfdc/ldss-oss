---
title: Dueling Picklist
---

SLDS 1 blueprint examples for **Dueling Picklist**.

::: legacy-component-example title="Labeling the group"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-103">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-103" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-104">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-104" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Up</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Down</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Responsive"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column slds-dueling-list__column_responsive">
        <span class="slds-form-element__label" id="label-107">Available Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-107" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Arabic">Arabic</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Dutch">Dutch</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="German">German</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Hindi">Hindi</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Tobagonian Creole English">Tobagonian Creole English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Selected Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Selected Languages</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Available Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Available Languages</span>
        </button>
      </div>
      <div class="slds-dueling-list__column slds-dueling-list__column_responsive">
        <span class="slds-form-element__label" id="label-108">Selected Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-108" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Chinese">Chinese</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="English">English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Helpful Assistive Text"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-111">Available Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-111" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Arabic">Arabic</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Dutch">Dutch</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="German">German</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Hindi">Hindi</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Tobagonian Creole English">Tobagonian Creole English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Selected Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Selected Languages</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Available Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Available Languages</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-112">Selected Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-112" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Chinese">Chinese</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="English">English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Aria Selected"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-115">Available Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-115" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Arabic">Arabic</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Dutch">Dutch</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="German">German</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Hindi">Hindi</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Tobagonian Creole English">Tobagonian Creole English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Selected Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Selected Languages</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Available Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Available Languages</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-116">Selected Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-116" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Chinese">Chinese</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="English">English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Multiple Selected Items"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-119">Available Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-119" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Arabic">Arabic</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Dutch">Dutch</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="German">German</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Hindi">Hindi</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Tobagonian Creole English">Tobagonian Creole English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Selected Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Selected Languages</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Available Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Available Languages</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-120">Selected Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-120" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Chinese">Chinese</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="English">English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Aria Live"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive">Arabic and German: Moved to Selected Languages.</div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-123">Available Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-123" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Dutch">Dutch</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Hindi">Hindi</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Tobagonian Creole English">Tobagonian Creole English</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Selected Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Selected Languages</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Available Languages">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Available Languages</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-124">Selected Languages</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-124" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Arabic">Arabic</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Chinese">Chinese</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="English">English</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="German">German</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Aria Disabled and Assistive Text"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-127">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-127" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-128">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-128" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" aria-disabled="true" draggable="false" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
                <span class="slds-media__figure slds-media__figure_reverse">
                  <span class="slds-icon_container slds-current-color" title="Locked item">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                    </svg>
                    <span class="slds-assistive-text"> : item cannot be removed from Second Category</span>
                  </span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="With Reordering"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-131">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-131" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-132">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-132" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Up</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Down</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Item Selected"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-135">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-135" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-136">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-136" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Up</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Down</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Item Grabbed"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive">Option 5: current position 2 of 2. Press up or down arrows to move within list.</div>
      <div class="slds-assistive-text" id="option-drag-label"></div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-139">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-139" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-140">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-140" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-grabbed slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Up</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Down</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Item Moved Within a List"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive">Option 5: current position 1 of 2.</div>
      <div class="slds-assistive-text" id="option-drag-label"></div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-143">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-143" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-144">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-144" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-grabbed slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Up</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Down</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Item Dropped in a List"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive">Option 5: final position 1 of 2.</div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-147">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-147" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-148">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-148" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline slds-is-selected" aria-selected="true" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Up</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Down</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Utility Class"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-151">First Category</span>
        <div class="slds-dueling-list__options slds-is-disabled">
          <ul aria-describedby="option-drag-label" aria-disabled="true" aria-labelledby="label-151" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category" disabled="">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category" disabled="">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-152">Second Category</span>
        <div class="slds-dueling-list__options slds-is-disabled">
          <ul aria-describedby="option-drag-label" aria-disabled="true" aria-labelledby="label-152" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up" disabled="">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Up</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down" disabled="">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Down</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Required"
<div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
  <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">
    <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Select Options</span>
  <div class="slds-form-element__control">
    <div class="slds-dueling-list">
      <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
      <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-155">First Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-155" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 1">Option 1</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 2">Option 2</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 3">Option 3</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 6">Option 6</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to Second Category</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection to First Category</span>
        </button>
      </div>
      <div class="slds-dueling-list__column">
        <span class="slds-form-element__label" id="label-156">Second Category</span>
        <div class="slds-dueling-list__options">
          <ul aria-describedby="option-drag-label" aria-labelledby="label-156" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 4">Option 4</span>
                </span>
              </div>
            </li>
            <li role="presentation" class="slds-listbox__item">
              <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                <span class="slds-media__body">
                  <span class="slds-truncate" title="Option 5">Option 5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="slds-dueling-list__column">
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Up</span>
        </button>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">Move Selection Down</span>
        </button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="With Tooltip"
<div class="demo-only" style="padding-top:3rem">
  <div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
    <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">Select Options</span>
    <div class="slds-form-element__icon">
      <button class="slds-button slds-button_icon" aria-describedby="help">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
        </svg>
        <span class="slds-assistive-text">Help</span>
      </button>
      <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style="position:absolute;top:-45px;left:-15px;width:170px">
        <div class="slds-popover__body">Some helpful information.</div>
      </div>
    </div>
    <div class="slds-form-element__control">
      <div class="slds-dueling-list">
        <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
        <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
        <div class="slds-dueling-list__column">
          <span class="slds-form-element__label" id="label-159">First Category</span>
          <div class="slds-dueling-list__options">
            <ul aria-describedby="option-drag-label" aria-labelledby="label-159" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 1">Option 1</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 2">Option 2</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 3">Option 3</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 6">Option 6</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="slds-dueling-list__column">
          <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
            </svg>
            <span class="slds-assistive-text">Move Selection to Second Category</span>
          </button>
          <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
            </svg>
            <span class="slds-assistive-text">Move Selection to First Category</span>
          </button>
        </div>
        <div class="slds-dueling-list__column">
          <span class="slds-form-element__label" id="label-160">Second Category</span>
          <div class="slds-dueling-list__options">
            <ul aria-describedby="option-drag-label" aria-labelledby="label-160" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 4">Option 4</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 5">Option 5</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="slds-dueling-list__column">
          <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
            </svg>
            <span class="slds-assistive-text">Move Selection Up</span>
          </button>
          <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">Move Selection Down</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Required With Tooltip"
<div class="demo-only" style="padding-top:3rem">
  <div class="slds-form-element" role="group" aria-labelledby="picklist-group-label">
    <span id="picklist-group-label" class="slds-form-element__label slds-form-element__legend">
      <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>Select Options</span>
    <div class="slds-form-element__icon">
      <button class="slds-button slds-button_icon" aria-describedby="help">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
        </svg>
        <span class="slds-assistive-text">Help</span>
      </button>
      <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style="position:absolute;top:-45px;left:-15px;width:170px">
        <div class="slds-popover__body">Some helpful information.</div>
      </div>
    </div>
    <div class="slds-form-element__control">
      <div class="slds-dueling-list">
        <div class="slds-assistive-text" id="drag-live-region" aria-live="assertive"></div>
        <div class="slds-assistive-text" id="option-drag-label">Press space bar when on an item, to move it within the list. Cmd/Ctrl plus left and right arrow keys, to move items between lists.</div>
        <div class="slds-dueling-list__column">
          <span class="slds-form-element__label" id="label-163">First Category</span>
          <div class="slds-dueling-list__options">
            <ul aria-describedby="option-drag-label" aria-labelledby="label-163" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 1">Option 1</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 2">Option 2</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 3">Option 3</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 6">Option 6</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="slds-dueling-list__column">
          <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to Second Category">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
            </svg>
            <span class="slds-assistive-text">Move Selection to Second Category</span>
          </button>
          <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection to First Category">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
            </svg>
            <span class="slds-assistive-text">Move Selection to First Category</span>
          </button>
        </div>
        <div class="slds-dueling-list__column">
          <span class="slds-form-element__label" id="label-164">Second Category</span>
          <div class="slds-dueling-list__options">
            <ul aria-describedby="option-drag-label" aria-labelledby="label-164" aria-multiselectable="true" class="slds-listbox slds-listbox_vertical" role="listbox">
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="0">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 4">Option 4</span>
                  </span>
                </div>
              </li>
              <li role="presentation" class="slds-listbox__item">
                <div class="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="true" role="option" tabindex="-1">
                  <span class="slds-media__body">
                    <span class="slds-truncate" title="Option 5">Option 5</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="slds-dueling-list__column">
          <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Up">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#up"></use>
            </svg>
            <span class="slds-assistive-text">Move Selection Up</span>
          </button>
          <button class="slds-button slds-button_icon slds-button_icon-container" title="Move Selection Down">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">Move Selection Down</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="View Mode"
<div class="slds-dueling-list">
  <div class="slds-form-element">
    <span class="slds-form-element__label">Selected Languages</span>
    <div class="slds-form-element__control">
      <span class="slds-form-element__static">Arabic, Chinese, English, German</span>
    </div>
  </div>
</div>
:::
