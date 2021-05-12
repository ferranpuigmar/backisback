<?php
class Datos extends Controllers
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

    public function datos()
    {
        $_SESSION['section'] = 'datos';
        $data = $this->setlistDatos($_SESSION['username']);
        $this->views->getView($this, "datos", $data, "dashboard_template");
    }

    // RECUPERAR LOS DATOS DEL USUARIO 
    public function setlistDatos(string $username)
    {
        $requestDatos = $this->model->listDatos($username);
        if (empty($requestDatos)) {
            $arrResponse = array('status' => false, 'msg' => 'sin datos usuario');
        } else {
            $arrResponse = $requestDatos;
        }
        return $arrResponse;
        die();
    }

    //ACTULIZAMOS LOS DATOS DEL USUARIO
    public function setupdateDatos()
    {
        if ($_POST) {
            $strUsername = $_POST['username'];
            $strPassword = $_POST['password'];
            $strMail = $_POST['email'];
            $resupdateDatos = $this->model->updateDatos($strUsername, $strPassword, $strMail);
            if ($resupdateDatos > 0) {
                $arrResponse = array('status' => true, 'msg' => 'datos usuario actualizado ok ');
            } else {
                $arrResponse = array('status' => false, 'msg' => 'Error en la modificacion datos usuario');
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }
}
