<?php

class Views
{
    function getView($controller, $view, $template, $data = "")
    {
        $controller = get_class($controller);

        if ($controller == "Home") {
            $viewUrl = "Views/" . $view . ".php";
        } else {
            $viewUrl = "Views/" . $controller . "/" . $view . ".php";
        }

        if ($template) {
            require_once("Libraries/Core/Templates.php");
            $template = new Template();
            $template->getTemplate("auth_template", $viewUrl, $data);
        } else {
            require_once($viewUrl);
        }
    }
}
