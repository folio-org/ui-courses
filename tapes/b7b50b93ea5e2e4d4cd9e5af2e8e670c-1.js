var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courses.. : 202 13632us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 217840us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxaWXPbRhJ+969A6XU18dyH3mQ7VVGt7bhWTuVhax/m6JGwBgkWCGqtpPzft8ETPCSRsuNNavEikZjpxnRPH1938/cXRXEW61kzhelZcVH8s/gdn+CzMnVfz6gEL1KwBCT3RAKzJDibSIxSGhDZeWXOzhckYz+COdFrX8VZNZsWnLLVYoJpbMpJW9bj+Z7LdOfHEVKRypyhgXFb+m6x8ONUlOMWbpr59w39xDftCPddLU7GcnSMcUli6k6WPRDnQRJJhbbJUmd52if+OfwbYtsxWMi5kfQEfn1Z3/n2FkZ41DjdrO4KezWO1SyV45si1O1tMZk1MJfTTyZViTpA+tse+Qhan3zr+8fsrqkB30J6g3/mXDnljFBBKPtI2YWiF0r9QAX9G6UXlK65IeFskk4gXNJ9mf//stTgwkTeltMWpVjeQISsOORAgsiJSKkocU5Twgx+5No7l9bXv0X/8CWcwBKJGrhBho1vlgeCzy00Y1+xsNmzerazhfe2TKG5KyNM6nJtXMJLahXHI7juHClz4ll2RAPXknkNjuXDDPZl20h3EtcthyqbWLyB6aeC9ddjnRbrMW09T+U01nfQ3L8pp5PK37/v85lVCz+bsyOk+MlX1X/8fZ9+UsZPs8nbOvqVBbfNDHobbusqXd9ClX/8PCmb+w/QlHXalrk7xqxZMxDn/ZXOv5u79aX8CvBperbe8KX3pmnrc76uyskyOv3rxc6es2p5zCUvJWJ2SmcSWcpEMhqIDeAJN9kwHqM3ceMba+LHbu0kjv1buxyP4fPB+/r7Ly9fv3755urlZX+5nF7GtryDAwovx+g47awnp6QAlEZPvMKYLIN0JABFt9bCJuqlj+vAvHi3H01m0yWx5jEbHQyGca/QEIUgjjNDIGXJIzBvpe0TV2VAL7tfqTgZa6kAEj2V3avxEIDhkkctguMSDxS2zKkpR0h9vfCSD52XPMsdpj0GV2lpEMdxOWA3aIGjpUDeK+dTzsQBD0QakYjFByTwoKgO0ijPz7YIH7OXk7j17eWnskI1YdLkW/aELtC0/dhNMXAT5vp7YJx2dgjC5Nme0Isw/PF+AkvRHVOSShuI0A7NiENEg0KrijlCyJj9qZNnB8gfU8BJPPsKuBoXE2im66Q/X93Npe/roh5X5RiKWI8m9RiT+r6cnb80s9jWzeKgq+jxLVIs4/Z5KXZD+EiKfT8bBWgWXmqsW70EjT92KliH8uu6gtXaIWGOE0XKHVGOE2RN9mIlxpfzHeDofcgmS40gSqARRMMxpwdGpPJKUWOk0H4POF6N26Yu2rr44CsP9bitq/pmlZr2LOG6naX7os4IpWKJZlBUZYbN5l28qLS2kkWiWASMExKt0lNHKHjOAqWOSr9P/AhePJ5fX8QfkfFtcd0dOMJRkPEG5lo4R99A7XQf59hxckBFX4kdOTvJsJm5kPaCmR+s1A8Svrr/BeP28g6yDDElxHPeSUmUcIq4KCIR3nibkpERE+TR+JNR6UCjYSUk60wsYm2iQpfFXNY06hjWFcCR+PMElo/hz/g0/uxtGfDngD8H/Pl/jD+zw4vkThJOhcGqNxtiqdaEM+3BKRq57oWLp/DnSdz69vKxKcdlexwARe76cQCKL6RHAFAqFAVuGEldl0kmyMRrb4lHq5eZshByL+IeB0BP4tnXwM9zYPnyKBz6quvkLJHoomdFFkQbXDr9zsCUPbP3syE8Dphyqe0fDEzVLhQ5TpA12cPA1AoqZKCeID5FOCoRgwQtOeHgnM2GM1Br1LDf0WQPdzRf+WkZh3bmX7edSUWIwYsuVlAsWxXDioXpLqNhxOCgMz+5nXk8y8fg5NNocgCTA5gcwOQAJhfuA8FAwiudC6Q9cR0QTCYzr4RiWfdmH0+ByZO4bSWSMt56qEZ+PgXcalbu4knmCKOEiYfxZLeDE2qOwJNZodEAWBKYjZjteCCBRqQPNDuRrDK0J/5xePIknvt48olu5gHgeDRuPHBWzaL2DrM9D+gNhkZipRZESyd9Toxa2ALus013JhiftEfhjEgCYwNQdAW8GZujSEGCMvBA4eDvq7o5L96Vn2A7RHxVlp3zOAwejoWRdr+jdSyUtGwbQKwgRA9S9vXuYrTWgiJZJ9PpHUMYY4IIisHN5gB6Owr19c49BJEAXV1pIr0NxHOF18DRyyAA0+Zwv/zS3/gmod59uoFdS/ufK58fwG5HKp/vorcnlM8B85rnmbiQHMolEwkRqz5tsspcW0iBPqB8oYyzjAERxmFCjHhvNqAPeOqpjU5mEA8kxORH0/Pi9W2DKvbF5Z9L99I8W/dr0n3df6sBCj+tzywvuLlgHH1SfJ8+c6/WZVxI9VCt+86X64ruK2rd3e75kbWufrLWFSmbTK0h3LJApMacFXQUxCLE8VliQnD7v97ZGcKE8tEhzNsyA6awYtLALdp73WAN3Jaj9WhjqHT/fJXuMDg5wGCodTfHGGrdodb9K9S6w+BkGJx8C0D6HQcnm/nBLphcLzwfSernTU3001MTw6VQQUU0YATTkkoMPEF4ogyGDp6Vg7Dq8RyYmoiHpya/lr9hDUsquINqGJ4MkHKAlAOkHCDlACkHSDlAygFSFk/3J7sG9h/7Wxz9vP6k3u9PLnR71tatr/4BsW4WnqtefPkvAAAA//8=", "base64"));
  res.write(new Buffer("AwA+qIUriDgAAA==", "base64"));
  res.end();

  return __filename;
};
