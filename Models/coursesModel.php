<?php

class coursesModel extends Mysql
{
	private $strName;
	private $strDescription;
	private $strDate_start;
        private $strDate_end; 
        private $strActive;
         
	
    public function __construct()
    {
        parent::__construct();
    }
   // LISTAMOS TODOS LOS CURSOS PARA EL MANTENIMIENTO DE LOS MISMOS 
    public function listCoursesTodos()
    {
        $sql = "SELECT * from courses";
        $reslistCourses = $this->select_all($sql);  
           return $reslistCourses;
    }
   // ALTA DE CURSOS                            
    public function insertCourses(int $id_courses, string $name, string $description, string $date_start, string $date_end, string $active)
    {
	$return ="";
	$this->intId_courses = $id_courses;    
        $this->strName = $name;
	$this->strDescription = $description;
	$this->strDate_start = $date_start;
        $this->strDate_end = $date_end;
        $this->strActive = $active; 
	    
	  $sql = "SELECT * from courses where id_courses = = '$this->intId_courses'";
          $reslistCourses = $this->select_all($sql); 
	  if (empty($reslistCourses)) {
             $sql_insert = "INSERT INTO courses(name,description,date_start,date_end, active) VALUES(?,?,?,?,?)";
             $arrData = array($this->strName,$this->strDescription,$this->strDate_start,$this->strDate_end,$this->strActive);
             $resinsertCourses = $this->insert($sql_insert,$arrData);
             $return = $resinsertCourses;
	  }else{
	     $return = "exits";
	  }
	    return $return;
    }
     // ACTUALIZAMOS CAMPOS DE LA TABLA CURSOS
  
    public function updateCourses(int $id_course, string $name,string $description,string $date_start,string $date_end, string $active)
    {
       
	$this->strName = $name;
	$this->strDescription = $description;
	$this->strDate_start = $date_start;
        $this->strDate_end = $date_end;
        $this->strActive = $active; 
      
        $sql = "UPDATE courses SET name=?, description=?, date_start=?, date_end=?, active=? WHERE id_course=$id_course ";
        $arrData = array($this->strName,$this->srtDescription,$this->strDate_start,$this->srtDate_end,$this->strActive);
	$resupdateCourses = $update->execute($arrData);
		return $resupdateCourses;
	    
    }
	// BORRAMOS CURSOS 
  
    public function deleteCourses(int $id_course)
    {  
        $sql = "DELETE from courses WHERE id_course=$id_course ";
	$resdeleteCourses = $update->execute($arrData);
		return $resdeleteCourses;
	    
    }

}
