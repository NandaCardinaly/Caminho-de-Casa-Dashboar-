import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-fornecedor',
  templateUrl: './dialog-fornecedor.component.html',
  styleUrls: ['./dialog-fornecedor.component.css']
})
export class DialogFornecedorComponent {

  fornecedorForm!: FormGroup;
  qualOper: string = "Salvar";
  url = " ";



  constructor(private formBuilder: FormBuilder,
    private fornecedorService : FornecedoresService,
    @Inject(MAT_DIALOG_DATA) public editarDadosForne: any,
    private dialogRef: MatDialogRef<DialogFornecedorComponent>){
      this.gerarForm();
    }


    gerarForm(): void {
      this.fornecedorForm = this.formBuilder.group({
        nome: ['', Validators.required],
        descricao: ['', Validators.required],

      })
      if(this.editarDadosForne){
      this.fornecedorForm.patchValue(this.editarDadosForne);
      this.qualOper ="Salvar alterações";
    }

  }

    cadastrarFornecedor(){
      if(!this.editarDadosForne){
        if(this.fornecedorForm.valid){
          this.fornecedorService.postFornecedor(this.fornecedorForm.value)
          .subscribe({
            next:(res)=>{
              alert("Fornecedor cadastrado com sucesso")
              this.fornecedorForm.reset();
              this.dialogRef.close('save');
            },
            error:(err)=>{
              alert("Erro ao cadastrar fornecedor")
            }
          })
         }
      }else{
        this.atualizarFornecedor();
      }

    }

    atualizarFornecedor(){

      this.fornecedorService.putFornecedor(this.fornecedorForm.value, this.editarDadosForne._id)
      .subscribe({
        next:(res)=>{
          alert("Fornecedor atualizado com sucesso")
          this.fornecedorForm.reset();
          this.dialogRef.close('update');
        },
        error:(err)=>{
          alert("Erro ao atualizar fornecedor")
        }
      })
    }



  }









