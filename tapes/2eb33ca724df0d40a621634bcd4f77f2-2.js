var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 16039us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 105171us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS3PbRhKA7/kVKF1XY8/74ZtspyqudRzX2qkctnKYR4+ENUSwQFBrJeX/vg0+QZGUQCneTdbQQRIx043pnpnurznA798VxVms580MZmfFi+Kfxe94Ba+Vqft4powEJ00gKqZEpDWaBGkMkSpnJpVXTrmz86XIxF/DQujCN+nGN5+K0ACkcnK57pFgFpty2pb1ZNHx4xUU0TdQ+Ekq8rJvUeeinYd5VSaYtL7FcW2kp75pr/Hqm+XgmNLaShaJYhGITDIS76kjFDxngVJHpd8X/in8C2LbKViaujX2BH19c79HxVfFh1jCJG5Ge8DaN5NYzRcmXkJd1Ze358UU2mbx78IDU195qCft4spWzzW0PvnW94fczVoD6J30Gn8t1HPKKaGGcPuRihdCvRDymVD0bxR/NspQbj5Nx+QYe0HtC8GfcSOOyb28/XkGzWoGQAQbtVEkREOJCt4SS0UgIeTgfaIpeHe2UvFl8ffLaj6Wa+5tOWvRISttLjoVwVOipRJEcmAkJJ0I9TRSp5MJQZ4dkj8+pSeoRKEGLlFh49fmNRcvGWXbdvjcQjPx1ar5853mqo6+m+1Vc45Jy4h31M4p3DuZEispEOty9pxbK8wB4X1bttacpLG/RH/05aR4WwY07bbfIdZp2eHvPz9/9er56zfPf+w3l7OL2JY3iy5tM4d+0wQ938575uJAgNLoiVfMEhmkIwEoI1QLm6iXPiqzc29/PZ3PVsKax2x0MCRGj5YlIYjjzBBIWXK02Ftp+8LV0paVtErG4roDEj2V3a1xEOCB8KhFcFzigEJfetqU1yj9AZqbMsL7upwsHH4mvKRWcQx0LuOvlDnxLDuigWvJvAbHcl/PrKfgTVoF0GFail/X22KzAnBtXa+XjjOMcycJpwKDrcwG95XWhDPtwSkauY5nO4L3LptTtPWXzcemnJTtbdGFiB27Wwx5dwIIatf9PjC5G2LwhvRsz+rlRv54O4V1FGBKUmkDEdrZbstiFFa4rGKOEDKVQF1vy27F7/PASTr7HngzwRjdzDCC91rvBvZ3dVFPqnKCyay+ntYTTDL7dnYbppnHtm6WA12tll+fEOYxXEv3QppnzLq9cL2SOz1cD04Vx+/9NVLFu/l1gGbJF72wi3swdhPxbgMfFUyv1o2HfDrAo/YZ43rXqqf7c4A3D933ab7sPPnl/A7UWUGFDNSTkA3DeIC5JGjJCQfnbDacgUp7UPfKV3FezWdFz/d3N8JLPytjkcqcocFNUC4S2gJtMEDCZbP4fBzncnSMcUli4p7IjAHcecB4ToW2yVJnedoXvgfnhuvbzZXtFVzjUOMglgs1wt90voJYP51WJaQC5a964k9BOHF0fw2TG4xfEZdQDF4QrxGYJFfISoLpLoGzEDjozDczPxC/TlB5AL/WuHWcwNYf+bbHKidPlzn59LS+o+C+nHIqLGx3UtnE4jXMPhU7sLZhsZh2rqdyFusbaG5fl7Np5W/f9fXMq+UeW6gjpPjBV9W//Q7jTcv4aT59u8LLAyh3VVfpwxVU+fvP07K5fQ9NWaddm7thzJuNAnHeb+n2dnOzmZNfAD7NzjYdvvTuhNyQ84eqnK6T316WvIPQSsTslM4kspSJZDQQG8ATbjBycWRFE3uhcghCn6Rxp6idTODz/ex8MbLzn4CdcftAMJBwShcGaU9cx73JZOaVUCzrrUEPsvNJ2nbSSBmvPFTXfob4zHaw6i4+M0cYJUwcx+euB8cIPwCfs8JFA2BJYDZiruOIBTSifKDZiWSVoT3zh+HzSTr7TvhpgcUPsHM5IUvGfgQ+74+VA25xzzNxITlMOTIhJUEm2mSVubaQwm4u3WKVUMZZxoAI4zA2ROowNqCtnnpqo5MZxJHYkPz17Lx4ddVg/vLFxW6YeFKmXeg4jA8DAUIbexcgBiLERnIbzDfzcmiVaBa1d0hZPGAcMjQSK7UgWjrpc2LUgj7i+WB80h5dbUQSGJWBYhDCPWFzFClIUAaOVKj+tqqb8+LH8hP8qbxunHyk1zeSw7zuYrTWgiJZJ9N5HVMHY4IIiknF5gB6N/r3vc49BJEAQ6zSRHqsjz1XOAkcoxsEYNocroov/KVvEnrdp0u4u8P/5663d2uowa7fSO67/kmF+uYGSuwNbdDANnLDCmTGhVTHCuTuu8DH1sfb0CDM4Tp1mNTx2pRK8LjlLQHZFW2AOBScTcg2UhoQ2fkNCR2oTfnx2vQi3fhJxNJsLE//ouUpZMUhI3qIDg2losQ5jdxk8F+Oicelk8vT4SrvK097PHWsPu11GQvUsUAdC9RvuED1XjmfMlYogMQrEXmJxQsESw2ss4I0yve+z3qoQD1JW3+9/FBW6KZBZzuM7Baw+2c7gjA5nu38gWc7W/RT/HHIuJYbhoxY67n1PfaQ8UNdrRH/CcjI5WOQkcuHkNFwKVRQkdDuJAPXAoaXIDxRBgMEz8pB2H9GZYOM4jgy/lL+hmUOqeAGqhEb/6LYyHBVgDacpIiVrowmYkGBRS4mH5c1jTqGjf8HYuMJKu/Dxt4J/jFs7HUZsXHExhEbv2Fs/JafCaJCUeCGkdR9NSQT5O6bREs8rnqZKQsh9yLuMG48SWexd6jxfBA+vuzy6Aogl8Swd9Yx+y/zpGaP48m13DCeZN1hytflScEe9RUke4gnRcomU9vJMayodMSgpaMgFuOHz1J63Dt7PPlm0jZ10dbF+8VDvKHsP8S7tyzelhlwLRTTBq4QDuqmjEVbXt/3rPOIkSNGjhg5YuSIkSNGjhg5YuS3gZFc6uOPem8aHs+Q7FHH2OzBY2zvA0Kk1AhVwna5nZMgAiPdK3OKGiOF3ryadowhd18E21sTH9p5uu3elvOT7tWztqgQKo/z4/iu3P/Vu3Ijjx5QMPLodhgjj448OvLoyKMjj/7BPGq/8jE5PfIG4DCpLZIu/XrW1q2v/gGxbpa7Vn/35T8AAAD//w==", "base64"));
  res.write(new Buffer("AwCah+GY9UEAAA==", "base64"));
  res.end();

  return __filename;
};
