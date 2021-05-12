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

    public function listClass(string $strUser)
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
}
