import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import { stripesConnect } from '@folio/stripes/core';
import ReserveForm from '../components/ReserveForm';
import NoPermissions from '../components/NoPermissions';
import fetchIsPending from '../util/fetchIsPending';

class EditReserveRoute extends React.Component {
  static manifest = Object.freeze({
    reserve: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}/reserves/:{id}',
    },
    courselisting: {
      type: 'okapi',
      path: 'coursereserves/courselistings/:{clid}',
    },
    loanTypes: {
      type: 'okapi',
      path: 'loan-types',
      // records: 'loantypes',
    },
    processingStatuses: {
      type: 'okapi',
      path: 'coursereserves/processingstatuses',
    },
  });

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    resources: PropTypes.shape({
      reserve: PropTypes.object,
      courselisting: PropTypes.object,
      loanTypes: PropTypes.object,
      processingStatuses: PropTypes.object,
    }).isRequired,
    mutator: PropTypes.shape({
      reserve: PropTypes.shape({
        PUT: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
    }).isRequired,
  };

  getInitialValues = () => {
    const reserve = get(this.props.resources, 'reserve.records[0]', {});
    return cloneDeep(reserve);
  }

  handleClose = () => {
    const { location, match } = this.props;
    this.props.history.push(`/cr/courses/${match.params.cid}${location.search}`);
  }

  handleSubmit = (reserve) => {
    this.props.mutator.reserve.PUT(reserve)
      .then(this.handleClose);
  }

  getOptions(resource, element) {
    return get(this.props.resources, `${resource}.records.0.${element || resource}`, [])
      .map(x => ({ value: x.id, label: x.name }));
  }

  render() {
    const { resources, stripes } = this.props;

    if (!stripes.hasPerm('course-reserves-storage.reserves.write')) return <NoPermissions />;

    return (
      <ReserveForm
        data={{
          reserve: resources?.reserve?.records[0], // XXX redundant
          courselisting: resources?.courselisting?.records[0],
          loanTypes: this.getOptions('loanTypes', 'loantypes'),
          processingStatuses: this.getOptions('processingStatuses'),
        }}
        handlers={{ onClose: this.handleClose }}
        initialValues={this.getInitialValues()}
        isLoading={fetchIsPending(this.props.resources)}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default stripesConnect(EditReserveRoute);
