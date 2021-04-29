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
        // $data['page_title'] = "Página principal";
        // $data['page_name'] = "home";
        // $data['page_content'] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quis. Perspiciatis repellat perferendis accusamus, ea natus id omnis, ratione alias quo dolore tempore dicta cum aliquid corrupti enim deserunt voluptas.";
        $this->views->getView($this, "login", $data, "auth_template");
    }

    public function loginUser()
    {
        if ($_POST) {
            if (empty($_POST['username']) || empty($_POST['password'])) {
                $arrResponse = array('status' => false, 'msg' => 'El usuario o la contraseña no son válidos');
            } else {
                $user = $_POST['username'];
                $password = hash("SHA256", $_POST['password']);
                $requestUser = $this->model->loginUser($user, $password);
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
