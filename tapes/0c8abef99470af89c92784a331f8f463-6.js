var path = require("path");

/**
 * GET /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:46 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves.. : 200 9730us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYS3PbNhC+51dgdOmhhoQXCcA32UkaN3HiSZ3OdDo54LGw2UqkhqTieDL5712KskTVTmq1adNOrQOHIrEP7H749pM+PCJkVEMD9TtoRuSQ/Ew+4CN8WMTu64h5YTLQnHJrAlVBBeqsjFQE6SRzELSC0UFvEqpl3cCLommL8uKkt8+FtWBzS21QiiqXO2qCTDRjnEntcuNjurEvWpivzThjkTOfqEgsRzPHqAeeUeZt5kW0yYLchl0UEE/QuDPt08fH3tWhirByZxl+1uvxFS5dVLWrr19UwbVFVa6jphBzFYDT3NqMKpMYNYoBNTYlJ4QxUvPPeHnlf4HQDpPY1nEv12hWunmf+qkrSvKi8F2g4YLN3p6/mRwfTx6fTE6Hr4tmGtri3WpJWy9h+KrEBrXLwb4xEWAsOOoybqjyymK1GacslyYyp1zI9E5sN18sm02HQ9K51zQEhzuLUlIruKYQkxK4Y2eUGRrP+r2srbOojWESaHBMdaExCXCA+Mqlt0JhQn5ovaiLOVr/gIAtApxVRbkq+Eg6xUwmIlU24SUmQR1PluYgcsVdDpanoZ9m4OAkrqF/Py/k7drNxw0UFlDPXQll+5cAdcvLA6D+r4DCes76bkxJA4iKtgjkCjzp0oV6i5lQlW1d+GVb1Tv8vdvzadlWZVEtD8h3dXFR1UWz2/mNj/PrBdy0AZiNSkdqMxCYukHmltzTpLX2BlIeDf+Ml3N43xfyE2teYm6DaMJbhR3iNAVnEc4WC6Ulo9hJyARiGoQbbcp05yZ/dCV55uo5zKA8IE9rV/76n94lebtlhqWfFT0n3Gry6l1ziaBYne6Tc3KGA32nwYuZC32Njt3c10W8gANy6ppmTIbLomvhVTrbjTUKgjE1XFZXa2iebSLfkXJws9nL5dyv8zp/nnGWjY0xPCNjMs0M6fySp+fk9Mn08ZMtopd1sbK4bNvF4WRydXU1nlVhfFG9m2BWsagnbRUmEIoF09xM0Itmgilhx5ftfLb1A+UST8p2H8MIsz4n52dAqkS6hiHtNqQqZ1tOXPGaK8NN8zKfpGaAPIvEhFCxgRoBimZcM+eFY07a28bP6jVhdw/Y5iPEdullNYuomG74D2RKOUfW89Z1kOwkFw+WxsBNriOSCLd9xdd8MVQirhzCDZRB7SYp10mieMM7Z5OhQhqVeS84UvHoUz5uD5+b0bOH2+H5fA2u2yapq2q+m/8cWofgczvBQg2Ix/gYL31UJnCACMrFOdeHmThU2djm5lvGDofabm12dP0GGXldB62lRvUYqWY+p1nMGHUSRWjCg++RgQUPegCPRfwzgddm+wfuS/FowGubQockdBSognVMOMsEmosMKHidG5Zyz7j7G8R3zJMO3OPgFFJTlWNEqyBShD/OKx9y5eMe4ltl0hqds0xJI7f1ehDhD5rpHxHhmQzJZnmigXenCH9WUuPB4aFKmgssmA6DY7yXCN/L9a4gK+H955E0fUDS11ffRyux1JLvqxKabxpy5Pw1duASSCxcXUAzGDz3UuJPC1gN+wPyrNOp/xbZOJ2lGiKZjsnzslrslHYrHl/CFfmpqndU9d2aUTCe30MUnr3GqZCPT1RmDDnSypKV4aCki+tetuINkbfF1c2YTT5m0Siai8ipwlp1Ey+jefBcS2uN3wysP1ZmbJDA75RZ8tprljj1xuLBQjyj8LF4sEB5bI/wPkv3U2ZgvOSIQCpRLlElO2QKHNQxWslZ8CKyzd9qeyizPdwOQXm80g5k8z/glxBnaqyt+hri7M7AX0Cc9TAetVXrZq8hVHVPM+LRx98AAAD//w==", "base64"));
  res.write(new Buffer("AwDTIrgSRRUAAA==", "base64"));
  res.end();

  return __filename;
};
