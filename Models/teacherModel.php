<?php

class teachersModel extends Mysql
{
  /*
  private $intId_teacher;
  private $strName;
  private $strSurname;
  private $strTelephone;
  private $strNif;
  private $strMail; 
  */
    public function __construct()
    {
        parent::__construct();
    }
   // LISTAMOS TODOS LOS PROFESORES
	
    public function listTeachersTodos()
    {
        $sql = "SELECT * from teachers";
        $reslistTeachers = $this->select_all($sql);  
           return $reslistTeachers;
    }
   // ALTA DE PROFESORES                       
    public function insertTeachers(int $id_teacher, string $name, string $surname, string $telephone, string $nif, string $mail)
    {
        $return ="";
	$this->intId_teacher = $id_teacher;
	$this->strName = $name;
  	$this->strSurname = $surmane;
  	$this->strTelephone = $telephone;
  	$this->strNif = $nif;
  	$this->strMail = $mail; 
   // Primero se confirma que no exista el profesor 	
	 $sql = "SELECT * from teachers where id_teacher = '$this->intId_teacher'";
         $reslistTeacher = $this->select_all($sql);
	    
	  if (empty($reslistteacher)) {    
	     $sql = "INSERT INTO teachers(name,surname,telephone,nif, mail) VALUES(?,?,?,?,?)";
             $arrData = array($this->strName,$this->strSurname,$this->strTelephone,$this->strNif,$this->strMail);
             $resinsertTeachers = $this->insert($sql,$arrData);
              $return = $resinsertTeachers;
          }else{
	      $return = "exits";
	  }
	    return $return;
    }
     // ACTUALIZAMOS CAMPOS DE LA TABLA PROFESORES
  
    public function updateTeachers(int $id_teacher, string $name, string $surname, string $telephone, string $nif, string $mail)
    { 
	$this->strName = $name;
  	$this->strSurname = $surmane;
  	$this->strTelephone = $telephone;
  	$this->strNif = $nif;
  	$this->strMail = $mail; 
	
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
