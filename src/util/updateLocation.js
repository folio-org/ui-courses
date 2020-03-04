import { parse, stringify } from 'query-string';
import { isNil, omitBy } from 'lodash';

const updateLocation = (props, newParams) => {
  const {
    location: { pathname, search },
    history,
  } = props;

  const prevParams = parse(search);
  const params = Object.assign(prevParams, newParams);
  const cleanParams = omitBy(params, isNil);
  const url = `${pathname}?${stringify(cleanParams)}`;
  history.push(url);
};

export default updateLocation;
