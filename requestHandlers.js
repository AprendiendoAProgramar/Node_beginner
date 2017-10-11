var querystring = require('querystring');

function iniciar(response, postData) {
    console.log("Manipulador de petición 'iniciar' ha sido llamado.");

    var body = '<!DOCTYPE html>'+
    '<html>'+
    '<head>'+
    '<meta charset="UTF-8">'+
    '<title>Bladis Form</title>'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function subir(response, postData) {
    console.log("Manipulador de petición 'subir' ha sido llamado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Tu enviaste: " + querystring.parse(postData)["text"]);
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
