var path = require("path");

/**
 * GET /configurations/entries?query=(module=ORG and configName=localeSettings)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImEwOWE4M2FkLTNkMmYtNWI5Yi04OTk0LWQ4NzRmMTQ1NDY5NSIsImlhdCI6MTU5Mzc0ODc5MywidGVuYW50IjoiZGlrdSJ9.Moy02GDjk7IIJQTOGxN5PoSKLTfDwf9Xt5ae_TWLBpE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 03:59:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.251:9178/configurations/entries.. : 202 7063us, GET mod-configuration-5.4.0 http://10.36.1.251:9131/configurations/entries.. : 200 8980us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//", "base64"));
  res.write(new Buffer("UlBQSs7PS8tML1ayUojmAgAAAP//lJDNSsUwEIXfZbY2GtOkbbpTLoibK1i7EAIyTaZQ7I/EVLmWvrvp7X0AncXAHL45Z5gFOgclZFikohCapVnGmbS5ZQ1KzgS2zrXYKJURJDBMbu4p8k/PD3HcjY44bFI/WeypohC6MZonQCM2PUX34GdK4Av7eeMWc0ENlCZCrK4M", "base64"));
  res.write(new Buffer("JAZCN9DPNO7y3UC+s3hzpO+318m/nwk7e0+jPZ2JujoYWLebKKDDgFAuYD1hIHeILSYJLjjjOePpC09LJUqlrzVXVzzWdv0O35/qT/KP2xeQ6/gHdCx1omWq0Q0rtJbMFblsb6WSmVZxcf5wf0+5wP9NWddfAAAA//+K1QHFVUl+SWJOUGpyflEKKMIMdbgAAAAA//8=", "base64"));
  res.write(new Buffer("UlAqSi0uzSnxzEvLB4pUoykx1FFKS0xOLQEyo2N1lFIyE9Pz8otLMpPBArVctQAAAAD//wMAD0h/8AMCAAA=", "base64"));
  res.end();

  return __filename;
};
