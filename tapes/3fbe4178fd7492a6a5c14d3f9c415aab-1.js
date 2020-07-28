var path = require("path");

/**
 * POST /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 135
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves : 202 7203us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves : 201 66389us");
  res.setHeader("location", "e6dc7d65-ae36-4635-a5a9-b6cc4754c52b");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANRUTW/cNhC951cQe625y0+R9M1tksZonPqw7aXoYUgObaJaaUFp6xqB/3uoXcneGOkh6Kk8CAL53pvhvOF8fkPIKscVuSQrbGIwsdEUUDZUNbL+aXDUNyEoo1XQwq8uJkLoD2XAj3kYc3d3fWI3TcBgUVEHWNlGOGo5d1QmqTgybEyQJ3YecTeTOGORM5+oSKySABj1yDVl3mkvoksO5RJynzFeV+pE/Fy36qaHEvqIRynH6jpi60GF7fsC5fFjH2DMfTfHSyE2KiCnjXOaKpsYtYohtS4lEMJaafiisceygw678T9ojHlsT+ldkQGr3JgDeUBP9iXvsCyw0Hdjyf4w9mWY0H/MF6xHHexmgW7su9wfLsjPJd/1JQ8z+2v+9nGPiyPIXFQmUqdRUBUtUCu5p8kY4y2mJlr+rxpb/Gc8qnwT8almdRZJeKdCIzlNofaLsk5QMJJRJhG1qHVBAaujzNPFN672O3TkA5QdtthdkPcFur/+l3cjfy6tc/BtPjXNKzuPJ8N9tX7SvrnektuCw5mV+xbCqSo/wc6XHO/wgtzAMKzJCyjCiL+m26+jrIJgTL2ASj+33u1zzFdpBmjbT4edn7PZ/qI502trLddkTa60JZMieb8lN++u3r5buvVQ8hF/P477y83m4eFh3fZhfdf/vanZxFw2Yx82GPKeGW43VcMwwZRw6/tx1y4q2B3qC3jJ/kW9PWUDvkXSJzJZU1/hQPqufVxQuRtG6MJikvZJGob1JYYAtR1coFbUWaS5YeAFMJDuNfVDmefetMGelxAL8L5vY51vwxwDZUoNl5J6B1PLqUCBB0dj4LYxUcXE3VThp+O8OptA0J23EyqLhkvKTZJUhfoHLlkqpFXae8EZnDxc7XCEajSczbtQsDof39bPSazWlTJDhd1yfqn1JXdro8QP56Nw5vz4+NuA5fkq3obGaOqDYVR7sNQy6an3yQNEFj08l+uwj98dc+Z8f8ypfG+evgAAAP//AwCYnpLTlQYAAA==", "base64"));
  res.end();

  return __filename;
};
