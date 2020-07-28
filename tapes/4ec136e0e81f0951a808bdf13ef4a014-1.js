var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 8456us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 50994us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYXW/bNhR9z68Q/LqwIUWKkvLWJgUWrGuLpUUfhj3w4zLhKksCJWd1i/z3XVm2rNhuFmcbMAzKg+NIPJc8l+fee5BvJ1E0M9UiNNDMovPo1+gbPsFn3nZ/zpTSLnVCklzxjAiTxkRzzYhIVJLQNBVcqtlpDynVHFagq7INVdRW0XtVKKjKtiqqm+VmmYXGBF+3vipXq6/bhV1GlYtUaTyUbVR4B9vFtQrtHB9f9QdiiZSZYIYkzAARVhiiFM0JBRUzTWlOhdoHv9O/g2m7AD29LcEj4o0pvsbAt9F1d2CDmRsW7JK7Kk2xsL68iW5glYXTqAbMTvcVCduoPpAijDOHVlnVqvGRu5sKoFqwl/ixCh/TmBKakjj7QPk5T865eMET+gPFnyEY4ha1/R6OsXOanfP4RZzy7+FeLT82ENY3AFxnRqYJ0SalJNEqIxnlmmjttFKWWq3y2TrE/er3/fo+ep298U2LCdncJxU5SJSVNRY6gRmi80QTsC53khpptJ0dwj9ypU8PiaAANxgwqIHelxZCqQpmtms2z3aWxKMlmJ87b6Cu/CBVrgTNktgSkTv8sC4mirmcSIilYEpCztzhAPvctuyOijqW7IUPJrqE5nPExu9NZfv3xj54bn1jqjsIy0vf1IVavh3HWRSqk3gfjpDoR1UUf6jlGF9783lRv6mM2hRDGxYwWnBbFfb6Fgr3+kvtw/I9BF/Zh5y7YyzCEICfjt9gnjBlw6V8AvjczIYF96OdmlY5d134et3ifjvZWTMr1sdcx0q4cXkiHTHMOiIY1STToEicupTFxqjUbMtkAD92a0dFHN/ay7KELwfv66ePZxcXZ5dXZy/Hr33z0rT+Dg4k3JdYOO1ixFNQAEqNIiph2N21yIkGygiVPLNUCWWS9MHeal4vmjVYxsalUqcET5+gEDkneczSrsxEbICpTGRjcOE1Vtlyk2KbZtg2gBhFRbc1HgIUkNhIrvNY4IH0AzkFP0f0dV8l77sqeVY5NKMAV3YtiKdFOaAbVOB8TcjleJFxLkhMeUqEcCm2RSlJzKSCPKEmlqN20QEf08tR0cZ6+RB86dtl1HX42cMaCO1O/8focrwGyt0JgRvS2R7rvg9/WNaw5k5x5kCcMmKtRh1ZcERJnAsKVS8cZTgaRh13C38sA0fFHGfgXVn4Es6uSpy0ocHOMW5qO+P5VYVTvFoBVtPYl6QHRaaa11WJ1qHZ598VUliYtgo9gU1b+SemdyLZMdN7H/fI5H27mGsIfQghs80eWBOmy8jQ4a+rYjBgh6g8iYik8iGRJ9EYUCcbEvenO5aUW3SkNOtwTBMhDTYtaTjJsH8oJ4TC2vkrS6r9o5b0DTpQ1EJUB7hFc1AFb6LWzwejd8CWOpMzFgtibKyIcNjJcgXY2CiXmc1onsV2H/yIh3l6vDHNn1V7C3OcRuZJnlR38q8XoRe/quvCg40QfzuC/x0ryvNniXnATTZyspGTjZxs5GQjJxs52cgN8f+UjaSbdr9nI4cXz/eQLH2Oh9ygvu8h01jwRCcGxZtj06ECm47miiQpto3YJTnofM9DXqgCJ9aiifiW864SPvmvKlhSwB0UkfXOQcDL9/2Y66XRws16Fk1m8hhJT2ZyMpOTmZzM5GQmJzM5mcld/v8DM8l4kg6u69/5nyRnz/GTnO36yT6vs7ZqVfELmCr0VctP7v8EAAD//wMAj9vvt1EfAAA=", "base64"));
  res.end();

  return __filename;
};
