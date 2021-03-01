var path = require("path");

/**
 * GET /coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42.. : 200 7873us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMRWTW/jNhC9768QfO3SISl++pZkiyLY3bRAsqdiDyNylKi1JYOS0w0W+e8d23KsOHbqNP24CAKHbzjvzXCG399l2aiKo2ySjYKRaLUQLBaomFKomdNeMm+tjYp7jEqO3i8BNcxwBTmFFO8g/Z4VCTFW9c3aHrENqZp3VVOvtl3fYhYgYQZ1zMr1zqwps25RLKZVxLqDDtsNdg6pm9HaxTosoY1xSgSmRUCmogoMgHvGEaQoOPdcwS705+I3DN0S/p0MW4pH+xqS/JGc3mZXocI69FHu4XhRh+liRewGm2lzc/8+m2OXVr8r3nOYAjZ1t1rZeJlhBxE62IZKiyEh6RE/0GflWnIpGM8ZF9dcTDSfaD2mpR84n3DeeyLYYh4PwYSdKDcRduyUOQA7u//SYuo1L1URYjScgVeK6dxr5kMeWA4WXIxWhYijlYMH+j6s1A/NIrX4qWo7EqH3Y73lstCS8WhJb4fACoslA4VWSedL3kfyFH0ofUe7I0jCG3KWYEMpnZ4JLjZW/NZhqmHaG789MU6bAMu8bsQI0aiAghlPOihXcuYUR0bnlSClc7l9Bt1lsOXwCm/DIvwMVZ19qgoidL81hyauzR+/nJyfn3y4OPm8NVbtaeiqu9WGLi1wa6hJ5W4xoEgBIOcBGGjhmCqUZwVyqh6Tu8hBQdB2cCrM5ou2hxoZSmsKy0IA4hPznHkpLMNYKkk8wSm3hU7XDHqsjtY5niMLwNXyWAoAAZkMJi+8VBRMscXOUzUj7BWmuyrgL01VrwQe5aC40zIy5Uv6xFIyEKVnBqVRAgx6UW69tAP4RWyXHn490kf2dV3yfa6pgmabEvFWSOkVkzy31DpLyxw3hklhAL3mQZowGsBeKI/jPQ3L4zpVddXdZ3TnB1e77ah1DfsBZ6SzNNsdWMcdOx3FR094rq/m9f0ce7ZeaMWVK1huPFWLROqimoonlAGLkivkXo2egQ9zfoW/IeeLmjpsaqn/Ptp2m/JlkzX1tKpp/DSzeVPTaHjKbXkV0iJ0TVqH19fDboRUBIFuZ8mELjzVSA40GgGY4qKk4ijyQu2L8Kdx9nGcnd9iS0nvhoEWkB7vrrHO8+GdfkMfPThUXh4rNB+0pqkwtlLtzIct8PUTYuDj5eH0wuFvG0/rAbXM97OcBgwAgpKIBXU6VVD3orsvmSipRZfcUNnJfTnFJt1gdrYcHylmV7fwx/60ilxb//+nVU20G1uz+1r4z9IqKa3uX0tr9vVvPqR6afKx13r3RfRmYf5KlkMH/7NPscvFrMC0fqc/Pm9o/oVle7x8fMJPcX67Nj3X8AgF1Vga/4TIW/U7Qr09h75Fu4d3D38CAAD//w==", "base64"));
  res.write(new Buffer("AwCe6QiqCQ0AAA==", "base64"));
  res.end();

  return __filename;
};
