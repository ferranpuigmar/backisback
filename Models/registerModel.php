<?php

class registerModel extends Mysql
{
    private $strUsername;
    private $strPassword;
    private $strEmail;
    private $strName;
    private $strSurame;
    private $strTelephone;
    private $strNif;
    //private $dateDate_registered;
    
    public function __construct()
    {
        parent::__construct();
    }
  
 //incluimos el método para recuperar todos los cursos
    
     public function listCourses(string $active)
    {
               
        $this->strActive = '1';
         
        $sql = "SELECT * from courses WHERE 
                active = '$this->strActive'";
        //$arrData = array($this->strname,$this->strdescription,$this->strdate_start,$this->strdate_end);
// con el fetchall (devuelto todos), PDO::FETCH_ASSOC = ARRAY DE TODOS LOS REGISTROS 
		$request = $execute->fetchall(PDO::FETCH_ASSOC);
	    return $request;
      
    }
    
     public function registerStudent(string $username, string $pass, string $email, string $name, string $surname, string $telephone, string $nif)
    {
        $this->strUsername = $username;
        $this->strPassword = $pass;
        $this->strEmail = $email;
        $this->strName = $name;
        $this->strSurname = $surname;
        $this->strTelephone = $telephone;
        $this->strNif = $nif;
    //ojo ver con recoger la fecha y hora en formato timestamp $this->???Date_registered= $date_registered;
    
    //CONFIRMAMOS QUE NO EXISTA EL ESTUDIANTE QUE VAMOS A INSERTAR              
        $sql = "SELECT * from students WHERE 
                username = '$this->strUsername'";
        $request = $this->select($sql);
         return $request;
     
        IF (empty($request))
        {    
        
         $sql = "INSERT INTO students(username,pass,email,name,surname,telephone,nif,date_registered) VALUES(?,?,?,?,?,?,?,?)";
         $arrData = array($this->strUsername,$this->strPassword,$this->strEmail,$this->strEmail,$this->strName,$this->strSurname,$this->strTelephone,$this->strNif);
         $request_insert = $this->insert($sql,$arrData);
         return $request_insert;
        }else{
         return "exit"; 
             }
    }
}
