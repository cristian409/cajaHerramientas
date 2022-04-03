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
    // cambiarColorMenuMobil();
    abrirMarcoNormativo();
    abrirRecomendaciones();
}

let cambiarColorMenuMobil = () =>{
    let menu = document.querySelector(".navbar-toggler");
    window.addEventListener('scroll',()=>{
        let scrollTop = document.documentElement.scrollTop;
        console.log("scrollTop" + scrollTop);
        if (scrollTop > 2470) {
            menu.style.color = "#000000";
        }
    });
}

let abrirMarcoNormativo = () => {
    document.getElementById("btnMarco").addEventListener('click', () => {
<<<<<<< HEAD
        Modal.desplegar({
            contenido: `
            <div class="modal-content primerDivMarco">
                <span type="button" class="btnClose text-white fa-solid fa-xmark"></span>
                <main class="modal-body">
                   <div class="text-center">
                        <img class="estrellaIzquierda"
                        src="../../assets/imagenes/RECURSOS MOBILE/PNG INTRODUCCIÓN/Marco Normativo/001.Estrellas blancas.png"
                        alt="estrellas izquierda">
                        <h1 class="tituloPrincipal">
                            Marco Normativo
                        </h1>
                        <img class="estrellaDerecha"
                            src="../../assets/imagenes/RECURSOS MOBILE/PNG INTRODUCCIÓN/Marco Normativo/002.Estrellas blancas_1.png"
                            alt="estrellas derecha">
                    </div>
                    <article>
                        <p>
                            Durante las últimas cuatro décadas conceptos
                            como igualdad, equidad y no discriminación
                            de género han logrado especial relevancia en
                            conferencias mundiales, cumbres y
                            declaraciones regionales, y demás
                            convenciones, pactos, protocolos, estatutos, y
                            normas. Como escenarios propicios para el
                            debate, estas han representado avances en la
                            materia y sus propuestas se ven re!ejadas en
                            las diferentes plataformas de acción.
                        </p>
                        <p>
                            Las recomendaciones y resoluciones
                            resultado de estos múltiples consensos
                            orientan a buscar soluciones a los problemas
                            más críticos y señalan los <strong>vínculos
                            conceptuales, las prácticas positivas y las
                            repercusiones en materia de políticas</strong> y
                            permiten planificar y llevar adelante un
                            proceso de trabajo conjunto entre los Estados,
                            organismos y órganos de las Naciones Unidas
                            y los distintos sectores de la sociedad civil
                            potenciando la institucionalización y la
                            transversalización de género. (CNGR, MDG/F,
                            UNFPA, CSJ, 2011).
                        </p>
                        <p>
                            A continuación, se presenta el marco
                            normativo internacional producto de los
                            <strong>avances en la defensa de la diversidad y
                            equidad de género</strong> y que sirve como
                            orientación para la ejecución de planes y
                            proyectos en el área.
                        </p>
                    </article>
                    <footer class="text-center">
                        <img class="foto1"
                        src="../../assets/imagenes/RECURSOS MOBILE/PNG INTRODUCCIÓN/Marco Normativo/003.Foto 1 marco normativo.png"
                        alt="foto1 marco normativo">
                    </footer>
                </main>
            </div>
            <div class="modal-content segundoDivMarco">
                <main class="modal-body text-dark">
                    <img class="estrellaRojas"
                        src="../../assets/imagenes/RECURSOS MOBILE/PNG INTRODUCCIÓN/Marco Normativo/004.Estrellas rojas.png"
                        alt="estrellas rojas">
                    <div class="lineaPunteada">
                        <div class="numero">
                            1945
                        </div>
                        <div class="accordion" id="cartaNaciones">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseUno" aria-expanded="false" aria-controls="collapseOne">
                                        Carta de las Naciones Unidas
                                    </button>
                                </h2>
                                <div id="collapseUno" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#cartaNaciones">
                                    <div class="accordion-body">
                                        Primer instrumento jurídico que afirma la igualdad de
                                        todos los seres humanos y se re"ere expresamente al
                                        sexo como motivo de discriminación.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            1946
                        </div>
                        <div class="accordion" id="comisionJuridica">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseDos" aria-expanded="false" aria-controls="collapseOne">
                                        Creación de la Comisión Jurídica y Social de la
                                        Mujer Naciones Unidas
                                    </button>
                                </h2>
                                <div id="collapseDos" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#comisionJuridica">
                                    <div class="accordion-body">
                                        Su misión es preparar recomendaciones e informes
                                        sobre los problemas urgentes y la promoción de los
                                        derechos de las mujeres en las áreas política,
                                        económica, civil, social y educativa, extendiéndose su
                                        mandato en 1987 a actividades de incidencia en temas
                                        de igualdad, desarrollo y paz y dar seguimiento a la
                                        aplicación de las medidas acordadas y la revisión de los
                                        progresos realizados. <a href="">Haga clic aquí para ampliar
                                            información.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            1979
                        </div>
                        <div class="accordion" id="convencionEliminacion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTres" aria-expanded="false" aria-controls="collapseOne">
                                        Convención sobre la Eliminación de Todas las
                                        Formas de Discriminación Contra la Mujer
                                    </button>
                                </h2>
                                <div id="collapseTres" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#convencionEliminacion">
                                    <div class="accordion-body">
                                        La Convención para la Eliminación de todas las Formas
                                        de Discriminación contra la Mujeres (CEDAW) es el
                                        instrumento que mandata la adopción de medidas
                                        especiales de carácter temporal (acciones a"rmativas)
                                        para lograr la igualdad sustantiva entre hombres y
                                        mujeres, incluyendo los presupuestos públicos con
                                        perspectiva de género.
                                        De manera particular, la Recomendación general No. 25,
                                        al artículo 4 de la convención alienta a los Estados Parte
                                        a adoptar medidas especiales de carácter temporal
                                        (acción afirmativa) encaminadas a acelerar la igualdad
                                        de facto entre mujeres y hombres. <i>"La adopción por los
                                            Estados Partes de medidas especiales de carácter temporal
                                            encaminadas a acelerar la igualdad de facto entre el
                                            hombre y la mujer no se considerará discriminación en la
                                            forma de!nida en la presente Convención, pero de ningún
                                            modo entrañará, como consecuencia, el mantenimiento de
                                            normas desiguales o separadas; estas medidas cesarán
                                            cuando se hayan alcanzado los objetivos de igualdad de
                                            oportunidad y trato.</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            1980
                        </div>
                        <div class="accordion" id="conferenciaDecenio">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseCuatro" aria-expanded="false" aria-controls="collapseOne">
                                        Conferencia Mundial del Decenio de las Naciones
                                        Unidas para la Mujer (Copenhague)
                                    </button>
                                </h2>
                                <div id="collapseCuatro" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#conferenciaDecenio">
                                    <div class="accordion-body">
                                        Se visibilizan las diferencias existentes entre los
                                        derechos garantizados (igualdad formal) y la capacidad
                                        de las mujeres para ejercer esos derechos (igualdad real)
                                        con una especial atención en las oportunidades
                                        laborales, los servicios de salud y la educación.
                                        Adopción del Programa de Acción de Copenhague.
                                        <a href="">Haga clic aquí para conocer la conferencia.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            1981
                        </div>
                        <div class="accordion" id="ley22">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseCinco" aria-expanded="false" aria-controls="collapseOne">
                                        Ley 22, Ratifica la Convención Internacional sobre
                                        la Eliminación de todas las Formas de
                                        Discriminación Racial. (Aprobada por Asamblea
                                        General de las Naciones Unidas. Resolución 2106A
                                        (XX), de 21 de diciembre de 1965).
                                    </button>
                                </h2>
                                <div id="collapseCinco" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#ley22">
                                    <div class="accordion-body">
                                        Insta a los Estados miembros a erradicar todas las
                                        formas de discriminación racial, xenofobia e intolerancia
                                        conexa. En relación con las mujeres plantea la urgencia
                                        de garantizar los derechos humanos, principalmente los
                                        relacionados con el trato igualitario y justo; recibir las
                                        mismas oportunidades de formación, capacitación;
                                        acceso y distribución a bienes y recursos. <a href="">Haga clic para
                                            conocer la Ley.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            1985
                        </div>
                        <div class="accordion" id="conferenciaExamen">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeis" aria-expanded="false" aria-controls="collapseOne">
                                        Conferencia Mundial para el Examen y la
                                        Evaluación de los Logros del Decenio de las
                                        Naciones Unidas para la Mujer (Nairobi)
                                    </button>
                                </h2>
                                <div id="collapseSeis" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#conferenciaExamen">
                                    <div class="accordion-body">
                                        Se puso de manifiesto que solo un cierto número de
                                        mujeres se beneficiaba de las mejoras instando a los
                                        gobiernos a encontrar nuevos campos de acción para
                                        asegurar que la paz, el desarrollo y la igualdad pudiesen
                                        lograrse. Se identificaron tres sectores en Nairobi que
                                        incluyeron la igualdad en la participación social, y la
                                        igualdad en la participación política y en la toma de
                                        decisiones. <a href="">Haga clic para
                                            conocer la conferencia.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            1993
                        </div>
                        <div class="accordion" id="declaracionEliminacion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSiete" aria-expanded="false" aria-controls="collapseOne">
                                        Declaración sobre la Eliminación de la Violencia
                                        contra la Mujer
                                    </button>
                                </h2>
                                <div id="collapseSiete" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#declaracionEliminacion">
                                    <div class="accordion-body">
                                        La Declaración de 1993 sobre la Eliminación de la
                                        Violencia contra la Mujer es el primer instrumento
                                        internacional de derechos humanos que aborda
                                        exclusiva y explícitamente la cuestión de la violencia
                                        contra la mujer. En ella se afirma que es un fenómeno
                                        que viola, menoscaba o anula los derechos humanos de
                                        las mujeres y el ejercicio de sus libertades
                                        fundamentales. En la Declaración se define el abuso
                                        basado en el género como <i>«todo acto de violencia
                                            basado en la pertenencia al sexo femenino que tenga o
                                            pueda tener como resultado un daño o sufrimiento físico,
                                            sexual o psicológico para la mujer, así como las amenazas
                                            de tales actos, la coacción o la privación arbitraria de la
                                            libertad, tanto si se producen en la vida pública como en la
                                            vida privada»</i>. En ella se afirrma, además, que la
                                        violencia
                                        por razón de género adopta múltiples formas y se vive
                                        en distintas situaciones, y no solo durante las crisis. Está
                                        profundamente arraigada en las relaciones
                                        estructurales de desigualdad entre la mujer y el
                                        hombre. <a href="">Haga clic para
                                            conocer la declaración.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            1994
                        </div>
                        <div class="accordion" id="convencionInter">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOcho" aria-expanded="false" aria-controls="collapseOne">
                                        Convención Interamericana para prevenir,
                                        sancionar y erradicar la violencia contra las
                                        mujeres (Belem do Pará)
                                    </button>
                                </h2>
                                <div id="collapseOcho" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#convencionInter">
                                    <div class="accordion-body">
                                        El Artículo 8 habla de adoptar de forma progresiva
                                        medidas específicas y programas para prevenir,
                                        erradicar, sancionar y reparar la violencia contra las
                                        mujeres. <i>“Los Estados Partes convienen en adoptar, en
                                            forma progresiva, medidas específicas, inclusive
                                            programas para:
                                            a. fomentar el conocimiento y la observancia del derecho
                                            de la mujer a una vida libre de violencia, y el derecho
                                            de la
                                            mujer a que se respeten y protejan sus humanos;
                                            b. modificar los patrones socioculturales de conducta de
                                            hombres y mujeres, ..., para contrarrestar prejuicios y
                                            costumbres y todo otro tipo de prácticas que se basen en
                                            la
                                            premisa de la inferioridad o superioridad de cualquiera
                                            de
                                            los géneros o en los papeles estereotipados para el
                                            hombre
                                            y la mujer que legitimizan o exacerban la violencia
                                            contra
                                            la mujer;
                                            c. fomentar la educación y capacitación del personal en
                                            la
                                            administración de justicia, policial y demás
                                            funcionarios
                                            encargados de la aplicación de la ley, así como del
                                            personal a cuyo cargo esté la aplicación de las
                                            políticas de
                                            prevención, sanción y eliminación de la violencia contra
                                            la
                                            mujer"</i><a href="">Haga clic para
                                            conocer la convención..</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="conferenciaPoblacion" style="margin-top:10px;">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNueve" aria-expanded="false" aria-controls="collapseOne">
                                        Conferencia Internacional sobre la Población y el
                                        Desarrollo (CIPD) El Cairo
                                    </button>
                                </h2>
                                <div id="collapseNueve" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#conferenciaPoblacion">
                                    <div class="accordion-body">
                                        Los delegados de la CIPD llegaron al consenso de que la
                                        igualdad y el empoderamiento de la mujer es una
                                        prioridad mundial. La capacidad de la mujer para
                                        acceder a la salud y los derechos reproductivos es una
                                        piedra angular de su empoderamiento. También es
                                        fundamental para el desarrollo sostenible. En 2010, en
                                        una resolución de la Asamblea General de las Naciones
                                        Unidas, se solicitó prorrogar de forma inde"nida el
                                        Programa de Acción y un examen de los progresos
                                        realizados en la Asamblea General en 2014. A pesar de
                                        los progresos realizados en los últimos 20 años,
                                        millones de personas, especialmente mujeres y
                                        adolescentes que viven en la pobreza, no pueden
                                        ejercer plenamente su salud ni sus derechos sexuales y
                                        reproductivos.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            1995
                        </div>
                        <div class="accordion" id="cuartaConferencia">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseDiez" aria-expanded="false" aria-controls="collapseOne">
                                        Cuarta conferencia Mundial sobre la Mujer,
                                        Plataforma de acción de Beijing
                                    </button>
                                </h2>
                                <div id="collapseDiez" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#cuartaConferencia">
                                    <div class="accordion-body">
                                        Constituye una agenda en favor de los derechos de
                                        las
                                        mujeres y establece objetivos estratégicos y
                                        especí"cos
                                        para el logro de la igualdad de género en diferentes
                                        áreas para las mujeres como impacto en la pobreza,
                                        salud de las mujeres desde una mirada integral,
                                        violencias, ejercicio de poder entre otras.<a href="">Haga clic para
                                            conocer la conferencia.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            2000
                        </div>
                        <div class="accordion" id="declaracionObjetivos">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOnce" aria-expanded="false" aria-controls="collapseOne">
                                        Declaración de los Objetivos del Milenio ODM3
                                    </button>
                                </h2>
                                <div id="collapseOnce" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#declaracionObjetivos">
                                    <div class="accordion-body">
                                        Promover la igualdad entre los sexos y el
                                        empoderamiento de la mujer. En 2005 se incluye
                                        en el
                                        ODM 5 una nueva sub-meta: “lograr el acceso
                                        universal
                                        a la salud reproductiva para 2015”. Destacan
                                        como
                                        de"ciencias de los ODM desde el punto de vista
                                        de
                                        género: falta de visibilización de la
                                        feminización de la
                                        pobreza, no incorporación de la lucha contra la
                                        violencia de género, abordaje de la salud
                                        materna sin
                                        incluir la salud sexual y reproductiva de las
                                        mujeres
                                        desde un enfoque de derechos y débil visión
                                        integral y
                                        transformadora de la igualdad de género en todos
                                        los
                                        ámbitos de actuación de los ODM sin abordar las
                                        causas
                                        estructurales de la desigualdad.<a href="">Haga
                                            clic para
                                            ampliar información.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="examenBeijing" style="margin-top:10px;">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseDoce" aria-expanded="false" aria-controls="collapseOne">
                                        Examen y evaluación Beijing+5
                                    </button>
                                </h2>
                                <div id="collapseDoce" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#examenBeijing">
                                    <div class="accordion-body">
                                        Promovió la adopción de nuevas medidas
                                        destinadas a
                                        superar los obstáculos y a lograr la
                                        aplicación plena y
                                        acelerada de la Plataforma de Acción de
                                        Beijing que
                                        continúen y profundicen el enfoque de
                                        incorporación
                                        de la perspectiva de género en los planes y
                                        programas
                                        gubernamentales.<a href="">Haga clic para
                                            ampliar información.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            2006
                        </div>
                        <div class="accordion" id="convencionDerechos">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTrece" aria-expanded="false" aria-controls="collapseOne">
                                        Convención sobre los Derechos de las
                                        Personas
                                        con Discapacidad. Ratificada por 174
                                        partes
                                    </button>
                                </h2>
                                <div id="collapseTrece" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#convencionDerechos">
                                    <div class="accordion-body">
                                        La Convención sobre los Derechos de las
                                        Personas con
                                        Discapacidad (CRPD) consta de 33
                                        artículos básicos que
                                        abarcan todos los ámbitos de la vida,
                                        desde la dignidad
                                        inherente de todas las personas con
                                        discapacidad hasta
                                        su derecho a la inclusión en todos los
                                        aspectos de la vida
                                        social, política y económica.
                                        En el Preámbulo y en los artículos 3, 6,
                                        8, 16 y 25 se
                                        adopta expresamente una perspectiva de
                                        género. En el
                                        artículo 16 se reconocen los aspectos de
                                        género de la
                                        violencia y el abuso, y se exige a los
                                        Estados Partes que
                                        aseguren <i>«todas las medidas de
                                            carácter legislativo,
                                            administrativo, social, educativo y
                                            de otra índole que sean
                                            pertinentes para proteger a las
                                            personas con discapacidad,
                                            tanto en el seno del hogar como
                                            fuera de él, contra todas
                                            las formas de explotación, violencia
                                            y abuso, incluidos los
                                            aspectos relacionados con el
                                            género»</i><a href="">Haga clic para
                                            conocer la convención.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            2013
                        </div>
                        <div class="accordion" id="conferenciaMujer">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseCatorce" aria-expanded="false" aria-controls="collapseOne">
                                        XII Conferencia regional de la mujer
                                        de América
                                        Latina y el Caribe. Consenso de
                                        Santo Domingo
                                    </button>
                                </h2>
                                <div id="collapseCatorce" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#conferenciaMujer">
                                    <div class="accordion-body">
                                        Evalúa el estado de ejecución de las
                                        agendas
                                        internacionales y los logros
                                        alcanzados con respecto al
                                        objetivo de la igualdad de género
                                        real y efectivo como
                                        eje central y transversal de toda la
                                        acción del Estado, así
                                        como la autonomía de las mujeres en
                                        la región con
                                        mirada interseccional.<a href="">Haga clic para
                                            conocer la conferencia.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numero">
                            2015
                        </div>
                        <div class="accordion" id="agenda2030">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseQuince" aria-expanded="false" aria-controls="collapseOne">
                                        Agenda 2030 para el desarrollo
                                        sostenible,
                                        Objetivo 5: Igualdad de género y
                                        empoderamiento
                                        de la mujer.
                                    </button>
                                </h2>
                                <div id="collapseQuince" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#agenda2030">
                                    <div class="accordion-body">
                                        Reflejan las principales
                                        limitaciones estructurales para
                                        lograr la igualdad de género,
                                        como la discriminación, la
                                        violencia contra las mujeres y
                                        las niñas, las prácticas
                                        nocivas, los trabajos no
                                        remunerados relacionados con
                                        los cuidados, la participación
                                        en la adopción de
                                        decisiones y la salud y los
                                        derechos sexuales y reproductivos. <i>“Asegurar el
                                            acceso universal a la salud
                                            sexual y reproductiva y los
                                            derechos reproductivos según
                                            lo
                                            acordado de conformidad con
                                            el Programa de Acción de la
                                            Conferencia Internacional
                                            sobre la Población y el
                                            Desarrollo, la Plataforma de
                                            Acción de Beijing y los
                                            documentos finales de sus
                                            conferencias de
                                            examen”</i><a href="">Haga
                                            clic aquí para conocerla
                                            agenda 2030.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img class="foto2"
                    src="../../assets/imagenes/RECURSOS MOBILE/PNG INTRODUCCIÓN/Marco Normativo/006.Foto 2 marco normativo.png"
                    alt="foto2 marco normativo">
                </main>
            </div>
           `
        });
=======
        Modal.desplegarMarcoNormativo();
    });
}

let abrirRecomendaciones = () => {
    document.getElementById("btnRecomendaciones").addEventListener('click', () => {
        Modal.desplegarRecomendaciones();
>>>>>>> 61d1a8ad506e2b8496b64c34989a890917e610f0
    });
}
