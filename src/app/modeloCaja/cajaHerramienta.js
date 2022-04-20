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
    abrirLenguajeUno();
    abrirLenguajeDos();
    abrirAccesoTexto();
    abrirAccesoImagenes();
    abrirElaborarVideos();
    abrirUsoImagenes();
    abrirEvaluacionMaterial();
    abrirRecomendacionAUno();
    abrirRecomendacionADos();
    abrirRecomendacionATres();
    abrirGlosario();
    abrirBibliografia();
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
    document.getElementById("btnMarco").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarMarcoNormativo();
    });
}

let abrirRecomendaciones = () => {
    document.getElementById("btnRecomendaciones").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendaciones();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-introRecomen").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20);  
    });
}

let abrirLenguajeUno = () => {
    document.getElementById("btnLenguaje").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarLenguajeUno();
    });
}

let abrirLenguajeDos = () => {
    document.getElementById("btnRecomendacionesL").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarLenguajeDos();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-lenguajeDos").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20); 
    });
}

let abrirAccesoTexto = () => {
    document.getElementById("btnAccesText").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarAccesoTexto();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-AccessTexto").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20); 
    });
}

let abrirAccesoImagenes = () => {
    document.getElementById("btnAccessImg").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarAccesoImg();
    });
}

let abrirElaborarVideos = () => {
    document.getElementById("btnElaboracion").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarElaborarVideos();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-ElaboracionV").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20); 
    });
}

let abrirUsoImagenes = () => {
    document.getElementById("btnUso").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarUsoImagenes();
    });
}

let abrirEvaluacionMaterial = () => {
    document.getElementById("btnEvaluacionM").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarEvaluacionMaterial();
    });
}

let abrirRecomendacionAUno = () => {
    document.getElementById("btnClaves").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendacionAtencionUno();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-RecomendacionUno").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20); 
    });
}

let abrirRecomendacionADos = () => {
    document.getElementById("btnPersonas").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendacionAtencionDos();
    });
}

let abrirRecomendacionATres = () => {
    document.getElementById("btnDiscapacidad").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendacionAtencionTres();
    });
}

let abrirGlosario = () => {
    document.getElementById("btnGlosario").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarGlosario();
    });
}

let abrirBibliografia = () => {
    document.getElementById("btnBibliografia").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarBibliografia();
    });
}

