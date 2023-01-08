import { FuncionarioService } from './../../services/funcionario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

//DIALOG DE FUNCIONÁRIOS
export class DialogComponent {

  funcionarioForm!: FormGroup;
  qualOper: string = "Salvar";
  url = " ";


  constructor(private formBuilder: FormBuilder,
    private funcionarioService : FuncionarioService,
    @Inject(MAT_DIALOG_DATA) public editarDadosFunc : any,
    private dialogRef: MatDialogRef<DialogComponent>){
      this.gerarForm();
    }


  gerarForm(): void {
    this.funcionarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      foto: [''],
      idade: ['', Validators.required],
      cargo: ['', Validators.required],
      naturalidade: ['', Validators.required],
      anoAdmissao: ['', Validators.required],
      hobbie: [''],

    })
    if(this.editarDadosFunc){
      this.funcionarioForm.patchValue(this.editarDadosFunc);
      // this.funcionarioForm.controls['nome'].setValue(this.editarDadosFunc.nome);
      // this.funcionarioForm.controls['idade'].setValue(this.editarDadosFunc.idade);
      // this.funcionarioForm.controls['cargo'].setValue(this.editarDadosFunc.cargo);
      // this.funcionarioForm.controls['anoAdmissao'].setValue(this.editarDadosFunc.anoAdmissao);
      // this.funcionarioForm.controls['naturalidade'].setValue(this.editarDadosFunc.naturalidade);
      // this.funcionarioForm.controls['hobbie'].setValue(this.editarDadosFunc.hobbie);
      this.qualOper ="Salvar alterações";
    }
  }



  cadastrarFuncionario(){
    if(!this.editarDadosFunc){
      if(this.funcionarioForm.valid){
        this.funcionarioService.postFuncionario(this.funcionarioForm.value)
        .subscribe({
          next:(res)=>{
            alert("Funcionário cadastrado com sucesso")
            this.funcionarioForm.reset();
            this.dialogRef.close('save');
          },
          error:(err)=>{
            alert("Erro ao cadastrar funcionário")
          }
        })
       }
    }else{
      this.atualizarFuncionario();
    }

  }

  atualizarFuncionario(){

    this.funcionarioService.putFuncionario(this.funcionarioForm.value, this.editarDadosFunc._id)
    .subscribe({
      next:(res)=>{
        alert("Funcionário atualizado com sucesso")
        this.funcionarioForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        alert("Erro ao atualizar funcionário")
      }
    })
  }


  }













