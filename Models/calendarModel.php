<?php

class calendarModel extends Mysql
{
    private $strUser;
    private $strPassword;

    public function __construct()
    {
        parent::__construct();
    }

    //recuperamos el curso de un estudiante

    public function listCourses(string $user)
    {
        $this->strUser = $user;
        $sql = "SELECT cur.description, cur.date_start, cur.date_end
        FROM students s JOIN enrollment en JOIN courses cur WHERE 
        s.username = '$this->strUser' and
        s.id = en.id_student and 
        en.id_course = cur.id_course";
        $request = $this->select_all($sql);
        return $request;
    }

    //recuperamos calendario de clases de un estudiante conectado

    public function listClass(string $strUser)
    {
        $this->strIdTeacher = $strUser;
        $this->strUser = $strUser;

        if ($_SESSION['is_admin'] == "1") {
            $sql = "select cla.id_class, cla.name, cla.color, sch.day, sch.time_start, sch.time_end
            from teachers t JOIN class cla JOIN schedule sch
            where t.id_teacher = $this->strIdTeacher and
                  cla.id_teacher = $this->strIdTeacher and
                  cla.id_class = sch.id_class";
        } else {
            $sql = "select cla.name, cla.color, sch.day, sch.time_start, sch.time_end, 
            concat_ws(' ', te.name, te.surname) as teacher
            from students s JOIN enrollment en JOIN class cla JOIN schedule sch JOIN teachers te
            where s.username     = '$this->strUser'      and
                  s.id           = en.id_student         and
                  en.id_course   = cla.id_course         and
                  cla.id_class   = sch.id_class          and
                  cla.id_teacher = te.id_teacher";
        }

        $request = $this->select_all($sql);
        return $request;
    }
}
