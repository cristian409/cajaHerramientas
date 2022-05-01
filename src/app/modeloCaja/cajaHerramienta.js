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

    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 2470 && scrollTop < 5920) {
            menu.style.color = "#000000";
        } else {
            menu.style.color = "#ffff";
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

    let svgIntroduccion = document.getElementById("svgIntroduccion");
    let svgLenguaje = document.getElementById("svgLenguaje");
    let svgAccesibilidad = document.getElementById("svgAccesibilidad");
    let svgMaterialAudio = document.getElementById("svgMaterialAudio");
    let svgEvalucion = document.getElementById("svgEvalucion");
    let svgRecomendaciones = document.getElementById("svgRecomendaciones");
    let svgReferencias = document.getElementById("svgReferencias");
    let svgInfoAdicional = document.getElementById("svgInfoAdicional");
    let svgDoc;
    let svgMenuWeb = document.getElementById("svgMenuWeb");

    svgMenuWeb.addEventListener("load", () => {
        svgDoc = svgMenuWeb.contentDocument;

        abrirCssSvg(svgDoc);
        cambiarColorMenuWeb(svgDoc);
        indicarSeccionWeb(svgDoc);
        botonesMenuWeb(svgDoc);
    }, false);

    svgIntroduccion.addEventListener("load", () => {
        svgDoc = svgIntroduccion.contentDocument;

        abrirCssSvg(svgDoc);
        botonesIntroduccionWeb(svgDoc);
    }, false);

    svgLenguaje.addEventListener('load', () => {
        svgDoc = svgLenguaje.contentDocument;

        abrirCssSvg(svgDoc);
        botonesLenguajeWeb(svgDoc);
    }, false);

    svgAccesibilidad.addEventListener('load', () => {
        svgDoc = svgAccesibilidad.contentDocument;

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


    svgReferencias.addEventListener('load', () => {
        svgDoc = svgReferencias.contentDocument;

        abrirCssSvg(svgDoc);
        botonesReferenciasWeb(svgDoc);
    }, false);

    svgInfoAdicional.addEventListener('load', () => {
        svgDoc = svgInfoAdicional.contentDocument;

        abrirCssSvg(svgDoc);
        botonesInfoAdicionalWeb(svgDoc);
    }, false);
}

let cambiarColorMenuWeb = (svgDoc) => {

    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        let txtsMenus = svgDoc.getElementById("MENU").getElementsByTagName('text');
        if (scrollTop > 880 && scrollTop < 2800) {
            for (let i = 0; i < txtsMenus.length; i++) {
                txtsMenus[i].style.fill = "#000";
            }
        } else {
            for (let i = 0; i < txtsMenus.length; i++) {
                txtsMenus[i].style.fill = "#ffff";
            }
        }
    });
}

let indicarSeccionWeb = (svgDoc) => {

    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 0 && scrollTop < 250) {
            svgDoc.getElementById("TUERCAAPAGADAINTRODUCCION").style.display = "none";
            svgDoc.getElementById("TUERCAENCENDIDAINTRODUCCION").style.display = "block";
        }
        if (scrollTop > 250 && scrollTop < 1000) {
            svgDoc.getElementById("TUERCAAPAGADAINTRODUCCION").style.display = "block";
            svgDoc.getElementById("TUERCAENCENDIDAINTRODUCCION").style.display = "none";
            svgDoc.getElementById("TUERCAAPAGADALENGUAJE").style.display = "none";
            svgDoc.getElementById("TUERCAENCENDIDALENGUAJE").style.display = "block";
        }
        if (scrollTop > 1000 && scrollTop < 1950) {
            svgDoc.getElementById("TUERCAAPAGADALENGUAJE").style.display = "block";
            svgDoc.getElementById("TUERCAENCENDIDALENGUAJE").style.display = "none";
            svgDoc.getElementById("TUERCAAPAGADAACCESIBILIDAD").style.display = "none";
            svgDoc.getElementById("TUERCAENCENDIDAACCESIBILIDAD").style.display = "block";
        }
        if (scrollTop > 1950 && scrollTop < 2600) {
            svgDoc.getElementById("TUERCAAPAGADAACCESIBILIDAD").style.display = "block";
            svgDoc.getElementById("TUERCAENCENDIDAACCESIBILIDAD").style.display = "none";
            svgDoc.getElementById("TUERCAAPAGADAMATERIAL").style.display = "none";
            svgDoc.getElementById("TUERCAENCENDIDAMATERIAL").style.display = "block";
        }
        if (scrollTop > 2600 && scrollTop < 3500) {
            svgDoc.getElementById("TUERCAAPAGADAMATERIAL").style.display = "block";
            svgDoc.getElementById("TUERCAENCENDIDAMATERIAL").style.display = "none";
            svgDoc.getElementById("TUERCAAPAGADAEVALUACION").style.display = "none";
            svgDoc.getElementById("TUERCAENCENDIDAEVALUACION").style.display = "block";
        }
        if (scrollTop > 3500 && scrollTop < 4200) {
            svgDoc.getElementById("TUERCAAPAGADAEVALUACION").style.display = "block";
            svgDoc.getElementById("TUERCAENCENDIDAEVALUACION").style.display = "none";
            svgDoc.getElementById("TUERCAAPAGADARECOMENDACION").style.display = "none";
            svgDoc.getElementById("TUERCAENCENDIDARECOMENDACION").style.display = "block";
        }
        if (scrollTop > 4200 && scrollTop < 5000) {
            svgDoc.getElementById("TUERCAAPAGADARECOMENDACION").style.display = "block";
            svgDoc.getElementById("TUERCAENCENDIDARECOMENDACION").style.display = "none";
            svgDoc.getElementById("TUERCAAPAGADAREFERENCIA").style.display = "none";
            svgDoc.getElementById("TUERCAENCENDIDAREFERENCIA").style.display = "block";
        }
        if (scrollTop > 5000) {
            svgDoc.getElementById("TUERCAAPAGADAREFERENCIA").style.display = "block";
            svgDoc.getElementById("TUERCAENCENDIDAREFERENCIA").style.display = "none";
            svgDoc.getElementById("TUERCAAPAGADAINFOADICIONAL").style.display = "none";
            svgDoc.getElementById("TUERCAENCENDIDAINFOADICIONAL").style.display = "block";
        }
    }, false);

}

let botonesMenuWeb = (svgDoc) => {

    let introduccion = svgDoc.getElementById("TUERCAAPAGADAINTRODUCCION");
    let lenguaje = svgDoc.getElementById("TUERCAAPAGADALENGUAJE");
    let accesibilidad = svgDoc.getElementById("TUERCAAPAGADAACCESIBILIDAD");
    let material = svgDoc.getElementById("TUERCAAPAGADAMATERIAL");
    let evaluacion = svgDoc.getElementById("TUERCAAPAGADAEVALUACION");
    let recomendacion = svgDoc.getElementById("TUERCAAPAGADARECOMENDACION");
    let referencia = svgDoc.getElementById("TUERCAAPAGADAREFERENCIA");
    let infoAdiconal = svgDoc.getElementById("TUERCAAPAGADAINFOADICIONAL");
    let txtsMenus = svgDoc.getElementById("MENU").getElementsByTagName('text');

    introduccion.addEventListener('click', () => {
        location.hash = "#introduccionSeccion";
    }, false);

    lenguaje.addEventListener('click', () => {
        location.hash = "#lenguajeSeccion";
    }, false);

    accesibilidad.addEventListener('click', () => {
        location.hash = "#accesibilidadSeccion";
    }, false);

    material.addEventListener('click', () => {
        location.hash = "#materialAudioSeccion";
    }, false);

    evaluacion.addEventListener('click', () => {
        location.hash = "#evaluacionMaterialesSeccion";
    }, false);

    recomendacion.addEventListener('click', () => {
        location.hash = "#recomendacionesASeccion";
    }, false);

    referencia.addEventListener('click', () => {
        location.hash = "#referenciasSeccion";
    }, false);

    infoAdiconal.addEventListener('click', () => {
        location.hash = "#infoAdicionalSeccion";
    }, false);

    txtsMenus[0].addEventListener('click', () => {
        location.hash = "#introduccionSeccion";
    }, false);

    txtsMenus[1].addEventListener('click', () => {
        location.hash = "#lenguajeSeccion";
    }, false);

    txtsMenus[2].addEventListener('click', () => {
        location.hash = "#accesibilidadSeccion";
    }, false);

    txtsMenus[3].addEventListener('click', () => {
        location.hash = "#materialAudioSeccion";
    }, false);

    txtsMenus[4].addEventListener('click', () => {
        location.hash = "#evaluacionMaterialesSeccion";
    }, false);

    txtsMenus[5].addEventListener('click', () => {
        location.hash = "#recomendacionesASeccion";
    }, false);

    txtsMenus[6].addEventListener('click', () => {
        location.hash = "#referenciasSeccion";
    }, false);

    txtsMenus[7].addEventListener('click', () => {
        location.hash = "#infoAdicionalSeccion";
    }, false);

}

let botonesIntroduccionWeb = (svgDoc) => {
    let imgIntroduccion = svgDoc.getElementById("MARCONORMATIVOINTERNACIONAL");
    let imgRecomendaciones = svgDoc.getElementById("DESCUBRELASRECOMENDACIONES");
    let imgGuiaVerifica = svgDoc.getElementById("GUIADEVERIFICACION");


    imgIntroduccion.addEventListener('click', () => {
        Modal.desplegarMarcoNormativo();
    }, false);
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
        }, 5000);
    }, false);
    imgGuiaVerifica.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/001 INTRODUCCION GUÍA DE VERIFICACIÓN.pdf")
    }, false);
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

let botonesReferenciasWeb = (svgDoc) => {

    let imgBombilloUno = svgDoc.getElementById("DOCUMENTOBOMBILLOAPAGADO");
    let imgBombilloDos = svgDoc.getElementById("RECURSOSEDUCATIVOSBOMBILLOAPAGADO");
    let imgBombilloTres = svgDoc.getElementById("TALLERISTASBOMBILLOAPAGADO");
    let imgBombilloCuatro = svgDoc.getElementById("RECURSOSWEBBOMBILLOAPAGADO");
    let imgBombilloCinco = svgDoc.getElementById("MATERIALAUDIOVISUALBOMBILLOAPAGADO");
    let imgBombilloSeis = svgDoc.getElementById("ORGANIZACIONESYPROYECTOSBOMBILLOAPAGADO");
    let imgBombilloSiete = svgDoc.getElementById("ARTICULOSBOMBILLOAPAGADO");

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

    let bombilloOnUno = svgDocB.getElementById("DOCUMENTOSENBOMBILLOENCENDIDO");
    let bombilloOnDos = svgDocB.getElementById("RECURSOSEDUCATIVOSENBOMBILLOENCENDIDO");
    let bombilloOnTres = svgDocB.getElementById("TALLERISTASENBOMBILLOENCENDIDO");
    let bombilloOnCuatro = svgDocB.getElementById("ARTICULOSENBOMBILLOENCENDIDO");
    let bombilloOnCinco = svgDocB.getElementById("RECURSOSWEBENBOMBILLOENCENDIDO");
    let bombilloOnSeis = svgDocB.getElementById("MATERIALAUDIOVISUALENBOMBILLOENCENDIDO");
    let bombilloOnSiete = svgDocB.getElementById("ORGANIZACIONESYPROYECTOSENBOMBILLOENCENDIDO");

    bombilloOffUno.addEventListener("mouseover", () => {
        bombilloOffUno.style.opacity = "0";
        bombilloOnUno.style.opacity = "1"
    });
    bombilloOffUno.addEventListener('mouseout', () => {
        bombilloOffUno.style.opacity = "1";
        bombilloOnUno.style.opacity = "0"
    });
    bombilloOffDos.addEventListener("mouseover", () => {
        bombilloOffDos.style.opacity = "0";
        bombilloOnDos.style.opacity = "1"
    });
    bombilloOffDos.addEventListener('mouseout', () => {
        bombilloOffDos.style.opacity = "1";
        bombilloOnDos.style.opacity = "0"
    });
    bombilloOffTres.addEventListener("mouseover", () => {
        bombilloOffTres.style.opacity = "0";
        bombilloOnTres.style.opacity = "1"
    });
    bombilloOffTres.addEventListener('mouseout', () => {
        bombilloOffTres.style.opacity = "1";
        bombilloOnTres.style.opacity = "0"
    });
    bombilloOffCuatro.addEventListener("mouseover", () => {
        bombilloOffCuatro.style.opacity = "0";
        bombilloOnCuatro.style.opacity = "1"
    });
    bombilloOffCuatro.addEventListener('mouseout', () => {
        bombilloOffCuatro.style.opacity = "1";
        bombilloOnCuatro.style.opacity = "0"
    });
    bombilloOffCinco.addEventListener("mouseover", () => {
        bombilloOffCinco.style.opacity = "0";
        bombilloOnCinco.style.opacity = "1"
    });
    bombilloOffCinco.addEventListener('mouseout', () => {
        bombilloOffCinco.style.opacity = "1";
        bombilloOnCinco.style.opacity = "0"
    });
    bombilloOffSeis.addEventListener("mouseover", () => {
        bombilloOffSeis.style.opacity = "0";
        bombilloOnSeis.style.opacity = "1"
    });
    bombilloOffSeis.addEventListener('mouseout', () => {
        bombilloOffSeis.style.opacity = "1";
        bombilloOnSeis.style.opacity = "0"
    });
    bombilloOffSiete.addEventListener("mouseover", () => {
        bombilloOffSiete.style.opacity = "0";
        bombilloOnSiete.style.opacity = "1"
    });
    bombilloOffSiete.addEventListener('mouseout', () => {
        bombilloOffSiete.style.opacity = "1";
        bombilloOnSiete.style.opacity = "0"
    });

}

let abrirCssSvg = (svgDoc) => {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = '../../../../../../app//modeloCaja/estilosSvg.css';
    svgDoc.getElementsByTagName('svg')[0].appendChild(css);
}
