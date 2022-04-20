import Ayudas from "../../assets/js/ayudas.js";


export default class Modal {

    /**
     * Metodo que carga el html donde se encuentra el modal principal
     */
    static async crear() {
        await Ayudas.cargarPagina(
            'cajaHerramientaModal',
            '../modales/modalPrincipal.html'
        ).catch(error => {
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
    }
    
    /**
     * Metodo para desplegar el modal del Marco normativo
     */
    static async desplegarMarcoNormativo() {
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalMarco.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal Marco normativo", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarRecomendaciones(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalRecomendacionesMarco.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal Recomendaciones", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarLenguajeUno(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalLenguajeUno.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarLenguajeDos(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalLenguajeDos.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarAccesoTexto(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalAccesibilidadTxt.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarAccesoImg(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalAccesibilidadImg.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarElaborarVideos(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalElaboVideos.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarUsoImagenes(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalUsoImg.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarEvaluacionMaterial(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalEvalucionMaterial.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarRecomendacionAtencionUno(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalRecomendacionAUno.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarRecomendacionAtencionDos(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalRecomendacionesADos.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarRecomendacionAtencionTres(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalRecomendacionesATres.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    static async desplegarGlosario(){
        await Ayudas.cargarPagina(
            `modalDialog`,
            `../modales/modalGlosario.html`
        ).catch(error =>{
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
        Modal.asignarEventos();
        Modal.toogle();
    }

    /**
     * Metodo para asignar el evento de cerrar del boton del modal
     */
    static asignarEventos() {
        let closeModal = document.querySelector('.btnClose');
        closeModal.addEventListener('click', Modal.toogle);
        if (document.body.classList.contains('modal-open')) {
            Modal.toogle();
        }
    }

    /**
     * Metodo que coloca o quita clases de estilos para desplegar o ocultar el modal
     */
    static toogle() {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        modal.classList.toggle("show");
        modal.classList.toggle("d-block");
        body.classList.toggle("modal-open");        
    }
}