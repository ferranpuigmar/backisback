<?php
class courses extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista
  
    public function __construct()
    {
        session_start();
        parent::__construct();
    }

    public function courses()
    {
    /*
        $data['page_tag'] = "Courses";
        $data['username'] = $_SESSION['name'];
        $this->views->getView($this, "courses", $data, "auth_template");
     */
    }
  
  
