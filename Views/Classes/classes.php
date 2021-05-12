<div id="classes" class="classes">
    <div class="classes__header flex justify-between">
        <h1 class="text-2xl">Listado de clases</h1>
        <button id="addClassBtn" type="button" class="btn btn-primary" data-bs-toggle='modal' data-bs-target='#addClassModal'>+ Añadir Clase</button>
    </div>

    <?php
    if (isset($data['status'])) {
        echo "<div>" . $data['msg'] . "</div>";
    } else {
    ?>
        <div id="classesList" class="class-list">
            <table id="classListTable" class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Profesor</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $row = "";
                    if (count($data) === 0) {
                        $row .= "<tr>
                        <td colspan='4'>
                            <p>No hay clases disponibles</p>
                        </tr>";
                    } else {
                        for ($i = 0; $i < count($data); $i++) {
                            $row .= "
                            <tr id='row_" . $data[$i]["id_class"] . "'>
                                <th scope='row' class='w-20'>" . $data[$i]["id_class"] . "</th>
                                <td class='w-40'>" . $data[$i]["name"] . "</td>
                                <td class='w-40'>" . $data[$i]["courseName"] . "</td>
                                <td class='w-40'>" . $data[$i]["teacherName"] . "</td>
                                <td class='w-56'>
                                    <button data-title='" . $data[$i]["name"] . "' data-id='" . $data[$i]["id_class"] . "' type='button' class='btn btn-info btn-schedule' data-bs-toggle='modal' data-bs-target='#schedulesModal'>Ver horarios</button>
                                    <button data-id='" . $data[$i]["id_class"] . "' type='button' class='btn btn-secondary btn-edit' data-bs-toggle='modal' data-bs-target='#editModal'>Modificar</button>
                                    <button data-id='" . $data[$i]["id_class"] . "' type='button' class='btn btn-danger btn-delete'>Eliminar</button>
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
                    <h5 class="modal-title">Editar Clase</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="editForm" name="editClassForm" data-url="<?php echo BASE_URL . '/Classes/updateClass' ?>" enctype="multipart/form-data" novalidate>
                        <div class="form-group">
                            <label for="edit_class_name">Nombre</label>
                            <input id="edit_class_name" name="name" type="text" class="form-control" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="editClassCloseBtn" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="editClassBtn" type="button" class="btn btn-primary">Guardar cambios</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal for schedules -->
<div class="modal fade" id="schedulesModal" tabindex="-1" aria-labelledby="schedulesModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table id="scheduleListTable" class="table">
                        <thead>
                            <tr>
                                <th class="w-1/2" scope="col">Día</th>
                                <th class="w-1/4" scope="col">Empieza</th>
                                <th class="w-1/4" scope="col">Acaba</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button id="scheduleClassCloseBtn" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal for create new Course -->
<div class="modal fade" id="addClassModal" tabindex="-1" aria-labelledby="addClassModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Crear curso</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="addClassForm" name="registerForm" data-url="<?php echo BASE_URL . '/Courses/setInsertCourses' ?>" enctype="multipart/form-data" novalidate>
                        <div class="form-group">
                            <label for="create_class_name">Nombre</label>
                            <input id="create_class_name" name="name" type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="create_class_description">Descripción</label>
                            <input id="create_class_description" name="description" type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="create_class_date_start">Fecha inicio</label>
                            <input id="create_class_date_start" name="date_start" type="date" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="create_class_date_end">Fecha Fin</label>
                            <input id="create_class_date_end" name="date_end" type="date" class="form-control" required>
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

    function renderTr(data) {
        return `
            <td class='w-40'>${data.day}</td>
            <td class='w-52'>${data.courseName}</td>
            <td class='w-28'>
            <button data-title='${data.title}' data-id='${data.id_class}' type='button' class='btn btn-info btn-schedule' data-bs-toggle='modal' data-bs-target='#schedulesModal'>Ver horarios</button>
                <button data-id='${data.id_class}' type='button' class='btn btn-secondary btn-edit' data-bs-toggle='modal' data-bs-target='#editModal'>Editar</button>
                <button data-id='${data.id_class}' type='button' class='btn btn-danger btn-delete'>Eliminar</button>
            </td>
        `;
    }

    function renderScheduleTr(data) {
        return `
            <td class='w-40'>${data.day}</td>
            <td class='w-52'>${data.time_start}</td>
            <td class='w-52'>${data.time_end}</td>
        `;
    }

    window.addEventListener('DOMContentLoaded', () => {
        const editModal = document.getElementById('editModal');

        editModal.addEventListener('show.bs.modal', (event) => {
            const closeBtn = document.getElementById('editClassCloseBtn')
            const button = event.relatedTarget;
            const rowDataId = button.dataset.id;
            const data = listData.find(row => row.id_class === rowDataId)
            const requestUrl = editForm.dataset.url;
            const formData = new FormData();

            // elements from editForm
            const name = document.getElementById('edit_class_name');
            const course = data.courseName;
            const id_class = rowDataId;
            name.value = data.name;

            // listeners
            const formBtn = document.getElementById('editClassBtn');
            formBtn.addEventListener('click', async () => {
                formData.append('id_class', data.id_class)
                formData.append('name', name.value)
                formData.append('courseName', course)
                try {
                    const editClassResponse = await fetch(
                        requestUrl, {
                            method: 'POST',
                            body: formData
                        }
                    )
                    const response = await editClassResponse.json();
                    if (response.status === true) {
                        const tr = document.getElementById(`row_${data.id_class}`);
                        tr.innerHTML = renderTr({
                            id_class: data.id_class,
                            name: name.value,
                            courseName: course.value,
                            id_schedule: data.id_schedule,
                            title: name.value
                        });
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
        const deleteBtn = document.querySelectorAll('#classesList .btn-delete');
        deleteBtn.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const rowId = e.target.dataset.id;
                const requestUrl = '<?= BASE_URL ?>/classes/setDeleteClasses';
                const formData = new FormData();
                formData.append('id_class', parseInt(rowId))
                try {
                    const deleteClassResponse = await fetch(
                        requestUrl, {
                            method: 'POST',
                            body: formData
                        }
                    )
                    const response = await deleteClassResponse.json();
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
        const createCourseModal = document.getElementById('addClassModal');
        createCourseModal.addEventListener('show.bs.modal', function(event) {
            const createForm = document.getElementById('addClassForm');
            const requestUrl = createForm.dataset.url;
            const formData = new FormData();
            const name = document.getElementById('create_class_name')
            const description = document.getElementById('create_class_description')
            const date_start = document.getElementById('create_class_date_start')
            const date_end = document.getElementById('create_class_date_end')
            const active = 1;

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
                    if (response.status === true) {
                        const tbody = document.querySelector('#courseListTable tbody');
                        const tr = document.createElement('tr');
                        tr.setAttribute("id", `row_${Number(response.id)}`);
                        tr.innerHTML = renderTr({
                            id_class: Number(response.id),
                            name: name.value,
                            description: description.value,
                            date_start: date_start.value,
                            date_end: date_end.value,
                            active: true
                        });
                        tbody.appendChild(tr);
                    }
                } catch (error) {
                    console.log(error);
                }
            })

        })

        // Ver horarios
        const viewScheduleModal = document.getElementById('schedulesModal');
        viewScheduleModal.addEventListener('show.bs.modal', async function(event) {
            const button = event.relatedTarget;
            const id_class = button.dataset.id;
            const title = button.dataset.title;
            const modalDivTitle = document.querySelector('#schedulesModal .modal-title');
            modalDivTitle.innerHTML = title;

            try {
                const requestUrl = '<?= BASE_URL ?>/classes/listScheduleClass';
                const formData = new FormData();
                formData.append('id_class', id_class)
                const getSchedulesResp = await fetch(
                    requestUrl, {
                        method: 'POST',
                        body: formData
                    }
                )
                const response = await getSchedulesResp.json();
                console.log('resonse: ', response)
                if (!response.status) {
                    const tbody = document.querySelector('#scheduleListTable tbody');
                    tbody.innerHTML = "";
                    response.forEach(schedule => {
                        const tr = document.createElement('tr');
                        tr.innerHTML = renderScheduleTr({
                            day: dayjs(schedule.day).format('DD-MM-YYYY'),
                            time_start: schedule.time_start,
                            time_end: schedule.time_end,
                        });
                        console.log(tr)
                        tbody.appendChild(tr);
                    })
                }
            } catch (error) {
                console.log(error);
            }
        })
    })
</script>
