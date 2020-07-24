var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d") sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:16:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6507us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 68346us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyZS3PcNhKA7/4VLF3XiPEiHr4p9lZFFcdxrb2Vw1YOeDQkrDnkFMlRrE35v29znpyH5JlJdpOUxwdZItBNdKO78TX467OiuArNrO2guypeFv8qfsUn+CzH4c8rI6iQnjrik2ZESlsSryQnHKw1SXMGZbx6vhCp3QTmQq9cFWbVrCsYZavBCF1o87TPTT2f863rcihiTglaqPvshpHC1bHIdQ+37fzvjfDUtf0E590slsVSsIxxSULkjsjkgFgHkkgqlImGWsPjvvCP/t8Q+kHBwsiNmSfoGxv6g+vvYIJLDd1mdNfSmzpUs5jr28I3/V0xnbUwt9NNp1WGWKD83Uh8Ar2LrnfjZQ571ILrIb7GH3OtnHJKqCZcfqDipaQvmf5GGfE3iv/WylBuNo3Hyy3FPs///7z03yI63uSuRxuW/g9U+OCdIE45SiQvGfGCKUKVYN5zUImvd35L/vEtOEElCrVwiwpb1y4XBJ96aGtXjaasHu3M4JsZHbT3OcC0yevAEk5SU/JIpE34IyZOHEuWKOBKMqfAsnRYwb5lG9tO0rqVSbkNxWvoPhZsPB6auBgPcet5zF1o7qF9eJ27aeUe3o71zKpFjs3VEVJ856rqF/cwlp/m8HE2fdMEt4revp3BaMJdU8X3d1Clv3+a5vbhHbS5ids2D8uYtWsF4vl4ZMjt9n69Jz8BfOyu1hM+j97U9S6l91WeLsvSz8925lxVy2UudZUiJFuqRAKLiUhGPTEeHOEaKxcPwemwSYy18FO7dpLG8a5d1zV8Orhf3//zxatXL17fvLgeD+fuOvT5Hg44PNeYNv1sZKekAJQGR1zJDJFeWuKBsiFPTKROulDqrXe7yXTWLYUVD0krrwmuvsRAFIJYzjSBmCQPwJyRZixcZY859rBycdTGUAEkOCqHV+MiAEslD0p4yyUuyG+FU5snKP1+kSXvhiw5Kx26kYKbuAyI47QciBuMwMmqjEUGXkPELZ0bpByxVGgSdWKuFCVLamPQXPCpeDlJ29YxksOdg2riuoJTZq+206DtR8WbWcIoYWI8B+q4M4Njhb/aM3xRiD88TGFpfioxaAAM8cwEPOu4J54GlPc0WRFNqenI/I34U044SefYCT/WVa5hq5rtHKRvG2QDMoW2wyoWmsm0qfFQ37dzyJl2FvqmXSx0C2zGa+WAKe54ItZHi0eOjMQHSETpVCauDES/fZZiIK7OiVJbwxgQoS3WhkAt1ga01VFHTbAygXikNkQ36Z4Xr+5aPL9ccb1dJn7TSTvXcRgfjgII8w0VewBxFEKMJDfFfL0vh6JEsaCcRcriHuuQpoEYqQRR0kqXIqMG1COe99pF5dDVWkSBVRkoFiHMCZOCiF5CqSEc9PwH91A17fPih/wR/lReZ+W5Xl9LHud1G4IxBkqSVNSD1/HoYEwQQfFQMcmD2q7+Y69zB15EwBJbKiKdwVDnJW4Cx+oGHpjS8nC8u1vXRvS6i7ewm+F/vOsNP9f1K8l91xc//x4wb7Q6C+bXck/A/NvZxEO76Hy4kOUK1Tusllht3276m7zuwQ6ZcpQh1u6E91FmrKWerYxYh/QqnKkEhylvCMihaQPEIW9NRLaRUoNI1q1J6EBvyh/vTa/jvasDtmaX9vQv2p5CKjkkRA8xoKEsKbFWITdp/JXjwWPjye3p8Sqfak9HPPVYfzqacmlQLw3qpUH9ihtU50rrYsIOBZB4JSIvMfiAYKuBfZaXunSj+6wvNagnaRvHy3e5QjcVQ3F+qjkdSjcj2w3sdnM6zBCEySOaU8tKSSVyplAWw4hDwIDCqAopgE949lO7Ic4jm9OTdI4dcFMXi77zC/1pM29iz2hOfx9ktPI8ZFzJHYeMShu7esceMr5vqhXi/wZk1PQcZFxJPY6MmktR+jIQOnzJwFjA8uKFI6XGAsFTacGvovcAMorHkfGn/B9sc0gF91BdsPEvio0MowKU5iQG7HRl0AEbCmxy8fCxSdGggl/7/0hsPEHlU9i4udF4FBtHUy7YeMHGCzZ+xdiYLG4kt5Lw4fuDlEkTQ5UinCkHtqSBq1G5+BI2nqRt68a1zXXuj+NG1L5147vPjfhCegQ3UlFS4JqROFwNyQhpuEk0xGHUy0SZ92lUcY/jxpN0FnsfNV4chY/fDufoEiAXxLD3raP7//KkpeddQa7ljuNJNnxM+d/ypCnP4cmV1OM8KWLSiRqUMww7KhWwaKkgiMH64ZKUDnNnjydv6r5tir4p3rnKQeNzUzW3q/NqLyze5AQYC8W0hTuEg6bNoejzBLqNwAUjLxh5wcgLRhYXjLxg5AUjLxj5VWIkl2pzP7eLkeuB8xlS8XMYUvFdhlw49apvelf9A0LTLlJWPvv8XwAAAP//AwAH6b1AjS0AAA==", "base64"));
  res.end();

  return __filename;
};
