import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //coloquei para a data
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogUsuariosComponent } from 'src/app/shared/dialog-usuarios/dialog-usuarios.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'telefone','email', 'acao' ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


constructor(private dialog: MatDialog, private usuarioService: UsuariosService){}

ngOnInit(): void {
    this.listarTodosOsUsuarios();
  }


  openDialog() {
    this.dialog.open(DialogUsuariosComponent, {
          width: '60%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.listarTodosOsUsuarios();
      }

      })
  }


  listarTodosOsUsuarios(){
    this.usuarioService.getUsuario()
      .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Sem usuários cadastrados")
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

  editarUsuario(row: any) {
    this.dialog.open(DialogUsuariosComponent,{
          width: '40%',
          data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.listarTodosOsUsuarios;
      }

      })
  }

  excluirUsuario(row: any){
    this.usuarioService.deleteUsuario(row._id)
    .subscribe({
      next:(res)=>{
        alert(" Usuário excluído com sucesso")
        this.listarTodosOsUsuarios();
      },
      error:()=>{
        alert("Erro ao excluir usuário")

      }
    })
  }












}
