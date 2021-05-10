<?php

function isActive($value)
{
    switch ($value) {
        case "1":
            return '<i class="far fa-check-circle"></i>';
        default:
            return '<i class="far fa-times-circle"></i>';
    }
}

?>

<div id="courses" class="courses">
    <h1 class="text-2xl">Listado de cursos</h1>
    <?php
    if (isset($data['status'])) {
        echo "<div>" . $data['msg'] . "</div>";
    } else {
    ?>
        <div id="coursesList" class="course-list">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Comienzo</th>
                        <th scope="col">Fin</th>
                        <th scope="col">Activo</th>
                        <th scope="col">Aciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $row = "";
                    for ($i = 0; $i < count($data); $i++) {
                        $courseDateStart = date_create($data[$i]["date_start"]);
                        $courseDateEnd = date_create($data[$i]["date_end"]);
                        $desactiveClass = $data[$i]['active'] ? "" : "desactived";
                        $row .= "
                                <tr class='" . $desactiveClass . "'>
                                    <th scope='row' class='w-20'>" . $data[$i]["id_course"] . "</th>
                                    <td class='w-40'>" . $data[$i]["name"] . "</td>
                                    <td class='w-52'>" . $data[$i]["description"] . "</td>
                                    <td class='w-32'>" . $courseDateStart->format("d-m-Y") . "</td>
                                    <td class='w-32'>" . $courseDateEnd->format("d-m-Y") . "</td>
                                    <td class='w-20'>" . isActive($data[$i]['active']) . "</td>
                                    <td class='w-72'>
                                        <button data-id='" . $data[$i]["id_course"] . "' type='button' class='btn btn-primary btn-edit' data-bs-toggle='modal' data-bs-target='#editModal'>Editar</button>
                                        <button data-id='" . $data[$i]["id_course"] . "' type='button' class='btn btn-secondary btn-desactive'>Desactivar</button>
                                        <button data-id='" . $data[$i]["id_course"] . "' type='button' class='btn btn-danger btn-delete'>Eliminar</button>
                                    </td>
                                </tr>
                            ";
                    }
                    echo $row;
                    ?>
                </tbody>
            </table>
        </div>
    <?php
    }
    ?>
</div>
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Editar curso</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    const listData = <?php echo json_encode($data, JSON_UNESCAPED_UNICODE) ?>;

    window.addEventListener('DOMContentLoaded', () => {
        const editModal = document.getElementById('editModal');
        editModal.addEventListener('show.bs.modal', function(event) {
            var button = event.relatedTarget;
            var rowDataId = button.dataset.id;
            const data = listData.find(row => row.id_course === rowDataId)
            console.log('data: ', data)
        })
    })
</script>
