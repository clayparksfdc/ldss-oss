---
title: Data Tables
---

SLDS 1 blueprint examples for **Data Tables**.

::: legacy-component-example title="Labeling"
<h2 id="element-with-table-label" class="slds-text-heading_medium slds-m-bottom_xx-small">Example data table of Opportunities</h2>
<h3 id="other-element-with-table-label" class="slds-text-title slds-m-bottom_small">Using
  <code>aria-labelledby</code>, instead of aria-label</h3>
<table class="slds-table slds-table_cell-buffer slds-table_bordered" aria-labelledby="element-with-table-label other-element-with-table-label">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Opportunity Name">Opportunity Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Account Name">Account Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Close Date">Close Date</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Stage">Stage</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Confidence">Confidence</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Amount">Amount</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Contact">Contact</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub + Anypoint Connectors">
          <a href="#" tabindex="-1">Cloudhub + Anypoint Connectors</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Base"
<table class="slds-table slds-table_cell-buffer slds-table_bordered" aria-label="Example default base table of Opportunities">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Opportunity Name">Opportunity Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Account Name">Account Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Close Date">Close Date</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Stage">Stage</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Confidence">Confidence</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Amount">Amount</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Contact">Contact</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub + Anypoint Connectors">
          <a href="#" tabindex="-1">Cloudhub + Anypoint Connectors</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Striped rows"
<table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped" aria-label="Example table of Opportunities with striped rows">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Opportunity Name">Opportunity Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Account Name">Account Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Close Date">Close Date</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Stage">Stage</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Confidence">Confidence</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Amount">Amount</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Contact">Contact</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub + Anypoint Connectors">
          <a href="#" tabindex="-1">Cloudhub + Anypoint Connectors</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Columns dividers"
<table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_col-bordered" aria-label="Example table of Opportunities with vertical borders">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Opportunity Name">Opportunity Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Account Name">Account Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Close Date">Close Date</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Stage">Stage</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Confidence">Confidence</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Amount">Amount</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Contact">Contact</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub + Anypoint Connectors">
          <a href="#" tabindex="-1">Cloudhub + Anypoint Connectors</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Rows with no hover"
<table class="slds-table slds-table_cell-buffer slds-no-row-hover slds-table_bordered" aria-label="Example table of Opportunities with no row hovers">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Opportunity Name">Opportunity Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Account Name">Account Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Close Date">Close Date</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Stage">Stage</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Confidence">Confidence</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Amount">Amount</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Contact">Contact</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub + Anypoint Connectors">
          <a href="#" tabindex="-1">Cloudhub + Anypoint Connectors</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single Column table"
<table class="slds-table slds-table_cell-buffer slds-table_bordered" aria-label="Example table of Opportunities with a single column">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Opportunity Name">Opportunity Name</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <td data-label="Opportunity Name">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <td data-label="Opportunity Name">
        <div class="slds-truncate" title="Cloudhub + Anypoint Connectors">
          <a href="#" tabindex="-1">Cloudhub + Anypoint Connectors</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Headless"
<table class="slds-table slds-table_cell-buffer slds-table_header-hidden slds-table_bordered" aria-label="Example headless table of Opportunities">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Opportunity Name">Opportunity Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Account Name">Account Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Close Date">Close Date</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Stage">Stage</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Confidence">Confidence</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Amount">Amount</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Contact">Contact</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub + Anypoint Connectors">
          <a href="#" tabindex="-1">Cloudhub + Anypoint Connectors</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="With no borders"
<table class="slds-table slds-table_cell-buffer slds-table_header-hidden" aria-label=" Example headless table of Opportunities with no borders ">
  <thead class="slds-assistive-text">
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Opportunity Name">Opportunity Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Account Name">Account Name</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Close Date">Close Date</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Stage">Stage</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Confidence">Confidence</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Amount">Amount</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Contact">Contact</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub + Anypoint Connectors">
          <a href="#" tabindex="-1">Cloudhub + Anypoint Connectors</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <th data-label="Opportunity Name" scope="row">
        <div class="slds-truncate" title="Cloudhub">
          <a href="#" tabindex="-1">Cloudhub</a>
        </div>
      </th>
      <td data-label="Account Name">
        <div class="slds-truncate" title="Cloudhub">Cloudhub</div>
      </td>
      <td data-label="Close Date">
        <div class="slds-truncate" title="4/14/2015">4/14/2015</div>
      </td>
      <td data-label="Prospecting">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td data-label="Confidence">
        <div class="slds-truncate" title="20%">20%</div>
      </td>
      <td data-label="Amount">
        <div class="slds-truncate" title="$25k">$25k</div>
      </td>
      <td data-label="Contact">
        <div class="slds-truncate" title="jrogers@cloudhub.com">
          <a href="#" tabindex="-1">jrogers@cloudhub.com</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Actionable mode - Column sorting and row selection(s)"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-297" value="checkbox-unique-id-297" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-297" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-540" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-541" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-542" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-543" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-544" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-545" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-546" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="0">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="0">jrogers@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="0">Acme - 200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="0">bob@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="0">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="0">nathan@salesforce.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single row selection"
<table class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table as radio group">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" id="column-group-header" title="Choose a row to select">Choose a row to select</div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-554" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-555" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-556" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-557" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-558" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-559" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-560" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <span class="slds-radio">
          <input type="radio" id="radio-01" value="radio-01" name="options" tabindex="-1" aria-labelledby="radio-button-label-01 column-group-header" />
          <label class="slds-radio__label" for="radio-01" id="radio-button-label-01">
            <span class="slds-radio_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </span>
      </td>
      <th scope="row" tabindex="0">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="-1">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="-1">jrogers@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <span class="slds-radio">
          <input type="radio" id="radio-02" value="radio-02" name="options" tabindex="-1" aria-labelledby="radio-button-label-02 column-group-header" />
          <label class="slds-radio__label" for="radio-02" id="radio-button-label-02">
            <span class="slds-radio_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </span>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="-1">Acme - 200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="-1">bob@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <span class="slds-radio">
          <input type="radio" id="radio-03" value="radio-03" name="options" tabindex="-1" aria-labelledby="radio-button-label-03 column-group-header" />
          <label class="slds-radio__label" for="radio-03" id="radio-button-label-03">
            <span class="slds-radio_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </span>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="-1">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="-1">nathan@salesforce.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Navigation mode - Cell focused"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities with cell focused">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-305" value="checkbox-unique-id-305" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-305" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-568" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-569" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-570" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-571" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-572" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-573" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-574" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th class="slds-has-focus" scope="row" tabindex="0">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="-1">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="-1">jrogers@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="-1" aria-labelledby="check-button-label-02 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="-1">Acme - 200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="-1">bob@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="-1" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="-1">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="-1">nathan@salesforce.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Single row selected"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities in actionable mode with row selected">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-313" value="checkbox-unique-id-313" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-313" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-582" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-583" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-584" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-585" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-586" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-587" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-588" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="0">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="0">jrogers@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" checked="" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="0">Acme - 200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="0">bob@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="0">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="0">nathan@salesforce.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="All rows selected"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities in actionable mode with all rows selected">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-321" value="checkbox-unique-id-321" tabindex="0" aria-labelledby="check-select-all-label column-group-header" checked="" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-321" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-596" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-597" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-598" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-599" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-600" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-601" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-602" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" checked="" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="0">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="0">jrogers@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" checked="" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="0">Acme - 200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="0">bob@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" checked="" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="0">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="0">nathan@salesforce.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Sorted Ascending"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities in actionable mode with ascending column sorting">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-329" value="checkbox-unique-id-329" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-329" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="ascending" class="slds-is-resizable slds-is-sortable slds-is-sorted slds-is-sorted_asc slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <span class="slds-assistive-text" aria-live="polite" aria-atomic="true">Sorted ascending</span>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-610" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-611" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-612" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-613" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-614" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-615" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-616" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="0">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="0">jrogers@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="0">Acme - 200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="0">bob@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="0">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="0">nathan@salesforce.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Sorted Descending"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities in actionable mode with descending column sorting">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-337" value="checkbox-unique-id-337" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-337" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="descending" class="slds-is-resizable slds-is-sortable slds-is-sorted slds-is-sorted_desc slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <span class="slds-assistive-text" aria-live="polite" aria-atomic="true">Sorted descending</span>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-624" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-625" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-626" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-627" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-628" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-629" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-630" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="0">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="0">nathan@salesforce.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="0">Acme - 200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="0">bob@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="0">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="0">jrogers@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Column resizing"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities in actionable mode with resized column">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-345" value="checkbox-unique-id-345" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-345" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:300px">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-638" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-639" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-640" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-641" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-642" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-643" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-644" max="1000" min="20" tabindex="0" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="0">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="0">jrogers@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="0">Acme - 200 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="0">bob@acme.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th class="slds-cell_action-mode" scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="0">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="0">nathan@salesforce.com</a>
        </div>
      </td>
      <td class="slds-cell_action-mode" role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Column headers with overflow actions button menu"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities with header menu button">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-353" value="checkbox-unique-id-353" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-353" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-652" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-653" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Close Date column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Close Date column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-654" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Stage column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Stage column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-655" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Confidence column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Confidence column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-656" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Amount column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Amount column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-657" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Contact column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Contact column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-658" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th scope="row" tabindex="0">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="-1">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="-1">jrogers@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="-1" aria-labelledby="check-button-label-02 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="-1">Acme - 200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="-1">bob@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="-1" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="-1">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="-1">nathan@salesforce.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Column with icons"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities with header icon and menu button">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-361" value="checkbox-unique-id-361" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-361" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-666" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-icon_container slds-icon-standard-account slds-m-right_xx-small" title="Account">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <span class="slds-assistive-text">Account</span>
            </span>
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Account Name column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Account Name column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-667" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Close Date column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Close Date column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-668" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Stage column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Stage column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-669" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <div class="slds-icon_container slds-m-right_xx-small">
              <span class="slds-icon-ellie slds-is-paused" title="Einstein calculated">
                <svg viewBox="0 0 280 14" aria-hidden="true">
                  <circle cx="7" cy="7" r="4"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                  <circle cx="21" cy="7" r="4"></circle>
                  <circle cx="21" cy="7" r="3"></circle>
                  <circle cx="35" cy="7" r="4"></circle>
                  <circle cx="35" cy="7" r="3"></circle>
                  <circle cx="49" cy="7" r="4"></circle>
                  <circle cx="49" cy="7" r="3"></circle>
                  <circle cx="63" cy="7" r="4"></circle>
                  <circle cx="63" cy="7" r="3"></circle>
                  <circle cx="77" cy="7" r="4"></circle>
                  <circle cx="77" cy="7" r="3"></circle>
                  <circle cx="91" cy="7" r="4"></circle>
                  <circle cx="91" cy="7" r="3"></circle>
                  <circle cx="105" cy="7" r="4"></circle>
                  <circle cx="105" cy="7" r="3"></circle>
                  <circle cx="119" cy="7" r="4"></circle>
                  <circle cx="119" cy="7" r="3"></circle>
                  <circle cx="133" cy="7" r="4"></circle>
                  <circle cx="133" cy="7" r="3"></circle>
                  <circle cx="147" cy="7" r="4"></circle>
                  <circle cx="147" cy="7" r="3"></circle>
                  <circle cx="161" cy="7" r="4"></circle>
                  <circle cx="161" cy="7" r="3"></circle>
                  <circle cx="175" cy="7" r="4"></circle>
                  <circle cx="175" cy="7" r="3"></circle>
                  <circle cx="189" cy="7" r="4"></circle>
                  <circle cx="189" cy="7" r="3"></circle>
                  <circle cx="203" cy="7" r="4"></circle>
                  <circle cx="203" cy="7" r="3"></circle>
                  <circle cx="217" cy="7" r="4"></circle>
                  <circle cx="217" cy="7" r="3"></circle>
                  <circle cx="231" cy="7" r="4"></circle>
                  <circle cx="231" cy="7" r="3"></circle>
                  <circle cx="245" cy="7" r="4"></circle>
                  <circle cx="245" cy="7" r="3"></circle>
                  <circle cx="259" cy="7" r="4"></circle>
                  <circle cx="259" cy="7" r="3"></circle>
                  <circle cx="273" cy="7" r="4"></circle>
                  <circle cx="273" cy="7" r="3"></circle>
                </svg>
                <span class="slds-assistive-text">Einstein calculated</span>
              </span>
            </div>
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Confidence column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Confidence column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-670" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Amount column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Amount column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-671" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-has-button-menu slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="Show Contact column actions">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
          </svg>
          <span class="slds-assistive-text">Show Contact column actions</span>
        </button>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-672" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th scope="row" tabindex="0">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="-1">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="-1">jrogers@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="-1" aria-labelledby="check-button-label-02 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="-1">Acme - 200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="-1">bob@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="-1" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="-1">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$25,000">$25,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="-1">nathan@salesforce.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Cell with icons"
<table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities with cell icon">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="slds-text-align_right" scope="col" style="width:3.25rem">
        <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
        <div class="slds-th__action slds-th__action_form">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-unique-id-369" value="checkbox-unique-id-369" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-unique-id-369" id="check-select-all-label">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select All</span>
            </label>
          </div>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Name">Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-680" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Account Name">Account Name</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-681" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Close Date">Close Date</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-682" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Stage">Stage</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-683" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Confidence">Confidence</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-684" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Amount">Amount</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-685" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col">
        <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
          <span class="slds-assistive-text">Sort by: </span>
          <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
            <span class="slds-truncate" title="Contact">Contact</span>
            <span class="slds-icon_container slds-icon-utility-arrowdown">
              <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
              </svg>
            </span>
          </div>
        </a>
        <div class="slds-resizable">
          <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-686" max="1000" min="20" tabindex="-1" />
          <span class="slds-resizable__handle">
            <span class="slds-resizable__divider"></span>
          </span>
        </div>
      </th>
      <th class="" scope="col" style="width:3.25rem">
        <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
          </label>
        </div>
      </td>
      <th scope="row" tabindex="0">
        <div class="slds-truncate" title="Acme - 1,200 Widgets">
          <a href="#" tabindex="-1">Acme - 1,200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="4/10/15">4/10/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="30%">30%</div>
      </td>
      <td role="gridcell">
        <div class="slds-grid slds-grid_vertical-align-center">
          <div class="slds-truncate" title="$25,000,000">$25,000,000</div>
          <div class="slds-icon_container slds-m-left_x-small slds-m-right_xx-small">
            <span data-slds-state="positive" class="slds-icon-score" title="Description of the icon when needed">
              <svg viewBox="0 0 5 5" class="slds-icon-score__positive" aria-hidden="true">
                <circle cx="50%" cy="50%" r="1.875"></circle>
              </svg>
              <svg viewBox="0 0 5 5" class="slds-icon-score__negative" aria-hidden="true">
                <circle cx="50%" cy="50%" r="1.875"></circle>
              </svg>
              <span class="slds-assistive-text">Text alternative when needed</span>
            </span>
          </div>
          <div class="slds-truncate" title="High">High</div>
        </div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="jrogers@acme.com">
          <a href="#" tabindex="-1">jrogers@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="-1" aria-labelledby="check-button-label-02 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
          </label>
        </div>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="Acme - 200 Widgets">
          <a href="#" tabindex="-1">Acme - 200 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="Acme">Acme</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15">1/31/15</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Prospecting">Prospecting</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="60%">60%</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="$5,000,000">$5,000,000</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="bob@acme.com">
          <a href="#" tabindex="-1">bob@acme.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
        </button>
      </td>
    </tr>
    <tr aria-selected="false" class="slds-hint-parent">
      <td class="slds-text-align_right" role="gridcell">
        <div class="slds-checkbox">
          <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="-1" aria-labelledby="check-button-label-03 column-group-header" />
          <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
            <span class="slds-checkbox_faux"></span>
            <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
          </label>
        </div>
      </td>
      <th scope="row">
        <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
          <a href="#" tabindex="-1">salesforce.com - 1,000 Widgets</a>
        </div>
      </th>
      <td role="gridcell">
        <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="70%">70%</div>
      </td>
      <td role="gridcell">
        <div class="slds-grid slds-grid_vertical-align-center">
          <div class="slds-truncate" title="$25,000">$25,000</div>
          <div class="slds-icon_container slds-m-left_x-small slds-m-right_xx-small">
            <span data-slds-state="negative" class="slds-icon-score" title="Description of the icon when needed">
              <svg viewBox="0 0 5 5" class="slds-icon-score__positive" aria-hidden="true">
                <circle cx="50%" cy="50%" r="1.875"></circle>
              </svg>
              <svg viewBox="0 0 5 5" class="slds-icon-score__negative" aria-hidden="true">
                <circle cx="50%" cy="50%" r="1.875"></circle>
              </svg>
              <span class="slds-assistive-text">Text alternative when needed</span>
            </span>
          </div>
          <div class="slds-truncate" title="Low">Low</div>
        </div>
      </td>
      <td role="gridcell">
        <div class="slds-truncate" title="nathan@salesforce.com">
          <a href="#" tabindex="-1">nathan@salesforce.com</a>
        </div>
      </td>
      <td role="gridcell">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
          <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
          </svg>
          <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Accessibility"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-no-cell-focus slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example default inline edit table with cell focused">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-377" value="checkbox-unique-id-377" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-377" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-694" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-695" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-696" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-697" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-698" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-699" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-700" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row" tabindex="0">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="-1" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="-1" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row" tabindex="0">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="-1" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="-1" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row" tabindex="0">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="-1" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="1st cell highlighted (checkbox)"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with checkbox cell focused">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-385" value="checkbox-unique-id-385" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-385" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-708" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-709" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-710" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-711" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-712" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-713" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-714" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-has-focus slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="2nd cell highlighted"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-393" value="checkbox-unique-id-393" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-393" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-722" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-723" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-724" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-725" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-726" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-727" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-728" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-has-focus slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="3rd cell highlighted"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in navigation mode with cell focused">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-401" value="checkbox-unique-id-401" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-401" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-736" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-737" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-738" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-739" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-740" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-741" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-742" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="-1" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-has-focus slds-cell-edit" role="gridcell" tabindex="0">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="-1" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="-1" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="-1" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="-1" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Cell Edit"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with cell edit">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-409" value="checkbox-unique-id-409" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-409" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-750" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-751" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-752" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-753" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-754" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-755" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-756" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
          <section aria-describedby="dialog-body-id-14" class="slds-popover slds-popover slds-popover_edit" role="dialog" style="position:absolute;top:0;left:0.0625rem">
            <div class="slds-popover__body" id="dialog-body-id-14">
              <div class="slds-media">
                <div class="slds-media__body">
                  <div class="slds-form-element slds-grid slds-wrap">
                    <label class="slds-form-element__label slds-form-element__label_edit slds-no-flex" for="company-01">
                      <span class="slds-assistive-text">Company</span>
                    </label>
                    <div class="slds-form-element__control slds-grow">
                      <input type="text" class="slds-input" id="company-01" value="Acme Enterprises" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="false" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="false" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Required form element"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with required cell edit">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-417" value="checkbox-unique-id-417" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-417" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-764" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-765" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-766" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-767" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-768" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-769" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-770" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
          <section aria-describedby="dialog-body-id-16" class="slds-popover slds-popover slds-popover_edit" role="dialog" style="position:absolute;top:0;left:0.0625rem">
            <div class="slds-popover__body" id="dialog-body-id-16">
              <div class="slds-media">
                <div class="slds-media__body">
                  <div class="slds-form-element slds-grid slds-wrap">
                    <label class="slds-form-element__label slds-form-element__label_edit slds-no-flex" for="company-01">
                      <abbr class="slds-required" title="required" aria-hidden="true">*</abbr>
                      <span class="slds-assistive-text">Company</span>
                    </label>
                    <div class="slds-form-element__control slds-grow">
                      <input type="text" class="slds-input" id="company-01" required="" value="Acme Enterprises" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="false" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="false" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Required form element with error"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with cell error">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-425" value="checkbox-unique-id-425" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-425" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-778" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-779" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-780" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-781" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-782" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-783" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-784" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
          <section aria-describedby="dialog-body-id-18" class="slds-popover slds-popover slds-popover_edit" role="dialog" style="position:absolute;top:0;left:0.0625rem">
            <div class="slds-popover__body" id="dialog-body-id-18">
              <div class="slds-media">
                <div class="slds-media__body">
                  <div class="slds-form-element slds-grid slds-wrap slds-has-error">
                    <label class="slds-form-element__label slds-form-element__label_edit slds-no-flex" for="company-01">
                      <abbr class="slds-required" title="required" aria-hidden="true">*</abbr>
                      <span class="slds-assistive-text">Company</span>
                    </label>
                    <div class="slds-form-element__control slds-grow">
                      <input type="text" aria-describedby="error-message-01" class="slds-input" id="company-01" required="" value="Acme Enterprises" />
                    </div>
                    <div id="error-message-01" class="slds-form-element__help">This field is required</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="false" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-selected="false" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Edited cell (unsaved)"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with cell edited">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-433" value="checkbox-unique-id-433" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-433" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-792" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-793" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-794" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-795" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-796" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-797" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-798" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-describedby="unsaved-cell-notification" class="slds-cell-edit slds-is-edited slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
          <span id="unsaved-cell-notification" class="slds-hide">Unsaved</span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Edited cell with row selected (unsaved)"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with cell edited in selected row">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-441" value="checkbox-unique-id-441" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-441" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-806" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-807" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-808" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-809" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-810" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-811" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-812" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" checked="" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td aria-describedby="unsaved-cell-notification" class="slds-cell-edit slds-is-edited slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
          <span id="unsaved-cell-notification" class="slds-hide">Unsaved</span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Edited cell with row level error (unsaved)"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with cell error on save">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-449" value="checkbox-unique-id-449" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-449" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-820" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-821" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-822" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-823" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-824" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-825" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-826" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-has-focus slds-cell-edit slds-has-error slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Edited cell with focused row level error  (unsaved)"
<div class="demo-only" style="margin-top:100px;margin-left:10px">
  <div class="slds-table_edit_container slds-is-relative">
    <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with error indicator focused">
      <thead>
        <tr class="slds-line-height_reset">
          <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
            <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
          </th>
          <th class="slds-cell_action-mode" scope="col" style="width:2rem">
            <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
            <div class="slds-th__action slds-th__action_form">
              <div class="slds-checkbox">
                <input type="checkbox" name="options" id="checkbox-unique-id-457" value="checkbox-unique-id-457" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
                <label class="slds-checkbox__label" for="checkbox-unique-id-457" id="check-select-all-label">
                  <span class="slds-checkbox_faux"></span>
                  <span class="slds-form-element__label slds-assistive-text">Select All</span>
                </label>
              </div>
            </div>
          </th>
          <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
            <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
              <span class="slds-assistive-text">Sort by: </span>
              <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                <span class="slds-truncate" title="Name">Name</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                  </svg>
                </span>
              </div>
            </a>
            <div class="slds-resizable">
              <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-834" max="1000" min="20" tabindex="0" />
              <span class="slds-resizable__handle">
                <span class="slds-resizable__divider"></span>
              </span>
            </div>
          </th>
          <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
            <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
              <span class="slds-assistive-text">Sort by: </span>
              <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                <span class="slds-truncate" title="Account Name">Account Name</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                  </svg>
                </span>
              </div>
            </a>
            <div class="slds-resizable">
              <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-835" max="1000" min="20" tabindex="0" />
              <span class="slds-resizable__handle">
                <span class="slds-resizable__divider"></span>
              </span>
            </div>
          </th>
          <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
            <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
              <span class="slds-assistive-text">Sort by: </span>
              <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                <span class="slds-truncate" title="Close Date">Close Date</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                  </svg>
                </span>
              </div>
            </a>
            <div class="slds-resizable">
              <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-836" max="1000" min="20" tabindex="0" />
              <span class="slds-resizable__handle">
                <span class="slds-resizable__divider"></span>
              </span>
            </div>
          </th>
          <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
            <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
              <span class="slds-assistive-text">Sort by: </span>
              <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                <span class="slds-truncate" title="Stage">Stage</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                  </svg>
                </span>
              </div>
            </a>
            <div class="slds-resizable">
              <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-837" max="1000" min="20" tabindex="0" />
              <span class="slds-resizable__handle">
                <span class="slds-resizable__divider"></span>
              </span>
            </div>
          </th>
          <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
            <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
              <span class="slds-assistive-text">Sort by: </span>
              <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                <span class="slds-truncate" title="Confidence">Confidence</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                  </svg>
                </span>
              </div>
            </a>
            <div class="slds-resizable">
              <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-838" max="1000" min="20" tabindex="0" />
              <span class="slds-resizable__handle">
                <span class="slds-resizable__divider"></span>
              </span>
            </div>
          </th>
          <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
            <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
              <span class="slds-assistive-text">Sort by: </span>
              <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                <span class="slds-truncate" title="Amount">Amount</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                  </svg>
                </span>
              </div>
            </a>
            <div class="slds-resizable">
              <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-839" max="1000" min="20" tabindex="0" />
              <span class="slds-resizable__handle">
                <span class="slds-resizable__divider"></span>
              </span>
            </div>
          </th>
          <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
            <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
              <span class="slds-assistive-text">Sort by: </span>
              <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                <span class="slds-truncate" title="Contact">Contact</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                  </svg>
                </span>
              </div>
            </a>
            <div class="slds-resizable">
              <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-840" max="1000" min="20" tabindex="0" />
              <span class="slds-resizable__handle">
                <span class="slds-resizable__divider"></span>
              </span>
            </div>
          </th>
          <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
            <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr aria-selected="false" class="slds-hint-parent">
          <td class="slds-has-focus slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
            <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small" tabindex="0" title="Item 1 has errors">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
              </svg>
              <span class="slds-assistive-text">Item 1 has errors</span>
            </button>
            <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
              </label>
            </div>
          </td>
          <th class="slds-cell-edit slds-cell_action-mode" scope="row">
            <span class="slds-grid slds-grid_align-spread">
              <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
              </button>
            </span>
          </th>
          <td class="slds-cell-edit slds-has-error slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="Acme">Acme</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="4/10/15">4/10/15</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
              </button>
            </span>
          </td>
          <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="30%">30%</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                </svg>
                <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
            </button>
          </td>
        </tr>
        <tr aria-selected="false" class="slds-hint-parent">
          <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
            <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
              </svg>
              <span class="slds-assistive-text">Item 2 has errors</span>
            </button>
            <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
              </label>
            </div>
          </td>
          <th class="slds-cell-edit slds-cell_action-mode" scope="row">
            <span class="slds-grid slds-grid_align-spread">
              <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
              </button>
            </span>
          </th>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="Acme">Acme</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="1/31/15">1/31/15</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="Prospecting">Prospecting</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
              </button>
            </span>
          </td>
          <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="60%">60%</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                </svg>
                <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
            </button>
          </td>
        </tr>
        <tr aria-selected="false" class="slds-hint-parent">
          <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
            <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
              <svg class="slds-button__icon" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
              </svg>
              <span class="slds-assistive-text">Item 3 has errors</span>
            </button>
            <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
              </label>
            </div>
          </td>
          <th class="slds-cell-edit slds-cell_action-mode" scope="row">
            <span class="slds-grid slds-grid_align-spread">
              <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
              </button>
            </span>
          </th>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
              </button>
            </span>
          </td>
          <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="70%">70%</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                </svg>
                <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="$25,000">$25,000</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <span class="slds-grid slds-grid_align-spread">
              <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
              <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
                <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                </svg>
                <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
              </button>
            </span>
          </td>
          <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
            <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <section aria-describedby="dialog-body-id-20" aria-labelledby="dialog-heading-id-2" class="slds-popover slds-popover_error slds-nubbin_bottom-left" role="dialog" style="position:absolute;top:-56px">
      <button class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse" title="Close dialog">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Close dialog</span>
      </button>
      <header class="slds-popover__header">
        <div class="slds-media slds-media_center slds-has-flexi-truncate ">
          <div class="slds-media__figure">
            <span class="slds-icon_container slds-icon-utility-error">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
              </svg>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 class="slds-truncate slds-text-heading_medium" id="dialog-heading-id-2" title="Resolve error">Resolve error</h2>
          </div>
        </div>
      </header>
      <div class="slds-popover__body" id="dialog-body-id-20">
        <p>Company encountered an error</p>
      </div>
    </section>
  </div>
</div>
:::

::: legacy-component-example title="Edited cell with row selected and row level error (unsaved)"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in actionable mode with cell error on save in selected row">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="slds-cell_action-mode" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-465" value="checkbox-unique-id-465" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-465" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-848" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-849" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-850" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-851" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-852" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-853" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-854" max="1000" min="20" tabindex="0" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="slds-cell_action-mode" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="true" class="slds-hint-parent slds-is-selected">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small" tabindex="0" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" checked="" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-has-error slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="0" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error slds-cell_action-mode" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="0" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit slds-cell_action-mode" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="0" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="0" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="0" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit slds-cell_action-mode" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Header cell focused"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in navigation mode with header cell focused">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-473" value="checkbox-unique-id-473" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-473" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-has-focus slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-862" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-863" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-864" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-865" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-866" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-867" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-868" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="-1" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="-1" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="-1" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="-1" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="-1" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Header cell marked"
<div class="slds-table_edit_container slds-is-relative">
  <table aria-multiselectable="true" class="slds-table slds-no-cell-focus slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols" role="grid" style="width:66.75rem" aria-label="Example inline edit table in navigation mode with header cell marked">
    <thead>
      <tr class="slds-line-height_reset">
        <th class="" scope="col" style="width:3.75rem">
          <div class="slds-truncate slds-assistive-text" title="Errors">Errors</div>
        </th>
        <th class="" scope="col" style="width:2rem">
          <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
          <div class="slds-th__action slds-th__action_form">
            <div class="slds-checkbox">
              <input type="checkbox" name="options" id="checkbox-unique-id-481" value="checkbox-unique-id-481" tabindex="-1" aria-labelledby="check-select-all-label column-group-header" />
              <label class="slds-checkbox__label" for="checkbox-unique-id-481" id="check-select-all-label">
                <span class="slds-checkbox_faux"></span>
                <span class="slds-form-element__label slds-assistive-text">Select All</span>
              </label>
            </div>
          </div>
        </th>
        <th aria-sort="none" class="slds-has-focus slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Name">Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-876" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Account Name">Account Name</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-877" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Close Date">Close Date</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-878" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Stage">Stage</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-879" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Confidence">Confidence</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-880" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Amount">Amount</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Amount column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-881" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th aria-sort="none" class="slds-is-resizable slds-is-sortable" scope="col" style="width:8.75rem">
          <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="-1">
            <span class="slds-assistive-text">Sort by: </span>
            <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
              <span class="slds-truncate" title="Contact">Contact</span>
              <span class="slds-icon_container slds-icon-utility-arrowdown">
                <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                </svg>
              </span>
            </div>
          </a>
          <div class="slds-resizable">
            <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-882" max="1000" min="20" tabindex="-1" />
            <span class="slds-resizable__handle">
              <span class="slds-resizable__divider"></span>
            </span>
          </div>
        </th>
        <th class="" scope="col" style="width:3.25rem">
          <div class="slds-truncate slds-assistive-text" title="Actions">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-01" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 1 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 1 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-01" tabindex="-1" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="4/10/15">4/10/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Value Proposition">Value Proposition</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="30%">30%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000,000">$25,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of Acme - 1,200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 1,200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-02" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 2 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 2 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="-1" aria-labelledby="check-button-label-02 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-02" tabindex="-1" title="Acme - 200 Widgets">Acme - 200 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Acme">Acme</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15">1/31/15</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Prospecting">Prospecting</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="60%">60%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$5,000,000">$5,000,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="bob@acme.com">bob@acme.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of Acme - 200 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of Acme - 200 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for Acme - 200 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
          </button>
        </td>
      </tr>
      <tr aria-selected="false" class="slds-hint-parent">
        <td class="slds-cell-edit slds-cell-error" role="gridcell">
          <button id="error-03" class="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabindex="-1" title="Item 3 has errors">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"></use>
            </svg>
            <span class="slds-assistive-text">Item 3 has errors</span>
          </button>
          <span class="slds-row-number slds-text-body_small slds-text-color_weak"></span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <div class="slds-checkbox">
            <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="-1" aria-labelledby="check-button-label-03 column-group-header" />
            <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
              <span class="slds-checkbox_faux"></span>
              <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
            </label>
          </div>
        </td>
        <th class="slds-cell-edit" scope="row">
          <span class="slds-grid slds-grid_align-spread">
            <a class="slds-truncate" href="#" id="link-03" tabindex="-1" title="salesforce.com - 1,000 Widgets">salesforce.com - 1,000 Widgets</a>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </th>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="salesforce.com">salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Account Name of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Account Name of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Close Date of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Close Date of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Stage of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Stage of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td aria-readonly="true" class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="70%">70%</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled="" tabindex="-1" title="Edit Confidence of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <span class="slds-assistive-text">Edit Confidence of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="$25,000">$25,000</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Amount of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Amount of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <span class="slds-grid slds-grid_align-spread">
            <span class="slds-truncate" title="nathan@salesforce.com">nathan@salesforce.com</span>
            <button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabindex="-1" title="Edit Contact of salesforce.com - 1,000 Widgets">
              <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
              </svg>
              <span class="slds-assistive-text">Edit Contact of salesforce.com - 1,000 Widgets</span>
            </button>
          </span>
        </td>
        <td class="slds-cell-edit" role="gridcell">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="-1" title="More actions for salesforce.com - 1,000 Widgets">
            <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
:::

::: legacy-component-example title="Truncated"
<table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_fixed-layout slds-table_striped" aria-label=" Example headless table of Opportunities with cell content truncated ">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Typical Column Header">Typical Column Header</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Truncated, no wrap">Truncated, no wrap</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Typical Column Header">Typical Column Header</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Typical Column Header" scope="row">
        <div class="slds-truncate" title="Typical cell content">Typical cell content</div>
      </th>
      <td class="slds-cell-wrap" data-label="Truncated, no wrap">
        <div class="slds-truncate" title="Cell content that is very long.
It also has a line break.
It has more than one line break">Cell content that is very long. It also has a line break. It has more than one line break</div>
      </td>
      <td data-label="Typical Column Header">
        <div class="slds-truncate" title="Typical cell content">Typical cell content</div>
      </td>
    </tr>
  </tbody>
</table>
:::

::: legacy-component-example title="Wrapped"
<table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_fixed-layout slds-table_striped" aria-label=" Example headless table of Opportunities with cell content wrapped ">
  <thead>
    <tr class="slds-line-height_reset">
      <th class="" scope="col">
        <div class="slds-truncate" title="Typical Column Header">Typical Column Header</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Wrapped, line clamped">Wrapped, line clamped</div>
      </th>
      <th class="" scope="col">
        <div class="slds-truncate" title="Typical Column Header">Typical Column Header</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="slds-hint-parent">
      <th data-label="Typical Column Header" scope="row">
        <div class="slds-truncate" title="Typical cell content">Typical cell content</div>
      </th>
      <td class="slds-cell-wrap" data-label="Wrapped, line clamped">
        <div class="slds-line-clamp" title="Cell content that is very long.
It also has a line break.
It has more than one line break">Cell content that is very long. It also has a line break. It has more than one line break</div>
      </td>
      <td data-label="Typical Column Header">
        <div class="slds-truncate" title="Typical cell content">Typical cell content</div>
      </td>
    </tr>
  </tbody>
</table>
:::
