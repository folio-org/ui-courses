var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves.. : 202 6675us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves.. : 200 46088us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYW08bRxR+z68Y+aUPZey57szwZkjS0oQEpaRSVeVhLmdgW3vX2l2HoCj/vcdeg9cCIkjTplUxkmW8c+7ffOeDj08IGTXQQvMe2hHZJ7+Rj/gVflmm1a+jomA8FtFTEFpQZVWmQbpAHQOxemkpitFebxLrZdPCy7LtyursqLfn0UIKPlAfdKAq6YJ66QrKQlQ2JpBe+iv7soP5xswILoIvPLUpZqq05zSA8zRn760yUSkht2EXJaQjNF6Z9unj18E3sU7QZ8HwZ3MeH+HRRd345vJlHX1X1tUmao6pUBE4LZzTWGxm1CoG1DqMK4S10nzOy+vwO8RumMS2jw9yjWaVn/epH/uyIi/LsAo0PHBd24u3k8PDydOjyfHwcdlOY1e+Xx/pmiUMH1U4oG45qBsTAcZwyF5zS1VQDrvNOGWFtIl55aM2O7H9fLFsN8aFiNkUwdAYPVaWpKROcEMhZSWwYpyXHRrP+lo21joZa5kEGj1Tq9CYBHigIhYyOKEwoTC0XjTlHK1/RsCWEU7qslo3fCS9YlaLRJXL+JayoJ5nRwsQheK+AMfz0E87cHCUNtC/nxfybuPm0zUUFtDMfQVV95cAdcPLI6D+r4DCfs76aUxJC4iKrozkAgJZpQvNFjOxrrqmDMuubnb4e3fm06qrq7Je7pEfmvKsbsp2d/LXPk4vF3A1BmAuKZOo04DMnyySseSBZmNMsJCLZPlnvJzCh76Rd5x5hbkNoongFE6I0xy9Qzg7bJSRjOIkQQvENAg/um7TrUX+4ivyo2/mMINqjzxvfPXHf7pK8m7LDMswK3tOuDHk9bP2HEGxvt1Hp+QEF/rOgBczH/seHfp5aMp0Bnvk2LftmAyPJd/B63yyG2sUBWNqeKypN9A8uY58S8rRz2avlvOwyev0heZMj621XJMxmWpLVn7J81Ny/Gz69NkW0cumXFucd91ifzK5uLgYz+o4PqvfTzCrVDaTro4TiOWCGW4n6MUwwZRw4/NuPhvejMVlXzN+IGL7AKolXqFtgcPQsz5ZH2ZA6kxWk0Q+bkldzbZkuSY8X8WrqeqQpWGABIyMhRhykVoBimpumA/CM1Q8W+PzepZQH12xHcicC44cF5xfAVBFZIjoaIrcFiYhZXDX93fDDkPd4ashuEBZMFxSbrKkKuIn77KlQlqlQxAciXd0l4+bq+Zq0TzA7fA2vgG/KpM0dT3fzX8OnUeo+Z1gsQFEX3qKb31UnCllhgpxysS+cvtcjIWx3zN8DWbcWx1cvkX63bQhWC+zxWWDWUeqMXnUngz7K3UQkJITphiMfJG+IO7G6uFx+0Y8GXDYVZul9Fnk5ChubkYVNx4RsQaR1nnV5qzhbxDaqcgm8oBLUkhDVaGBOgWJIqJxN4VYqJAeILSVls6agmklrdz261FwP+qjf0Rwaxmz00WmkSf8u5GzQG0AT4XJhgtsmImDa/wgwf0g17viq4IPn0fS9BFJ315pH6yFUUd+qitov2vJgQ+XOIFzIKn0TQntUFvcR3U/L2G96vfIjytN+m+RiNNZbiCR6Zi8qOrFTmu3QvEVXJBf62ZHQd+uDwXjxT0E4Mkb3ArF+Ehpa8mBUY6sDe+Qa/JOsWVySDpZRQuROFXYK+qi0rSIgRvpnA3XC+um2MrBBMMyp8E6vC0IUtQyDm8LqIA9FyHofD+xBTZIjrCiElczVXIFN1GgbEtOchaDSAy+QGw9wO0QaYdrQUCu/5H3NfQWGxeGfQO9dVvcr6C3emSOurrzszcQ66ZnDvHk058AAAD//wMAschgpwQVAAA=", "base64"));
  res.end();

  return __filename;
};
