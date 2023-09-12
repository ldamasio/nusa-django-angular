import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesService } from './pacientes.service';
import { IPacientes } from './pacientes.interface';
import {MatTableModule} from '@angular/material/table'; 

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes: IPacientes[] = []

  constructor(private pacientesService: PacientesService) {
    this.getPacientes();
  }


  getPacientes(){
    this.pacientesService.obterTodosPacientes()
    .subscribe(pacientes => this.pacientes = pacientes)
  }
  
  
  // getPaciente() {
  //   this.pacientesService.obterPacientePorId(4)
  //   .subscribe(pacientes => this.pacientes = pacientes)
  //   .then(paciente => console.log(paciente?.name))
  //   .catch(error => console.log(error))
  // }
}
