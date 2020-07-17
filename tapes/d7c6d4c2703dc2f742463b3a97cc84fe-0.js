var path = require("path");

/**
 * GET /coursereserves/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:54:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f.. : 202 6690us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f.. : 200 14133us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVwW7bOBC99ysEX7dMSIqiSN/Sdg/GttkFmp4WPYzIYaKuLAm0FNQo8u87luRIcdrCaX0gDA7f47zRzOO3V0myKv0qWScr672zLgTmPABTgI5Zj5pZngupjE29CqvXB0ANWxwgVxD9PcT/kiIi+rK+HeMedy6WbVc29XDs5g4TBxETqH0SxpNJE5KuL/qq9Fh30OHuiG0hdlva24xpiUxro4RjmXDIlFeOAXDLOIIUBeeWKziF/l18Qdcd4N8oMEs8m2sp8k8ivUs+uhJrN2X5HY2b2lX9IOwWm6q53b9OWuzi8HfQ3UIF2NTdsHNk2WIHHjqYU6VNF5Hq4d/RMlBLLjnjORP5DU/XqVpn2UWe6j84/SYiQvWtPx81gB5ofRgq55o+7vB9uetIwFR3yHkImOYMFFqmhLTUDnnKbJqil9xrVUzt8AT9o9KfTUeQiLdEFiFOqcSrN4KLYxS/dhhrqKbg1yfBqnFw+CZTMDgidiiYtjZjygTOjOLIjA0BpDQmzZ9BTxXMGl7AtmygD1DWyfuyIEH7OewaP4b/+nT59u3lu83lhzlY7q5cV94PB7rY4xyoqcpdv5BICSDnDhhkwjBVKMsK5IJxnRrPQYHL8sWtsG373QTV0oVcFzlzDkiPT+lzSJEz9EFJ0glGmRlajQombOZzY3iKzAFXh2spAQRk0um0sFJRMsWMbWO5JexHjPelw3+ash4KvEpBcZNJz5QNtPggGYhgmUaplQCNVoSZZbeAb/zuwPDvmRzJ57Hlp29NHbQ9togle5NWMcmpO5UKOTNcayaFBrQZd1K71QL2k/Y4n2nZHjexrMtunxwGdqG1I9s5GWZi1vMJrE+Hna46jvaU8DiaN/sWJ7VWZIorU7BUW+oWSSYPGTWPCw6LwBVyq1bPwD/W/AK+peZNTe4Yd+Sdj7FTQ71ukqauypqejmbbNjXZ+lNth1GIveuaOKY39cPnX7RWYdZZus7yC5uaE2udUG/2n6gDp0LmJhTcSPKCPEOW5dwxozFnGVecrMBlXIizzPkn906ol9/7XXu/7rcFxvHdfrRMmil3KPn145NeYXs3hp5X8Iz6mQut7FLH71bvjNo9v/N3Kvfw6uF/AAAA//8=", "base64"));
  res.write(new Buffer("AwCfN6iLFwkAAA==", "base64"));
  res.end();

  return __filename;
};
