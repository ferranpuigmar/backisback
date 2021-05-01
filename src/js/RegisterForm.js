export class Register{
  constructor(fields){
    this.form = document.querySelector(`#${fields.form}`);
    this.registerBtn = document.querySelector(`#${fields.form} #registerBtn`);
    this.fiels = document.querySelectorAll('.form-control');
  }

  init = () => {
    this.listeners();
  }

  async sendForm(){
    // const url = this.form.dataset.url;
    // const formData = new FormData(this.form);
    // try {
    //   const loginResponse = await fetch(
    //     url,
    //     { 
    //       method: 'post',
    //       body: formData
    //     }
    //   )
    //   const response = await loginResponse.json();
    //   console.log(response)
    //   if(response.status === false){
    //     this.msgError.classList.add('d-block');
    //     this.msgError.innerHTML = response.msg;
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }

  checkForm(){
    // Borramos los anteriores mensajes de error
    const errorMgDivs = this.form.querySelectorAll('.invalid-feedback');
    errorMgDivs.forEach(errorMsg => errorMsg.remove());

    // Validamos formulario y añadimos mensajes de error
    this.form.classList.add('was-validated')
    this.fiels.forEach(field => {
      const msgError = document.createElement('div');
      msgError.className = "invalid-feedback"
      msgError.innerHTML = field.validationMessage;
      field.parentNode.appendChild(msgError);
    })
  }

  listeners(){
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if(this.form.checkValidity()) {
        this.sendForm();
      } else {
        this.checkForm();
      }
    })
  }
}
