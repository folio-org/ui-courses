var path = require("path");

/**
 * GET /coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3?unused=9999
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 202 8191us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 200 17733us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/cNhC951cIe21o80sUuTc7KVCjSRogzqnIYUiObLVaacHVGjEC//eOVlpLXtvpuu4eiIWG73HeaDhPP95k2aKKi2yZLbTg0hbeMi7BM+2VYI5jzoC70iIvVPRq8bYHNLDCHeQMUryB9HfmE2KsmqshHnETUrXuqrbZbbu8xixAwgyamJXDzqwts27rt3UVsemgw80eu4bUrejZxZCWyI2xWgSWi4BMRx0YUEqMI0jhOXdcwyH0D/8Xhq6H/6DAJPForrnIX4n0OvsSKmzCmOUTGi+aUG93wq6wrdur27fZGru0+7vTvYYasG263ZM9ywo7iNDBlCo9DAmpHvE9LTtqySVnvGDSXnK1VPlS6ROV8184/UYiQm3X8TmUEMtcLLU54VY8jTq//brBNFYclbfBFDnzoeAs92CZ5coz70sPEHn04BY7gjta73a1D+02bfBDtemoBCOPMQGDRc0coGG6kI5ZIRxTpdICOZoijA31AP3cyzuajiAJr4gswV5SOjsXXOyj+L0=", "base64"));
  res.write(new Buffer("w9RAPQa/PwjWbYD+rY7BMkSjAwpmnMuZtiVnVnNk1pUlSGmtKh5BDxVMGl7ANm/Bj1A12YfKk6DbKRzaOIR//3r67t3p+4vTj1Ow2pyFrrrZbejSFqdAQ1XutjOJlAByHoBBLixdfO2YRy4YN8pGDhpCXsxOhdV6u9m/YhnKwviChQCkJyrFnBQFw1hqSTrBajtB60HBiM1jYamvkAXguj+WEkBAJoNR3klNyfgJu07VirBfMN1UAT+3VbMr8EKB5jaXkWlX0hJLyUCUjhmURgsw6EQ5sWxm8Iu46Rn+PJIj+za0/PiuqYNW+xZxhZDSaSa5KpjWZUH3xRgmhQF0OQ/ShMUM9pP2OJ5p3h6XqWqq7jbrr/xMa0eD62AcELOZdmBzOC7oKL54oHO4mpe3axzVOpFrrq1nyjjqFok0Q3NqnlAG9CXXyJ1ePAI/r/kFfHPNFw3N17Sh6XsfOxzJn9qsbeqqIfNpV+u2IWN4qK2/CmkbujYN6Y39cJhhLrXOCwU0DyMNHl1QowINRaPBUMMYDsY/keFvVV33pneONQ2GaYOHdH9zhVQ6n9/oV0zRZw3l55bSm0O+5L05uIfmMOFebg8zjn8xpmfPfp01DeZEa/btP3rtmBw/UUYeuOary3JEUZ469/9160/blcc0fMjdOyCNyNDfoE/333g1rq+H0OMKHlE/cSJ5Ptfx2uodUbvHZ76mcndv7v4BAAD//wMAqf2IYSgLAAA=", "base64"));
  res.end();

  return __filename;
};
