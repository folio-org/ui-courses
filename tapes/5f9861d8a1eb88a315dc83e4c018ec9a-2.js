var path = require("path");

/**
 * GET /coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/instructors/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/add
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364 : 200 6478us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/bOBC991cIvm6ZkBQ/fUvaBTbYNrtA09OiB4ocJurKkkHJQYMi/33HkhIpdhw4m14EQ8P3OG80M88/32XZogyLbJktjJeR5k6TYGgkwoAgzihPvDZW+0KpXInF+y2gdivoIWcuhVuX/s2KBBDK+nqIB2h9Ktdd2dT9sasbyLxLkLk6ZHE4mTUx6zbFpioD1J3roH3Arl3qVvjuYkiLSaWMYJ5I5oGIIDxxjlpCwXFWUGqpcLvQv4rv4Lst/CcGJolHc81F/o6kN9kXX0Ltxyyf0XhR+2rTC7uGpmqu795na+hS/7PXvXaVg6bu+jcPLCvoXHCdm1LFlz4B1iN8xEdPzSlnhHLC+BXNl5wuuT5RRv5G6ZLSkQlhm3U4BGN6ydVSshOaqwOw87uvLaSx5lrnGpgMRNNCERkkJS7PI4lCh8KyyJnXi57gHp/3ffV9s0ktfCrbDosw8ihuLVhlifVCEOGUI8Yjj6SM5topU4S42Ecf+nxH0yEkwTWSJfcgKZ2dM8oeovCjg1S7agz+eBKsGu+233UMRh+U8MCIslbiXERKjKBAjI3RcW5MrveguwomDa9gmzfhZ1fW2aeyQEF3U9g3YQj/+fX0w4fTjxenn6dg2Z75rrztD3RpA1Ogxip3m5lETAAo9Y44yQwRhbCkAIrdo3ITqBPOSz271a3Wm/bxE/uoVaGJ9w71hDwnljNNIETBUaczwkzQalAwYmXQxtAciHdUbK/FBMAB4V7lheUCkykm7DqVK8R+gXRbevi7Keu+wIvcCWokD0TYiI8QOXEsWqKAK8GcAmzYiaWdwS9Cu2X450iO7NvQ8uO3xg5aPbSI1YxzKwjHPiRCRE0MVYpwphxYST1XfjGDvdAexzPN2+MqlXXZ3WU487PRbjtcXfN9QAnWmavpBNRhJ45X0cUTncNoXt2tYVRrmRRUmILkymK3cMAtKrF5fPRQRCqAWrHYAx/W/Aq+ueaLGjdsanH/PsZ2l/JlkzV1VdZoP81q3dRoDU+1bUchbXzXpCG9sR92MyysE1ZLTxTbtoeQBe5DLKX0OMWeg/HRPpPhH2VVbW3vHCpcDNOBwqXHyWU8F3I+0W/Yogct5WVTQXeQfJnrE0t3TWUCvt4fZhwvW9MLl7/NnAZ7wmf27X/67ZgdO5HK7BrnmwtzRFmevfjXOvblZlVAGv7OPbogrkm/naLLx396FaxvhtB+DY+qoMntEyFvrd9R1du79C21u393/x8AAAD//wMAcyEPVjALAAA=", "base64"));
  res.end();

  return __filename;
};
