<?php
include "Views/components/head.php";
?>
<?php
include "Views/components/header.php";

$menu = array(
  array(
    "icon" => "far fa-calendar-alt",
    "link" => "#",
    "name" => "Calendario"
  ),
  array(
    "icon" => "fas fa-chalkboard",
    "link" => "#",
    "name" => "Gestionar clases"
  ),
  array(
    "icon" => "fas fa-book-open",
    "link" => "#",
    "name" => "Gestionar curso"
  ),
  array(
    "icon" => "fas fa-user-cog",
    "link" => "#",
    "name" => "Asignar Roles"
  ),
  array(
    "icon" => "fas fa-chalkboard-teacher",
    "link" => "#",
    "name" => "Gestionar profesores"
  )
);

?>

<main class="dashboard_template">
  <div class="dashboardSection">
    <sidebar>
      <ul>
        <?php
        $listado = "";
        for ($i = 0; $i < count($menu); $i++) {
          $listado .= "<li>
                        <div>
                          <i class='" . $menu[$i]['icon'] . "'></i>
                          <a href='" . $menu[$i]['link'] . "'>Calendario</a>
                        </div>
                      </li>
                      ";
        }
        echo $listado;
        ?>
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
