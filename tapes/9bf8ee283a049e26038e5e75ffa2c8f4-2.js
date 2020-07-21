var path = require("path");

/**
 * GET /coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/80939663-9486-4382-a5f0-a28a5580d0c9/c4b4bfd1-04fc-48b9-a682-a63dbd384c03/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:08:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03 : 202 6946us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03 : 200 14993us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRWS2/bRhC+51cQujZrL/fFXd3spECFJm6BOKcih30MbbYUSawoI0Lg/97hQyYtxa5c6bAQOPt9M99wHvzxLkkWRVgky2ThhRMuDymhIvdEaGeIVZrhwYMLXAtP+eJ9B6jsGnrIlY3hwcZ/EhcBQlHdDfYAGx+Lpi3qqr92ew+JtxESW4UkH24mdZ60W7ctiwBVa1vY7LGNje0an62GsFKplBapJzL1QEQQnlhLDaFgWeooNVTYQ+gf7m/wbQf/gYZJ4slcc5G/Iul98sUXUPkxyp9oXFW+3PbC7qAu67vd+6SBNvZ/e92NLS3UVds/2bOsobXBtnYKFR/6CJiP8BGPnppRRgnNCEtvKV9yuZTqQlPxC8XfSISobRNOR/WgRzwf+8z5ehs38KnYtChgzLumhhulODFCKyJ4Vwkyp8QybaXUNFBvFsfol1J/Mh1CItwhWbRxDCVeXac03VvhewuxsuVo/P7MWNbedu9kNOY+KOEhJcoYiTWNDrWgQLTJc8uY1jw7gh4qmDS8gW1eQJ9tUSWfCoeCdpPZ12Ew//718sOHy4+ry8+Tsdhc+bZ46C+0cQuTocIst9uZRAwAKPUW05lqgj1siAOKXay4DtQK62U282rXzXYzQhXzeaZcRry3qCdwfDsszQiEXDDUabXQE7QcFIxYGTKtKQfiLRWdWwwALBDmFXeGCQzGTdgmFmvEfoH4UHj4sy6qPsELbgXVkgUiTI5HyLEq0twQBUyJ1CowaT6xbGbwVdh0DH+dyJF8G0p+fNdYQet9iZgsZcwIwijPiBB5RjRVCvtGWTCSeqb8YgZ7pTxOZ5qXx20sqqLdJV3DzrS2OHYOmhmZ1XQDqsNmR1f71h4DHlrzdtfAqNakUlCc7YQrg9XCACegxOLxuQeXUwHUiMUR+GXNb+Cba15VOB3jBmfnk+1woN7USV2VRYWro143dYVj/bm2rhXi1rd1HMIb6+EwQiaEUgHHjWeyK3KJM8emWK2BZ15a8LlUP4nwt6Isu5V1DSUOhumCs/Gpc1PGhZx39BlT9MV18PpCSNWS6iVNL2TGny+ECXe9+4qdMwbktOW5xvmgIcM9KDQQ6ygnjkvHIATDMjXneGWtvOp7xL3d90jxOLzr5Nv/3JRdcNlSygslDzfl2Wn5r6S84Pe8lBxu65vt2kEcPsOeNiCOSN910M3TF1oJzf1gOs7gCflTF1xlcx3nZu+E3B37PCdzj+8e/wUAAP//AwDSzRIe5goAAA==", "base64"));
  res.end();

  return __filename;
};
