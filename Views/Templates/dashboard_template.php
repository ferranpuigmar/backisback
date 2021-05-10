<?php
include "Views/components/head.php";
include "Views/components/header.php";

$menu = array(
    array(
        "sectionSlug" => 'calendar',
        "icon" => "far fa-calendar-alt",
        "link" => "/calendar",
        "name" => "Calendario",
        "private" => false,
        "has-divider" => false
    ),
    array(
        "sectionSlug" => 'edit-data',
        "icon" => "fas fa-user-edit",
        "link" => "/profile",
        "name" => "Editar Datos",
        "private" => false,
        "has-divider" => true
    ),
    array(
        "sectionSlug" => 'manage-classes',
        "icon" => "fas fa-chalkboard",
        "link" => "/classes",
        "name" => "Gestionar clases",
        "private" => true,
        "has-divider" => false
    ),
    array(
        "sectionSlug" => 'manage-course',
        "icon" => "fas fa-book-open",
        "link" => "/courses",
        "name" => "Gestionar curso",
        "private" => true,
        "has-divider" => false
    ),
    array(
        "sectionSlug" => 'assign-roles',
        "icon" => "fas fa-user-cog",
        "link" => "/roles",
        "name" => "Asignar Roles",
        "private" => true,
        "has-divider" => false
    ),
    array(
        "sectionSlug" => 'manage-teachers',
        "icon" => "fas fa-chalkboard-teacher",
        "link" => "/teachers",
        "name" => "Gestionar profesores",
        "private" => true,
        "has-divider" => false
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
                    if ($_SESSION['is_admin'] === true || $menu[$i]['private'] === false) {
                        $listado .= "<li>
                        <div class=" . $selectedClassName . ">
                          <i class='" . $menu[$i]['icon'] . "'></i>
                          <a href='" . BASE_URL . $menu[$i]['link'] . "'>" . $menu[$i]['name'] . "</a>
                        </div>
                      </li>
                      ";
                        if ($menu[$i]['has-divider'] === true) {
                            $listado .= "<hr>";
                        }
                    }
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
