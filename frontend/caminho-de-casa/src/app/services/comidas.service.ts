import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComidasService {

constructor(private http: HttpClient){}

getComida(){

  return this.http.get<any>("http://localhost:5000/comidas/");

}

 postComida(data: any){

    return this.http.post<any>("http://localhost:5000/comidas/", data);
 }

 putComida(data: any, id: string){
     return this.http.put<any>("http://localhost:5000/comidas/"+id, data);
 }

 deleteComida(id: string){
   return this.http.delete<any>("http://localhost:5000/comidas/"+id);
}






   }

