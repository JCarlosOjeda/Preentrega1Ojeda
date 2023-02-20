alert("Bienvenido al presupuestador OnLine de Verde Manzana");

alert("Por la tarde 10% y los Mediodias un 20% de descuento, de Lunes a Viernes");

let precioSdescuento = 45000;

let presupuestoTotal = 0;

let seleccioneDia = prompt("Seleccione 1 para Sabados o Domingos \n Seleccione 2 para los días de semana");

while (seleccioneDia != 1 && seleccioneDia != 2) {
    alert("El valor ingresado no es correcto : \n Seleccione 1 para Sabados o Domingos \n Seleccione 2 para días de semana");
    seleccioneDia = prompt("Seleccione 1 para Sabados o Domingos \n Seleccione 2 para días de semana");
}

if (seleccioneDia == "1") {
    presupuestoTotal = precioSdescuento;
    alert("El precio del Salon es de $" + presupuestoTotal);
    pregunta();
}
else {
    descuento();
    pregunta();
}


function descuento() {
    let horario = prompt("Seleccione 1 para el mediodia \n Seleccione 2 para la tarde o  noche");

    while (horario != 1 && horario != 2) {
        alert("Seleccione 1 para el mediodia \n Seleccione 2 para la tarde o  noche");

        let horario = prompt("Seleccione 1 para el mediodia \n Seleccione 2 para la tarde o noche");
    }

    if (horario == 1) {
        presupuestoTotal = precioSdescuento - precioSdescuento * 0.20;

    } else {
        presupuestoTotal = precioSdescuento - precioSdescuento * 0.10;
    }
    
    alert("El precio del Salon es de $" + presupuestoTotal)
}


function pregunta() {

    let consulta = prompt("¿Desea agregar adicionales? S/N").toLocaleUpperCase()

    if (consulta == "S") {
        adicionales();

    } else if (consulta == "N") {
        alert("Precio final $" + presupuestoTotal);

    } else {
        alert("El valor ingresado no es correcto");
        pregunta();
    }

}


function adicionales() {
    let adicionales = prompt("Para nuestros adicionale ingrese:\n 1 Maquina de helados \n 2 Tatuajes \n 3 Show de magia \n 4 Cabina de fotos");

    switch (adicionales) {
        case "1":
            presupuestoTotal = presupuestoTotal + 11500;
            alert("El precio del salon con la maquina de helados es $" + presupuestoTotal)
            break;

        case "2":
            presupuestoTotal = presupuestoTotal + 4500;
            alert("El precio del salon con tatuajes incluidos es $" + presupuestoTotal)
            break;

        case "3":
            presupuestoTotal = presupuestoTotal + 5500;
            alert("El precio del salon con show de magia es $" + presupuestoTotal)
            break;

        case "4":
            presupuestoTotal = presupuestoTotal + 9500;
            alert("El precio del salon con cabina de fotos es $" + presupuestoTotal)
            break;

        default:
            alert("Para nuestros adicionale ingrese:\n 1 Maquina de helados \n 2 Tatuajes \n 3 Show de magia \n 4 Cabina de fotos");

            break;
    }

    pregunta()
}


