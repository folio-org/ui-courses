import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, ButtonGroup } from '@folio/stripes/components';

const segments = ['courses', 'reserves'];

const FilterNavigation = ({ current }) => (
  <ButtonGroup fullWidth data-test-filters-navigation>
    {
      segments.map(name => (
        <Button
          key={`${name}`}
          to={`/cr/${name}`}
          buttonStyle={`${current === name ? 'primary' : 'default'}`}
          aria-selected={current === name}
          id={`segment-navigation-${name}`}
        >
          <FormattedMessage id={`ui-courses.filters.${name}`} />
        </Button>
      ))
    }
  </ButtonGroup>
);

FilterNavigation.propTypes = {
  current: PropTypes.string,
};

export default FilterNavigation;
