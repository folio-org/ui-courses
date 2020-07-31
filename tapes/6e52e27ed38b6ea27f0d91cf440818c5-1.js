var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId=("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094")) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 9489us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 167960us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYTW/cNhC951cIe23Y8EsUmZubFIjRxA3qFD0UOQzJoa1aKy0krRsj8H/vaD+19trZdQO0RePD2ityRpzhzJv3/PlZlk1CM2877CbZy+z37DM9oWdlHL5OrOJKew7Mp0IwrV3OvNGSSXTOpkIKzOPk+dKkhikujF5BFebVvMsEF+vFiF1oy1lfNvVizw/QlSGLZUrYYt2XMKxkUMesrHu8aBfft8YzaPsp7TtdHkuk4ISQmoUogekEyBygZporY6Plzsp43/hn/weGfnCwDHIb5hH+xoG+g/4Sp3TU0G1X70Z6WodqHsv6IvNNf5nN5i0u4oTZrCoxZmR/OTKfYg8Rehgfc7ijFqHH+Jo+Fl4ll5zxginxgauXKn+p8++VFd9x+tk4I7v5LB5utzK7Xfy+XeVvWR1vy66nGFb5D1z54EExMMCZlrlgXgnDuFHCe4kmyc3N79g/fAVHuCSjFi/IYQvt6kD4qce2hmq0Zf3ozg653dFhe10GnDXlprAUaG5zGZl2iT5ikgxEcsygNFqAQSfSfgf3I9vGdpTXnU4q25C9xu4qE+P10MTleog7z2PZheYa25vXZTer4OZs7GdeLXts4Y6x7A1U1Z9wM7afleFqPnvbBFhXb9/OcbThsqni+SVW6cdPs7K9eY9t2cTdmIdjzNuNA/V8vDL0dnu9uZPfEK+6yWbD7ehNXQ8pnVflbAVLH5/d2TOpVsdc+cpVSC43iQURE9OCe2Y9ApMFIZcMAYqwbYyN8WO3dpTH8a2d1DV+2ntfP/364tWrF69PX5yMl8vuJPTlNe5JeFlT2/TzUZyaI3IegEEuLNNeO+aRi6FPbOSgIeTFzrthOpt3K2MjQyqMLxidPqdCVIo5KQqGMWkZUIDVdmxclZ567Gad4lhYyxWyAFwPr6ZDIEGlDEZ5JzUdyO+UU1tOyfp82SXvhy55Ujt0IwencVUQh3nZUzdUgdM1jEWBvsBIV7oIyABzXBUsFklArnKRzDagheFj9XKUt50xUoZLwGoKXSa5cJPdNmj7EXgLxwRnQo33YB3v7JCE8JN7gS+B+MPNDFfhp5yKBtEyL2ygWSc98zyQvefJqWjzgo/C35o/loSjfI6T8HNdlTXuoNmdQXrWEDdgM2w7QrHQTGdNTUP9fpxDz7Tz0Dft8qA7xGZ8VonU4iATcz46Gjk6Mh8wMVOkPEljMfrdWUqFuJ4TeeGsEMhU4QgbAneEDRQrcOA2OJ1QPYANEabd8+zVZUvzC7KTXZj4W5N24WM/fTiQQBQmv0sgDqQQG8stmG/uZV+VGBEMOGJZ0hMOFTwwq41iRjsNKQpu0TyQeV9ANECpLlRUhMrICYSoJ2wKKnqNeYFhb+Y/wE3VtM+zd+UV/quy7njxxKxvLA/LugvBWos5SyYWQ9ZpdAihmOI0VGzyaHbRf5x1CehVRILY3DANlkpd5nQJktANPQpT6P31DhfQRso6xAu82+H/fOrVk1OvHkx99vFrkPnc3uvFgw62sXuEzJ/Npx7bpfKRSudrqt4RWhLanm31TbnRYPtCOQxUxJ0cHwYoYpzfIYhNSa/LmWsEannLUA+iDYkOeWcjcRutC1TJwYYJ7dGm8mFtehKvoQ4kzb7J0/+oPMWUS0xEPdRADXXOmXOGeFNBf0oaPC4eLU8Pd/mYPB3xqYf06WjLN4H6TaB+E6j/Y4EKkDuIiRQKEuPVRHmZpQeMpAbpLK+LHEb/z/qSQD3K27he3pQVpSkbwPkxcTpAt2C7AnZXnA47FBP6AHHqRK65Jp6pjKMykhiooKiqQgroE81+7raM80BxepTPcQJO62ypO7+gT5uFiH2COP0qlNFw86QBu7E7jDKawrr1O+5RxvOmWlP8p1NG49wTKOPGaksZl3md9E0P1S8YmnbZnPLZ7V8AAAD//w==", "base64"));
  res.write(new Buffer("AwBgolrn+RgAAA==", "base64"));
  res.end();

  return __filename;
};
