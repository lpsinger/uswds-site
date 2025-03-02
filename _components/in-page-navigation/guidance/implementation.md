{:.usa-content-list }
Implementing the in-page navigation component requires a few additions and adjustments to your page's markup.

{:.usa-content-list }
- A wrapper `div` with the class `usa-in-page-nav-container` must surround the `main` element of your page.
- A new sibling `aside` with the class `usa-in-page-nav` must precede the `main` element.

  The following is an example of the minimum markup your page would need to implement the in-page navigation component:

  ```html
  <div class="usa-in-page-nav-container">
    <aside class="usa-in-page-nav"></aside>
    <main id="main-content" class="main-content">
       [ Page content ]
    </main>
  </div>
  ```

{:.usa-content-list }
- **Root margin.** The root margin property (`data-root-margin`) is a string that allows you to define the observable area. This set of values grows or shrinks the observable area from each side of the root element's bounding box before computing intersections. It can accept values similar to the CSS margin property, and can be percentages. By default, the in-page navigation component is set to `0px 0px 0px 0px`.
- **Threshold.** The threshold property (`data-threshold`) determines how much of the observable section must be present in the observed area before the nav's item is set to current. The default is `1`, which means 100% of the observables must be in the observed section. You can set `data-threshold` to any integer between 0 and 1.
- **Initialization properties.** The following properties update the component during initialization. These properties must be set before the component is initialized in order to have an effect.
{% include settings-table-flex.html
  content=page.implementation.initProps
  cols="flex-2, flex-1, flex-2, flex-1"
  section="initialization properties"
%}
