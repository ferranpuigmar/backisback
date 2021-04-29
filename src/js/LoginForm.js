export class LoginForm{
  constructor(fields){
    this.username = document.querySelector(`#${fields.username}`);
    this.password = document.querySelector(`#${fields.password}`);
    this.form = document.querySelector(`#${fields.form}`);
  }

  init = () => {
    this.listeners();
  }

  async sendForm(){
    const url = this.form.dataset.url;
    const formData = new FormData(this.form);
    try {
      const loginResponse = await fetch(
        url,
        { 
          method: 'post',
          body: formData
        }
      );
      const response = await loginResponse.text();
      console.log(response)
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
