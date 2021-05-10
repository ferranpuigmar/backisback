<?php

class coursesModel extends Mysql
{
    /*
	private $intId_course; 
	private $strName;
	private $strDescription;
	private $strDate_start;
        private $strDate_end; 
        private $strActive;
        */

    public function __construct()
    {
        parent::__construct();
    }
    // LISTAMOS TODOS LOS CURSOS PARA EL MANTENIMIENTO DE LOS MISMOS
    public function listAllCourses()
    {
        $sql = "SELECT * from courses";
        $reslistCourses = $this->select_all($sql);
        return $reslistCourses;
    }
    // ALTA DE CURSOS
    public function insertCourses(string $name, string $description, string $date_start, string $date_end, string $active)
    {
        $this->strName = $name;
        $this->strDescription = $description;
        $this->strDate_start = $date_start;
        $this->strDate_end = $date_end;
        $this->strActive = $active;

        $sql_insert = "INSERT INTO courses(name,description,date_start,date_end, active) VALUES($this->strName,$this->strDescription,$this->strDate_start,$this->strDate_end,$this->strActive)";

        $arrData = array($this->strName, $this->strDescription, $this->strDate_start, $this->strDate_end, $this->strActive);
        $resinsertCourses = $this->insert($sql_insert, $arrData);
        return $resinsertCourses;
    }

    // ACTUALIZAMOS CAMPOS DE LA TABLA CURSOS
    public function updateCourses(int $id_course, string $name, string $description, string $date_start, string $date_end, string $active)
    {
        $return = "";
        $this->strId_course = $id_course;
        $this->strName = $name;
        $this->strDescription = $description;
        $this->strDate_start = $date_start;
        $this->strDate_end = $date_end;
        $this->strActive = $active;
       
            $sql_update = "UPDATE courses SET name=?, description=?, date_start=?, date_end=?, active=? WHERE id_course = $this->strId_course";
            $arrData = array($this->strName, $this->strDescription, $this->strDate_start, $this->strDate_end, $this->strActive);
            $resupdateCourses = $this->update($sql_update, $arrData);
            return $resupdateCourses;    
    }

    // BORRAMOS CURSOS
    public function deleteCourse(int $id_course)
    {
        $this->strId_course = $id_course;
	
            $sql_delete = "DELETE from courses WHERE id_course= $this->strId_course";
            $resdeleteCourses = $this->delete($sql_delete);
            $return = $resdeleteCourses;
            return $resdeleteCourses;
    }
}
