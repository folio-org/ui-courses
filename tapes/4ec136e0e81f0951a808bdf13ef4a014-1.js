var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/83d1901e-9727-4ee1-8fb1-35045e9230b2/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:17:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6372us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 43372us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYXW/bNhR9z68Q/LpwISmKkvLWJgUWrGuLpUUfhj1Q5GXCVZYESsrqFfnvu7IsW7Edz842YBiUB8eReA55Lu/HQb6dBcFMl62voZ4Fl8EvwTd8gs+c6f6cKZXZ2ApJUhUmROiYkyzMGBGRiiIaxyKUanbeQwo1hyXopmh8GTRl8EHlCsqiKfPybjEsM1Br76rGlcVy9W3TmkVQ2kAV2kHRBLmzsFlcKd/M8fFNfyAWSZkIpknENBBhhCZK0ZRQUJxllKZUqF3w++w30E1H0MvbCDyBbyzxDRLfB7fdgTVGbr1gW9xNofPWuOIuuINlFM6DCjA63VcUbIJqT4iQZw6NMqpR4yN3N+VBNWCu8WNJzymnhMaEi480vBT0ksXfyzT6juLPmgxxbWWewzF5GSWXPPo+ZeFzuNeLTzX41Q0YFaY0EpbEWgCJpAKSqVATK2lENVMYODVbUTwufz+u7qPPs7eubjAgw31SkYLEtDLaQJdgmmRplBEwNkVGLXVmZvvwB670eEoEebhDQq8GefC1AV+onOnNmuHZ1hI+WoLxeXAaqtKtUzVUgiYRN0SkFj+M5UQxmxIJXAqmJKTM7ifY1bZRdxLrOGWvnNfBNdRfAjZ+r0vTv9fmyXPjal0+gF9cu7rK1eLdmKfNVZfiPR0hwQ8qz39XizG+cvpLW70ttRqKofEtjBbcl7m5vYfcvvlaOb/4AN6V5qnm7hitXxOE5+M3GCcM2fpSPgN8qWfrBY+jnepGWXubu2rV4n4921ozy1fHXHFFobZpJC3RzFgiGM1IkoEiPLYx41qrWG/KZA0+dGsnMY5v7VVRwNe99/Xjp4urq4vrm4tX49eufqUb9wB7Au4KLJymHekUFIBSrYiKGHb3TKQkA8oIlWFiqBJKR/GTvdW8ausVWHJtY5nFBE8fYSKGIUk5i7syE1wDU4lIxuDcZVhliyHEJk4SGgLRiopuazwEYCvhWoZZygUeKHuSTt7NEX3bV8mHrkpeVA71iODGrBLiOJY9eYMZOF8JsileJE8F4TSMiRA2JgmVknCGHTLFzsjlqF10wEP5chLbOF8+ele4ZhF0HX72tAZ8s9X/kV2O10CxPSFwQzrbUd334Y+LClbaaRhR4DEjxmSYRwYsUVIlBMeCFZayLLOjjruBH4rASZzjCLwvclfAxU2Bk9bX2DnGTW1rPL8ucYqXS8ByGruC9KBAl/OqLNA61Lv6u0LyrW5K3wsY2so/Mb1TKk+Z3ru4A5P3XTvPwPcUQibDHlgTuovIusPflvnagO2TcpwQkTwVcpyMAXU2iHg837KkoUFHShPEJSwjQmpsWlKHJMH+oawQCmvnryxp5g5a0rfoQDEXgsrDPZqD0jsdNG6+Nnp7bKnVKWNcEG24IsJiJ0sVYGOjoUxMQtOEm13wAQ9zPN9Y5k+quYc5TiN9lCfNuvSvWt8nv6qq3IEJEH8/gv8dK5o8aymPw002crKRk42cbORkIycbOdnIQfh/ykbSod3v2Mj1i5d7SMlf4iEH1PMeMuYijLJIY/Km2HSowKaThYpEMbYNbqMUsnTHQ16pHCdWWwfhRvN2Jnx2fyhvSA4PkAfGWQseL9/1Y65PjQbuVrNoMpOnpPRkJiczOZnJyUxOZnIyk5OZ3Nb/PzCTLIzitev6d/4nmUQv8ZMDauMn+7jOmrJR+c+gS99XbXj2+CcAAAD//wMASRO5PlEfAAA=", "base64"));
  res.end();

  return __filename;
};
