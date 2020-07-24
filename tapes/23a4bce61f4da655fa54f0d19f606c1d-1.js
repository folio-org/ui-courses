var path = require("path");

/**
 * POST /coursereserves/copyrightstatuses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 137
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 24 Jul 2020 16:59:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses : 202 6406us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses : 201 3445us");
  res.setHeader("location", "acf99f97-6c38-44fb-86d2-4eea62701d0f");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPwW6DMBBE7/kKi2vrajHGBG5U7aH39gOW9TpYIYBsN1IU5d9LoFXP2cMeRvNmNNedEJm3mWhEhuTq2tWVNFTspdauk3tjldTMaFQFuQWXPd+BEU+8Im3bivch8tlzEIMnHiNvFsuRgp+Tn8bNScmfebiIbpjo6MeDSD2LOUyHwDGKyYlI/TRgiL2ft4gTJ7SY8M5fF2GRKDAmtm/LW1MVKJBQSaU/c9OUdQPViwH1BMutIf/M6+UrcvjYplosaii1kxVplqVBlh0WJJ2BEihHRoV//PdsH+78ZR7vXPDb7vYDAAD//wMArAPmu5YBAAA=", "base64"));
  res.end();

  return __filename;
};
