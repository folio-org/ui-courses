var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId=="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId==("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094")) sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 10431us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYS2/bRhC+51cQutbb7Ivkrm+uXSBG80Kdoocih9ndWZsNRQok5cYI/N87epOS7EhOgLaoL7LFnRnuvL9PX14kycjX06bFdpScJn8kX+gJPSvC7OvIKK6048BczAXT2qbMZVoyidaamEuBaRidLFQqGONc6RxKPy2nbSK4WB0GbH1TTLqiruYyP0Fb+CQUMWKDVVfA7CSBKiRF1eF1M/++UZ5A041J7nJxLRG9FUJq5oMEpiMgs4Caaa4yEwy3RoZd5XfuT/TdzMDCyY2bR9jrO/oGuhsc01V9uznd9vSy8uU0FNV14uruJplMG5z7CZNJWWBISP+mpz7GDgJ00L/mLEcNQofhgj7mViWXgnHJhPzA1ankpzL/MbPpD5yfcr62RorTSThCcal3P/97v4zgoj5eF21HXiwz4Lly3oFikAFnWqaCOSUyxjMlnJOYRbnO/UD/4SQcYZKUGrwmgw00ywvh5w6bCsqeyOrRloTcSLTY3BYeJ3WxLi0FmptUBqZtpI8QJQMRLctQZlpAhlbE/QZ2Pdv4dpTVQS8VjU8usP2UiP65r8Pi3IfB81C0vr7F5u6iaCcl3L3t25mWiy6bm2MseQVl+Rfc9fUnhf80nbyuPazqt2um2BO4qctwdYNl/PnzpGju3mNT1GHo8+wa02ZtQJ30T2bd3dyuc/I74qd2tBa4772p7SDGq7KYLAfTxxdbMqNyec2lrVT5aNMsMi9CZFpwx4xDYDKn2SW9h9xvOmOt/FjWjrLYz9pZVeHnvfn65beX5+cvLy5fnvWPi/bMd8Ut7gl4UVHbdNOen5ojcu6BQSoM005b5pCLWZ+YwEGDT/PBu2E8mbZL5Uz6mGcuZ3T7lApRKWalyBmGqKVHAUabvnJZOOqxu1WIQ24MV8g8cD17NV0CaVhKnylnpaYLuUE5NcWYtK8WXfJ+1iVPaoe2Z+AyLAviMCt76oYqcLwaY0GgyzFQSucOZcAsVzkLeRSQqlTEbOPQXPGxejnK2mCRFP4GsBxDm0gu7GjYBk3Xm97CMsGZUH0ZrMKWhGQ8H+04vhjEH+4muHQ/plQ0iIY5YTxtO+mY4570HY9WBZPmvOf+Rv2xIBxlsx+Ed1VZVDiYZlur9G1N6IBNsGlpivl6PKkrWuu7fs56ppn6rm4WFx1Am8FdM+EzsLTtpaNuyLlnRmeKZdpqiEFwg9lgmVIhLkPncggZkHO5CopmA3JqBcqMiV4FpzHN0e918wPclXVzkrwpPuFwRHzTlp3b2A8eDoQPJs924MOBAGKjuhnl66zsibv13hiDKYtZyGdxpxEmhGKK03Az0WE2nEL9uEtApwJSq6cZ02AcA5lSGiR1GToUWa73z2S4hiZQ3CFc43al/ePBt7l5avA3qocFXyLtNZCRWRcs+aUDcx4jy/KYRpkZDI4/EHyV5tYIgUzllhaip7wZRz0AHLjxVkdUDyzEAOP2JDm/aSjEkJz9u2Jv8yfHfq26G/vk4/cA9Ybzp4H6jeIjoP7tdOywWXAgqXS6guwtTU2aum83TKdYs7F9zhzmit4eMIc5ogfDZebGuq5XNc01Ao1dw1DPCBwSMHLWBEI5WueoooU1JtrDU+XDPPUs3ELliaY9U9X/LFXFmEqMBEPUDCbqlDNrM8JQOf0raf3bcDRVPdzkY1S1h60e4qo9kWey+kxWn8nq/5isAqQWQiTghoS5NBEPZugBIwRGnMvpPIXeb1tfI6tHWevXy6uipDDR0pSDetomqpIzyvOQzA6J6kxCMaEPIKpWpJprwvoqs1RGEj0VFFWVjx5dpO3P7Qb1H0hUj7LZD8BllSw46Fe4aj0ntE8gqt8JOO6i2gOBY34UcMxyY1cv2QGOV3W5IlrfABzVNgY+zBHFd4DjIrajru6g/BV93SwaVL64/xsAAP//AwAAkMYuCxkAAA==", "base64"));
  res.end();

  return __filename;
};
