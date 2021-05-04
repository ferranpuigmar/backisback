export class Register{
  constructor(fields){
    this.form = document.querySelector(`#${fields.form}`);
    this.registerBtn = document.querySelector(`#${fields.form} #registerBtn`);
    this.fields = document.querySelectorAll('.form-control');
    this.coursesSelector = document.querySelector(`#${fields.coursesSelector}`);
    this.baseURL = fields.baseUrl;
  }

  init = () => {
    this.listeners();
    this.listCourses()
  }

  async listCourses(){
    const url = `${this.baseURL}Register/registerListCourses`;
    try {
      const listCoursesResponse = await fetch(
        url,
        { 
          method: 'GET',
          headers: { 'content-type': 'application/json' } 
        }
      )
      const response = await listCoursesResponse.json();
      response.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id_course;
        const optionValue = document.createTextNode(item.name);
        option.appendChild(optionValue)
        this.coursesSelector.appendChild(option) 
      })

    } catch (error) {
      console.log(error);
    }
  }

  async sendForm(){
    const url = this.form.dataset.url;
    const formData = new FormData(this.form);
    try {
      const registerResponse = await fetch(
        url,
        { 
          method: 'post',
          body: formData
        }
      )
      const response = await registerResponse.json();
      console.log(response)
      if(response.status === false){
        this.msgError.classList.add('d-block');
        this.msgError.innerHTML = response.msg;
      }
    } catch (error) {
      console.log(error);
    }
  }

  checkForm(){
    // Borramos los anteriores mensajes de error
    const errorMgDivs = this.form.querySelectorAll('.invalid-feedback');
    errorMgDivs.forEach(errorMsg => errorMsg.remove());

    // Validamos formulario y añadimos mensajes de error
    this.form.classList.add('was-validated')
    this.fields.forEach(field => {
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
      this.checkForm();
    })
  }
}
