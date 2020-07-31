var path = require("path");

/**
 * POST /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 135
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves : 202 7070us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves : 201 80036us");
  res.setHeader("location", "4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANxUS2/cNhC+51cQe+1yl6QoifTNbezGaJwa7aYoUPQwJIc2Ub1AceMuAv/3UrvaR4z0EPRWHQRpON83r4/z+Q0hi+AW5IospLOV585RKIyislZAFbecMm49lxWHCsRiOQFsv40jvg9jCt3j3QGttAYEVlPkylFpbUWNcIKC4146w40r3AEdErYziDPmODOeCs8qKgEYNchLyowuM1p7jcUx5BDQ3WXoBPycTdloINre4Z5Ks/zsffNBdhv6CHH3vreQQt/N8bx1lbTIaaV1SaXyjCrJkCrtPQihVFHzI8eAsYUOu/QfOFJIzSG9azJipkvBkmc0ZIihxXh0s32XYjDb1Mdx8v5jLjAfddDOBF3qu9Bvl+THGB77GMYZ/SV+sxtwTrRCpp2sHdUlCirdNM+CG+rrujYKfeUU/1eODf6d9ixf9fiQs7qIJIyWtio49RZ0bonOY68LRlmBWIrcFxRw5plqz6OZkClucW9+WX6l5N+gI+8gtthgtyS3Ebq//gc1e2jGuWjy51FrW9OEg8pezX9/Mj5lrUxB7+825CHieDH7oQF7aNcP0JoY3CMuyT2M44qcnRwk/Nk/fBllYQVj8uwU+1mrD6eYr9K00DQftq2Zs3n45eb27vfNTyVn5UopxUuyItelIhMvud2Q+5vrtze/frzNXkepb2PYY59SGq7W6+fn51XT29Vj/2mdM3MhrlNv12jDwGqu1pmpZoJJoVdPqW2OLJ/6ZjuLJH+uxPkiDbtDacPqdAmxy77xXPb0f06n2ds2YBokvSfTwPOdH0nfNbujV+jGBJ09jr40vqgZ5ntvLWSRaUuVQElLXjMwAhgU+jX0XZy37GRgp0ecUn/qG5e36TjHwML7ihcFNRomIUtLgVtNneWqqp10nutpPC/77Xix76C7FClKhTUvKK99kZdy/gLtFRWFkqUxgjM4CGDRYoKsErjYrjZilo17m18HsjwImhd8wTe8vJLsitUrzorvLhfvjPl+93HEOCdhmFSmwtwpoUpaallQxUpOTSWlAF/KSp/w28F9c8wZ8+0xp/a9efkHAAD//w==", "base64"));
  res.write(new Buffer("AwDgMFDPAwcAAA==", "base64"));
  res.end();

  return __filename;
};
