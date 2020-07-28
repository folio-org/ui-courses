var path = require("path");

/**
 * GET /coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959?unused=9999
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 202 7229us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 200 20765us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWy27bRhTd5ysIbZuRZ4bz1M52isJI4hawsyqymMelzVYihRHlxgj8770kJZGWZVeuW7RaEAIvz5l77nO+v8uySRkn2SybSC3ACu2JDDESYbQiXmhNhCwKJqSTVtrJ+xZQuQV0kFOX4p1Lv2c+AcSyuuntEVYhlcumrKvus+tbyIJLkLkqZkX/ZVYXWbP263kZoWpcA6stdulSs8B3F71bTCplBAtEsgBERBGIc9QSCo4zT6mlwu1Df/a/QWha+Hc0DBKP5hqL/BFJb7OrUEIVNl4e0HhRhfm6E3YD9by+uX+fLaFJ3d9O99LNHdRV073ZsiygcdE1bnAVX4YEGI/4AR8dNaecEqoJN9c0n+VylotpLukPFH8bIkStl/E5FGMzamY5n3KdH0ad3X9ZQdpEHHJvgtKS+KApkd4ZYmjuifeFdy7S6J2ddAQP+HzoYh/qdVrBp3LVYAg2PDZYGcBRooTMieDAiI8qEupooFZF7b2YPEU/l7yj6RCS4AbJkttKSqdnjLKtFb41kCo33xi/PTLO6+DarG6MRYhKBDxLWSuxKwpKjKBAjC0Kx7kxuX4C3VcwaHgF27gEP7uyyj6VHgXdD+ZQx9788cvJ+fnJh4uTz4OxXJ2GprzrPmjSGgZDhVFu1iOJ6ABQGhxxkhkivLDEA2WEqtxE6oQLUo9OdYvlerWBKh4KrbwmITjUE/OcWM40gVgIjjqdEWaAznsFG6yM2mBdAQmOivZYdAAcEB5U7i0X6IwfsMtULhB7BemuDPBLXVZdgCe5E9RIjgPLFviIBSeOFZYo4Eowp8CyYmBZjeAXcdUy/HokR/a1L/lNrrGCFtsSsZpxbgXhNMdxKQqN/aIU4Uw5sJIGrsJkBHuhPI5nGpfHdSqrsrnP2pYfaW1wcO2NA2RWwxdQ7Y8LPIpOHunsW/P6fgnbrmZSUGE8yZU1bRviDJVYPKEI4AsqgNpdGw7g5zW/gm+s+aLC+ZpWOH13tv2RfFlndTUvK1w+9WJZV7gYHmtrWyGtQ1On3r1NPex7aKixESxuDe4ZEeAEwUmoCdO5YDZnoA0/4OFP0+zjNDu/hRUmvRk76l3a9a7SxtJxT79hjj67Ul5eKrgehJ1JORWcPV4PA+71C2LE8fJqev7sty2nfj212X6a0TxwqxQjwBhvx3DAiBpMsKTe6pxh7flDGYU63UB21i6PFLOrW/fH4aSyXGr7v0gqnyr7XyXVTA2X/1ZSs69/8wrVOyf0lBm7dxl6c1j+OigHz/1nL2GX64WH1N/Pdxcb3HyhHYyXu6v7HJa3velpBI+In5kyrsY63hq9I2L39My3RO7h3cOfAAAA//8DAAiGku//DAAA", "base64"));
  res.end();

  return __filename;
};
