import { Component, ViewChild, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PreviewDeImagemComponent } from 'src/app/shared/preview-de-imagem/preview-de-imagem.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { DialogFornecedorComponent } from 'src/app/shared/dialog-fornecedor/dialog-fornecedor.component';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'descricao', 'acao' ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private previewDeImagem: MatDialog,
      private fornecedorService: FornecedoresService){


    }

  ngOnInit(): void {
    this.listarTodosOsFornecedores();
  }

  openDialog() {
    this.dialog.open(DialogFornecedorComponent, {
          width: '40%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.listarTodosOsFornecedores();
      }

      })
  }

  openDialogImage(row: any){
    this.previewDeImagem.open(PreviewDeImagemComponent,{

      data:row
      }).afterClosed().subscribe(val=>{
      if(val==='visualize'){
      this.listarTodosOsFornecedores();
  }

  })
  }

  listarTodosOsFornecedores(){
    this.fornecedorService.getFornecedor()
      .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Sem fornecedores cadastrados")
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

  editarFornecedor(row: any) {
    this.dialog.open(DialogFornecedorComponent,{
          width: '40%',
          data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.listarTodosOsFornecedores();
      }

      })
  }

  excluirFornecedor(row: any){
    this.fornecedorService.deleteFornecedor(row._id)
    .subscribe({
      next:(res)=>{
        alert("Forncedor excluído com sucesso")
        this.listarTodosOsFornecedores();
      },
      error:()=>{
        alert("Erro ao excluir fornecedor")

      }
    })
  }
























}
