import { Component, Inject } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { AgendamentosService } from 'src/app/services/agendamentos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-eventos',
  templateUrl: './dialog-eventos.component.html',
  styleUrls: ['./dialog-eventos.component.css']
})
export class DialogEventosComponent {

  eventoForm!: FormGroup;
  qualOper: string = "Salvar";
  url = " ";

  constructor(
    private formBuilder: FormBuilder,
    private eventoService: EventosService,
    @Inject(MAT_DIALOG_DATA) public editarDadosEve: any,
    private dialogRef: MatDialogRef<DialogEventosComponent>
  ){
      this.gerarForm();
  }

  gerarForm(): void {
    this.eventoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFim: ['', Validators.required],
      foto: ['']

    })
    if(this.editarDadosEve){
    this.eventoForm.patchValue(this.editarDadosEve);
    this.qualOper ="Salvar alterações";
    }
  }


  cadastrarEvento(){
    if(!this.editarDadosEve){
      if(this.eventoForm.valid){
        this.eventoService.postEvento(this.eventoForm.value)
        .subscribe({
          next:(res)=>{
            alert("Evento cadastrado com sucesso")
            this.eventoForm.reset();
            this.dialogRef.close('save');
          },
          error:(err)=>{
            alert("Erro ao cadastrar evento")
          }
        })
       }
    }else{
      this.atualizarEvento();
    }

  }


  atualizarEvento() {
    this.eventoService.putEvento(this.eventoForm.value, this.editarDadosEve._id)
    .subscribe({
      next:(res)=>{
        alert("Evento atualizado com sucesso")
        this.eventoForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        alert("Erro ao atualizar evento")
      }
    })
  }

}
