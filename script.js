let calcular = document.querySelector("#calcular");
let reset = document.querySelector("#reset");
let tabla = [];

//Fetch del .json



// Cantidad de Goles Visitantes

let golVisitaUno = parseInt(document.querySelector("#visitaUno"));
let golVisitaDos = parseInt(document.querySelector("#visitaDos"));
let golVisitaTres = parseInt(document.querySelector("#visitaTres"));
let golVisitaCuatro = parseInt(document.querySelector("#visitaCuatro"));
let golVisitaCinco = parseInt(document.querySelector("#visitaCinco"));
let golVisitaSeis = parseInt(document.querySelector("#visitaSeis"));

// Puntos de cada Equipo 
let puntosArg = 0;
let puntosMex = 0;
let puntosPol = 0;
let puntosAra = 0;

// Funcion para sumar pts

const funcionPuntosArg = (puntosGanados) => {
    return puntosArg + puntosGanados
}
const funcionPuntosAra = (puntosGanados) => {
    return puntosAra + puntosGanados
}
const funcionPuntosMex = (puntosGanados) => {
    return puntosMex + puntosGanados
}
const funcionPuntosPol = (puntosGanados) => {
    return puntosPol + puntosGanados
}

//Partidos Ganados

let partidosGanadosArg = 0;
let partidosGanadosMex = 0;
let partidosGanadosPol = 0;
let partidosGanadosAra = 0;

const funcionPartidosGanadosArg = (partidosGanados) => {
    return partidosGanadosArg + partidosGanados;
}
const funcionPartidosGanadosMex = (partidosGanados) => {
    return partidosGanadosMex + partidosGanados;
}
const funcionPartidosGanadosPol = (partidosGanados) => {
    return partidosGanadosPol + partidosGanados;
}
const funcionPartidosGanadosAra = (partidosGanados) => {
    return partidosGanadosAra + partidosGanados;
}

// Partidos Perdidos

let partidosPerdidosArg = 0;
let partidosPerdidosMex = 0;
let partidosPerdidosPol = 0;
let partidosPerdidosAra = 0;

const funcionPartidosPerdidosArg = (partidosPerdidos) => {
    return partidosPerdidosArg + partidosPerdidos;
}
const funcionPartidosPerdidosMex = (partidosPerdidos) => {
    return partidosPerdidosMex + partidosPerdidos;
}
const funcionPartidosPerdidosPol = (partidosPerdidos) => {
    return partidosPerdidosPol + partidosPerdidos;
}
const funcionPartidosPerdidosAra = (partidosPerdidos) => {
    return partidosPerdidosAra + partidosPerdidos;
}

// Partidos Empatados

let partidosEmpatadosArg = 0;
let partidosEmpatadosMex = 0;
let partidosEmpatadosPol = 0;
let partidosEmpatadosAra = 0;

const funcionPartidosEmpatadosArg = (partidosEmpatados) => {
    return partidosEmpatadosArg + partidosEmpatados;
}
const funcionPartidosEmpatadosMex = (partidosEmpatados) => {
    return partidosEmpatadosMex + partidosEmpatados;
}
const funcionPartidosEmpatadosPol = (partidosEmpatados) => {
    return partidosEmpatadosPol + partidosEmpatados;
}
const funcionPartidosEmpatadosAra = (partidosEmpatados) => {
    return partidosEmpatadosAra + partidosEmpatados;
}

// Goles a Favor 

let golFavorArg = 0;
let golFavorMex = 0;
let golFavorPol = 0;
let golFavorAra = 0;

// Goles en contra

let golContraArg = 0;
let golContraMex = 0;
let golContraPol = 0;
let golContraAra = 0;

//Innerhtml

let elementPartidosGanadosArg = document.getElementById("elementPartidosGanadosArg");
let elementPartidosGanadosAra = document.getElementById("elementPartidosGanadosAra");
let elementPartidosGanadosMex = document.getElementById("elementPartidosGanadosMex");
let elementPartidosGanadosPol = document.getElementById("elementPartidosGanadosPol");

let elementPartidosPerdidosArg = document.getElementById("elementPartidosPerdidosArg");
let elementPartidosPerdidosAra = document.getElementById("elementPartidosPerdidosAra");
let elementPartidosPerdidosMex = document.getElementById("elementPartidosPerdidosMex");
let elementPartidosPerdidosPol = document.getElementById("elementPartidosPerdidosPol");

let elementPartidosEmpatadosArg = document.getElementById("elementPartidosEmpatadosArg");
let elementPartidosEmpatadosAra = document.getElementById("elementPartidosEmpatadosAra");
let elementPartidosEmpatadosMex = document.getElementById("elementPartidosEmpatadosMex");
let elementPartidosEmpatadosPol = document.getElementById("elementPartidosEmpatadosPol");

let elementGolesFavorArg = document.getElementById("elementGolesFavorArg");
let elementGolesFavorAra = document.getElementById("elementGolesFavorAra");
let elementGolesFavorMex = document.getElementById("elementGolesFavorMex");
let elementGolesFavorPol = document.getElementById("elementGolesFavorPol");

let elementGolesContraArg = document.getElementById("elementGolesContraArg");
let elementGolesContraAra = document.getElementById("elementGolesContraAra");
let elementGolesContraMex = document.getElementById("elementGolesContraMex");
let elementGolesContraPol = document.getElementById("elementGolesContraPol");

let elementPuntosArg = document.getElementById("elementPuntosArg");
let elementPuntosAra = document.getElementById("elementPuntosAra");
let elementPuntosMex = document.getElementById("elementPuntosMex");
let elementPuntosPol = document.getElementById("elementPuntosPol");

// Evento del boton "Calcular"

calcular.addEventListener("click", () =>{

    calcular.classList.add("hide");

    reset.classList.add("show");
    reset.classList.remove("hide");

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Listo, que capo soy!!',
        showConfirmButton: false,
        timer: 1500
    })


    golLocalUno = document.querySelector("#localUno").value;
    golLocalDos = document.querySelector("#localDos").value;
    golLocalTres = document.querySelector("#localTres").value;
    golLocalCuatro = document.querySelector("#localCuatro").value;
    golLocalCinco = document.querySelector("#localCinco").value;
    golLocalSeis = document.querySelector("#localSeis").value;

    golVisitaUno = document.querySelector("#visitaUno").value;
    golVisitaDos = document.querySelector("#visitaDos").value;
    golVisitaTres = document.querySelector("#visitaTres").value;
    golVisitaCuatro = document.querySelector("#visitaCuatro").value;
    golVisitaCinco = document.querySelector("#visitaCinco").value;
    golVisitaSeis = document.querySelector("#visitaSeis").value;

    // Calculos de los Partidos

    // Partido 1

    if (golLocalUno > golVisitaUno) {
        puntosArg =+ funcionPuntosArg(3);
        partidosGanadosArg =+ funcionPartidosGanadosArg(1);
        partidosPerdidosAra =+ funcionPartidosPerdidosAra(1);
    }
    else if (golLocalUno<golVisitaUno) {
        puntosAra =+ funcionPuntosAra(3);
        partidosGanadosAra =+ funcionPartidosGanadosAra(1);
        partidosPerdidosArg =+ funcionPartidosPerdidosArg(1);
    }
    else {
        puntosArg =+ funcionPuntosArg(1);
        puntosAra =+ funcionPuntosAra(1);
        partidosEmpatadosArg =+ funcionPartidosEmpatadosArg(1);
        partidosEmpatadosAra =+ funcionPartidosEmpatadosAra(1);
    }

    //Partido 2

    if (golLocalDos > golVisitaDos) {
        puntosMex =+ funcionPuntosMex(3);
        partidosGanadosMex =+ funcionPartidosGanadosMex(1);
        partidosPerdidosPol =+ funcionPartidosPerdidosPol(1);
    }
    else if (golLocalDos<golVisitaDos) {
        puntosPol =+ funcionPuntosPol(3);
        partidosGanadosPol =+ funcionPartidosGanadosPol(1);
        partidosPerdidosMex =+ funcionPartidosPerdidosMex(1);
    }
    else {
        puntosMex =+ funcionPuntosMex(1);
        puntosPol =+ funcionPuntosPol(1);
        partidosEmpatadosMex =+ funcionPartidosEmpatadosMex(1);
        partidosEmpatadosPol =+ funcionPartidosEmpatadosPol(1);
    }

    //Partido 3

    if (golLocalTres > golVisitaTres) {
        puntosPol =+ funcionPuntosPol(3);
        partidosGanadosPol =+ funcionPartidosGanadosPol(1);
        partidosPerdidosAra =+ funcionPartidosPerdidosAra(1);
    }
    else if (golLocalTres<golVisitaTres) {
        puntosAra =+ funcionPuntosAra(3);
        partidosGanadosAra =+ funcionPartidosGanadosAra(1);
        partidosPerdidosPol =+ funcionPartidosPerdidosPol(1);
    }
    else {
        puntosPol =+ funcionPuntosPol(1);
        puntosAra =+ funcionPuntosAra(1);
        partidosEmpatadosPol =+ funcionPartidosEmpatadosPol(1);
        partidosEmpatadosAra =+ funcionPartidosEmpatadosAra(1);
    }

    //Partido 4

    if (golLocalCuatro > golVisitaCuatro) {
        puntosArg =+ funcionPuntosArg(3);
        partidosGanadosArg =+ funcionPartidosGanadosArg(1);
        partidosPerdidosMex =+ funcionPartidosPerdidosMex(1);
    }
    else if (golLocalCuatro<golVisitaCuatro) {
        puntosMex =+ funcionPuntosMex(3);
        partidosGanadosMex =+ funcionPartidosGanadosMex(1);
        partidosPerdidosArg =+ funcionPartidosPerdidosArg(1);
    }
    else {
        puntosArg =+ funcionPuntosArg(1);
        puntosMex =+ funcionPuntosMex(1);
        partidosEmpatadosArg =+ funcionPartidosEmpatadosArg(1);
        partidosEmpatadosMex =+ funcionPartidosEmpatadosMex(1);
    }

    //Partido 5

    if (golLocalCinco > golVisitaCinco) {
        puntosPol =+ funcionPuntosPol(3);
        partidosGanadosPol =+ funcionPartidosGanadosPol(1);
        partidosPerdidosArg =+ funcionPartidosPerdidosArg(1);
    }
    else if (golLocalCinco<golVisitaCinco) {
        puntosArg =+ funcionPuntosArg(3);
        partidosGanadosArg =+ funcionPartidosGanadosArg(1);
        partidosPerdidosPol =+ funcionPartidosPerdidosPol(1);
    }
    else {
        puntosPol =+ funcionPuntosPol(1);
        puntosArg =+ funcionPuntosArg(1);
        partidosEmpatadosPol =+ funcionPartidosEmpatadosPol(1);
        partidosEmpatadosArg =+ funcionPartidosEmpatadosArg(1);
    }

    //Partido 6

    if (golLocalSeis > golVisitaSeis) {
        puntosAra =+ funcionPuntosAra(3);
        partidosGanadosAra =+ funcionPartidosGanadosAra(1);
        partidosPerdidosMex =+ funcionPartidosPerdidosMex(1);
    }
    else if (golLocalSeis<golVisitaSeis) {
        puntosMex =+ funcionPuntosMex(3);
        partidosGanadosMex =+ funcionPartidosGanadosMex(1);
        partidosPerdidosAra =+ funcionPartidosPerdidosAra(1);
    }
    else {
        puntosAra =+ funcionPuntosAra(1);
        puntosMex =+ funcionPuntosMex(1);
        partidosEmpatadosMex =+ funcionPartidosEmpatadosAra(1);
        partidosEmpatadosAra =+ funcionPartidosEmpatadosAra(1);
    }

    // ParseFloat de Goles a favor y en contra (Transforma el string en numero, facilita las sumas)

    golFavorArg = parseFloat(golLocalUno) + parseFloat(golLocalCuatro) + parseFloat(golVisitaCinco);
    golFavorMex = parseFloat(golLocalDos) + parseFloat(golVisitaCuatro) + parseFloat(golVisitaSeis);
    golFavorPol = parseFloat(golVisitaDos) + parseFloat(golLocalTres) + parseFloat(golLocalCinco);
    golFavorAra = parseFloat(golVisitaUno) + parseFloat(golVisitaTres) + parseFloat(golLocalSeis);

    golContraArg =+ parseFloat(golVisitaUno) + parseFloat(golVisitaCuatro) + parseFloat(golLocalCinco);
    golContraMex =+ parseFloat(golVisitaDos) + parseFloat(golLocalCuatro) + parseFloat(golLocalSeis);
    golContraPol =+ parseFloat(golLocalDos) + parseFloat(golVisitaTres) + parseFloat(golVisitaCinco);
    golContraAra =+ parseFloat(golLocalUno) + parseFloat(golLocalTres) + parseFloat(golVisitaSeis);

    // InnerHTML Tabla de Posiciones, pasa todos los datos anteriores a la tabla del html

    elementPartidosGanadosArg.innerHTML = partidosGanadosArg;
    elementPartidosGanadosAra.innerHTML = partidosGanadosAra;
    elementPartidosGanadosMex.innerHTML = partidosGanadosMex;
    elementPartidosGanadosPol.innerHTML = partidosGanadosPol;

    elementPartidosPerdidosArg.innerHTML = partidosPerdidosArg;
    elementPartidosPerdidosAra.innerHTML = partidosPerdidosAra;
    elementPartidosPerdidosMex.innerHTML = partidosPerdidosMex;
    elementPartidosPerdidosPol.innerHTML = partidosPerdidosPol;

    elementPartidosEmpatadosArg.innerHTML = partidosEmpatadosArg;
    elementPartidosEmpatadosAra.innerHTML = partidosEmpatadosAra;
    elementPartidosEmpatadosMex.innerHTML = partidosEmpatadosMex;
    elementPartidosEmpatadosPol.innerHTML = partidosEmpatadosPol;

    elementGolesFavorArg.innerHTML = golFavorArg;
    elementGolesFavorAra.innerHTML = golFavorAra;
    elementGolesFavorMex.innerHTML = golFavorMex;
    elementGolesFavorPol.innerHTML = golFavorPol;

    elementGolesContraArg.innerHTML = golContraArg;
    elementGolesContraAra.innerHTML = golContraAra;
    elementGolesContraMex.innerHTML = golContraMex;
    elementGolesContraPol.innerHTML = golContraPol;

    elementPuntosArg.innerHTML = puntosArg;
    elementPuntosAra.innerHTML = puntosAra;
    elementPuntosMex.innerHTML = puntosMex;
    elementPuntosPol.innerHTML = puntosPol;
});

reset.addEventListener("click", () =>{

    location.reload();

});
