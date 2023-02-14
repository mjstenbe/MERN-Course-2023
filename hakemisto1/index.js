var http = require("http");
var fs = require("fs");
const port = process.env.PORT || 3001;

//create a server object:
http
  .createServer(function (request, response) {
    // Valitaan Content-type tarjoiltavan sisällön suhteen
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Lähetetään tekstimuotoinen vastaus selaimelle
    response.write("Hakemiston tarjoilu onnistuu myös versionhallinnasta.");

    response.end(); //HTTP vastaus päättyy
  })
  .listen(port); // palvelin kuuntelee porttia 8081
