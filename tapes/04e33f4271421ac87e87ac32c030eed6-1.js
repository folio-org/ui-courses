var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses.. : 202 6138us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses.. : 200 66183us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxZyXLbRhC9+ytQvMYTz4ZZfJPtVEWVxEnFTuWQymGWHgkxCLAAULGS8r+nwRUQKRmks1akAyUB043pnu7X74G/P8myWaiXTQvtLHue/ZT9jlfwWhH7f2dGUCE9dcQnzYiUNideSU44WGuS5gzyOHu6NqncHFZGL10ZluWyzRhl25sR2tAUi66oq9WaF64tQhaLlKCBqitcfydzVcyKqoOrZvX/3njhmm6O6y7X22IpWMa4JCFyR2RyQKwDSSQVykRDreHx0Phb/wuErnewDnIf5gn+hoF+47prmONWQ7u/ezfSyyqUy1hUV5mvu+tssWxgFadbLMoCYob21wPzOXQuus4Nt9mfUQOug/gKP1ZeOeWUUE04fcvoc6GeC/k5U/wzij87Z2i3XMTpdhuzD6vfHzb5W1fH10XbYQyb/AcqfPBOEKccJZLnjHjBFKFKMO85qMR3Jz+yv/8ITnCJRg1cocPGNZsNwfsOmsqVgyXbS3dW8P2KFpqbIsCiLnaFJZykJueRSJvwIyZOHEuWKOBKMqfAsnTcwWFk+9hO8jrqpKIJ2Sto32VseD/UcX0/xNH1WLShvoHm9lXRLkp3+3roZ1mue2zljpDsS1eWv7rbof2iCO+Wi6/r4LbV2zVLGCy4rsv45hrK9MX7RdHcfgdNUcdxzP02ls3OgXg6vNP3dnOzO5MfAd61s92CD4MntZ1L6U1ZLDaw9POTO2tm5WabG1+5CMnmKpHAYiKSUU+MB0e4RuTiITgd9o2xM37o1E7yODy1i6qC90fP66sfnr18+ezV5bOL4e2ivQhdcQNHEl5U2DbdchCnpACUBkdczgyRXlrigbK+T0ykTrqQ69Gz3XyxbDfGioekldcEd59jIQpBLGeaQEySB2DOSDM0LguPPXa7TXHUxlABJDgq+0fjJgChkgclvOUSN+RH5dQUc7R+s+6S7/ouOasd2oGDy7gpiGlejtQNVuB8C2ORgdcQ8UhXASlHLBWaRJ2Yy0XOktoHtDJ8qF5O8jYaI0W4dlDOXZtxyuxs3AZNNwBvZgmjhInhGqjinRUcEX52EPgaiN/eLmATfsqxaAAM8cwEnHXcE08D2nuarIgm13QQ/t78oSSc5HOYhG+rsqhghGZ3BunrGrkBWUDTIoqFer6oKxzqh3H2PdMsQ1c3642OiM1wrxywxR1PxPpoceTISHyARJROeeLKQPTjWYqFuJ0TubaGMSBCW8SGQC1iA8bqqKMmWJlA3IMN0c3bp9nL6wbnl8suxjDxSZN25eM4fZhIIHIm7xKIiRRiZ7kH8925HKsSxYJyFlkW94hDmgZipBJESStdiowaUPdk3msXlcNUaxEFojJQBCHsCZOCiF5CriEczfxbd1vWzdPsm+Id/KuyroQ+M+s7y2lZtyEYYyAnSUXdZx1HB2OCCIpDxSQPaoz+w6xzB15EQIjNFZHOYKnzHA+BI7qBB6a0PF7v7so1EbPu4hXc7fB/PvVanJv6reVh6rOf/wwyL84k82ICmX+9nHto1sqHC5lvqXqLaIlo+3qvb4qdBjsWyqRApFbjQCaFsbN6sg1iV9LbcqYSHLa8ISB70QZIh7w1EbmNlBpEsm7HhI5oU36/Nr2IN64KKM0e5el/VJ5CyjkkpB6ip4Yyp8RahbxJ458cB4+NJ8vT6S4fkqcDPnWfPh0seRSojwL1UaD+jwWqc7l1MaFCAWS8EikvMXiBoNRAneWlzt3gfdbHBOpJ3ob18mVRYpqyHpwfEqc9dDMyFrBjcdqvEITJCeLUslxSiTxTKItlxCFgQWFVhRTAJ5z91O4Z50RxepLPYQIuq2ytOz+iT+uViD1DnP45lFHb8yjj1m4aZVTa2O0zDijjm7rcUvxPoIyKnkMZt1b3U0bNpch9Hgjtv8nAWkB48cKRXCNA8JRb8NvqPUIZxf2U8cfiN5Q5pIQbKB9p43+UNjKsClCakxhQ6cqgAwoKFLk4fGxSNKjgd/mfSBtPcPkQbdy/0biXNg6WPNLGR9r4SBv/x7QxWTxIbiXiodAoVpMmhipFOFMObE4DVwO4+BhtPMnb6I1rU1RFN403ovfRG99D3ogPpBN4IxU5Ba4Zif2rIRkh9W8SDXFY9TJR5n0aIO403niSz+zgS41nk+jji36ObgjkmjEcfNfR/s180tLz+KSlJ72C7L9M+Yv5pDmLT5q7fHKd11lXd678HkLdrLtWPPnwBwAAAP//AwDoWo2/SSMAAA==", "base64"));
  res.end();

  return __filename;
};
