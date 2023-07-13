import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { saludo } from './components/saludo.component';
import { DespedidaComponent } from './components/despedida/despedida.component';

@NgModule({
  declarations: [
    AppComponent,
    saludo,
    DespedidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
