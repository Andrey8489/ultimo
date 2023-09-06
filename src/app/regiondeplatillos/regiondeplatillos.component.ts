import { Component, OnInit } from '@angular/core';
import { platos } from '../platos';
import { PLATILLOS } from '../mock-platillos';
import { Input } from '@angular/core';
import { ServicioPlatillosService } from '../servicio-platillos.service';

@Component({
  selector: 'app-regiondeplatillos',
  templateUrl: './regiondeplatillos.component.html',
  styleUrls: ['./regiondeplatillos.component.css']
})
export class RegiondeplatillosComponent {

  platos = PLATILLOS;
  paiselecionado?: platos;

  constructor (private ServicioPlatillosService: ServicioPlatillosService)
  {}


  ngOninit(): void 
  { this.getPlatillos();}

  getPlatillos(): void {
    this.ServicioPlatillosService.getPlatillos()
      .subscribe(platos => this.platos = platos.slice(1, 5));
  }

}
