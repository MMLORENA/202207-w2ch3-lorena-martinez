const visorOperaciones = document.getElementById("operaciones");
const visorNumeros = document.getElementById("visor");
const botonCalculadora = document.querySelectorAll(".botoncalculadora");

let primerNumero = "";
let simbolo = "";
let segundoNumero = "";
let simboloIgual = "";
let numerosResultado = "";
visorNumeros.innerHTML = "0";

resolverCalculo = (simboloEspecial, numeroEspecial) => {
  switch (simboloEspecial) {
    case "+":
      return Number(primerNumero) + Number(segundoNumero);
    case "−":
      return Number(primerNumero) - Number(segundoNumero);
    case "×":
      return Number(primerNumero) * Number(segundoNumero);
    case "÷":
      return Number(primerNumero) / Number(segundoNumero);
    case "%":
      return Number(numeroEspecial) / 100;
    case "⅟ₓ":
      return 1 / Number(numeroEspecial);
    case "x²":
      return Math.pow(numeroEspecial, 2);
    case "√":
      return Math.sqrt(Number(numeroEspecial));
    case "±":
      return Number(numeroEspecial) * -1;
  }
};

pulsarNumero = (numeroPulsado) => {
  if (
    primerNumero === "" ||
    simboloIgual === "=" ||
    (primerNumero == "0" && !simbolo)
  ) {
    simboloIgual = "A";
    primerNumero = numeroPulsado;
    numerosResultado = numeroPulsado;
    visorOperaciones.innerHTML = "";
  } else if (simboloIgual === "A") {
    primerNumero += numeroPulsado;
    numerosResultado = primerNumero;
    visorOperaciones.innerHTML = "";
  }

  if (
    simbolo &&
    (segundoNumero == "0" || simboloIgual === "B" || segundoNumero == "")
  ) {
    segundoNumero = numeroPulsado;
    numerosResultado = numeroPulsado;
    visorOperaciones.innerHTML = primerNumero + "\u00A0" + simbolo;
  } else if (simboloIgual === "") {
    segundoNumero += numeroPulsado;
    numerosResultado = segundoNumero;
    visorOperaciones.innerHTML = primerNumero + "\u00A0" + simbolo;
  }
  visorNumeros.innerHTML = numerosResultado;
};

funcionesBasicas = (simboloPulsado) => {
  if (!primerNumero) primerNumero = "0";
  primerNumero = parseFloat(primerNumero);

  if (simboloIgual) {
    segundoNumero = "";
    simboloIgual = "";
  }

  if (segundoNumero) {
    numerosResultado = resolverCalculo(simbolo);
    primerNumero = numerosResultado;
  }

  simbolo = simboloPulsado;
  segundoNumero = "";
  simboloIgual = "";
  visorOperaciones.innerHTML = primerNumero + "\u00A0" + simbolo;
  visorNumeros.innerHTML = primerNumero;
};

funcionesEspeciales = (simboloEspecial) => {
  if (simbolo && !simboloIgual) {
    if (segundoNumero === "") {
      segundoNumero = primerNumero;
    }
    segundoNumero = resolverCalculo(simboloEspecial, segundoNumero);
    visorNumeros.innerHTML = segundoNumero;
    simboloIgual = "B";
  } else {
    primerNumero = resolverCalculo(simboloEspecial, primerNumero);
    numerosResultado = primerNumero;
    visorNumeros.innerHTML = numerosResultado;
    simboloIgual = "=";
  }

  if (simboloIgual === "=") {
    visorOperaciones.innerHTML = primerNumero;
  } else {
    visorOperaciones.innerHTML =
      primerNumero + "\u00A0" + simbolo + "\u00A0" + segundoNumero;
  }
};

pulsarIgual = () => {
  if (!primerNumero) primerNumero = "0";
  numerosResultado = primerNumero;

  if (simbolo) {
    if (segundoNumero) {
      segundoNumero = parseFloat(segundoNumero);
      numerosResultado = resolverCalculo(simbolo);
    } else if (segundoNumero === "") {
      segundoNumero = primerNumero;
      numerosResultado = resolverCalculo(simbolo);
    }
  }

  simboloIgual = "=";
  visorOperaciones.innerHTML =
    primerNumero +
    "\u00A0" +
    simbolo +
    "\u00A0" +
    segundoNumero +
    "\u00A0" +
    simboloIgual;
  visorNumeros.innerHTML = numerosResultado;
  primerNumero = numerosResultado;
};

pulsarComa = () => {
  if (simbolo && !simboloIgual) {
    if (!segundoNumero) segundoNumero = "0";
    if (segundoNumero.indexOf(".") != -1) return;
    segundoNumero += ".";
    visorNumeros.innerHTML = segundoNumero;
  } else {
    if (simboloIgual === "=" || !primerNumero)
      (primerNumero = "0"), (simboloIgual = "A");
    if (primerNumero.indexOf(".") != -1) return;
    primerNumero += ".";
    numerosResultado = primerNumero;
    visorNumeros.innerHTML = primerNumero;
  }
};

pulsarBorrar = () => {
  if (simbolo && !simboloIgual) {
    segundoNumero = segundoNumero.slice(0, -1);
    segundoNumero === ""
      ? (visorNumeros.innerHTML = "0")
      : (visorNumeros.innerHTML = segundoNumero);
  } else {
    primerNumero = primerNumero.slice(0, -1);
    primerNumero === ""
      ? (visorNumeros.innerHTML = "0")
      : (visorNumeros.innerHTML = primerNumero);
    visorOperaciones.innerHTML = "";
  }
};

pulsarLimpiarActual = () => {
  if (simbolo && !simboloIgual) {
    segundoNumero = "0";
    visorNumeros.innerHTML = segundoNumero;
  } else {
    primerNumero = "0";
    visorNumeros.innerHTML = primerNumero;
  }
};

pulsarLimpiar = () => {
  primerNumero = "";
  simbolo = "";
  segundoNumero = "";
  simboloIgual = "";
  numerosResultado = "";
  visorOperaciones.innerHTML = "";
  visorNumeros.innerHTML = "0";
};

calculadoraMaestra = (boton) => {
  if (boton.classList.contains("botoncalculadora")) {
    if (boton.classList.contains("numero")) {
      pulsarNumero(boton.innerText);
    } else if (boton.classList.contains("basica")) {
      funcionesBasicas(boton.innerText);
    } else if (boton.classList.contains("especial")) {
      funcionesEspeciales(boton.innerText);
    } else {
      window[boton.id]();
    }
  }
};

botonCalculadora.forEach((boton) => {
  boton.addEventListener("click", () => {
    calculadoraMaestra(boton);
  });
}, false);

document.addEventListener(
  "keydown",
  (tecla) => {
    let name = tecla.key;
    let code = tecla.code;

    if (code >= "Digit0" && code <= "Digit9") {
      pulsarNumero(name);
    } else if (code === "BracketRight") {
      funcionesBasicas("+");
    } else if (code === "Slash") {
      funcionesBasicas("−");
    } else if (code === "Backspace") {
      pulsarBorrar();
    } else if (code === "Comma") {
      pulsarComa();
    } else if (code === "Enter") {
      pulsarIgual();
    }
  },
  false
);
