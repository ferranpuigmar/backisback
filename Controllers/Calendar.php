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
        //$data['page_tag'] = "Mi calendario";
        $data = $this->listSchedule();

        $this->views->getView($this, "calendar", $data, "dashboard_template");
    }
    public function listSchedule()
    {
        $user = "jlopelo";
        $requestUser = $this->model->listSchedule($user);
        echo $requestUser;

        // if ($_POST) {
        //     $user = $_POST['username'];
        //     $pass = $_POST['pass'];
        //     $requestUser = $this->model->listSchedule($user, $pass);
        //     if (empty($requestUser)) {
        //         $arrResponse = array('status' => false, 'msg' => 'no existe usuario o contraseña');
        //     } else {
        //         $arrData = $requestUser;
        //         $__SESSION['idUser'] = $arrData['id'];
        //         $__SESSION['name'] = $arrData['name'];
        //         $arrResponse = array('status' => true, 'msg' => 'ok');
        //     }
        //     // echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        //     echo $requestUser
        //}
        die();
    }
}
