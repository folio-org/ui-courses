var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
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

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 6989us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 48239us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYTW/bRhC9+1cQutZb7xeXpG+JHaBG0ySoE+RQ9LAfs/Y2FEmQlBs18H/vUJQoWpZV2W2BoqAPskzum903+2bmwd9Oomhmy0XdQDOLzqNfom/4BJ8F1/0509r4xEtFMi1SIm3CiRGGERnrOKZJIoXSs9MeUug5rEBXRVuXUVtGH3SuoSzaMi9vlptlDhpbh6oNZbFafd0u3DIqfaQLG6Boozx42C6udN3O8fFVfyAWK5VKZknMLBDppCVa04xQ0JwZSjMq9WPwe/Mb2LYL0NPbEnxGvDHFNxj4NrruDmwxc8OCXXJXhc0XLhQ30Q2ssnAaVYDZ6b4iYRdVe1KEcebQaqdbPT5yd1M16BbcJX6swnPKKaEJEewjFeciPpfx9yKT31H8GYIhblG5p3CMn4vsXMrvBaVP4V4vPzVQr2/AUJkaBZpInsYkzqQgKY0ZMUpKrn0sVUZn6xD3q9/36/vodfY2NC0mZHOfVGagUFbOOugEZonJYkPA+cwrapU1brYPf+BKjw+JoBpuMGCtN/Tgawt1oXNmt2s2z3aW8NESzM9dsFCVYZCq0JKmMXdEZh4/nOdEM58RBVxJphVkzO8P8Jjblt2zoo4lexFqG11C8yVi4/e2dP176x48d6Gx5R3Uy8vQVLlevhvHWeS6k3gfjpDoB53nv+vlGF8F+2VRvS2t3hRDWy9gtOC2zN31LeT+zdcq1MsPUIfSPeTcHWNRDwHE6fgN5glTNlzKZ4AvzWxYcD/aqWm199d5qNYt7teTnTWzfH3MdaxYWJ/FyhPLnCeSUUNSg4rniU8Yt1YndlsmA/jQrT0r4vjWXhUFfN17Xz9+Oru4OLu8Ons1fh2aV7YNd7An4aHAwmkXI56SAlBqNdExw+5uZEYMUEaoEqmjWmobJw/21vNq0azBilufKJMQPH2MQhSCZJwlXZlJboHpVKZjcB4MVtlyk2KXpCkVQKymstsaDwEaCLdKmIxLPJB5IKc6zBF93VfJh65KXlQOzSjAlVsL4rgoe3SDCpyvCfkML5JnknAqEiKlT7AtKkU4UxqymFquRu2iAx7Sy7OijfXysQ5FaJdR1+FnD2ugbnf6P0ZX4zVQ7E4I3HDby4fD933447KCNXcqYgo8YcQ5gzpy4IlWOiUaVS89Zcb4Ucfdwg9l4Fkxxxl4X+ShgLOrAidt3WDnGDe1nfH8usQpXq4Aq2kcCtKDIlvOq7JA69A85t8VUr2wbVn3BDZt5Z+Y3oo/OYWPwx2YvO8WcwN1H0KqdLMH1oTtMjJ0+OsyHwzYPirHEUnEQyLH0digTjYk7k93LKlw6EhpmhCeMkOksti0lEUTgv1Deyk11s5fWVITDlrSt+hAUQtRVcMtmoOyDjZqw3wwentsqbcZY1wS6zg6I4+dLNOAjY0KlbqUZil3j8EHPMzx8cY0f9LtLcxxGtmjPKnp5F8t6l78uqryAC5C/O0I/nesaMpeJOYBN9nIyUZONnKykZONnGzkZCM3xP9TNpJu2v0jGzm8eLmHTLOXeMgN6mkPmXApYhNbFG+GTYdKbDpGaBIn2Da4jzMw2SMPeaFznFiLJhJbzrtK+Bz+0LUjOdxBHrngPdR4+aEfc700WrhZz6LJTD5H0pOZnMzkZCYnMzmZyclMTmZyl///wEwyESeD6/pX/ieZ0PQFfnJAbf1kn9dZW7Y6/xlsWfdVK07u/wQAAP//AwCrvkMwUR8AAA==", "base64"));
  res.end();

  return __filename;
};
