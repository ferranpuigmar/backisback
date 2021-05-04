<?php

class Calendar extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista
    public function __construct()
    {
        parent::__construct();
    }

    public function calendar()
    {
        // $data['page_id'] = 1;
        $data['page_tag'] = "Mi calendario";
        $this->views->getView($this, "calendar", $data, "dashboard_template");
    }
}
