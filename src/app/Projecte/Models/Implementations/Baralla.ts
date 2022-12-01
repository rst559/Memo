
import { iBaralla } from "../Interfaces/iBarralla";

import { Carta } from "./Carta"


export class Baralla implements iBaralla {
    cartes: Array<Carta>;
    seleccionat: null | Carta;
    constructor() {
        this.cartes = new Array<Carta>();
        this.seleccionat = null;
        this.generarCartes();
        this.barrejarCartes();
    }
    private generarCartes(): void {
        let icones = ['🌪️', '🐰', '🍗', '🐁']
        for (let i = 0; i < icones.length; i++) {
            let carta = new Carta();
            carta.setIcon(icones[i])
            this.cartes.push(carta)
        }
    }
    private barrejarCartes(): void {
        this.cartes = this.cartes.sort((a, b) => 0.5 - Math.random());
    }
    public seleccionar(carta: Carta): void {
        this.seleccionat = carta
    }

}