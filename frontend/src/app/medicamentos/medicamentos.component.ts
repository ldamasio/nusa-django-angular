import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  template: `
    <input type="text" placeholder="Nome do Paciente">
    Medicamentos: 
    <select name="drugs" id="drugs" multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <h1>Lista de Receitas Médicas</h1>
    <mat-slide-toggle>Filtrar por paciente</mat-slide-toggle>
    <br>
    <input type="text" placeholder="Nome do Paciente">
    <br>
    Tabela de receitas.
    `,
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent {

}
