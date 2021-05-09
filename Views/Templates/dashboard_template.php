<?php
include "Views/components/head.php";
include "Views/components/header.php";

$menu = array(
  array(
    "sectionSlug" => 'calendar',
    "icon" => "far fa-calendar-alt",
    "link" => "/calendar",
    "name" => "Calendario"
  ),
  array(
    "sectionSlug" => 'manage-classes',
    "icon" => "fas fa-chalkboard",
    "link" => "/classes",
    "name" => "Gestionar clases"
  ),
  array(
    "sectionSlug" => 'manage-course',
    "icon" => "fas fa-book-open",
    "link" => "/course",
    "name" => "Gestionar curso"
  ),
  array(
    "sectionSlug" => 'assign-roles',
    "icon" => "fas fa-user-cog",
    "link" => "/roles",
    "name" => "Asignar Roles"
  ),
  array(
    "sectionSlug" => 'manage-teachers',
    "icon" => "fas fa-chalkboard-teacher",
    "link" => "/teachers",
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
          $isSelected = $menu[$i]['sectionSlug'] === $_SESSION['section'];
          $selectedClassName = $isSelected ? "selected" : "";
          $listado .= "<li>
                        <div class=" . $selectedClassName . ">
                          <i class='" . $menu[$i]['icon'] . "'></i>
                          <a href='" . BASE_URL . $menu[$i]['link'] . "'>" . $menu[$i]['name'] . "</a>
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
