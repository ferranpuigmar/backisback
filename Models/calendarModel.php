<?php

class calendarModel extends Mysql
{
    private $strUser;
    private $strPassword;
  
  public function __construct()
  {
    parent::__construct();
  }
   //recuperamos calendario de clases de un estudiante

    public function listSchedule(string $user, string $password)
    { 
        $sql = "select en.id_course, cla.id_class, sch.day, sch.time_start, sch.time_end, concat_ws('  ', te.name, te.surname)
                from students s JOIN enrollment en JOIN class cla JOIN schedule sch JOIN teachers te
                where s.username     = '$this->strUser'      and
                      s.pass         = '$this->strPassword'  and
                      s.id           = en.id_student         and  
                      en.id_course   = cla.id_course         and 
                      cla.id_class   = sch.id_class          and
                      cla.id_teacher = te.id_teacher";
        $request = $this->select_all($sql);
        return $request;      
    }
}
