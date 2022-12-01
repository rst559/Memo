import { Component, OnInit } from '@angular/core';
import { Baralla } from '../../Models/Implementations/Baralla'

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  baralla!: Baralla;
  constructor() {
  }

  ngOnInit(): void {
    this.baralla = new Baralla()
  }

}
