<?php

class Views
{
    function getView($controller, $view, $data = "", $template_name = "")
    {
        $controller = get_class($controller);

        if ($controller == "Home") {
            $viewUrl = "Views/" . $view . ".php";
        } else {
            $viewUrl = "Views/" . $controller . "/" . $view . ".php";
        }

        if ($template_name !== "") {
            require_once("Libraries/Core/Templates.php");
            $template = new Template();
            $template->getTemplate($template_name, $viewUrl, $data);
        } else {
            require_once($viewUrl);
        }
    }
}
