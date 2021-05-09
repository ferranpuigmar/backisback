<?php

class coursesModel extends Mysql
{
   	$this->strName = $name;
	$this->strDescription = $description;
	$this->strDate_start = $date_start;
        $this->strDate_end = $date_end;
        $this->strActive = $active; 
         
	
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
   // ALTA DE CURSOS                            
    public function insertCourses(string $name, string $description, string $date_start, string $date_end, string $active)
    {
        
         $sql = "INSERT INTO course(name,description,date_start,date_end, active) VALUES(?,?,?,?,?)";
         $arrData = array($this->strName,$this->strDescription,$this->strDate_start,$this->strDate_end,$this->strActive);
         $resinsertCourses = $this->insert($sql,$arrData);
         return $resinsertCourses;

    }
     // ACTUALIZAMOS ALGUNO DE LOS CAMPOS DE CURSOS 
  
    public function updateCourses(int $id_course, string $name,string $description,string $date_start,string $date_end, string $active)
    {
        /*
	$this->strName = $name;
	$this->strDescription = $description;
	$this->strDate_start = $date_start;
        $this->strDate_end = $date_end;
        $this->strActive = $active; 
	*/
      
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
