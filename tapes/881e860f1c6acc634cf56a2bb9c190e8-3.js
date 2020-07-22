var path = require("path");

/**
 * GET /coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d?unused=9999
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d.. : 202 6873us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d.. : 200 13905us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxW32/bNhB+718h+HWlQ1IkReYtSYctaJsNaPo09OFEHhNtsmTQctCgyP/esy1Hip2kTjNg84Ng8Pjd3Xc/+e1Nlk2qMMmOs0mpAzfKWqaEjUx5oxkoxZmK0ojcCIcmTN6uAA3McA05gRRuIP2TlQkxVM3VRh5w4VM176q2WV+7vMbMQ8IMmpDFzc2sjVm3LJd1FbDpoMPFFjuH1M3o7HzjltDGWCU808IjU0F5BsAd4whSlJw7rmAX+kf5N/puBf9GgoHiwbrGJH8lpdfZJ19h43svH+F43vh6uSZ2hW3dXt2+zebYpfXfNe851IBt061Ptlpm2EGADgZX6dAnpHiEd/RZq5ZccsYLJuUlz4+VPFZqWmj+C6dfr4hQy3k4HLUG3dH3bh053y7TAj9Ui44I9HH3MUcrrGCm8DlTRufMIXoWSum1wqBc1JN99FOhP1gdQRJekbIEqXclnZwKLrZS/NphaqDuhV8fCOvWwyonvTD6YJRHsuqcZspGzqziyKyLEaS0Ni/2oLsMBg4v0DYuoI9QNdmHqiRCt4PYt2Ejfv/56Ozs6N350cdBWC1OfFfdrC90aYmDoKEod8sRRXIAOffAQAvq3VI5ViIXjJvcBg4KvC5GVmE2Xy56qJE+FqYsmPdAfEJOOZGiYBiiksQTrLIDtN4w6LE6FNbyHJkHrlZmyQEEZNKbvHRSkTPlgJ2nakbYT5huKo9/tlWzDvAkB8WtloFR+ukTomQgomMGpVECDDoRBy2LEfw8LFYa/jpQR/ZlU/J9rqmCZtsScYWQ0ikmeV4wpWLBLDeGSWEAneZeGj8ZwZ4pj8M1jcvjMlVN1d1mq4Ydce1o7Ow0M2k2ww1sdpudTG1bu3d405qXt3Ps2TqhFVe2ZLlxVC2SOhA0FY+PHsvIFXKnJnvgpzm/QN+Y83lD0zEtaHbey3YH6kWbtU1dNbQ62tm8bWisP+S2aoW09F2bNu719bDroeJa6UjjBhysCrXMqT8krQAoOA2OXIMpHvHw96quVyvrFGsaDMOFEtJ95wqZKz3u6FdM0SfXwfMLQeTHuTsWciqUebgQBtzp7WfqnG0B6OiV5iWVSimZ5qFgkAfPLAVGKYhUqPlYxzNr5VnbPe7ltnsVd32u9/LJBRYYvWXGID1TgCYXCM+Zid4H1KL0CI/k87dp9n6anV3jgpq4GxfeOKOmsI7/LzKqpsbo/yijj9v+lzKaffnJt8/GOW6m1smdt8+rw/LjoDxq93Uh2X1/XSxnJabNw/r+TUNLz69m4sX9m7vG+fVGtB/BA+JXTI170K6vjd4Bsdu3+ZrI3b25+w4AAP//AwBDggPouAwAAA==", "base64"));
  res.end();

  return __filename;
};
