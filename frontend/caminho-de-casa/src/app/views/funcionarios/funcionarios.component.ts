import { FuncionarioService } from './../../services/funcionario.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { PreviewDeImagemComponent } from 'src/app/shared/preview-de-imagem/preview-de-imagem.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {


  displayedColumns: string[] = ['nome', 'idade', 'cargo', 'naturalidade', 'anoAdmissao', 'hobbie', 'acao' ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private previewDeImagem: MatDialog,
      private funcionarioService: FuncionarioService){


    }


  ngOnInit(): void {
    this.listarTodosOsFuncionarios();
  }



  openDialog() {
    this.dialog.open(DialogComponent, {
          width: '40%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.listarTodosOsFuncionarios();
      }

      })
  }

  openDialogImage(row: any){
    this.previewDeImagem.open(PreviewDeImagemComponent,{

      data:row
      }).afterClosed().subscribe(val=>{
      if(val==='visualize'){
      this.listarTodosOsFuncionarios();
  }

  })

  }


  listarTodosOsFuncionarios(){
    this.funcionarioService.getFuncionario()
      .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Sem funcionários cadastrados")
      }
    })

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  editarFuncionario(row: any) {
    this.dialog.open(DialogComponent,{
          width: '40%',
          data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.listarTodosOsFuncionarios();
      }

      })
  }


  excluirFuncionario(row: any){
    this.funcionarioService.deleteFuncionario(row._id)
    .subscribe({
      next:(res)=>{
        alert("Funcionário excluido com sucesso")
        this.listarTodosOsFuncionarios();
      },
      error:()=>{
        alert("Erro ao excluir funcionário")

      }
    })
  }




}






