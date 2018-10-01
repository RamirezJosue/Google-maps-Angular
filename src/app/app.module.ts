import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapasComponent } from './components/mapas/mapas.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapasComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
