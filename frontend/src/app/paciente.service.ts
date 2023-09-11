import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environment/environment';
import { IPacientes } from './IPacientes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpClient: HttpClient) { }

  obterTodos() {
    return this.httpClient.get<IPacientes[]>(`${API_PATH}pacientes`).toPromise();
  }
  
  obterPorId(id: number){
    return this.httpClient.get<IPacientes>(`${API_PATH}paciente/${id}`).toPromise();
  }

}
