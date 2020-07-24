var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves.. : 202 6342us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves.. : 200 25437us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/cNhC+51cQC/RU0yEpkqJ8c+w8jMYPJE57KHIYkkNHza60kLROjcD/vaN9Sn7BPhUFujC0a3G+4eibmY+jn68YmzTYYnON7YQdsD/ZT7pFN8vY/zsJeaFtUIFL6QTXucq5L/LIbbA25TYKq+NkbwUJ9aJp8WPZdmV1dbLCGxFSllzkCgThvbLcJxF58sFLcMGpmG3wZYezNaxAkCkKz4UyBdcYPS8MZBy9SgUIm6ESG9i8qQO2Le35uYNu0a5dOJ+Ug2A5hBC5NrnhLiXgmTXOCI/SGfmYi3P/F4aud7NiY8fHC7wSqIIZLmGfMMB0inG3FLENTTnvyroaWTCoIltUcA3lFPwUd4gZdhChg2FYPesNQofxmC5LR0oowUXOlb4U2YEWBzLfz7P8V0GfrTPCLebx+bg17Hb5fbtmre2g6e7gNVdmwypWd71bvktbqOclxhPK+YhnD02o4wp0KLXL8izTmbA7Hggxrxtobj7WAXr+1gnPjVPG+cAxBMm19I6DD8BT7q0UTqmU4hNe7ud8l/UXuR7m/fzTHyfv2dvLD2fn7Oh4aLJ9yN++vD46en188vp8uFy2h6Err5cmXbPA4VJFDdYtBk+uBaIQFA8Y6ajJdME9Ckl8Zy4K0BBMPtobZvNtn1gVqJF9zkMAw3XMMl4omXOMSauA1KTaDcHT0ve0bfo75s6JDHkAyj1tTUEgIFfBZr5QmgLyQ/S8KWeE/kyCUwa8qMtqSfkkAy2cUdRSRaJLTIqTAhTcorJagsVCpqGfduDgJK6l63le2NdNNW+LYY7NDCqsujsllUK0mjjgtiiIG5cEd0Q2dwX1vFKOqnPQ7fe8PFVSL3I9LKlTKCv2cZWEpwvq9P+C+rcKivicrjWMtUhV0ZWB/UDP+nCx2dVMqKuuKf2iq5vR+TvO+WHV1VVZL/bY+6a8qpuyHWd+6+PyZo6bNKAooqajujCoKHQH3GXSk2bluXeYbHTyCS+X+PeKyEdszii2wW7KF5oyJHkKQAe2K4ioPCPJzxCNoppGBdtTZO/Bh/wdKvYBmhlOsdpj7xqovv+nn5J93SnDwk/LlSbcS/Jyrf1GRbHs7pNLdkED2SjB8ymEFUdHMPNNGa9wj51C2+6zoVl/np+ni/Fek6CE0EOzpl6X5sV25wdC7qeRs8XMr+O6/M1IYfadc9KwfXZoHOv9sneX7PTt4fHbYUXPb5aQgTJitaCq38V0vZ+Lg6reJ/XbGfUyBFXYcG18ynKBJIukI5TZInCnUHMjcwGexknIivvgD81aX/sbYvtRamf6rZ5GmvQ2coVZSlaSSPkC+grSgVo8FDwG6WweqedlMRnNPYPRAaphdaB2mMuMyzxlXAf6BUVyXGVOG++VJOWcPObj8ZHzBW7HIyf0j8maup6N4+8zRDLyrbtsIHwnm9GuEGPZJwqmnykg+tF+aTHePTZ2TkZDd/LWJVPQtN6fZVpbascii3QRtojSeJL2yWM+njwuX+J4SMOqHVisZ3RujrrlzgB+VrNtPAzobzodmj88fT9z/rbS3Z2/nzmBb5Fb4O39w6buYHoBV9ieVJt52tj8gfVNJrUaDi2BRhbSjd5gNe3+Mphp4GZGy2+gLVeLpBfYsKsFSdSPuvk+rqyHSHqKIGkPTH6g9D4dpmOCNqg3NxRzs66uSC0vjE48Dxq5sTQWeMgCT1bQe6akOYHkd+vhCXpX+2aKXnDMnX3XqJfv+2qTnLWKrmin17q6WY0T8tXtPwAAAP//AwCPiUhNbw8AAA==", "base64"));
  res.end();

  return __filename;
};
