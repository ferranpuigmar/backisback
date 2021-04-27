class LoginForm{
  constructot(){
    this.userName;
    this.password;
    this.form;
  }

  assignFields = (fields) => {
    this.userName = document.getElementById(fields.userName)
    this.password = document.getElementById(fields.password)
    this.form = document.getElementById(fields.form)

    this.listeners();
  }

  listeners(){
    this.form.addEventListener('onsubmit', (e) => {
      e.preventDefault();
      console.log('assigned and blockes!')
    })
  }
}
