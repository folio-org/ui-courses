/* global Nightmare, describe, before, after, it */

module.exports.test = (uiTestCtx) => {
  describe('ui-courses: app displays front page', function test() {
    const { config, helpers } = uiTestCtx;
    const nightmare = new Nightmare(config.nightmare);
    this.timeout(Number(config.test_timeout));

    describe('login > open licenses > create, view, edit license > logout', () => {
      before((done) => {
        helpers.login(nightmare, config, done);
      });

      after((done) => {
        helpers.logout(nightmare, config, done);
      });

      it('should open Courses app', done => {
        helpers.clickApp(nightmare, done, 'courses');
      });
    });
  });
};
