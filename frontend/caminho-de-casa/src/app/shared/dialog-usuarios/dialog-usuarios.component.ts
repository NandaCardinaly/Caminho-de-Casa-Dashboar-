import { UsuariosService } from './../../services/usuarios.service';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-usuarios',
  templateUrl: './dialog-usuarios.component.html',
  styleUrls: ['./dialog-usuarios.component.css']
})
export class DialogUsuariosComponent {

  usuarioForm!: FormGroup;
  qualOper: string = "Salvar";
  url = " ";

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    @Inject((MAT_DIALOG_DATA)) public editarDadosUsu: any,
    private dialogRef: MatDialogRef<DialogUsuariosComponent>){
    this.gerarForm();
  }

  gerarForm(): void{
    this.usuarioForm = this.formBuilder.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', Validators.required],
    senha: ['', Validators.required]
  })
  if(this.editarDadosUsu){
    this.usuarioForm.patchValue(this.editarDadosUsu);
    this.qualOper ="Salvar alterações";
  }
  }

  cadastrarUsuario(){
    if(!this.editarDadosUsu){
      if(this.usuarioForm.valid){
        this.usuarioService.postUsuario(this.usuarioForm.value)
        .subscribe({
          next:(res)=>{
            alert("Usuário cadastrado com sucesso")
            this.usuarioForm.reset();
            this.dialogRef.close('save');
          },
          error:(err)=>{
            alert("Erro ao cadastrar usuário")
          }
        })
       }
    }else{
      this.atualizarUsuario();
    }

  }

  atualizarUsuario(){

    this.usuarioService.putUsuario(this.usuarioForm.value, this.editarDadosUsu._id)
    .subscribe({
      next:(res)=>{
        alert("Usuário atualizado com sucesso")
        this.usuarioForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        alert("Erro ao atualizar usuário")
      }
    })
  }





  }
























