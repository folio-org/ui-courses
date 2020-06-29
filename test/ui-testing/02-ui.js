module.exports.test = (uiTestCtx) => {
  describe('ui-courses: tab navigation', function test() {
    const { config, helpers } = uiTestCtx;
    const nightmare = new Nightmare(config.nightmare);

    this.timeout(Number(config.test_timeout));

    describe('Login > navigate to app > verify tabs work', () => {
      before((done) => {
        helpers.login(nightmare, config, done);
      });

      after((done) => {
        helpers.logout(nightmare, config, done);
      });

      it('should open Course Reserves app', done => {
        helpers.clickApp(nightmare, done, 'courses');
      });

      it('should open app and see selected Course Reserves tab', (done) => {
        nightmare
          .wait('#segment-navigation-courses')
          .evaluate(() => document.querySelector('#segment-navigation-courses').className)
          .then(className => {
            if (!className.includes('primary')) throw Error('Course Reserves tab is not selected');
            done();
          })
          .catch(done);
      });

      it('should click Reserves tab and see updated URL', (done) => {
        nightmare
          .waitUntilNetworkIdle(1000)
          .click('#segment-navigation-reserves')
          .waitUntilNetworkIdle(1000)
          .evaluate(() => document.location.pathname)
          .then(pathName => {
            if (!pathName.includes('/cr/reserves')) throw Error('URL is incorrect');
            done();
          })
          .catch(done);
      });

      it('should click Courses tab and see updated URL', (done) => {
        nightmare
          .click('#segment-navigation-courses')
          .wait(1000)
          .evaluate(() => document.location.pathname)
          .then(pathName => {
            if (!pathName.includes('/cr/courses')) throw Error('URL is incorrect');
            done();
          })
          .catch(done);
      });
    });
  });
};
