---
title: Notifications
---

SLDS 1 blueprint examples for **Notifications**.

::: legacy-component-example title="Base"
<div class="demo-only demo-only_viewport" style="height:4.5rem">
  <div class="slds-notification-container">
    <div aria-live="assertive" aria-atomic="true" class="slds-assistive-text">event notification: Tesla - Renewal meeting</div>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-86" aria-describedby="dialog-body-id-85">
      <div class="slds-notification__body" id="dialog-body-id-85">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-event slds-media__figure" title="event">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-86">
              <span class="slds-assistive-text">event notification:</span>Tesla - Renewal meeting</h2>
            <p>Event at 11:00am on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Tesla - Renewal meeting notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Tesla - Renewal meeting notification</span>
        </button>
      </div>
    </section>
  </div>
</div>
:::

::: legacy-component-example title="Task Notification"
<div class="demo-only demo-only_viewport" style="height:4.5rem">
  <div class="slds-notification-container">
    <div aria-live="assertive" aria-atomic="true" class="slds-assistive-text">task notification: Call: Jane Johnson</div>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-90" aria-describedby="dialog-body-id-89">
      <div class="slds-notification__body" id="dialog-body-id-89">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-task slds-media__figure" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-90">
              <span class="slds-assistive-text">task notification:</span>Call: Jane Johnson</h2>
            <p>Task due on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call: Jane Johnson notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call: Jane Johnson notification</span>
        </button>
      </div>
    </section>
  </div>
</div>
:::

::: legacy-component-example title="Stacked Notifications"
<div class="demo-only demo-only_viewport" style="height:15rem">
  <div class="slds-notification-container">
    <div aria-live="assertive" aria-atomic="true" class="slds-assistive-text">task notification: Call One: Jane Johnson</div>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-96" aria-describedby="dialog-body-id-95">
      <div class="slds-notification__body" id="dialog-body-id-95">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-task slds-media__figure" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-96">
              <span class="slds-assistive-text">task notification:</span>Call One: Jane Johnson</h2>
            <p>Task due on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call One: Jane Johnson notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call One: Jane Johnson notification</span>
        </button>
      </div>
    </section>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-98" aria-describedby="dialog-body-id-97">
      <div class="slds-notification__body" id="dialog-body-id-97">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-event slds-media__figure" title="event">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-98">
              <span class="slds-assistive-text">event notification:</span>Call Two: Tesla - Renewal meeting</h2>
            <p>Event at 11:00am on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Two: Tesla - Renewal meeting notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Two: Tesla - Renewal meeting notification</span>
        </button>
      </div>
    </section>
  </div>
</div>
:::

::: legacy-component-example title="Three Stacked Notifications"
<div class="demo-only demo-only_viewport" style="height:15rem">
  <div class="slds-notification-container">
    <div aria-live="assertive" aria-atomic="true" class="slds-assistive-text">task notification: Call Two: Jane Johnson</div>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-106" aria-describedby="dialog-body-id-105">
      <div class="slds-notification__body" id="dialog-body-id-105">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-task slds-media__figure" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-106">
              <span class="slds-assistive-text">task notification:</span>Call Two: Jane Johnson</h2>
            <p>Task due on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Two: Jane Johnson notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Two: Jane Johnson notification</span>
        </button>
      </div>
    </section>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-108" aria-describedby="dialog-body-id-107">
      <div class="slds-notification__body" id="dialog-body-id-107">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-event slds-media__figure" title="event">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-108">
              <span class="slds-assistive-text">event notification:</span>Call Three: Tesla - Renewal meeting</h2>
            <p>Event at 11:00am on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Three: Tesla - Renewal meeting notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Three: Tesla - Renewal meeting notification</span>
        </button>
      </div>
    </section>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-110" aria-describedby="dialog-body-id-109">
      <div class="slds-notification__body" id="dialog-body-id-109">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-task slds-media__figure" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-110">
              <span class="slds-assistive-text">task notification:</span>Call Four: Jim Jameson</h2>
            <p>Task due on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Four: Jim Jameson notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Four: Jim Jameson notification</span>
        </button>
      </div>
    </section>
  </div>
</div>
:::

::: legacy-component-example title="Six Stacked Notifications"
<div class="demo-only demo-only_viewport" style="height:17rem">
  <div class="slds-notification-container">
    <div aria-live="assertive" aria-atomic="true" class="slds-assistive-text">task notification: Call Five: Jane Johnson</div>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-124" aria-describedby="dialog-body-id-123">
      <div class="slds-notification__body" id="dialog-body-id-123">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-task slds-media__figure" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-124">
              <span class="slds-assistive-text">task notification:</span>Call Five: Jane Johnson</h2>
            <p>Task due on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Five: Jane Johnson notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Five: Jane Johnson notification</span>
        </button>
      </div>
    </section>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-126" aria-describedby="dialog-body-id-125">
      <div class="slds-notification__body" id="dialog-body-id-125">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-event slds-media__figure" title="event">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-126">
              <span class="slds-assistive-text">event notification:</span>Call Six: Tesla - Renewal meeting</h2>
            <p>Event at 11:00am on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Six: Tesla - Renewal meeting notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Six: Tesla - Renewal meeting notification</span>
        </button>
      </div>
    </section>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-128" aria-describedby="dialog-body-id-127">
      <div class="slds-notification__body" id="dialog-body-id-127">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-task slds-media__figure" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-128">
              <span class="slds-assistive-text">task notification:</span>Call Seven: Jim Jameson</h2>
            <p>Task due on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Seven: Jim Jameson notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Seven: Jim Jameson notification</span>
        </button>
      </div>
    </section>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-130" aria-describedby="dialog-body-id-129">
      <div class="slds-notification__body" id="dialog-body-id-129">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-task slds-media__figure" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-130">
              <span class="slds-assistive-text">task notification:</span>Call Eight: Jane Johnson</h2>
            <p>Task due on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Eight: Jane Johnson notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Eight: Jane Johnson notification</span>
        </button>
      </div>
    </section>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-132" aria-describedby="dialog-body-id-131">
      <div class="slds-notification__body" id="dialog-body-id-131">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-event slds-media__figure" title="event">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-132">
              <span class="slds-assistive-text">event notification:</span>Call Nine: Tesla - Renewal meeting</h2>
            <p>Event at 11:00am on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Nine: Tesla - Renewal meeting notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Nine: Tesla - Renewal meeting notification</span>
        </button>
      </div>
    </section>
    <section class="slds-notification" role="dialog" aria-labelledby="noti-134" aria-describedby="dialog-body-id-133">
      <div class="slds-notification__body" id="dialog-body-id-133">
        <a class="slds-notification__target slds-media" href="#">
          <span class="slds-icon_container slds-icon-standard-task slds-media__figure" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
          </span>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-m-bottom_xx-small" id="noti-134">
              <span class="slds-assistive-text">task notification:</span>Call Ten: Jim Jameson</h2>
            <p>Task due on Jan 8</p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button_icon-container slds-notification__close" title="Dismiss Call Ten: Jim Jameson notification">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span class="slds-assistive-text">Dismiss Call Ten: Jim Jameson notification</span>
        </button>
      </div>
    </section>
  </div>
</div>
:::
