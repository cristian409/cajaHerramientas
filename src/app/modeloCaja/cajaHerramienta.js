'use strict';

import Ayudas from "../../assets/js/ayudas.js";
import Modal from "../modales/modal.js";

document.addEventListener('DOMContentLoaded', async event => {
    await Ayudas.cargarPagina(
        "menuMobile",
        "../mobile/menuMobile.html"
    ).then(
        gestionarMetodos,
    ).catch(error => {
        Ayudas.alerta("cajaPrincipal",
            "Imposible acceder al menu", error);
    });

    await Modal.crear();
});

let gestionarMetodos = () => {
    cambiarColorMenuMobil();
    abrirMarcoNormativo();
    abrirRecomendaciones();
}

let cambiarColorMenuMobil = () =>{
    let menu = document.querySelector(".navbar-toggler");
    window.addEventListener('scroll',()=>{
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 2470 && scrollTop < 5920) {
            menu.style.color = "#000000";
        }else{
            menu.style.color = "#ffff";
        }
    });
}

let abrirMarcoNormativo = () => {
    document.getElementById("btnMarco").addEventListener('click', () => {
        Modal.desplegarMarcoNormativo();
    });
}

let abrirRecomendaciones = () => {
    document.getElementById("btnRecomendaciones").addEventListener('click', () => {
        Modal.desplegarRecomendaciones();
    });
}
