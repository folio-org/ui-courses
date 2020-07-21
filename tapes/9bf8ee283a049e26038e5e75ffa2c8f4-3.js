var path = require("path");

/**
 * GET /coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/80939663-9486-4382-a5f0-a28a5580d0c9/c4b4bfd1-04fc-48b9-a682-a63dbd384c03/24466d82-c255-4d50-aa1a-ad37c5aecf56/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:08:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03 : 202 6769us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03 : 200 13568us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWS2/bRhC+51cQujYr75u7utlO0RpJ3AJxTkUO+xjabClSWFFGjMD/PUOKNmnJduS4QKvDQuDsNzPfPPfbmyyblXGWLbJZkF76IjJCZRGINN4Spw3HQ0QfhZGBitnbDlC7JfSQY5fitUv/ZD4BxLK+3MojrEMqV23Z1P21iyvIgkuQuTpmxfZm1hRZu/GbqoxQt66F9R125VK7xG9nW7eY0tpIFohiAYiMMhDnqCUUHGeeUkul24X+4f+G0HbwbygYKR6sa0ryV1R6lX0KJdRh8PIRjmd1qDY9sUtoquby5m22gjb1f3veK1c5aOq2/3KnZQmti651o6v4MSTAeMR3ePSqOeWU0JxwdkHFQqiF0nND5S8Uf4MiRG1W8XBUD7rF87aPXGg2aQ0fynWLBIa4G2qF1VoQK40mUnSVoApKHDdOKUMjDXa2j34q9AerQ0iCS1SWXBpcSccnjLI7KXxtIdWuGoRfHwirJrguJ4OwCFHLAIxoaxXWNBo0kgIxtigc58aIfA+6y2Dk8AJt0wL66Mo6+1B6JHQzikMTt+L3n49OT4/enR19HIXl+ji05XV/oU0bGAU1RrndTCiiA0BpcBhOZgj2sCUeKHaxFiZSJ11Q+cSqW6426wGqeShy7XMSgkM+UWB2OMsJxEJy5OmMNCO02jIYsCrmxlABJDgqO7PoADggPGjhLZfojB+xq1QuEfsJ0nUZ4M+mrPsAz4ST1CgeibQFHrHAqmCFJRq4lsxpsKwYtawn8LO47jT8daCO7Mu25IdcYwUt70rE5oxzKwmnIidSFjkxVGvsG+3AKhq4DrMJ7JnyOFzTtDwuUlmX7U3WNeyEa4tjZ6eZUbMeb0C92+xo6q61B4e3rXlxs4KBrWVKUpztRGiL1cIBJ6DC4glFAF9QCdTK2R74ac4v0DflfFbjdExrnJ33st2Bet5kTV2VNa6OZrlqahzrD7l1rZA2oW3S1r2hHnY95FJqHXHcBK66Ilc4cxzDao0iD8pBKJR+xMPfy6rqVtYJVDgYxgvepfvOZVxINe3oV0zRJ9fB8wuB6QU1C8rmKhcPF8KIO7n5jJ0zOOSNE4XB+WAgxz0oDRDnqSBeKM8hRstzPdXxzFp51vaAe7ntQcXtkOu9fDrhlbQ5Jbnt513uiGfAScFzG5jC1PrHhvBv8+z9PDu9gjU2cTstvGlGdW4s/V9kVM65Yf9RRh+3/S9lNPvyk2+fzrl8odRcq923z6vD8qOgPGH3dSHZfX+db5Ye0vZhff+mwaUXupl4fv/mrmB1tRXtR/CA+Om50PmUx2ujd0Ds9m2+JnK3b26/AwAA//8DAOrfwZi4DAAA", "base64"));
  res.end();

  return __filename;
};
