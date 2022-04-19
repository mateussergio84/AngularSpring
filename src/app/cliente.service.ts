import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL = 'http://localhost:8080/clientes';


  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.clienteURL}`);
  }
}
