var path = require("path");

/**
 * GET /coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959?unused=1
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 202 7356us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 200 14356us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/jNhC9768QfO3SISmSIn1Ldosi6O62QLKnYg9DcpSotSWDltMNFvnvHUl2pDgfdZr6QBgavjfzRvOhH++ybFbFWbbIZrpQ6FThmQ4xMmULw7wqCqZ0WQqlQTvtZu87QA0r7CGnkOINpL8ynxBjVV8N9oibkKp1WzV1f+3yGrMACTOoY1YON7OmzNqt3y6riHULLW722DWkdkXPzoewhDbGKhGYFgGZiiowAO4YR5DCc+64gkPob/5PDG0H/0GGUeLRXFORPxPpdXYRKqzDLsonNJ7XYbnthV1hs2yubt9na2xT/7fXvYYlYFO3/ZM9ywpbiNDCGCo9DAkpH/EjHT215JIzXjBpL3m+yPUiV/Nc8584/XZEhNqu43MoIRbcLnI5l0X+NOrs9usG0y7jmHsbTKGZDwVn2oNllueeeV96gMijBzfrCe7ovOtzH5pt2uCnatNSCnY8LjgdEDgzSudMSRTMRxMZBx64M7HwXs0eo597eUfTESThFZEl2EtKp2eCi70Vv7eYaljujN8fGJdNgO6t7oxliEYF8mWc09QVJWdWcWTWlSVIaW1ePIIeKhg1vIJtWoKfoaqzT5UnQbejOTRxMP/69eTDh5OP5yefR2O1OQ1tddNfaNMWR0NNWW63E4kUAHIegIEWlimvHPPIBeMmt5GDgqCLiVdYrbebHdTIUBbGFywEID0xz5mTomAYSyVJJ1hlR+hyULDD6lhYqitkAbjq3FIACMhkMLl3UlEwfsSuU7Ui7AWmmyrg701V9wme5aC41ZIGlivpiKVkIErHDEqjBBh0ohxZNhP4edx0DH8cyZF9G0p+966pglb7EnGFkNIpJnlO41KVBfWLMUwKA+g0D9KE2QT2QnkczzQtj8tU1VV7m3UtP9Ha0uA6GAfEbMYbWB+OC3LFZw90Dq15ebvGfVcLrbiynuXG2a4NaYZqKp5QBvQlV8jdfRuO4Oc1v4Jvqvm8pvmaNjR9722HI/lLkzX1sqpp+TSrdVPTYniorWuFtA1tk4bwdvVwGKHNg3TGCIZCyK5pAw0eS0tEc++KXFCk/okIf8EmXWF21o2aFLOLa/h7vOUh3bevyHXhpm39hlH67FZ5ea/QhlBuoeXcOPFwQ4y41++ICcfL26nzbedW6ke+37afhg1FZ/btPy7cIThVzIV1B6vzzWn596Q86ff/XdlftiuPafiau1+DNCdD10Zf7j/0lri+HkyPM3hE/uxcSDPV8dbsHZG7xz7fkrm7d3f/AAAA//8DACXpbZYtCwAA", "base64"));
  res.end();

  return __filename;
};
