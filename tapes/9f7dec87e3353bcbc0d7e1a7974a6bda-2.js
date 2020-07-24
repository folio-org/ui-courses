var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses.. : 202 6286us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses.. : 200 3626us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUu27bMBgF4D1PQXhtGJDi3VviLl2CommnosPPm01EFg2JDmAEfvdSdt2hjoDUsQYCEnkOxA8SX28Qmrm82fVpuSpPBcp2CMMMzdFP9Frn6mzy4+2McNFQpgjWWgbMqQ8Yog1YCNDWxKB0A7PbY6SDdTiE7tsWHZoH1Ich9C/Bn9b4MLg+bUrK3XGpK+kltDtk2+yeU7dEZRXQps/LmhxQjmhwq9xCP6zS5lSyDgU8FBgbjq87bqcPUIL/XIdDc0MagonCDf9O2JyTOVV3kqtPpF5/impqu/FTqYbOqZ4zdceleDv1sPtRd/flKOWBGSJ4xMrx6iMhYAvM4SiJII5CgCp1KNjXcX/7LzQIo71zuGEqYu4Vx5pzjg24Sh2N56DPoBcL9LCbol2MIBUXLfJ6nbsBQSl9sttxAWqTC90QPi5KmveLnqemPYBqIbmLWFvNMOe+UjihsVWGReqZV4K/7YEfFxeRdLnDrj4PvUvQXk+I/cc3d56aFrLaBstJxGb8IbkX9YtxVmLiqSRScdOAnRTCT/fXQBpW0NcToU3P4Xpgjb4E7JSaBotW6iiMxYaTCsYlYG2YrwORxlNhNWFnYF+3tm4M+byG1E2RPWb09zStXAja9uMM9CIGesaAfo0Ns5ILtN+Cy70/nPTiZv8bAAD//wMAEYG+IwcGAAA=", "base64"));
  res.end();

  return __filename;
};
