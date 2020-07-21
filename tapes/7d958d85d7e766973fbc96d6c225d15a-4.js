var path = require("path");

/**
 * GET /coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:08:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03.. : 202 12841us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03.. : 200 12681us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWS2/bRhC+51cQujYr7/uhm+0UhZHELWDnVOSwj6HNViKFFeXGCPzfM6Roi5ZsV65RtDosBM5+s/N989j9/q4oJlWaFLNiEmWQoUyMUFlGIm1wxGvLcREpJGFlpGLyvgPUfgE95NjndOPzn0XIAKmqrzb2BKuYq2VbNXW/7fIaiugzFL5ORbnZWTRl0a7Del4lqFvfwuoeu/S5XeC3s01YTGltJYtEsQhEJhmJ99QRCp6zQKmj0u9Cfw1/QGw7+Hc0bCke7GtM8md0el1cxArqOET5BMezOs7XPbEraObN1e37Yglt7v/2vJd+7qGp2/7LvZcFtD751m9DxY8xA+qRPuDSu+aUU0IN4eySiplQM6WnlsqfKP4GR4haL9PhqB50h+tdr1xs1nkFn6pViwQG3S11wmktiJNWEym6SlAlJZ5br5SliUY32Uc/J/3B7hCS4QqdZZ+HUPLxCaPs3grfWsi1nw/Gb4+M8yb6LieDsYxJywiMaOcU1jQeaCUFYl1Zes6tFWYPustgy+EV3sYF9NlXdfGpCkjodmuOTdqYP345Oj09+nB29HlrrFbHsa1u+g1tXsPWUKPK7XpEEQMASqNHOZkl2MOOBKDYxVrYRL30UZnRqX6xXK8GqOaxNDoYEqNHPklgdjgzBFIpOfL0VtotdL5hMGBVMtZSASR6KrtjMQDwQHjUIjguMZiwxS5ztUDsBeSbKsJvTVX3Ak+El9Qqnoh0JS6pxKpgpSMauJbMa3Cs3HpZjeBnadV5+P1AH8XXTckPucYKWtyXiDOMcycJp8IQKUtDLNUa+0Z7cIpGruNkBHuhPA73NC6Py1zVVXtbdA074tri2NlpZvSstzug3m12POq+tYeAN615ebuEga1jSlKc7URoh9XCASegwuKJZYRQUgnUycke+HnOr/A35nxW43TMK5ydD7bdgXreFE09r2q8OprFsqlxrD/m1rVCXse2yZvwhnrYjdCLoKQzlBjX94fxJDDgpOTGRaY88+Gppv1lWnycFqfXsMKkt+NAg88PvauNdXTc02+Yo89eCC9fCUzPqJ1ROeWWPb4StriT2y/YO0NAwXpRWpwQFgzehNIC8YEKEoQKHFJy3OixjxculhfPHnCvP3twcTdkey+jXEqtE+oYuerGlkIxMY3EJ2Gi8hBLpZ/KKDT5CoqT7vLIqbi49n89nVQmlHH/i6SyqTLiP0qqmSqn/q2kFl//4QOoC87MlJpqtfsAerMsfyfKM+e+TZLdR9j5ehEgb17XDw8bvPliNxjPHx7ec1heb0z7Ch6gn54KbcY83qreAdrtn/kW5e7e3f0AAAD//wMA8WpTGb0MAAA=", "base64"));
  res.end();

  return __filename;
};
