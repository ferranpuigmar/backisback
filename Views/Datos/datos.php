<div class="datosFormWrapper">
  <form id="datosForm" name="datosForm" data-url="<?php echo BASE_URL ?>">
    <div class="form-group">
      <label for="datos_username">Usuario</label>
      <input id="datos_username" name="username" type="text" class="form-control" placeholder="Tu nombre de usuario" value="<?= $data['username'] ?>" required>
    </div>
    <div class="form-group">
      <label for="datos_password">Contraseña</label>
      <input id="datos_password" name="password" type="password" class="form-control" placeholder="Password" value="<?= $data['password'] ?>" required>
    </div>
    <div class="form-group">
      <label for="datos_email">Email</label>
      <input id="datos_email" name="email" type="email" class="form-control" placeholder="Email" value="<?= $data['email'] ?>" required>
    </div>
    <button id="ModificarBtn" type="submit" class="btn btn-primary w-full">Modificar</button>
  </form>
</div>
