<?php

class Register extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista
    public function __construct()
    {
        parent::__construct();
    }

    public function register()
    {
        // $data['page_id'] = 1;
        $data['page_tag'] = "Register";
        // $data['page_title'] = "Página principal";
        // $data['page_name'] = "home";
        // $data['page_content'] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quis. Perspiciatis repellat perferendis accusamus, ea natus id omnis, ratione alias quo dolore tempore dicta cum aliquid corrupti enim deserunt voluptas.";
        $this->views->getView($this, "register", $data, "auth_template");
    }

    
    public function setInsertStudents()
    {
         $intId = $_POST['id'];
         $strUsername = $_POST['username'];
         $strPass = $_POST['pass'];
         $strEmail = $_POST['email'];
         $strName = $_POST['name'];
         $strSurname = $_POST['surname'];
         $strTelephone = $_POST['telephone'];
         $strNif = $_POST['nif'];
         $strDat_registered  = $_POST['dat_registered'];
        
        
         $resinsertCourses = $this->model->insertCourses($intId_course, $strName, $strDescription, $strDate_start, $strDate_end, $strActive);
           
         if($resinsertCourses > 0){
                  $arrResponse = array('status' => true, 'msg' => 'Alta de cursos ok ');
         }else if($resinsertCourses = 'exist'){             
                  $arrResponse = array('status' => false, 'msg' => 'Aviso: Curso ya existe');    
         }else {
                  $arrResponse = array('status' => false, 'msg' => 'Error en el Alta del curso');
         }
           echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
           die();
         

    public function registerListCourses()
    {
        if ($_GET) {
            $requestCourses = $this->model->registerListCourses();
            if (empty($requestCourses)) {
                $arrResponse = array('status' => false, 'msg' => 'No hay cursos activos');
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            } else {
                echo json_encode($requestCourses, JSON_UNESCAPED_UNICODE);
            }
        }
        die();
    }
}
