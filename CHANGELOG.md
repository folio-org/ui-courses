# Change history for ui-courses

## [7.0.4](https://github.com/folio-org/ui-courses/tree/v7.0.4) (IN PROGRESS)

* When a user has the permission `ui-courses.view-settings` ("Settings (Courses): Can view course settings") but not `ui-courses.maintain-settings` ("Settings (Courses): Can create, edit and delete course settings"), the **New** button is no longer displayed at the top of the settings pages for Terms, Course types, Course departments, Processing statuses and Copryright types. Fixes UICR-195.
* When a user clicks on a malformed "URL/PDF link" field, do not try to display a non-existent course. Fixes UICR-184.
* Fix `en.json` translations for maintenance of terms in settings. Fixes UICR-229.
* Support interface `item-storage` `11.0`. Refs UICR-231.
* `ui-courses.add-edit-items` permission now contains `users.collection.get`. This allows the last-edited metadata header to be displayed when editing a course reserve. Fixes UICR-235.
* Finally ensure all dates are freed of timezone confusion. Fixes UICR-228.

## [7.0.3](https://github.com/folio-org/ui-courses/tree/v7.0.3) (2025-03-31)

* Since release v6.1.1, when listing all courses or reserves (as opposed to those matching a query), sorting was not performed. This is no longer the case. Fixes UICR-225.

## [7.0.2](https://github.com/folio-org/ui-courses/tree/v7.0.2) (2025-03-27)

* When displaying details of a course, loading the reserves now forces the items to load. This fixes a race condition. Previously, the two loads would nearly always, but not always, happen in the right order; but sometimes the attempt to load items would happen first, and there would be no item-IDs available to search for. This was most easily seen by refreshing the whole app. Fixes UICR-221.

## [7.0.1](https://github.com/folio-org/ui-courses/tree/v7.0.1) (2025-03-20)

* Update plugin dependencies to allow `@folio/plugin-find-user` ^8.0.0 and `@folio/plugin-create-inventory-records` ^6.0.0 (as well as previously acceptable versions). Fixes UICR-222.

## [7.0.0](https://github.com/folio-org/ui-courses/tree/v7.0.0) (2025-03-11)

* **BREAKING**: upgrade to Stripes v10. Fixes UICR-216.
* **BREAKING**: upgrade to react-intl v7.1.5. Fixes UICR-217.
* Migrate to shared CI workflows. Fixes UICR-215.

## [6.1.1](https://github.com/folio-org/ui-courses/tree/v6.1.1) (2024-12-05)

* Query terms ending with one or more asterisks (wildcard characters) have these removed and replaced with a single asterisk, avoiding a bug in cql2pgsql. Fixes UICR-212.
* Remove double scrollbar in courses and reserves results panes. Many thanks to @JohnC-80! Fixes UICR-213.

## [6.1.0](https://github.com/folio-org/ui-courses/tree/v6.1.0) (2024-10-22)

* Use standard FOLIO UX for Delete Course (in action menu). Fixes UICR-201.
* When deleting a course that has no cross-listed courses, also delete its underlying courselisting. This ensures orphan courselistings are not created. Fixes UICR-206.
* With orphan courselistings no longer remaining, it is now always possible to delete terms. Fixes UICR-203.
* Provide local translations to ControlledVocab. Refs UICR-163.
* Courses app: Replace collapse pane icons. Refs UICR-174.
* App Context menu | Add new option | Courses app search. Refs UICR-166.
* When a course is deleted, a green success toast displays, confirming deletion. Fixes UICR-207.
* After once having edited a reserve's start or end date, editing it again now gets a correctly initialized datepicker. Fixes UICR-205.
* Remove use of italics in three places in the UI. Fixes UICR-208.
* Format Courses and Reserves results to use hyperlinks in first column. Fixes UICR-164.
* Extend limit of reserves for which status is fetched from 20 to 100. Addresses UICR-210.

## [6.0.3](https://github.com/folio-org/ui-courses/tree/v6.0.3) (2023-10-20)

* Hide pop-up check box options while editing a note. Fixes UICR-189.

## [6.0.2](https://github.com/folio-org/ui-courses/tree/v6.0.2) (2023-10-13)

* Bump `@folio/plugin-create-inventory-records` version.

## [6.0.1](https://github.com/folio-org/ui-courses/tree/v6.0.1) (2023-10-12)

* Bump `@folio/plugin-create-inventory-records` version.

## [6.0.0](https://github.com/folio-org/ui-courses/tree/v6.0.0) (2023-10-11)

* BREAKING: upgrade React to v18. Fixes UICR-187.
* *BREAKING* bump `react-intl` to `v6.4.4`. Refs UICR-191.
* Update Node.js to v18 in GitHub Actions. Fixes UICR-188.
* When removing an instructor from a course listing, the display is now always updated. Fixes UICR-177.
* On reserving an item, show temporary location from reserve. Fixes UICR-183.
* Leverage cookie-based authentication in all API requests. Fixes UICR-176.
* New permission `ui-courses.view-settings` to view but not edit settings. Fixes UICR-181.
* Required course fields department and term now perform front-end validation. Fixes UICR-93.
* When viewing a course, show number of reserves before list. Fixes UICR-194.

## [5.4.0](https://github.com/folio-org/ui-courses/tree/v5.4.0) (2023-02-24)

* Upgrade from Stripes v7 to Stripes v8 (though should still work with v7). Fixes UICR-178.
* Update `@folio/plugin-create-inventory-records` dependency version to one compatible with our Stripes version. Fixes UICR-169.
* Move `prop-types` from dev-dependency to regular dependency. Fixes UICR-168.
* Replace `babel-eslint` with `@babel/eslint-parser`. Fixes UICR-155.
* Filtering of candidate values for location filter (and other search filters) is no longer left-anchored, but matches anywhere within the candidate values, emulating the behaviour of the Inventory app. Fixes UICR-160.

## [5.3.0](https://github.com/folio-org/ui-courses/tree/v5.3.0) (2022-10-25)

* Refactor permission-sets away from backend `.all` permissions. Refs UICR-150.

## [5.2.0](https://github.com/folio-org/ui-courses/tree/v5.2.0) (2022-09-07)

* Use local notes routes instead of pointing to `/users`. Refs UICR-161.
* Remove react-hot-loader. Refs UICR-154.
* Support interface `item-storage` `10.0`. Refs UIPCIR-43.
* Add `react-dom` to the dev-dependencies. (I'm not sure why it wasn't there already.)

## [5.1.0](https://github.com/folio-org/ui-courses/tree/v5.1.0) (2022-03-02)

* Implement baseline keyboard shortcuts. UICR-124.
* Adding additional permission "inventory-storage.loan-types.item.get" to "ui-courses.add-edit-items" to fix an intermittent issue with loan type display in the Courses app. UICR-157.

## [5.0.0](https://github.com/folio-org/ui-courses/tree/v5.0.0) (2021-09-29)

* Upgrade to Stripes v7. Fixes UICR-147.

## [4.2.1](https://github.com/folio-org/ui-courses/tree/v4.2.1) (2021-06-17)

* Added usage of <NoValue> component for a11y. UICR-100
* Implemented Notes helper module within Courses. UICR-126
* Implemented `<ColumnManager>` for managing visible columns in the Courses results list. UICR-132
* Implemented `<ColumnManager>` for managing visible columns in the Reserves results list. UICR-146

## [4.2.0](https://github.com/folio-org/ui-courses/tree/v4.2.0) (2021-06-17)

* Fixed bug where "All permissions" permission couldn't edit courses. UICR-141
* Added support for new versions of find-user plugin. UICR-135
* Fixed bug where term dates could be incorrectly parsed. UICR-137

## [4.1.0](https://github.com/folio-org/ui-courses/tree/v4.1.0) (2021-04-23)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v4.0.1...v4.1.0)

* Fix visibility of permissions and canonicalize upper/lower case. Fixes UICR-122 and UICR-123.
* Added ability to view and edit a course's `numberOfStudents` field. Fixes UICR-128
* Replaced current permissions with ones that can be i18n'ed. Fixes UICR-130.
* Added new permission for adding and editing a course's items. Fixes UICR-129.
* Repaired regression in error message when adding duplicate item. Fixes UICR-134.

## [4.0.1](https://github.com/folio-org/ui-courses/tree/v4.0.1) (2021-04-01)

* Fixed crash when display settings were not defined on the backend. Fixes UICR-131.

## [4.0.0](https://github.com/folio-org/ui-courses/tree/v4.0.0) (2021-03-11)

* Bumped to Stripes platform v6.0.0 and Stripes CLI v2.0.0. Fixes UICR-119.
* Added ability to Fast Add a reserve. I.e., adding on-the-fly Inventory records as reserves. UICR-91.
* Bump the maximum number of locations fetched from 500 to 1000. Fixes UICR-120.
* Added ability to duplicate courses. Fixes UICR-23, UICR-121.

## [3.1.2](https://github.com/folio-org/ui-courses/tree/v3.1.2) (2020-12-16)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v3.1.1...v3.1.2)

* Sorting of candidate filter values is now case-insensitive. Fixes a lingering part of UICR-107.

## [3.1.1](https://github.com/folio-org/ui-courses/tree/v3.1.1) (2020-12-14)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v3.1.1...v3.1.0)

* Revert a recent change that made `@folio/stripes` a main dependency rather than, as it needs to be, both a peer-dependency and a dev-dependency. This is necessary to allow the platforms to build correctly.

## [3.1.0](https://github.com/folio-org/ui-courses/tree/v3.1.0) (2020-12-12)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v3.0.2...v3.1.0)

* Dropdown options now display alphabetically. Fixes UICR-107.

## [3.0.2](https://github.com/folio-org/ui-courses/tree/v3.0.2) (2020-10-22)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v3.0.1...v3.0.2)

* A course can now be deleted if _either_ it has no reserves (so none are left danging) _or_ it has one or more cross-listed courses (which continue to hold the reserves). Fixes UICR-102.

## [3.0.1](https://github.com/folio-org/ui-courses/tree/v3.0.1) (2020-10-19)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v3.0.0...v3.0.1)

* Render `<Datepicker>` in a portal to avoid CSS clipping. Refs UICR-103.

## [3.0.0](https://github.com/folio-org/ui-courses/tree/v3.0.0) (2020-10-16)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v2.0.0...v3.0.0)

* Upgrade to `@folio/stripes` `^5.0`, including `plugin-find-user` `v4`, `react-intl` `v5`, `react-router` `v5`. Fixes UICR-108, UICR-109.

## [2.0.0](https://github.com/folio-org/ui-courses/tree/v2.0.0) (2020-07-31)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.7...v2.0.0)

* Upgrade to `@folio/stripes` `^4.0`, including `plugin-find-user` `v3`, `react-intl` `v4.0`.
* Add ability to delete a course. Fixes UICR-98.
* Add test suite, and [document how it works](doc/testing-with-cypress.md). Fixes UICR-21.
* Correctly import `required` via `@folio/stripes/util`.
* Simplify names of scripts in package file

## [1.1.7](https://github.com/folio-org/ui-courses/tree/v1.1.7) (2020-05-11)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.6...v1.1.7)

* Fetch and display up to 500 entries in the various dropdowns used in filters and edit pages. Fixes UICR-86.

## [1.1.6](https://github.com/folio-org/ui-courses/tree/v1.1.6) (2020-05-07)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.5...v1.1.6)

* In course display, up to 500 reserves can be listed (was 10). Of these, real-time item information is displayed for the first 20; thereafter, circulation status and other item-level information is displayed as `?`. Fixes UICR-85.

## [1.1.5](https://github.com/folio-org/ui-courses/tree/v1.1.5) (2020-04-28)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.4...v1.1.5)

* When displaying a course, do not run a spurious item-list GET, based on the reserves listed in the reserve-oriented view, before the correct one. This avoids not only an unnecessary round-trip, but an ugly error message when running against large data-sets. Fixes UICR-82.

## [1.1.4](https://github.com/folio-org/ui-courses/tree/v1.1.4) (2020-04-27)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.3...v1.1.4)

* Do not PUT to item when editing a reserve. Related to the MODCR-31 work.

## [1.1.3](https://github.com/folio-org/ui-courses/tree/v1.1.3) (2020-04-09)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.2...v1.1.3)

* Hide "Add instructor" button when permission is missing. Fixes UICR-81.

## [1.1.2](https://github.com/folio-org/ui-courses/tree/v1.1.2) (2020-04-06)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.1...v1.1.2)

* Many, many bugfixes, leading to first usable release.
* Change-logging of individual issues will commence with the next release.

## [1.1.1](https://github.com/folio-org/ui-courses/tree/v1.1.1) (2020-03-16)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.0...v1.1.1)

* Fixes to change-log for version 1.1.0.

## [1.1.0](https://github.com/folio-org/ui-courses/tree/v1.1.0) (2020-03-14)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.0.0...v1.1.0)

* Routing to edit-reserve form now includes item-ID explicitly. Fixes UICR-57.
* Upgrade to `@folio/stripes` v3.x, which is what FOLIO 2020q1 will use. Fixes UICR-58.
* Towards correct sorting for start-date, end-date, instructor and status: see UICR-49 and UICR-50, but note that these will not work until MODCR-21 and its underlying RMB issue are fixed.
* Towards more correct searching in reserves, though underlying issues mean these changes will not yet help: see UICR-31.
* Towards more correct sorting in reserves, though underlying issues mean  these changes will not yet help: see UICR-60.

## [1.0.0](https://github.com/folio-org/ui-courses/tree/v1.0.0) (2020-03-13)

* New app created from scratch.
* Candidate version for inclusion in FOLIO fireflower (2010q1) release.
* In reality, will need crucial fixes to UICR-57 and UICR-58 in forthcoming v1.1.0.

