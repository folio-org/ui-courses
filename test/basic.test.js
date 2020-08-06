import { test } from "@bigtest/suite";
import { bigtestGlobals } from "@bigtest/globals";
import { App } from "@bigtest/interactor";
import { Input, Button, Heading } from  './interactors';

export default test('Basic Test')
  .step('increase timeout', async () => { bigtestGlobals.defaultInteractorTimeout = 10000; })
  .step('visit /', () => App.visit('/'))
  .child('Logging in', test => test
    .step('focus input', () => Input('username').focus())
    .step('enter username', () => Input('username', { hasFocus: true }).type('diku_admin'))
    .step('enter password', () => Input('password').type('admin'))
    .step('submit the form', () => Button('Log in').click())
    .assertion('Welcome message visible', async () => {
      await Heading('Welcome, the Future Of Libraries Is OPEN!').exists();
    }));

