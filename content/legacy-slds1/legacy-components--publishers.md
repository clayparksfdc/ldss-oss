---
title: Publishers
---

SLDS 1 blueprint examples for **Publishers**.

::: legacy-component-example title="Base"
<div class="slds-publisher">
  <label for="comment-text-input2" class="slds-publisher__toggle-visibility slds-m-bottom_small">
    <span class="slds-assistive-text">Write a comment</span>To: My followers</label>
  <textarea id="comment-text-input2" class="slds-publisher__input slds-textarea slds-text-longform" placeholder="Write a comment…"></textarea>
  <div class="slds-publisher__actions slds-grid slds-grid_align-spread">
    <ul class="slds-grid slds-publisher__toggle-visibility">
      <li>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Add User">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#adduser"></use>
          </svg>
          <span class="slds-assistive-text">Add User</span>
        </button>
      </li>
      <li>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Attach a file">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#attach"></use>
          </svg>
          <span class="slds-assistive-text">Attach a file</span>
        </button>
      </li>
    </ul>
    <button class="slds-button slds-button_brand">Share</button>
  </div>
</div>
:::

::: legacy-component-example title="Active"
<div class="slds-publisher slds-is-active">
  <label for="comment-text-input2" class="slds-publisher__toggle-visibility slds-m-bottom_small">
    <span class="slds-assistive-text">Write a comment</span>To: My followers</label>
  <textarea id="comment-text-input2" class="slds-publisher__input slds-textarea slds-text-longform" placeholder="Write a comment…"></textarea>
  <div class="slds-publisher__actions slds-grid slds-grid_align-spread">
    <ul class="slds-grid slds-publisher__toggle-visibility">
      <li>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Add User">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#adduser"></use>
          </svg>
          <span class="slds-assistive-text">Add User</span>
        </button>
      </li>
      <li>
        <button class="slds-button slds-button_icon slds-button_icon-container" title="Attach a file">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#attach"></use>
          </svg>
          <span class="slds-assistive-text">Attach a file</span>
        </button>
      </li>
    </ul>
    <button class="slds-button slds-button_brand">Share</button>
  </div>
</div>
:::

::: legacy-component-example title="Comment"
<div class="slds-media slds-comment slds-hint-parent">
  <div class="slds-media__figure">
    <a class="slds-avatar slds-avatar_circle slds-avatar_medium" href="#">
      <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
    </a>
  </div>
  <div class="slds-media__body">
    <div class="slds-publisher slds-publisher_comment">
      <label for="comment-text-input-01" class="slds-assistive-text">Write a comment</label>
      <textarea id="comment-text-input-01" class="slds-publisher__input slds-input_bare slds-text-longform" placeholder="Write a comment…"></textarea>
      <div class="slds-publisher__actions slds-grid slds-grid_align-spread">
        <ul class="slds-grid">
          <li>
            <button class="slds-button slds-button_icon slds-button_icon-container" title="Add User">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#adduser"></use>
              </svg>
              <span class="slds-assistive-text">Add User</span>
            </button>
          </li>
          <li>
            <button class="slds-button slds-button_icon slds-button_icon-container" title="Attach a file">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#attach"></use>
              </svg>
              <span class="slds-assistive-text">Attach a file</span>
            </button>
          </li>
        </ul>
        <button class="slds-button slds-button_brand">Comment</button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Active"
<div class="slds-media slds-comment slds-hint-parent">
  <div class="slds-media__figure">
    <a class="slds-avatar slds-avatar_circle slds-avatar_medium" href="#">
      <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
    </a>
  </div>
  <div class="slds-media__body">
    <div class="slds-publisher slds-publisher_comment slds-is-active">
      <label for="comment-text-input-01" class="slds-assistive-text">Write a comment</label>
      <textarea id="comment-text-input-01" class="slds-publisher__input slds-input_bare slds-text-longform" placeholder="Write a comment…"></textarea>
      <div class="slds-publisher__actions slds-grid slds-grid_align-spread">
        <ul class="slds-grid">
          <li>
            <button class="slds-button slds-button_icon slds-button_icon-container" title="Add User">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#adduser"></use>
              </svg>
              <span class="slds-assistive-text">Add User</span>
            </button>
          </li>
          <li>
            <button class="slds-button slds-button_icon slds-button_icon-container" title="Attach a file">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#attach"></use>
              </svg>
              <span class="slds-assistive-text">Attach a file</span>
            </button>
          </li>
        </ul>
        <button class="slds-button slds-button_brand">Comment</button>
      </div>
    </div>
  </div>
</div>
:::

::: legacy-component-example title="Focused"
<div class="slds-media slds-comment slds-hint-parent">
  <div class="slds-media__figure">
    <a class="slds-avatar slds-avatar_circle slds-avatar_medium" href="#">
      <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
    </a>
  </div>
  <div class="slds-media__body">
    <div class="slds-publisher slds-publisher_comment slds-has-focus">
      <label for="comment-text-input-01" class="slds-assistive-text">Write a comment</label>
      <textarea id="comment-text-input-01" class="slds-publisher__input slds-input_bare slds-text-longform" placeholder="Write a comment…"></textarea>
      <div class="slds-publisher__actions slds-grid slds-grid_align-spread">
        <ul class="slds-grid">
          <li>
            <button class="slds-button slds-button_icon slds-button_icon-container" title="Add User">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#adduser"></use>
              </svg>
              <span class="slds-assistive-text">Add User</span>
            </button>
          </li>
          <li>
            <button class="slds-button slds-button_icon slds-button_icon-container" title="Attach a file">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#attach"></use>
              </svg>
              <span class="slds-assistive-text">Attach a file</span>
            </button>
          </li>
        </ul>
        <button class="slds-button slds-button_brand">Comment</button>
      </div>
    </div>
  </div>
</div>
:::
