var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTIwNiwidGVuYW50IjoiZGlrdSJ9.VEA8ID_FQfcqIMlntaG-O8FSdQrpCEXytIUWBtOz830
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:40:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 12596us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 82383us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS2/cOBLH7/kUgq9jJnxTzM3jDDDGJplgncUcFnPgo2hro2411OpsPAN/9y31Q1Y/bKs7O9kJVj74IbFKrGLxXz+x4T9eZNlZqBb1HOZn2evsn9kfeAWvFbH988w5n0ySmlgnciKD4cQLz4hUTilqjBTanZ2vTKZuAkujq2lTV1lTZR9c6aCaNlVZ3dxthkWYh7qYNUU1XY6+bhbxLqtS5qahgGmTlUWCh8EzVzcTvHy1mhBTWueSBaJYACKjDMQ5agkFx5mn1FLp9o1/8f+C0LQOVuE9BHiEv36IP6Hj2+y6nXDAzHUDdoO7moZyEYvpTXYDyyycZzPA7LS/YsAxmx1IEfqZQOOia1x/yu1K1eAaiG/w29I9p5wSagjnH6l4LflrKV8aRX+g+NU5Q7vFLA63W5vdL3/er3O5qpG3xbzBYDZrQaUFjSURQ4S2OALxVnkCMdmkadDBx7ND9k8sx3CXaFTDDTqsXb2eEHxpoJ66koWHMZtrO0N4b8gc6s9FgFlVdGUmnKS54pFIm/BbTJw4lizRwLVkToNl6bCD/dgeojvKa7/cLos6ZG9g/ilj/fuhiqv7IW5dj8U8VJ+hvntTzGelu3vf97MoXVueK3eEZD+7svy3u+vbz4rwaTF7WwW3KeSmXkBvwG1VxutbKNNPX2ZFffcB6qKK2zG301jUnQNx3r+DecKUdYvyK8Cn+Vk34L73pHnjUroui9lann57sTPmrFxPc+1LiZCs0okEFhORjHqSe3CEm2QYD8GZ8LA1OuOnVu0oj/1Vu5hO4cvB9frbP15dXr56c/Xqon+7mF+EpvgMBxJeTHHjNItenJICUBoccYqhMntpiQfKCNUij9RJF5TZerabzBbztbHmIRntDcHZKyxEIYjlzLTbTPIAzOUy7xuXhcdddrdJcTR5TgWQ4KhsH42TAAeEBy285RIn5LfKqS4maH292iUf2l1y0naY9xxcxXVBDPNyoG6wAifrgJLFheRWEk6FIVImQ3KqNeFMO7CKBq57ctEaPlUvR3nr18vHupgWzV3WqvPZ9h6omx3tRu+6Pwamu+qOD3zQ8m7yKx3+eDeDdexUKArcMBKjxzqKkIjTLicOq14myrxPPcV9MH8qA0f57Gfgl2lZTOHV1RS7ZD1H5eiL2k5r/bHCDlwtDZadtJiSlVEWqsmsmmLbn+/H326kehGaql4FsJGVrw==", "base64"));
  res.write(new Buffer("77zqJaXshM7bs3ui875fTDzUKxdS55tn4J4IbUY6hb+uyg6eDoUyLBCptwMZFsbG6sUmiPvzHZwUEWmS5miXM0+kDihaOgiSo364JKXDvfMcTvriSZx8i/SItZDNarhFOKjqImRNMekg7QBSpmAZ45KEyB2RCZXMOkBho0LnMac253Hf+AmGGe6vH+Y719zCBLtRGMSTvi3/2aJeFb+bzcoCYob2tz3zr8FIYU7DyI3diJEjRo4YOWLkiJEjRo4YuQn8L4WRdCP3exjZ3TidIZU5hSGVeY4hqQQn2oIA2eIVoGx5m0fUICkNiGSd2mfIS1dix1rMcVN0oe1WwkX87KYBISoWKUGNC1+sWtyqLBq4WfehESSHl/O3BMkASXFInnjRSrhUlFirKWEGf+XaWdvxzVCQPMLlUyD50MceBcnekBEkR5AcQfL/GCSdU9bFlIgF7ok0IpIcLxDPvaLaS6McHw6SR3nr18vPRYlpGsSRjDD7NEcKwuQAjrRMSSpzT4S2WEYcAhYUVlVIAXzC3k+tPJYjj/K5ffI0ACDfVxt87IDxW/KifGktP6nBdnbDeFGb3P7Jx476pGNH/eyxo+FSKK8Cvu9YlBcqUV68cEQZFAielAW/qd4DyCgeR8Zfi99dHUkJn6EcsfE7xcbx/PGAgxEbH6YxYuOIjd8DNo7nj+P541d33m92/siEMh11/Tk8acQpPLmxepwnc0GF9NQRj9KJWwOh0mvJCQdr82Q4A9URwz5Pssd58kc3L8IIkt8pSAYqfPBOtCpB8T1TMeIF020vQ63goBM/+vxxuMunQPJ5jhwxcsTIESNHjFxtH/AGIi7pMiDtiG0RMJrEnBKKJd37sOI5jDzK21YbKcKtg3Lilh/abZ0u7pIks4RRwsTjJNmO4KjwA0gyKSwagJx4lgfsddwTTwPae5qsiLkytBf+MJI8yuc+ST5z/HgAGQcT4/5cOeAWdzwR66PFliMj8QHRV5ukEtc5RL/dS7EQN30CiS5nDIgwFrUhUIvagLE66mgerEwgHtGG6Cbz8+zytsb+5bKLbZn4qk679HEYHwZiJL4F7QLEQJTsLB/EvFuXQ1WiWdDOImVxjzpkaCC51IJoaaVLkdEc9COZ98ZF7TDVRkSBqgwURQj3RJ6CiF6CMvDIy5q7K6v6PHtXfIK/VNb5/r+xDMw63/lHlmeybkPI8xwUSTqaNuvYOhgTRFBsKnnyoLfVv5917sCLCCixShPpcix1rnAROKobeGDaHP5g4cLduDpi1l28gd0d/r9PvbGnpn5juZ/6/9JnHUae9lnHxm7guykXUj32bvrOFd072Onvpjk95d00p7vvpqu8njVV48q/Q6jqFQqoF/f/AQAA//8DAHacXjXcNwAA", "base64"));
  res.end();

  return __filename;
};
