export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
  }
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre: {
      valueMissing: "Este campo no puede estar vacío.",
    },
    mensaje: {
      valueMissing: "Este campo no puede estar vacío.",
    },
    email: {
      valueMissing: "Este campo no puede estar vacío.",
      typeMismatch: "El correo no es valido"
    },
    password: {
      valueMissing: "Este campo no puede estar vacío.",
      patternMismatch: "Debe tener ocho caracteres, incluida una letra mayúscula, una letra minúscula y un número o carácter especial."
    },
    URL: {
      valueMissing: "Este campo no puede estar vacío.",
      typeMismatch: "Esto no es un URL"
    },
    categoria:{
      valueMissing: "Este campo no puede estar vacío.",
    },
    producto:{
      valueMissing: "Este campo no puede estar vacío.",
    },
    precio:{
      valueMissing: "Este campo no puede estar vacío.",
    },
    descripcion:{
      valueMissing: "Este campo no puede estar vacío.",
    },

};


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
  