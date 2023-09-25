import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BuscarGrifoComponent} from "./components/buscar-grifo/buscar-grifo.component";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {GrifosComponent} from "./components/grifos/grifos.component";
import {FAQComponent} from "./components/faq/faq.component";
import {ReportarProblemaComponent} from "./components/reportar-problema/reportar-problema.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
  { path: 'buscarGrifo', component: BuscarGrifoComponent },
  { path: '', redirectTo: 'buscarGrifo', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  { path: 'grifos', component: GrifosComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'reportarProblema', component: ReportarProblemaComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
