<div class="container">
  <div class="registerForm accesForm">
    <div class="card">
      <div class="card-img-top" style="background: url('./dist/img/campus.jpg')"></div>
      <div class="card-body">
        <h2 class="card-title text-indigo-600 text-center">Registro de estudiantes</h2>
        <form id="registerForm" name="registerForm" data-url="<?php echo BASE_URL . 'Register/registerUser' ?>" enctype="multipart/form-data">
          <div class="registerForm__titleCols">
          </div>
          <div class="row">
            <div class="col-6">
              <h4 class="registerForm__subTitle">1. Datos personales</h4>
              <div class="row">
                <div class="form-group">
                  <label for="register_name">Nombre</label>
                  <input id="register_name" name="name" type="text" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="register_surnames">Apellidos</label>
                  <input id="register_surnames" name="surnames" type="text" class="form-control" required>
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <label for="register_dni">DNI</label>
                  <input id="register_dni" name="dni" type="text" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="register_phone">Teléfono</label>
                  <input id="register_phone" name="phone" type="text" class="form-control" required>
                </div>
              </div>
            </div>
            <div class="col-6">
              <h4 class="registerForm__subTitle">2. Datos académicos</h4>
              <div class="row">
                <div class="form-group">
                  <label for="register_username">Usuario</label>
                  <input id="register_username" name="username" type="text" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="register_pass">Contraseña</label>
                  <input id="register_pass" name="pass" type="password" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="register_course">¿A que curso estás apuntado?</label>
                  <select name="register_course" class="form-select" aria-label="Default select example" required>
                    <option value="0" selected>Seleciona un curso</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div id="msgError" class="invalid-feedback -mt-2 mb-3"></div>
          <div class="text-center mt-3">
            <button id="loginFormSubmitBtn" type="submit" class="btn btn-primary btn-lg">Registrarme</button>
          </div>
        </form>
      </div>
      <div class="card-footer text-muted">
        <span>Ya soy usuario</span>
        <a href="<?php echo BASE_URL . 'login' ?>" class="btn btn-outline-secondary ">Inciar sesión</a>
      </div>
    </div>
  </div>
</div>
<script>
  // window.addEventListener("DOMContentLoaded", () => {
  //   const login = new campus.LoginForm({
  //     form: 'loginForm',
  //     username: 'register_username',
  //     password: 'register_password',
  //   });
  //   login.init()
  // });
</script>
