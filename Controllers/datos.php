<?php
class Datos extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista
    public function __construct()
    {
        session_start();
        if (empty($_SESSION['username'])) {
            header('location: ' . BASE_URL . '/datos');
        }
        parent::__construct();
    }
     
      public function datos()
    {
        $_SESSION['section'] = 'datos';
     //    $data = $this->model->listDatos($_SESSION['username']);
        $data = $this->listDatos();
        $this->views->getView($this, "datos", $data, "dashboard_template");
    }

    // RECUPERAR LOS DATOS DEL USUARIO 

    public function listDatos()
    {
        if ($_POST) {
            $user = $_POST['username'];
            $requestCourses = $this->model->listDatos($username);
            if (empty($requestDatos)) {
                $arrResponse = array('status' => false, 'msg' => 'sin datos');
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            } else {
                echo json_encode($requestDatos, JSON_UNESCAPED_UNICODE);
            }
        }
        die();
    }

   //ACTULIZAMOS LOS DATOS DEL USUARIO 
    public function updateDatos()
    {
        if ($_POST) {
            
            $strUsername = $_POST['username'];
            $strPassword = $_POST['password'];
            $strMail = $_POST['mail'];
          
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
