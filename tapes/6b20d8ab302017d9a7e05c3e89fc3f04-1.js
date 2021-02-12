var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId=="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId==("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094") and courseListing.termId=="cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b") sortby name
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 11723us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXS2/jNhC+768QfG3Y5UsUlVuaFGjQ3XTR3aKHYg9DchizkSWBktI1FvnvpR+xJccbxGmB9iLD5Hyj+eatr2+ybGabIXbYzbLz7I/sazpJZ8Gt/s60oEIaCsT4ghEpy5wYJTnhWJbaF5xh7mZnG0gNC1yDLqGyQzV0GaPs8dJhZ2No+9DUa5kfoAs2c8F7jFj3AVY3GdQuC3WPt3H9fw9uIfaLJHe9MYt5WzLGJbGOA5EekJSAkkgqlHaalpq7p+BfzJ9o+5WCDck9zRP0jYm+h36Oi2Sq7fa3h0yva1sNLtS3mWn6edYOEdc8oW2rgC5L+PkIvsAeHPQwNnMVo4jQo7tKj7VWTjkjlBPGP1Fxzuk5L75XZf4dpeeU7rQl4NC6E4Bb3MP692HrwU1+vAtdn1hsI2CpMNaAIKCAEslzRoxgilAlmDEclee72E/w3w7CCSoTKOJtUhghbg3CLz3GGqqRyOPRgQTfS3QY74PFtgm71BIgqc65I7L06eE8J8B8SRRyJRkoLJk/ruApsz23k7ROailEm11hd5ex8b1t3Obeusm5C51t7jEur0LXVrC8GesZqk2VrdURkv0EVfUXLMf4Nti7oX3XWHjM3z4OOBKYN5X7OMfK//ilDXH5AWNo3JTzyowh7hSIs/HNqrrj/S4mvyPedbOdwMPoTV0P3n+sQrttTJ/fHMjMqq2ZW125sL7MlSeWOU8ko4Zog0B4kXoXtxYKu6+MHfi5qJ2kcRy1i7rGL0fj9fNvby8v315dv70YX4fuwvbhHo84PNSpbPphxFNSREotEMiZJtLIkhikbFUn2lGQYPNi8m5YtEO3BStufaFMQZL1eUpEIUjJWUHQecktMtBSj8FVMKnGlo8udoXWVCCxQOXq1ckITM2SWyVMyWUyyEzSKYZFQn/cVMmHVZW8qhy6kYJrt02Il2k5kjcpAxePbcwxNAW6FNI1IQWkpKIgrvAMcpEzr/aE1sDn8uUkbZNBEuwcsFpAl3HKytm0DGI/6t6sJIwSJsYyWLsDCU5oMXtCfNOIPy1b3NL3eUoaRE0M0zZNO26IoTbhDfWlcDov6Ij+Hv6cE07SOXbCL3UVapx0s4NRetOk7YC0GLvUxWyzaJs6jfWnPFc1EwfbN3Fj6GS1mdiqmFVQpmnPTaqGglqipRJEyVKCd4xqVJNhmhJx6zpTgFOQyBXCidQbkKZSSJHR3gpnJOYF2qM0P8GyauJZ9j7c4bRF/KMpu9ZxfHl44fqgC/VkfXjhArGH7lv5LipH/F5aq7XGnHjlipXfUwtjTBBBU3PT3qCadqGx3zmgEQ5TqeeKSNCGAM9TGHiqMjTIVCGP92S4heiS38Hd4mGm/efOLwv9WufvoS9zPsc014B7UhpXJl7SEWPRE1X43HOl0Rn6DeeLvCg1Y0hEUaaBaFPctEk1ABSotqX0KL4xEB0surPsch6TiyG7+H/5vixe7fsd9Knvs8//xlKvKX3dUr8HPrPU3wwLg3HzDcSFzB9X9i51zdR1b/ZfOmH3NXaMzMuoyMMG8zIictJcVjS2vp31TQ/Vr2ibuFkK2JuHvwEAAP//AwD6QS0B0g4AAA==", "base64"));
  res.end();

  return __filename;
};
