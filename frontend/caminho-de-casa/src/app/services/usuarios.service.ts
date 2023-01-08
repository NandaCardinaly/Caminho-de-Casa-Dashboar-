import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

constructor(private http: HttpClient) { }

getUsuario(){
  return this.http.get<any>("http://localhost:5000/usuarios/");
}

 postUsuario(data: any){
    return this.http.post<any>("http://localhost:5000/usuarios/", data);
 }


 putUsuario(data: any, id: string){
     return this.http.put<any>("http://localhost:5000/usuarios/"+id, data);
 }

 deleteUsuario(id: string){
   return this.http.delete<any>("http://localhost:5000/usuarios/"+id);
}


}
