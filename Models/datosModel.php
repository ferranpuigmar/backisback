<?php

class datosModel extends Mysql
{
    private $strUser;
    private $strPassword;

    public function __construct()
    {
        parent::__construct();
    }


    //recuperamos usuarios o estudiantes 

    public function listDatos(string $strUser)
    {
        $this->strIdTeacher = $strUser;
        $this->strUser = $strUser;

        if ($_SESSION['is_admin'] == "1") {
            $sql = "select *            from users_admin 
            where username = $this->strUser";
        } else {
            $$sql = "select *            from students 
            where username = $this->strUser";
        }

        $request = $this->select_all($sql);
        return $request;
    }
    //recuperamos usuarios o estudiantes 

    public function updateDatos(string $struser)
    {
        $this->strIdTeacher = $struser;
        $this->strUser = $struser;

        if ($_SESSION['is_admin'] == "1") {
            $sql = "select *            from users_admin 
            where username = $this->strUser";
        } else {
            $$sql = "select *            from students 
            where username = $this->strUser";
        }

        $request = $this->select_all($sql);
        return $request;
    // ACTUALIZAMOS CAMPOS DE LA TABLA CURSOS
    public function updateDatos(string $strusername, string $pass, string $mail)
    {
        $return = "";
        $this->strUser = $strusername;
        $this->strPasword = $pass;
        $this->strMail = $mail;
        
        if ($_SESSION['is_admin'] == "1") {
         $sql_update = "UPDATE users_admin  SET username=?, pass=?, mail=? where username = $this->strUser";
         $arrData = array($this->strUser, $this->strPasword, $this->strMail);
         $resupdateDatos = $this->update($sql_update, $arrData);
         $result = 
        }else{
         $sql_update = "UPDATE users  SET username=?, pass=?, mail=? where username = $this->strUser";
         $arrData = array($this->strUser, $this->strPasword, $this->strMail);
         $resupdateDatos = $this->update($sql_update, $arrData);
        
        }
        return $resupdate Datos;
    
    }
}
