import Ayudas from "../../assets/js/ayudas.js";


export default class Modal {

    /**
     * Metodo que carga el html donde se encuentra el modal
     */
    static async crear() {
        await Ayudas.cargarPagina(
            'cajaHerramientaModal',
            '../modal/modal.html'
        ).catch(error => {
            Ayudas.alerta("cajaPrincipal",
                "Imposible acceder al modal", error);
        });
    }

    static desplegar({contenido}) {
        document.querySelector('.modal-dialog').innerHTML = contenido;
        Modal.asignarEventos();
        Modal.toogle();
    }

    static asignarEventos() {
        let closeModal = document.querySelector('.btnClose');
        closeModal.addEventListener('click', Modal.toogle);
        if (document.body.classList.contains('modal-open')) {
            Modal.toogle();
        }
    }

    static toogle() {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        modal.classList.toggle("show");
        modal.classList.toggle("d-block");
        body.classList.toggle("modal-open");        
    }
}