let load = (res) => res.default || res;
const children = [
  Object.assign({}, load(require("./..\\..\\..\\test\\basic.test.js")), { path: "test/basic.test.js" }),
];

module.exports = {
  description: "All tests",
  steps: [],
  assertions: [],
  children: children,
}
