/**
 * Clase que contiene los metodos de soporte para los metodos internos
 * cada clase o index
 */
export default class Ayudas {
    /**
     * Metodo que sirve para cargar e incrustar las paginas html
     * en la pagina index 
     * @param {*} elemento id donde se incrusta el codigo 
     * @param {*} url ruta de la pagina 
     * @returns el tag donde se incrusta el codigo
     */
    static async cargarPagina(elemento, url) {
        let respuesta = await fetch(url);
    
        if (respuesta.ok) {
            //console.log('->>', ${elemento}  );
            const contenedor = document.getElementById(`${elemento}`);
            contenedor.innerHTML = await respuesta.text();
            return contenedor;
        }

        throw `error ${respuesta.status} - ${respuesta.statusText}`;
    }

    /**
     * Metodo para generar un alerta en caso de no enocntrar la pagina
     * que se quiere incrustar en el index
     * @param {*} elemento id donde se añade el codigo
     * @param {*} mensaje  mensaje que se muestra al usuario
     * @param {*} error error que se muestra en consola
     */
    static alerta(elemento, mensaje, error = 'Problemas al cargar la pagina') {
        document.getElementById(`${elemento}`).insertAdjacentHTML('afterbegin', `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
        </svg>
        <div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                ${mensaje}
            </div>
        </div>
        `);
        if (error) {
            console.error(`Excepción interna: ${error}`);
        }
    }
}