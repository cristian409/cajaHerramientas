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
    botonesIntroduccion();
    botonesLenguaje();
    botonesAccesibilidad();
    botonesMaterialAudio();
    botonesEvaluacionMaterial();
    botonesRecomendacion();
    botonesInfoAdicional();
    botonesIntroduccionWeb();
    botonesLenguajeWeb();
    botonesAccesibilidadWeb();
    botonesMaterialAudioWeb();
    botonesEvaluacionWeb();
    botonesRecomendacionWeb();
    botonesInfoAdicionalWeb();
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
        if (scrollTop > 880 && scrollTop < 3000) {
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
        if (scrollTop > 0 && scrollTop < 250) {
            tuercaIndicada.classList.remove("inicial");
            tuercaIndicada.classList.remove("lenguajeScroll");
            tuercaIndicada.classList.add("introduccionScroll");
        }
        if (scrollTop > 250 && scrollTop < 1000) {
            tuercaIndicada.classList.remove("introduccionScroll");
            tuercaIndicada.classList.remove("accesicibilidadScroll");
            tuercaIndicada.classList.add("lenguajeScroll");
        }
        if (scrollTop > 1000 && scrollTop < 1950) {
            tuercaIndicada.classList.remove("lenguajeScroll");
            tuercaIndicada.classList.remove("materialScroll");
            tuercaIndicada.classList.add("accesicibilidadScroll");
        }
        if (scrollTop > 1950 && scrollTop < 2600) {
            tuercaIndicada.classList.remove("accesicibilidadScroll");
            tuercaIndicada.classList.remove("evalucionScroll");
            tuercaIndicada.classList.add("materialScroll");
        }
        if (scrollTop > 2600 && scrollTop < 3500) {
            tuercaIndicada.classList.remove("materialScroll");
            tuercaIndicada.classList.remove("recomendacionScroll");
            tuercaIndicada.classList.add("evalucionScroll");
        }
        if (scrollTop > 3500 && scrollTop < 4200) {
            tuercaIndicada.classList.remove("evalucionScroll");
            tuercaIndicada.classList.remove("referenciaScroll");
            tuercaIndicada.classList.add("recomendacionScroll");
        }
        if (scrollTop > 4200 && scrollTop < 5000) {
            tuercaIndicada.classList.remove("recomendacionScroll");
            tuercaIndicada.classList.remove("glosarioScroll");
            tuercaIndicada.classList.add("referenciaScroll");
        }
        if (scrollTop > 5000) {
            tuercaIndicada.classList.remove("referenciaScroll");
            tuercaIndicada.classList.add("glosarioScroll");
        }
    });

}

let botonesIntroduccion = () => {
    document.getElementById("btnMarco").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarMarcoNormativo();
    });

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



let botonesLenguaje = () => {
    document.getElementById("btnLenguaje").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarLenguajeUno();
    });

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


let botonesAccesibilidad = () => {
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

    document.getElementById("btnAccessImg").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarAccesoImg();
    });
}


let botonesMaterialAudio = () => {
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

    document.getElementById("btnUso").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarUsoImagenes();
    });
}

let botonesEvaluacionMaterial = () => {
    document.getElementById("btnEvaluacionM").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarEvaluacionMaterial();
    });
}

let botonesRecomendacion = () => {
    document.getElementById("btnPersonas").addEventListener('click', (event) => {
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

    document.getElementById("btnDiscapacidad").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendacionAtencionDos();
    });

    document.getElementById("btnClaves").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendacionAtencionTres();
    });
}


let botonesInfoAdicional = () => {
    document.getElementById("btnGlosario").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarGlosario();
    });

    document.getElementById("btnBibliografia").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarBibliografia();
    });
}


let botonesIntroduccionWeb = () => {
    let vsgIntroduccion = document.getElementById("svgIntroduccion");
    vsgIntroduccion.addEventListener("load", () => {
        let svgDoc = vsgIntroduccion.contentDocument;
        let imgIntroduccion = svgDoc.getElementById("MARCONORMATIVOINTERNACIONAL");
        let imgRecomendaciones = svgDoc.getElementById("DESCUBRELASRECOMENDACIONES");
        imgIntroduccion.style.cursor = "pointer";
        imgRecomendaciones.style.cursor = "pointer";
        
        imgIntroduccion.addEventListener('click', () => {
            Modal.desplegarMarcoNormativo();
        });
        imgRecomendaciones.addEventListener('click', () => {
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
    }, false);
}


let botonesLenguajeWeb = () => {
    let vsgLenguaje = document.getElementById("svgLenguaje");
    vsgLenguaje.addEventListener('load', () => {
        let svgDoc = vsgLenguaje.contentDocument;
        let imgLenguajeUno = svgDoc.getElementById("GLOBOLENGUAJECOMOLUCHA");
        // let imgLenguajeDos = svgDoc.getElementById("");
        imgLenguajeUno.style.cursor = "pointer";
        // imgLenguajeDos.style.cursor = "pointer";
        imgLenguajeUno.addEventListener('click', () => {
            Modal.desplegarLenguajeUno();
        });
    });
}

let botonesAccesibilidadWeb = () => {
    let vsgAccesibilidad = document.getElementById("svgAccesibilidad");
    vsgAccesibilidad.addEventListener('load', () => {
        let svgDoc = vsgAccesibilidad.contentDocument;
        let imgAccesibilidadImg = svgDoc.getElementById("MUÑECOACCESOIMAGENES");
        // let imgAccesibilidadTxt = svgDoc.getElementById("");
        imgAccesibilidadImg.style.cursor = "pointer";
        // imgLenguajeDos.style.cursor = "pointer";
        imgAccesibilidadImg.addEventListener('click', () => {
            Modal.desplegarAccesoImg();
        });
    });
}

let botonesMaterialAudioWeb = () => {
    let svgMaterialAudio = document.getElementById("svgMaterialAudio");
    svgMaterialAudio.addEventListener('load', () => {
        let svgDoc = svgMaterialAudio.contentDocument;
        let imgMaterialAudioUno = svgDoc.getElementById("USOIMAGENES");
        let imgMaterialAudioDos = svgDoc.getElementById("USOVIDEOS");
        imgMaterialAudioUno.style.cursor = "pointer";
        imgMaterialAudioDos.style.cursor = "pointer";
        imgMaterialAudioUno.addEventListener('click', () => {
            Modal.desplegarUsoImagenes();
        });

        imgMaterialAudioDos.addEventListener('click', () => {
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
    });
}

let botonesEvaluacionWeb = () => {
    let svgEvalucion = document.getElementById("svgEvalucion");
    svgEvalucion.addEventListener('load', () => {
        let svgDoc = svgEvalucion.contentDocument;
        let imgEvaluacion = svgDoc.getElementById("EVALUACIONMATERIAL");
        // let imgAccesibilidadTxt = svgDoc.getElementById("");
        imgEvaluacion.style.cursor = "pointer";
        // imgLenguajeDos.style.cursor = "pointer";
        imgEvaluacion.addEventListener('click', () => {
            Modal.desplegarEvaluacionMaterial();
        });
    });
}

let botonesRecomendacionWeb = () => {
    let svgRecomendaciones = document.getElementById("svgRecomendaciones");
    svgRecomendaciones.addEventListener('load', () => {
        let svgDoc = svgRecomendaciones.contentDocument;
        let imgRecomendacionAtencion = svgDoc.getElementById("ATENCIONINCLUSIVA");
        let imgRecomendacionPersonas = svgDoc.getElementById("PERSONASTRANSYNOBINARIAS");
        let imgRecomendacionDiscapacidad = svgDoc.getElementById("PERSONASCONDISCAPACIDAD");
        imgRecomendacionAtencion.style.cursor = "pointer";
        imgRecomendacionPersonas.style.cursor = "pointer";
        imgRecomendacionDiscapacidad.style.cursor = "pointer";
        imgRecomendacionAtencion.addEventListener('click', () => {
            Modal.desplegarRecomendacionAtencionTres();
        });
        imgRecomendacionPersonas.addEventListener('click', () => {
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
        imgRecomendacionDiscapacidad.addEventListener('click', () => {
            Modal.desplegarRecomendacionAtencionDos();
        });
    });
}


let botonesInfoAdicionalWeb = () => {
    let svgInfoAdicional = document.getElementById("svgInfoAdicional");
    svgInfoAdicional.addEventListener('load', () => {
        let svgDoc = svgInfoAdicional.contentDocument;
        let imgGlosario = svgDoc.getElementById("GLOSARIO");
        let imgBibliografia = svgDoc.getElementById("BIBLIOGRAFIA");
        // let imgRecomendacionDiscapacidad = svgDoc.getElementById("PERSONASCONDISCAPACIDAD");
        imgGlosario.style.cursor = "pointer";
        imgBibliografia.style.cursor = "pointer";
        // imgRecomendacionDiscapacidad.style.cursor = "pointer";
        imgGlosario.addEventListener('click', () => {
            Modal.desplegarGlosario();
        });
        imgBibliografia.addEventListener('click', () => {
            Modal.desplegarBibliografia();
        });
    });
}

