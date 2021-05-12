<div class="flex h-full">
  <div class="mx-auto">
    <h1 class="text-2xl text-center">Mis datos</h1>
    <div class="datosFormWrapper w-80">
      <form id="datosForm" name="datosForm" data-url="<?php echo BASE_URL ?>">
        <div class="form-group">
          <label for="datos_username">Usuario</label>
          <input id="datos_username" name="username" type="text" class="form-control" placeholder="Tu nombre de usuario" value="<?php echo $data['username'] ?>" required>
        </div>
        <div class="form-group">
          <label for="datos_password">Contraseña</label>
          <input id="datos_password" name="password" type="password" class="form-control" placeholder="Password" value="<?= $data['password'] ?>" required>
        </div>
        <div class="form-group">
          <label for="datos_email">Email</label>
          <input id="datos_email" name="email" type="email" class="form-control" placeholder="Email" value="<?= $data['email'] ?>" required>
        </div>
        <button id="ModificarBtn" type="button" class="btn btn-primary w-full">Modificar</button>
      </form>
    </div>
  </div>
</div>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    //listener
    const editBtn = document.getElementById('ModificarBtn');
    editBtn.addEventListener('click', async () => {
      const username = document.getElementById("datos_username");
      const password = document.getElementById("datos_password");
      const email = document.getElementById("datos_email");
      const baseURL = document.getElementById('datosForm');
      const formData = new FormData();
      formData.append('username', username.value)
      formData.append('password', password.value)
      formData.append('email', email.value)
      try {
        const requestUrl = `${baseURL.dataset.url}/datos/setupdateDatos`;
        const editProfileResponse = await fetch(
          requestUrl, {
            method: 'POST',
            body: formData
          }
        )
        const response = await editProfileResponse.json();
        username = username.value;
        password = password.value;
        email = email.value;
      } catch (error) {
        console.log(error)
      }
    })
  })
</script>
