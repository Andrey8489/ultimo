import { Component, Input, OnInit } from '@angular/core';
import { platos } from '../platos';
import { PLATILLOS } from '../mock-platillos';


@Component({
  selector: 'app-detalleplatillos',
  templateUrl: './detalleplatillos.component.html',
  styleUrls: ['./detalleplatillos.component.css']
})
export class DetalleplatillosComponent implements OnInit {

  @Input() platos?: platos;

  constructor()
  {console.log("platos: " + JSON.stringify(this.platos))};

  ngOnInit(): void 
  {console.log("platos: " + JSON.stringify(this.platos))};

}
