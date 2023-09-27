import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BuscarGrifoComponent } from './components/buscar-grifo/buscar-grifo.component';
import { ReportarProblemaComponent } from './components/reportar-problema/reportar-problema.component';
import { GrifosComponent } from './components/grifos/grifos.component';
import { FAQComponent } from './components/faq/faq.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    BuscarGrifoComponent,
    ReportarProblemaComponent,
    GrifosComponent,
    FAQComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
