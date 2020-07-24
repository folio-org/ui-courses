var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves.. : 202 6381us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves.. : 200 26879us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWy27cNhTd+ysEbbJoaPP98M52UMSN4xhpsgiKLPi4jNVqJEHSpB0E+ffeGWnGmqYx6m66qRaCRPLcx7mHl/xyUhRlDwP0n2Eoi/Pil+ILDuFglba/JY9O5MwYcVYCkc4b4jTNxDMhuFEqOe/K5xMktut+gJtqGKvm0/WEVzRmkW0i3FNKZOCahEwTySEG5m20PIk9vhphNcOSziay4InnwhCpFRAnAWHCgGMhahnSg9uugnSN4C10Ch+Hg+9jm2BnTirhrNFUSWH37nAJQrq29/3mpo1+rNpm9p5j0jICI9o5RaTNlFhJgViXs+fcWmHYI1behF8hjstgHvh8kmmENX41pfDaV01xU4Wto+WCQ46v3p9dXZ29uD57vZyuhos4Vp93S8Z+DcupBgs1rhd5YyBAaUTWFbNYLOlIAMoI1cIm6qWPyhz59qtuPcxgzWM2OhgSo8fMkhDEcWYIpCw5ZuyttEtwPeWy10ky1lIBJHoqt64xCPBAeNQiOC4xoLBEd321QvTPKNwqwl1bNTvCS+EltYonlGrGV8ocpZod0cC1ZF6jevLSzrAwcJ3mLfDPrBQfZzNfD1LooF/5BprxL4JSImandCaRpUwko4HYAJ5wkw3jSJiJtPy+lccE9STTS0FdNA388biSLv5X0n+lJOSznqpx2VfpE4zFT20Dw7OhuPRhgxW4hyJVvq+wbR9AsW3Gvgrrse2Pmvlx4X+soE7YoZ8XL6GG5lgCBwO3uPzdpoOZVR6cRAIZydE77FsO8zCCEiQaFMfmBdyX+yyKjw9aXoe6mlT8TUS7ueEe+kmPde4hFRenxaum7Y6o7Wofp9hv4ffiQ9v/tpxNfoQ3+e7YUckp038XUPR1fbtehdnr3Vs8FfTptVTWFpdGumIHXFDabXYLr/CjWJwdW837Ju75MTkklawkmidGJHJFXJSKaDzmjHDOhsOBtQC/7OddvB2gD88igPt2V6z93sjBBEMzI8E63FioZ+Kdw40FMmB5eAgqT2nPWloeT75ZVBRsEAwVSETgGLHYKpNrR1JygtEYeKJQfs/Gtx1p34+eYHYpyqvd3aE4XEWOUljB6LHK/shf7AELn17gay44RzkawuU7ps+VOef81DH1w5bPRT0n1OXmPTraXza8cHg1yMREvOMojc0ieBFJRmnQyLB7oLYPFtZd+hd+Z9TT/U5EnBxEXI7t6Ou3ENt+ajLs5OufAAAA//8DAOnXvvPGCQAA", "base64"));
  res.end();

  return __filename;
};
