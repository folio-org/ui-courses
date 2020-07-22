var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby copiedItem.title name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTIwNiwidGVuYW50IjoiZGlrdSJ9.VEA8ID_FQfcqIMlntaG-O8FSdQrpCEXytIUWBtOz830
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:40:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/reserves.. : 202 6857us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/reserves.. : 200 43105us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYy24bNxTd5ysIbbqoKfE1fHinOEnrJk6M1C1QFFnwcWlPM5oRRqM4RpB/75VGlkaJ7dpFiz5gLQbSkOfy8t7DwwN9ekLIqIUFtB9gMSKH5FfyCV/hyzKtfo60EcIkp6iRUlKVhKDOekYNt0G5JHXhitFBD4nNsl3Aq3LRlfX5cY+PTIYYvKReI0qJgtMguaZMSx6CAJ0Fv8aXHcw2MM5Y4ixkKjLTVHnEBuAFZcEVQSSXHcjdsvMS0jGCV9A+fXwdfBubBOtwjuFnMx+HcOq8aX179aqJviuberNqIWN2hc408pSpwgSoDeCpMNlwEaM38a4ob8JvELthErs6Pig0wmo/61Of1jV8HI5sN/Xyp8nR0eTZ8WQ6HC4X09iVH9ZTunYJw6EaO9MtBxtWDICx6KkvuKUKO4plZnzVHZuYVz4WZm9tP5svFxuwFjEbHQzF7AukBvLDCW4opKxEBO6tskNwVYZVta5rnYy1TAKNnqnV0pgEeKAiahmcUJhQGKLnbTlD9I/I1DLCaVPW60qPpFfMFiJR5TI+UhbU8+yoBqEV9xocz8M4i0GA47Th/P2ikHebMJ+3HJhDO/M11N0XTMoxaYU1oNo5rI3NjFosNrUuZy+EtdLw0e1R7mLSg0IPmXTiy5q86ptwN6FOHgn1TxEK61ltDj5ZALKiKyO5hEBW6UK740xs6q4tw7Jr2j3h/lI9uqYum+UB+a4tz5u2XOx3fhvj7GoO120A5pIyiboCBKZuPbUo1jQbY4KFrJPld0Q5g499IW+Z8xpzG6wmglPYIU5z9A7p7LBQRjKKnYRCIKdB+NG2TDdu8mdfk+99O4MK6gPyovX1+//0Lsm7nTIsQ1X2mvBVk9djiwskxfp0H5+RU7zJ9xo8r3zsa3TkZ6Et0zkckBO/WIzJcFryHbzJp/trjaJgTA2ntc2GmqfblW9IOfqqer2chU1eZy8LzoqxtZYXZEymhSWruOTFGTl5Pn32fMfoZVuuERddNz+cTC4vL8dVE8fnzYcJZpXKdtI1cQKxnDN0HxOMYphgSrjxRTerdnGgXuJJ2e1juELV5+RDBaTJZNUwlN0Faepqp4lrXfN1vG5eEbI0DFBnUZiQKi5SK0DRghvmg/DMS7cDXzRVQv9zLWogc9YcpSw4v+KZiigE0dEUudUmoTJw15dxIwKjGXQeO+L33ExsAZuUnuGjJxRunTJDhThj8lCJQ1WMCyO/3Tc6y3m6P6pP4sngmG3NiwVbmAQUTRmquk7oxjSGMZYDtyyCK+JdJpAz5QCdJG4ag6hoIl35uJWwu6xZ1DGkG0xg0tlEHlDHhTS4bAHUKUgUu4HyGaJWO9g9TKAqpLNGs0JJK3c1ejSDj3f332sGH8akB5nBRyb9L5m0c4FP15d2R35oalh8syBPfbjCDlwASaVvS9hd9/d0hC9KWN9PB+T7lV/6t9iXaZVbSGQ6Ji/rZp5vNjGv4ZL80rTv/9i7CMb1PczJ6Vu8DvT4WBXWkqdGObIGDko6v+rtE34h8laHYHJIRbKKapE4VVgr6qIqKF5s3EjnbNjeVF87hBxMMCxzGqzD04Ikpd45PC2gAtZchFDkfYcwuGx8PWgT2CA50orKIDANuaKb0Og1kpOcxSASg9FtMb6WmWuReUDYIdOO1k6AbP9d+mtMDjqxP2FytqidyelZMeqazldvITZtf2rFk8+/AwAA//8DAOfbB6sVEwAA", "base64"));
  res.end();

  return __filename;
};
