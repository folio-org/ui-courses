var path = require("path");

/**
 * POST /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 135
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves : 202 7074us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves : 201 69075us");
  res.setHeader("location", "77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANRUTXMcJxC9+1dQe/WyCwwMoJsS27EqlqPDxhdXDg00EpX52GJmo6hc+u9mdmektco5uHwKh6kpeO910928L68IWaWwIhdkpXWMVagcVd4zKpFL6iBUtDIAKJTnPtrVeiL4/pAH/JCGMXW3Vye29VZ5BEZrqSoqBXLqQh0oA+aZrYN2Tp7YacR2JnHGAmcuUhFZTSUUukOuKHNWORFstFgtIfcJw1WhTsQvZatsOsi+D3iKz8o6YstBge37DPnhQ+9hTH03x4s+1NKX1GprFZUmMmokQ2psjCCEMZXmi8YecwsdduNPaIxpbE7pXZIBi9yYPLlHR/Y5tZgXmO+7MSd3GPs8TOjP8wXLUQftLNCNfZf6w5r8ltNtn9Mws7/l7x72OCdaI7NB6kCtQkFlMEBNxR2NWmtnMNbB8P/U2OG/41Hlu4iPJauzSMJZ6euK0+jBlpJYQUFXjLIKUYlSFxSwOso8rr9ztU/QkfeQW2ywW5N3Gbq//5d3I38to3NwTToNzYt2Hk+Gu9L6Sfv6akduMg5nrdw34E9V+RVal1O4xTW5hmHYkGdQgBH/iDffRll5wZh8BuV+Hr2bp5gv0vTQNB8PrZuz2f2uOFMbYwxXZEMulSGTInm3I9dvL9+8Xab1kNMRfzeO+4vt9v7+ftP0fnPb/7Mt2YSUt2Pvt+jTnmlutkVDM8GksJu7sW0WFewO5QU8Z/+s3pyyAdcg6SOZWlNe4UD6rnlYUKkbRuj80iTlYqUZlpfoPZRxsJ4agZIqrhk4AQwq+5L6Ps++N22wpyXEArzrm1D8bZhjYBVjzauKOgvTyElPgXtLg+em1kGGyO1U4cejX505EHTn44TSoOYV5ToWm/TlD2w0VFRGKucEZzDbZIsjlEbDmd/5jKXz4U35nMRKXSnTVJgd5xeKXZT2CS5en1vhzPnl4c8B89NVnPG1VtR5zahyYKhhxfidiw4gsODgqVyHffjhmDPnx2NO5Xv1+BUAAP//AwDH6tnVlQYAAA==", "base64"));
  res.end();

  return __filename;
};
