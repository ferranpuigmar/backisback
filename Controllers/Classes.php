<?php
class Classes extends Controllers
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

    public function classes()
    {
        $_SESSION['section'] = 'manage-classes';
        $data = $this->listClasses($_SESSION['id_teacher']);
        $this->views->getView($this, "classes", $data, "dashboard_template");
    }


    // RECUPERAMOS LA LISTA DE CLASES:  id, nombre, descripcion, fecha inicio, fecha fin, activo
    public function listClasses($id_teacher)
    {
        $requestListClasses = $this->model->listClasses((int)$id_teacher);
        if (empty($requestListClasses)) {
            $arrResponse = array('status' => false, 'msg' => 'No hay clases');
            if ($_POST) {
                echo json_encode($requestListClasses, JSON_UNESCAPED_UNICODE);
            }
        } else {
            if ($_POST) {
                echo json_encode($requestListClasses, JSON_UNESCAPED_UNICODE);
                return;
            }
            $arrResponse = $requestListClasses;
        }
        return $arrResponse;
        die();
    }
    
    // RECUPERAMOS LOS HORARIOS DE LAS CLASES 
    public function listScheduleClass($id_class)
    {
        $requestlistScheduleClass = $this->model->listScheduleClass((int)$id_class);
        if (empty($requestlistScheduleClass)) {
            $arrResponse = array('status' => false, 'msg' => 'No hay horario para esa clase');
            if ($_POST) {
                echo json_encode($requestlistScheduleClass, JSON_UNESCAPED_UNICODE);
            }
        } else {
            if ($_POST) {
                echo json_encode($requestlistScheduleClass, JSON_UNESCAPED_UNICODE);
                return;
            }
            $arrResponse = $requestlistScheduleClass;
        }
        return $arrResponse;
        die();
    }


    //RECUPERAMOS EL ALTA EN LA TABLA DE CLASES
    public function setInsertClasses()
    {
        if ($_POST) {
            $strName = $_POST['name'];
            $strDescription = $_POST['description'];
            $strDate_start = $_POST['date_start'];
            $strDate_end = $_POST['date_end'];
            $intActive = 1;

            $resinsertCourses = $this->model->insertCourses($strName, $strDescription, $strDate_start, $strDate_end, $intActive);

            if ($resinsertCourses > 0) {
                $arrResponse = array('status' => true, 'msg' => 'Alta de cursos ok ', 'id' => $resinsertCourses);
            } elseif ($resinsertCourses = 'exist') {
                $arrResponse = array('status' => false, 'msg' => 'Aviso: Curso ya existe');
            } else {
                $arrResponse = array('status' => false, 'msg' => 'Error en el Alta del curso');
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }

    //RECUPERAMOS LOS DATOS A MODIFICAR EN LA TABLA DE CLASES
    public function setUpdateClasses()
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

    // borrado de clases
    public function setDeleteClasses()
    {
        if ($_POST) {
            $id_class = $_POST['id_class'];
            $resdeleteCourses = $this->model->deleteClass($id_class);

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
