var path = require("path");

/**
 * GET /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves.. : 202 7104us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves.. : 200 49638us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYS2/bRhC+51csdOmhXmmf3F3fbCdp3MSJkToFiiKHfczabCVSIKk4RpD/3pEoS1TtpHYaNC1qHQiK3HnszLfffNKHR4SMGmiheQftiOyTX8kHfIQPy7T8OjImZ5lkoDpGRhVwRYNPkkrrPQgdecxutNebxHrRtPCibLuyOj/u7V10OoJntFBaUiWA05CKRJlnkbkimRDUtX3ZwWxtxhlLnIVMRWYFVR4dBOCasuB0EMllB3Ibdl5COkbjpWmfPj4Ovol1gj4Lhp/1enyFS+d145urF3X0XVlX66g5pkJFTLFwTlNlM6NWMaDW5eyFsFYa/hkvr8JvELthEts63ss1mlV+1qd+4suKvCjDMtBwwWZvz99Mjo4mj48nJ8PXZXsQu/LdaknXLGD4qsIGdYvBvjERYCx66jW3VAXlsNqMU1ZIm5hXPmqzE9vP5ot2bVyImE0RDI3R486SlNQJbiikrATu2Ftlh8bTfi9ra52MtUwCjZ6pZWhMAjxQEQsZnFCYUBhaz5tyhtY/IWDLCKd1Wa0KPpJeMatFosplvKQsqOfZ0QJEobgvwPE89NMOHBynNfTv5oW8Xbv5uIHCHJqZr6Dq/hagbnh5ANT/FVBYz2nfjQPSAqKiKyO5hECW6UKzxUysq64pw6Krmx3+3u35QdXVVVkv9sgPTXleN2W72/mNj7OrOVy3AZhLyiTqNAhM3XpqJQ80G2OChVwkyz/j5Qze94X8xJqXmNsgmghOYYc4zdE7hLPDQhnJKHYStEBMg/CjTZlu3eTPviLPfDODKVR75Gnjq9//07skb7fMsAjTsueEG01evWsvEBSr0318Rk5xoO80eD71sa/RkZ+FpkznsEdOfNuOyXBZ8h28yqe7sUZRMKaGy5p6Dc3TTeRbUo5+On25mIV1XmfPNWd6bK3lmozJgbZk6Zc8PSMnTw4eP9kietGUK4uLrpvvTyaXl5fjaR3H5/W7CWaVymbS1XECsZwzw+0EvRgmmBJufNHNpls/UC3wpGz3MYww7XPyYQqkzmTZMKTdltTVdMuJK17zVbxung5ZGgbIs0hMCBUXqRWgqOaG+SA889LdNH7WrAl7+YBtPkJsl17U04SK6Zr/QOZccGS94PwSkioiZ0RHU+S2MAlJhLu+4mu+GCoRXw3hBsqC4ZJyk1F8RbzzLlsqpFU6BMGRikef8nFz+FyPnnu4HZ7P1+CX2yRNXc92859B5xF8fidYbADxmB7jpY+KXabMUGHPON/XbB/hJLj4flfara0Or94gIW8KGmwsjKYhGkZ18JbihAg0hBy8TywFP2jcYp6+IO7a6v5x+0I8GrDadZm5lUwZhcpXxuWEF4q6AvEGRhshU4EUcj2Bvqb0TkU2kQccm0IaqgoN1ClIFMGP0yrEQoV0D+mNsZ01BdNKWrmt14MEf1BM/4gE1xJ/oeoi08hTpgp/VFIbwFNhsuECC2bi4BjfS4Lfy/WuHKvg/eeRdPCApG+vvQ9XUqkjP9YVtN+15NCHK+zABZBU+qaEdjB37qTDn5awGvV75NlSpf5bROPBNDeQyMGYPK/q+U5pt9LxJVySX+pmR1PfrhgF48UdJOHpa5wKxfhYaWvJoVGOrAwHJZ1f9aIVb4i8Ka3W9TE5JJ2sooVInCqsFXVRaVrEwI10zobNwPprXcYGCfxJl+VggmEZp6h1eLAQzyh7HB4sUAHbI0LQ+W66DGyQHBFIJYolquQSmaJAhZec5CwGkRh8gS67h9shKI9W2oFs/gX8GtJMjoviW0iz2+J+BWnWg3jU1Z2fvoZYNz3JiEcf/wAAAP//AwAEAuWgQRUAAA==", "base64"));
  res.end();

  return __filename;
};
