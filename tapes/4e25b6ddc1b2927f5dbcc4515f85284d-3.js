var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/574e947b-5cdd-4876-b477-45ff145a5959/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 11997us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 96201us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybyXLbSBKG734KhK6jsmtfdJPtjmjF2N2OkTv6MDGHWrIkjCGCAYIaqzv87pMQF4GrSHkZexo+yBJZmUBmZf35VYH881lRnMR62kxgclKcFf8s/sRX8LUydX+eeB+yyVIT54UlMhpOggiMSOWVosZIof3J6cxk5G/g3uhi1DZ10dbFO195qEdtXdVXd4thCSaxKcdtWY/uR1+203RX1Lnwo1jCqC2qMsPD4LFv2ht8+WJ2Q0xpbSWLRLEIRCYZiffUEQqes0Cpo9JvGv8a/g2x7RzMwnsI8Ah//RB/QsfXxWV3wxEztxywHtzFKFbTVI6uiiu4z8JpMQbMTvcrBpyK8ZYUoZ8baH3yre/fcjdTDfgW0mv8ce+eU04JNYTb91ScCXUm5HOh6N8o/ls6Q7vpOO2yY+yM2jPBn3Mjdtm9vPttAs18BkAEG7VRJERDiQreEktFICHk4H2iKXh3Mnfx6f7/T/P5mNXZm3LSYkIW80mlA41llWKCrsAiCU4FAim7rGnUMaSTbfZ7pvRwl2jUwBU6bPwyvI8tNCNfsfgwZvHa2hDeG4L5uS0jjOtyWarCS2oVT0S6jD9S5sSz7IgGriXzGhzL2x1sxvYQ3VFe+yX7qmxi8RomHwrWfz/WafZ+TCuvp3IS61to7l6Xk3Hl737p+5lWvivxmTtCip99Vf3H3/Xtx2X8MB2/qaNfLIa2mUJvwHVdpctrqPJPH8dlc/cOmrJOqzF3tzFtlg7Eaf8dzBOmbDkpvwN8mJwsB3zqXWnS+pwvq3I8l7h/PVsbc1LNb3PuS4mYndKZRJYykYwGYgN4wk02jMfoTXxYJkvjfbN2lMf+rJ2PRvBx63z9/bcXr169eH3x4rz/djk5j215C1sSXo5w4bTTXpySAlAaPfGKoboH6UgAygjVwibqpY/KrFzb34ynk7mx5jEbHQzBu1dYiEIQx5nplpnkEZi30vaNqzLgKrtbpDgZi7IBJHoqu0vjTYAHwqMWwXGJNxRWyqkpb9D6crZK3nWr5EnLYdJzcJHmBXGYly11gxV4Mw8oO5xI7iThVBgiZTYoi1oTzrQHp2jkuicXneG+ejnKW79e3jflqGzvik7hT1bXQNOu6T961/0xMFrvEHhBerIR9UyH39+NYR47xZ4D3DCSUsA6SpCJ19gXPFa9zJRha+gp7oP5vgwc5bOfgV9HVTmCFxcj7LTNBJWjL2pr7flljV28vje478bliMyMiljfjOsRosNkM/5uITXT2NbNLICFrHyJ7q00O6Z7b9rt6by/TG8CNDMXUtvFNXBNxC4jS4W/rKslgG0L5aBANNWrgRwUxtLq2SKIT6drSCoSEim1nR0LROqIoqWjIBb1w2cpPa6dx5A0lHuR9A0SKNZCMW7gGuGgbspYtOXNEvS2YGmOjjEuSUzcE5lRyZwHFDYqtE2WOsvTpvEehjncXz/Mt769hhvsRvEgJg1d+Y+nzaz4/XhclZAKtL/umX8Oigr3pGJe2g0YOWDkgJEDRg4YOWDkgJGLwL8rjKQLud/AyOUbT2dIZp7CkAur3QxJJXjRFQTIDq8AZSs4m1CDpDQgsvNqkyFf+Qo71nSCi2IZ2nolnKdbP4oIUanMGRqc+HLW4mZl0cLVvA8NIHlMOX87kIyQFYccSBCdhEtFiXOaEmbwV669c0u+ORQkj3C5DyQf+thOkOwNGUByAMkBJP/CIOm9cj7lTBzwQKQRiVh8gQQeFNVBGuX54SB5lLd+vfxcVpimgziSEeb2c6QgTB7AkY4pSaUNRGiHZcQhYkFhVcUcIWTs/dTJYznyKJ+rJ08HAOQv9QIfl8D4jXlR8afx4sLuMF7UxrqvfOzI5VOQcWG1GxkNl0IFFXG/41BeqER5CcITZVAgeFYOwqJ6tyCj2I2Mv5d/+CaRCm6hGrDxB8XG4fxxi4MBGx9uY8DGARt/BGwczh+H88cvwZPf5vyRCWWW1PV1eFKwp/CkYI/xpBVUyEA9CSiduDQQKoOWnHBwzmbDGaglMWzyJNvNky/9pIwDSP6gIBmpCDF40akExX2mYiQIprtehlrBQWd+9Pnj4S73geTjHDlg5ICRA0YOGDlbPhAMJJzS+4C0J65DwGQy80oolnXvYcVjGHmUt5U2UsZrD9WNv39ot3K6uE6SzBFGCRO7SbIbwVHhDyDJrLBoACwJzEbsdTyQQCPaB5qdSFYZ2gv/MJI8yucmST5y/LgFGQ8mxs175YBL3PNMXEgOW45MJEREX22yylxbSGG1lz58vaAjOssYEGEcakOkDrUBY/XUUxudzCB2aEPyN5PT4tV1g/3LF+erMvFZnfbex3Z8OBQjjV0HiENRcmH5IObLedlWJZpF7R1SFg+oQ4ZGYqUWREsnfU6MWtA7Mh+MT9pjqo1IAlUZKIoQrgmbo0hBgjKwY7Pm76q6OS3elh/gu8q6cfKJWV9aHpZ1F6O1FhTJOpku69g6GBNEUGwqNgfQq+rfzzr3EEQClFilifQWS50rnASO6gYBmDbbHyyc+yvfJMy6T1ewvsL/56m3XD8x9UvLzdR/ob2p2Li1w/amQh+1N+VCql1707e+XO7BPmNv+qSPx4hHPx6jjAQnTSAqJgQAazQJ0mBhq5xZ99U/pzafdZxjNd765kMRGoBuV7Zrg/r+Goro53u1PBvbff+vnYZpVSbsPHj7ez5qPXwD8P/qG4AuOhUBFUlLJbonqyhLSSeC/R6bP+ppCAsBPHTHe4TLLTve5vzlw/HK5nb349rba7ulHJOWCPxEu+45oc3YQLEJEOty9pxbK8wW473gd4zH1UOUclS8mW009m+a3g6bpu9g0/RXPnsfPrNxqMyjXEt3Js1zZjcPJed2x8v1wa1i97W/Rqvo8VRfdjd46ryC8fVTgWoelX3O1qH18/N5QDa3XffzcnkPdbMiO2nr1lf/gFg3M6nSzz79FwAA//8DABnGI431QQAA", "base64"));
  res.end();

  return __filename;
};
