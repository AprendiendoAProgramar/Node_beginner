// Creamos variables y les asignamos los archivos donde están contenidos nuestros módulos con las funciones disponibles que tengan 'exportadas'.
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);