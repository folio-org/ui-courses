var path = require("path");

/**
 * GET /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2 : 202 6851us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2 : 200 67864us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWXW/bNhR9768g/LrQJilKIvOW5WM12rRB6wwDhj5ckpeJNlkyJDlpEPS/78qWLS9JgQZ7K6YHwRZ57tc5OuLjG8YmRZiwYzbRwWdRhsAhcYbr3AA30ksupI9SZxIyUJOjHuDrddPi+6LtiupmvkUbawFB5BylCVx7n3GnguIQZNTBSReSsEUXHS4HkBQiSOEiV1FkXAMI7lCmXDibEtpGi8ku5arAMCdoD3ykR/TQQePrgJtQVtC12UsLtG1VN9A8vK89dEVdDfmiD5n2KHlmbcq1iYIbLZAbGyMoZUySy+/G+Oj+Qt+N6cfJvSIsgSpYbku+hKJi7wvXJxmX9x29u56dns7O5rPLcbFoT3xX3G02dM0ax4WKyOjWB71SASiEBw6pJDqdtjRbQXRmiQkCNPg0P8gKy9W6HaCZ8jHPXM69B+onJAm3ShK1IWpFfYLRZoSW2w4GbBpyY0SC3IPQfVoqAAG58lnirNJUjBuxq6ZYEvYzNneFx6u6qDYDniSghUkVCclGuoVIQpLR8gxVpkmJaGUco7QH8Hlo+wh//mAM9mUT5NtA+gqbJVRYdf9BOM9i/C+cn184NMNyO/0T1iLx3xWe3aNjfaHY7LTh66prCrfu6mbI9viM3ZOqq6uiXh+x35ripm6K9pDjPX7xsMLd2FHYoPPAbYqKCu6dO5GOxzzPncGYBSO/G2OBX7eje3HHB6rqIJNyVhMfkkcPlgRraTR5Ijjxhqki1aKCZyTtNDcM7IWWf4eKvYVmiSVWR+yigervn6DnCGU7NM2+7Mxh7cpiawtP+N+stLeklc0rPl+wqwbbA+5XJfjtuE5h6Zoi3OARu4S2nbJxU4AOP8arf2eZeCWEHjc19aDVq33OJ2V6KMsP66Ubqrn6dH4x/2PxLpUinRpjZMqm7CQ1rI/LLhbs8vzk7Pzz9QXt2kl93RQb7G3XrY5ns/v7+2lZ++lNfTejykLRzLraz9AXK5FLM6NIuVBCKzu97ZblLspdXa4HkdDPqRpfpNXDtrXVdO+8WNHeZg==", "base64"));
  res.write(new Buffer("bLv/P5ZTbp4twJXI6sh6wsmkW1ZX5c5FN24Ild9Rn7qY5ALJlcnQSGTWc6NQ81TmApwCAYl9Cn3bDObePxD7S+1Lv63LQOemnWdiEmMmySmdhV7I2pPbeMuDlybLA9mPtD09G6c5PJVAdShS1AZzmXCZx4SOX/QLbDRcJUanzilJxj15OcLTz9Pu4/TDIQ/f5E8IfXOsqevlWPUSOyBlwkES3yBJNZzRbZuNyOd0fEzkQqbHWhyLfCpF8svhsW7A/PpwTcY9NO6ENi5DYkeZlKdWJ9yIVHKXaa0gpjqze/x6FV6dc8C8Pmff/Jtv/wAAAP//AwC8L+nAYQsAAA==", "base64"));
  res.end();

  return __filename;
};
