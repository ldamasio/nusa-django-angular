import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button mat-fab extended>
      <mat-icon>medical_information</mat-icon>
      Receitas Médicas
    </button>
    <button mat-fab extended>
      <mat-icon>medication</mat-icon>
      Medicamentos
    </button>
    <button (click)="obterTodosPacientes()" mat-fab extended>
      <mat-icon>personal_injury</mat-icon>
      Pacientes
    </button>
    Olá, User
    <button mat-fab extended>
      <mat-icon>account_circle</mat-icon>
      Configurações da Conta  
    </button>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
