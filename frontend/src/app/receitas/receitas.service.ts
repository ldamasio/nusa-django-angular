import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { IReceitas } from './receitas.interface';

@Injectable({
  providedIn: 'root'
})

export class ReceitasService {

  private url = environment.apiPath;

  constructor(private httpClient: HttpClient) { 
  }

  obterTodasReceitas() {
    return this.httpClient.get<IReceitas[]>(`${this.url}receitas`)
  }

}
