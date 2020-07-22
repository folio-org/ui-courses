var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326 : 202 8589us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326 : 200 61413us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWS2/bOBC+91cQBva0oU1SpETlliZ9BG0eaN3dw6KHITlKtJUlQ5KTBkX++44sy7LzKNLLAgusbQiCyW9mOPPN8PvxirFJHibskE3iWEgfe+CojOLa6oy7KHU8Fai6j4lUPDnoAL5a1Q1+zJs2L69Oe7T0FoMDx8EZx3UwMYcojblwXlsfMIIIenTe4mIDSpRUDmLgNviMawOSO0yBZxmA1YnXWkU9aFlXHpuG/H1uoV01GwPWZcqCJ1/eBzKQGG4JzKPYWCMcSmvk0wYu3N/o287ID1oes/BiiwQpYYFr0Cf0UBQYhoWAja/zZZtX5d46gzKwVQk3kBfgChz2L7CFAC2M4XRZrhFaDCf0WBtRQgkuEq7kXESHkTk08dRGye+CPhtDhFotw8tRa9A9Pe/XOWpaqNsHSM2V6TOI5UOrMVdiYMQyx3BKld3JqIPaV6EHSEHf4bi0bVnVUN99rDx0SRroYKwy1nmO3kuupbPEJiJklrhYCqtUloVnbTws6FjSXzC7W9SLT3+evmNv5u/PL9jxybhhe6YPX2bHx7OT09nFuJg3R77Nb9Yb2nqF40JJ3dKudk6rBaIQFAcYabl2OiXyC0lpjWwQoMGbZMcrLJZb2sfKZ0nsEu49GGq2KOKpkgnHkGnlUVLz2BFa5K5L1AZrQmKtiJB7oOKSWwoAAbnyceRSpSkYN2KXdb4g7Gesb3KPl1VerlM8iUALaxR1SJrRI2SKg8xSHqOKtYQYU5mNVpod+GloOgt/vdAG+9qTdFP2JdYLKLFsH1An8yHWdHIepyllxGaCW0owtyk1r1KWKL+l3yMbz1PnF8zuUucM8pJ97NP+M+Kc/U+cf4s4lMOiz/4Ra5Dq3+ae3aJjXaBYD9zwVdnWuVu1Vb3x9uNRdY/KtirzanXA3tX5VVXnzW6Nt/j53RKHtKNIg04CTw3S1Ros3XiRdDSBksRZzOJg5bM25vi9T92TO84pqh1PyqWa6iF55iElwqaUmiSiWR0hGkWsRQWbsX/wxNH+gJK9h3qBBZYH7G0N5bf/5NnY16HXV67I+y5/UM71SnNNpV937OmcXdYkEHYYXIDvs3IMC1fn4QoP2Bk0zZSNm7rL9iK73Pcy8UoIPW6qqw31Lrc+H4TZyYPz1cJtopl/MFKYqbVWGjZlR8ayziJ7O2dnb45O3gxsXdX5ev912y4PZ7Pb29tpUfnpVXUzo2hCXs/ays/Q50uRSDsjGwld3Fql0+t2UYycX97156QXpoa/sVxRY4yHGp0WfZCdgmFVxrqK0TRtWFUWw7hbjy0o/VA747IoEUjjkyYPsST13CrU3MhEgFMgSCwO0OuqCKTThpmFUZbFkiaVS6EjmPbU7T7lwUsbJ4HaX6aTrYbZ0QVQ7pIHtcVERlwmWcS1pzdIM8tVZLVxTkkanJOnLTwnFV9scl8qQnc4VlfVYoy6KwHNkut2XoP/Rus73iCEvCsCFJ8pDHppvjQY9u+J0cCePM5cbDPTafju0tK6U9ppFOgh4jRI42ieT5628JM78eVGdw/e9wgL1YIux50GeiCVzyu2jYQB/Ypi3PyUTn6hUk6U2FfKL9TKW9wGdr9/q1QtFJdwhc1pOahfEyePVoeKaTVqEE89Q6OjW+5l6m9bgQJ3C1p8DU3eL9HIwJpdrWg+3Vb1t5E3jxPyfDLUXKhDnR5KNVWJ3U3GgHl9R3HWG+44C1FmSVYQxz03RHVSzYK6MDJOYQipSuLtSHgukVuf6dSYdM/nBvPrPrvDv7r/BwAA//8DAIfEqe26DgAA", "base64"));
  res.end();

  return __filename;
};
