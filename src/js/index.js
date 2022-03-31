'use strict';

import Ayudas from "./ayudas.js";
import CajaHerramienta from "./cajaHerramienta.js";

document.addEventListener('DOMContentLoaded', async event => {
    Ayudas.cargarPagina(
        "contentPaginaInicio",
        "./paginas/portada.html"
    ).then(
        gestionPaginas,
    ).catch(error => {
        Ayudas.alerta("contentPaginaInicio",
            "No se encuentra la página portada", error);
    });
});

let gestionPaginas = resultado => {
    let elemento = `${resultado.id}`;

    abrirSeccionInterna(elemento);
}

let abrirSeccionInterna = elemento => {
    let llave = document.getElementById("btnLlaveInglesa");
    llave.addEventListener('click', async (event) => {
        event.preventDefault;
        Ayudas.cargarPagina(
            `${elemento}`,
            "./paginas/portadaInterna.html"
        ).then(
            abrirCajaHerramientas
        ).catch(error => {
            Ayudas.alerta("contentPaginaInicio",
                "No se encuentra la página de seccion interna", error);
        });
    });
}

let abrirCajaHerramientas = elemento => {
    let botonInterno = document.getElementById("btnLlevame");
    botonInterno.addEventListener('click', async (event) => {
        event.preventDefault;
        await CajaHerramienta.crearCaja(elemento.id);
        // await CajaHerramienta.cargarMenu();
    });
}





