
import {iCarta} from '../Interfaces/iCarta'

export class Carta implements iCarta{
    icon: string;
    status: boolean;
    constructor(){
        this.icon = "";
        this.status = false;

    }
    setIcon(icon:string){
        this.icon = icon;
    }
    mostrar(){
        this.status = true;
    }
    
}