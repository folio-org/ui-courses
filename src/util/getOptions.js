// Returns a list of options such as can be supplied as the
// `dataOptions` argument to a react-final-form `<Field>` of type
// `<Select>`. Arguments:
//      `that`: the component this is being invoked on (`this`)
//      `resource`: the name of the stripes-connect resource with the data
//      `element`: the element to extract from the resource, if named differently
//      `emptyOption`: if defined, an empty entry of this name is prepended

import get from 'lodash/get';

export default function getOptions(that, resource, element, emptyOption) {
  let res = get(that.props.resources, `${resource}.records.0.${element || resource}`, [])
    .map(x => ({ value: x.id, label: x.name }));

  if (emptyOption) {
    res = [{
      value: '',
      label: emptyOption
    }].concat(res);
  }

  return res.sort((a, b) => (a.label < b.label ? -1 : a.label > b.label ? 1 : 0));
}
