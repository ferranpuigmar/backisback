class LoginForm{
  constructor(fields){
    this.userName = document.getElementById(fields.userName);
    this.password = document.getElementById(fields.password);
    this.form = document.getElementById(fields.form);
  }

  init = () => {
    this.listeners();
  }

  sendForm(){
    const url = this.form.action;
    console.log('url: ',url)
    const name = this.userName.value;
    const password = this.password.value;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);

  }

  listeners(){
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.sendForm();
    })
  }
}
