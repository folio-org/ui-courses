function exciseObjects(source) {
  const dest = {};

  Object.keys(source).sort().forEach(key => {
    if (!key.match(/Object$/)) dest[key] = source[key];
  });

  return dest;
}

export default exciseObjects;
