let nombre = prompt("Escribe tu nombre de usuario: ");
console.log(`Bienvenido a skylab airlines ${nombre}`);
let costeMedio = 0;
let numEscalas = 0;
let ultVuelos = [];
let vuelos = [
  { id: 00, hacia: "Bilbao", de: "Barcelona", coste: 1600, escala: false },

  { id: 01, hacia: "New York", de: "Barcelona", coste: 700, escala: false },

  { id: 02, hacia: "Los Angeles", de: "Madrid", coste: 1100, escala: true },

  { id: 03, hacia: "Paris", de: "Barcelona", coste: 210, escala: false },

  { id: 04, hacia: "Roma", de: "Barcelona", coste: 150, escala: false },

  { id: 05, hacia: "London", de: "Madrid", coste: 200, escala: false },

  { id: 06, hacia: "Madrid", de: "Barcelona", coste: 90, escala: false },

  { id: 07, hacia: "Tokyo", de: "Madrid", coste: 1500, escala: true },

  { id: 08, hacia: "Shangai", de: "Barcelona", coste: 800, escala: true },

  { id: 09, hacia: "Sydney", de: "Barcelona", coste: 150, escala: true },

  { id: 10, hacia: "Tel-Aviv", de: "Madrid", coste: 150, escala: false },
];

function escalas(objeto) {
  if (vuelos[objeto].escala) {
    numEscalas++;
    return "realiza escala.";
  } else {
    return "no realiza escala.";
  }
}

for (let i = 0; i < vuelos.length; i++) {
  console.log(
    "El vuelo con origen " +
      vuelos[i].de +
      ", y destino: " +
      vuelos[i].hacia +
      " tiene un coste de " +
      vuelos[i].coste +
      "€ y",
    escalas(i)
  );
  costeMedio = costeMedio + vuelos[i].coste;
}

costeMedio = (costeMedio / vuelos.length).toFixed(0);
console.log(
  "El coste medio de los vuelos es " +
    costeMedio +
    "€ y hay " +
    numEscalas +
    " vuelos con escalas."
);

for (let i = vuelos.length - 6; i < vuelos.length; i++) {
  ultVuelos.push(" " + vuelos[i].hacia);
}
console.log("Estos son los destinos de últimos vuelos del día:" + ultVuelos);
