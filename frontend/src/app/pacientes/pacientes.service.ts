import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { IPacientes } from './pacientes.interface';

@Injectable({
  providedIn: 'root'
})

export class PacientesService {

  private url = environment.apiPath;

  constructor(private httpClient: HttpClient) { 
  }

  obterTodosPacientes() {
    return this.httpClient.get<IPacientes[]>(`${this.url}pacientes`)
  }

  cadastrarPaciente(paciente: IPacientes) {
    let headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post<IPacientes>(
      `${this.url}pacientes`, 
      paciente,
      { headers }
    )
  }

}
