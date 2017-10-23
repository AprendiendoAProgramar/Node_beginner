function route(handle, pathname, response, postData) {
    console.log("A punto de rutear una petición para " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, postData);
    } else {
        console.log("No se encontro manipulador para " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 No encontrado")
        response.end();
    }
}

exports.route = route;
