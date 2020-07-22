var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:38:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 6673us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 100937us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS2/cOBLH7/kUgq9jJnxTzM3jDDDGJplgncUcFnPgo2hro2411OpsPAN/9y31Q1Y/bKs7O9kJVj74IbFKrGLxXz+x4T9eZNlZqBb1HOZn2evsn9kfeAWvFbH988w5n0ySmlgnciKD4cQLz4hUTilqjBTanZ2vTKZuAkujq2lTV1lTZR9c6aCaNlVZ3dxthkWYh7qYNUU1XY6+bhbxLqtS5qahgGmTlUWCh8EzVzcTvHy1mhBTWueSBaJYACKjDMQ5agkFx5mn1FLp9o1/8f+C0LQOVuE9BHiEv36IP6Hj2+y6nXDAzHUDdoO7moZyEYvpTXYDyyycZzPA7LS/YsAxmx1IEfqZQOOia1x/yu1K1eAaiG/w29I9p5wSagjnH6l4LflrKV8aRX+g+NU5Q7vFLA63W5vdL3/er3O5qpG3xbzBYDZrQaUFjSURQ4S2OALxVnkCMdmkadDBx7ND9k8sx3CXaFTDDTqsXb2eEHxpoJ66koWHMZtrO0N4b8gc6s9FgFlVdGUmnKS54pFIm/BbTJw4lizRwLVkToNl6bCD/dgeojvKa7/cLos6ZG9g/ilj/fuhiqv7IW5dj8U8VJ+hvntTzGelu3vf97MoXVueK3eEZD+7svy3u+vbz4rwaTF7WwW3KeSmXkBvwG1VxutbKNNPX2ZFffcB6qKK2zG301jUnQNx3r+DecKUdYvyK8Cn+Vk34L73pHnjUroui9lann57sTPmrFxPc+1LiZCs0okEFhORjHqSe3CEm2QYD8GZ8LA1OuOnVu0oj/1Vu5hO4cvB9frbP15dXr56c/Xqon+7mF+EpvgMBxJeTHHjNItenJICUBoccYqhMntpiQfKCNUij9RJF5TZerabzBbztbHmIRntDcHZKyxEIYjlzLTbTPIAzOUy7xuXhcdddrdJcTR5TgWQ4KhsH42TAAeEBy285RIn5LfKqS4maH292iUf2l1y0naY9xxcxXVBDPNyoG6wAifrgJLFheRWEk6FIVImQ3KqNeFMO7CKBq57ctEaPlUvR3nr18vHupgWzV3WqvPZ9h6omx3tRu+6Pwamu+qOD3zQ8m7yKx3+eDeDdexUKArcMBKjxzqKkIjTLicOq14myrxPPcV9MH8qA0f57Gfgl2lZTOHV1RS7ZD1H5eiL2k5r/bHCDlwtDZadtJiSlVEWqsmsmmLbn+/H326kehGaql4FsJGVr++86iWl7ITO27N7ovO+X0w81CsXUuebZ+CeCG1GOoW/rsoOng6FMiwQqbcDGRbGxurFJoj78x2cFBFpkuZolzNPpA4oWjoIkqN+uCSlw73zHE764kmcfIv0iLWQzWq4RTio6iJkTTHpIO0AUqZgGeOShMgdkQmVzDpAYaNC5zGnNudx3/gJhhnurx/mO9fcwgS7URjEk74t/9miXhW/m83KAmKG9rc986/BSGFOw8iN3YiRI0aOGDli5IiRI0aOGLkJ/C+FkXQj93sY2d04nSGVOYUhlXmOIakEJ9qCANniFaBseZtH1CApDYhkndpnyEtXYsdazHFTdKHtVsJF/OymASEqFilBjQtfrFrcqiwauFn3oREkh5fztwTJAElxSJ540Uq4VJRYqylhBn/l2lnb8c1QkDzC5VMg+dDHHgXJ3pARJEeQHEHy/xgknVPWxZSIBe6JNCKSHC8Qz72i2kujHB8Okkd569fLz0WJaRrEkYww+zRHCsLkAI60TEkqc0+EtlhGHAIWFFZVSAF8wt5PrTyWI4/yuX3yNAAg31cbfOyA8VvyonxpLT+pwXZ2w3hRm9z+yceO+qRjR/3ssaPhUiivAr7vWJQXKlFevHBEGRQInpQFv6neA8goHkfGX4vfXR1JCZ+hHLHxO8XG8fzxgIMRGx+mMWLjiI3fAzaO54/j+eNXd95vdv7IhDIddf05PGnEKTy5sXqcJ3NBhfTUEY/SiVsDodJryQkHa/NkOAPVEcM+T7LHefJHNy/CCJLfKUgGKnzwTrQqQfE9UzHiBdNtL0Ot4KATP/r8cbjLp0DyeY4cMXLEyBEjR4xcbR/wBiIu6TIg7YhtETCaxJwSiiXd+7DiOYw8yttWGynCrYNy4pYf2m2dLu6SJLOEUcLE4yTZjuCo8ANIMiksGoCceJYH7HXcE08D2nuarIi5MrQX/jCSPMrnPkk+c/x4ABkHE+P+XDngFnc8EeujxZYjI/EB0VebpBLXOUS/3UuxEDd9AokuZwyIMBa1IVCL2oCxOupoHqxMIB7Rhugm8/Ps8rbG/uWyi22Z+KpOu/RxGB8GYiS+Be0CxECU7CwfxLxbl0NVolnQziJlcY86ZGggudSCaGmlS5HRHPQjmffGRe0w1UZEgaoMFEUI90SegohegjLwyMuauyur+jx7V3yCv1TW+f6/sQzMOt/5R5Znsm5DyPMcFEk6mjbr2DoYE0RQbCp58qC31b+fde7AiwgosUoT6XIsda5wETiqG3hg2hz+YOHC3bg6YtZdvIHdHf6/T72xp6Z+Y7mf+v/SZx1GnvZZx8Zu4LspF1I99m76zhXdO9jp76Y5PeXdNKe776arvJ41VePKv0Oo6hUKqBf3/wEAAP//AwB2nF413DcAAA==", "base64"));
  res.end();

  return __filename;
};
