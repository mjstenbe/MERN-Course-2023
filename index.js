var http = require("http");
var fs = require("fs");
const port = process.env.PORT || 3001;

//create a server object:
http
  .createServer(function (request, response) {
    if (request.url === "/") {
      // Valitaan Content-type tarjoiltavan sisällön suhteen
      response.writeHead(200, { "Content-Type": "text/plain" });

      // Lähetetään tekstimuotoinen vastaus selaimelle
      response.write("Olet saapunut palvelimen juureen - TAAS! Kuunnellaan porttia "+ port);
    } else if (request.url === "/helloworld") {
      // Valitaan Content-type tarjoiltavan sisällön suhteen
      response.writeHead(200, { "Content-Type": "text/html" });

      // Luetaan HTML-tiedosto ja lähetetään se selaimelle
      var html = fs.readFileSync("./frontpage.html");
      response.write(html);
    } else if (request.url === "/json") {
      // Valitaan Content-type tarjoiltavan sisällön suhteen
      response.writeHead(200, { "Content-Type": "text/json" });

      // Luetaan JSON muotoinen tiedosto ja lähetetään se selaimelle
      var json = require("./data.json");
      response.write(JSON.stringify(json));
    }

    response.end(); //HTTP vastaus päättyy
  })
  .listen(port); // palvelin kuuntelee joko pilvipalvelun porttia tai paikallista porttia nro 3000
