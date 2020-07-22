var path = require("path");

/**
 * POST /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 135
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves : 202 37767us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves : 201 61033us");
  res.setHeader("location", "6601c6ca-e252-484f-b39b-90e222225326");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANRUS4/bNhC+51cQvta0+ZJI7m3bJO2i2XQPbi9FD0NyuEtUlgRK7tYI9r+XsuS1E6SHoKfKgCFQ8z3mwfn0hpBVCityQ1Z1zbivPVAUlaDKqEidtI5ahmJ6Kinq1XoC+O6QB/yQhjG1j3czmnuDwYGj4CpHVahqCtLWlDmvjA8oQcKMTiPuF5AWXDiogZrgI1UVcOrQAo0RwCjtlRLyLNknDHcFOgE/laNy6CD7LuCsz8rvFFs+lLC+y5CPHzoPY+raRS/6UCuPnNbWViXFyKhRDKmxRVEIY6R+5egx76HFdvwPHGMam9neLRmw0I3Jk2d0pM9pj/kc5rt2zMkdxi4PU/TvS4LlUwv7haAduzZ1hzX5MafHLqdhQX+O3x17XIzWyGxQOlBbYelnMKXMkjsatdbOYKyD4f/KscO/xxPLVyM+FldXSsJZ5WvJafRgS0msoKAlo0wiVqLUBQWsTjQv66+k9hu05CfIe2ywXZP3Gdo//5e5kT/Oo3NwTZqH5ot2nr4MT6X1E/f93Y48ZByuWtk34Oeq/AB7l1N4xDW5h2HYkEtQgBF/iQ+fq6y8YExdgnK3jN7Dq+YXNj00zcfD3i1udj9XnFUbYwyvyIbcVoZMjOT9jty/u3377jyth5xO8U/j2N9st8/Pz5um85vH7q9tcRNS3o6d36JPPdPcbAuHZoIpYTdP4765zHx/nPMsL0Scj7E9lItxSeoi2swmwTVIukimjpXLOZCubY7nqNQOI7T+3LvKRakZlgvqy1pTwXpqBCpacc3ACWBlQ52hT10TyjYbFijKGGsuJXUWpgFTngL3lgbPTa2DCpHbqZ4vp+10tW+gvR4eVAY1l5TrKKny5Q1sNFRIoyrnBGcwd2y1xxFKW+Fqu/mMpc/hbfmbyUoVKdNUiB0TN8recLER2nzHyvNa1Rnz/fHXAfNiwhmQ0TBOixVPq+Ko7GhWMpOVExiCFbp+LXMfvllzwXy75lS+Ny//AAAA//8DAHeGS/iDBgAA", "base64"));
  res.end();

  return __filename;
};
