const hello = saludo => saludo;
import banana from './images/banana.jpg';

const goodbye = () => {
  console.log('bye!')
}


function addImage(){
  const img = document.createElement('img');
  img.alt="banana";
  img.src= banana;
  const body = document.querySelector('body');
  body.appendChild(img)
}

addImage();
