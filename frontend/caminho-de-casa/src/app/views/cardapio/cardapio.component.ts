import { DialogCardapioComponent } from './../../shared/dialog-cardapio/dialog-cardapio.component';
import { BebidasService } from './../../services/bebidas.service';
import { Component, OnInit } from '@angular/core';
import { ComidasService } from 'src/app/services/comidas.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  dataSource: any;
  dataSourceB: any;

  constructor(private comidasService: ComidasService, private bebidasService: BebidasService,
    private dialog: MatDialog){


  }

  ngOnInit(): void {
    this.listarTodasAsComidas();
    this.listarTodasAsBebidas();
    }


  openDialog() {
    this.dialog.open(DialogCardapioComponent, {
          width: '40%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.listarTodasAsComidas();
        this.listarTodasAsBebidas();
      }

      })
  }


  listarTodasAsComidas(){
    this.comidasService.getComida()
      .subscribe({
           next:(res)=>{
            this.dataSource = res;
           console.log(this.dataSource);
       },
      error:(err)=>{
        alert("Sem comidas cadastradas")
      }
    })

  }

  listarTodasAsBebidas(){
    this.bebidasService.getBebida().
      subscribe({
           next:(res)=>{
            this.dataSourceB = res;
          },
      error:(err)=>{
       console.log("Sem bebidas cadastradas")
      }
    })

  }

  editarComida(row: any){
    this.dialog.open(DialogCardapioComponent,{
      width: '40%',
      data:row
    }).afterClosed().subscribe(val=>{
    if(val==='update'){
    this.listarTodasAsComidas();
    this.listarTodasAsBebidas();
    }

    })
  }

  editarBebida(row: any){
    this.dialog.open(DialogCardapioComponent,{
      width: '40%',
      data:row
    }).afterClosed().subscribe(val=>{
    if(val==='update'){
    this.listarTodasAsComidas();
    this.listarTodasAsBebidas();
    }

    })

  }

  excluirComida(row: any){

    this.comidasService.deleteComida(row._id)
    .subscribe({
      next:(res)=>{
        alert("Comida excluída com sucesso")
        this.listarTodasAsComidas();
        this.listarTodasAsBebidas();
      },
      error:()=>{
        alert("Erro ao excluir comida")

      }
    })
  }



  excluirBebida(row: any){

    this.bebidasService.deleteBebida(row._id)
    .subscribe({
      next:(res)=>{
        alert("Bebida excluída com sucesso")
        this.listarTodasAsComidas();
        this.listarTodasAsBebidas();
      },
      error:()=>{
        alert("Erro ao excluir bebida")

      }
    })
  }


}
