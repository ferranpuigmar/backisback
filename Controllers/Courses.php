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
  
  
   // RECUPERAMOS LA LISTA DE CURSOS:  id, nombre, descripcion, fecha inicio, fecha fin, activo

    public function setCoursesTodos()
    {
        if ($_POST) {
            $user = $_POST['username'];
            $requestCoursesTodos = $this->model->listCoursesTodos();
            if (empty($requestCoursesTodos)) {
                $arrResponse = array('status' => false, 'msg' => 'no hay cursos');
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            } else {
                echo json_encode($requestCoursesTodos, JSON_UNESCAPED_UNICODE);
            }
        }
        die();
    }
    
    //RECUPERAMOS EL ALTA EN LA TABLA DE CURSOS
    
    public function setInsertCourses()
    {
         $intId_courses = $_POST['id_courses'];
         $strName = $_POST['name'];
         $strDescription = $_POST['description'];
         $strDate_start = $_POST['date_start'];
         $strDate_end = $_POST['date_end'];
         $strActive = $_POST['active'];
         $resinsertCourses = $this->model->insertCourses($intId_courses, $strName, $strDescription, $strDate_start, $strDate_end, $strActive);
           
         if($resinsertCourses > 0){
                  $arrResponse = array('status' => true, 'msg' => 'Alta de cursos ok ');
         }else if($resinsertCourses = 'exist'){             
                  $arrResponse = array('status' => false, 'msg' => 'Aviso: Curso ya existe');    
         }else {
                  $arrResponse = array('status' => false, 'msg' => 'Error en el Alta del curso');
         }
           echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
           die();
         
    }
    //RECUPERAMOS LOS DATOS A MODIFICAR EN LA TABLA DE CURSOS
    
    public function setUpdateCourses()
    {
         $intId_courses = $_POST['id_courses'];
         $strName = $_POST['name'];
         $strDescription = $_POST['description'];
         $strDate_start = $_POST['date_start'];
         $strDate_end = $_POST['date_end'];
         $strActive = $_POST['active'];
        
         $resupdateCourses = $this->model->updateCourses($intId_courses, $strName, $strDescription, $strDate_start, $strDate_end, $strActive);
           
         if($resupdateCourses > 0){
                  $arrResponse = array('status' => true, 'msg' => 'Modificación de cursos ok ');
         }else if($resupdateCourses = 'exist'){             
                  $arrResponse = array('status' => false, 'msg' => 'Aviso: Curso no existe');    
         }else {
                  $arrResponse = array('status' => false, 'msg' => 'Error en la modificacion del curso');
         }
           echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
           die();
         
    }
}
