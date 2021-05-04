<?php
include "Views/components/head.php";
?>
<?php
include "Views/components/header.php";
?>
<main template="dashboard_template">
  <div class="container">
    <div class="dashboardSection">
      <sidebar>
        menu...
      </sidebar>
      <article>
        <?php include $view ?>
      </article>
    </div>
  </div>
</main>
<?php
include "Views/components/footer_dashboard.php";
?>
