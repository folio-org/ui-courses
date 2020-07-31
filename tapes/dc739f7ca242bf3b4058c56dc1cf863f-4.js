var path = require("path");

/**
 * GET /coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de.. : 202 7032us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de.. : 200 16241us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWy27bRhTd5ysIbZuRZ4bz1M52isJI4hawsyqymMelzVYihRHlxgj87718yKIlOZHjFq0WhMDLc+ae+5yvb7JsUsZJNssm1AqunRFEaa2JMDoSH31OtOS5LARlPMLkbQuo3AI6yKlL8c6lPzOfAGJZ3fT2CKuQymVT1lX32fUtZMElyFwVs6L/MquLrFn79byMUDWugdUGu3SpWeC7i94tJpUyggUiWQAiogjEOWoJBceZp9RS4Xahv/o/IDQt/CsathKP5hqL/BlJb7OrUEIVBi8PaLyownzdCbuBel7f3L/NltCk7m+ne+nmDuqq6d5sWBbQuOgat3UVX4YEGI/4Dh8dNaecEqpJzq5pPsvlTMhpbsVPFH8DEaLWy/gcivFZTmfMThljh1Fn959WkIaIeyqMV+CI4EYSaUVODJWMeCUEd4UUytJJR/CAz4cu9qFepxV8KFcNhmDgcT4aE0QkJoIlQnlDDLeM0BAKy1ThjR0K6gn6ueQdTYeQBDdIltxGUjo9Y5RtrPClgVS5+WD88sQ4r4NrszoYixCVCMCIslZiVxSUGEGBGFsUjnNjcr0H3VWw1fACtnEJfnRllX0oPQq635pDHXvz+08n5+cn7y5OPm6N5eo0NOVd90GT1rA1VBjlZj2SiA4ApcERJ5khwgtLPFAMrMpNpE64IPXoVLdYrlcDVPFQaOU1CcGhnpjnxHKmCcRCcNSJ48RsofNewYCVURtDcyDBUdEeiw6AA8KDyr3lAp3xW+wylQvEXkG6KwP8VpdVF+BJ7gQ1kkcibIGPWHDiWGGJAq4EcwosK7YsqxH8Iq5aht+P5Mg+9yU/5BoraLEpEasZ51YQTnMcnKLQ2C9KEc6UAytp4CpMRrBvlMfxTOPyuE5lVTb3WdvyI60NDq6dcYDMavsFVLvjAo/atPbgcN+a1/dLGNRaJkU7IEiuLFYLB5yhEosnFAF8QQXgHpnsgZ/X/AK+seaLCudrWuH0fbTtjuTLOqureVnh8qkXy7rCxfBUW9sKaR2aOvXuDfWw56EUVmh0Luq2RpzDERSwc4NgETek9CLaAx7+Ms3eT7PzW1hh0puxo96lx95V2lg67ulXzNFnV8q3l0q7HvRM6qmV/Ol62OJeviBGHN9ZTc+e/brl1K+nNtt7GdWOSR+UJioyzCiDglgvCoJtpoxrRw+jhzIKdbqB7KxdHilmV7fur8NJZbnU9n+RVDkVTP8XSTUzyqY5Ff9WUrPPP3iFGgJDp5yZncvQq8NyRKUfOvefvYRdrhceUn8/f7zY4OYL7WC8fLy6z2F525v2I3hE/NiUmieXyddG74jY7Z/5msg9vHn4GwAA//8=", "base64"));
  res.write(new Buffer("AwDpb5Fb/wwAAA==", "base64"));
  res.end();

  return __filename;
};
