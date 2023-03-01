alert(
  "Hola, bienvenidos al menú el restaurante Rodri's \n\n Aquí podrás armar tu menú a tu medida y te diremos en cuantos min de carrera quemarás la comida que consumiste"
);
let kcalTotal = 0;
let quemaKcalTotal = 0;
let menuUsuario = "";

const hamburguesa = {
  producto: "Hamburguesa",
  kcal: 1100,
  quemarKcal: 110,
};
const taco = {
  producto: "Taco",
  kcal: 600,
  quemarKcal: 60,
};
const hotDog = {
  producto: "Hot Dog",
  kcal: 300,
  quemarKcal: 30,
};
const papasFritas = {
  producto: "Papas Fritas",
  kcal: 310,
  quemarKcal: 31,
};
const cocaCola = {
  producto: "Coca Cola",
  kcal: 150,
  quemarKcal: 17,
};
const cocaColaZero = {
  producto: "Coca Cola Sin Azúcar",
  kcal: 0,
  quemarKcal: 0,
};

let nombre = "";
nombre = prompt("Cómo te llamas?");

do {
  if (nombre != "") {
    alert(
      "Bienvenido a Rodri's " + nombre + ", estamos encantados de atenderte"
    );
  } else if (nombre == "") {
    alert("Por favor ingresa tu nombre, queremos atenderte como te mereses");
  }
} while ((nombre = ""));

let seleccionUsuario = "";
const menu = [];

do {
  seleccionUsuario = prompt(
    "Por favor escribe el número del producto que deseas \n Qué desea comer: \n 1. Una Hamburguesa \n 2. Un Taco \n 3. Un Hot Dog \n 4. Unas papas fritas \n 5. Coca Cola \n 6. Coca Cola Sin Azúcar"
  );

  switch (seleccionUsuario) {
    case "1":
      alert("Escogiste una " + hamburguesa.producto);
      alert(
        "Quieres agregar algo más? Si no deseas seleccionar más productos escibre NO"
      );
      menu.push(hamburguesa);
      break;
    case "2":
      alert("Escogiste un " + taco.producto);
      alert(
        "Quieres agregar algo más? Si no deseas seleccionar más productos escibre NO"
      );
      menu.push(taco);
      break;
    case "3":
      alert("Escogiste un " + hotDog.producto);
      alert(
        "Quieres agregar algo más? Si no deseas seleccionar más productos escibre NO"
      );
      menu.push(hotDog);
      break;
    case "4":
      alert("Escogiste unas " + papasFritas.producto);
      alert(
        "Quieres agregar algo más? Si no deseas seleccionar más productos escibre NO"
      );
      menu.push(papasFritas);
      break;
    case "5":
      alert("Escogiste una " + cocaCola.producto);
      alert(
        "Quieres agregar algo más? Si no deseas seleccionar más productos escibre NO"
      );
      menu.push(cocaCola);
      break;
    case "6":
      alert("Escogiste una " + cocaColaZero.producto);
      alert(
        "Quieres agregar algo más? Si no deseas seleccionar más productos escibre NO"
      );
      menu.push(cocaColaZero);
      break;
  }
  // console.log(seleccionUsuario);
} while (seleccionUsuario !== "NO");

console.log(menu);

menu.forEach((item) => {
  quemaKcalTotal += item.quemarKcal;
  kcalTotal += item.kcal;
  menuUsuario += item.producto + ", ";
});

alert(
  "Hoy comeras " +
    menuUsuario +
    "\n \nQue suman un total de " +
    kcalTotal +
    "Kcal \n\n" +
    "Para poder quemar tu menu, deber correr un total de " +
    quemaKcalTotal +
    " min."
);
