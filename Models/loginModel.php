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
            $sql_admin = "SELECT u.username, u.id_user, u.id_user_admin, t.name, t.surname, t.id_teacher  from users u JOIN teachers t WHERE
                u.username = '$this->strUser' and
                u.password = '$this->strPassword'and
                t.id_user = u.id_user
                ";
            $request_admin = $this->select($sql_admin);
            return $request_admin;
        } else {
            return $requestUser;
        }
    }

    public function listCourseInfo(string $user)
    {
        $this->strUser = $user;
        $sql = "select cur.name, cur.description, cur.date_start, cur.date_end
            from students s JOIN enrollment en JOIN courses cur
            where s.username = '$this->strUser' and
            s.id = en.id_student                and 
            en.id_course = cur.id_course";

        $request = $this->select($sql);
        return $request;
    }
    /*
    // esta es la lista de cursos de una profesora (ojo ver donde incluir en el hear) 
    
    public function listCourseteacher(string $user)
    {
        $this->strUser = $user;
        
        $sql = "select t.id_teacher, cur.name, cur.description, cur.date_start, cur.date_end
                from users u JOIN teachers t JOIN class cla JOIN courses cur
                     where u.username = '$this->strUser' 
                       and u.id_user = t.id_user
                       and t.id_teacher = cla.id_teacher 
                      and cla.id_course = cur.id_course";

        $request = $this->select_all($sql);
        return $request;
    }
     */
}
