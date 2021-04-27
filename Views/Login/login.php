<div class="container">
  <div class="loginForm accesForm">
    <div class="card" style="width: 18rem;">
      <div class="card-img-top" style="background: url('./dist/img/campus.jpg')"></div>
      <div class="card-body">
        <h5 class="card-title pb-2 text-indigo-600">Acceso al campus</h5>
        <form id="loginForm" name="loginForm" action="<?php echo BASE_URL . 'login/loginUser' ?>">
          <div class="form-group">
            <label for="login_userName">Usuario</label>
            <input id="login_userName" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tu nombre de usuario" required>
          </div>
          <div class="form-group">
            <label for="login_password">Contraseña</label>
            <input id="login_password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
          </div>
          <button type="submit" class="btn btn-primary w-full">Inciar sesión</button>
        </form>
      </div>
      <div class="card-footer text-muted">
        <span>No tengo cuenta</span>
        <button type="button" class="btn btn-outline-secondary w-full">Registrarme</button>
      </div>
    </div>
  </div>
</div>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    const login = new campus.LoginForm({
      form: 'loginForm',
      userName: 'login_userName',
      password: 'login_password',
    });
    login.init()
  });
</script>
