var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAxNCwidGVuYW50IjoiZGlrdSJ9.pYJZcQSjLyze0JsznKIdSEhBxrVih9tUNehad7VLNF8
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses.. : 202 6735us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses.. : 200 66361us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxZyXLcRhK96ysQfbXKqn3RjZYmwoyxZcdIEz44fKgli8QIDXQAaI44Dv37JHoF2E2qu+1ZHKYOFAlUJiqzMl++B/z6oihmsVm2HXSz4nXxc/ErXsFrZRr+nFlBhQzUk5ANI1I6RYKWnHBwzmbDGag0e7k2qf0cVkZvfBWX1bIrGGXbmwm62JaLvmzq1ZpvfFfGIpU5Qwt1X/rhTuHrVJR1Dzft6u+98cK3/RzXXa+3xXJ0jHFJYuKeyOyBOA+SSCq0TZY6y9Oh8Q/hHxD7wcE6yH2YZ/gbB/q9729hjluN3f7uw0iv61gtU1nfFKHpb4vFsoVVnH6xqEpIBdrfjszn0Pvkez/e5nBGLfge0lv8sfLKKaeEGsLMBypeC/laqa8Nl19R/LdzhnbLRTrdbmP2efX/503+1tXxXdn1GMMm/5GKEIMXxGtPieSKkSCYJlQLFgIHnfnu5Cf2jx/BGS7RqIUbdNj6drMh+NRDW/tqtGR76cEKvl/RQXtXRlg05a6whJfUKp6IdBl/pMyJZ9kRDVxL5jU4lo87OIxsH9tZXiedVLaxeAvdx4KN78cmre/HNLmeyi42d9Devy27ReXv3439LKt1j63cEVJ866vqn/5+bL8o48fl4rsm+m319u0SRgtumyq9v4Uq/+XTomzvf4S2bNI05mEby3bnQLwc3xl6u73bnclPAB+72W7B59GTut7n/L4qFxtY+uXFgzWzarPNjS8lYnZKZxJZykQyGogN4Ak3iFw8Rm/ivjF2xk+d2lkex6d2Vdfw6eh5/fXvr968efX2+tXV+HbZXcW+vIMjCS9rbJt+OYpTUgBKoydeMUtkkI4EoGzoE5uolz4qM3m2ny+W3cZY85iNDobg7hUWohDEcWYIpCx5BOattGPjqgzYY/fbFCdjLRVAoqdyeDRuAhAqedQiOC5xQ2FSTm05R+v36y75ceiSi9qhGzm4TpuCOM3LkbrBCpxvYSwxCAYSHukqIO2Jo8KQZDLzSiiW9T6gleFT9XKWt8kYKeOth2ruu4JT5mbTNmj7EXgzRxglTIzXQJ0erOCI8LODwNdA/OF+AZvws8KiAbAkMBtx1vFAAo1oH2h2Illl6Cj8vflTSTjL5zgJP9RVWcMEzR4M0ncNcgOygLZDFIvNfNHUONQP4xx6pl3GvmnXG50Qm/FeOWCLe56JC8nhyJGJhAiZaJNV5tpCCtNZioW4nRPKOMsYEGEcYkOkDrEBY/XUUxudzCAewYbk593L4s1ti/PLF1dTmPhNk3bl4zh9OIlA6K8ZVw8JxEkUYmS5B/PduRyrEs2i9g5ZFg+IQ4ZGYqUWREsnfU6MWtCPZD4Yn7THVBuRBKIyUAQh7Ambo0hBgjIQj2b+g7+vmvZl8X35Ef6vss7FpVnfWZ6WdRejtRYUyTqZIes4OhgTRFAcKjYH0FP0H2edewgiAUKs0kR6i6XOFR4CR3SDAEwbebze/Y1vE2bdpxt42OH/+9Qrd2nqt5aHqS9++T3IvFPmIjK/s3uCzL9bzgO0a+XDhVRbqt4hWiLavtvrm3KnwY6FclKOcUhPAzkpvzurF9sgdiW9LWcqwWPLWwJyEG2AdCg4m5DbSGlAZOd3TOiINuWPa9OrdOfriNLsWZ7+QeUpZMUhI/UQAzWUihLnNPImg79yHDwunS1PT3f5lDwd8anH9OloybNAfRaozwL1TyxQvVfOp4wKBZDxSqS8xOIFglIDdVaQRvnR+6wvCdSzvI3r5duywjQVAzg/JU4H6GZkKmCn4nRYIQiTJ4hTx5SkEnmm0A7LiEPEgsKqijlCyDj7qdszzhPF6Vk+xwm4rou17vyCPm1WIvYCcfr7UEZjL6OMW7vTKKM21m2fcUAZ3zfVluL/BsqozSWUUZsvUUakEkIFFQkdvmRgLSC8BOGJMggQPCsHYVu9RyijeJwy/lT+C2UOqeAOqmfa+AeljQyrArThJEVUujKaiIICRS4OH5c1jTqGXf5PpI1nuHyKNu7faDxKG0dLnmnjM218po1/YtqYHR4kd5Lw4fuDlNkQS7UmnGkPTtHI9QguvkQbz/I2eePalnXZn8Yb0fvkje8hb8QH0hN4IxWKAjeMpOHVkEyQhzeJlnisepkpCyGPEPc03niWz+Lgo8ark+jjN8Mc3RDINWM4+NbR/Zf5pKOX8cmt3Wl8kg0fU/6zfNLoS/jk1mrPJ9d5nfVN76u/QWzaddeKF5//DQAA//8DALebsrhJIwAA", "base64"));
  res.end();

  return __filename;
};
