import { HomeComponent } from './../../views/home/home.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css'],
})
export class MenuprincipalComponent {

  @Input() menuStatus: boolean = false;


  lista= [
    {
      number: '1',
      name: 'ﾠﾠHome',
      icon: 'fa-solid fa-house',
      routerLink: '/'
    },

    {
      number: '2',
      name: 'ﾠﾠFuncionários',
      icon: 'fa-solid fa-users',
      routerLink: '/funcionarios'
    },

    {
      number: '3',
      name: 'ﾠﾠFornecedores',
      icon: 'fa-solid fa-truck-arrow-right',
      routerLink: '/fornecedores'
    },

    {
      number: '4',
      name: 'ﾠﾠCardápio',
      icon: 'fa-solid fa-champagne-glasses',
      routerLink: '/cardapio'
    },

    {
      number: '5',
      name: 'ﾠﾠ Eventos',
      icon: 'fa-solid fa-calendar-minus',
      routerLink: '/eventos'
    },

    {
      number: '6',
      name: 'ﾠﾠUsuário',
      icon: 'fa-solid fa-user-plus',
      routerLink: '/usuarios'
    }

  ];
}
