import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) {}


  getFuncionario(){

   return this.http.get<any>("http://localhost:5000/funcionarios/");

}

  postFuncionario(data: any){

     return this.http.post<any>("http://localhost:5000/funcionarios/", data);
  }

  putFuncionario(data: any, id: string){
      return this.http.put<any>("http://localhost:5000/funcionarios/"+id, data);
  }

  deleteFuncionario(id: string){
    return this.http.delete<any>("http://localhost:5000/funcionarios/"+id);
}




}
