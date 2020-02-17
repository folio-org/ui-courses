export default (resources) => {
  return Object.values(resources)
    .filter(resource => resource)
    .some(resource => resource.isPending);
};
