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

    public function listCoursesTodos()
    {
        if ($_POST) {
         //   $user = $_POST['username'];
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
    public function insertCourses()
    {
        if ($_POST) {
            $requestinsert_sql = $this->model->insertCourses();
             if($requestinsert_sql == 0){
                 // que se devuelve aqui??? el array del insert??
                    $arrResponse$arrData = array($this->strName,$this->strDescription,$this->strDate_start,$this->strDate_end,$this->strActive);                       
                    echo json_encode($arrResponse$arrData, JSON_UNESCAPED_UNICODE);
            } else {
                 $arrResponse = array('status' => false, 'msg' => 'error insert tabla ');
                 echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE)
            }
        }
        die();
    }
}

