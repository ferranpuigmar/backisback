<div id="calendar" class="scheduleCalendar"></div>
<?php
$courseDateStart = date_create($_SESSION['courseInfo']['date_start']);
$courseDateEnd = date_create($_SESSION['courseInfo']['date_end']);
$event = "";
for ($i = 0; $i < count($data); $i++) {
    if ($_SESSION['is_admin'] == "1") {
        $event .= "{
            title: '" . $data[$i]['name'] . "',
            start: '" . $data[$i]['day'] . "T" . $data[$i]['time_start'] . "',
            end: '" . $data[$i]['day'] . "T" . $data[$i]['time_end'] . "',
            color: '" . $data[$i]['color'] . "',
        },";
    } else {
        $event .= "{
            title: '" . $data[$i]['name'] . "',
            start: '" . $data[$i]['day'] . "T" . $data[$i]['time_start'] . "',
            end: '" . $data[$i]['day'] . "T" . $data[$i]['time_end'] . "',
            color: '" . $data[$i]['color'] . "',
            teacher: '" . $data[$i]['teacher'] . "'
        },";
    }
}
?>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const calendar = new campus.Schedule({
            calendarEl: 'calendar',
            config: {
                <?php
                if ($_SESSION['is_admin'] == "1") {
                    $now = date("Y-m-d");
                    echo "
                    validRange: {
                        start: '" . $now . "',
                    },";
                } else {
                    echo "
                    validRange: {
                        start: '" . $courseDateStart->format('Y-m-d') . "',
                        end: '" . $courseDateEnd->format('Y-m-d') . "'
                    },";
                }
                ?>
                events: [<?= $event ?>],
                eventMouseEnter: function(info) {
                    const tooltip = document.createElement('div');
                    tooltip.classList.add('tooltip');
                    const tooltipContent = `
            <dl>
              <?php
                if ($_SESSION['is_admin'] != "1") {
                    echo "<dt>Profesor:</dt><dd>\${info.event.extendedProps.teacher}</dd>";
                }
                ?>
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
