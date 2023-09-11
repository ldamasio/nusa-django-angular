import { Component } from '@angular/core';
import { environment } from '../environment/environment';
import { PacienteService } from './paciente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private pacienteService: PacienteService)
  {}

  obterTodosPacientes(){
    this.pacienteService.obterTodos()
    .then(pacientes => console.log(pacientes))
    .catch(error => console.log(error));
  }

  obterSomenteUm() {
    this.pacienteService.obterPorId(4)
    .then(paciente => console.log(paciente?.name))
    .catch(error => console.log(error))
  }
}
