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
        $this->views->getView($this, "courses", $data, "auth_template");
     */
    }
  
  
    $objCourse = new Course();

	//Insertar cursos
	$insert = $objCourse->insertCours("Jorge",78987898,"jorge@info.com");
	//echo $insert;
	//
	//Estrae todos los registros
	$course = $objCourse->getUsuarios();
	print_r("<pre>");
	print_r($users);
	print_r("</pre>");

	$updateUser = $objUsuario->updateUser(2,"Roberto Arana",134534534,"rarana@info.com");
	echo $updateUser;

	$user = $objUsuario->getUser(2);
	print_r("<pre>");
	print_r($user);
	print_r("</pre>");

	$delete = $objUsuario->deluser(2);
	echo $delete;

