<?php
class teachers extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista
  
    public function __construct()
    {
        session_start();
        parent::__construct();
    }

    public function tearchers()
    {
    /*
        $data['page_tag'] = "Teachers";
        $this->views->getView($this, "teachers", $data, "auth_template");
     */
    }
  
  
   // RECUPERAMOS LA LISTA DE CURSOS:  id, nombre, descripcion, fecha inicio, fecha fin, activo

    public function setTeachersTodos()
    {
        if ($_POST) {
            $Id_teacher = $_POST['id_teacher'];
            $requestTeachersTodos = $this->model->listTeachersTodos();
            if (empty($requestTeachersTodos)) {
                $arrResponse = array('status' => false, 'msg' => 'AVISO: no hay profesores que listar');
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            } else {
                echo json_encode($requestCoursesTodos, JSON_UNESCAPED_UNICODE);
            }
        }
        die();
    }
    
    //RECUPERAMOS EL ALTA EN LA TABLA DE TEACHERS
    
    public function setInsertTeachers()
    {
         $intId_teacher = $_POST['id_teacher'];
         $strName = $_POST['name'];
         $strDescription = $_POST['description'];
         $strDate_start = $_POST['date_start'];
         $strDate_end = $_POST['date_end'];
         $strActive = $_POST['active'];
         $resinsertTeachers = $this->model->insertTeachers($intId_teacher, $strName, $strDescription, $strDate_start, $strDate_end, $strActive);
           
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
}
© 2021 GitHub, Inc.
