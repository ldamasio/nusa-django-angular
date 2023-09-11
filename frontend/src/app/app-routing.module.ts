import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
