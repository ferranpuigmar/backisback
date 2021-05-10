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
         $strSurname = $_POST['surname'];
         $strTelephone = $_POST['telephone'];
         $strNif = $_POST['nif'];
         $strMail = $_POST['mail'];
        
         $resinsertTeachers = $this->model->insertTeachers($intId_teacher, $strName, $strSurname, $strTelephone, $strNif, $strMail);
           
         if($resinsertTeachers > 0){
                  $arrResponse = array('status' => true, 'msg' => 'Alta de profesor ok ');
         }else if($resinsertTeachers = 'exist'){             
                  $arrResponse = array('status' => false, 'msg' => 'Aviso: Profesor ya existe');    
         }else {
                  $arrResponse = array('status' => false, 'msg' => 'Error en el Alta de profesores');
         }
           echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
           die();
         
    }
}
© 2021 GitHub, Inc.
