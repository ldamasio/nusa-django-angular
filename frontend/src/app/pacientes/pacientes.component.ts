import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesService } from './pacientes.service';
import { IPacientes } from './pacientes.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})

export class PacientesComponent {

  pacientes$ = new Observable<IPacientes[]>();

  constructor(private pacientesService: PacientesService) {
    this.getPacientes();
  }

  getPacientes() {   
    this.pacientes$ = this.pacientesService.obterTodosPacientes();
  }

}
