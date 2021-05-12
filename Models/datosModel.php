<?php

class datosModel extends Mysql
{
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
            $sql = "select * from users_admin 
            where username = '$this->strUser'";
        } else {
            $sql = "select * from students 
            where username = '$this->strUser'";
        }

        $request = $this->select($sql);
        return $request;
    }

    // ACTUALIZAMOS CAMPOS DE LA TABLA CURSOS
    public function updateDatos(string $strusername, string $pass, string $email)
    {
        $this->strUser = $strusername;
        $this->strPasword = $pass;
        $this->strMail = $email;
        $sql_update = "UPDATE users_admin SET username=?, password=?, email=? WHERE username = '$this->strUser'";
        $arrData = array($this->strUser, $this->strPasword, $this->strMail);
        $resupdateDatos = $this->update($sql_update, $arrData);
        // if ($_SESSION['is_admin'] == "1") {

        // } else {
        //     $sql_update = "UPDATE students SET username=?, pass=?, email=? WHERE username = '$this->strUser'";
        //     $arrData = array($this->strUser, $this->strPasword, $this->strMail);
        //     $resupdateDatos = $this->update($sql_update, $arrData);
        // }
        return $resupdateDatos;
    }
}
