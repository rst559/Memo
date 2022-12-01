import { Injectable } from '@angular/core';

import { Baralla } from '../Models/Implementations/Baralla';
import { iTauler } from '../Models/Interfaces/iTauler';
import { Tauler } from '../Models/Implementations/Tauler';

@Injectable({
  providedIn: 'root'
})
export class TaulerService {

  tauler: Tauler;

  constructor() {
    this.tauler = new Tauler();
  }

}
