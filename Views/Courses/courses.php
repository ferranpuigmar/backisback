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
    <div class="courses__header flex justify-between">
        <h1 class="text-2xl">Listado de cursos</h1>
        <button id="addCourseBtn" type="button" class="btn btn-primary" data-bs-toggle='modal' data-bs-target='#addCourseModal'>+ Añadir curso</button>
    </div>

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
                    if (count($data) === 0) {
                        $row .= "<tr>
                        <td colspan='7'>
                            <p>No hay cursos disponibles</p>
                        </tr>";
                    } else {
                        for ($i = 0; $i < count($data); $i++) {
                            $courseDateStart = date_create($data[$i]["date_start"]);
                            $courseDateEnd = date_create($data[$i]["date_end"]);
                            $desactiveClass = $data[$i]['active'] ? "" : "desactived";
                            $row .= "
                            <tr id='row_" . $data[$i]["id_course"] . "' class='" . $desactiveClass . "'>
                                <th scope='row' class='w-20'>" . $data[$i]["id_course"] . "</th>
                                <td class='w-40'>" . $data[$i]["name"] . "</td>
                                <td class='w-52'>" . $data[$i]["description"] . "</td>
                                <td class='w-32'>" . $courseDateStart->format("d-m-Y") . "</td>
                                <td class='w-32'>" . $courseDateEnd->format("d-m-Y") . "</td>
                                <td class='w-20'>" . isActive($data[$i]['active']) . "</td>
                                <td class='w-28'>
                                    <button data-id='" . $data[$i]["id_course"] . "' type='button' class='btn btn-primary btn-edit' data-bs-toggle='modal' data-bs-target='#editModal'>Editar</button>
                                    <button data-id='" . $data[$i]["id_course"] . "' type='button' class='btn btn-danger btn-delete'>Eliminar</button>
                                </td>
                            </tr>
                        ";
                        }
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

<!-- Modal for edit -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Editar curso</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="editForm" name="registerForm" data-url="<?php echo BASE_URL . '/Courses/setUpdateCourses' ?>" enctype="multipart/form-data" novalidate>
                        <div class="form-group">
                            <label for="edit_course_name">Nombre</label>
                            <input id="edit_course_name" name="name" type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="edit_course_description">Descripción</label>
                            <input id="edit_course_description" name="description" type="text" class="form-control" required>
                        </div>
                        <div class="form-check">
                            <input id="edit_course_active" class="form-check-input form-control" type="checkbox" value="active">
                            <label class="form-check-label pl-1" for="edit_course_active">
                                Curso activo
                            </label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="editCourseCloseBtn" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="editBtn" type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal for create new Course -->
<div class="modal fade" id="addCourseModal" tabindex="-1" aria-labelledby="addCourseModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Crear curso</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="addCourseForm" name="registerForm" data-url="<?php echo BASE_URL . '/Courses/setInsertCourses' ?>" enctype="multipart/form-data" novalidate>
                        <div class="form-group">
                            <label for="create_course_name">Nombre</label>
                            <input id="create_course_name" name="name" type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="create_course_description">Descripción</label>
                            <input id="create_course_description" name="description" type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="create_course_date_start">Fecha inicio</label>
                            <input id="create_course_date_start" name="date_start" type="date" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="create_course_date_end">Fecha Fin</label>
                            <input id="create_course_date_end" name="date_end" type="date" class="form-control" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="createCourseCloseBtn" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="createCourseBtn" type="button" class="btn btn-primary">Añadir curso</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    const listData = <?php echo json_encode($data, JSON_UNESCAPED_UNICODE) ?>;
    window.addEventListener('DOMContentLoaded', () => {
        const editModal = document.getElementById('editModal');

        editModal.addEventListener('show.bs.modal', (event) => {
            const closeBtn = document.getElementById('editCourseCloseBtn')
            var button = event.relatedTarget;
            var rowDataId = button.dataset.id;
            const data = listData.find(row => row.id_course === rowDataId)
            const requestUrl = editForm.dataset.url;
            const formData = new FormData();

            // elements from editForm
            const name = document.getElementById('edit_course_name');
            const description = document.getElementById('edit_course_description');
            const active = document.getElementById('edit_course_active');
            name.value = data.name;
            description.value = data.description;
            active.checked = parseInt(data.active);

            // listeners
            const formBtn = document.getElementById('editBtn');
            formBtn.addEventListener('click', async () => {
                formData.append('id_course', data.id_course)
                formData.append('name', name.value)
                formData.append('description', description.value)
                formData.append('active', active.checked ? "1" : "0")
                formData.append('date_start', data.date_start)
                formData.append('date_end', data.date_end)
                try {
                    const editCoursesResponse = await fetch(
                        requestUrl, {
                            method: 'POST',
                            body: formData
                        }
                    )
                    const response = await editCoursesResponse.json();
                    if (response.status === true) {
                        const tr = document.getElementById(`row_${data.id_course}`);
                        tr.innerHTML = `
                            <th scope='row' class='w-20'>${data.id_course}</th>
                            <td class='w-40'>${name.value}</td>
                            <td class='w-52'>${description.value}</td>
                            <td class='w-32'>${dayjs(data.date_start).format('DD-MM-YYYY')}</td>
                            <td class='w-32'>${dayjs(data.date_end).format('DD-MM-YYYY')}</td>
                            <td class='w-20'>${active.checked ? '<i class="far fa-check-circle"></i>' : '<i class="far fa-times-circle"></i>'}</td>
                            <td class='w-28'>
                                <button data-id='${data.id_course}' type='button' class='btn btn-primary btn-edit' data-bs-toggle='modal' data-bs-target='#editModal'>Editar</button>
                                <button data-id='${data.id_course}' type='button' class='btn btn-danger btn-delete'>Eliminar</button>
                            </td>
                        `;
                        swal.fire({
                            icon: 'success',
                            text: response.msg
                        });
                        closeBtn.click();
                    }
                } catch (error) {
                    console.log(error);
                }
            })
        })


        // delete button
        const deleteBtn = document.querySelectorAll('#coursesList .btn-delete');
        deleteBtn.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const rowId = e.target.dataset.id;
                const requestUrl = '<?= BASE_URL ?>/courses/setDeleteCourse';
                var formData = new FormData();
                formData.append('id_course', parseInt(rowId))
                try {
                    const deleteCoursesResponse = await fetch(
                        requestUrl, {
                            method: 'POST',
                            body: formData
                        }
                    )
                    const response = await deleteCoursesResponse.json();
                    if (response.status === true) {
                        const deletedRow = document.getElementById(`row_${rowId}`)
                        deletedRow.remove();
                        swal.fire({
                            icon: 'success',
                            text: response.msg
                        });
                    }

                } catch (error) {
                    console.log(error);
                }
            })
        })

        // Modal creación curso
        const createCourseModal = document.getElementById('addCourseModal');
        createCourseModal.addEventListener('show.bs.modal', function(event) {
            const createForm = document.getElementById('addCourseForm');
            const requestUrl = createForm.dataset.url;
            const formData = new FormData();
            const name = document.getElementById('create_course_name')
            const description = document.getElementById('create_course_description')
            const date_start = document.getElementById('create_course_date_start')
            const date_end = document.getElementById('create_course_date_end')
            const active = "1";

            // listeners
            const formAddCourseBtn = document.getElementById('createCourseBtn')
            formAddCourseBtn.addEventListener('click', async () => {
                formData.append('name', name.value)
                formData.append('description', description.value)
                formData.append('date_start', date_start.value)
                formData.append('date_end', date_end.value)
                formData.append('active', active)
                try {
                    const addCoursesResponse = await fetch(
                        requestUrl, {
                            method: 'POST',
                            body: formData
                        }
                    )
                    const response = await addCoursesResponse.json();
                    console.log(response)
                } catch (error) {
                    console.log(error);
                }
            })

        })
    })
</script>
