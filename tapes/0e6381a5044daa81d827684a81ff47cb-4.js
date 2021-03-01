var path = require("path");

/**
 * GET /coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?unused=0
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42.. : 200 5132us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTXPbNhS851dwdG1gAyA+dXOSHjRN3M7EOXVyAIFHmy1FckDSE03G/71PJGVSctSRm144Gjzs4u3yYanvb5JkVYRVsk5WXnHQkjESMhBECJDESMuJ1VoHQS0EwVdv94DKbWGA3LgYHl38O8kiQCiq+7EeoPWxaLqiroZtdw+QeBchcVVI8nFnUudJ12d9WQSoOtdBe8A2LnZbXNuMbTGplBHME8k8EBGEJ85RSyg4zjJKLRXuFPp79hf4bg//joVZ4sVcS5G/IulD8tkXUPmpyx9o3FS+7Adh91CX9f3ubdJAF4efg+7GlQ7qqhtWDixb6FxwnZtbxUUfAf0IH/AxUHPKGaEpoeyOsrWkaymvcOkXSteUTkwI65twDsb0Wpg101dGqDOwd7svLcTJ81xkPgRFibNCEJlaSaxPPUmddiYELXyA1UDwhM+nwX1f97GFj0XboQkTj7aa8kxyQoNGvw04kmnIiROgBTc2p1Mnx+hzr+9iOoREuEey6A6S4s07RtmhCt86iJUrp+K3o2JZe7d/rwczfFDCAyPKog/C5JQYQYHgebnj3JhUv4CeKpg1vIJtOYSfXFElH4sMBe3msq/DWP7ty/X799cfNtef5mLR3viueBw2dLGHuVChy12/kIgNAKXeESeZISITlmRAcXpUagJ1wnmpF6e6bdO3E1Rxn2uVaeK9Qz0hTYnlTBMIueCo0xlhZmg5KpiwMmhjaArEOyr2x2ID4IBwr9LMcoHNZDO2icUWsZ8hPhYe/qiLajB4lTpBjeSBCJvjI+ScOJZbooArwZwCy/KZpV3AN6HdM/x5IUfydRz56V3jBG0PI2I149wKwmmqMTpzTQxVinCmHFhJPVd+tYD9y3hczrQcj7tYVEW3S/DOL65222F0LfOAEvSZq3kHVOGkjkfR1ZHO8Wre7RqY1FomBRUmI6myOC0cMEUlDo/PPWQ5FUCtWL0An9f8Cr6l5k2FCRtbzN/n2mko39ZJXZVFhZ+fetvUFX4ajrXtr0LsfVfHsb1pHr7+x3jGnJViLdMrK+Vpzk6w1+fshQF/9uD/N+Bv+20Gcfz6P4cm3iq/N/32+Y9BCc3DWHrp4QUOiiuu7JGQn/XvAvd+cOjPePf05ukfAAAA//8=", "base64"));
  res.write(new Buffer("AwCrAroaXwkAAA==", "base64"));
  res.end();

  return __filename;
};
