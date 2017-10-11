var http = require('http');
var url = require('url');

function iniciar(route, handle) {
    function onRequest(request, response) {
        var dataPosted = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Petición para " + pathname + " recibida.");

        //request.SetEncoding("utf8");

        request.addListener("data", function(piecePosted) {
            dataPosted += piecePosted;
            console.log("Recibido trozo POST '" + piecePosted + "'.");
        });
        request.addListener("end", function() {
            route(handle, pathname, response, dataPosted);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
