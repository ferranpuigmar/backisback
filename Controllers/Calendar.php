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
        $data['courseName'] = "Curso PHP";
        $data['section'] = 'calendar';
        $this->views->getView($this, "calendar", $data, "dashboard_template");
    }
      
    // RECUPERAMOS LOS CURSOS DE UN ESTUDIANTE: nombre de la clase, dia, fecha inicio, fecha fin y profesor
    
    public function listCourses()
    {
        if ($_POST) {
            $requestCourses = $this->model->listCourses();
            if (empty($requestCourses)) {
                $arrResponse = array('status' => false, 'msg' => 'estudiante sin cursos');
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            } else {
                echo json_encode($requestCourses, JSON_UNESCAPED_UNICODE);
            }
        }
        die();
     }

     // RECUPERAMOS LAS CLASES DE UN CURSO: descripción del curso, fecha inicio y fecha fin 
    
         public function listClass()
    {
        if ($_POST) {
            $requestClass = $this->model->listClass();
            if (empty($requestClass)) {
                $arrResponse = array('status' => false, 'msg' => 'Sin clases para este curso');
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            } else {
                echo json_encode($requestClass, JSON_UNESCAPED_UNICODE);
            }
        }
        die();
     }

}
