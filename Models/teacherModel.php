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
        
         $sql = "INSERT INTO teachers(name,surname,telephone,nif, mail) VALUES(?,?,?,?,?)";
         $arrData = array($this->strName,$this->strSurname,$this->strTelephone,$this->strNif,$this->strMail);
         $resinsertTeachers = $this->insert($sql,$arrData);
         return $resinsertTeachers;

    }
     // ACTUALIZAMOS CAMPOS DE LA TABLA PROFESORES
  
    public function updateTeachers(int $id_teacher, string $name, string $surname, string $telephone, string $nif, string $mail)
    { 
        $sql = "UPDATE teachers SET name=?, surname=?, telephone=?, nif=?, mail=? WHERE id_teacher=$id_teacher";
        $arrData = array($this->strName,$this->strSurname,$this->strTelephone,$this->strNif,$this->strMail);
	$resupdateTeachers = $update->execute($arrData);
		return $resupdateTeachers;
	    
    }
	// BORRAMOS CURSOS 
  
    public function deleteTeachers(int $id_teacher)
    {  
        $sql = "DELETE from teachers WHERE id_teacher=$id_teacher";
	$resdeleteTeachers = $update->execute($arrData);
		return $resdeleteTeachers;
	    
    }

}
