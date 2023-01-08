import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

constructor(private http: HttpClient){}

getBebida(){

  return this.http.get<any>("http://localhost:5000/bebidas/");

}

 postBebida(data: any){

    return this.http.post<any>("http://localhost:5000/bebidas/", data);
 }

 putBebida(data: any, id: string){
     return this.http.put<any>("http://localhost:5000/bebidas/"+id, data);
 }

 deleteBebida(id: string){
   return this.http.delete<any>("http://localhost:5000/bebidas/"+id);
}

}
