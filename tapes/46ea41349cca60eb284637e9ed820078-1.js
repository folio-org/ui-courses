var path = require("path");

/**
 * GET /coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d?unused=0
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
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d.. : 202 6692us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d.. : 200 13930us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVTW/bOBC991cIvm6ZkBRJkb6l7R6MbbMLND0teuDHMNGuLAm0FNQo8t93LMmRareFs/VBMDR8b+Y9zoy+vsqyVRlW2TpbORmoEloTwXQkwitJrBCUiMgVyxUzoMLq9QFQ2y0MkBubwqNN/2YuAYSyvh/jAXY+lW1XNvVw7O4BMm8TZLYOWRxPZk3Mut71VRmg7mwHuyO2tanb4rvNWBaTSmnBPJHMAxFBeGItNYSC5cxRaqiwp9A/3T/guwP8KwZmiRdzLUX+jqQP2UdfQu2nKr+jcVP7qh+E3UNTNff711kLXRr+DrpbW1lo6m54c2TZQmeD7excKr70CdCP8A4fAzWnnBJaEM7vaL4WfC3EVSHpbxR/ExGi+jZcjhpAT/h8GpzzTZ928L7cdShg8t3HHDTTjKjC50QomRMD4Elw3EsBQZgoV+foH1l/MR1CEtwjWbJpKiXdvGGUHaPwpYNU22oKfvkmWDXeHu5kCkYflPCAWY2RROhIiRYUiDYxWs61zosz6KmCWcML2JYN9MGWdfa+dChoP4d9E8bwH5+u3769fre5/jAHy92N78rH4UCXepgDNbrc9QuJWABQ6i2xkuHsOmGIA8oIVbkO1ArrZbHIardtv5ugivtYKFcQ7y3qCTneCWcFgRAFR51WCz1Dq1HBhJWh0JrmQLyl4pAWCwALhHuVO8MFFuNmbJvKLWI/QnosPfzVlPVg8Cq3gmrJA8Hrx0eInFgWDVHAlWBWgWFxZtkt4JuwOzD8fSFH9nls+emusYO2xxYxBePcCMJpXhAhYkE0VYpwpiwYST1XfrWA/aQ9LmdatsddKuuy22eHgV1o7XDtnAwzMqv5BNSnw46pjqM9FTyO5t2+hUmtYVJQoR3JlcFu4TiBVmLz+OjBRSqAGrE6A/9Y8wv4lpo3NW7HtMPd+Rw7Xai3TdbUVVnjp6PZtk2Na/1bbYdRSL3vmjSWN/XD5/+5Wlm+zs2aqitt+MlqnVBv9p+wA49GyuiFpA4td5xIGgpi8+CJdi4Xwka88Pyi5fyTvBPq5Xm/u95v+62DNH63n1cmzpQ/WH77/EmvoH0YQ+cOXuBfcaWMWur4Vfcu8O4856849/Tq6T8AAAD//wMAUGlJrBcJAAA=", "base64"));
  res.end();

  return __filename;
};
