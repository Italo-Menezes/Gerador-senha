
const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
const Sussed = document.querySelector(".sussed")

const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");

const ContainerPassword = document.querySelector("#container-passsword")

let chasert = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value
}

function generatePassoword() {

  let pass = "";
  for (let i = 0, n = chasert.length; i < sliderElement.value; i++) {
    pass += chasert.charAt(Math.floor(Math.random() * n));
  }

  ContainerPassword.classList.remove("hide")
  password.innerHTML= pass;
  novaSenha = pass;
}

function copyPassword(){
 
  navigator.clipboard.writeText(novaSenha);
  Sussed.classList.remove('hide')
}


buttonElement.addEventListener('click', generatePassoword)

ContainerPassword.addEventListener('click', copyPassword)



