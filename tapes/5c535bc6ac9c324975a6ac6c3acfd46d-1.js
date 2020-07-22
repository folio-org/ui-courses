var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a : 202 11170us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a : 200 14940us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSUP2/bMBDF93wKQWt7DUVSFJktfxajTVugyVRkOJKngoUtGRQdxAjy3UvZkmsYCOBo0KCn392945NeL4qiDL4sroqycpq8RQtoawvS1wpQGAXMOqmdJ4ECy88jEOlPGFLEuNiT8fqmYtVeo5dEscPlJL0cScveYQp9N0mt80o6qkAZU4PULQMtGYE2bYucay2aE/CH/UsujfBrfvx/8rMrZaTDFe2gewxd8S3YbGM7i673e/Hr4+Xt7eXd4vJ+lsJw7VJ43skpbmh+3A0ppM2RrdyYGHMIWFcapJUGLLEKmBLaM5To6ubQD1frzTCBiru2UbYB5zC78EKA4VUD5FvJszvUUs/gcj/3RNa+0ZoJAodMji1zc0IC7pSwhss8iJ3JdQyrTP6i+Bwc/exDt1toKVAyXXMP0rT55lsOWLUGFHElK1RkqnauMRzBCz+M/O8zKxRPucTb7lRzTlZzFExTcW4kcCYakLJtQDOlgFcKydTMceXKA/RuDM6tchyDhxi6kLYFZ5wd/CWM6Q7T/o1RgbxXrmadOn+i5iasPDhz/SYO9LBd0+TPVLVkUlsQyuRMcHI5HTkirnVkWyaJGVmeoO+5PLvWsctFV6wpDn03K54GF8N6zO3uhe990XfL0FHh+tW67yjH4uBnDHncuNTH/VDTiT/txBUl9JjwaFIXKa/ndEcNcP7A+JXUV7X4omr1ieXr8CnsmZvtY07XtDarUbQ6fzuaGge11JT/TUyAFbXl5L3hzeFMNmv/4Z4T8/Ge42Yu3v4BAAD//wMAS8523j0FAAA=", "base64"));
  res.end();

  return __filename;
};
