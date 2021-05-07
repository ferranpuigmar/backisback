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

    public function registerStudent(string $username, string $pass, string $email, string $name, string $surname, string $telephone, string $nif)
    {
        $this->strUsername = $username;
        $this->strPassword = $pass;
        $this->strEmail = $email;
        $this->strName = $name;
        $this->strSurname = $surname;
        $this->strTelephone = $telephone;
        $this->strNif = $nif;
        //ojo ver como recoger la fecha y hora en formato timestamp $this->???Date_registered= $date_registered;

        //CONFIRMAMOS QUE NO EXISTA EL ESTUDIANTE QUE VAMOS A INSERTAR 
        /*
        $sql = "SELECT * from students 
        WHERE username = '$this->strUsername'";
        $request = $this->select($sql);
        return $request;

        if (empty($request)) {
        */
        //OJO FALTA LA FECHA 
            $sql = "INSERT INTO students(username,pass,email,name,surname,telephone,nif,date_registered) VALUES(?,?,?,?,?,?,?,?)";
            $insert = $this->prepare($sql);
            $arrData = array($this->strUsername, $this->strPassword, $this->strEmail, $this->strEmail, $this->strName, $this->strSurname, $this->strTelephone, $this->strNif);
            $resInsert = $insert->execute($arrData);
            $request = $this->insert($sql, $arrData);
            $request = $this->lastInsertId();
            return $request; 
        /*
        } else {
            return "exit";
        }
        */
    }
}
