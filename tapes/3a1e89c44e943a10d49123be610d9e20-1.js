var path = require("path");

/**
 * GET /coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/83d1901e-9727-4ee1-8fb1-35045e9230b2
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/83d1901e-9727-4ee1-8fb1-35045e9230b2/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:17:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/83d1901e-9727-4ee1-8fb1-35045e9230b2 : 202 6422us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/83d1901e-9727-4ee1-8fb1-35045e9230b2 : 200 24593us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/cNhC951cIe+mhGZtf4odvtoMibgLHaJNDUOTAj2GsdlcStNq0CyP/PSOtdqU4LRCjt6I6CALJN2/45nGoh2dFsarSqrgoVlYm7hhHcEYYUIgcbA4cZMlUiU5IFsTq+QCIza7b4utq21f1x5sDmjPlUBsBKSYEFU2E4MoAmLLLmkUdQzqgqx43EyjpbCIPHryQRKlLIleYIEuDjoeo1REUm7bCdEPQAfhAQzQYfBebhGMoVUpnjWalklaOGFpAy9um893+dRN9XzX1xFvKmF2pM0SeMijOAtiAHoTJhosYvYnsH2O8Cb9j7Oc0ZgWfEJZAtd8cUr+sa/xrHj9t6dW78+vr8xc355fzZLW9jH31aVzQdzucJ2qqRr9bbFIxRMYiiVtyCyooBwEZB6alTcwrH0uzYPWbdredoFrEbHQwQDmXoJKU4AQ3QzGViMi9VXaGrqsw6HPUNhlrmUSInqmBlhJAjyCilsEJRcmEGdt21Yawv2L3qYp411T1qOxKesVsKRIol+mVsgDPswONQivuNdkjz1G2C/hN2g4RfvvOGMWHMcjnqdotdhtfY93/C8d8E+N/x/yHHUMarg/qX3VV+oh98XNT4/aHbXHlw540v8ciVb6rcHs0SGzqvqvCrm+6ifnhmxL/VOE6UXt9XrzENdbLYp/At7T47b7FSUcRnCLJOOToHSjrKHsjGZC0WAqXMwq/OuRefDh6dRfW1cGljzIZZ7b32B0ct84dpuLyrHhVN+1CyHbt4yHjW/yzeN90f8xzyff4Jt99TbESjOvHaUS/Xt/uNmFiu/uFGrk+u1GltcWVUa4YQSf52v247Jo+ilOzH/zs63hUw+SQymQVaJE4KFIGXFQl0EXEjXTOhuluWUBfdtO5HAbY/Jyo75uxKEfX52CCYZlDsI4ODHkVvHN0YFAFKoQIoczDVkevLG8SXy/qhjZITu4CGQRlKgfXCe0gJSc5i0Ekhqu/j/C4sxz7yneHXFruerzWiw6Hw0FuPSW+wd5TLf2CJ3ZIxU0v6DUVVZDRDAj1lusLxS+kPZNC/ziod6rbAXO1f0cExz8ALx3d2RlMVAilpmMfvIxAvwwli5z6AHl2wu/a9GTOCfN0zmHzzz5/AQAA//8DAI8rx3ogCQAA", "base64"));
  res.end();

  return __filename;
};
