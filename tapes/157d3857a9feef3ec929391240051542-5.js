var path = require("path");

/**
 * GET /coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc?unused=0
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 202 6720us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 200 13061us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVTW/bOBC991cIvm6ZUCRFkb6l7R6MbbML1D0VPQzJUaJdWzIoKahR5L/v6MOR7aQLZ+sDYXD4Huc9zQx/vEmSRRkWyTJZCDCpyEAyAU4xhRkwyLxkzpuQBuBFHvzibQ+oYIsD5AZieID4T3LfNQ6qEPfjgYCNj+WuLetqOLe+x8RDxITOJAViKKu7pC6StnPdpgxYtdBic8DuILZb2luNeaWZ1kalnmWpR6aC8gyAW8YRROo4t1zBOfRP9zf6tof/oMCs8WKuY5W/E+l98tmXWPkpyxc0riq/6QZhd1hv6rv922SHbRz+Drp3sAGsq3bYObBssYUALcyp0qaPSH6ED7SMX4YLznjORLrmcimzZaavDFe/cfpNRITqduFy1AB6pPVxcM7XXWzwY9m0JODguzcYHDgGLnPkVaYZSKsZd14ZH1CCnHw/Qf/U+kvpCBLxjsgixCmV5uZdytNDFL+3GCvYTMHvJ8FN7aH/JlOw8EErjynT1mZMmYIzozgyY4sChDBG5s+g5wpmDa9gOy6gT1BWycfSkaD9HPZ1GMN/fLl+//76w+r60xwsmxvflg/DgTZ2OAcqcrntjiRSAsi577s1NUw5ZZlDnjKupQkcFPgsP7oVtruumaBa+CLXLmfeA+kJUjIr0pxhKJQgnWCUmaGbUcGEzUJuDJfIPHDVX0sJICATXktnhaJk3IzdxXJL2M8YH0qPf9VlNRi8kKC4yURgyha0hEIwSAvLNAqtUtBo02JmaY7gq9D0DF8v5Ei+jSU/fWuqoO2hRGyeCmEVE1zmTKkiZ4ZrTX2jAW3GvdB+cQT7j/K4nOm4PNaxrMp2n/QNe6S1pbFz1szErOcTWJ03O111aO0p4bE11/sdTmptmimujGNSW6oWgb6f8sB84dEVXCG3avEM/HPNr+A71ryqaDrGhmbnU+x8oN7WSV1tyoqejnq7qysa66fa+laInW/rOKY31cO3/zVaxZqLpTLLTF7pTJ+N1gn1bv+FKnAy0hmQhaE+M5jTe6IM0mTj9FzKzAkMwYpcXzCcx3vtUugra/OXR/rr731xvN92W4dxfLifRib1lO8tv3160ze4ux9Dzx28wD91JeXJ0/Sr7l3knc7lyZ2/4tzjm8d/AQAA//8DAAa4KGwYCQAA", "base64"));
  res.end();

  return __filename;
};
