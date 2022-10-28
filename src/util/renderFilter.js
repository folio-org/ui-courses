import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Accordion, FilterAccordionHeader } from '@folio/stripes/components';
import { MultiSelectionFilter } from '@folio/stripes/smart-components';


// Copied from stripes-components/lib/MultiSelection/MultiSelection.js
// The only change is the removal of left-anchoring from the regexp.
// 
const filterOptions = (filterText, list) => {
  // escape special characters in filter text, so they won't be interpreted by RegExp
  const escapedFilterText = filterText?.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&');

  const filterRegExp = new RegExp(`${escapedFilterText}`, 'i');
  const renderedItems = filterText ? list.filter(item => item.label.search(filterRegExp) !== -1) : list;
  const exactMatch = filterText ? (renderedItems.filter(item => item.label === filterText).length === 1) : false;
  return { renderedItems, exactMatch };
};


function renderFilter(filterHandlers, activeFilters, options, name, translationId, dataName) {
  const values = activeFilters[name] || [];

  function filterCandidateValues(s, candidates, c, d) {
    return candidates;
  }

  return (
    <Accordion
      label={<FormattedMessage id={`ui-courses.filters.${translationId}`} />}
      id={name}
      name={name}
      separator={false}
      header={FilterAccordionHeader}
      displayClearButton={values.length > 0}
      onClearFilter={() => filterHandlers.clearGroup(name)}
      closedByDefault
    >
      <MultiSelectionFilter
        name={name}
        dataOptions={options[dataName || name]}
        selectedValues={values}
        onChange={(group) => filterHandlers.state({ ...activeFilters, [group.name]: group.values })}
        filter={filterOptions}
      />
    </Accordion>
  );
}

export default renderFilter;
