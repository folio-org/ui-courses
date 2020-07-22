var path = require("path");

/**
 * GET /coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d : 202 6830us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d : 200 25704us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVTW/bOBC991cIvm6ZkBRJkb6l7R6MbbMLND0VPfBjmGjXlgRKCmoU+e87luRIcZqFs/VBMDR8b+Y9zox+vMmyVRlW2TpbORmoEloTwXQkwitJrBCUiMgVyxUzoMLq7QFQ2R0MkCubwr1N/2R3fetsFdJ+PBCg9alsurKuhnM3d5B5myDDM1kECGV1m9Ux63rXb8sAVWc7aI/YxqZuh+82Y11MKqUF80QyD0QE4Ym11BAKljNHqaHCnkL/dH+D7w7wHxiYNZ7NtVT5O5LeZZ99CZWfqvyJxk3lt/0g7BbqbX27f5s10KXh76C7sVsLddUNb44sO+hssJ2dS8WXPgH6ET7gY6DmlFNCC8L5Dc3Xgq+FuCgk/Y3ibyJCVN+E81ED6AGfD4Nzvu5TCx/LtkMBk+8+5qCZZkQVPidCyZwYAE+C414KCMJEuXqOfsn6s+kQkuAWyZJNUynt1TtG2TEK3ztIld1Owe9Pgtva28OdTMHogxIeMKsxkggdKdGCAtEmRsu51nnxDHqqYNbwCrZlA32yZZV9LB0K2s9hX4cx/MeXy/fvLz9sLj/NwbK98l15PxzoUg9zoEKXu34hEQsASr0lVjIcXicMcUAZoSrXgVphvSwWWe2u6dsJqriPhXIF8d6inpDjnXBWEAhRcNRptdAzdDsqmLAyFFrTHIi3VBzSYgFggXCvcme4wGLcjG1SuUPsZ0j3pYe/6rIaDF7lVlAteSB4/fgIkRPLoiEKuBLMKjAsziztAr4J7YHh65kc2bex5ae7xg7aHVvEFIxzIwineUGEiAXRVCnCmbJgJPVc+dUC9h/tcT7Tsj1uUlmV3T47DOxCa4dr52SYkVnNJ6A6HXZMdRztqeBxNG/2DUxqDZOCCu1Irgx2C8cJtBKbx0cPLlIB1IjVM/DLml/Bt9S8qXA7phZ352PsdKFe11ldbcsKPx31rqkrXOtPtR1GIfW+q9NY3tQP3/7namX5Ojdrqi604SerdUK923/BDjwaKaMXkjq03HEiaSiIzYMn2rlcCBvxwvOzlvOYNzcXhr2w0l+f96fr/brfOUjjh/txZeJM+YPl14/f9C00d2PouYNn+FdcKKOWOn7VvbO8k0o+yfkrzj28efgXAAD//wMAiqRZ2hgJAAA=", "base64"));
  res.end();

  return __filename;
};
