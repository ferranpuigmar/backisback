export class Calendar{
  constructor(fields){
    this.calendar = document.querySelector(`#${fields.calendar}`);
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
      )
      const response = await loginResponse.json();
      console.log(response)
      if(response.status === false){
        this.msgError.classList.add('d-block');
        this.msgError.innerHTML = response.msg;
      }
    } catch (error) {
      console.log(error);
    }
  }

  listeners(){
    
  }
}
