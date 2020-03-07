import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Accordion, FilterAccordionHeader } from '@folio/stripes/components';
import { MultiSelectionFilter } from '@folio/stripes/smart-components';

function renderFilter(filterHandlers, activeFilters, options, name, translationId) {
  const values = activeFilters[name] || [];

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
        dataOptions={options[name]}
        selectedValues={values}
        onChange={(group) => filterHandlers.state({ ...activeFilters, [group.name]: group.values })}
      />
    </Accordion>
  );
}

export default renderFilter;
