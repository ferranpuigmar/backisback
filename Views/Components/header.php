<?php
$courseDateStart = date_create($_SESSION['courseInfo']['date_start']);
$courseDateEnd = date_create($_SESSION['courseInfo']['date_end']);
?>
<header class="dashboardHeader">
  <div class="dashboardHeader__wrapper">
    <div class="dashboardHeader__logo">
      <span class="dashboardHeader__logo__course"><?= $_SESSION['courseInfo']['name'] ?></span>
      <span class="dashboardHeader__logo__dates"><?= "(" . $courseDateStart->format('M Y') . " - " . $courseDateEnd->format('M Y') . ")" ?></span>

    </div>
    <div class="dashboardHeader__userActions">
      <div class="dashboardHeader__user">
        <div id="avatar">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" version="1.1">
            <circle fill="#4681e1a7" width="64" height="64" cx="32" cy="32" r="32" /><text x="50%" y="50%" style="color: #ffffff;line-height: 1;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" alignment-baseline="middle" text-anchor="middle" font-size="26" font-weight="400" dy=".1em" dominant-baseline="middle" fill="#ffffff">AB</text>
          </svg>
        </div>
        <div class="dashboardHeader__user__info">
          <div class="dashboardHeader__user__info__username">
            <div class="dashboardHeader__user__info__name"><span>Hola,</span><span class="fw-bold pt-1 d-block"><?= $_SESSION['name'] ?></span></div>
          </div>
          <div class="dashboardHeader__user__info__logout">
            <i class="far fa-times-circle"></i>
            <a href="#">Cerrar sesión</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
