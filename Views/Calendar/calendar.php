<?php
var_dump($data);
?>

<div id="calendar"></div>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      validRange: {
        start: '2017-05-01',
        end: '2017-06-01'
      }
    });
    calendar.render();
  });
</script>
