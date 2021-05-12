<?php
class classesModel extends Mysql
{

    public function __construct()
    {
        parent::__construct();
    }

    // LISTAMOS TODOS LAS CLASES DE UN CURSO  
    public function listClasses($id_teacher)
    {
        $sql = "SELECT c.id_class, c.id_teacher, c.id_schedule, c.name, c.color, cou.name as courseName FROM class c 
        JOIN courses cou
        WHERE 
             cou.id_course = c.id_course";
        $reslistClass = $this->select_all($sql);
        return $reslistClass;
    }

    // ALTA DE CLASES
    public function insertClass(int $id_teacher, int $id_course, int $id_schedule, string $name, string $color)
    {
        $return = "";
        $this->intId_class = $id_class;
        $this->intId_teacher = $id_teacher;
        $this->intId_course = $id_course;
        $this->intId_schedule = $id_schedule;
        $this->strName = $id_name;
        $this->strColor = $color;

        $sql = "SELECT * from class where name = '$this->strName'";
        $reslistClass = $this->select_all($sql);

        if (empty($reslistClass)) {
            $sql = "INSERT INTO class(id_teacher, id_course, id_schedule, name, color) VALUES($this->intId_teacher,$this->intId_course,$this->intId_schedule,'$this->strName','$this->strColor')";
            $arrData = array($this->intId_teacher, $this->intId_course, $this->intId_schedule, $this->strName, $this->strColor);
            $resinsertClass = $this->insert($sql, $arrData);
            $return = $resinsertClass;
        } else {
            $return = "exits";
        }
        return $return;

        $sql = "SELECT * from teachers where id_teacher = '$this->intId_teacher'";
        $reslistTeachers = $this->select_all($sql);

        if (empty($reslistTeachers)) {
            $sql = "INSERT INTO class(id_teacher, id_course, id_schedule, name, color) VALUES(?,?,?,?,?)";
            $arrData = array($this->intId_teacher, $this->intId_course, $this->intId_schedule, $this->strName, $this->strColor);
            $resinsertClass = $this->insert($sql, $arrData);
            $return = $resinsertClass;
        } else {
            $return = "exits";
        }
        return $return;
    }
    // ACTUALIZAMOS CAMPOS DE LA TABLA CLASES (ASIGNATURAS)

    public function updateClass(int $id_class, int $id_teacher, int $id_course, int $id_schedule, string $name, string $color)
    {
        $this->intId_teacher = $id_teacher;
        $this->intId_course = $id_course;
        $this->intId_schedule = $id_schedule;
        $this->strName = $id_name;
        $this->strColor = $color;

        $sql = "UPDATE class SET id_teacher=?, id_course=?, id_schedule=?, name=?, color=? WHERE id_class=$id_class";
        $arrData = array($this->intId_teacher, $this->intId_course, $this->intId_schedule, $this->strName, $this->strColor);
        $resupdateClass = $update->execute($arrData);
        return $resupdateClass;
    }
    // BORRAMOS CLASES

    public function deleteClass(int $id_class)
    {
        if ($_POST) {
            $sql_delete = "DELETE from class WHERE id_class = $id_class";
            $resdeleteClass = $this->delete($sql_delete);
            return $resdeleteClass;
        }
    }
}
