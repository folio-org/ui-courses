var path = require("path");

/**
 * GET /coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/abd88c4d-8de9-46b8-8291-0ccf916fb89e/09427a84-6777-487d-bdb3-75235f4012de/7a15bc67-6d1d-41ef-9b4f-16a68a245110/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de : 202 7180us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de : 200 21135us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMRWy27bRhTd5ysIbZuRZ4bz1M52itZI4haIsyqymMelzZYihRFlxAj8772kKJOW5VSuA0QLQuDlOXPPfc63N1k2K+MsW2QzagXXzgiitNZEGB2Jjz4nWvJcFoIyHmH2tgPUbgk95NSleOvSP5lPALGsr7f2COuQylVbNnX/2dUNZMElyFwds2L7ZdYUWbvxm6qMULeuhfUOu3KpXeK7i61bTCplBAtEsgBERBGIc9QSCo4zT6mlwu1D//B/Q2g7+Dc0jBKP5pqK/BVJb7JPoYQ6DF4e0HhRh2rTC7uGpmqu795mK2hT/7fXvXKVg6Zu+zc7liW0LrrWja7iy5AA4xHf4aOn5pRTQjXJ2RXNF7lcCDnPrfiF4m8gQtRmFZ9DMb7I6YLZOWPsMOrs7vMa0hBxT4XxChwR3EgirciJoZIRr4TgrpBCWTrrCe7xed/HPjSbtIYP5brFEAw8zkdjgojERLBEKG+I4ZYRGkJhmSq8sUNBPUI/l7yj6RCS4BrJkttJSqdnjLKdFb62kGpXDcavj4xVE1yX1cFYhKhEAEaUtRK7oqDECArE2KJwnBuT6yfQfQWjhhewTUvwoyvr7EPpUdDdaA5N3Jrffz45Pz95d3HycTSW69PQlrf9B23awGioMcrtZiIRHQBKgyNOMkOEF5Z4oBhYlZtInXBB6smpbrnarAeo4qHQymsSgkM9Mc+J5UwTiIXgqBPHiRmh1VbBgJVRG0NzIMFR0R2LDoADwoPKveUCnfEjdpXKJWI/QbotA/zZlHUf4FnuBDWSRyJsgY9YcOJYYYkCrgRzCiwrRpb1BH4R1x3DX0dyZF+2JT/kGitouSsRqxnnVhBOcxycotDYL0oRzpQDK2ngKswmsO+Ux/FM0/K4SmVdtndZ1/ITrS0Orr1xgMxq/ALq/XGBR+1ae3B425pXdysY1FomRTcgSK4sVgsHnKESiycUAXxBBeAemT0BP6/5BXxTzRc1zte0xun7YNsfyZdN1tRVWePyaZarpsbF8Fhb1wppE9ombd0b6mHfQ+2Y9EFpoiLD8mBQEOtFQTApyriuUBk94OHvZVV1S+8MKhwM4wfepYfOZTwXctrRr5iizy6U76+UbjnohZRzwfTj5TDiXr4eJhz/sZiePft1q2m7nLpcP604KazQWGxRdz3vHMY24CQOgkW88Ugvoj2Qz9/m2ft5dn4Da2zidlp404wqbSbyf2ZG9dxK/pMyevjsH5TR7Mv/vD0NztE5Z2bvHvTqsBwRlEPn/tj71+Vm6SFtr+YPdxpceqGbiZcPt/YKVjdb09MIHhE/Nqfm0T3ytdE7InZPz3xN5O7f3P8LAAD//wMAPykg+foMAAA=", "base64"));
  res.end();

  return __filename;
};
