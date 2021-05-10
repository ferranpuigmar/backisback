<?php

class registerModel extends Mysql
{
    private $strUsername;
    private $strPassword;
    private $strEmail;
    private $strName;
    private $strSurname;
    private $strTelephone;
    private $strNif;
    //private $dateDate_registered;

    public function __construct()
    {
        parent::__construct();
    }

    //incluimos el método para recuperar todos los cursos

    public function registerListCourses()
    {
        $sql = "SELECT * from courses WHERE 
        active = 1";
        $request = $this->select_all($sql);
        return $request;
    }

     // ALTA DE CURSOS                            
    public function insertStudents(string $username, string $pass, string $email, string $name, string $surname, string $telephone, string $nif)
    {
	    $return ="";
        $this->intId = $id;
	    $this->strUsername = $username;
        $this->strPass = $pass;
        $this->strEmail = $email;
        $this->strName = $name;
        $this->strSurname = $surname;
        $this->strTelephone = $telephone;
        $this->strNif = $nif;
        $date_registered = "2021-05-10";
        $this->strDat_registered = $date_registered;
	    
	  $sql = "SELECT * from students where id = '$this->intId";
          $reslistStudents = $this->select_all($sql);
        
	  if (empty($reslistStudents)) {
             $sql_insert = "INSERT INTO students(username,pass,email,name,surname,telephone,nif,date_registered) VALUES(?,?,?,?,?,?,?,?)";
             $arrData = array($this->strUsername, $this->strPass, $this->strEmail, $this->strName, $this->strSurname, $this->strTelephone, $this->strNif, $this->strDat_registered);
             $resinsertStudents = $this->insert($sql_insert,$arrData);
             $return = $resinsertStudents;
	  }else{
	     $return = "exits";
	  }
	    return $return;
    }
}
