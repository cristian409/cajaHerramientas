'use strict';

import Ayudas from "./ayudas.js";

export default class CajaHerramienta {

    static async crearCaja(elemento) {

        await Ayudas.cargarPagina(
            `${elemento}`,
            "./paginas/cajaHerramienta.html"
        ).then(
            CajaHerramienta.cargarMenu()
        ).catch(error => {
            Ayudas.alerta("contentPaginaInicio",
                "No se encuentra la página de la caja de herramientas", error);
        });

    }

    static async cargarMenu() {
        await Ayudas.cargarPagina(
            `menuMobile`,
            "./paginas/menuMobile.html"
        ).catch(error => {
            Ayudas.alerta("contentPaginaInicio",
                "Imposible acceder al menu", error);
        });
    }
}