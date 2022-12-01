import { iTauler } from "../Interfaces/iTauler";
import { Baralla } from "./Baralla";
import { Carta } from "./Carta";

export class Tauler implements iTauler {
    baralles: Baralla[];
    seleccionat!: null | Carta;
    constructor() {
        this.baralles = new Array<Baralla>();
        for (let i = 0; i < 4; i++) {
            this.baralles.push(new Baralla())
        }
    }
}