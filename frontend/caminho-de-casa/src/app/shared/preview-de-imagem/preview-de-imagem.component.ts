import { Component, OnInit,  Inject  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-de-imagem',
  templateUrl: './preview-de-imagem.component.html',
  styleUrls: ['./preview-de-imagem.component.css']
})
export class PreviewDeImagemComponent implements OnInit {

  genericForm !: FormGroup;


  constructor( @Inject(MAT_DIALOG_DATA) public fotoTransfer : any, private dialogRef: MatDialogRef<PreviewDeImagemComponent>){}

  ngOnInit(): void {
    this.genericForm.controls['foto'].setValue(this.fotoTransfer.foto);
    this.genericForm.controls['nome'].setValue(this.fotoTransfer.nome);

  }



}
