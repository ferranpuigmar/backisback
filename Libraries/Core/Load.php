<?php
// capturamos el primer valor de la url que es el controlador
$controller = ucwords($controller);

// Definimos la ruta donde está el controlador
$controllerFile = "Controllers/" . $controller . ".php";

// Si el fichero existe generamos una instancia de ese controlador
// Si no existe mostramos la vista de error de página no encontrada
if (file_exists($controllerFile)) {
    require_once($controllerFile);
    $controller = new $controller();

    // Si ese controlador tiene un metodo declarado en el segundo "/" después del BASE_URL
    // llamamos al método de ese controlador y si tiene parámetros se los pasamos
    if (method_exists($controller, $method)) {
        $controller->{$method}($params);
    } else {
        require_once("Controllers/Error.php");
    }
} else {
    require_once("Controllers/Error.php");
}