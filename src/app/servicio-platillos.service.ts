import { Injectable } from '@angular/core';

import { platos } from './platos';
import { PLATILLOS  } from './mock-platillos';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioPlatillosService {

  constructor() { }

  getPlatillos(): Observable <platos[]>
  {return of(PLATILLOS);}
  
}