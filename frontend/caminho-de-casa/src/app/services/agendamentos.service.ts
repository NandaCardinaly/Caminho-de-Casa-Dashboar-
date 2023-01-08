import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  constructor(private http: HttpClient) { }

  getAgendamento(){

    return this.http.get<any>("http://localhost:5000/agendamentos/");

 }

   postAgendamento(data: any){

      return this.http.post<any>("http://localhost:5000/agendamentos/", data);
   }

   putAgendamento(data: any, id: string){
       return this.http.put<any>("http://localhost:5000/agendamentos/"+id, data);
   }

   deleteAgendamento(id: string){
     return this.http.delete<any>("http://localhost:5000/agendamentos/"+id);
 }
}
