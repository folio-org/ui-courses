var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/83d1901e-9727-4ee1-8fb1-35045e9230b2/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6358us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 45769us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYXW/bNhR9z68Q/LqwoUiKkvKWJgUWrGuLpUUfhj1Q5GXCVZYESsrqFvnvu7IsW7EdL842YBiUB8eReA55Lu/HQb6fBMFMl62voZ4F58GvwXd8gs+c6f6cKZXZ2ApJUsUTInTMSMazkIhIRRGNY8Glmp32kELNYQm6LhpfBk0ZfFC5grJoyry8XQzLDNTau6pxZbFcfdO0ZhGUNlCFdlA0Qe4sbBZXyjdzfHzdHyiMpExEqEkUaiDCCE2UoimhoFiYUZpSoXbB77PfQTcdQS9vI/AIvrHEN0h8F9x0B9YYufWCbXHXhc5b44rb4BaWUTgNKsDodF9RsAmqPSFCnjk0yqhGjY/c3ZQH1YC5wo8lPaOMEhoTJj5Sfi7oeRi/kmn0A8WfNRni2so8hQvlecTOOXvFefoU7vXiUw1+dQNG8ZRGwpJYCyCRVEAyxTWxkkZUhwoDp2Yriofl74fVffR59tbVDQZkuE8qUpCYVkYb6BJMkyyNMgLGpsiopc7MbB/+wJU+nxJBHm6R0KtBHnxtwBcqD/VmzfBsawkbLcH43DsNVenWqcqVoEnEDBGpxQ9jGVGhTYkEJkWoJKSh3U+wq22j7ijWccpeOq+DK6i/BOH4vS5N/16bR8+Nq3V5D35x5eoqV4t3Y542V12K93SEBD+qPP9DLcb4yukvbfW21Goohsa3MFpwV+bm5g5y++Zr5fziA3hXmseau2O0fk3AT8dvME4YsvWlfAb4Us/WCx5GO9WNsvYmd9Wqxf12srVmlq+OueKKuLZpJC3RobFEhDQjSQaKsNjGIdNaxXpTJmvwoVs7inF8axdFAV/33tdPn84uL8+urs8uxq9dfaEbdw97Au4KLJymHekUFIBSrYiKQuzumUhJBjQkVPLEUCWUjuJHe6t51dYrsGTaxjKLCZ4+wkTknKQsjLsyE0xDqBKRjMG5y7DKFkOITZwklAPRiopuazwEYCthWvIsZQIPlD1KJ+/miL7pq+RDVyUvKod6RHBtVgnxPJY9eYMZOF8JsileJEsFYZTHRAgbk4RKSViIHTLFzsjkqF10wEP5chTbOF8+ele4ZhF0HX72uAZ8s9X/kV2O10CxPSFwQzrbUd334Y+LClbaKY8osDgkxmSYRwYsUVIlBMeCFZaGWWZHHXcDPxSBozjHEXhf5K6As+sCJ62vsXOMm9rWeH5d4hQvl4DlNHYF6UGBLudVWaB1qHf1d4XkW92UvhcwtJV/YnqnVB4zvXdxBybvu3aege8phEyGPbAmdBeRdYe/KfO1Adsn5XlCRPJYyPNkDKiTQcTD6ZYl5QYdKU0Ql4QZEVJj05KakwT7h7JCKKydv7KkmTtoSd+iA8VcCCoPd2gOSu900Lj52ujtsaVWp2HIBNGGKSIsdrJUATY2ymViEpomzOyCD3iY5/ONZf6smjuY4zTSz/KkWZf+Vev75FdVlTswAeLvRvC/Y0UT/qJkXuMmGznZyMlGTjZyspGTjZxs5CD8P2Uj6dDud2zk+sXLPaRkL/GQA+ppDxkzwaMs0pi8KTYdKrDpZFyRKMa2wWyUQpbueMhLlePEauuAbzRvZ8Jn9015Q3K4hzwwzlrwePmuH3N9ajRwu5pFk5k8JqUnMzmZyclMTmZyMpOTmZzM5Lb+/4GZDHkUr13Xv/M/ySR6iZ8cUBs/2cd11pSNyn8BXfq+avnJw58AAAD//wMAzG9N/VEfAAA=", "base64"));
  res.end();

  return __filename;
};
