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

    public function loginUser(string $pUser, string $pPassword)
    {
        $this->strUser = $pUser;
        $this->strPassword = $pPassword;
        $sql = "SELECT * from students WHERE 

                username = '$this->strUser' and
                pass = '$this->strPassword'
                ";
        $requestUser = $this->select($sql);

        // Si no es estudiante, chequeamos la tabla users (admin)
        if (empty($requestUser)) {
            $sql_admin = "SELECT * from users WHERE
                username = '$this->strUser' and
                password = '$this->strPassword'
                ";
            $request_admin = $this->select($sql_admin);
            // si existe, nos traemos el nombre y apellidos
            // y lo añadimos al array de la respuesta de $request_admin
            if (!empty($request_admin)) {
                $adminId = $request_admin['id_user_admin'];
                $sql_users_admin = "SELECT * from users_admin WHERE
                username = '$this->strUser' AND
                id_user_admin = '$adminId'
                ";
                $request_adminData = $this->select($sql_users_admin);
                return $request_adminData;
            }
            return $request_admin;
        } else {
            return $requestUser;
        }
    }
}
