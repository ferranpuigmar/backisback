export class LoginForm{
  constructor(fields){
    this.username = document.querySelector(`#${fields.username}`);
    this.password = document.querySelector(`#${fields.password}`);
    this.form = document.querySelector(`#${fields.form}`);
    this.msgError = document.querySelector(`#${fields.form} #msgError`);
  }

  init = () => {
    this.listeners();
  }

  async sendForm(){
    const baseUrl = this.form.dataset.url;
    const formData = new FormData(this.form);
    try {
      const loginResponse = await fetch(
        `${baseUrl}/login/loginUser`,
        { 
          method: 'post',
          body: formData
        }
      )
      const response = await loginResponse.json();
      console.log(response)
      if(response.status === false){
        this.msgError.classList.add('d-block');
        this.msgError.innerHTML = response.msg;
        return;
      }
      console.log('baseUrl: ', baseUrl)
      window.location.href = `${baseUrl}/calendar`;
    } catch (error) {
      console.log(error);
    }
  }

  listeners(){
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.sendForm();
    })
  }
}
