var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 7470us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 2878us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUy27bMBBF9/kKwttmAj6GEuld4m66CYKmXRVdDB9qhOphSHQAI/C/l5KToGgqNHCtxQDi8A7IwzvzdMHYyvfb/VD/eEj3idJujOOKrdk39pRzOVuH6XfFSVsTvAepygowlAgGEcGS12QqG5DM6vIo6aiNs2izYTf7l9UQRz/U21T33TE5REr1Y2Sbvm37bmSU0lC73bSBNbWP3RhftG1MFCjRJDyeazr3VCCGjznMBSWXHHgJSnzhaq30GvWVNPoDz99zoazabcP7VbPokOPh8g8elStMpa0DizwCYkFgrAo58MIGoZ3h6g2Pu53LF2Ohb6nulrjc9uz1RTITRk3z3xgU5ydgeFUtY3DGRYe8Alu5jCHobAvvCuBBFLwo0Upyf7cF3G7g/vokc3R9Bz6vx8HX1LDxgYYI1NQ/49l8o4Q4BdiLahkYCaML9BUYZ1T2Tcgt5LUBV1pViaBCqXER2DlonY2QPImQ/CchjloKVXIwpsiWEiG/7WQuneeMs1UsjaQ3hK6bhs0dM7IhjnF4jGEJ1h2lIWNpaZ/RpLnXztZmSr6fiZBr5GuBV2gXSN7sv+arfHruNI7GFZEA83QCbVGB4VqAKxAlVRoL+ztV9n2qtkp9ouZz9P0Q5rGuLw6/AAAA//8DAD+a0MX0BQAA", "base64"));
  res.end();

  return __filename;
};
