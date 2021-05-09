<?php

class classsModel extends Mysql
{
   	$this->strId_teacher = $id_teacher;
	$this->strId_course = $id_course;
	$this->strId_schedule = $id_schedule;
	$this->strName= $id_name;
	$this->strColor = $color;
         
	
    public function __construct()
    {
        parent::__construct();
    }
   // LISTAMOS TODOS LAS CLASES DE UN CURSO  
    public function listClass()
    {
        $sql = "SELECT * from class";
        $reslistClass = $this->select all($sql);  
           return $reslistClass;
    }
   // ALTA DE CURSOS                            
    public function insertClass(int $id_teacher, int $id_course, int $id_schedule, string $name, string $color)
    {      
         $sql = "INSERT INTO class(id_teacher, id_course, id_schedule, name, color) VALUES(?,?,?,?,?)";
         $arrData = array($this->intId_teacher,$this->intId_course,$this->intId_schedule,$this->strName,$this->strColor);
         $resinsertClass = $this->insert($sql,$arrData);
         return $resinsertClass;

    }
     // ACTUALIZAMOS CAMPOS DE LA TABLA CLASES (ASIGNATURAS)
  
    public function updateClass(int $id_class, int $id_teacher, int $id_course, int $id_schedule, string $name, string $color)
    {
        $sql = "UPDATE class SET id_teacher=?, id_course=?, id_schedule=?, name=?, color=? WHERE id_class=$id_class";
	$arrData = array($this->intId_teacher,$this->intId_course,$this->intId_schedule,$this->strName,$this->strColor);
	$resupdateClass = $update->execute($arrData);
		return $resupdateClass;
	    
    }
	// BORRAMOS CLASES
  
    public function deleteClass(int $id_class)
    {  
        $sql = "DELETE from class WHERE id_class=$id_class";
	$resdeleteClass = $update->execute($arrData);
		return $resdeleteClass;
	    
    }

}
