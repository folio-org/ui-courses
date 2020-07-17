var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:54:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses.. : 202 7241us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses.. : 200 81790us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS3PbRhKA7/4VKF1XY8/74ZtspyqqtR3XyqkctvYwjx4Ja4hggaDXSsr/fRt8CXyIImnHsSvQQaKA6cZ0T0/310PyjydFcRbraTOByVnxvPh38QdewWtl6v498z5kk6UmzgtLZDScBBEYkcorRY2RQvuz87nIyN/CTOhy1DZ10dbFO195qEdtXdXXd8thCSaxKcdtWY9mo6/aabor6lz4USxh1BZVmeF+8Ng37S1evpxPiCmtrWSRKBaByCQj8Z46QsFzFih1VPpt4V/CfyG2nYK5efcGHqGvb+JPqPimuOomHNFzqwGbxl2OYjVN5ei6uIaZF86LMaB3updocCrGO1yEem6h9cm3vj/lbqUa8C2kV/hrpp5TTgk1hJn3VDwX8rlST43Q/6D4s1KGctNxOlxuIfZ59vfzwpfzGHldTlo0ZrkWVDrQGBIpJuiCI5LgVCCQssuaRh1DOtslv2c5DleJQg1co8LGN4sJwacWmpGvWLwfs7y2MYT3hkyg+VhGGNflKsyEl9Qqnoh0GX+lzIln2RENXEvmNTiWdyvYtu3euqO09sPtZdnE4hVMPhSsfz/WaX4/prXrqZzE+iM0d6/Kybjyd2/7eqaV78Jzro6Q4mdfVf/zd335cRk/TMev6+iXgdw2U+gNuKmrdHUDVf7p07hs7t5BU9Zp3eZuGtNmpUCc9++gn9Blq0X5DeDD5Gw14HPvSZPW53xVleNFevrPk40xZ9VimgtdSsTslM4kspSJZDQQG8ATbrJhPEZv4v3WWAnvW7WjNPZX7WI0gk871+ufvz57+fLZq8tnF/3b5eQituVH2OHwcoQbp5327JQUgNLoiVcMM3OQjgSgjFAtbKJe+qjM2rP97Xg6WQhrHrPRwRCcvcJAFII4zky3zSSPwLyVti9clQF32d3SxclYSwWQ6KnsHo2TAA+ERy2C4xInFNbCqSlvUfpqvkvedbvkpO0w6Sm4TIuAOEzLjrjBCLxdGJQdLiR3knAqDJEyG2Kp1oQz7cEpGrnupYtOcF+8HKWtHy/vm3JUtndFl53P1vdA027kbtSu+2NgtJnd8YH3uXw1+Xkefn83hoXtVCgK3DCSUsA4SpCJ194Sj1EvM2Uh5F7GvRff54GjdPY98MuoKkfw7HKEVbKZYOboJ7WN0vqixgpczwRmlbQckblQEevbcT3Csj/Ztr/bSM00tnUzN2CZVr5G5XWOnlR5V3J7Ku/b6W2AZq5Cart8Bu6J2HlkleGv6moFT7tMOcAQ/ZRKuW7IAWb0pJ4sjfh8voGTIiFNUmsItywQqSMmLR0FsZg/fJbS4955DCdDuRcnXyM9YiwU4wZuEA7qpoxFW96uIG0HUuboGOOSxMQ9kRkzmfOAiY0KbZOlzvK0LbyHYQ7X1zfzjW9v4BarUTyIJ0MX/uNpMw9+Px5XJaQC5W964l+CkVyehpFcDhg5YGQxYOTGqg0YOWDkgJGb4gNG/oUYSZfpfgsjVzdOZ0hlT2HIpdTDDEkleNEFBMgOrwDTVnA2YQ6S0oDIzqtthnzpK6xY0wluipVpm5FwkT76UUSISmXO0ODCl/MSNw+LFq4XdWgAyWPC+duBZISsOORAguhSuFSUOKcpasWXXHvnVnxzKEgeoXIfSN7XsQdBsjdkAMkBJAeQ/BuDpPfK+ZQzccADkUYkYvECCTwoqoM0yvPDQfIobf14+bms0E0HcSQjzO3nSEGYPIAjHVOSShuI0A7DiEPEgMKoijlCyFj7qZPHcuRROtdPng4AyLf1Eh9XwPiNedHY03jR2GN4URvr/uRjR21OQcal1MPIiCghVFAR+x2H6YVKTC9BeKIMJgielYOwjN4dyCgeRsbfyt99k0gFH6EasPEHxcbh/HGHggEb76cxYOOAjT8CNg7nj8P549fgyW9z/siEMivq+nN40uhTeNLox3jSCipkoJ4ETJ24NRAqg5accHDOZsMZqBUxbPMke5gnX/hJGQeQ/EFBMlIRYvCiyxIU+0zFSBBMd7UMcwUHnfnR54+Hq9wHko9z5ICRA0YOGDlg5Hz7QDCQcElnBmlPXIeAyWTmlVAs696bFY9h5FHa1spIGW88VLd+9qbd2uniJkkyRxglTDxMkt0Ijhn+AJLMCoMGwJLAbMRaxwMJNKJ8oNmJZJWhPfMPI8mjdG6T5CPHjzuQ8WBi3J4rB9zinmfiQnJYcmQiISL6apNV5tpCCuu1FANxWSeQ6CxjQIRxmBsidZgb0FZPPbXRyQzigdyQ/O3kvHh502D98sXFepr4oko707EbHw7ESMbVJkAciJIryftkvlqXXVGiWdTeIWXxgHnI0Eis1IJo6aTPiVEL+gHPB+OT9uhqI5LArAwUkxDuCZujSEGCMvBAs+bvqro5L96UH+C78joXp3p9JXmY112M1lpQJOtkOq9j6WBMEEGxqNgcQK9n/77XuYcgEmCKVZpIbzHUucJF4JjdIADTZvcbCxf+2jcJve7TNWzu8L/e9cqd6vql5Lbrv1JvqsxpvakyR/WmXEj1UG/6xperHuz03tSqU3pTqx7rTV1K0cWMfJY8Nm0eInEJNBZdxDNpsdrIJUb047FJH33zoQgNQNeVPdSgvr+BIvpFr5bnY7vv7rXTMK3KhJUHp7/no9bDt/e+m2/veUMzFmRDvASs84w7DBSD6CsEJE6TlmEVKAd2q0eo3NGtNhcv7o9GtlvVTxu3NzqdHFE9wjrRrnuPz2YsfpjAiXU5e86tFWaH8F5oO0bj+gFIOSpez5uE/Q3Pm6Hh+Q4anr/zufnweYtDUzSzz5V4rsxTJ7Y/b7GQe3H36z0dGoRHajnmD6OAqBnOazBEIVhi+oiKMnZgmt/77IXc8c8+jIX6aXeLhS4qGN+cCkMLq+xTbHA2YOiL/XmAN3c998t8OQOyeZCdtXXrq39BrJt5qtJPPv8fAAD//wMAj7cGj21BAAA=", "base64"));
  res.end();

  return __filename;
};
