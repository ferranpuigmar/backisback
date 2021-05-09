<?php

class teachersModel extends Mysql
{
  $this->strName = $name;
  $this->strSurname = $surmane;
  $this->strTelephone = $telephone;
  $this->strNif = $nif;
  $this->strMail = $mail; 
         
	
    public function __construct()
    {
        parent::__construct();
    }
   // LISTAMOS TODOS LOS PROFESORES
	
    public function listTeachers()
    {
        $sql = "SELECT * from teachers";
        $reslistTeachers = $this->select all($sql);  
           return $reslistTeachers;
    }
   // ALTA DE PROFESORES                       
    public function insertTeachers(string $name, string $surname, string $telephone, string $nif, string $mail)
    {
        
         $sql = "INSERT INTO teachers(name,description,date_start,date_end, active) VALUES(?,?,?,?,?)";
         $arrData = array($this->strName,$this->strDescription,$this->strDate_start,$this->strDate_end,$this->strActive);
         $resinsertCourses = $this->insert($sql,$arrData);
         return $resinsertCourses;

    }
     // ACTUALIZAMOS CAMPOS DE LA TABLA CURSOS
  
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
