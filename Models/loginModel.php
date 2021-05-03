<?php

class loginModel extends Mysql
{
    private $intIdUser;
    private $strUser;
    private $strPassword;
    private $strToken;

    public function __construct()
    {
        parent::__construct();
    }

    public function loginUser(string $user, string $password)
    {
        $this->strUser = $user;
        $this->strPassword = $password;
        $sql = "SELECT * from students WHERE 
                username = '$this->strUser' and
                pass = '$this->strPassword'
                ";
        $request = $this->select($sql);
        if ($request == 100)
        {
        $sql = "SELECT * from user_admin WHERE 
                username = '$this->strUser' and
                pass = '$this->strPassword'
                ";
        }
        $request = $this->select($sql);
            
        return $request;
    }
}
