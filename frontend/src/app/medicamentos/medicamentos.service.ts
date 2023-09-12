import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { IMedicamentos } from './medicamentos.interface';

@Injectable({
  providedIn: 'root'
})

export class MedicamentosService {

  private url = environment.apiPath;

  constructor(private httpClient: HttpClient) { 
  }

  obterTodosMedicamentos() {
    return this.httpClient.get<IMedicamentos[]>(`${this.url}medicamentos`)
  }

  cadastrarMedicamento(medicamento: IMedicamentos) {
    let headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post<IMedicamentos>(
      `${this.url}medicamentos`, 
      medicamento,
      { headers }
    )
  }

}
