import { Component,  } from '@angular/core';
import { platos } from '../platos';
import { PLATILLOS } from '../mock-platillos';
import { ServicioPlatillosService } from '../servicio-platillos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent {

  platos = PLATILLOS;
  platilloselecionado?: platos;
  /*paiselecionado?: platos;*/


  constructor(private ServicioPlatillosService: ServicioPlatillosService, private location: Location) 
  {console.log(this.location);}

  ngOninit(): void 
  { this.getPlatillos();}
  
  private getPlatillos() 
  { const ObservableDePLatilos = this.ServicioPlatillosService.getPlatillos();
    ObservableDePLatilos.subscribe((PLATILLOS: platos[]) => {this.platos = PLATILLOS});}


  onSelect(platos: platos): void {
    if (this.platilloselecionado === platos) 
    {this.platilloselecionado = undefined;}
    else {this.platilloselecionado = platos}};

}
