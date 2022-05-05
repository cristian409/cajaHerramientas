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
        console.log('hay error',error);
        /*Ayudas.alerta("cajaPrincipal",
            "Imposible acceder al menu", error);*/
        setTimeout(() => {gestionarMetodos();}, 2500);
        
    });

    await Modal.crear();

});


let gestionarMetodos = () => {
    cambiarColorMenu();
    cerrarMenuMobile();

    botonesIntroduccion();
    botonesLenguaje();
    botonesAccesibilidad();
    botonesMaterialAudio();
    botonesEvaluacionMaterial();
    botonesRecomendacion();
    botonRecomendacion();
    botonesInfoAdicional();

    if(screen.width > 1024) leerSvg();
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
    }, false);
}

let cerrarMenuMobile = () => {
    let contentMenu = document.getElementById("navbarToggleExternalContent");
    let tagsA = contentMenu.getElementsByTagName("a");
    for(let i=0; i < tagsA.length; i++){
        tagsA[i].addEventListener('click', ()=>{
            setTimeout(() => {
                contentMenu.classList.remove("show");
            }, 2000);
        });
    }
}

let botonesIntroduccion = () => {
    document.getElementById("btnMarco").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarMarcoNormativo();
    }, false);

    document.getElementById("btnRecomendaciones").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendaciones();
        setTimeout(() => {
            owlCarousel_func('owl-introRecomen');
        }, 500);
    }, false);
    document.getElementById("btnGuiaVerificacion").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/001 INTRODUCCION GUÍA DE VERIFICACIÓN.pdf")
    }, false);
}



let botonesLenguaje = () => {
    document.getElementById("btnLenguaje").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarLenguajeUno();
    }, false);

    document.getElementById("btnRecomendacionesL").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarLenguajeDos();
        setTimeout(() => {
            owlCarousel_func('owl-lenguajeDos');
        }, 500);
    }, false);

    document.getElementById("btnGuiaVerificacionL").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/002 LENGUAJE GUÍA DE VERIFICACIÓN.pdf")
    }, false);
}


let botonesAccesibilidad = () => {
    document.getElementById("btnAccesText").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarAccesoTexto();
        setTimeout(() => {
            owlCarousel_func('owl-AccessTexto');
        }, 500);
    }, false);

    document.getElementById("btnAccessImg").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarAccesoImg();
    }, false);

    document.getElementById("btnGuiaVerificacionA").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/003 ACCESIBILIDAD GUÍA DE VERIFICACIÓN.pdf")
    }, false);
}


let botonesMaterialAudio = () => {
    document.getElementById("btnElaboracion").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarElaborarVideos();
        setTimeout(() => {
            owlCarousel_func('owl-ElaboracionV');
        }, 500);
    }, false);

    document.getElementById("btnUso").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarUsoImagenes();
    }, false);

    document.getElementById("btnGuiaVerificacionV").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/004_2 MATERIAL AUD AUDIOVISUAL GUÍA DE VERIFICACIÓN.pdf")
    }, false);

    document.getElementById("btnGuiaVerificacionI").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/004_1 MATERIAL AUD IMÁGENES GUÍA DE VERIFICACIÓN.pdf")
    }, false);
}

let botonesEvaluacionMaterial = () => {
    document.getElementById("btnEvaluacionM").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarEvaluacionMaterial();
    }, false);

    document.getElementById("btnEvaluacionA").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/005_EVALUACION MATERIAL AUDIOVISUAL.pdf");
    }, false);

    document.getElementById("btnEvaluacionD").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/005_EVALUACION MATERIAL DOCUMENTAL.pdf");
    }, false);
}

let botonesRecomendacion = () => {
    document.getElementById("btnPersonas").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendacionAtencionUno();
        setTimeout(() => {
            owlCarousel_func('owl-RecomendacionUno');
        }, 500);
    }, false);

    document.getElementById("btnDiscapacidad").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendacionAtencionDos();
    }, false);

    document.getElementById("btnClaves").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendacionAtencionTres();
    }, false);
}

let botonRecomendacion = () => {
    document.getElementById("btnDescargaRe").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS MOBILE/REFERENCIAS.pdf");
    }, false);
}


let botonesInfoAdicional = () => {
    document.getElementById("btnProceso").addEventListener('click', (event) => {
        event.preventDefault();
        window.open("../../assets/imagenes/RECURSOS PC/008_RECOMENDACIONES PROCESO DE CUALIFICACION.pdf");
    }, false);

    document.getElementById("btnGlosario").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarGlosario();
    }, false);

    document.getElementById("btnBibliografia").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarBibliografia();
    }, false);
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

    svgDoc = svgMenuWeb.contentDocument;
    abrirCssSvg(svgDoc);
    cambiarColorMenuWeb(svgDoc);
    botonesMenuWeb(svgDoc);


    svgDoc = svgIntroduccion.contentDocument;
    abrirCssSvg(svgDoc);
    botonesIntroduccionWeb(svgDoc);

    svgDoc = svgLenguaje.contentDocument;
    abrirCssSvg(svgDoc);
    botonesLenguajeWeb(svgDoc);


    svgDoc = svgAccesibilidad.contentDocument;
    abrirCssSvg(svgDoc);
    botonesAccesibilidadWeb(svgDoc);


    svgDoc = svgMaterialAudio.contentDocument;
    abrirCssSvg(svgDoc);
    botonesMaterialAudioWeb(svgDoc);


    svgDoc = svgEvalucion.contentDocument;
    abrirCssSvg(svgDoc);
    botonesEvaluacionWeb(svgDoc);

    svgDoc = svgRecomendaciones.contentDocument;
    abrirCssSvg(svgDoc);
    botonesRecomendacionWeb(svgDoc);


    svgDoc = svgReferencias.contentDocument;
    abrirCssSvg(svgDoc);
    botonesReferenciasWeb(svgDoc);

    svgDoc = svgInfoAdicional.contentDocument;
    abrirCssSvg(svgDoc);
    botonesInfoAdicionalWeb(svgDoc);

}

let cambiarColorMenuWeb = (svgDoc) => {
    let scrollTop = document.documentElement.scrollTop;
    indicarSeccionWeb(svgDoc, scrollTop);

    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        let txtsMenus = svgDoc.getElementById("Capa_2-2");
        
        var sc1 = document.getElementById('accesibilidadSeccion').getBoundingClientRect().top;
        var scro1 = sc1+screen.height-200;
        var sc2 = document.getElementById('materialAudioSeccion').getBoundingClientRect().top;
        var scro2 = sc2+screen.height-200;
        
        if((scro1 >=0 && scro1 <screen.height) || (scro2 >=0 && scro2<screen.height) ) txtsMenus.classList.add("menu_cambio");
        else txtsMenus.classList.remove("menu_cambio");
        indicarSeccionWeb(svgDoc, scrollTop);

    }, false);
}

let indicarSeccionWeb = (svgDoc, scrollTop) => {

    var arr_items_scr_2 ={  "introduccionSeccion"           :"TUERCA_INTRO",
                            "lenguajeSeccion"               :"TURCO",
                            "accesibilidadSeccion"          :"TUERCAACCESIBILIDAD",
                            "materialAudioSeccion"          :"MATERIALAUTUERCA",
                            "evaluacionMaterialesSeccion"   :"TUERCAEVALUACION",
                            "recomendacionesASeccion"       :"TUERCARECOMENDACIONES",
                            "referenciasSeccion"            :"TUERCAREFERENCIAS",
                            "infoAdicionalSeccion"          :"TUERCAGLOSARIO"}

    for(var i in arr_items_scr_2){
        var sc = document.getElementById(i).getBoundingClientRect().top;
        var scro = sc+screen.height-200;
        if(scro >=0 && scro <screen.height){
            svgDoc.getElementById(arr_items_scr_2[i]).classList.add("tuerca_alumbra");
        }else svgDoc.getElementById(arr_items_scr_2[i]).classList.remove("tuerca_alumbra");
    }
    
}

let botonesMenuWeb = (svgDoc) => {
    
    let introduccion = svgDoc.getElementById("INTRODUCCION-2");
    let lenguaje = svgDoc.getElementById("LENGUAJE-2");
    let accesibilidad = svgDoc.getElementById("ACCESIBILIDAD-2");
    let material = svgDoc.getElementById("MATERIALAUDIOVISUAL-2");
    let evaluacion = svgDoc.getElementById("EVALUACIONMATERIALES-2");
    let recomendacion = svgDoc.getElementById("RECOMENDACIONES-2");
    let referencia = svgDoc.getElementById("REFERENCIAS-2");
    let infoAdiconal = svgDoc.getElementById("GLOSARIO-2");

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
            owlCarousel_func('owl-introRecomen');
        }, 500);
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
    }, false);
    imgLenguajeDos.addEventListener('click', () => {
        Modal.desplegarLenguajeDos();
        setTimeout(() => {
            owlCarousel_func('owl-lenguajeDos');
        }, 500);
    }, false);
    imgLenguajeTres.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/002 LENGUAJE GUÍA DE VERIFICACIÓN.pdf")
    }, false);
}

let botonesAccesibilidadWeb = (svgDoc) => {

    let imgAccesibilidadImg = svgDoc.getElementById("MUÑECOACCESOIMAGENES");
    let imgAccesibilidadTxt = svgDoc.getElementById("MUÑECOACCESIBILIDADTEXTOS");
    let imgAccesibilidadVerificacion = svgDoc.getElementById("MUÑECOGUIAVERIFICACION");

    imgAccesibilidadImg.addEventListener('click', () => {
        Modal.desplegarAccesoImg();
    }, false);
    imgAccesibilidadTxt.addEventListener('click', () => {
        Modal.desplegarAccesoTexto();
        setTimeout(() => {
            owlCarousel_func('owl-AccessTexto');
        }, 500);
    }, false);
    imgAccesibilidadVerificacion.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/003 ACCESIBILIDAD GUÍA DE VERIFICACIÓN.pdf")
    }, false);

}

let botonesMaterialAudioWeb = (svgDoc) => {

    let imgMaterialAudioUno = svgDoc.getElementById("USOIMAGENES");
    let imgMaterialAudioDos = svgDoc.getElementById("USOVIDEOS");
    let imgMaterialAudioTres = svgDoc.getElementById("GUIAIMAGENES");
    let imgMaterialAudioCuatro = svgDoc.getElementById("GUIAVIDEO");

    imgMaterialAudioUno.addEventListener('click', () => {
        Modal.desplegarUsoImagenes();
    }, false);

    imgMaterialAudioDos.addEventListener('click', () => {
        Modal.desplegarElaborarVideos();
        setTimeout(() => {
            owlCarousel_func('owl-ElaboracionV');
        }, 500);
    }, false);

    imgMaterialAudioTres.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/004_1 MATERIAL AUD IMÁGENES GUÍA DE VERIFICACIÓN.pdf");
    }, false);

    imgMaterialAudioCuatro.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/004_2 MATERIAL AUD AUDIOVISUAL GUÍA DE VERIFICACIÓN.pdf");
    }, false);
}

let botonesEvaluacionWeb = (svgDoc) => {

    let imgEvaluacion = svgDoc.getElementById("EVALUACIONMATERIAL");
    let imgEvalucionAudio = svgDoc.getElementById("EVALUACIONAUDIOVISUAL");
    let imgEvalucionDocu = svgDoc.getElementById("EVALUACIONDOCUMENTAL");

    imgEvaluacion.addEventListener('click', () => {
        Modal.desplegarEvaluacionMaterial();
    }, false);
    imgEvalucionAudio.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/005_EVALUACION MATERIAL AUDIOVISUAL.pdf");
    }, false);
    imgEvalucionDocu.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S DE VERIFICACIÓN/005_EVALUACION MATERIAL DOCUMENTAL.pdf");
    }, false);

}

let botonesReferenciasWeb = (svgDoc) => {

    let imgBombilloUno = svgDoc.getElementById("DOCUMENTOBOMBILLO");
    let imgBombilloDos = svgDoc.getElementById("RECURSOSEDUCATIVOSBOMBILLO");
    let imgBombilloTres = svgDoc.getElementById("TALLERISTASBOMBILLO");
    let imgBombilloCuatro = svgDoc.getElementById("RECURSOSWEBBOMBILLO");
    let imgBombilloCinco = svgDoc.getElementById("MATERIALAUDIOVISUALBOMBILLO");
    let imgBombilloSeis = svgDoc.getElementById("ORGANIZACIONESYPROYECTOSBOMBILLO");
    let imgBombilloSiete = svgDoc.getElementById("ARTICULOSBOMBILLO");

    imgBombilloUno.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/DOCUMENTOS.pdf");
    }, false);
    imgBombilloDos.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/RECURSOS EDUCATIVOS.pdf");
    }, false);
    imgBombilloTres.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/TALLERISTAS.pdf");
    }, false);
    imgBombilloCuatro.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/RECURSOS WEB.pdf");
    }, false);
    imgBombilloCinco.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/MATERIAL AUDIOVISUAL.pdf");
    }, false);
    imgBombilloSeis.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/ORGANIZACIONES Y PROYECTOS.pdf");
    }, false);
    imgBombilloSiete.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/PDF'S REFERENCIAS/ARTICULOS.pdf");
    }, false);
}

let botonesRecomendacionWeb = (svgDoc) => {

    let imgRecomendacionAtencion = svgDoc.getElementById("ATENCIONINCLUSIVA");
    let imgRecomendacionPersonas = svgDoc.getElementById("PERSONASTRANSYNOBINARIAS");
    let imgRecomendacionDiscapacidad = svgDoc.getElementById("PERSONASCONDISCAPACIDAD");

    imgRecomendacionAtencion.addEventListener('click', () => {
        Modal.desplegarRecomendacionAtencionTres();
    }, false);
    imgRecomendacionPersonas.addEventListener('click', () => {
        Modal.desplegarRecomendacionAtencionUno();
        setTimeout(() => {
            owlCarousel_func('owl-RecomendacionUno');
        }, 500);
    }, false);
    imgRecomendacionDiscapacidad.addEventListener('click', () => {
        Modal.desplegarRecomendacionAtencionDos();
    }, false);
}


let botonesInfoAdicionalWeb = (svgDoc) => {

    let imgGlosario = svgDoc.getElementById("GLOSARIO");
    let imgBibliografia = svgDoc.getElementById("BIBLIOGRAFIA");
    let imgProceso = svgDoc.getElementById("PROCESOSDECUALIFICACION");

    imgGlosario.addEventListener('click', () => {
        Modal.desplegarGlosario();
    }, false);
    imgBibliografia.addEventListener('click', () => {
        Modal.desplegarBibliografia();
    }, false);
    imgProceso.addEventListener('click', () => {
        window.open("../../assets/imagenes/RECURSOS PC/008_RECOMENDACIONES PROCESO DE CUALIFICACION.pdf");
    }, false);
}

let abrirCssSvg = (svgDoc) => {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = '../../../../../../app//modeloCaja/estilosSvg.css';
    svgDoc.getElementsByTagName('svg')[0].appendChild(css);
}

let owlCarousel_func = (name) => {
    
    var it = document.getElementById(name);
    if(it){
        $("#"+name).owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            autoPlay: false,
            items: 1,
            itemsDesktop: [640, 5],
            itemsDesktopSmall: [414, 4]
        });
    }else{
        setTimeout(() => {     owlCarousel_func(name)     }, 4000);
    }
        
}
