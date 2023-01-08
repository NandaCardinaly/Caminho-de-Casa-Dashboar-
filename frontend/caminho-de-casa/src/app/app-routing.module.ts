import { EventosComponent } from './views/eventos/eventos.component';
import { DialogAgendamentosComponent } from './shared/dialog-agendamentos/dialog-agendamentos.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import { FornecedoresComponent } from './views/fornecedores/fornecedores.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'funcionarios', component: FuncionariosComponent},
  {path: 'fornecedores', component: FornecedoresComponent},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'eventos', component: EventosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
