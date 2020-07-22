var path = require("path");

/**
 * GET /coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 202 6788us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 200 24133us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMRWTW/bRhC951cQujYr7xeXu7rZTtEaSdwCcU5FDrO7Q5stRQoUZcQI/N8zFCmTluxUrgtEB0Lg8L2dN5/77U2SzIo4SxbJTIIVMgXFJHjNNKbAIA2K+WCjiMDzLIbZ2w5QwRK3kFNo4i00/yS+QYxFdd3bI65DU6zaoq62n13dYBKgwQSqmOT9l0mdJ+3Gb8oiYtVCi+sddgVNu6R3F71bIjXGahFYKgIyHXVgANwxjiCF59xxDfvQP/zfGNoO/o0Mo8SjuaYifyXSm+RTKLAKg5dPaLyoQrnZCrvGuqyv794mK2yb7d+t7hWUgHXVbt/sWJbYQoQWRlfpZWiQ4hHf0aNPDJec8YxJccXVQqWL1Mwt179w+g1EhNqs4vGoLeienvfbyIV606zxQ7FuScAu7sFi9OAZ+NRTrFLDQDnDuA/ahogK1BD3R+hnQ38sHUEavCayBprBleb0THCxs+LXFpsKysH49ZGxrAN0ORmMeYhGBxTMOJcybXPOrObIrMtzkNJalR1A9xWMGl7ANi2gj1BUyYfCk6C70Rzq2Jvffz45Pz95d3HycTQW69PQFrfbD9pmg6Ohoii3m4lEcgA5D12zCsu014555IJxo2zkoCGk2eRUWK426wFqZMgz4zMWApCeqBRzUmQMY64l6QSr7QgtewUDNo2ZtVwhC8B1dyw5gIBMBqO8k5qc8SN21RRLwn7C5rYI+GddVNsAzxRoblMZmXY5PWIuGYjcMYPSaAEGnchHlvUEfhHXHcNfR3IkX/qSH3JNFbTclYjLhJROM8lVxrTOM2a5MdQ3BtClPEgTZhPYD8rjeKZpeVw1RVW0d0nXsBOtLY2dvWYmZjN+gdV+s9NRu9YeHO5b8+puhYNaJ1LNtfVMGUfVIjF0Qx5YyAP6nGvkTs8OwM9rfgHfVPNFRdOxWdPsfLDtD9TLOqmrsqhoddTLVV3RWH+srWuFZhPauundG+rhwEOqDUGlwIRWhmrERUb1mbOQRSGtQmu4e8LD34uy7FbWGZY0GMYPPDQPnSuk0um0o18xRZ9dBz9aCPKKy4W2i9TOrUgfL4QRd3b3mTpncMhbULml+WAxoz2oLZJrnLa8Sr3EGJ3MzJTj2bXyL2cPuJefPVDcD7k+yKfMfRZC3pEoGlopEgnmiqWAUljrKND8iXz+Nk/ez5PzG1xTE7fTwptm1GTW8Z+fUbfgYm7NT8nos2f/TxlNvvynu89Duam5Sc3e3efVYTmizJ8693Uh2b9/XW6WHpv+Yv1wp6GlF7qZePlw5y5xddObDiN4RPz0XKlHd8fXRu+I2B2e+ZrI3b+5/w4AAP//AwAwXMtCuAwAAA==", "base64"));
  res.end();

  return __filename;
};
