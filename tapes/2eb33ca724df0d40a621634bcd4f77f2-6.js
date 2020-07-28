var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7134us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 81022us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyaS3PbRhKA7/4VKF3XE88bGN/8SFVU6ziulVM5bOXQM9MjYQ0SLADUWpvyf98Gn6BISSSdbDZl6KAHMd2Y7unH14B+e5ZlF6GeNy22F9nL7J/Zb/QJfVbG/s+LQnGlPQfmUy6Y1s4wb7VkEp0rUi4FmnjxfCkyhQkuhN5AFebVvM0EF+uLEdvQlLOurKeLNa+hLUMWy5SwwWlXQn8lg2nMymmH183i763wDJpuQusul9sSKTghpGYhSmA6ATIHqJnmyhax4K6QcV/4J/8vDF2vYGnk1swT9A0N/RG6G5zQVkO7vXrf0stpqOaxnF5nvu5ustm8wYWdMJtVJcaM5G8G4hPsIEIHw232Z9QgdBjf0reFVsklZzxnsvjI1UtlXir9nVLub5y+NspIbj6Lx8utxL4sfn5Z+W8ZHe/KtiMbVv4PXPngQTGwwJmWRjCvhGXcKuG9RJvk5uR35B8+ghNUklCD16SwgWa1IfzcYTOFarBk/dG9FXK7osXmtgw4q8tNYCnQvDAyMu0SfYtJMhDJMYvSagEWnUiHFexbtrXtJK07mVQ2IXuL7adMDK+HOi6vh7jzeSzbUN9ic/e2bGcV3L0f6plXyxxbqGMs+wGq6t9wN5SfleHTfPauDrCO3q6Z42DBTV3Fqxus0vefZ2Vz9wGbso67NvfbmDcbBer58Eqf283t5kx+QfzUXmwWfBncqe0gpauqnK3K0q/P7q25qFbbXOkyKiRnbGJBxMS04J4VHoHJnCqXDAHysE2MjfBjp3aSxuGpvZpO8fPB8/r7zy/evHnx9vLFq+Hlsn0VuvIWDzi8nFLadPOBnZojch6AgREF01475pGLPk+KyEFDMPnOvWEym7crYStDyq3PGe3eUCAqxZwUOcOYtAwooNDFULgqPeXY3drFMS8KrpAF4Lq/NW0CqVTKYJV3UtOG/E44NeWEpK+WWfKhz5Kz0qEdKLiMq4A4TsuBuKEInKzLWBToc4x0pAuDLDDHVc5ingQYZUSyW4MWgo/Fy0nadtpIGW4Aqwm0meTCXeymQdMNirdwTHAm1HANTuO9FZIq/MWe4ctC/PFuhivzk6GgQSyYF0WgXic98zyQvOfJqViYnA/M34o/5oSTdA6d8NO0Kqe4U83uNdL3NbEBm2HTUhUL9WRWT6mp79vZ50wzD13dLDe6AzbDvUqkFAeZmPPRUcvRkfmAidk8mSRtgdHv9lIKxHWfMLkrhECmcke1IXBHtYFsBQ68CE4nVA/UhgiT9nn25qah/gXZq90y8VWddqHjMD4cCRA2L+4DxJEIsZHcFvPNuRyKEiuCBUeUJT3VoZwHVmirmNVOQ4qCF2gf8LzPIVogV+cqKqrKyKkIUU4UKajoNZocw0HPf4S7qm6eZz+Wn/D/yuu502d6fSN5nNddCEVRoGHJxrz3OrUOIRRTnJpKkTza3eo/9LoE9CoilVhjmYaCQl0aOgRJ1Q09Cpvrw/EO19BE8jrEa7yf4X+66wtpz3T9RnLf9dmvvwfMG7W3taM2tpF7BObfzycem+XkI5U2a1RvqVpStX2/nW/KzQx2yJTjiorKdw05rqCspZ6tjdiE9DqcuUaglC8Y6n5oQ8Ih74pIbKN1jio52JDQgdlUPjybvoq3MA00mo3j6V90PMVkJCZCD9WjoTacOWeJm3L6VVLjcfHk8fR4lY+NpwOeemg+HSwZB9RxQB0H1G94QAUwDmKiCQWJeDUhLyvoA0ajBs1ZXucGBs+znhpQT9I2jJcfyorclPXF+bHhtC/dgu0OsLvDab9CMaGPGE6dMJpr4kxlHYWRxEABRVEVUkCfqPdztyXOI4fTk3QOHXA5zZZz5xPzab0YYs8YTn8fZDTyPGRcyx2HjDTrufU99pDxqq7WiP8VyCj1Ocgo9VPImEutjDeB8f5NBsUClRevgJmcCoRMxqFfR+8BZFQPI+Mv5X9ozGEV3mI1YuNfFBsFRQXaXLIYaNLVIQ80UNCQS83HJcuDDX7j/yOx8QSVj2Hj9onGg9g4WDJi44iNIzZ+w9iYHB2kdJrJ/v2D1ilnBbeWSWEBneFB2kG5eAobT9K288S1Kadldxw3kvadJ7773Eg35EdwI1eGo8wFi/2jIR0x9U8SCwYU9Tpx4X0aVNzjuPEkndneS40XR+Hj676PrgBySQx77zra/zFPWnEeT67ljuNJ0b9M+WN5UomzHkGKp3hSxZQnXvRygiYqG6ho2aBYQfUDktZAubPHk5fTrqmzrs4+QAVY+7Ku6ut1v9oLi3dlQoqFbNbgDcFB3ZQh68oJtluBESNHjBwxcsTIbMTIESNHjBwx8pvESKnt9vncfYzcXDifIcVZr7HFk6+xATxBpLYEVaroe7tkXnnBtAFjeJ5rZeEphpx2jzLkVTePd1mdKCBCSQGQVQSVD/OjsbbQIjAjAsFG1IEBcMc4ghSec8c17As/Ai/H6xua+D0pvsmu+g0HPAohr3HhheeUJeSd/tdFBswOuOgrWdLwUyJaiJdGvNT2O148mAmv737e/rcNKl8EmxvmQ86Z8VQjqLF4RgXCA0QePbiRR0ceHXl0cGojj448OvLoffGRR/9EHi3+4Nfk3J6DpNzeR9KlXy+6uoPqHxjqZpm15tmX/wIAAP//", "base64"));
  res.write(new Buffer("AwAanf+aIDgAAA==", "base64"));
  res.end();

  return __filename;
};
