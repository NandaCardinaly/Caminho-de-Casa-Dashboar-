import { DialogEventosComponent } from './../../shared/dialog-eventos/dialog-eventos.component';
import { EventosService } from 'src/app/services/eventos.service';
import { AgendamentosService } from 'src/app/services/agendamentos.service';
import { CommonModule } from '@angular/common'; //coloquei para a data
import { Component, ViewChild, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PreviewDeImagemComponent } from 'src/app/shared/preview-de-imagem/preview-de-imagem.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'descricao', 'dataInicio', 'dataFim', 'horaInicio', 'horaFim', 'acao' ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private previewDeImagem: MatDialog,
    private eventoService: EventosService,
    private agendamentoService: AgendamentosService
  ){}

  ngOnInit(): void {
    this.listarTodosOsEventos();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
  }
  }

  openDialog(){
    this.dialog.open(DialogEventosComponent, {
      width: '40%'
}).afterClosed().subscribe(val=>{
  if(val==='save'){
    this.listarTodosOsEventos();
  }

  })
  }

  openDialogImage(row: any){
    this.previewDeImagem.open(PreviewDeImagemComponent,{
      data:row
      }).afterClosed().subscribe(val=>{
      if(val==='visualize'){
      this.listarTodosOsEventos();
  }

  })
  }

  listarTodosOsEventos(){
    this.eventoService.getEvento()
      .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Sem eventos cadastrados")
      }
    })
  }

  editarEvento(row: any){
    this.dialog.open(DialogEventosComponent,{
      width: '40%',
      data:row
    }).afterClosed().subscribe(val=>{
    if(val==='update'){
    this.listarTodosOsEventos();
    }

  })
}

excluirEvento(row: any){

    this.eventoService.deleteEvento(row._id)
    .subscribe({
      next:(res)=>{
        alert("Evento excluído com sucesso")
        this.listarTodosOsEventos();
      },
      error:()=>{
        alert("Erro ao excluir evento")

      }
    })


}






}
