var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves.. : 202 7085us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves.. : 200 32968us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxX227cNhB9z1cQC/Sp4S5JkRLpN8eXxEh8QbxpCxR5GF5kq9FKC0pr1wj87x3tVfIN9lOBogtjrRU5h8OZM4fDn+8IGcXQhHgTmhHZI3+Sn/gKXxa++zlSVicmzSRNpM+oZNZQgMzS1DCQaaodM270fmXi6kVswpeiaYvq6mRlD9Zr7aSn2gdDZWo11cJwypzLDU9zq03Y2BdtmK3NOGOeM5tTkbOUSgBGbeCK4vrKCm9yE5KN2TzWLjQNrnnZQrto1hDa5kKDSyk456lUmaI6z4EmqdKKIZpW/DmIc/tXcG0Hs4rGLh5vQEWjCmZhafY1OCjL4HdDPjQuFvO2qKvBDAKVJ4sKbqAowZZhZzELLXhooe9WF/UYoA3+EL+WQIIJRllGEz5lyV6i9qQay0T+yvCzBUO7xdy/3m5tdr/8f7+OWtNCbB/YSyrUJqqheoieUsF2bJkXwZ9gzgdxthBd7VdGZuDzCKfO6wjx7kvtoAvcOtOZ0kJp62hwjlPJkWNgHdA8sylnWog89y+gPE72Lt1vgu4n/Pzr7ycfydH009k5OTjsT9nu7vO3ycHB5PBkct4fLpp91xY3yyltXIT+UIWV1S56O5csBMbQH1BcU2mlwTJhWF1poj0WKDiVDdaG2XxbIKlweZbajDoHikqfJNQIntHgcylc4KCl7huXhe3CtrZWPtOaJYE6wKTj0uhEgECFSxNrhESHbN96HosZWl+i0hQuXNRFtQz5KAHJtBJYSybHL58LCjw3NA0ilRzSYHjex2l6ACd+rVmvQyHfNzTekmEe4gyqULUPKJU7n0qMAeqcwdjonFGNwabaYLELoXWS9cr8EcpLlHoTdJ9Sp1BU5MsqCS8T6vR/Qv1bhMJ4lqts7JMmICvawpHbYEnnbog7zri6amNhF20dBwfvMOf7VVtXRb14Tz7G4qqORTPM/BZjejcPmzQEZrzMPDUqCHRdA9UJt6hZWWZ1yFOv+Qso0/D3KpDPzDlD33qrCWskZojT3AEe8NpgoLIEtT4JQQnkdBDwRNo2bNwG8Mnt/wYV+QRxFspQvSfHEaof/6H951A22wCQ7zs5WdiyWAnJI2Ysx5prZNJSEk6m5ALbtwEr5iW4VfgOYGZj4a/Ce3IKTTMm/Wnd6X+eXwzXGjnBmOxPi/WazxfblZ9wuetdzhYzu/br4uvR8ckf08+KMzXWWnNFxmRfadKhk+MpOT3aPzy6/HaMs3YlsYjF0vq6bed7k8nt7e24rN34qr6ZoIe+iJO2dpPgijnLuJ4gVoZdhRRmfN3Oyh3OTV0u1gTCx7HoF938brXN+bin36HC+XEXhO53361y+XbatWOkzklHBhT7htRVuVPipZpC5TbEUDZPMhZQ3VEOkYbGYecbJFU8Y2AFMEjMY+NPcX1MdC/Y9iN6m7iuS4+d6kZ1Q5LnKUettQY6ukuHSuUM9Y7rNPMoXdyMBn1brwOCqk/lIHXIeEJ5lidUOnwCk2sqEi2VtYLjATB6DuP5lvkNsMOWGbptkljXs6H/XRZRDa/baQT3A+cMVgXviy6TUF6iQ/jQfGuCf3j67UAGl4bcpjpXxlLTHclSpqgdJsHbi2Gp8RxvQywZPYfx4qn/FuB+GFYFSnw9w+N/UL8PLhBnNdn6QwD/yrI//enbwyvvDwljD+8Pr7xBbC23hvePz8y6hfICrkJzUm3uAyrNnhjfZFKKfu/lsBhRyboJq6b9l15rBnczHP4ATbEaRAULkVwtUDRv6/hjyKyngvRSgLjYS/Qey8ZK8WGANlYf7tDnuGaXZVLbNKAaCK2oMjKhmilObSqlgFxJvFX3dOf58K7W5XKM9Hmw7trq7eu+2yRnreursOO1tI6rroi/u/8HAAD//wMAEI50si8QAAA=", "base64"));
  res.end();

  return __filename;
};
