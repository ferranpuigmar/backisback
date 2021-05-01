<?php echo $_SESSION["name"]; ?>
<div class="container">
  <div class="loginForm accesForm">
    <div class="card" style="width: 18rem;">
      <div class="card-img-top" style="background: url('./dist/img/campus.jpg')"></div>
      <div class="card-body">
        <h5 class="card-title pb-2 text-indigo-600">Acceso al campus</h5>
        <form id="loginForm" name="loginForm" data-url="<?php echo BASE_URL . 'Login/loginUser' ?>" enctype="multipart/form-data">
          <div class="form-group">
            <label for="login_username">Usuario</label>
            <input id="login_username" name="username" type="text" class="form-control" placeholder="Tu nombre de usuario" required>
          </div>
          <div class="form-group">
            <label for="login_password">Contraseña</label>
            <input id="login_password" name="pass" type="password" class="form-control" placeholder="Password" required>
          </div>
          <div id="msgError" class="invalid-feedback -mt-2 mb-3"></div>
          <button id="loginFormSubmitBtn" type="submit" class="btn btn-primary w-full">Inciar sesión</button>
        </form>
      </div>
      <div class="card-footer text-muted">
        <span>No tengo cuenta</span>
        <a href="<?php echo BASE_URL . 'register' ?>" class="btn btn-outline-secondary w-full">Registrarme</a>
      </div>
    </div>
  </div>
</div>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    const login = new campus.LoginForm({
      form: 'loginForm',
      username: 'login_username',
      password: 'login_password',
    });
    login.init()
  });
</script>
