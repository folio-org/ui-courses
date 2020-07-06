var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImEwOWE4M2FkLTNkMmYtNWI5Yi04OTk0LWQ4NzRmMTQ1NDY5NSIsImlhdCI6MTU5Mzc0ODc5MywidGVuYW50IjoiZGlrdSJ9.Moy02GDjk7IIJQTOGxN5PoSKLTfDwf9Xt5ae_TWLBpE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 03:59:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.251:9178/locations.. : 202 6885us, GET mod-inventory-storage-19.3.0-SNAPSHOT.443 http://10.36.1.251:9168/locations.. : 200 3935us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTW/bOBCG7/0Vgq/bafj9kVtgZ9tg2zhIW+xhsYchOVwIcCRDkoMNivz30h9KizpuAwM9BIgOBDT0OxzpfTiiv7yqqsmijTjUbdNPqtPqn+pLiZVonda3Ey1j9tpkiDxlUJwFcIEQhM2WixjRRjZ5vZU0eEMb0VnT0P9jNLZpG/3r88l0ejK7ODkbp+r+LA717WZ66FY0hpt+qIfVuqaLbRWKETEWEVBzByooD4EYB2akSwwVRm0f1sOb5arfCY2I2ZpgoVSqQSUpwQtugVJWIhJHp9woXNShw+5up9TJOsckQUSm1kuWxQkJRDQyeKFKIWFULrv6pig/UndbR7pq62bY5JComNMigfK5DCkLQJ49GBJGcTTkeR5z9N+JL9LOi6dlqP59JMcuwzh1QwMmHHAd3Tq8flUd4UBpVoZNvYIJBswCk5+YPJX2lLE3zPE/WLl2dRbVapmertqI7st4//oHsnJMRhULwHhfrHGZgSs+g/M5oxDOScv3yPqAdVO93xp1GLAPL4A9I8C0PgawUXUYMO4UIjlVPA2ldUWD4HRAUKVnWcmEiUnvATZvFnVDe2idj5FEfezq5RqdzcTnnqrcdlW70VUd9e2qi9Q//L7uY3tL3d2s7pcLvLt8fKHfD6qyLGeeEnhpyzvgZc+F7KkIQyxbkUud8uOgRqGVD0EB99GCyjGWT4AWID0ZLnKwKdCvQA0BpSGdIGlTcuhcvOAxQRDaWaWsIMl+DuqTMvxeUC07BtRRdRhUq115iBCBYuTFmuAAQ7E422A4c0LknPZBvf774m11/und5byazg73wvlLL3xGvVDKYxAbVYcRC0JxWz63wJUxoIgnQCYc8LKpSpvUCZ3dQ+yqXa4W2FXXhKlu/qum7WJBcdP6DuJ29YLbM8LNH3W2878+20mVhI0G0FEAZXgALMc90InQcWs52f1/DR/Pp/PLWfXn+/n8+jBg4gWwZwSYMscANqq+AbYtZTK0Ay6uKbbd9iHNq/uvAAAA//8=", "base64"));
  res.write(new Buffer("AwDk5RkTww4AAA==", "base64"));
  res.end();

  return __filename;
};
