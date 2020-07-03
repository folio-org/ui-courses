var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImEwOWE4M2FkLTNkMmYtNWI5Yi04OTk0LWQ4NzRmMTQ1NDY5NSIsImlhdCI6MTU5Mzc0ODc5MywidGVuYW50IjoiZGlrdSJ9.Moy02GDjk7IIJQTOGxN5PoSKLTfDwf9Xt5ae_TWLBpE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 03 Jul 2020 03:59:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.251:9178/coursereserves/courses.. : 202 6772us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.251:9157/coursereserves/courses.. : 200 151814us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyZTXPbOBKG7/kVLF/H2OCbRG4eZ6rGtUkmtc7WHLbm0AAaNjeUqKKobDxT/u/btCSakmVbUjLZSS1zcGwS3UI3Gm8/gP54kWUnoV40c5yfZK+yf2V/0BN6VsbuzxMAn/KkLXOgCqZDLplXXjBtwBie51pZODldmkxhgndGF9O2qbO2zt5DBVhP27qqr27WwyLOQ1PO2rKe3o2+bBfxJqtTBtNQ4rTNqjLh/eAZNO2EHl8sJySMtYUWgRkRkOmoAwPgjnEEKTznjmt4aPyL/zeGtnOwDO8+wAP8DUP8iRxfZ5fdhANlrh+wHdzFNFSLWE6vsiu8y8JpNkPKTvcrBRyz2Y4UkZ8JthChheGUu5VqEFqMr+nHnXvJJWc8Z1x94OqVKl5J8Tdh1A+c/vXOyG4xi/vbrcxu7/6/XeVyWSNvynlLwazXgmuHlkoihohdcQTmnfEMY3LJ8mCDjye77J9Yjv1dklGDV+SwgWY1IfzcYjOFSoT7MetnW0PkYMgcm09lwFld9mWmQPPCyMi0S/QjJslAJMcsSqsFWHQi7XbwMLb76A7yOiy387IJ2Wucf8zE8H2o4/J9iBvPYzkP9Sdsbl6X81kFN++GfhYVdOW5dMdY9jNU1X/gZmg/K8PHxexNHWBdyG2zwMGA67qKl9dYpZ8+z8rm5j02ZR03Y+6msWh6B+p0+IbyRCnrF+VXxI/zk37A7eCT5i2kdFmVs5U8/fZia8xJtZrmypdRITljEwsiJqYF96zwCEzmKRcyBMjD/dbojZ9atYM8DlftbDrFzzvX6+//fHl+/vL1xcuz4etyfhba8hPuSHg5pY3TLgZxao7IeQAGRpAye+2YRy4Yt6qIHDQEk298Nkxmi/nK2MqQcutzRrM3VIhKMSdF3m0zLQMKKHQxNK5KT7vsZp3imBcFV8gCcN19NE0CAZkMVnknNU3Ib5RTU07I+nK5S953u+So7TAfOLiIq4LYz8uOuqEKnKwCSo4WUjrNJFc50zrlrODWMiksoDM8SDuQi87wqXo5yNuwXj405bRsb7JOnU8290DTbmk3ebfDMTjdVnf6wHst7ye/1OEPNzNcxc6V4ShzwWL0VEcREwMLBQOqep248D4NFPfe/KkMHORzmIFfplU5xZcXU+qSzZyUYyhqW631x5o6cH1ncNdJyylbGmWhnszqKbX9+cP4u43ULEJbN8sA1rLyNQ==", "base64"));
  res.write(new Buffer("Oq/KxVGdt7d7ovO+W0w8NksX2hbrz6A9EbqM9Ap/WVc9PO0KZa9AtNSbgewVRm/1Yh3E7ekWTqpINMmLnMlCeKZtINGyQbGC9AOS1kB75zmc9OWTOPmG6JFqIZs1eE1wUDdlyNpy0kPaDqRMwQkhNQtRAtOJlMwBkrBxZYtYcFfI+ND4CYbZ398wzLfQXuOEulHYiyd9V/6zRbMsfpjNqhJjRvbXA/MvwUgtj8PItd2IkSNGjhg5YuSIkSNGjhi5DvwvhZF8LfcPMLJ/cTxDKnsMQ66tHmdIrhFUVxCoO7xCki3vikgapHWOKjkwDxnyHCrqWIs5bYo+tO1KOIufYBoIomKZEja08OWyxS3LosWrVR8aQfKQcv52IBkwGYnJM686CdeGM+csZyKnX6UF53q+2RckD3D5FEje97FHQXIwZATJESRHkPw/BkkA4yCmxBxKz3SuIivoAfPSG269zg3I/UHyIG/Devm5rChNe3GkYMI9zZGKCb0HRzphNNeFZ8o6KiOJgQqKqiqkgD5R7+dOH8qRB/ncvHnaAyDf1Wt87IHxG/OiPa7B9nb78aLNC/cnXzvqo64d9bPXjrnUyngT6LzjSF64JnnxCpjJSSBkMg79unp3IKN6HBl/LX+HJrIKP2E1YuN3io3j/eMOByM23k9jxMYRG78HbBzvH8f7x6/Bk9/m/lEok/fU9efwpBHH8KQRz/FkobjSngPzJJ20NQgqvdWSSXSuSLkUaHpieMiT4nGe/BHmZRhB8jsFycCVDx5UpxKczplGMK+E7XoZaYVEm+TB94/7u3wKJJ/nyBEjR4wcMXLEyOX2QZ9jpCW9C8gCcx0CxjwJMMqIZAdfVjyHkQd522gjZbgGrCZw96Xdxu3iNkkKxwRnQj1Okt0ISQq/B0kmQ0WDWDAvikC9TnrmeSB7z5NTsTA5H4S/H0ke5PMhST5z/bgDGfcmxodzlUhbHGRizkdHLUdH5gOhr82TSdIWGP1mL6VCXPcJIrpCCGQqd6QNgTvSBooVOPAiOJ1QPaINESbz0+z8uqH+BdnZpkx8Uae987EbH/YECMP5NkDsiRC95b2Y9+uyq0qsCBYcUZb0pEM5D6zQVjGrnYYUBS/QPpJ5n0O0QKnOVVSkyshJhGhPFCmo6DWaHB85rMFNVTen2dvyI/6lsm65PTLrveV+WXchFEWBhiUb8y7r1DqEUExxaipF8mg31X+YdQnoVUSSWGOZhoJKXRpaBEnqhh6FzXd/sXAGV9BEyjrEK9ze4f/71Ct9bOqVfiz1X+lsuv0Vwb5nU60POptKpc1jZ9O3UPZnsC84m7qjzqZu+2y6zOtJW7dQ/QND3SxRwLy4/S8AAAD//wMAC9sL7dw3AAA=", "base64"));
  res.end();

  return __filename;
};
