var path = require("path");

/**
 * GET /coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a?unused=9999
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

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:18 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a.. : 202 6478us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a.. : 200 12290us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWXW/bNhR9768Q/LrSISmKH35L0mEI2mYDkj4NfaDIS1ubLRmUnDUo8t97JdmRYjuts2zY/CAYujqH99xPfn2TJJPCT5JZMpHeqDSXiuQUPBHCB2KZNESqXMhUZlwKO3nbAkq7gg5ybqO/s/HPJI8Avijnvd1D7WKxboqq7D67XUDibITElj4J/ZdJFZJmk2+WhYeysQ3UO+zaxmaF7656t1gmpRbMkYw5IMILR6ylhlCwnOWUGrpza4D+mv8BrmnhX9EwSDyZayzyZyRdJDeugNJtvTyi8ap0y00nbA7Vsprfv03W0MTub6d7bZcWqrLp3uxYVtBYbxs7uIovXQSMh3+Hj46aU04JVYSLW5rOBJ0xNZUm+4nib0uEqM3aP4dicpbxWcqnaWqOoy7uP9UQtxH3NjU0E4EoJ4Bk0gLJbepIkDSjjlkMlp10BA/4fOhi76pNrOFDUTcYgi0PfhzSoD3hllIici5JHqgnIXc5s9pp7tPJIfq55J1Mh5AIcySLdicpnl8wynZW+NJALO1ya/zyxLisnG2zujUG56VwwIg0JiNCB0q0oEC0CcFyrnWqDqD7CgYNL2Abl+BHW5TJhyJHQfeD2VW+N7//dHZ5efbu6uzjYCzqc9cUd90HTdzAYCgxys1mJBEdAEqdJTZjGgMrDMmBMkJlqj21wrpMjU61q/Wm3kIld0HJXBHnLOrxaUoMZ4qAD4KjTquFHqDLXsGuPLzSmqZAnKWiPRYdAKw17mSaGy7QmXzArmOxQuwNxLvCwW9VUXYBnqRWUJ1xHFgm4MMHjlMr4NQCnFfMSjAsDCz1CH7l65bh9xM5ks99yW9zjRW02pWIUYxzIwinqcLBGRTRVErCGbaOwbLl0k1GsO+Ux+lM4/K4jUVZNPdJ2/IjrQ0Orr1xgMxy+ALK/XGBR9HJE519a97er2Gr1rBMUKFzkkqD1cIBZ2iGxeOCA+xHAdSIyQH4ec0v4BtrvipxvsYap++jbX8kX1dJVS6LEpdPtVpXJS6Gp9raVogb11Sxd29bD/seKpODcsZjUWhHBGUZ9gdInIeOScEFo+GYh79Mk/fT5HIBNSa9GTua2/jYu1JpQ8c9/Yo5+uxK+f5SadeDmjExzfjeehhwL18QI44frKZnz37dcurXU5vtg4wyTp0wVrZjOMWu5zi2dFt9QlGpGcOC5McyClWcQ3LRLo/ok5uF/et4UlmaKfO/SCrDmwL7j5Kqp5Sqfyupyee/eYXqnaNyyuX+FerVYflxUI6e+89ewq43qxxifz9/vNjg5nPtYLx+vLovYb3oTYcRPCl+RoqxjtdG76TY7Z/5msg9vHn4BgAA//8DAIxzA+n/DAAA", "base64"));
  res.end();

  return __filename;
};
