<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<script src="<?php echo BASE_URL . 'dist/bundle.js' ?>"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" integrity="sha512-RXf+QSDCUQs5uwRKaDoXt55jygZZm2V++WUZduaU/Ui/9EGp3f/2KZVahFZBKGH0s774sd3HmrhUy+SgOFQLVQ==" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/avatar-initials@5.0.0/browser/avatar.js" crossorigin="anonymous"></script>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.6.0/main.js'></script>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    const avatar = new Avatar(document.getElementById('avatar'), {
      'useGravatar': false,
      'initials': 'MC'
    });
    console.log('avatar: ', avatar)
  });
</script>
</body>

</html>
