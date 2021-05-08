<div id="calendar" class="scheduleCalendar"></div>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const calendar = new campus.Schedule({
      calendarEl: 'calendar',
      config: {
        validRange: {
          start: '2021-05-01',
          end: '2021-08-01'
        }
      }
    })
    calendar.init();
    calendar.render();
  });
</script>
