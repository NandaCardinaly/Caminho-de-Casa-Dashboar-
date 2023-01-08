import { Component, Inject } from '@angular/core';
import { BebidasService } from 'src/app/services/bebidas.service';
import { ComidasService } from 'src/app/services/comidas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cardapio',
  templateUrl: './dialog-cardapio.component.html',
  styleUrls: ['./dialog-cardapio.component.css']
})

export class DialogCardapioComponent {

  cardapioForm!: FormGroup;
  qualOper: string = "Salvar";
  categoria: string = "";
  url = " ";


constructor(
  private formBuilder: FormBuilder,
  private comidaService: ComidasService,
  private bebidaService: BebidasService,
  @Inject(MAT_DIALOG_DATA) public editarDadosCarda: any,
  private dialogRef: MatDialogRef<DialogCardapioComponent>
)
{ this.gerarForm();}


gerarForm(){
  this.cardapioForm = this.formBuilder.group({
    nome: ['', Validators.required],
    foto: [''],
    descricao: ['', Validators.required],
    preco: ['', Validators.required]
  })
    if(this.editarDadosCarda){
      this.cardapioForm.controls['nome'].setValue(this.editarDadosCarda.nome);
      this.cardapioForm.controls['foto'].setValue(this.editarDadosCarda.foto);
      this.cardapioForm.controls['descricao'].setValue(this.editarDadosCarda.descricao);
      this.cardapioForm.controls['preco'].setValue(this.editarDadosCarda.preco);

      this.qualOper ="Salvar alterações";

    }
  }

 cadastrarItemNoCardapio(){
    if(this.categoria=="comida"){
     this.cadastrarComida();
    } else{
    this.cadastrarBebida();
    }

  }

  cadastrarComida(){
    if(!this.editarDadosCarda){
      if(this.cardapioForm.valid){
        this.comidaService.postComida(this.cardapioForm.value)
        .subscribe({
          next:(res)=>{
            alert("Comida cadastrada com sucesso")
            this.cardapioForm.reset();
            this.dialogRef.close('save');
          },
          error:(err)=>{
            alert("Erro ao cadastrar a comida")
          }
        })
       }
    }else{
      this.atualizarComida();
    }

  }


  cadastrarBebida(){
    if(!this.editarDadosCarda){
      if(this.cardapioForm.valid){
        this.bebidaService.postBebida(this.cardapioForm.value)
        .subscribe({
          next:(res)=>{
            alert("Bebida cadastrada com sucesso")
            this.cardapioForm.reset();
            this.dialogRef.close('save');
          },
          error:(err)=>{
            alert("Erro ao cadastrar a bebida")
          }
        })
       }
    }else{
      this.atualizarBebida();
    }

  }


  atualizarComida(){
    this.comidaService.putComida(this.cardapioForm.value, this.editarDadosCarda._id)
    .subscribe({
      next:(res)=>{
        alert("Comida atualizada com sucesso")
        this.cardapioForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        alert("Erro ao atualizar comida")
      }
    })
  }

  atualizarBebida(){
    this.bebidaService.putBebida(this.cardapioForm.value, this.editarDadosCarda._id)
    .subscribe({
      next:(res)=>{
        alert("Bebida atualizada com sucesso")
        this.cardapioForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        alert("Erro ao atualizar bebida")
      }
    })
  }





}
