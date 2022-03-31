'use strict';

import Ayudas from "./ayudas.js";

export default class CajaHerramienta {
    
    static async crearCaja(elemento){

        await Ayudas.cargarPagina(
            `${elemento}`,
            "./paginas/cajaHerramienta.html"
        ).catch(error =>{
            Ayudas.alerta("contentPaginaInicio",
                "No se encuentra la página de la caja de herramientas", error);
        });

    }
}