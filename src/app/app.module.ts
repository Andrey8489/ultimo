import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { DetalleplatillosComponent } from './detalleplatillos/detalleplatillos.component';
import { RegiondeplatillosComponent } from './regiondeplatillos/regiondeplatillos.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatillosComponent,
    DetalleplatillosComponent,
    RegiondeplatillosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
