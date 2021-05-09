<?php

class coursesModel extends Mysql
{
   
    public function __construct()
    {
        parent::__construct();
    }
   // LISTAMOS TODOS LOS CURSOS PARA EL MANTENIMIENTO DE LOS MISMOS 
    public function listCourses()
    {
        $sql = "SELECT * from courses";
        $reslistCourses = $this->select all($sql);  
           return $reslistCourses;
    }
     // ACTUALIZAMOS ALGUNO DE LOS CAMPOS DE CURSOS 
  
    public function updateCourses(int $id_course, string $name,string $description,string $date_start,string $date_end, string $active)
    {
        $this->strName = $name;
	$this->strDescription = $description;
	$this->strDate_start = $date_start;
        $this->strDate_end = $date_end;
        $this->strActive = $active; 
      
        $sql = "UPDATE courses SET name=?, description=?, date_start=?, date_end=?, active=? WHERE id=$id_course ";
        $arrData = array($this->strName,$this->srtDescription,$this->strDate_start,$this->srtDate_end,$this->strActive);
	$resupdateCourses = $update->execute($arrData);
		return $resupdateCourses;
	    
    }

}
