import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentosService } from './medicamentos.service';
import { IMedicamentos } from './medicamentos.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})

export class MedicamentosComponent {

  medicamentos$ = new Observable<IMedicamentos[]>();

  constructor(private medicamentosService: MedicamentosService) {
    this.getMedicamentos();
  }

  getMedicamentos() {   
    this.medicamentos$ = this.medicamentosService.obterTodosMedicamentos();
  }

}
