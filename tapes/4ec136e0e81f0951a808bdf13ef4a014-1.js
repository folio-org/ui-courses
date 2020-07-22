var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTIwNiwidGVuYW50IjoiZGlrdSJ9.VEA8ID_FQfcqIMlntaG-O8FSdQrpCEXytIUWBtOz830
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:40:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 6869us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 50620us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYTW/cNhC9+1cIe60ZUxT1lZtrB6jRNDHqFDkUPYzIoc1aKwmU5GYb+L93tFpp5fVis3ZQoCjkw3ot8Q35hm9mHvz1xPMWqmxdjfXCe+v97n2lJ/TM6u7PBUBmYiMjlkKQMKliwbIg85kMIQx5HMsggsVpDylgiWvQVdG40mtK7xpywLJoyry8XQ3LNNbK2aqxZbFefdO0euWVxoNCWSwaL7cGt4srcM2SHl/1B/LDKEqkr1joK2RSS8UAeMo4gvAzzlMu4Tn4Y/YnqqYL0NPbEnxBvCnFdxT4zrvpDqwoc+OCXXJXhcpbbYtb7xbXWTj1KqTsdF+JsPaqPSmiOEtsQEMD0yN3N+UQGtSX9LEOL7jgjMdMiE88eCvFWynfxCH/gdPPGIxwbaWPx21gj+vfj5tc9hp5b+uGyAx3wWWKEUlCK42dOBTL0jBjqE1qIq4ilenFPvyB6zg+JIEc3lJAB25zIPzSoCsg99V2zfBsZ4mYLKnRPViFVWlHmQUgeRIKzWRq6EMbwcA3KYtQRNKHCFPf7A/wnNuW3YuiTuV2YZ3yLrG+9/zpe1Xq/r3ST55rW6vyAd3q0tZVDqsP0zhtDp08+3CMeT9Bnv8Fqym+suq+rd6XCgYhN67FyYK7Mtc3d5ibd18q61bX6Gypn3LujtG6MUBwOn1DeaKUjZfyGfG+XowLHic71Q0Yc5PbatOe/jjZWbPIN8fcxAoDZdIwMkz52jDp84wlGQITsYl9oRTEalsaI/jQrb0o4vTWzosCv+y9r59/O7u4OLu8Ojufvrb1uWrsA+5JuC2ocJp2wlNyRM4VMAh96syZTFmG3Gc8ChLNQYIK4yd7w7Jq6w04EsrEURYzOn1IQgwClgo/7spMCoU+JDKZgnObUZWthhTrOEl4gEwBl93WdAgEZEJFQZYKSQfKnsjJ2SWhb/oque6q5FXlUE8CXOmNII6Lskc3pMDlhpBJ6SJFKpngQcykNDFLeBQx4UeAaciViCbtogMe0suLok318snZwjYrr+vOi6c14Jqd3k3Ro+kaLHa7O2247eXj4fs+/GlV4YY7D0KOIvaZ1hnpSKNhEEHCgFQvDfezzEw67hZ+KAMvijnNwMcitwWeXRU0JV1NnWPa1HZG648lTeByDVhPUluwHuSpclmVBY39+jn/rpBcq5rS9QSGtvL9kzd8w7n/isk7wR2YvB/aZYauDyGjZNiDakJ1GRk7/E2Zj+ZpH5XjiMjoKZHjaAyok4HE4+mOnQw0uUmeEC7xMyYjRU0rUgFLqH+AkRKodr5lJzN70E6+J/dIWvAqh3dkDkpnldfY5WjS9lhKo1LfF5IpLYBJQ50sBaTGxoMo0QlPE6Gfgw94mOPjTWn+As0dLmkaqaP8ZNbJv2pdL36oqtyi9gh/N4F/j40M4tfZyAE328jZRs42craRs42cbeRsIwfi/ykbyYd2/8xGji9e7yHD+DUeMoy/5SFjIYMwCxWJN6WmwyU1nSwAFsbUNoQJU8zSZx7yAnKaWG3tBVvOu0r4bP8Gp1mOD5h72hqDji7f9mOul0aDt5tZNJvJ4yU9m8nZTM5mcjaTs5mczeRsJv+XZtIPwnh0Xf/O/yTj4DV+ckBt/WSf10VTNpD/iqp0fdUGJ4//AAAA//8DABzZS54NHwAA", "base64"));
  res.end();

  return __filename;
};
