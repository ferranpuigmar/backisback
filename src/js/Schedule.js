import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import listPlugin from '@fullcalendar/list';
export class Schedule{
  constructor(fields){
    this.calendarWrapper = document.querySelector(`#${fields.calendarEl}`);
    this.calendar = null;
    this.config = fields.config;
  }

  init = () => {
    this.listeners();
  }

  render = () => {
    this.calendar.render();
  }

  listeners(){
    this.calendar = new Calendar(
      this.calendarWrapper, 
      {
        locale: esLocale,
        themeSystem: 'bootstrap',
        plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        ...this.config
      });
  }
}
