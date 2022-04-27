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
    cambiarColorMenu();
    indicarSeccionWeb();
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

let cambiarColorMenu = () => {
    let menu = document.querySelector(".navbar-toggler");
    let menuWebUno = document.querySelector(".uno");
    let menuWebDos = document.querySelector(".dos");
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 2470 && scrollTop < 5920) {
            menu.style.color = "#000000";
        } else {
            menu.style.color = "#ffff";
        }
    });
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 880 && scrollTop < 2300) {
            menuWebUno.classList.add("oculto");
            menuWebDos.classList.remove("oculto");
        } else {
            menuWebUno.classList.remove("oculto");
            menuWebDos.classList.add("oculto");
        }
    });
}

let indicarSeccionWeb = () => {
    let tuercaIndicada = document.getElementById("svgTuerca");
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 0 && scrollTop < 200) {
            tuercaIndicada.style.marginTop = "-71.7vh";
        }
        if (scrollTop > 200 && scrollTop < 400) {
            tuercaIndicada.style.marginTop = "-63.5vh";
        }
        if (scrollTop > 1200 && scrollTop < 1800) {
            tuercaIndicada.style.marginTop = "-54.5vh";
        }
        if (scrollTop > 1800 && scrollTop < 2500) {
            tuercaIndicada.style.marginTop = "-46.5vh";
        }
        if (scrollTop > 2500 && scrollTop < 3200) {
            tuercaIndicada.style.marginTop = "-37.5vh";
        }
        if (scrollTop > 3200 && scrollTop < 3900) {
            tuercaIndicada.style.marginTop = "-29.5vh";
        }
        if (scrollTop > 3900 && scrollTop < 4300) {
            tuercaIndicada.style.marginTop = "-20.5vh";
        }
        if (scrollTop > 4300) {
            tuercaIndicada.style.marginTop = "-12.5vh";
        }
    });

}

let abrirMarcoNormativo = () => {
    document.getElementById("btnMarco").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarMarcoNormativo();
    });

    let vsgIntroduccion = document.getElementById("svgIntroduccion");
    vsgIntroduccion.addEventListener("load", () => {
        let svgDoc = vsgIntroduccion.contentDocument;
        let imgIntroduccion = svgDoc.getElementById("MARCONORMATIVOINTERNACIONAL");
        imgIntroduccion.style.cursor = "pointer";
        imgIntroduccion.addEventListener('click', () => {
            Modal.desplegarMarcoNormativo();
        });
    }, false);
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





