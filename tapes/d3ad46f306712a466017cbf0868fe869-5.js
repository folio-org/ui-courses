var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
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
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a/edit
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/locations.. : 202 36497us, GET mod-inventory-storage-19.3.0-SNAPSHOT.451 http://10.36.1.43:9168/locations.. : 200 3111us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXy27bOhCG930KwdvTaXi/ZBfYaRu0jYO0xVkcdDEkh4UARzIkOWhQ5N1LXxQUddzmBOgiQLwg4KH/4Uj/xyH9/UVVTRZtxKFum35SHVf/Vd9LrETrtP460TJmr02GyFMGxVkAFwhB2Gy5iBFtZJOXW0mDV7QRnTQNfRujsU3b6LvPR9Pp0ezs6GScqvuTONTXm+mhW9EYbvqhHlbrms62VShGxFhEQM0dqKA8BGIcmJEuMVQYtb1bD6+Wq34nNCJma4KFUqkGlaQEL7gFSlmJSBydcqNwUYcOu5udUifrHJMEEZlaL1kWJyQQ0cjghSqFhFG57OqrovxI3XUd6aKtm2GTQ6JiTosEyucypCwAefZgSBjF0ZDneczR/yQ+SzsvHpah+nJPjl2GceqKBkw44Dq6dXj9qjrCgdKsDJt6BRMMmAWhPjF5LP0x868YM/+w8tnVWVSrZXq4aiO6LePty1/IyjEZVSwA432xxmUGrvgMzueMQjgnLd8j6wPWTfV+a9RhwD48A/ZUAHOvvNP/G7CfVIcB404hklPF01BaVzQITgcEVXqWlUyYmPQeYPNmUTe0h9bpGEnUx65ertHZTHzuqcptV7UbXdVR3666SP3d7+s+ttfU3czqfrnAm/P7F/r7oCrLcuYpgZe2vANe9lzInoowxLIVudQp3w9qFFr5EBRwHy2oHGM5ArQA6clwkYNNgf4EaggoDekESZuSQ+fiBY8JgtDOKmUFSfZ7UB+U4e+C6u1jQB1Vh0G12pWHCBEoRl6sCQ4wFIuzDYYzJ0TOaR/Uy3/P3lSnn96ez6vp7HAvnD/3wifUC416DGKj6jBiQShuy3ELXBkDingCZMIBL5uqtEmd0Nk9xC7a5WqBXXVJmOrmazVtFwuKm9Z3ELeLZ9yeCm7llsYfdbfjf77bSZWEjQbQUQBleAAs1z3QidBxaznZ/X8NH0+n8/NZ9fr9fH55GDDxDNhTAax0JvuoI9PuHZnbUiZDO+DikmLbbR/SvLj9AQAA//8DANC6bUPDDgAA", "base64"));
  res.end();

  return __filename;
};
