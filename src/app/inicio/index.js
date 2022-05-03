'use strict';

import Ayudas from "../../assets/js/ayudas.js";

/**
 * Metodo para cargar la vista inicial de la caja de herramientas
 */
document.addEventListener('DOMContentLoaded', async event => {
    Ayudas.cargarPagina(
        "contentPaginaInicio",
        "app/inicio/portada.html"
    ).then(
        gestionPaginas,
    ).catch(error => {
        Ayudas.alerta("contentPaginaInicio",
            "No se encuentra la página portada", error);
    });
});

/**
 * Metodo que gestiona la pagina interna luego del click en la llave
 * @param {*} resultado es el tag con id contentPaginaInicio
 */
let gestionPaginas = resultado => {
    let elemento = `${resultado.id}`;

    abrirSeccionInterna(elemento);
}

/**
 * Metodo que abre la pagina interna luego de dar click en la llave
 * Además realiza el cambio de imagenes para la animación de la llave
 * @param {*} elemento es el id contentPaginaInicio
 */
let abrirSeccionInterna = elemento => {
    let llave = document.getElementById("btnLlaveInglesa");
    let conBrillo = document.getElementById("conBrillo");
    let sinBrillo = document.getElementById("sinBrillo");
    if(llave){
        llave.addEventListener('mouseover', hover_llave);
        llave.addEventListener('mouseout', hover_llave_out);
        llave.addEventListener('click', async (event) => {
            event.preventDefault;
            setTimeout(() => {
                conBrillo.classList.add("d-none");
                sinBrillo.classList.remove("d-none");
                Ayudas.cargarPagina(
                    `${elemento}`,
                    "app/paginaPortada/portadaInterna.html"
                ).then(
                    abrirCajaHerramientas
                ).catch(error => {
                    Ayudas.alerta("contentPaginaInicio",
                        "No se encuentra la página de seccion interna", error);
                });
            }, 1000);
        });
    }
    
    setTimeout(() => {
        let svg_opening = document.getElementById("svg_opening").contentDocument;
        let l_l_ave = svg_opening.getElementById('LLAVE');
        if(l_l_ave){
            l_l_ave.addEventListener("mouseover", () => {
                l_l_ave.style.filter = "drop-shadow(-5px 10px 10px #fff) brightness(1)"
                l_l_ave.style.cursor = "pointer";
            });
            l_l_ave.addEventListener('mouseout', () => {
                l_l_ave.style.filter = ""
            });
            l_l_ave.addEventListener('click', (event) => {
                event.preventDefault;
                setTimeout(() => {
                    Ayudas.cargarPagina(
                        `${elemento}`,
                        "app/paginaPortada/portadaInterna.html"
                    ).then(
                        abrirCajaHerramientas
                    ).catch(error => {
                        Ayudas.alerta("contentPaginaInicio",
                            "No se encuentra la página de seccion interna", error);
                    });
                }, 1000);
            });
        }
    }, 1000);
        
    
        
}

/**
 * Metodo que abre la pagina con el html inicial de la caja donde
 * encontramos el menuMobile
 * 
 */
let abrirCajaHerramientas = () => {
    let botonInterno = document.getElementById("btnLlevame");
    botonInterno.addEventListener('click', async (event) => {
        event.preventDefault;
        location.href = "app/modeloCaja/cajaHerramienta.html";
    });
}

let hover_llave_out = () => {
    let conBrillo = document.getElementById("conBrillo");
    let sinBrillo = document.getElementById("sinBrillo");
    conBrillo.classList.add("d-none");
    sinBrillo.classList.remove("d-none");
}

let hover_llave = () => {
    let conBrillo = document.getElementById("conBrillo");
    let sinBrillo = document.getElementById("sinBrillo");
    conBrillo.classList.remove("d-none");
    sinBrillo.classList.add("d-none");
}




