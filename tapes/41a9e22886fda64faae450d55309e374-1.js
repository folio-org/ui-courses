var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby copiedItem.title name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=title%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/reserves.. : 202 7440us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/reserves.. : 200 45716us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxY227bRhB9z1cs9NKHeqW9cS95c5ykcRMnRuoWKIo87GU2ZkuRAknFMYL8e0eiLFGJ7dhAi15gwRBscs/s7MzZMwf+9IiQSQsdtB+gm5DH5DfyCR/hwzKt/pxoI4RJTlEjpaQqCUGd9YwaboNySerCFZODARKbZdvBq7Lry/r98YCPTIYYvKReI0qJgtMguaZMSx6CAJ0Fv8KXPcw3MM5Y4ixkKjLTVHnEBuAFZcEVQSSXHcjdtosS0jGCV9AhfXwcfBubBOtwjuFnsx5f4dJF0/r28lUTfV829WbXQsbsCp1p5ClThQlQG8BTYbLhIkZv4m1R3oTfIfbjJHZ1vFdohNV+PqR+WNfwcfxme6iXP8+OjmZPj2eH49dldxj78sN6Sd8uYfyqxs70y9GBFQNgLHrqC26pwo5imRlfdccm5pWPhdnb288Xy24D1iJmo4OhmH2B1EB+OMENhZSViMC9VXYMrsqwqtZVrZOxlkmg0TO12hqTAA9URC2DEwoTCmP0oi3niP4JmVpGOG3Kel3pifSK2UIkqlzGr5QF9Tw7qkFoxb0Gx/M4TjcKcJw2nL9bFPJuE+bzlgMLaOe+hrr/gkk5Jq2wBlQ7h7WxmVGLxabW5eyFsFYaPrk5ym1MulfoMZNOfFmTV0MTbifUyQOh/ilCYT2rzcUnHSAr+jKSCwhklS60O87Epu7bMiz7pt0T7i/Vo2/qslkekB/a8n3Tlt1+57cxzi4XcNUGYC4pk6grQGDq1lOLYk2zMSZYyDpZfkuUM/g4FPKGNa8xt9FuIjiFHeI0R++Qzg4LZSSj2EkoBHIahJ9sy3TtIX/xNXnh2zlUUB+Q562v//hPn5K82ynDMlTloAlfNXn9rjtHUqxv9/EZOcVJvtfgReXjUKMjPw9tmd7DATnxXTcl42XJ9/Amn+7vNYmCMTVe1jYbap5ud74m5eir6vVyHjZ5nb0sOCum1lpekCk5LCxZxSXPz8jJs8Onz3aMXrblGnHe94vHs9nFxcW0auL0ffNhhlmlsp31TZxBLBcM3ccMoxgmmBJuet7Pq10cqJd4U3bnGO9QDTn5UAFpMlk1DGW3I01d7TRxrWu+jlfNK0KWhgHqLAoTUsVFagUoWnDDfBCeeem+Br9oN4K9esC2HyF2S8+bKqFVutI/kDlrjqoXnF9RUkXUjOhoitxqk1BEuBsqvtGLyRx6j83ze8YntoD9TE/xa+AeVokyQ4U9Y/KxLPBnyrn4ft8TLRfp7qghiUejG7n1ORZsYRJQ9G84AHRC46YxjLEcuGURXBFv84ucKQdoOvHQGERFE+nK8q1mgMuaRR1DusYvJp1N5AElX0iD2xZAnYJEsXGotCFqtYPdwS+qQjprNCuUtHJXowff+DDm/17feD8m3cs3PjDpf8mknWF8sp7vPfmxqaH7riNPfLjEDpwDSaVvS9g5gzuax+clrOfTAXmxslb/FqdzWOUWEjmckpd1s8jX+53XcEF+bdo/vm1zBOP6Dj7m9C2OAz09VoW15IlRjqyBo5IuLgenhb8QeaOZMDmkIllFtUicKqwVdVEVFAcbN9I5G7aT6ttmgukbzUQOJhiWOQ3W4cVCPlPvHF4sUAHbI0Io8r6ZGM0lX486CjZIjgykMgjMWK6YKTTakuQkZzGIxGByU4yvFelKj+4RdkzKo7VpINv/Wf0VfkhNnXT39kMj1M4PDQSa9E3vq7cQm3a44OLR5z8BAAD//wMA31Zic2sTAAA=", "base64"));
  res.end();

  return __filename;
};
