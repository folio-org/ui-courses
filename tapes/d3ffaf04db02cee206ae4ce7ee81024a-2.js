var path = require("path");

/**
 * GET /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9 : 202 6888us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9 : 200 62987us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/jNhC+91cQBnpqaJMUKZG5ZZN9BLt5YNfbHoo9DF+JurJkSHLSYJH/3pFlW4rzQPZSoEANQxBMft8Mv3lw/OMXQia5n5BDMsmyGBOfWKqcY1QGLqkFn9BEAwShHHfRTA46gKtWdRM+5U2bl1enPdo4o1wARlOpEipF4NT61FMGzDGT+sxa2aPzNiw2IM6Y58xGKiJLqQSE28AVZdYoK7yJJiQ9aFlXLjQN2vvSQrtqNgTaRqHBpRSc81SqTFEdI9AkVVox5NKKP01wYf8Kru1IfuDyoMKrGRFSwiKsQZ+Dg6IIfrvgQ+PqfNnmVflgnUDpyaqEG8gLsEXY7l+EFjy0MLjTqVwHaIM/wceaRDDBKMuo0HOWHCbqMJHTxPDfGH42RIhaLf3rUWvQPT7v1xo1LdTtHlJSoXoFQ7nPmlLBthmxzIM/xciOFLVQu8r3ADPycoLbllUN9d2nykEn0iaamdJCaetocI5Tya2mYB3QmNmUMy1EjP5Zjv2AjhL79bTjoF58/uP0PXk7/3B+QY5Phg27M338Ojs+np2czi6Gxbw5cm1+s97Q1qswLJRYLe1qdFrJQmAM/QDFNZVWGkx+xlHWRHsGEpzKRlZhsdylfSpczFKbUedAUemThBrBMxp8lMIFDlrqAVrkthNqg1U+05olgTrA4KJZdCBAoMKliTVCojN2wC7rfIHYL6G+yV24rPJyLfEkAcm0ElghJuLDR0GBR0PTIFLJIQ2Gx4GlGcFPfdMx/PlKDvKtT9JN2JehXkAZynYvdaLzqcST09QYVERHRjUKTLXB4hVC6yTble0jjudT5ydox6lzBnlJPvWyv5Q4Z/8nzr+VOKhh0at/RJqA8W9zR26DJZ2jod7mhqvKts7tqq3qjbUfj6J7VLZVmVerA/K+zq+qOm/GMd7h53fLsJU9MONl5qlRQaDDGqhOuMUOlGVWh5h6zZ/lmIe/e+me3HGOXo0sCWskxoPT6MBgwhqUJkuwVychKIFZGwRs2v7BE0f7HUryAepFKEJ5QN7VUH7/T56NfNvW+soWeV/le+FcrzTXGPp1xZ7OyWWNA8IogwtwvSrHsLB17q/CATmDppmSYVN32V7Ey4dWJk4wJodNdbVJvcudzT03u/HgfLWwG2/mHxVnaqq15opMyZHSpGMk7+bk7O3Rydtttq7qfL3/um2Xh7PZ7e3ttKjc9Kq6maE3Pq9nbeVmweVLlnE9Q44ML24pzPS6XRRbllCusAIG7wf2ovemG1VIFUkXGmybDanKYtvX1v0JSrcNkrIxyVjAPoktBtPBOKpFkFTxjIEVwCAx+9AP9abddj+w3UeI7cbrqvA4uW27WEhiTDn2LmugSznpsP6dod5xnWYeGwI3k91UM5oUoBynU5A6ZDyhPIs4sTp8AxM1FYmWylrBsZVOnmZ4bnh8NeXD4RG6w5G6qhaD1zhR3WF3uW7nNbjvuD6yBt7nXbSg+IJu4EvztQn+4c0xEDwYmKNNdVTGUtNdY1KmWK0m8fhgqfFcWezwk6cZXrglX086PnhfNcRXC7wuRyW1NzyfV2TnCQH8FsWw+anJ+ZWzs8j2ZudXTs873AZ2//CeqVooLuEqNKfldh5WafZodRsxKYapxGFxYTPplvvB9dfdyAJ3C1x8A03eL2ETCTW5WmHHuq3q70PePBbkJTE4P1TsEFuN4GIsxhbz5g79rHdlZ7VL8Q+RdRmjyoKmGFhLrY0WwDNvYVfaLwjZ2+Riyrl8YHOD+Xmb3eF/uf8HAAD//wMAF4Tk38wOAAA=", "base64"));
  res.end();

  return __filename;
};
