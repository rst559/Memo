import { Component, Input, OnInit } from '@angular/core';

import { Carta } from '../../Models/Implementations/Carta';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() icon!: string;
  carta!: Carta;
  constructor() {
  }

  ngOnInit(): void {
    this.carta = new Carta()
    this.carta.setIcon(this.icon)
    console.log(this.carta.status)
  }

}
