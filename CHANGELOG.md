# Change history for ui-courses

## 2.0.0 (IN PROGRESS)

* Upgrade to Stripes 4.0

## [1.1.5](https://github.com/folio-org/ui-courses/tree/v1.1.5) (2020-04-28)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.5...v1.1.4)

* When displaying a course, do not run a spurious item-list GET, based on the reserves listed in the reserve-oriented view, before the correct one. This avoids not only an unnecessary round-trip, but an ugly error message when running against large data-sets. Fixes UICR-82.

## [1.1.4](https://github.com/folio-org/ui-courses/tree/v1.1.4) (2020-04-27)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.4...v1.1.3)

* Do not PUT to item when editing a reserve. Related to the MODCR-31 work.

## [1.1.3](https://github.com/folio-org/ui-courses/tree/v1.1.3) (2020-04-09)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.3...v1.1.2)

* Hide "Add instructor" button when permission is missing. Fixes UICR-81.

## [1.1.2](https://github.com/folio-org/ui-courses/tree/v1.1.2) (2020-04-06)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.2...v1.1.1)

* Many, many bugfixes, leading to first usable release.
* Change-logging of individual issues will commence with the next release.

## [1.1.1](https://github.com/folio-org/ui-courses/tree/v1.1.1) (2020-03-16)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.1...v1.1.0)

* Fixes to change-log for version 1.1.0.

## [1.1.0](https://github.com/folio-org/ui-courses/tree/v1.1.0) (2020-03-14)
[Full Changelog](https://github.com/folio-org/ui-courses/compare/v1.1.0...v1.0.0)

* Routing to edit-reserve form now includes item-ID explicitly. Fixes UICR-57.
* Upgrade to `@folio/stripes` v3.x, which is what FOLIO 2020q1 will use. Fixes UICR-58.
* Towards correct sorting for start-date, end-date, instructor and status: see UICR-49 and UICR-50, but note that these will not work until MODCR-21 and its underlying RMB issue are fixed.
* Towards more correct searching in reserves, though underlying issues mean these changes will not yet help: see UICR-31.
* Towards more correct sorting in reserves, though underlying issues mean  these changes will not yet help: see UICR-60.

## [1.0.0](https://github.com/folio-org/ui-courses/tree/v1.0.0) (2020-03-13)

* New app created from scratch.
* Candidate version for inclusion in FOLIO fireflower (2010q1) release.
* In reality, will need crucial fixes to UICR-57 and UICR-58 in forthcoming v1.1.0.

