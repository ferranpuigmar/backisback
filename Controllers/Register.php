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

    public function registerUser()
    {
        if ($_POST) {
            // $user = $_POST['username'];
            // $pass = $_POST['pass'];
            // $requestUser = $this->model->registerUser($user, $pass);
            // if (empty($requestUser)) {
            //     $arrResponse = array('status' => false, 'msg' => 'El usuario o la contraseña es incorrecto.');
            // } else {
            //     $arrData = $requestUser;
            //     $__SESSION['idUser'] = $arrData['id'];
            //     $__SESSION['name'] = $arrData['name'];
            //     $arrResponse = array('status' => true, 'msg' => 'ok');
            // }
            // echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }
}
