<?php

class Login extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista
    public function __construct()
    {
        parent::__construct();
    }

    public function login()
    {
        // $data['page_id'] = 1;
        $data['page_tag'] = "Login";
        $this->views->getView($this, "login", $data, "auth_template");
    }

    public function loginUser()
    {
        if ($_POST) {
            if (empty($_POST['username']) || empty($_POST['pass'])) {
                $arrResponse = array('status' => false, 'msg' => 'El usuario o la contraseña no son válidos');
            } else {
                $user = $_POST['username'];
                $pass = $_POST['pass'];
                $requestUser = $this->model->loginUser($user, $pass);
                if (empty($requestUser)) {
                    $arrResponse = array('status' => false, 'msg' => 'El usuario o la contraseña es incorrecto.');
                } else {
                    $arrData = $requestUser;
                    $__SESSION['idUser'] = $arrData['id'];
                    $__SESSION['name'] = $arrData['name'];
                    $arrResponse = array('status' => true, 'msg' => 'ok');
                }
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            }
        }
        die();
    }
}
