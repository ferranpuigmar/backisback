<?php

class Template
{
    function getTemplate($template, $view, $data = "")
    {
        $templateUrl = "Views/Templates/" . $template . ".php";
        require_once($templateUrl);
    }
}
