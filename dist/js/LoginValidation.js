class LoginValidation{
  constructot(){
    this.userName;
    this.password;
    this.form;
  }

  assignFields = (fields) => {
    this.userName = document.getElementById(fields.userName)
    this.password = document.getElementById(fields.password)
    this.form = document.getElementById(fields.form)
  }

  sayHello(){
    console.log(this.userName)
    console.log(this.password)
    console.log(this.form)
  }
}
