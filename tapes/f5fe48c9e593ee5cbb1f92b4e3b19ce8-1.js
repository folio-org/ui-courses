var path = require("path");

/**
 * GET /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b
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
 * referer: http://localhost:3001/cr/reserves/66cec8e4-9ae6-4729-8119-3f341e0e67c3/410287b8-02ab-4b31-90e5-a09f8e073db3/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b : 202 77143us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b : 200 36820us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/cNhC951cQe625S1KUSPrm2kljxE6MdtNLkcOQHNpqtdJC0sY1jPz3jnZXq63jADF6alEdBEGc9+bjDYd8fMXYrIwzdspmWMRgYpFzwKzgusjoKwfHfRGCNrkOufKzkwEQmk3b4VXZ9WV9e7lDF0XAYFFzB0hooxy3UjqepUxLFFiYkO3QZY+rPUgKEaXwiaskCAQguEeZc+Fd7lV0yWE2ulyXGC8JOgAf6Rf99NCGJuKWygl6tra0QGbrpoX24aoJ0JdNvfeXQix0QMkL53KubRLcaoHcupRAKWszI7/J8cH/jqGf3E+VewEtgWpY7UK+hrJmV6UfnEzLh4zefVycny8uLhfX02LZnYW+/Lw16NsNTgs1idFvjnKlAFCIACSitFx7TUqikFwUmY0CNITcHHmF1XrTjVqqkEzhDQ8BKJ+YZdwpaTjGpBXlCVbbCVrtMthj82isFRnyAEIPbikABOQqFJl3SlMwfsKu23JF2F+w/VwGvGnKelvgWQZa2FxFrl2iV0yKg0yOF6gKLaFAJ9PE0h3BL2M3MPz2nRzs05bky170NbYrqLHu/0HjfMXxf+P89xuHaljtqn/GOiT9+zKwe/RsCBTbsTdCU/dt6Td90+69PX6l7lndN3XZbE7YT21527Rld6zxAb98WONYdhQuahO5y1FRwBa4zaTnyRjjLaYiWvlNjiX+uSvdsxbvKaojT8o7TXpIngKdDNo6Ko3JBCfdMFfUtahgti/MM6n9CjV7C+0KK6xP2JsW6j/+lbmxT+Ne3/iq3O3yJ3JuV7o7kn67Yy+X7KbF7kjKdQVhV5VzWPm2jLd4wq6h6+ZsMorQ44d083cvs6CE0JNR2+xb7+bg80mYAarq/Wbl99Es3+VS5HNrrczZnJ3llg2M7M2SXb8+u3g9duumLbf2d32/Pl0s7u/v51UT5rfN5wVFE8t20TdhgaFcCyPtgjiMUEIrN7/rV9XIgvWGdsAU/cRe7aIBXyFrEhukobHZsaauxrm2nU9Qh1Gk3KfMCKQ5SSOG2sEFbhXdOnJpBHgFAjL3FPq23Y/b4Yc4PEqNhndNFekmM04xzFIqJM0u72BoOR1o/wfHY5C2MJEGgnRDhbd7//ieAPVxO6G2aGTGpUkZ14G+wCXLVWZ17r2SNEpnzzM8PTDG4+K7KY/33M8IQ3KsbZrVFPUKe6DmgiMnoUXqtnhBr5030pILw5VdSnma56fSzY1WPxxftPaYHx8+0ig9lM/bUJic+2AEzz1YTnPdc++TB4giejhItFnHF/vcY17uc0j+1Ze/AAAA//8DAIx2tLrzCgAA", "base64"));
  res.end();

  return __filename;
};
