const assert = require('chai').assert;

module.exports.test = (_uiTestCtx) => {
  // console.log('_uiTestCtx =', _uiTestCtx);
  describe('arithmetic', function () {
    it('2 + 2 = 4', function () {
      assert.equal(2 + 2, 4);
    });
  });
};
