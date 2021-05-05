<?php
include "Views/components/head.php";
?>
<?php
include "Views/components/header.php";
?>
<main class="dashboard_template">
  <div class="dashboardSection">
    <sidebar>
      <ul>
        <li>
          <div>
            <i class="far fa-calendar-alt"></i>
            <a href="#">Calendario</a>
          </div>
        </li>
        <li>
          <div>
            <i class="fas fa-chalkboard"></i>
            <a href="#">Gestionar clases</a>
          </div>
        </li>
        <li>
          <div>
            <i class="fas fa-book-open"></i>
            <a href="#">Gestionar curso</a>
          </div>
        </li>
        <li>
          <div>
            <i class="fas fa-user-cog"></i>
            <a href="#">Asignar Roles</a>
          </div>
        </li>
        <li>
          <div>
            <i class="fas fa-chalkboard-teacher"></i>
            <a href="#">Gestionar profesores</a>
          </div>
        </li>
      </ul>
    </sidebar>
    <article>
      <?php include $view ?>
    </article>
  </div>
</main>
<?php
include "Views/components/footer_dashboard.php";
?>
