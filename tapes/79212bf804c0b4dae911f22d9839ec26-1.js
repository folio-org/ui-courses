var path = require("path");

/**
 * GET /coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3?unused=1
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
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
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 202 7287us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 200 13939us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWS2/bOBC+91cIvrZM+BbpW9IuFsG22QWSnhY9DMmRo11bMmg526DIfy/1cKQ4SevU6wNhcPh9nG84D317k2WzMsyyeTaTjHKTO0MoB0ekE4xYiooAtYVBmovgxOxdC6hghR3kDGK4hfhv5iJiKKtFbw+48bFcN2VddceubzDzEDGDKmRFfzKri6zZuu2yDFg10OBmh11DbFZp76J3iymtjWSeKOaRyCA9geQSoQicOUotlbAP/dP9g75p4d+SYZR4MNdU5G+J9Ca78iVWfvDyGY0XlV9uO2ELrJf14u5dtsYmdn873WtYAtZV0+3sWFbYQIAGRlfTpo+Y4hE+pKWj5pRTQnPCzTUVc6HmQp4IRd/S9BuIEmq7Di+hGJsrNpf6hBr2POr87vMG4xBxFM54nSvifE6JcmCIocIR5woHEGhwYGcdwX1a77vY+3obN/ix3DQpBAOP1h69QUksoCYy55YYxiwRhZAMKercDwn1CP3S4x1MlyARF4kswk5SPDtnlO2s+LXBWMFyMH59ZFzWHtpXHYyFD1p6ZERbq4g0BSVGUiTGFgVwbozIn0D3FYwaXsE2TcFPUFbZx9IlQXej2dehN//x+fT9+9MPF6efRmO5OfNNedsdaOIWR0OVotxsJxKTA0ipBwKKmVT40hKHlBGqhQkUJHiVT26F1Xq72T0x90WuXU68h6QnCEEsZznBUEiedIKRZoQuewUDVoXcpLxC4oHK9trkAAIS7rVwlsvkjBux61iuEvYK423p8a+6rLoAzwRIahQPRNoiLaHgBFhhiUauJQONlhUjy2YCvwibluHvAzmyL33KD2+dMmi1SxGbM86tJJyKnEhZ5KletCacaUCrqOfazyawH6TH4UzT9LiOZVU2d1lb8hOtTWpce+0gMevxBFb77SJdRWePdPaleX23xkGtZUpSaRwR2qZs4Zh6qErJ4wuPrqASqZWzJ+CXNb+Cb6r5okr9NW5S932w7bfkyzqrq2VZpeFTr9Z1lQbDY21tKcStb+rYuzfkw76HikupcgGpH4bUeGSeEhVSU9QSdEoYTUG7Zzz8Heu4wOy8bTUxZFc38N94ykF8KF8mVG6nZX1EK31xqvx4rrQTQs1pOyHs4wkx4l4/IyYcP5lOas74ieT8yd3Hzad+QqU1+/KLA3cIDD0Res+548Py86A8e+//O7IvtyuHsf+aexiDqU/6towuHz70lri+6U1PI3hA/NgJp2qq49joHRC7p3ceE7n7N/ffAQAA//8DAMhPProtCwAA", "base64"));
  res.end();

  return __filename;
};
