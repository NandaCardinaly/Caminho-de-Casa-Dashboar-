import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor(private http: HttpClient) {}


  getFornecedor(){

   return this.http.get<any>("http://localhost:5000/fornecedores/");

}

  postFornecedor(data: any){

     return this.http.post<any>("http://localhost:5000/fornecedores/", data);
  }


  putFornecedor(data: any, id: string){
      return this.http.put<any>("http://localhost:5000/fornecedores/"+id, data);
  }

  deleteFornecedor(id: string){
    return this.http.delete<any>("http://localhost:5000/fornecedores/"+id);
}

}
