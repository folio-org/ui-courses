var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAxNCwidGVuYW50IjoiZGlrdSJ9.pYJZcQSjLyze0JsznKIdSEhBxrVih9tUNehad7VLNF8
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 6872us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 20466us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTW/bRhC951cQutab7BeX3Nxcu0CNJk6ApOihyGF2d9bamiKJJelGCPzfu5IoiVJkVHYOrQ8CzOEbzrx984b89irLZsHNsrfZrBRUSEOBGF8wIqXOiVGSE45al77gDHM3u1gBaljgGnIFlR2qocsYZZuQw87G0Pahqdd3/AxdsJkL3mPEug+wimRQuyzUPd7F9f9baAuxX6S7bjYFMW81Y1wS6zgQ6QGJBpREUqFKV1JdcncM/WD+Qtuv4N9SYN/c2bmm7b2Hfo6LVKLttrHj/m5qWw0u1HeZafp51g4R191B21YBXZbQ8x14gT046GFfXrpoI0KP7jr9rDNyyimhBWHFZyreCvk2z18XXP5E09+YKKGG1p2PWoMe0+/jmi3bDLHDd6HrU90j15YKYw0IAgookTxnxAimCFWCGcNReT6e8AH6KbrPTpcgEe9SsghxLAW/9hhrqHY3bC8cxfk23mF8CBbbJuykI0DSMueOSO3Tj/OcAPOaKORKMlComT8FP+5n39EzMh5MSIg2u8buPmP7qG3cJmrd5KoLnW0eMC6vQ9dWsLyd5hiqzeSsUxGS/QpV9Tcs9+g22PuhfddY2GqzjwPuwvOmcp/mWPlfvrYhLj9iDI2b9rkqYIg7sLjYX19NanzY8f8H4n03G8OPuyd0PXj/qQptt7rrz+zLq0l8Vo2FjTlyYb3OlSeWOU8ko4aUBoHwInkPtxYKuxX7Dvr02Twj2/RsLusav544ld9+f3N19eb65s3lPhi6S9uHB/yO2FCnQeiHSW+SIlJqgUDOSiKN1MQgZSvtl46CBJsXk6fCoh26Eaq49YUyBUk150lkQhDNWUHQecktMihluYdWwaSpWW4pdUVZUoHEApWrx6YCMNkct0oYzWUqxkzkEsMiYT9ttP9xpf0XyLybwG/cePDn5TjSR1LYYmtFjqEp0KXjWzeigGgqCuIKzyAXOfNq28ga9rQunpHpwPaDnQNWC+gyTpmeTSUe+4nlMk0YJUzs78DaHcV5cuXZQasbA/28bHFs2OdJGoglMay0aSNxQwy1CWuo18KVeUF3De/BT7f9jHzTtj/UVahx4kdHq+62STubtBi75EO2WbRNnRbuYW+raYiD7Zu4KW+UxHGFHNPIAvdEG6fTepCOGIueqMLnnqsSnZnuuiSzra/nhS4ZQyIKnSbdUp0mPfUHFGhptfQoTk66g0V3kV3NY9o0kF1Oh/4HduE6w6mlftZaV68Zzw/X+lmLfYLbmvB4Bt8rQTGrQKd3HW6SnxTUklIqQZTUErxjtER1kmdTgFOQiC2EE8lRkSYzSVovvRXOSMwLtCd4/gzLqokX2ftwj/8Tjrl4Gcc73L9xrK0tyxJz4pUrVhwnu2dMEEHTIii9QTX17CnHHNAIh8kcc0UklEnGPE+U8+RPaJCpQp7SMtxBdIljcHd4OLH/LdG5fhnRW9wh0dmXH31p1nnxgpfmHerkS/PtsDAYN18UXMh880rcJadLLnm7/24I4zfN98WfxWVan9PSz+Jxh1mV/OrxHwAAAP//AwBSbPoy2g0AAA==", "base64"));
  res.end();

  return __filename;
};
