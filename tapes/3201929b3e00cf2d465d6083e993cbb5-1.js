var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves/c7946c2c-1180-4727-b97d-6c66f76d064d
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
 * referer: http://localhost:3001/cr/reserves/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/6d973b67-b0ed-44df-a169-67b46365264a/c7946c2c-1180-4727-b97d-6c66f76d064d/9ea1fd0b-0259-4edb-95a3-eb2f9a063e20/edit
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves/c7946c2c-1180-4727-b97d-6c66f76d064d : 202 6315us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves/c7946c2c-1180-4727-b97d-6c66f76d064d : 200 26124us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWXW/bNhR9768g/LrQISmKH3nLknYNmrTB5u5l6MMleZlqsyVDkrsGQf/7rmzZ8tIUaLCnDfODYYj33K9zeKyHF4zNqjRjZ2wWrdcmqsildIJrqywP3iZuojHZmiSMTrOTARCbTdvhddX1VX13tUOXIuYiu8QVCEIHZXjIIvEcYpDgolOp2KGrHlcjyCPInETgQpWea0yB+xIKjkFlD8IUqMS+5LrCdEXQAfhAj+hhgDY2CbepzqV2hS0KXQizhdA5Ra+bFtr76yZCXzX1WDbHZHREyY33JdcuC+60QO58zqCUo0Tymznehd8x9lMX0wKfkZZANax2nd9AVbPrKgxFpuPDYG/en15cnF5end5Mh1V3Hvvq0zagbzc4HdTESb85mpUaQCEicCilI1605wGF5LRclwRoiKU9qgqr9aYboUZF4j1YHiPQPKkouFfSckxZK5oTnHYTdLmbYC+HZJ0TBfIIQg9lqQEE5CqaInilqZkwYddttSLsL9h+qiLeNlW9XfCsAC1cqRLXPtNXyoqTYDw3qIyWYNDLPGXpjuBXqRsy/PadOdiHbZIvI+lrbFdQY93/A+F8leN/4fz3hUM7XI5+xDok/vsqsj8xsKFRbPfaiE3dt1XY9E07Vnv4it3zum/qqtmcsJ/a6q5pq+6Y4wN+cb/G/dpR+KTJsX2Jihp2wF0hA8/W2uAwm+TkN3Ms8PNudU9GvKWujiqp4DXxIXmOQL7tPK3GFoITb1gqUi0qmI2LeWK0X6Fmr6Fd4RLrE/aqhfqPf+Vs7MP+rm/Cstrd8kd0bk+6j0T99sZeLdhti90RleslxN1WLmAV2ird4Qm7ga6bsykoQY/v8u3fq8yiEkJPQW0zSu/2UPNRmxGWy7ebVRi7WbwppSjnzjlZsjk7Lx0bMrJXC3bz8vzy5aTW9f0WcPA2rDek5qmTT3MrzupmTg62DxkMBeq432oZcmEFkrGRJxB/PnKnUPNSWgGB3hmg8I+hr9vRH4cH4vBRah/4sVkmegPZ2w4WORtJZhM8DBrRkS5s9DxF6YxNdIOlH1ayvazHf+xQH/OP2qGVBZc2F1xH+gU+O64Kp8sQlCTvmz2d4bHD7/39u1MeX5KfEYbhWNs0q6nrFfZAaoCjIrFFkke6pK9dNaFIrZYrvZDmrLRnSs/JsH4YdnegdIf58f49ed84eCIKRKkzt1EjLw2ZboAi8mwEvdxJcmES/ojfrNOza46Y59cchn/x5S8AAAD//wMADYhKGKsKAAA=", "base64"));
  res.end();

  return __filename;
};
