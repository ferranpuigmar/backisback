<?php
class Courses extends Controllers
{
    // Este método contructor es heredado de controllers
    // que carga el metodo loadModel y genera la vista

    public function __construct()
    {
        session_start();
        if (empty($_SESSION['username']) || !$_SESSION['is_admin']) {
            header('location: ' . BASE_URL . '/login');
        }
        parent::__construct();
    }

    public function courses()
    {
        $_SESSION['section'] = 'manage-course';
        $data = $this->listAllCourses();
        $this->views->getView($this, "courses", $data, "dashboard_template");
    }


    // RECUPERAMOS LA LISTA DE CURSOS:  id, nombre, descripcion, fecha inicio, fecha fin, activo

    public function listAllCourses()
    {
        $requestCoursesTodos = $this->model->listAllCourses();
        if (empty($requestCoursesTodos)) {
            $arrResponse = array('status' => false, 'msg' => 'no hay cursos');
            if ($_POST) {
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
            }
        } else {
            if ($_POST) {
                echo json_encode($requestCoursesTodos, JSON_UNESCAPED_UNICODE);
                return;
            }
        }
        return $requestCoursesTodos;
        die();
    }

    //RECUPERAMOS EL ALTA EN LA TABLA DE CURSOS
    public function setInsertCourses()
    {
        if ($_POST) {
            $strName = $_POST['name'];
            $strDescription = $_POST['description'];
            $strDate_start = $_POST['date_start'];
            $strDate_end = $_POST['date_end'];
            $intActive = $_POST['active'];

            $resinsertCourses = $this->model->insertCourses($strName, $strDescription, $strDate_start, $strDate_end, $intActive);

            if ($resinsertCourses > 0) {
                $arrResponse = array('status' => true, 'msg' => 'Alta de cursos ok ');
            } else if ($resinsertCourses = 'exist') {
                $arrResponse = array('status' => false, 'msg' => 'Aviso: Curso ya existe');
            } else {
                $arrResponse = array('status' => false, 'msg' => 'Error en el Alta del curso');
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }

    //RECUPERAMOS LOS DATOS A MODIFICAR EN LA TABLA DE CURSOS
    public function setUpdateCourses()
    {
        if ($_POST) {
            $intId_course = $_POST['id_course'];
            $strName = $_POST['name'];
            $strDescription = $_POST['description'];
            $strDate_start = $_POST['date_start'];
            $strDate_end = $_POST['date_end'];
            $strActive = $_POST['active'];
            $resupdateCourses = $this->model->updateCourses($intId_course, $strName, $strDescription, $strDate_start, $strDate_end, $strActive);

            if ($resupdateCourses > 0) {
                $arrResponse = array('status' => true, 'msg' => 'Curso modificado correctamente ');
            } else if ($resupdateCourses = 'exist') {
                $arrResponse = array('status' => false, 'msg' => 'Aviso: Curso no existe');
            } else {
                $arrResponse = array('status' => false, 'msg' => 'Error en la modificacion del curso');
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }

    // borrado de cursos

    public function setDeleteCourse()
    {
        if ($_POST) {
            $id_course = $_POST['id_course'];
            $resdeleteCourses = $this->model->deleteCourse($id_course);

            if ($resdeleteCourses > 0) {
                $arrResponse = array('status' => true, 'msg' => 'El curso se ha borrado correctamente');
            } elseif ($resdeleteCourses = 'exist') {
                $arrResponse = array('status' => false, 'type' => 'aviso', 'msg' => 'el curso no existe');
            } else {
                $arrResponse = array('status' => false, 'msg' => 'Error en el borrado del curso');
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }
}
