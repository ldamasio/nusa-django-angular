import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, MatIconModule, MatButtonModule],
  template: `
    <a routerLink="/receitas" routerLinkActive="active" ariaCurrentWhenActive="page">
      <button mat-fab extended >
        <mat-icon>medical_information</mat-icon>
        Receitas Médicas
      </button>
    </a>
    <a routerLink="/medicamentos" routerLinkActive="active" ariaCurrentWhenActive="page">
      <button mat-fab extended>
        <mat-icon>medication</mat-icon>
        Medicamentos
      </button>
    </a>
    
    <a routerLink="/pacientes" routerLinkActive="active" ariaCurrentWhenActive="page">
      <button mat-fab extended>
        <mat-icon>personal_injury</mat-icon>
        Pacientes
      </button>
    </a>

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
