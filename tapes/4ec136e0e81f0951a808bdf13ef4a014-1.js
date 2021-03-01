var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 9654us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxZ32/bNhB+z18h+HVhQ0oUJeWtTQosWNcWS4s+DHs4kceEqywJlJzVK/K/72T5h2K7rp1twDDoxYnJ+46843d3H5KvZ0Ew0dXMN9hMgsvg1+ArrdCaM93XCUBuEysVyyBKmdRJyPIoF0zGEMc8SWSkYHLeQ0qY4gJ0U7a+CtoqeA8FYFW2VVHdzVdmBhvtXd26qlxY37YzMw8qG0CpHZZtUDiLG+MafDul5Zv+QiJWKpVCs1hoZNJIzQB4xjhCKHLOMy5hF/wu/x112znow9sEeIK/YYivyfF9cNtdWFPm1gbbwd2UupgZV94Fd7jIwnlQI2Wn+5UCNkG9J0XkZ4otGGhheOXupTxCi+aaPhbuQx4KxiPGxQcuLmN+GccvaOkHzi85X3sj4Kw23wKK5FKmlyJ5kUr1TeCr+ccG/fINrMy1MYozyKRkcZTFLNORZhEkkBqTSG1wsnTxuPj5uHyRnmlvXNNSSlYvymWGiohlCNZRTLM8i3OGxmZWca10bib78Ace9XiXBPJ4Rw49rMLDLy36EgqhNzartS2TcGBC+XlwGuvKrckageRpHBomM0sfxoYMhM2YwlBJAQozYfc72I1tE91JXoekvXJeB9fYfA7EcF9Xpt/X5sm6cY2uHtDPr11TFzB/O/QzK6Ajee+OseBHKIo/YD7E105/ntVvKg2rcmj9DAcG91Vhbu+xsK+/1M7P36N3lXkac3eNmV87iM6HO5QnStn6UT4hfm4ma4PHwUlNC9beFq5eNrnfzrZsJsXymktfcaRtFivLtDCWScFzluYILExsIkKtIdGbMlmDD73aSR6Hr/ayLPHL3vf66ePF1dXF9c3Fy+G2a17q1j3gnoS7kgqnnQ3ilByRcw0MYkH9PZcZy5FTa1BRajhI0HHy5GyY1rNmCVahtonKE0a3j4mIUcSyUCRdmclQo4BUpkNw4XKqsvkqxSZJUx4h08BldzRdAgFZqFWUZ6GkC+VP6OTdlNC3fZW876rkWeXQDBzcmCUhjvOyhzfEwOmqLWb0kGEmWcijhElpE5ZypVgoFGAWcx2qQbvogIf4cpK3IV8+eFe6dh5Qi39CKKoB3w4HAGeU91ANbbA0WxZ0IJ/sRN334Q/zGpex8yjmGCaCGZMTjwxaBgpSBsR6abnIczvouBv4oQyc5HOYgXdl4Uq8uClp1vqGOsewqW0N6FcVzfFqAVjMY1eyHhToalpXJYmHZjf+rpD8TLeV7wNYtZV/Yn4LwU+a33uAB2bv29k0R9/7kCpdHUJVobucrHv8bVWsRdi+YI4LJd6WIscFsoadrcJ4PN8SppEhXcrThIWpyJlUmhqX0hFLqYeAlRKofr4nTHN3UJi+IR1KfAhqj/ckECrvdNC66Vru7RGnVmdChJJpEwKTlrpZBkjNjUcqNSnP0tDsgg/omOP9DcP8Gdp7nNJE0kcp07wrgXrm+wKAui4cmoDw9wP43xGk0TMJvQGOYnIUk6OYHMXkKCZHMTmKyVXg/zExyVcNf0dMrjeeryTV85Sk+r6STEIZxXmsicAZNR4uqfHkEbA4odYR2jjDPNtRkldQ0NSaNUG0iXqbDZ/cn+ANK/ABi8A4a9ETAVw/6np6tHi3nEejpDyF1qOkHCXlKClHSTlKylFSjpLyfyopRRQna+X17/x9Um3/x/NIVal2VGWf20lbtVD8grryfeVGZ49/AQAA//8DAOWwHRVjHwAA", "base64"));
  res.end();

  return __filename;
};
