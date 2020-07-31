var path = require("path");

/**
 * POST /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 135
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves : 202 18237us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves : 201 79343us");
  res.setHeader("location", "5b839674-34d7-40b9-aa7b-690a4668c09c");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANxVy24bNxTd5ysIbStKfM6Q3rmN3RiNU6NVigJFF3xc2kTnBQ4VVwj87+VIo0eMdBF011kII/Kec+7lPbzz+Q1Ci+gX6AotpFVcV7XAXPgaC2I1Nqa2uNLEiKpSjmi3WE4A12/TCO/jmGP3eHdAG+uVcsJj5UFjUVmFFdMUE+eCplWwSsMBHTO0M4gS4imxAbNAKiyMIdgClbhoS8u8Dhr4UXKI4O8KdAJ+Lktl0Zrkeg97Kk3Ks48tGyVs6JNJu/e9Mzn23awXnK+EA1pq0hILFQhWggBWOgTDmFK8pkeOAVJrOujyf+DIMTeH9K7RCIUuR4eewaIhxRbSMcz1XU7RbnOfxin6j7nAstWZdiboct/FfrtEP6b42Kc4zugv8ZvdAHOiFRDtRe2xlsCw8MpgxanFoa5rqyBUXtF/5djA33nP8tWIDyWrCyVmtXAVpzg4U3qvNMOm5gQTDiBZORdg5swz1V5aMyFz2sJ++WX5lZJ/Mx16Z1ILDXRLdJtM99f/oOZgmnEuGv159NrWNvHgslf93++MT8Urk+j93QY9JBgvej80xh2O6wfT2hT9IyzRvRnHFToHeZPh5/DwpcrCMULEOSj1s1cfTpqv0nSmaT5sWztn8/DLze3d75ufJCVypZSiEq3QtVRo4kW3G3R/c/325tePtyXqaPVtinvsU87D1Xr9/Py8anq3euw/rUtmPqZ17t0aXBxITdW6MNWEEcH06im3zZHlU99sZ5OU1xU7X6RhdyhtWJ0uIXQlNp3Lnv6f02n2axtjG0B9QFPDy50fUd81u2NU7MZsOndsvbSB1wTKvXfOFJNpV0YdCCxpTYxlhhiuX0PfpXnKTgvk9LBT6k9948s0HWcN4CFUlHNstZmMLBw21GnsHVVV7YUPVE/tedlPx4t5Z7pLk4JQUFOOaR04Fq68GR0UZlwJaS2jZbIf5msL2RSXmIvp6hIU2/i35edAVhqBSY053VB2xdUVqVdS0u8uB++M+X73cYQ0J2GJULaCclJMSSy14FgRSbGthGAmSFE+MKd+DP6bNWfMt2tOx/fm5R8AAAD//wMAWU2pRQMHAAA=", "base64"));
  res.end();

  return __filename;
};
