var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:51:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/reserves.. : 200 8986us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWW2/bNhR+768g/LKHhTZJUbzkzU3bNWvTBl02YBj6wMtholWWDElOGhT97zuyHFvuJW26G4bFD4ZN8jvXj4ffuweETBpoobmEdkIOyW/kHS7hYhH7v5PcgMl1BMoiN1SqyKhXTFNtOHDDAtg8TA4GSKhXTQvPi7YrqvPjAc+ZtKC0oDGgERl0oN7mnkJMNikWVPDxBl90sNjAoko6cO+oE5lGtzlQKyHSlGmw3Acld7BQLwuIxwjuoUP4uOxdE+oIa3Myz6zRiuUyM9kGh0cQsqwb11w/r4PrirraeM+zkGyuEg08Jio589R4cFTopLkIwenAbrHy0v8OoRsHM6rnXUwjrHKLIYV5VcHb8c42uWc/z46OZo+OZ/PxdtHOQ1dcro90zQrGWxV2qFuNEpYMgLGA5c77LntpqQfGKVOZicxJF3K959stlqt2A1YiJK28phh9TmXMMmoF132LpQjAnZFmDC4L31frptZRG8MyoMEx2bvGIMABFUFl3gqJAfkxetkUC0T/hIwtApzWRbWu9CRzkplcRCptwq+YBHU8WapAKMmdQtqksZ12ZOA4brj/dVbI642Z91sOLKFZuAqq7k8x6SMr90z63zEJ61kO3XjYFPEcOvJjXUH7XUseOn+NHbgAEgvXFDivt6BQV11T+FVXN3tTfL/xTwooI47mA/IUSqj2KbA18AKPn10vYVNV4a3EAnKagrNUGot56IxRLDTkwqYEwk1usiCvd1xe+bIYWPxRROu99gKagY9laiCS+ZQ8q+rlXmmXpQtD7C/givxaN2/Gu9F18DKd7juaCMbVpwIKrixfrBZ+4/X0FT4Hanosc2PIQy0tWQNHJV1erw8e4Q8yejR6zrsq3NRHJx/zaCRVInIqsVbUBplTfNi4zqw1fvtSjcBPm80t7hfY7jMK4KJeN+vmbiSvvWaJU28sXizkM3XW4sUC6bE9wvs8DWlvuDR+l1w16igYn3FkIM28wIiznplCWRqjzTgLXkQGk8/Z+Hgi3cyjO5gdk/JoLRrIVoPspbCAzmGX3Z6/0AA2Pj7Cr03D0R8TlIszlh0KdijMlEn5PWOHbDRcV8t4B9gQxoM+lA8UEYoZoaOVVGc4n2QUglrjGNU4XqSNmcptfpsiCizzwbuMOoUoKXJsacZVPyG59wJUEvwTiogzVGDMJyoSU1Q6xHrgOWW9nBLRJgvZHRSR7dl2r4Tu369/SgmlEJXEGlBlLdbGJEYNFpsafEKcEMZkmn+jErqT6TGTTlxRkedDE24n1Mk9of59QTQnLSAruiKQK/CkDxcf8zuKoHnV1VVRrw7ID01xXjdF+xkdNHoxFTAbpY7U5iAwdOOowWFNk9baG0gqGn6LlTN4OxTyb1BcB59M8hdXkaeuWfQy74A8aVz15j+d5TfpypPjM3KKumKvwTtFeeQWfq2wD8iJa9sp+bK0DIIxOT7W1Btqnm49f1l5nj3LOcunxhiekymZ54b0dsmTM3LyeP7o8UiyNMUacdF1y8PZ7OrqalrWYXpeX84wqlg0s64OMwjFkqH6mKEVzQSTwk4vukW5swPVCm/KLo+xh3KIyfkSSJ1I3zAcuy2pq3I3Ez8UvblPmWaAcxYHE1LFBmoESJpzzZwXjrnMfrXoFeKzoheylBTHqeet6ykpA86MgJoycKN0xCHC7V+kGIUy36IYd7CdYhxaP+nqzpWvINTNMAPFg/d/AAAA//8DAHF2mlVvEwAA", "base64"));
  res.end();

  return __filename;
};
