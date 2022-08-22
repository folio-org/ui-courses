# Change history for ui-courses

## 5.2.0 IN PROGRESS

* Use local notes routes instead of pointing to `/users`. Refs UICR-161.
* Remove react-hot-loader. Refs UICR-154.

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

