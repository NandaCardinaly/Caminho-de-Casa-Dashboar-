import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getEvento(){

    return this.http.get<any>("http://localhost:5000/eventos/");

 }

   postEvento(data: any){

      return this.http.post<any>("http://localhost:5000/eventos/", data);
   }

   putEvento(data: any, id: string){
       return this.http.put<any>("http://localhost:5000/eventos/"+id, data);
   }

   deleteEvento(id: string){
     return this.http.delete<any>("http://localhost:5000/eventos/"+id);
 }

}
