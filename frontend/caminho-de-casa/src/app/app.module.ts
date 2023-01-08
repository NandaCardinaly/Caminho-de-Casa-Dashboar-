import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuprincipalComponent } from './shared/menuprincipal/menuprincipal.component';
import { HomeComponent } from './views/home/home.component';
import { CabecalhoComponent } from './shared/cabecalho/cabecalho.component';
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './shared/dialog/dialog.component';
import { PreviewDeImagemComponent } from './shared/preview-de-imagem/preview-de-imagem.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'; //esse import é ext do date
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator'; //esse import é ext da table que precisou
import {MatSortModule} from '@angular/material/sort'; //esse import é para ordenacao da table
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';


import { FornecedoresComponent } from './views/fornecedores/fornecedores.component';
import { DialogFornecedorComponent } from './shared/dialog-fornecedor/dialog-fornecedor.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { DialogCardapioComponent } from './shared/dialog-cardapio/dialog-cardapio.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { DialogUsuariosComponent } from './shared/dialog-usuarios/dialog-usuarios.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { DialogEventosComponent } from './shared/dialog-eventos/dialog-eventos.component';







@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    HomeComponent,
    CabecalhoComponent,
    FuncionariosComponent,
    DialogComponent,
    PreviewDeImagemComponent,
    FornecedoresComponent,
    DialogFornecedorComponent,
    CardapioComponent,
    DialogCardapioComponent,
    UsuariosComponent,
    DialogUsuariosComponent,
    EventosComponent,
    DialogEventosComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
