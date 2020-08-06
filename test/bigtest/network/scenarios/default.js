/* istanbul ignore file */

export default function defaultScenario(server) {
  server.create('staffSlip', { name: 'Hold' });
  server.create('staffSlip', { name: 'Transit' });
}
