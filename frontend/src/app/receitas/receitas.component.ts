import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-receitas',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, NgFor],
  template: `
  <form class="form">

    <mat-form-field class="full-width">
      <mat-label>Paciente</mat-label>
      <input matInput placeholder="" value="">
    </mat-form-field>

    <mat-form-field class="full-width">
      <mat-label>Medicamentos</mat-label>
      <mat-select [formControl]="drug" multiple>
        <mat-option *ngFor="let drug of drugList" [value]="drug">{{drug}}</mat-option>
      </mat-select>
    </mat-form-field>
    

      <h1>Lista de Receitas Médicas</h1>
      <mat-slide-toggle>Filtrar por paciente</mat-slide-toggle>
      <br>
      <input type="text" placeholder="Nome do Paciente">
    </form>
    <br>
    Tabela de receitas.
  `,
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {
  drug = new FormControl('');
  drugList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
