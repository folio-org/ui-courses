var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/copyrightstatuses.. : 202 7059us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/copyrightstatuses.. : 200 2865us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTW/bMAyG7/0VQq6rCtmSLMm3NrvsUhTrdhp2ICV5NeaPwFYKBEX++2hnGYa2xtY0PhCwqJeQHr3k0wVjK99vdkP94yHdJ0jbMY4rVrJv7IlylK3D9LsSoJ0N3vNcmoqrYBS3SinuwGuwlQsK7OryIOmgjbNovWY3u+NqiKMf6k2q++6QHCKk+jGydd+2fTcySGmocTttYE3tYzfGo7aNCQIkmISHc03nngrE8JHCXDAXueDC8Nx+EbKUupTqKtfmg6DvdyFSbTfh/1WzaE9xf/mMR4WFrbRD7pSIXKkCuHUyUBCFC5lGK+QLHndbpIux0LdQd0tcbnv250WICYOmeT8Gk52C4ahaxoAWIypRcVchYQiabOGx4CJkhSiMcjng67bgt2t+f32SObq+457W4+BraNj4AEPk0NQ/4/l8Y8UpwI6qZWCQWV0oX3GLVpJvArWQ15ajcbLKggxGq0Vg56B1PkLuJELuX4SE0nkmjeDWFmSpLNDbTubSNGfQVdHYHF4Qum4aNnfMyIY4xuExhiVYd5AGwtLCjtCkudfO1mbuDUyyrNR5mRVXQurXVTe7r3SVTwcsUaL1hdEcPbHRCJbTiEGOWCFAEAHB/UWVfZ+qrVKfoPkcfT+Eeazri/0vAAAA//8DAPUHZ+H0BQAA", "base64"));
  res.end();

  return __filename;
};
