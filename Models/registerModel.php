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
         
         $sql = "INSERT INTO students(username,pass,email,name,surname,telephone,nif,date_registered) VALUES(?,?,?,?,?,?,?,?)";
        // $insert = $this->conexion->prepare($sql);
		 $arrData = array($this->strUsername,$this->strPassword,$this->strEmail,$this->strEmail,$this->strName,$this->strSurname,$this->strTelephone,$this->strNif);
         $request_insert = $this->insert($sql,$arrData);
         return $request_insert;

    }
}
