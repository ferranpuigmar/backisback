<?php
class Calendar extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista
    public function __construct()
    {
        session_start();
        if (empty($_SESSION['username'])) {
            header('location: ' . BASE_URL . '/login');
        }
        parent::__construct();
    }

    public function calendar()
    {
        // $data['page_id'] = 1;
        $_SESSION['section'] = 'calendar';
        $data = $this->model->listClass($_SESSION['username']);

        $this->views->getView($this, "calendar", $data, "dashboard_template");
    }

    // RECUPERAMOS LOS CURSOS DE UN ESTUDIANTE: nombre de la clase, dia, fecha inicio, fecha fin y profesor

    public function listCourses()
    {
        if ($_POST) {
            $user = $_POST['username'];
            $requestCourses = $this->model->listCourses($user);
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

    public function listClass($user)
    {
        $requestClass = $this->model->listClass($user);
        return json_encode($requestClass, JSON_UNESCAPED_UNICODE);
        die();
    }
}
