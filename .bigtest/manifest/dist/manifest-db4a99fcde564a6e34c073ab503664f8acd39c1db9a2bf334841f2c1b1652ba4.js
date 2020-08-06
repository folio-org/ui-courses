(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('.......	estasic.test.js'), require('.......	estsanity.test.js')) :
    typeof define === 'function' && define.amd ? define(['.......	estasic.test.js', '.......	estsanity.test.js'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.__bigtestManifest = factory(global.________est_asic_test, global.________estsanity_test));
}(this, (function (________est_asic_test, ________estsanity_test) { 'use strict';

    ________est_asic_test = ________est_asic_test && Object.prototype.hasOwnProperty.call(________est_asic_test, 'default') ? ________est_asic_test['default'] : ________est_asic_test;
    ________estsanity_test = ________estsanity_test && Object.prototype.hasOwnProperty.call(________estsanity_test, 'default') ? ________estsanity_test['default'] : ________estsanity_test;

    (function() {
        const env = {"NODE_ENV":"production"};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

    var load = function load(res) {
      return res["default"] || res;
    };

    var children = [Object.assign({}, load(________est_asic_test), {
      path: "test/basic.test.js"
    }), Object.assign({}, load(________estsanity_test), {
      path: "test/sanity.test.js"
    })];
    var manifest = {
      description: "All tests",
      steps: [],
      assertions: [],
      children: children
    };

    return manifest;

})));
//# sourceMappingURL=manifest-db4a99fcde564a6e34c073ab503664f8acd39c1db9a2bf334841f2c1b1652ba4.js.map