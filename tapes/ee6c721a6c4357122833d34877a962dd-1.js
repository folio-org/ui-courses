var path = require("path");

/**
 * GET /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:30 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves.. : 202 7152us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves.. : 200 30160us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXyW7kNhC9z1cQDeQU001SpET65vFsRsYLZjzJIZhDkSzZyqilhqS2Ywz87yn1KnmDfQoCpNFQq0W+x2JtfPr5hrFJgy0219hO2AH7k/2kR/SwiP3fCaYxZDE1HDBJuU4TujPguE9D0JnRwSg/2VtBQr1oWvxctF1RXR6v8GkaMFjU3AESPlOOWykdT/JESxSYZiHZ4IsOZ2uYFCJK4XOuckEwAME9SsOFd8ar6HKHW9i8qQO2La35tYNu0a4prM+VhZByCCFybTLDbZ4DT1JjjSA2a+RTFGf+LwxdT7Pyxs4fr2AlUAUzXMK+YICyxLgbitiGpph3RV2NZjCoIltUcA1FCb7EHWKGHUToYGhW7/UGocP4ji5LIiWU4CLjyl6I5CAxB4neT5z8VdBnS0a4xTy+HLeG3S1/79Zeaztount4zZXZeBWr++wpV2KXLfMC4zHFfORnD02o4wrkRjZPaOq8bqC5/VwH6B23jnRmrDLWB44hSK6ltxx8AJ5nPpXCKpXn8RmWh8HehftV1MOAn3354/gje3/x6fSMHb0bTtnu7rdv06Oj6bvj6dlwuGgPQ1dcL6d0zQKHQxVVVrcY7FwLRCHIHjDScu01FSYKSY5ObBSgIZhstDbM5tsCSVXIs9RnPAQwXMck4U7JjGPMtQoowWo7BJeF7922RpuYWSsS5AEo6LQ0GYGAXIU08U5pMsgP0fOmmBH6K3WaIuB5XVRLl08S0MIaRbXkcrrEXHGQueMpqlRLSNHJfMjTDgiO47pnvYyFfd+k8TYZ5tjMoMKqu5dSeYipJh/w1Dnyjc0Ft+Rsbh0Vu1LWJtmgzB+wPJdSr6IeptQJFBX7vArC8wl18n9C/VsJRf4sV9E4ZC1SVnRFYDfoWW8uNrucCXXVNYVfdHUzOnjHMT+suroq6sUe+9gUl3VTtOPIbzkubue4CQMKF3UWuTOoyHQL3CbSU8/KMm8xT6OVz7Bc4N8rRz4x55RsG6ymvNMUIcnzQLJAW0eOyhLq9QmiUZTTqGB7fOw9usnfoWKfoJlhidUe+9BA9eM/vUv2fdcZFr4sVj3hQZCXY+0VJcWyuo8v2DkpsVGA5yWElY+OYOabIl7iHjuBtt1nw2n9QX6Wn4/XmgQlhB5Oa+p1ap5vV37E5F6GnC5mfm3XxW9GCrNvrZWG7bNDY1nPyz5csJP3h+/e7zJ60RRLxFXXzQ+m05ubm/2yDvuX9fWUrIpFM+3qMMVQzEUm7ZRYMhIFWrn9q25W7niwWlCl7PYxXKFc2dQLI1bnrA8Ytd2W1VW564nLvgZV2ATP+DzJBFKfpcZEqeICt4okqZGZAK9AQOIegj8164bdPxDbj1K7qVd1GUkzbvofJnmeSup63kGfkjpQzwiOxyBtmkVqItJNRgpqoEWgGqYbaouZTLjM8oTrQHfgcstVYrXxXklqxZOnOJ4Wr6+gHYtX6LfJmrqeje0nDXdLfemqu2gg/KA5o1UhxqKPIpRfySC6ab+1GO+fQzuSkXzPfWpz4zx3/eGodUr17ZJIF5G6KI2ns2LyFMez5+9riIduWNUXi/WMDuJR+d2T8qc129rDgL5lOZz+uI5/oZJX2QMl/0Itv0VugXcPT6+6g/IcLrE9rjbK3KTZI+ObSGo1VEGBipEaUT9hJZ9/GYgkuJ3R8Ftoi9UgNSBs2OWCet5N3fwYZ9ZjTnrOQVIeGHMg3X6m1dhBG9TbW7K52ZaqtyGllzcfMsGNB8sp7J57n3uAKKKHQUt4xr2rdVVGr0r63rpr1OvXfbMJzrotr9xOL4h1s9In8s3dPwAAAP//AwCjMAcUuQ8AAA==", "base64"));
  res.end();

  return __filename;
};
