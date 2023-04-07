//sacar todo lo necesario
const puntos = document.querySelector(".puntos");
const clicker = document.querySelector(".circulo");
const subir = document.querySelector(".subir");
const multiplicador1 = document.getElementById("multi1");
const multiplicador2 = document.getElementById("multi2");
const multiplicador3 = document.getElementById("multi3");
const comprar1 = document.getElementById("comprar1");
const comprar2 = document.getElementById("comprar2");
const comprar3 = document.getElementById("comprar3");

let contador = 0;

let multiplicador = 1;

//esto esta bi
const sumarPuntos = () => {
  contador += multiplicador;
  puntos.textContent = contador;
  // if (multiplicador >= 2 && multiplicador < 4) {
  //   contador++;
  // }else if (multiplicador >= 4 && multiplicador < 8) {
  //   contador++;
  //   contador++;
  //   contador++;
  // }else if (multiplicador >= 8 ) {
  //   contador++;
  //   contador++;
  //   contador++;
  //   contador++;
  // }
};

const subirDeMutiplicador = () => {
  if (multiplicador) {
    subir.textContent = "El multiplicador se mejoró";
    setTimeout(() => {
      subir.textContent = "";
    }, 5000);
  }
};

const comprarPorDos = () => {
  if (contador >= 200) {
    multiplicador1.textContent = "Comprado";
    multiplicador = 2;
    contador -= 200;
  }
  subirDeMutiplicador();
};

const comprarPorCuantro = () => {
  if (contador >= 500) {
    multiplicador2.textContent = "Comprado";
    multiplicador = 4;
    contador -= 500;
  }
  subirDeMutiplicador();

};

const comprarPorOcho = () => {
  if (contador >= 1000) {
    multiplicador3.textContent = "Comprado";
    multiplicador = 8;
    contador -= 1000;
  }
  subirDeMutiplicador();

};

//tengo que:
//hacer que cuando le des a comprar se multiplique por el numero
//hacer que el comprar este bloqueado hasta que tengas los puntos
//hacer que no se pueda comprar denuevo

comprar1.addEventListener("click", comprarPorDos);
comprar2.addEventListener("click", comprarPorCuantro);
comprar3.addEventListener("click", comprarPorOcho);

clicker.addEventListener("click", sumarPuntos);
