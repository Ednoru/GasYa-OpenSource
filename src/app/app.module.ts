import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BuscarGrifoComponent } from './components/buscar-grifo/buscar-grifo.component';
import { ReportarProblemaComponent } from './components/reportar-problema/reportar-problema.component';
import { GrifosComponent } from './components/grifos/grifos.component';
import { FaqComponent } from './components/faq/faq.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FooterComponent } from './public/footer/footer.component';
import { UserService } from './services/userService/user.service';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    BuscarGrifoComponent,
    ReportarProblemaComponent,
    GrifosComponent,
    FaqComponent,
    PageNotFoundComponent,
    FooterComponent,
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
