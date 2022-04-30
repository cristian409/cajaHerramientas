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
    botonRecomendacion();
    botonesInfoAdicional();

    leerSvg();
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
            tuercaIndicada.classList.remove("inicial", "lenguajeScroll", "accesicibilidadScroll",
                "materialScroll", "evalucionScroll", "recomendacionScroll", "referenciaScroll", "glosarioScroll");
            tuercaIndicada.classList.add("introduccionScroll");
        }
        if (scrollTop > 250 && scrollTop < 1000) {
            tuercaIndicada.classList.remove("inicial", "introduccionScroll", "accesicibilidadScroll",
                "materialScroll", "evalucionScroll", "recomendacionScroll", "referenciaScroll", "glosarioScroll");
            tuercaIndicada.classList.add("lenguajeScroll");
        }
        if (scrollTop > 1000 && scrollTop < 1950) {
            tuercaIndicada.classList.remove("inicial", "introduccionScroll", "lenguajeScroll",
                "materialScroll", "evalucionScroll", "recomendacionScroll", "referenciaScroll", "glosarioScroll");
            tuercaIndicada.classList.add("accesicibilidadScroll");
        }
        if (scrollTop > 1950 && scrollTop < 2600) {
            tuercaIndicada.classList.remove("inicial", "introduccionScroll", "lenguajeScroll", "accesicibilidadScroll",
                "evalucionScroll", "recomendacionScroll", "referenciaScroll", "glosarioScroll");
            tuercaIndicada.classList.add("materialScroll");
        }
        if (scrollTop > 2600 && scrollTop < 3500) {
            tuercaIndicada.classList.remove("inicial", "introduccionScroll", "lenguajeScroll", "accesicibilidadScroll",
                "materialScroll", "recomendacionScroll", "referenciaScroll", "glosarioScroll");
            tuercaIndicada.classList.add("evalucionScroll");
        }
        if (scrollTop > 3500 && scrollTop < 4200) {
            tuercaIndicada.classList.remove("inicial", "introduccionScroll", "lenguajeScroll", "accesicibilidadScroll",
                "materialScroll", "evalucionScroll", "referenciaScroll", "glosarioScroll");
            tuercaIndicada.classList.add("recomendacionScroll");
        }
        if (scrollTop > 4200 && scrollTop < 5000) {
            tuercaIndicada.classList.remove("inicial", "introduccionScroll", "lenguajeScroll", "accesicibilidadScroll",
                "materialScroll", "evalucionScroll", "recomendacionScroll", "glosarioScroll");
            tuercaIndicada.classList.add("referenciaScroll");
        }
        if (scrollTop > 5000) {
            tuercaIndicada.classList.remove("inicial", "introduccionScroll", "lenguajeScroll", "accesicibilidadScroll",
                "materialScroll", "evalucionScroll", "recomendacionScroll", "referenciaScroll");
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
    document.getElementById("btnGuiaVerificacion").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/001 INTRODUCCION GUÍA DE VERIFICACIÓN.pdf")
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

    document.getElementById("btnGuiaVerificacionL").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/002 LENGUAJE GUÍA DE VERIFICACIÓN.pdf")
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

    document.getElementById("btnGuiaVerificacionA").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/003 ACCESIBILIDAD GUÍA DE VERIFICACIÓN.pdf")
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

    document.getElementById("btnGuiaVerificacionV").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/004_2 MATERIAL AUD AUDIOVISUAL GUÍA DE VERIFICACIÓN.pdf")
    });

    document.getElementById("btnGuiaVerificacionI").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/004_1 MATERIAL AUD IMÁGENES GUÍA DE VERIFICACIÓN.pdf")
    });
}

let botonesEvaluacionMaterial = () => {
    document.getElementById("btnEvaluacionM").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarEvaluacionMaterial();
    });

    document.getElementById("btnEvaluacionA").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/005_EVALUACION MATERIAL AUDIOVISUAL.pdf");
    });

    document.getElementById("btnEvaluacionD").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/005_EVALUACION MATERIAL DOCUMENTAL.pdf");
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

let botonRecomendacion = () => {
    document.getElementById("btnDescargaRe").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS MOBILE/REFERENCIAS.pdf");
    });
}


let botonesInfoAdicional = () => {
    document.getElementById("btnProceso").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/008_RECOMENDACIONES PROCESO DE CUALIFICACION.pdf");
    });

    document.getElementById("btnGlosario").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarGlosario();
    });

    document.getElementById("btnBibliografia").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarBibliografia();
    });
}

let leerSvg = () => {
    let vsgIntroduccion = document.getElementById("svgIntroduccion");
    let vsgLenguaje = document.getElementById("svgLenguaje");
    let vsgAccesibilidad = document.getElementById("svgAccesibilidad");
    let svgMaterialAudio = document.getElementById("svgMaterialAudio");
    let svgEvalucion = document.getElementById("svgEvalucion");
    let svgRecomendaciones = document.getElementById("svgRecomendaciones");
    let svgReferencias = document.getElementById("svgReferencias");
    let svgInfoAdicional = document.getElementById("svgInfoAdicional");
    let svgDoc;
    let svgBombillos = document.getElementById("svgBombillos");

    vsgIntroduccion.addEventListener("load", () => {
        svgDoc = vsgIntroduccion.contentDocument;

        abrirCssSvg(svgDoc);
        botonesIntroduccionWeb(svgDoc);
    }, false);

    vsgLenguaje.addEventListener('load', () => {
        svgDoc = vsgLenguaje.contentDocument;

        abrirCssSvg(svgDoc);
        botonesLenguajeWeb(svgDoc);
    }, false);

    vsgAccesibilidad.addEventListener('load', () => {
        svgDoc = vsgAccesibilidad.contentDocument;

        abrirCssSvg(svgDoc);
        botonesAccesibilidadWeb(svgDoc);
    }, false);

    svgMaterialAudio.addEventListener('load', () => {
        svgDoc = svgMaterialAudio.contentDocument;

        abrirCssSvg(svgDoc);
        botonesMaterialAudioWeb(svgDoc);
    }, false);

    svgEvalucion.addEventListener('load', () => {
        svgDoc = svgEvalucion.contentDocument;

        abrirCssSvg(svgDoc);
        botonesEvaluacionWeb(svgDoc);
    }, false);

    svgRecomendaciones.addEventListener('load', () => {
        svgDoc = svgRecomendaciones.contentDocument;

        abrirCssSvg(svgDoc);
        botonesRecomendacionWeb(svgDoc);
    }, false);


    svgBombillos.addEventListener('load', () => {
        let svgDocB = svgBombillos.contentDocument;
        abrirCssSvg(svgDocB);

        svgReferencias.addEventListener('load', () => {
            svgDoc = svgReferencias.contentDocument;

            abrirCssSvg(svgDoc);
            botonesReferenciasWeb(svgDoc, svgDocB);
        }, false);
    }, false);



    svgInfoAdicional.addEventListener('load', () => {
        svgDoc = svgInfoAdicional.contentDocument;

        abrirCssSvg(svgDoc);
        botonesInfoAdicionalWeb(svgDoc);
    }, false);
}

let botonesIntroduccionWeb = (svgDoc) => {
    let imgIntroduccion = svgDoc.getElementById("MARCONORMATIVOINTERNACIONAL");
    let imgRecomendaciones = svgDoc.getElementById("DESCUBRELASRECOMENDACIONES");
    let imgGuiaVerifica = svgDoc.getElementById("GUIADEVERIFICACION");


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
    imgGuiaVerifica.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/001 INTRODUCCION GUÍA DE VERIFICACIÓN.pdf")
    });
}


let botonesLenguajeWeb = (svgDoc) => {

    let imgLenguajeUno = svgDoc.getElementById("GLOBOLENGUAJECOMOLUCHA");
    let imgLenguajeDos = svgDoc.getElementById("RECOMENDACIONES");
    let imgLenguajeTres = svgDoc.getElementById("DESCARGAVERIFICACION");

    imgLenguajeUno.addEventListener('click', () => {
        Modal.desplegarLenguajeUno();
    });
    imgLenguajeDos.addEventListener('click', () => {
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
    imgLenguajeTres.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/002 LENGUAJE GUÍA DE VERIFICACIÓN.pdf")
    });
}

let botonesAccesibilidadWeb = (svgDoc) => {

    let imgAccesibilidadImg = svgDoc.getElementById("MUÑECOACCESOIMAGENES");
    let imgAccesibilidadTxt = svgDoc.getElementById("MUÑECOACCESIBILIDADTEXTOS");
    let imgAccesibilidadVerificacion = svgDoc.getElementById("MUÑECOGUIAVERIFICACION");

    imgAccesibilidadImg.addEventListener('click', () => {
        Modal.desplegarAccesoImg();
    });
    imgAccesibilidadTxt.addEventListener('click', () => {
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
    imgAccesibilidadVerificacion.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/003 ACCESIBILIDAD GUÍA DE VERIFICACIÓN.pdf")
    });

}

let botonesMaterialAudioWeb = (svgDoc) => {

    let imgMaterialAudioUno = svgDoc.getElementById("USOIMAGENES");
    let imgMaterialAudioDos = svgDoc.getElementById("USOVIDEOS");
    let imgMaterialAudioTres = svgDoc.getElementById("GUIAIMAGENES");
    let imgMaterialAudioCuatro = svgDoc.getElementById("GUIAVIDEO");

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

    imgMaterialAudioTres.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/004_1 MATERIAL AUD IMÁGENES GUÍA DE VERIFICACIÓN.pdf");
    });

    imgMaterialAudioCuatro.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/004_2 MATERIAL AUD AUDIOVISUAL GUÍA DE VERIFICACIÓN.pdf");
    });
}

let botonesEvaluacionWeb = (svgDoc) => {

    let imgEvaluacion = svgDoc.getElementById("EVALUACIONMATERIAL");
    let imgEvalucionAudio = svgDoc.getElementById("EVALUACIONAUDIOVISUAL");
    let imgEvalucionDocu = svgDoc.getElementById("EVALUACIONDOCUMENTAL");

    imgEvaluacion.addEventListener('click', () => {
        Modal.desplegarEvaluacionMaterial();
    });
    imgEvalucionAudio.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/005_EVALUACION MATERIAL AUDIOVISUAL.pdf");
    });
    imgEvalucionDocu.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/005_EVALUACION MATERIAL DOCUMENTAL.pdf");
    });

}

let botonesReferenciasWeb = (svgDoc, svgDocB) => {

    let imgBombilloUno = svgDoc.getElementById("DOCUMENTOBOMBILLO");
    let imgBombilloDos = svgDoc.getElementById("RECURSOSEDUCATIVOSBOMBILLO");
    let imgBombilloTres = svgDoc.getElementById("TALLERISTASBOMBILLO");
    let imgBombilloCuatro = svgDoc.getElementById("RECURSOSWEBBOMBILLO");
    let imgBombilloCinco = svgDoc.getElementById("MATERIALAUDIOVISUALBOMBILLO");
    let imgBombilloSeis = svgDoc.getElementById("ORGANIZACIONESYPROYECTOSBOMBILLO");
    let imgBombilloSiete = svgDoc.getElementById("ARTICULOSBOMBILLO");

    imgBombilloUno.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/DOCUMENTOS.pdf");
    });
    imgBombilloDos.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/RECURSOS EDUCATIVOS.pdf");
    });
    imgBombilloTres.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/TALLERISTAS.pdf");
    });
    imgBombilloCuatro.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/RECURSOS WEB.pdf");
    });
    imgBombilloCinco.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/MATERIAL AUDIOVISUAL.pdf");
    });
    imgBombilloSeis.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/ORGANIZACIONES Y PROYECTOS.pdf");
    });
    imgBombilloSiete.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/ARTICULOS.pdf");
    });

    // eventoBombillos(imgBombilloUno, imgBombilloDos, imgBombilloTres, imgBombilloCuatro, imgBombilloCinco, imgBombilloSeis, imgBombilloSiete, svgDocB);
}

let botonesRecomendacionWeb = (svgDoc) => {

    let imgRecomendacionAtencion = svgDoc.getElementById("ATENCIONINCLUSIVA");
    let imgRecomendacionPersonas = svgDoc.getElementById("PERSONASTRANSYNOBINARIAS");
    let imgRecomendacionDiscapacidad = svgDoc.getElementById("PERSONASCONDISCAPACIDAD");

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
}


let botonesInfoAdicionalWeb = (svgDoc) => {

    let imgGlosario = svgDoc.getElementById("GLOSARIO");
    let imgBibliografia = svgDoc.getElementById("BIBLIOGRAFIA");
    let imgProceso = svgDoc.getElementById("PROCESOSDECUALIFICACION");

    imgGlosario.addEventListener('click', () => {
        Modal.desplegarGlosario();
    });
    imgBibliografia.addEventListener('click', () => {
        Modal.desplegarBibliografia();
    });
    imgProceso.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/008_RECOMENDACIONES PROCESO DE CUALIFICACION.pdf");
    });
}

let eventoBombillos = (bombilloOffUno, bombilloOffDos, bombilloOffTres, bombilloOffCuatro, bombilloOffCinco, bombilloOffSeis, bombilloOffSiete, svgDocB) => {

    let bombilloOnUno = svgDocB.getElementById("DOCUMENTOS");
    let bombilloOnDos = svgDocB.getElementById("RECURSOSEDUCATIVOS");
    let bombilloOnTres = svgDocB.getElementById("TALLERISTAS");
    let bombilloOnCuatro = svgDocB.getElementById("ARTICULOS");
    let bombilloOnCinco = svgDocB.getElementById("RECURSOSWEB");
    let bombilloOnSeis = svgDocB.getElementById("MATERIALAUDIOVISUAL");
    let bombilloOnSiete = svgDocB.getElementById("ORGANIZACIONESYPROYECTOS");

    bombilloOffUno.addEventListener("mouseover", () => {
        // bombilloOnUno.style.position = "relative";
        // bombilloOnUno.style.zIndex = "99";
        console.log("hola mundo");
    });
    bombilloOffUno.addEventListener('mouseout', () => {
        console.log("hola mundo");
    });

}

let abrirCssSvg = (svgDoc) => {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = '../../../../../../app//modeloCaja/estilosSvg.css';
    svgDoc.getElementsByTagName('svg')[0].appendChild(css);
}
