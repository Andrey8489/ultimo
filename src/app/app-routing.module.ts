import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatillosComponent } from './platillos/platillos.component';
import { DetalleplatillosComponent } from './detalleplatillos/detalleplatillos.component';
import { NgModel } from '@angular/forms';
import { RegiondeplatillosComponent } from './regiondeplatillos/regiondeplatillos.component';


/*primero deveria ir enrutado con la region*/
const routes: Routes = [ 
{ path: 'princial', component: PlatillosComponent},
{ path: 'paises', component: RegiondeplatillosComponent},
{ path: 'platillos', component: DetalleplatillosComponent},
{ path: '', redirectTo: '/paises', pathMatch: 'full'  },
{},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


