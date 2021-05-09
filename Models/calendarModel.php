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
    $sql = "select cur.description, cur.date_start, cur.date_end
            from students s JOIN enrollment en JOIN courses cur
            where s.username = '$this->strUser' and
            s.id = en.id_student                and 
            en.id_course = cur.id_course";

    $request = $this->select_all($sql);
    return $request;
  }

  //recuperamos calendario de clases de un estudiante conectado

  public function listClass(string $user)
  {
    $this->strUser = $user;
    $sql = "select cla.name, cla.color, sch.day, sch.time_start, sch.time_end, 
              concat_ws(' ', te.name, te.surname) as teacher
              from students s JOIN enrollment en JOIN class cla JOIN schedule sch JOIN teachers te
              where s.username     = '$this->strUser'      and
                    s.id           = en.id_student         and  
                    en.id_course   = cla.id_course         and 
                    cla.id_class   = sch.id_class          and
                    cla.id_teacher = te.id_teacher";
    $request = $this->select_all($sql);
    return $request;
  }
}
