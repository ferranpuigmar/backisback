<div id="calendar" class="scheduleCalendar"></div>
<?php
// var_dump($data);
$event = "";
for ($i = 0; $i < count($data); $i++) {
  $event .= "{
    title: '" . $data[$i]['name'] . "',
    start: '" . $data[$i]['day'] . "T" . $data[$i]['time_start'] . "',
    end: '" . $data[$i]['day'] . "T" . $data[$i]['time_end'] . "',
    color: '" . $data[$i]['color'] . "',
    teacher: '" . $data[$i]['teacher'] . "'
  },";
}
?>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const calendar = new campus.Schedule({
      calendarEl: 'calendar',
      config: {
        validRange: {
          start: '2021-05-01',
          end: '2021-08-01'
        },
        events: [<?= $event ?>],
        eventMouseEnter: function(info) {
          const tooltip = document.createElement('div');
          tooltip.classList.add('tooltip');
          const tooltipContent = `
            <dl>
              <dt>Profesor:</dt>
              <dd>${info.event.extendedProps.teacher}</dd>
              <dt>Clase:</dt>
              <dd>${info.event.title}</dd>
              <dt>Horario:</dt>
              <dd>${dayjs(info.event.start).format('HH:mm')} - ${dayjs(info.event.end).format('HH:mm')}</dd>
            </dl>
          `;
          tooltip.innerHTML = tooltipContent;
          info.el.appendChild(tooltip);
        },
        eventMouseLeave: function(info) {
          const tooltip = info.el.querySelector('.tooltip');
          info.el.removeChild(tooltip);
        }
      }
    })
    calendar.init();
    calendar.render();
  });
</script>
