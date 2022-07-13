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

let permisos;
do {
  permisos = prompt(
    "Eres ADMIN o USER?(si escribes otra cosa el programa volverá a preguntar)"
  ).toUpperCase();
} while (permisos != "ADMIN" && permisos != "USER");

if (permisos === "USER") {
  let precio = parseInt(
    prompt("Escribe el precio exacto que quieres gastarte: ")
  );
  console.log("");
  let vuelosUsuario = [];
  let vueloComprado = [];
  let idUsuario;

  for (let i = 0; i < vuelos.length; i++) {
    if (vuelos[i].coste <= precio) {
      vuelosUsuario.push(vuelos[i]);
    }
  }
  if (vuelosUsuario.length < 1) {
    console.log("No hay vuelos más baratos o por el precio introducido");
  } else {
    console.log(
      "Estos son los vuelos disponibles por el precio introducido o menos: "
    );
    for (let i = 0; i < vuelosUsuario.length; i++) {
      console.log(
        "Origen: " +
          vuelosUsuario[i].de +
          ", Destino: " +
          vuelosUsuario[i].hacia +
          ", Precio: " +
          vuelosUsuario[i].coste +
          "€, Id: " +
          vuelosUsuario[i].id
      );
    }

    idUsuario = parseInt(prompt("Dime el ID del vuelo que deseas comprar"));
    for (let i = 0; i < vuelosUsuario.length; i++) {
      if (idUsuario == vuelosUsuario[i].id) {
        vueloComprado.push(vuelosUsuario[i]);
      }
    }
    if (vueloComprado.length > 0) {
      console.log(
        "Gracias por su compra del vuelo con destino a " +
          vueloComprado[0].hacia +
          ", buen viaje!"
      );
    } else {
      console.log("El ID de vuelo introducido no coincide con ningún vuelo.");
    }
  }
} else {
  let confirmacion;
  let creacion;
  let eliminacion;
  let a = 10;
  let idEliminado;
  do {
    confirmacion = confirm("Quieres CREAR o ELIMINAR vuelos?");
    if (confirmacion) {
      creacion = confirm("Quieres crear un vuelo?");
      if (creacion && vuelos.length < 15) {
        a++;
        vuelos.push({
          id: a,
          hacia: prompt("Dime el destino"),
          de: prompt("Dime el origen"),
          coste: parseInt(prompt("Dime el coste (sin escribir la moneda)")),
          escala: confirm("Dime si tiene escala"),
        });
        console.log(
          "ID: " +
            vuelos[a].id +
            ", origen: " +
            vuelos[a].de +
            ", destino: " +
            vuelos[a].hacia +
            ", coste: " +
            vuelos[a].coste +
            "€, escala: " +
            vuelos[a].escala
        );
        if (vuelos.length >= 15) {
          console.log("No puedes crear más  vuelos");
        }
      }
      eliminacion = confirm("Quieres eliminar un vuelo?");
      if (eliminacion) {
        for (let i = 0; i < vuelos.length; i++) {
          console.log(
            "ID: " +
              vuelos[i].id +
              ", origen: " +
              vuelos[i].de +
              ", destino: " +
              vuelos[i].hacia +
              ", coste: " +
              vuelos[i].coste +
              "€, escala: " +
              vuelos[i].escala
          );
        }
        idEliminado = parseInt(
          prompt("Dime el ID del vuelo que deseas eliminar: ")
        );
        const vuelosSinEliminado = vuelos.filter((a) => a.id !== idEliminado);
        vuelos = vuelosSinEliminado;
        console.log("");
        for (let i = 0; i < vuelosSinEliminado.length; i++) {
          console.log(
            "ID: " +
              vuelosSinEliminado[i].id +
              ", origen: " +
              vuelosSinEliminado[i].de +
              ", destino: " +
              vuelosSinEliminado[i].hacia +
              ", coste: " +
              vuelosSinEliminado[i].coste +
              "€, escala: " +
              vuelosSinEliminado[i].escala
          );
        }
      }
    }
  } while (confirmacion);
  {
    console.log("");
  }
}
