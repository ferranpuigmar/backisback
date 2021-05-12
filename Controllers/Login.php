<?php
class Login extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista
    public function __construct()
    {
        session_start();
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
                    $_SESSION['username'] = $user;
                    $_SESSION['name'] = $arrData['name'];
                    $_SESSION['surname'] = $arrData['surname'];

                    if (isset($arrData['id_user_admin'])) {
                        $_SESSION['id_user'] = $arrData['id_user'];
                        $_SESSION['is_admin'] = true;
                        $_SESSION['id_teacher'] = $arrData['id_teacher'];
                    } else {
                        $_SESSION['id_user'] = $arrData['id'];
                        $_SESSION['is_admin'] = false;
                    }
                    $arrResponse = array('status' => true, 'msg' => 'ok', 'is_admin' => $_SESSION['is_admin'], 'name' => $arrData['name']);

                    // Cargamos los datos del curso en una variable de sesión
                    $requestCourseGenericInfo = $this->model->listCourseInfo($user);
                    $_SESSION['courseInfo'] = $requestCourseGenericInfo;
                }
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            }
        }
        die();
    }
}
