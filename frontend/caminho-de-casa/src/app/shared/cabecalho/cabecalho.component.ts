import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  @Output() menuDeslizar = new EventEmitter<boolean>();
  menuStatus: boolean = false;


  MenuDeslizar(){
    this.menuStatus = !this.menuStatus;
    this.menuDeslizar.emit(this.menuStatus);
  }

}
