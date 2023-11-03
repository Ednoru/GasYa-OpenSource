import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { InicioSesionComponent } from "./components/inicio-sesion/inicio-sesion.component";
import { RegistroComponent } from "./components/registro/registro.component";
import {BuscarGrifoComponent} from "./components/buscar-grifo/buscar-grifo.component";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {GrifosComponent} from "./components/grifos/grifos.component";
import {FaqComponent} from "./components/faq/faq.component";
import {ReportarProblemaComponent} from "./components/reportar-problema/reportar-problema.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";



const routes: Routes = [
  { path: 'iniciosesion',component:InicioSesionComponent},
  { path: 'registro',component:RegistroComponent},
  { path: 'buscarGrifo', component: BuscarGrifoComponent },
  { path: '', redirectTo: 'iniciosesion', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  { path: 'grifos', component: GrifosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'reportarProblema', component: ReportarProblemaComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
