var path = require("path");

/**
 * GET /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves.. : 202 7278us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves.. : 200 28638us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/jNhC+768gDPTU0CYpUiJzy2ZfQTcP7HrbQ7GH4StRV5YMSU4aLPLfO7L8kPJCcioK1Ahkx5z5OPxm5uP45xtCJnVoQn0dmgk5JH+Sn/gVfpn77t9JlsWY+MRS5RyjMnBJLfiEJhogCOW4i2Zy0Lu4alU34XPetHl5edL7G2eUC8BoKlVCpQicWp96yoA5ZlKfWSu3/nkbFhs3zpjnzEYqIkupBASwgSvKrFFWeBNNSLZuy7pyoWlwz68ttKtmA6FtFBpcSsE5T6XKFNUxAk1SpRVDNK34UxDn9q/g2g6mZ2PPxytQ0amERVi7fQkOiiL4/ZIPjavzZZtX5ciCQOnJqoRryAuwRdh7LEILHloYhtWxXgdog3+HjzWQYIJRllGh5yw5TNRhIqeJ4b8yfO3A0G+19C/327jdrd/vNqw1LdTtPX9JhdqyGsr76CkVbF8tyzz4E8z5iGcLtat872RGMU/QdFnVUN9+rhx0xG0ynSktlLaOBuc4ldxqCtYBjZlNOdNCxOifQXmY7EH5vwZ6mPDzL3+cfCTv55/Ozsnxu6HJ7nS/fZsdH8/enczOh8t5c+Ta/Hpt0tarMFwqsbPa1eDkkoXAGMYDimsqrTTYJowj0Yn2DCQ4lY32hsVy1yCpcDFLbUadA0WlTxJqBM9o8FEKFzhoqYfORW472jbeymdasyRQB5h03BqDCBCocGlijZAYkB16L+t8gd5fUWlyFy6qvFxTPklAMq0E9pKJ+PBRUODR0DSIVHJIg+FxiNMMAE78RrNehkK+b8t4VwzLUC+gDGV7r6Si86lEDmhqDHKjI6MayabaYLMLoXWSDdr8AcpzJfUq6GFJnUJeks99Ep4vqNP/C+rfKijks+izcUSagFXR5o7cBEu6cEO9rxlXlW2d21Vb1aOLd5zzo7KtyrxaHZCPdX5Z1XkzzvwOY367DNs0BGa8zDw1KggMXQPVCbeoWVlmdYip1/wZlHn4uyfyCZszjG2wm7BGYoY4jQ4MlrNBorIEtT4JQQms6SBgd30cPHrI36Ekn6BehCKUB+RDDeWP//Qpyfe9Mqxskfea8CDJ67XmCoti3d0nc3KBk9gowcsCXM/RMSxsnfvLcEBOoWmmZGjWXeTn8WK818QJxuTQrK42pXmx2/mRkLsx5Gy1sJu45r8pztRUa80VmZIjpUmHSz7Myen7o3fv9xW9qvO1x1XbLg9ns5ubm2lRuelldT3DqHxez9rKzYLLlyzjeoYoGQ4FUpjpVbso9jihXGGn7M8x3KHoY+oGI1JF0iUMZbchVVnsNXGta1C6bfKUjUnGAuosChOWinFUiyCp4hkDK4BBYh46f6o3gt19wXYvIfamV1XhcWbc6l9IYkw5qp410JWkdKgZzlDvuE4zjyLCzWQ0QQ1mESiH5RakDhlPKM8iTs0OP4GJmopES2Wt4CjFk6cwnh5eXwE7Hl6hOyapq2oxjh9nuFvUpat2XoP7gTajXcH7vMsiFF8xIPzQfGuCv38P7UFG43u0qY7KWGq6y1HKFPvbJB4fLDWeK4t3xeQpjGfv39cAD2no+4v4aoEX8aj97o3yZxXZxUMA/4piaP74HP/CSV5kDyb5F87yO8+d493D26tqobiAy9CclNvJXKXZI+vbTEoxnIIcNiMKUWfQj8+/DIYkuF3g8lto8n4RBSjU5HKFmndT1T/GlfUYSc8RxPmhYocoVIKLMUFbr7e3GHO9a1WrXYo/3qzLGFUWNMW0W2pttACeeQsDSXiG3n5fLqacy3v7brxev++bbXI2stzTjj8Qq7qfT/ibu38AAAD//wMAkRLWB7kPAAA=", "base64"));
  res.end();

  return __filename;
};
