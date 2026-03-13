---
title: Setup Assistant
---

SLDS 1 blueprint examples for **Setup Assistant**.

::: legacy-component-example title="Base"
<ol class="slds-setup-assistant">
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-setup-assistant__step-summary-content slds-media__body">
            <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Add Users to Your Org</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="slds-media__figure slds-media__figure_reverse">
            <button class="slds-button slds-button_outline-brand">Add Users</button>
            <p class="slds-text-align_right slds-text-color_weak slds-p-top_medium">4 mins</p>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-setup-assistant__step-summary-content slds-media__body">
            <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Create Profiles for Your Users</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="slds-media__figure slds-media__figure_reverse">
            <button class="slds-button slds-button_outline-brand">Add Profiles</button>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-setup-assistant__step-summary-content slds-media__body">
            <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Learn How to Use Profiles to Control Visibility</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="slds-media__figure slds-media__figure_reverse">
            <a href="#">View on Trailhead</a>
            <p class="slds-text-align_right slds-text-color_weak slds-p-top_medium">15 mins</p>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-setup-assistant__step-summary-content slds-media__body">
            <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Turn On Tracking for Profiles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="slds-media__figure slds-media__figure_reverse">
            <div class="slds-form-element">
              <label class="slds-checkbox_toggle slds-grid">
                <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on tracking for profiles</span>
                <input type="checkbox" name="checkbox-toggle-39" value="checkbox-toggle-39" role="switch" aria-describedby="checkbox-toggle-39" />
                <span id="checkbox-toggle-39" class="slds-checkbox_faux_container">
                  <span class="slds-checkbox_faux"></span>
                  <span class="slds-checkbox_on">On</span>
                  <span class="slds-checkbox_off">Off</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-setup-assistant__step-summary-content slds-media__body">
            <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Setup Einstein Visibility for Admins</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="slds-media__figure slds-media__figure_reverse">
            <a href="#">Watch Video</a>
          </div>
        </div>
      </div>
    </article>
  </li>
</ol>
:::

::: legacy-component-example title="With Step Progress"
<ol class="slds-setup-assistant">
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-media__figure">
            <div class="slds-progress-ring slds-progress-ring_complete slds-progress-ring_large">
              <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
                <svg viewBox="-1 -1 2 2">
                  <circle class="slds-progress-ring__path" id="slds-progress-ring-path-62" cx="0" cy="0" r="1"></circle>
                </svg>
              </div>
              <div class="slds-progress-ring__content">
                <span class="slds-icon_container slds-icon-utility-check" title="Complete">
                  <svg class="slds-icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                  </svg>
                  <span class="slds-assistive-text">Complete</span>
                </span>
              </div>
            </div>
          </div>
          <div class="slds-media__body slds-m-top_x-small">
            <div class="slds-media">
              <div class="slds-setup-assistant__step-summary-content slds-media__body">
                <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Add Users to Your Org</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="slds-media__figure slds-media__figure_reverse">
                <button class="slds-button slds-button_outline-brand">Add Users</button>
                <p class="slds-text-align_right slds-text-color_weak slds-p-top_medium">4 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-media__figure">
            <div class="slds-progress-ring slds-progress-ring_large">
              <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress ring}}">
                <svg viewBox="-1 -1 2 2">
                  <path class="slds-progress-ring__path" id="slds-progress-ring-path-63" d="M 1 0 A 1 1 0 0 0 1.00 -0.00 L 0 0"></path>
                </svg>
              </div>
              <div class="slds-progress-ring__content">2</div>
            </div>
          </div>
          <div class="slds-media__body slds-m-top_x-small">
            <div class="slds-media">
              <div class="slds-setup-assistant__step-summary-content slds-media__body">
                <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Create Profiles for Your Users</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="slds-media__figure slds-media__figure_reverse">
                <button class="slds-button slds-button_outline-brand">Add Profiles</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-media__figure">
            <div class="slds-progress-ring slds-progress-ring_complete slds-progress-ring_large">
              <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
                <svg viewBox="-1 -1 2 2">
                  <circle class="slds-progress-ring__path" id="slds-progress-ring-path-64" cx="0" cy="0" r="1"></circle>
                </svg>
              </div>
              <div class="slds-progress-ring__content">
                <span class="slds-icon_container slds-icon-utility-check" title="Complete">
                  <svg class="slds-icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                  </svg>
                  <span class="slds-assistive-text">Complete</span>
                </span>
              </div>
            </div>
          </div>
          <div class="slds-media__body slds-m-top_x-small">
            <div class="slds-media">
              <div class="slds-setup-assistant__step-summary-content slds-media__body">
                <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Learn How to Use Profiles to Control Visibility</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="slds-media__figure slds-media__figure_reverse">
                <a href="#">View on Trailhead</a>
                <p class="slds-text-align_right slds-text-color_weak slds-p-top_medium">15 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-media__figure">
            <div class="slds-progress-ring slds-progress-ring_large">
              <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress ring}}">
                <svg viewBox="-1 -1 2 2">
                  <path class="slds-progress-ring__path" id="slds-progress-ring-path-65" d="M 1 0 A 1 1 0 0 0 1.00 -0.00 L 0 0"></path>
                </svg>
              </div>
              <div class="slds-progress-ring__content">4</div>
            </div>
          </div>
          <div class="slds-media__body slds-m-top_x-small">
            <div class="slds-media">
              <div class="slds-setup-assistant__step-summary-content slds-media__body">
                <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Turn On Tracking for Profiles</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="slds-media__figure slds-media__figure_reverse">
                <div class="slds-form-element">
                  <label class="slds-checkbox_toggle slds-grid">
                    <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on tracking for profiles</span>
                    <input type="checkbox" name="checkbox-toggle-41" value="checkbox-toggle-41" role="switch" aria-describedby="checkbox-toggle-41" />
                    <span id="checkbox-toggle-41" class="slds-checkbox_faux_container">
                      <span class="slds-checkbox_faux"></span>
                      <span class="slds-checkbox_on">On</span>
                      <span class="slds-checkbox_off">Off</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-setup-assistant__step-summary">
        <div class="slds-media">
          <div class="slds-media__figure">
            <div class="slds-progress-ring slds-progress-ring_large">
              <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress ring}}">
                <svg viewBox="-1 -1 2 2">
                  <path class="slds-progress-ring__path" id="slds-progress-ring-path-66" d="M 1 0 A 1 1 0 0 0 1.00 -0.00 L 0 0"></path>
                </svg>
              </div>
              <div class="slds-progress-ring__content">5</div>
            </div>
          </div>
          <div class="slds-media__body slds-m-top_x-small">
            <div class="slds-media">
              <div class="slds-setup-assistant__step-summary-content slds-media__body">
                <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">Setup Einstein Visibility for Admins</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="slds-media__figure slds-media__figure_reverse">
                <a href="#">Watch Video</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
</ol>
:::

::: legacy-component-example title="Accessibility Note"
<ol class="slds-setup-assistant">
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-summary-detail">
        <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Add Users to Your Org" aria-controls="step-0-summary-action" aria-expanded="false">
          <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
          </svg>
          <span class="slds-assistive-text">Toggle details for Add Users to Your Org</span>
        </button>
        <div class="slds-container_fluid">
          <div class="slds-summary-detail__title">
            <div class="slds-setup-assistant__step-summary">
              <div class="slds-media">
                <div class="slds-media__figure">
                  <div class="slds-progress-ring slds-progress-ring_complete slds-progress-ring_large">
                    <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
                      <svg viewBox="-1 -1 2 2">
                        <circle class="slds-progress-ring__path" id="slds-progress-ring-path-73" cx="0" cy="0" r="1"></circle>
                      </svg>
                    </div>
                    <div class="slds-progress-ring__content">
                      <span class="slds-icon_container slds-icon-utility-check" title="Complete">
                        <svg class="slds-icon" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                        <span class="slds-assistive-text">Complete</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="slds-media__body slds-m-top_x-small">
                  <div class="slds-media">
                    <div class="slds-setup-assistant__step-summary-content slds-media__body">
                      <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                        <button class="slds-button slds-button_reset" aria-controls="step-0-summary-action" aria-expanded="false">Add Users to Your Org</button>
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="slds-media__figure slds-media__figure_reverse">
                      <p class="slds-text-align_right slds-text-color_weak">4 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div hidden="" class="slds-summary-detail__content" id="step-0-summary-action">
            <div class="slds-setup-assistant__step-detail">
              <div class="slds-progress slds-progress_vertical slds-progress_success">
                <ol class="slds-progress__list slds-progress__list-bordered">
                  <li class="slds-progress__item slds-is-completed">
                    <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                      <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                      </svg>
                      <span class="slds-assistive-text">Complete</span>
                    </span>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <div class="slds-form-element">
                          <label class="slds-checkbox_toggle slds-grid">
                            <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                            <input type="checkbox" name="checkbox-toggle-47" value="checkbox-toggle-47" role="switch" aria-describedby="checkbox-toggle-47" checked="" />
                            <span id="checkbox-toggle-47" class="slds-checkbox_faux_container">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-checkbox_on">On</span>
                              <span class="slds-checkbox_off">Off</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item slds-is-active">
                    <div class="slds-progress__marker">
                      <span class="slds-assistive-text">Active</span>
                    </div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <a href="#">View in Trailhead</a>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item">
                    <div class="slds-progress__marker"></div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <button class="slds-button slds-button_outline-brand">Add Users</button>
                      </div>
                    </div>
                  </li>
                </ol>
                <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                  <span class="slds-assistive-text">Progress: 50%</span>
                </div>
              </div>
              <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                <div class="slds-media__figure">
                  <span class="slds-icon_container slds-icon-utility-info" title="information">
                    <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                    </svg>
                    <span class="slds-assistive-text">information</span>
                  </span>
                </div>
                <div class="slds-media__body">
                  <p>It looks as if duplicates exist for this lead.
                    <a href="#">View Duplicates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-summary-detail slds-is-open">
        <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Create Profiles for Your Users" aria-controls="step-1-summary-action" aria-expanded="true">
          <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
          </svg>
          <span class="slds-assistive-text">Toggle details for Create Profiles for Your Users</span>
        </button>
        <div class="slds-container_fluid">
          <div class="slds-summary-detail__title">
            <div class="slds-setup-assistant__step-summary">
              <div class="slds-media">
                <div class="slds-media__figure">
                  <div class="slds-progress-ring slds-progress-ring_active-step slds-progress-ring_large">
                    <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-label="{{Placeholder for description of progress ring}}">
                      <svg viewBox="-1 -1 2 2">
                        <path class="slds-progress-ring__path" id="slds-progress-ring-path-74" d="M 1 0 A 1 1 0 0 0 -0.48 -0.88 L 0 0"></path>
                      </svg>
                    </div>
                    <div class="slds-progress-ring__content">2</div>
                    <div class="slds-progress-ring__progress-head">
                      <svg viewBox="-1 -1 2 2">
                        <circle class="slds-progress-ring__path" id="slds-progress-ring-path-75" cx="-0.33599999999999997" cy="-0.616" r="0.2"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="slds-media__body slds-m-top_x-small">
                  <div class="slds-media">
                    <div class="slds-setup-assistant__step-summary-content slds-media__body">
                      <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                        <button class="slds-button slds-button_reset" aria-controls="step-1-summary-action" aria-expanded="true">Create Profiles for Your Users</button>
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="slds-media__figure slds-media__figure_reverse">
                      <p class="slds-text-align_right slds-text-color_weak">10 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slds-summary-detail__content" id="step-1-summary-action">
            <div class="slds-setup-assistant__step-detail">
              <div class="slds-progress slds-progress_vertical slds-progress_success">
                <ol class="slds-progress__list slds-progress__list-bordered">
                  <li class="slds-progress__item slds-is-completed">
                    <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                      <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                      </svg>
                      <span class="slds-assistive-text">Complete</span>
                    </span>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <div class="slds-form-element">
                          <label class="slds-checkbox_toggle slds-grid">
                            <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                            <input type="checkbox" name="checkbox-toggle-48" value="checkbox-toggle-48" role="switch" aria-describedby="checkbox-toggle-48" checked="" />
                            <span id="checkbox-toggle-48" class="slds-checkbox_faux_container">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-checkbox_on">On</span>
                              <span class="slds-checkbox_off">Off</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item slds-is-active">
                    <div class="slds-progress__marker">
                      <span class="slds-assistive-text">Active</span>
                    </div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <a href="#">View in Trailhead</a>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item">
                    <div class="slds-progress__marker"></div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <button class="slds-button slds-button_outline-brand">Add Users</button>
                      </div>
                    </div>
                  </li>
                </ol>
                <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                  <span class="slds-assistive-text">Progress: 50%</span>
                </div>
              </div>
              <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                <div class="slds-media__figure">
                  <span class="slds-icon_container slds-icon-utility-info" title="information">
                    <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                    </svg>
                    <span class="slds-assistive-text">information</span>
                  </span>
                </div>
                <div class="slds-media__body">
                  <p>It looks as if duplicates exist for this lead.
                    <a href="#">View Duplicates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-summary-detail">
        <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Learn How to Use Profiles to Control Visibility" aria-controls="step-2-summary-action" aria-expanded="false">
          <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
          </svg>
          <span class="slds-assistive-text">Toggle details for Learn How to Use Profiles to Control Visibility</span>
        </button>
        <div class="slds-container_fluid">
          <div class="slds-summary-detail__title">
            <div class="slds-setup-assistant__step-summary">
              <div class="slds-media">
                <div class="slds-media__figure">
                  <div class="slds-progress-ring slds-progress-ring_complete slds-progress-ring_large">
                    <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
                      <svg viewBox="-1 -1 2 2">
                        <circle class="slds-progress-ring__path" id="slds-progress-ring-path-76" cx="0" cy="0" r="1"></circle>
                      </svg>
                    </div>
                    <div class="slds-progress-ring__content">
                      <span class="slds-icon_container slds-icon-utility-check" title="Complete">
                        <svg class="slds-icon" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                        </svg>
                        <span class="slds-assistive-text">Complete</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="slds-media__body slds-m-top_x-small">
                  <div class="slds-media">
                    <div class="slds-setup-assistant__step-summary-content slds-media__body">
                      <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                        <button class="slds-button slds-button_reset" aria-controls="step-2-summary-action" aria-expanded="false">Learn How to Use Profiles to Control Visibility</button>
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="slds-media__figure slds-media__figure_reverse">
                      <p class="slds-text-align_right slds-text-color_weak">15 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div hidden="" class="slds-summary-detail__content" id="step-2-summary-action">
            <div class="slds-setup-assistant__step-detail">
              <div class="slds-progress slds-progress_vertical slds-progress_success">
                <ol class="slds-progress__list slds-progress__list-bordered">
                  <li class="slds-progress__item slds-is-completed">
                    <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                      <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                      </svg>
                      <span class="slds-assistive-text">Complete</span>
                    </span>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <div class="slds-form-element">
                          <label class="slds-checkbox_toggle slds-grid">
                            <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                            <input type="checkbox" name="checkbox-toggle-49" value="checkbox-toggle-49" role="switch" aria-describedby="checkbox-toggle-49" checked="" />
                            <span id="checkbox-toggle-49" class="slds-checkbox_faux_container">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-checkbox_on">On</span>
                              <span class="slds-checkbox_off">Off</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item slds-is-active">
                    <div class="slds-progress__marker">
                      <span class="slds-assistive-text">Active</span>
                    </div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <a href="#">View in Trailhead</a>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item">
                    <div class="slds-progress__marker"></div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <button class="slds-button slds-button_outline-brand">Add Users</button>
                      </div>
                    </div>
                  </li>
                </ol>
                <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                  <span class="slds-assistive-text">Progress: 50%</span>
                </div>
              </div>
              <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                <div class="slds-media__figure">
                  <span class="slds-icon_container slds-icon-utility-info" title="information">
                    <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                    </svg>
                    <span class="slds-assistive-text">information</span>
                  </span>
                </div>
                <div class="slds-media__body">
                  <p>It looks as if duplicates exist for this lead.
                    <a href="#">View Duplicates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-summary-detail">
        <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Turn On Tracking for Profiles" aria-controls="step-3-summary-action" aria-expanded="false">
          <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
          </svg>
          <span class="slds-assistive-text">Toggle details for Turn On Tracking for Profiles</span>
        </button>
        <div class="slds-container_fluid">
          <div class="slds-summary-detail__title">
            <div class="slds-setup-assistant__step-summary">
              <div class="slds-media">
                <div class="slds-media__figure">
                  <div class="slds-progress-ring slds-progress-ring_large">
                    <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress ring}}">
                      <svg viewBox="-1 -1 2 2">
                        <path class="slds-progress-ring__path" id="slds-progress-ring-path-77" d="M 1 0 A 1 1 0 0 0 1.00 -0.00 L 0 0"></path>
                      </svg>
                    </div>
                    <div class="slds-progress-ring__content">4</div>
                  </div>
                </div>
                <div class="slds-media__body slds-m-top_x-small">
                  <div class="slds-media">
                    <div class="slds-setup-assistant__step-summary-content slds-media__body">
                      <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                        <button class="slds-button slds-button_reset" aria-controls="step-3-summary-action" aria-expanded="false">Turn On Tracking for Profiles</button>
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="slds-media__figure slds-media__figure_reverse">
                      <p class="slds-text-align_right slds-text-color_weak">10 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div hidden="" class="slds-summary-detail__content" id="step-3-summary-action">
            <div class="slds-setup-assistant__step-detail">
              <div class="slds-progress slds-progress_vertical slds-progress_success">
                <ol class="slds-progress__list slds-progress__list-bordered">
                  <li class="slds-progress__item slds-is-completed">
                    <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                      <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                      </svg>
                      <span class="slds-assistive-text">Complete</span>
                    </span>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <div class="slds-form-element">
                          <label class="slds-checkbox_toggle slds-grid">
                            <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                            <input type="checkbox" name="checkbox-toggle-50" value="checkbox-toggle-50" role="switch" aria-describedby="checkbox-toggle-50" checked="" />
                            <span id="checkbox-toggle-50" class="slds-checkbox_faux_container">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-checkbox_on">On</span>
                              <span class="slds-checkbox_off">Off</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item slds-is-active">
                    <div class="slds-progress__marker">
                      <span class="slds-assistive-text">Active</span>
                    </div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <a href="#">View in Trailhead</a>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item">
                    <div class="slds-progress__marker"></div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <button class="slds-button slds-button_outline-brand">Add Users</button>
                      </div>
                    </div>
                  </li>
                </ol>
                <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                  <span class="slds-assistive-text">Progress: 50%</span>
                </div>
              </div>
              <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                <div class="slds-media__figure">
                  <span class="slds-icon_container slds-icon-utility-info" title="information">
                    <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                    </svg>
                    <span class="slds-assistive-text">information</span>
                  </span>
                </div>
                <div class="slds-media__body">
                  <p>It looks as if duplicates exist for this lead.
                    <a href="#">View Duplicates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
  <li class="slds-setup-assistant__item">
    <article class="slds-setup-assistant__step">
      <div class="slds-summary-detail">
        <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Setup Einstein Visibility for Admins" aria-controls="step-4-summary-action" aria-expanded="false">
          <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
          </svg>
          <span class="slds-assistive-text">Toggle details for Setup Einstein Visibility for Admins</span>
        </button>
        <div class="slds-container_fluid">
          <div class="slds-summary-detail__title">
            <div class="slds-setup-assistant__step-summary">
              <div class="slds-media">
                <div class="slds-media__figure">
                  <div class="slds-progress-ring slds-progress-ring_large">
                    <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress ring}}">
                      <svg viewBox="-1 -1 2 2">
                        <path class="slds-progress-ring__path" id="slds-progress-ring-path-78" d="M 1 0 A 1 1 0 0 0 1.00 -0.00 L 0 0"></path>
                      </svg>
                    </div>
                    <div class="slds-progress-ring__content">5</div>
                  </div>
                </div>
                <div class="slds-media__body slds-m-top_x-small">
                  <div class="slds-media">
                    <div class="slds-setup-assistant__step-summary-content slds-media__body">
                      <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                        <button class="slds-button slds-button_reset" aria-controls="step-4-summary-action" aria-expanded="false">Setup Einstein Visibility for Admins</button>
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="slds-media__figure slds-media__figure_reverse">
                      <p class="slds-text-align_right slds-text-color_weak">10 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div hidden="" class="slds-summary-detail__content" id="step-4-summary-action">
            <div class="slds-setup-assistant__step-detail">
              <div class="slds-progress slds-progress_vertical slds-progress_success">
                <ol class="slds-progress__list slds-progress__list-bordered">
                  <li class="slds-progress__item slds-is-completed">
                    <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                      <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                      </svg>
                      <span class="slds-assistive-text">Complete</span>
                    </span>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <div class="slds-form-element">
                          <label class="slds-checkbox_toggle slds-grid">
                            <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                            <input type="checkbox" name="checkbox-toggle-51" value="checkbox-toggle-51" role="switch" aria-describedby="checkbox-toggle-51" checked="" />
                            <span id="checkbox-toggle-51" class="slds-checkbox_faux_container">
                              <span class="slds-checkbox_faux"></span>
                              <span class="slds-checkbox_on">On</span>
                              <span class="slds-checkbox_off">Off</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item slds-is-active">
                    <div class="slds-progress__marker">
                      <span class="slds-assistive-text">Active</span>
                    </div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <a href="#">View in Trailhead</a>
                      </div>
                    </div>
                  </li>
                  <li class="slds-progress__item">
                    <div class="slds-progress__marker"></div>
                    <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                      <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                      <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                        <button class="slds-button slds-button_outline-brand">Add Users</button>
                      </div>
                    </div>
                  </li>
                </ol>
                <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                  <span class="slds-assistive-text">Progress: 50%</span>
                </div>
              </div>
              <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                <div class="slds-media__figure">
                  <span class="slds-icon_container slds-icon-utility-info" title="information">
                    <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                    </svg>
                    <span class="slds-assistive-text">information</span>
                  </span>
                </div>
                <div class="slds-media__body">
                  <p>It looks as if duplicates exist for this lead.
                    <a href="#">View Duplicates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
</ol>
:::

::: legacy-component-example title="Accessibility Note"
<section class="slds-card">
  <header class="slds-theme_shade slds-p-around_medium slds-m-bottom_small">
    <div>
      <div class="slds-grid slds-grid_align-spread slds-p-bottom_x-small" id="progress-bar-label-id-5">
        <span>Complete all the steps below to finish setting up Einstein Visibility</span>
        <span aria-hidden="true">
          <strong>50% Complete</strong>
        </span>
      </div>
      <div class="slds-progress-bar slds-progress-bar_circular" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-labelledby="progress-bar-label-id-5" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
        <span class="slds-progress-bar__value" style="width:50%">
          <span class="slds-assistive-text" id="progress-bar-label-id-5">Progress: 50%</span>
        </span>
      </div>
    </div>
  </header>
  <ol class="slds-setup-assistant">
    <li class="slds-setup-assistant__item">
      <article class="slds-setup-assistant__step">
        <div class="slds-summary-detail">
          <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Add Users to Your Org" aria-controls="step-0-summary-action" aria-expanded="false">
            <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-assistive-text">Toggle details for Add Users to Your Org</span>
          </button>
          <div class="slds-container_fluid">
            <div class="slds-summary-detail__title">
              <div class="slds-setup-assistant__step-summary">
                <div class="slds-media">
                  <div class="slds-media__figure">
                    <div class="slds-progress-ring slds-progress-ring_complete slds-progress-ring_large">
                      <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
                        <svg viewBox="-1 -1 2 2">
                          <circle class="slds-progress-ring__path" id="slds-progress-ring-path-85" cx="0" cy="0" r="1"></circle>
                        </svg>
                      </div>
                      <div class="slds-progress-ring__content">
                        <span class="slds-icon_container slds-icon-utility-check" title="Complete">
                          <svg class="slds-icon" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                          </svg>
                          <span class="slds-assistive-text">Complete</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="slds-media__body slds-m-top_x-small">
                    <div class="slds-media">
                      <div class="slds-setup-assistant__step-summary-content slds-media__body">
                        <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                          <button class="slds-button slds-button_reset" aria-controls="step-0-summary-action" aria-expanded="false">Add Users to Your Org</button>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                      <div class="slds-media__figure slds-media__figure_reverse">
                        <p class="slds-text-align_right slds-text-color_weak">4 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div hidden="" class="slds-summary-detail__content" id="step-0-summary-action">
              <div class="slds-setup-assistant__step-detail">
                <div class="slds-progress slds-progress_vertical slds-progress_success">
                  <ol class="slds-progress__list slds-progress__list-bordered">
                    <li class="slds-progress__item slds-is-completed">
                      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                        </svg>
                        <span class="slds-assistive-text">Complete</span>
                      </span>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <div class="slds-form-element">
                            <label class="slds-checkbox_toggle slds-grid">
                              <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                              <input type="checkbox" name="checkbox-toggle-57" value="checkbox-toggle-57" role="switch" aria-describedby="checkbox-toggle-57" checked="" />
                              <span id="checkbox-toggle-57" class="slds-checkbox_faux_container">
                                <span class="slds-checkbox_faux"></span>
                                <span class="slds-checkbox_on">On</span>
                                <span class="slds-checkbox_off">Off</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item slds-is-active">
                      <div class="slds-progress__marker">
                        <span class="slds-assistive-text">Active</span>
                      </div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <a href="#">View in Trailhead</a>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item">
                      <div class="slds-progress__marker"></div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <button class="slds-button slds-button_outline-brand">Add Users</button>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                    <span class="slds-assistive-text">Progress: 50%</span>
                  </div>
                </div>
                <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                  <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-utility-info" title="information">
                      <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                      </svg>
                      <span class="slds-assistive-text">information</span>
                    </span>
                  </div>
                  <div class="slds-media__body">
                    <p>It looks as if duplicates exist for this lead.
                      <a href="#">View Duplicates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
    <li class="slds-setup-assistant__item">
      <article class="slds-setup-assistant__step">
        <div class="slds-summary-detail slds-is-open">
          <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Create Profiles for Your Users" aria-controls="step-1-summary-action" aria-expanded="true">
            <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-assistive-text">Toggle details for Create Profiles for Your Users</span>
          </button>
          <div class="slds-container_fluid">
            <div class="slds-summary-detail__title">
              <div class="slds-setup-assistant__step-summary">
                <div class="slds-media">
                  <div class="slds-media__figure">
                    <div class="slds-progress-ring slds-progress-ring_active-step slds-progress-ring_large">
                      <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-label="{{Placeholder for description of progress ring}}">
                        <svg viewBox="-1 -1 2 2">
                          <path class="slds-progress-ring__path" id="slds-progress-ring-path-86" d="M 1 0 A 1 1 0 0 0 -0.48 -0.88 L 0 0"></path>
                        </svg>
                      </div>
                      <div class="slds-progress-ring__content">2</div>
                      <div class="slds-progress-ring__progress-head">
                        <svg viewBox="-1 -1 2 2">
                          <circle class="slds-progress-ring__path" id="slds-progress-ring-path-87" cx="-0.33599999999999997" cy="-0.616" r="0.2"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="slds-media__body slds-m-top_x-small">
                    <div class="slds-media">
                      <div class="slds-setup-assistant__step-summary-content slds-media__body">
                        <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                          <button class="slds-button slds-button_reset" aria-controls="step-1-summary-action" aria-expanded="true">Create Profiles for Your Users</button>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                      <div class="slds-media__figure slds-media__figure_reverse">
                        <p class="slds-text-align_right slds-text-color_weak">10 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slds-summary-detail__content" id="step-1-summary-action">
              <div class="slds-setup-assistant__step-detail">
                <div class="slds-progress slds-progress_vertical slds-progress_success">
                  <ol class="slds-progress__list slds-progress__list-bordered">
                    <li class="slds-progress__item slds-is-completed">
                      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                        </svg>
                        <span class="slds-assistive-text">Complete</span>
                      </span>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <div class="slds-form-element">
                            <label class="slds-checkbox_toggle slds-grid">
                              <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                              <input type="checkbox" name="checkbox-toggle-58" value="checkbox-toggle-58" role="switch" aria-describedby="checkbox-toggle-58" checked="" />
                              <span id="checkbox-toggle-58" class="slds-checkbox_faux_container">
                                <span class="slds-checkbox_faux"></span>
                                <span class="slds-checkbox_on">On</span>
                                <span class="slds-checkbox_off">Off</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item slds-is-active">
                      <div class="slds-progress__marker">
                        <span class="slds-assistive-text">Active</span>
                      </div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <a href="#">View in Trailhead</a>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item">
                      <div class="slds-progress__marker"></div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <button class="slds-button slds-button_outline-brand">Add Users</button>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                    <span class="slds-assistive-text">Progress: 50%</span>
                  </div>
                </div>
                <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                  <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-utility-info" title="information">
                      <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                      </svg>
                      <span class="slds-assistive-text">information</span>
                    </span>
                  </div>
                  <div class="slds-media__body">
                    <p>It looks as if duplicates exist for this lead.
                      <a href="#">View Duplicates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
    <li class="slds-setup-assistant__item">
      <article class="slds-setup-assistant__step">
        <div class="slds-summary-detail">
          <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Learn How to Use Profiles to Control Visibility" aria-controls="step-2-summary-action" aria-expanded="false">
            <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-assistive-text">Toggle details for Learn How to Use Profiles to Control Visibility</span>
          </button>
          <div class="slds-container_fluid">
            <div class="slds-summary-detail__title">
              <div class="slds-setup-assistant__step-summary">
                <div class="slds-media">
                  <div class="slds-media__figure">
                    <div class="slds-progress-ring slds-progress-ring_complete slds-progress-ring_large">
                      <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-label="{{Placeholder for description of progress ring}}">
                        <svg viewBox="-1 -1 2 2">
                          <circle class="slds-progress-ring__path" id="slds-progress-ring-path-88" cx="0" cy="0" r="1"></circle>
                        </svg>
                      </div>
                      <div class="slds-progress-ring__content">
                        <span class="slds-icon_container slds-icon-utility-check" title="Complete">
                          <svg class="slds-icon" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                          </svg>
                          <span class="slds-assistive-text">Complete</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="slds-media__body slds-m-top_x-small">
                    <div class="slds-media">
                      <div class="slds-setup-assistant__step-summary-content slds-media__body">
                        <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                          <button class="slds-button slds-button_reset" aria-controls="step-2-summary-action" aria-expanded="false">Learn How to Use Profiles to Control Visibility</button>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                      <div class="slds-media__figure slds-media__figure_reverse">
                        <p class="slds-text-align_right slds-text-color_weak">15 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div hidden="" class="slds-summary-detail__content" id="step-2-summary-action">
              <div class="slds-setup-assistant__step-detail">
                <div class="slds-progress slds-progress_vertical slds-progress_success">
                  <ol class="slds-progress__list slds-progress__list-bordered">
                    <li class="slds-progress__item slds-is-completed">
                      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                        </svg>
                        <span class="slds-assistive-text">Complete</span>
                      </span>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <div class="slds-form-element">
                            <label class="slds-checkbox_toggle slds-grid">
                              <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                              <input type="checkbox" name="checkbox-toggle-59" value="checkbox-toggle-59" role="switch" aria-describedby="checkbox-toggle-59" checked="" />
                              <span id="checkbox-toggle-59" class="slds-checkbox_faux_container">
                                <span class="slds-checkbox_faux"></span>
                                <span class="slds-checkbox_on">On</span>
                                <span class="slds-checkbox_off">Off</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item slds-is-active">
                      <div class="slds-progress__marker">
                        <span class="slds-assistive-text">Active</span>
                      </div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <a href="#">View in Trailhead</a>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item">
                      <div class="slds-progress__marker"></div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <button class="slds-button slds-button_outline-brand">Add Users</button>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                    <span class="slds-assistive-text">Progress: 50%</span>
                  </div>
                </div>
                <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                  <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-utility-info" title="information">
                      <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                      </svg>
                      <span class="slds-assistive-text">information</span>
                    </span>
                  </div>
                  <div class="slds-media__body">
                    <p>It looks as if duplicates exist for this lead.
                      <a href="#">View Duplicates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
    <li class="slds-setup-assistant__item">
      <article class="slds-setup-assistant__step">
        <div class="slds-summary-detail">
          <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Turn On Tracking for Profiles" aria-controls="step-3-summary-action" aria-expanded="false">
            <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-assistive-text">Toggle details for Turn On Tracking for Profiles</span>
          </button>
          <div class="slds-container_fluid">
            <div class="slds-summary-detail__title">
              <div class="slds-setup-assistant__step-summary">
                <div class="slds-media">
                  <div class="slds-media__figure">
                    <div class="slds-progress-ring slds-progress-ring_large">
                      <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress ring}}">
                        <svg viewBox="-1 -1 2 2">
                          <path class="slds-progress-ring__path" id="slds-progress-ring-path-89" d="M 1 0 A 1 1 0 0 0 1.00 -0.00 L 0 0"></path>
                        </svg>
                      </div>
                      <div class="slds-progress-ring__content">4</div>
                    </div>
                  </div>
                  <div class="slds-media__body slds-m-top_x-small">
                    <div class="slds-media">
                      <div class="slds-setup-assistant__step-summary-content slds-media__body">
                        <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                          <button class="slds-button slds-button_reset" aria-controls="step-3-summary-action" aria-expanded="false">Turn On Tracking for Profiles</button>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                      <div class="slds-media__figure slds-media__figure_reverse">
                        <p class="slds-text-align_right slds-text-color_weak">10 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div hidden="" class="slds-summary-detail__content" id="step-3-summary-action">
              <div class="slds-setup-assistant__step-detail">
                <div class="slds-progress slds-progress_vertical slds-progress_success">
                  <ol class="slds-progress__list slds-progress__list-bordered">
                    <li class="slds-progress__item slds-is-completed">
                      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                        </svg>
                        <span class="slds-assistive-text">Complete</span>
                      </span>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <div class="slds-form-element">
                            <label class="slds-checkbox_toggle slds-grid">
                              <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                              <input type="checkbox" name="checkbox-toggle-60" value="checkbox-toggle-60" role="switch" aria-describedby="checkbox-toggle-60" checked="" />
                              <span id="checkbox-toggle-60" class="slds-checkbox_faux_container">
                                <span class="slds-checkbox_faux"></span>
                                <span class="slds-checkbox_on">On</span>
                                <span class="slds-checkbox_off">Off</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item slds-is-active">
                      <div class="slds-progress__marker">
                        <span class="slds-assistive-text">Active</span>
                      </div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <a href="#">View in Trailhead</a>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item">
                      <div class="slds-progress__marker"></div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <button class="slds-button slds-button_outline-brand">Add Users</button>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                    <span class="slds-assistive-text">Progress: 50%</span>
                  </div>
                </div>
                <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                  <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-utility-info" title="information">
                      <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                      </svg>
                      <span class="slds-assistive-text">information</span>
                    </span>
                  </div>
                  <div class="slds-media__body">
                    <p>It looks as if duplicates exist for this lead.
                      <a href="#">View Duplicates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
    <li class="slds-setup-assistant__item">
      <article class="slds-setup-assistant__step">
        <div class="slds-summary-detail">
          <button class="slds-button slds-button_icon slds-m-right_x-small slds-m-top_x-small" title="Toggle details for Setup Einstein Visibility for Admins" aria-controls="step-4-summary-action" aria-expanded="false">
            <svg class="slds-button__icon slds-summary-detail__action-icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
            </svg>
            <span class="slds-assistive-text">Toggle details for Setup Einstein Visibility for Admins</span>
          </button>
          <div class="slds-container_fluid">
            <div class="slds-summary-detail__title">
              <div class="slds-setup-assistant__step-summary">
                <div class="slds-media">
                  <div class="slds-media__figure">
                    <div class="slds-progress-ring slds-progress-ring_large">
                      <div class="slds-progress-ring__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress ring}}">
                        <svg viewBox="-1 -1 2 2">
                          <path class="slds-progress-ring__path" id="slds-progress-ring-path-90" d="M 1 0 A 1 1 0 0 0 1.00 -0.00 L 0 0"></path>
                        </svg>
                      </div>
                      <div class="slds-progress-ring__content">5</div>
                    </div>
                  </div>
                  <div class="slds-media__body slds-m-top_x-small">
                    <div class="slds-media">
                      <div class="slds-setup-assistant__step-summary-content slds-media__body">
                        <h3 class="slds-setup-assistant__step-summary-title slds-text-heading_small">
                          <button class="slds-button slds-button_reset" aria-controls="step-4-summary-action" aria-expanded="false">Setup Einstein Visibility for Admins</button>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                      <div class="slds-media__figure slds-media__figure_reverse">
                        <p class="slds-text-align_right slds-text-color_weak">10 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div hidden="" class="slds-summary-detail__content" id="step-4-summary-action">
              <div class="slds-setup-assistant__step-detail">
                <div class="slds-progress slds-progress_vertical slds-progress_success">
                  <ol class="slds-progress__list slds-progress__list-bordered">
                    <li class="slds-progress__item slds-is-completed">
                      <span class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon slds-progress__marker_icon-success" title="Complete">
                        <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success"></use>
                        </svg>
                        <span class="slds-assistive-text">Complete</span>
                      </span>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Turn on Lightning for all users.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <div class="slds-form-element">
                            <label class="slds-checkbox_toggle slds-grid">
                              <span class="slds-form-element__label slds-m-bottom_none slds-assistive-text">Turn on Lightning for all users</span>
                              <input type="checkbox" name="checkbox-toggle-61" value="checkbox-toggle-61" role="switch" aria-describedby="checkbox-toggle-61" checked="" />
                              <span id="checkbox-toggle-61" class="slds-checkbox_faux_container">
                                <span class="slds-checkbox_faux"></span>
                                <span class="slds-checkbox_on">On</span>
                                <span class="slds-checkbox_off">Off</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item slds-is-active">
                      <div class="slds-progress__marker">
                        <span class="slds-assistive-text">Active</span>
                      </div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <a href="#">View in Trailhead</a>
                        </div>
                      </div>
                    </li>
                    <li class="slds-progress__item">
                      <div class="slds-progress__marker"></div>
                      <div class="slds-progress__item_content slds-grid slds-grid_align-spread">
                        <div class="slds-size_3-of-4">Lorem ipsum dolor sit amet, lorem ipsum dolor.</div>
                        <div class="slds-grid slds-grid_align-end slds-size_1-of-4">
                          <button class="slds-button slds-button_outline-brand">Add Users</button>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
                    <span class="slds-assistive-text">Progress: 50%</span>
                  </div>
                </div>
                <div class="slds-scoped-notification slds-media slds-media_center slds-scoped-notification_light" role="status">
                  <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-utility-info" title="information">
                      <svg class="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
                      </svg>
                      <span class="slds-assistive-text">information</span>
                    </span>
                  </div>
                  <div class="slds-media__body">
                    <p>It looks as if duplicates exist for this lead.
                      <a href="#">View Duplicates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  </ol>
</section>
:::
